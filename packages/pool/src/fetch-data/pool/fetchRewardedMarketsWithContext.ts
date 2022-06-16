// Ethers
import { Provider } from '@ethersproject/abstract-provider'
import { formatEther } from 'ethers/lib/utils'

// Contracts
import { Comptroller__factory } from '@fuse-v1/core'
import { FlywheelStaticRewards__factory, FuseFlywheelCore__factory } from '@fuse-v1/flywheel'
import { MasterPriceOracle__factory } from '@fuse-v1/oracles'

// SDK Utils
import { getEthUsdPriceBN } from '@fuse-v1/utils.sdk'


/**
 * @param comptrollerAddress - Address of comptroller to query.
 * @returns - An array of addresses of available reward distributors in given comptroller.
 */
export async function fetchRewardedMarketsWithContext(
    comptrollerAddress: string,
    oracleAddress: string,
    provider: Provider
  ): Promise<any> {
    // 1. Get all rewards distributors
    const comptrollerContract = Comptroller__factory.connect(comptrollerAddress, provider)
    const availableRds = await comptrollerContract.callStatic.getRewardsDistributors()


    let rewardedMarkets: any = {supply: {}, borrow:{}}

    for (const rewardsDistributor of availableRds) {
      const flywheelContract = FuseFlywheelCore__factory.connect(rewardsDistributor, provider)

      try {
        const isFlywheel = await flywheelContract.callStatic.isFlywheel();
        if (isFlywheel) {
          const rewardedStrategies = await flywheelContract.callStatic.getAllStrategies()
          
          // If flywheel is rewarding any strategies
          if (rewardedStrategies.length > 0) {
            // Get Flywheel general info

            // 1. This will be true if flywheel is incentivizing supply
            const incentivizingSupply = await flywheelContract.callStatic.rewardingSupply()

            // 2. Rewarded token info to get APY
            const rewardedToken = await flywheelContract.callStatic.rewardToken()
            const oracleContract = MasterPriceOracle__factory.connect(oracleAddress, provider)
            const rewardedTokenPrice = await oracleContract.callStatic.price(rewardedToken)
            const ethPrice = await getEthUsdPriceBN()
            const rewardedTokenPriceUSD = (parseFloat(formatEther(rewardedTokenPrice)) * parseFloat(formatEther(ethPrice)))

            // 3. Prepare rewards module contract
            const rewardsModule = await flywheelContract.callStatic.flywheelRewards()
            const rewardsModuleContract = FlywheelStaticRewards__factory.connect(rewardsModule, provider)
          
            // For every rewarded strategy get its reward info
            for (const strategy of rewardedStrategies) {
              const rewardsInfo = await rewardsModuleContract.callStatic.rewardsInfo(strategy)

              if (incentivizingSupply) {
                rewardedMarkets.supply[strategy] = rewardedMarkets.supply[strategy] ?? {}
                rewardedMarkets.supply[strategy][rewardsDistributor] = {
                  isFlywheel,
                  incentivizingSupply,
                  rewardsDistributorAddress: rewardsDistributor,
                  rewardsPerSecondInUSD: parseFloat(formatEther(rewardsInfo.rewardsPerSecond)) * rewardedTokenPriceUSD,
                  rewardedToken,
                }
              }

              if (!incentivizingSupply) {
                rewardedMarkets.borrow[strategy] = rewardedMarkets.borrow[strategy]  ?? {}
                rewardedMarkets.borrow[strategy][rewardsDistributor] = {
                  isFlywheel,
                  incentivizingSupply,
                  rewardsDistributorAddress: rewardsDistributor,
                  rewardsPerSecondInUSD: parseFloat(formatEther(rewardsInfo.rewardsPerSecond)) * rewardedTokenPriceUSD,
                  rewardedToken,
                }
              }
              
            }
          }
        }
        
      } catch (e) {
        // If not flywheel, check for RD
        // try {
        //   const isRD = await flywheelContract.callStatic.isRewardsDistributor();
        //   if (isRD) rewardsDistributors.push(rewardsDistributor)
        //   continue

        // } catch (e) {
        //   console.log(e)
        //   continue

        // }
        console.log(e)
      }
    }
    
    // Return a list of all rewarded markets with their respective information
    return rewardedMarkets
}











  

