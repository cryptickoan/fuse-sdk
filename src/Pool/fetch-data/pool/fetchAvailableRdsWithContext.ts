// Ethers
import { Contract } from "@ethersproject/contracts"
import iComptroller from "../../../Interfaces/iComptroller"

// Interface
import iFlywheel from "../../../Interfaces/iFlywheel"

// Types
import { RewardsDistributorData } from "../../types"

/**
 * @param comptrollerAddress - Address of comptroller to query.
 * @returns - An array of addresses of available reward distributors in given comptroller.
 */
export async function fetchAvailableRdsWithContext(
    comptrollerAddress: string,
  ): Promise<RewardsDistributorData[]> {
    const comptrollerContract = new Contract(
      comptrollerAddress,
      iComptroller,
      this._provider
    )

    const availableRds = await comptrollerContract.callStatic.getRewardsDistributors()

    const rewardsDistributorWithContext: RewardsDistributorData[] = await Promise.all(availableRds
    .map(async (rdAddress: string) => {
      const rdContract = new Contract(
        rdAddress,
        iFlywheel,
        this._provider
      )

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











  

