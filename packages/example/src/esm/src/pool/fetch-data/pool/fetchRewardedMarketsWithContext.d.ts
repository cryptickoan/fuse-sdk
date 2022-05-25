import { Provider } from '@ethersproject/abstract-provider';
/**
 * @param comptrollerAddress - Address of comptroller to query.
 * @returns - An array of addresses of available reward distributors in given comptroller.
 */
export declare function fetchRewardedMarketsWithContext(comptrollerAddress: string, oracleAddress: string, provider: Provider): Promise<any>;
