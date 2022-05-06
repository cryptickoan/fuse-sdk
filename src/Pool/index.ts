// Ethers
import { JsonRpcProvider, Web3Provider } from "@ethersproject/providers";
import { Contract } from "@ethersproject/contracts";

// Internal
    // Utils
import { getAddresses } from "./utils/getAddresses";
import { getOracleHashes } from "./utils/getOracleHashes";
    // Types
import { PoolInstance } from "./types";
    // Fetching Data Functions
import * as fetching from "./fetch-data";
    // Market Interactions
import * as market from './market-interactions';

import iFuseLens from "../Interfaces/iFuseLens";


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
): PoolInstance | undefined {
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
    
    const instance: PoolInstance = {
        poolId,
        contracts: {
            fuseLens: fuseLensContract,
            secondaryFuseLens: secondaryFuseLensContract
        },
        _provider: provider,
        addresses,
        oracleHashes,
        ...fetching,
        ...market,
    };

    return instance
}

