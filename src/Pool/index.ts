// Ethers
import { JsonRpcProvider, Web3Provider } from "@ethersproject/providers";
import { Contract } from "@ethersproject/contracts";

// Internal
    // Utils
import { getAddresses } from "./utils/getAddresses";
import { getOracleHashes } from "./utils/getOracleHashes";
    // Types
import { PoolInstance } from "./types";
import { getPool } from "./fetch-data";
import { identifyPriceOracle } from "./fetch-data";

    // Fetching Data Functions
import * as fetching from "./fetch-data";
    // Market Interactions
import * as market from './market-interactions';

import iFuseLens from "../Interfaces/iFuseLens";
import { fetchFusePoolData } from "./fetch-data";


/**
 * @param provider - An initiated ethers provider.
 * @param chainId - The chain ID. Arbitrum, Arbi Rinkeby and Mainnet are supported.
 * @param poolId - The pool's id.
 * @returns An interface that'll let apps interact with the given fuse pool. (read/write functions).
 */
export const Pool = function(
    provider: Web3Provider | JsonRpcProvider,
    chainId: number,
    poolId: number
): Promise<PoolInstance | undefined> {
    if(!provider  || !chainId || !poolId) {
        return undefined
    }

    const addresses = getAddresses(chainId)
    const oracleHashes = getOracleHashes(chainId)

    const fuseLensInterface = iFuseLens

    const fuseLensContract = new Contract(
        addresses.FUSE_POOL_LENS_CONTRACT_ADDRESS,
        fuseLensInterface,
        provider
    )

    const secondaryFuseLensContract = new Contract(
        addresses.FUSE_POOL_LENS_SECONDARY_CONTRACT_ADDRESS,
        fuseLensInterface,
        provider
    )
    
    const instance: any = {
        poolId,
        contracts: {
            fuseLens: fuseLensContract,
            secondaryFuseLens: secondaryFuseLensContract
        },
        _provider: provider,
        fetchFusePoolData: fetchFusePoolData.bind(null, addresses.FUSE_POOL_DIRECTORY_CONTRACT_ADDRESS, provider, poolId, oracleHashes)
    };


    return instance
}

