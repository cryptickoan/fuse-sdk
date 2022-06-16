import { BigNumber } from "@ethersproject/bignumber"
import { USDPricedFuseAssetWithTokenData } from "pool/src/types"

/**
 * @param markets - An array of markets with their FuseLens information. Should come from calling pool.getMarketsWithData(comptroller)
 * @returns - Map of market - user's underlying ERC20 balance.
 */
export function getUnderlyingBalancesForPool (markets: USDPricedFuseAssetWithTokenData[]) {
    let balances: {[cToken: string]: BigNumber} = {}
    for (const market of markets) {
        balances[market.cToken] = market.underlyingBalance
    }

    return balances
}