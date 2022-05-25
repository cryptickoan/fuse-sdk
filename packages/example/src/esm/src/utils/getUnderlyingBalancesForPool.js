/**
 * @param markets - An array of markets with their FuseLens information. Should come from calling pool.getMarketsWithData(comptroller)
 * @returns - Map of market - user's underlying ERC20 balance.
 */
export function getUnderlyingBalancesForPool(markets) {
    let balances = {};
    for (const market of markets) {
        balances[market.cToken] = market.underlyingBalance;
    }
    return balances;
}
