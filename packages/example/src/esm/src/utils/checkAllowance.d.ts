import { BigNumber } from '@ethersproject/bignumber';
import { Web3Provider, JsonRpcProvider } from '@ethersproject/providers';
/**
 * This function will check current allowance for the given spender.
 * @param provider - An initiated ethers provider.
 * @param tokenAddress - The token to check for.
 * @param owner - Owner of tokens to be spent.
 * @param spender - Spender of the tokens.
 * @param value - Amount to be spent, as a string.
 * @param approve - If true this function will return an awaitable tx to approve spender the MAX amount.
 * @param decimals - Decimals of the underlying ERC20. i.e DAI = 18, USDC = 6.
 */
export declare function checkAllowance(provider: Web3Provider | JsonRpcProvider, tokenAddress: string, owner: string, spender: string, value: string, approve: boolean, // If approve is true and value is greater than allowance, an awaitable tx to approve will be returned otherwise a boolean will be returned.
decimals?: BigNumber): Promise<boolean | any>;
