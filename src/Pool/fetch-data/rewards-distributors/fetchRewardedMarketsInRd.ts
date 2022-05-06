// Ethers
import { Contract } from "@ethersproject/contracts"
import iRewardsDistributor from "../../../Interfaces/iRewardsDistributor"

/**
 * @param rdAddress - Address of the reward distributor to query. 
 * @returns - An array of addresses for all markets rewarded by the given reward distributor.
 */
export async function fetchRewardedMarketsInRd(
    rdAddress : string,
): Promise<string[]> {
    const rdContract = new Contract(
      rdAddress,
      iRewardsDistributor,
      this._provider
    )

    return await rdContract.callStatic.getAllMarkets()
}