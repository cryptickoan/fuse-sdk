import { Options } from '../../types';
import { MarketsWithData } from '../../types';
/**
 * @param comptrollerAddress - Comptroller to look for.
 * @param options - Optional parameter to override sender and gas. Usually used when calling the lens to simulate an address.
 * @returns - Async function call to get all public pools.
 */
export declare function getMarketsWithData(comptrollerAddress: string, options?: Options): Promise<MarketsWithData>;
