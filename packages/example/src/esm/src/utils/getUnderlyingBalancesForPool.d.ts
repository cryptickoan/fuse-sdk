import { BigNumber } from "@ethersproject/bignumber";
import { USDPricedFuseAsset } from "../pool/types";
/**
 * @param markets - An array of markets with their FuseLens information. Should come from calling pool.getMarketsWithData(comptroller)
 * @returns - Map of market - user's underlying ERC20 balance.
 */
export declare function getUnderlyingBalancesForPool(markets: USDPricedFuseAsset[]): {
    [cToken: string]: BigNumber;
};
