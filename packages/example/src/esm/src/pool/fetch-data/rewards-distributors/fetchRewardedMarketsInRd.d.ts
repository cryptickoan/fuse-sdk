import { Provider } from '@ethersproject/abstract-provider';
/**
 * @param rdAddress - Address of the reward distributor to query.
 * @returns - An array of addresses for all markets rewarded by the given reward distributor.
 */
export declare function fetchRewardedMarketsInRd(rdAddress: string, provider: Provider): Promise<string[]>;
