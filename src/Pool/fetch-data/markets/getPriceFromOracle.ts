// Ethers
import { BigNumber } from "@ethersproject/bignumber"
import { Provider } from '@ethersproject/abstract-provider'
import { MPO__factory } from "../../../abis/types"

/**
 * @param tokenAddress - Token address (ERC20) to look for.
 * @param oracleAddress - The comptroller's oracle address. Comes from fetchFusePoolData.
 * @param provider - An ether provider.
 * @returns - Price of the given token based on the comptroller's oracle feed.
 */
export function getPriceFromOracle(
    provider: Provider,
    tokenAddress: string,
    oracleAddress: string
): Promise<BigNumber> {
    // We need to call the MPO to get price of the given asset.
    const oracleContract = MPO__factory.connect(oracleAddress, provider)

    return oracleContract.callStatic.price(tokenAddress)      
}