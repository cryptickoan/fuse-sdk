// Ethers
import { Interface } from "@ethersproject/abi"
import { BigNumber } from "@ethersproject/bignumber"
import { Contract } from "@ethersproject/contracts"
import { Provider } from '@ethersproject/abstract-provider'
import iERC20 from "../../../Interfaces/iERC20"

/**
 * @param tokenAddress - Address of the token to get decimals for.
 * @param provider - An initiated ethers provider.
 * @returns - The decimals of given token.
 */
export async function getDecimals(
    tokenAddress: string,
    provider: Provider
): Promise<BigNumber> {
    const erc20Contract = new Contract(
        tokenAddress,
        iERC20,
        provider
    )

    return await erc20Contract.callStatic.decimals()
} 