// Ethers
import { Contract } from "@ethersproject/contracts"
import { Provider } from '@ethersproject/abstract-provider'

// Types
import { RewardsDistributorData } from "../../types"
import { Comptroller__factory, Flywheel__factory } from "../../../abis/types"

/**
 * @param provider - An ethers provider.
 * @param comptrollerAddress - Address of comptroller to query.
 * @returns - An array of addresses of available reward distributors in given comptroller.
 */
export async function fetchAvailableRdsWithContext(
    provider: Provider,
    comptrollerAddress: string,
  ): Promise<RewardsDistributorData[]> {
    const comptrollerContract = Comptroller__factory.connect(comptrollerAddress, provider)

    const availableRds = await comptrollerContract.callStatic.getRewardsDistributors()

    const rewardsDistributorWithContext: RewardsDistributorData[] = await Promise.all(availableRds
    .map(async (rdAddress: string) => {
      const rdContract = Flywheel__factory.connect(rdAddress, provider)

      let isFlywheel = false;
      let isRewardsDistributor = false;
      // Check for Flywheel or isRewardsDistributor
      try { 
        isFlywheel = await rdContract.callStatic.isFlywheel();
      } catch {
          // If not flywheel, check for RD
          try {
            isRewardsDistributor = await rdContract.callStatic.isRewardsDistributor();
          } catch {
            return
          }
      }

  
      const data: RewardsDistributorData = {
        address: rdAddress,
        isRewardsDistributor,
        isFlywheel
      }
      return data
    }))
    

    return rewardsDistributorWithContext
}











  

