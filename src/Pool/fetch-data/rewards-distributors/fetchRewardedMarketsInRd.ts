// Ethers
import { Contract } from "@ethersproject/contracts"
import { Provider } from '@ethersproject/abstract-provider'
import iRewardsDistributor from "../../../Interfaces/iRewardsDistributor"

/**
 * @param rdAddress - Address of the reward distributor to query. 
 * @returns - An array of addresses for all markets rewarded by the given reward distributor.
 */
export async function fetchRewardedMarketsInRd(
    rdAddress : string,
    provider: Provider
): Promise<string[]> {
    const rdContract = new Contract(
      rdAddress,
      iRewardsDistributor,
      provider
    )

    return await rdContract.callStatic.getAllMarkets()
}