import { Provider } from '@ethersproject/abstract-provider';
/**
 * @param marketAddress - The cToken/market address to query.
 * @returns - An initiated IRM class, used to simulate future supply/borrow rates.
 */
export declare const getInterestRateModel: (marketAddress: string, provider: Provider) => Promise<any | undefined>;
