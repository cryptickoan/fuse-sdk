import { BigNumber } from "@ethersproject/bignumber";
import { Provider } from '@ethersproject/abstract-provider';
/**
 * @param tokenAddress - Token address (ERC20) to look for.
 * @param oracleAddress - The comptroller's oracle address. Comes from fetchFusePoolData.
 * @returns - Price of the given token based on the comptroller's oracle feed.
 */
export declare function getPriceFromOracle(tokenAddress: string, oracleAddress: string, provider: Provider): Promise<BigNumber>;
