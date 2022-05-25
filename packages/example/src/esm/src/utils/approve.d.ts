import { BigNumber } from '@ethersproject/bignumber';
import { Web3Provider, JsonRpcProvider } from '@ethersproject/providers';
/**
 * This function will approve given value/MaxUint256 to spender.
 * @param provider - An initiated ethers provider.
 * @param tokenAddress - The token to check for.
 * @param owner - Owner of tokens to be spent.
 * @param spender - Spender of the tokens.
 * @param value - Amount to be spent, as a string. Optional. If its not given MaxUint256 will be used.
 * @param decimals - Decimals of the underlying ERC20. i.e DAI = 18, USDC = 6. Optional. Will be fetched if omitted.
 */
export declare function approve(provider: Web3Provider | JsonRpcProvider, tokenAddress: string, owner: string, spender: string, value?: string, decimals?: BigNumber): Promise<boolean | any>;
