import { BigNumber } from '@ethersproject/bignumber';
import { Provider } from '@ethersproject/abstract-provider';
/**
 *
 * @param tokenAddress - Token address to get balance from. (ERC20)
 * @param address - User's address to use. If not present the provider's user address will be used.
 * @param parse - This is a boolean. If true, the function will return an integer, otherwise a BigNumber will be returned.
 * @returns - The user's balance. Number or BigNumber.
 */
export declare function fetchTokenBalance(provider: Provider, tokenAddress: string | undefined, address: string, parse?: boolean): Promise<number | BigNumber>;
