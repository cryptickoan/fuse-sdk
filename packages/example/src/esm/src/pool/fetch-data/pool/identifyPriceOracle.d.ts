import { Provider } from '@ethersproject/abstract-provider';
import { OracleHashes } from '../../types';
/**
 * @param oracleAddress - Oracle address to use.
 * @returns - The oracle model.
 */
export declare const identifyPriceOracle: (provider: Provider, oracleAddress: string, oracleHashes: OracleHashes) => Promise<string | null>;
