// Ethers
import { Interface } from "@ethersproject/abi"
import { BigNumber } from "@ethersproject/bignumber"
import { Contract } from "@ethersproject/contracts"
import iRewardsDistributor from "../../../Interfaces/iRewardsDistributor"

/**
 * @param rdAddress - The rewards distributor address.
 * @param marketAddress - Address of market to query.
 * @param type - String. supply or borrow.
 * @returns - BigNumber representation of supply/borrow reward speed by block. 
 * @note - It can be made a regular number by parsing it with the rewarded token's decimals. ethers.utils.parseUnits(RewardSpeedInMarket, market.underlyingDecimals)
 */
export async function fetchRewardSpeedInMarket(
    rdAddress: string,
    marketAddress: string,
    type: 'supply' | 'borrow'
): Promise<BigNumber> {
    const rdContract = new Contract(
            rdAddress,
            iRewardsDistributor,
            this._provider
    )

    return type === 'supply' 
    ? rdContract.callStatic.compSupplySpeeds( marketAddress )
    : rdContract.callStatic.compBorrowSpeeds( marketAddress )
}