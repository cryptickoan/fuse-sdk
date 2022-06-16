// Ethers
import { Provider } from '@ethersproject/abstract-provider'

// Contracts
import { RewardsDistributorDelegate__factory } from "@fuse-v1/core"

/**
 * @param rdAddress - Address of the reward distributor to query. 
 * @returns - The address of the rewarded token (ERC20). String.
 */
export async function fetchRewardTokenInRd(
    rdAddress : string,
    provider: Provider
  ): Promise<string> {
    const rdContract = RewardsDistributorDelegate__factory.connect(rdAddress, provider)

    return await rdContract.callStatic.rewardToken()
}