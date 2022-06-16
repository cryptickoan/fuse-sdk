// Ethers
import { Provider } from '@ethersproject/abstract-provider'

// Contracts
import { RewardsDistributorDelegate__factory } from "@fuse-v1/core"

/**
 * @param rdAddress - Address of the reward distributor to query. 
 * @returns - An array of addresses for all markets rewarded by the given reward distributor.
 */
export async function fetchRewardedMarketsInRd(
    rdAddress : string,
    provider: Provider
): Promise<string[]> {
    const rdContract = RewardsDistributorDelegate__factory.connect(rdAddress, provider)

    return await rdContract.callStatic.getAllMarkets()
}