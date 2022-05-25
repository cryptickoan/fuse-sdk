import { Provider } from '@ethersproject/abstract-provider';
/**
 * @param comptrollerAddress - Address of comptroller to query.
 * @returns - An array of all markets available in given comptroller. (string[])
 */
export declare function fetchAllMarkets(comptrollerAddress: string, provider: Provider): Promise<string[]>;
