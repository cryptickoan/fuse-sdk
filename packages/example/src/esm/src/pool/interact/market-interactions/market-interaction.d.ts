import { BigNumber } from "@ethersproject/bignumber";
import { Web3Provider, JsonRpcProvider } from '@ethersproject/providers';
import { marketInteractionType } from "../../types";
/**
 * @param provider - An initiated ethers provider.
 * @param action - Type of action to perform. i.e borrow, withdraw, repay.
 * @param cTokenAddress - Address of market to withdraw from.
 * @param amount - The amount to withdraw.
 * @param underlyingAddress - Address of the market's underlying asset.
 * @param decimals - Underlying token's decimals. i.e DAI = 18.
 * @param account - User's account. Used only by an rpc node.
 */
export declare function marketInteraction(provider: Web3Provider | JsonRpcProvider, action: marketInteractionType, cTokenAddress: string, amount: string, underlyingAddress: string, decimals?: BigNumber, account?: string): Promise<any>;
