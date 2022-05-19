// Ethers
import { Provider } from '@ethersproject/abstract-provider'
import { WeiPerEther } from '@ethersproject/constants'
import { formatEther, parseEther } from 'ethers/lib/utils'

// Types
import { Comptroller__factory, FlywheelStaticRewards__factory, Flywheel__factory, FuseFlywheelCore__factory, MPO__factory } from "../../../abis/types"
import { getEthUsdPriceBN } from '../../../utils'

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


    let rewardedMarkets: any = {}

    for (const rewardsDistributor of availableRds) {
      const flywheelContract = FuseFlywheelCore__factory.connect(rewardsDistributor, provider)

      try {
        const isFlywheel = await flywheelContract.callStatic.isFlywheel();
        if (isFlywheel) {
          const rewardedStrategies = await flywheelContract.callStatic.getAllStrategies()
          const rewardsModule = await flywheelContract.callStatic.flywheelRewards()
          const incentivizingSupply = await flywheelContract.callStatic.rewardingSupply()
          const rewardedToken = await flywheelContract.callStatic.rewardToken()

          const oracleContract = await MPO__factory.connect(oracleAddress, provider)
          const rewardedTokenPrice = await oracleContract.callStatic.price(rewardedToken)
          const ethPrice = await getEthUsdPriceBN()
          const rewardedTokenPriceUSD = (parseFloat(formatEther(rewardedTokenPrice)) * parseFloat(formatEther(ethPrice)))

          const rewardsModuleContract = FlywheelStaticRewards__factory.connect(rewardsModule, provider)
          if (rewardedStrategies.length > 0) {
            for (const market of rewardedStrategies) {
              const rewardsInfo = await rewardsModuleContract.callStatic.rewardsInfo(market)
              rewardedMarkets[market] = {
                isFlywheel,
                rewardsDistributor,
                rewardsPerSecond: rewardsInfo.rewardsPerSecond,
                rewardsPerSecondInUSD: parseFloat(formatEther(rewardsInfo.rewardsPerSecond)) * rewardedTokenPriceUSD,
                incentivizingSupply,
                rewardedToken,
                rewardedTokenPrice,
                rewardedTokenPriceUSD,
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











  

