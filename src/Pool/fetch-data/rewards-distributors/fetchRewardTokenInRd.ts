// Ethers
import { Contract } from "@ethersproject/contracts"
import { Provider } from '@ethersproject/abstract-provider'
import { RewardsDistributor__factory } from "../../../abis/types"

/**
 * @param provider - An ethers provider. 
 * @param rdAddress - Address of the reward distributor to query. 
 * @returns - The address of the rewarded token (ERC20). String.
 */
export async function fetchRewardTokenInRd(
    provider: Provider,
    rdAddress : string,
  ): Promise<string> {
    const rdContract = RewardsDistributor__factory.connect(rdAddress, provider)

    return await rdContract.callStatic.rewardToken()
}