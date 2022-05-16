// Ethers
import { Provider } from '@ethersproject/abstract-provider'

// Types
import { Comptroller__factory, Flywheel__factory } from "../../../abis/types"

/**
 * @param comptrollerAddress - Address of comptroller to query.
 * @returns - An array of addresses of available reward distributors in given comptroller.
 */
export async function fetchAvailableRdsWithContext(
    comptrollerAddress: string,
    provider: Provider
  ): Promise<any> {
    const comptrollerContract = Comptroller__factory.connect(comptrollerAddress, provider)

    const availableRds = await comptrollerContract.callStatic.getRewardsDistributors()

    let flywheels: string[] = []
    let rewardsDistributors: string[] = []

    for (const rewardsDistributor of availableRds) {
      const rdContract = Flywheel__factory.connect(rewardsDistributor, provider)

      try {
        const isFlywheel = await rdContract.callStatic.isFlywheel();
        if (isFlywheel) flywheels.push(rewardsDistributor) 
        continue
        
      } catch {
        // If not flywheel, check for RD
        try {
          const isRD = await rdContract.callStatic.isRewardsDistributor();
          if (isRD) rewardsDistributors.push(rewardsDistributor)
          continue

        } catch (e) {
          console.log(e)
          continue

        }
      }
    }


    
    let rewardsDistributorWithContext: any = {}

    if (flywheels.length > 0) {
      rewardsDistributorWithContext.flywheels = flywheels
    }

    if (rewardsDistributors.length > 0) {
      rewardsDistributorWithContext.rewardsDistributors = rewardsDistributors
    }
    

    return rewardsDistributorWithContext
}











  

