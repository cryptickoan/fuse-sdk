import { Web3Provider, JsonRpcProvider } from '@ethersproject/providers';
import { actionType } from "../../types";
/**
 * @param comptrollerAddress - Address of the comptroller where the market is listed.
 * @param marketAddress - Address of market to interact with.
 * @param action - Enter or exit.
 */
export declare function collateral(provider: Web3Provider | JsonRpcProvider, comptrollerAddress: string, action: actionType, marketAddress: string[] | string): Promise<void>;
