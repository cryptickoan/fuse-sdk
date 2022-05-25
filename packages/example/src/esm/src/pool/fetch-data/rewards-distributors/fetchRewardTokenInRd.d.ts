import { Provider } from '@ethersproject/abstract-provider';
/**
 * @param rdAddress - Address of the reward distributor to query.
 * @returns - The address of the rewarded token (ERC20). String.
 */
export declare function fetchRewardTokenInRd(rdAddress: string, provider: Provider): Promise<string>;
