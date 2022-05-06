import { BigNumber } from "@ethersproject/bignumber"
import { USDPricedFuseAsset } from "../../types"

/**
 * @param markets - An array of markets with their FuseLens information. Should come from calling pool.getMarketsWithData(comptroller)
 * @returns - Map of market - user's underlying ERC20 balance.
 */
export function getUnderlyingBalancesForPool (markets: USDPricedFuseAsset[]) {
    let balances: {[cToken: string]: BigNumber} = {}
    for (const market of markets) {
        balances[market.cToken] = market.underlyingBalance
    }

    return balances
}