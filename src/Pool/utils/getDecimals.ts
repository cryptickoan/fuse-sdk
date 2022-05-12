// Ethers
import { BigNumber } from "@ethersproject/bignumber"
import { Provider } from '@ethersproject/abstract-provider'
import { ERC20__factory } from "../../abis/types"

/**
 * @param provider - An initiated ethers provider.
 * @param tokenAddress - Address of the token to get decimals for.
 * @returns - The decimals of given token.
 */
export async function getDecimals(
    provider: Provider,
    tokenAddress: string
): Promise<BigNumber> {
    const erc20Contract = ERC20__factory.connect(tokenAddress, provider)

    return await erc20Contract.callStatic.decimals()
} 