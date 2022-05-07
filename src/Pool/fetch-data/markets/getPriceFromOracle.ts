// Ethers
import { BigNumber } from "@ethersproject/bignumber"
import { Contract } from "@ethersproject/contracts"
import iMPO from "../../../Interfaces/iMPO"
import { Provider } from '@ethersproject/abstract-provider'

/**
 * @param tokenAddress - Token address (ERC20) to look for.
 * @param oracleAddress - The comptroller's oracle address. Comes from fetchFusePoolData.
 * @returns - Price of the given token based on the comptroller's oracle feed.
 */
export function getPriceFromOracle(
    tokenAddress: string,
    oracleAddress: string,
    provider: Provider
): Promise<BigNumber> {
    // We need to call the MPO to get price of the given asset.
    const oracleContract = new Contract(
            oracleAddress,
            iMPO,
            provider
    )

    return oracleContract.callStatic.price(tokenAddress)      
}