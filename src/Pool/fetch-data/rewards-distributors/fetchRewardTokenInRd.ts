// Ethers
import { Contract } from "@ethersproject/contracts"
import iRewardsDistributor from "../../../Interfaces/iRewardsDistributor"

/**
 * @param rdAddress - Address of the reward distributor to query. 
 * @returns - The address of the rewarded token (ERC20). String.
 */
export async function fetchRewardTokenInRd(
    rdAddress : string,
  ): Promise<string> {
    const rdContract = new Contract(
      rdAddress,
      iRewardsDistributor,
      this._provider
    )

    return await rdContract.callStatic.rewardToken()
}