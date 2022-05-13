# Fuse SDK

An ethers-based to interact with Fuse Lending Markets.

## Architecture

The idea is to have modules for the different use cases a use might encounter. 

* Single pool interaction
* Pool administration (deployment and configuration)
* Multi-pool interaction (Relying heavily on the lenses and routers)

Still in progress. 

## Single Pool Module Quickstart

```js
import { Pool } from 'fuse-sdk'

async function example() {
    const provider = new JsonRpcProvider("http://localhost:8545");
    const pool156 = await Pool(provider, chainId, 156)
    
    // Some basic pool information is fetched upon initiation.
    const comptroller = pool156.comptroller
    const poolName = pool156.name
    const admin = pool156.admin
    const oracle = pool156.oracle
    const oracleModel = pool156.oracleModel
    
    // Fetching markets
    const markets = await pool156.fetch.marketsWithData()
    
    // Supplying
    await pool156.interact.supply(
        marketAddress               // CToken's address to supply to.
        "1000"                      // Amount denominated in the markets underlying token. i.e 1000 DAI, 1000 USDC, etc.
        underlyingTokenAddress
}
```

## Test Suite

To run the test suite use: 

``` npm run test ```

This command will automatically initiate an Anvil node for you in the background. To avoid this behavior run:

``` NODE=false npm run test ```

###### &nbsp;&nbsp;&nbsp;&nbsp; Note: The test suite needs a node running in port 8545, forked at blocknumber: 14610872

