// Ethers
import { JsonRpcProvider, Web3Provider } from "@ethersproject/providers";

// Internal
    // Types
import { FusePoolData, PoolInstance } from "./types";
    // Functions
import { 
    fetchAvailableRdsWithContext, 
    fetchFusePoolData,
    getMarketsWithData, 
} from "./fetch-data";
import { collateral, marketInteraction } from "./market-interactions";
    // ABIS
import { FuseLens, FuseLensSecondary__factory, FuseLens__factory } from "../abis/types";
import { getAddresses } from "./utils/getAddresses";
import { getOracleHashes } from "./utils/getOracleHashes";



/**
 * @param provider - An initiated ethers provider.
 * @param chainId - The chain ID. Arbitrum, Arbi Rinkeby and Mainnet are supported.
 * @param poolId - The pool's id.
 * @returns An interface that'll let apps interact with the given fuse pool. (read/write functions).
 */
export const Pool = async function(
    provider: Web3Provider | JsonRpcProvider,
    chainId: number,
    poolId: number
): Promise<PoolInstance | undefined> {
    if(!provider  || !chainId || !poolId) {
        return undefined
    }
    
    const addresses = getAddresses(chainId)
    const oracleHashes = getOracleHashes(chainId)

    const fuseLensContract: FuseLens = FuseLens__factory.connect(addresses.FUSE_POOL_LENS_CONTRACT_ADDRESS, provider)
    const secondaryFuseLensContract = FuseLensSecondary__factory.connect(addresses.FUSE_POOL_LENS_SECONDARY_CONTRACT_ADDRESS, provider)

    let data: FusePoolData
    try {
        data = await fetchFusePoolData(
            provider, 
            addresses.FUSE_POOL_DIRECTORY_CONTRACT_ADDRESS, 
            poolId, 
            oracleHashes
        )
    } catch (e) {
        throw e
    }

    
    const instance: any = {
        poolId,
        ...data,
        fetch: {
            getMarketsWithData: getMarketsWithData.bind({contracts: {fuseLensContract}}, data.comptroller),
            fetchAvailableRdsWithContext: fetchAvailableRdsWithContext.bind(null, data.comptroller, provider)
        },
        interact:{
            supply: marketInteraction.bind(null, provider, 'supply'),
            withdraw: marketInteraction.bind(null, provider, 'withdraw'),
            borrow: marketInteraction.bind(null, provider, 'borrow'),
            repay: marketInteraction.bind(null, provider, 'repay'),
            enterMarkets: collateral.bind(null, provider, data.comptroller, 'enter'),
            exitMarkets: collateral.bind(null, provider, data.comptroller, 'exit')
        }
    };


    return instance
}

