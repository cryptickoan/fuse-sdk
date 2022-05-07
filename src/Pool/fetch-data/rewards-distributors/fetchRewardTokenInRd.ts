// Ethers
import { Contract } from "@ethersproject/contracts"
import iRewardsDistributor from "../../../Interfaces/iRewardsDistributor"
import { Provider } from '@ethersproject/abstract-provider'

/**
 * @param rdAddress - Address of the reward distributor to query. 
 * @returns - The address of the rewarded token (ERC20). String.
 */
export async function fetchRewardTokenInRd(
    rdAddress : string,
    provider: Provider
  ): Promise<string> {
    const rdContract = new Contract(
      rdAddress,
      iRewardsDistributor,
      provider
    )

    return await rdContract.callStatic.rewardToken()
}