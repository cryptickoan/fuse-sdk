import { BigNumber } from "@ethersproject/bignumber";
import { Provider } from '@ethersproject/abstract-provider';
/**
 * @param provider - An initiated ethers provider.
 * @param tokenAddress - Address of the token to get decimals for.
 * @returns - The decimals of given token.
 */
export declare function getDecimals(provider: Provider, tokenAddress: string): Promise<BigNumber>;
