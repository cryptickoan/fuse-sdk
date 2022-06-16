// Ethers
import { Contract } from "@ethersproject/contracts"
import { Provider } from '@ethersproject/abstract-provider'
import { RewardsDistributor__factory } from "../../../abis/types"

/**
 * @param rdAddress - Address of the reward distributor to query. 
 * @returns - An array of addresses for all markets rewarded by the given reward distributor.
 */
export async function fetchRewardedMarketsInRd(
    rdAddress : string,
    provider: Provider
): Promise<string[]> {
    const rdContract = RewardsDistributor__factory.connect(rdAddress, provider)

    return await rdContract.callStatic.getAllMarkets()
}