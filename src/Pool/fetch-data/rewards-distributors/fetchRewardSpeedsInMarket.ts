// Ethers
import { BigNumber } from "@ethersproject/bignumber"
import { Provider } from '@ethersproject/abstract-provider'
import { RewardsDistributor__factory } from "../../../abis/types"

/**
 * @param provider - An ethers provider.
 * @param rdAddress - The rewards distributor address.
 * @param marketAddress - Address of market to query.
 * @param type - String. supply or borrow.
 * @returns - BigNumber representation of supply/borrow reward speed by block. 
 */
export async function fetchRewardSpeedInMarket(
    provider: Provider,
    rdAddress: string,
    marketAddress: string,
    type: 'supply' | 'borrow',
): Promise<BigNumber> {
    const rdContract = RewardsDistributor__factory.connect(rdAddress, provider)

    return type === 'supply' 
    ? rdContract.callStatic.compSupplySpeeds( marketAddress )
    : rdContract.callStatic.compBorrowSpeeds( marketAddress )
}