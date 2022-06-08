// Ethers
import { JsonRpcProvider, Web3Provider } from "@ethersproject/providers"

// Internal
    // Types
import { FusePoolData, PoolInstance } from './types'
    // Functions
import { 
    fetchRewardedMarketsWithContext, 
    fetchFusePoolData,
    getMarketsWithData, 
} from "./fetch-data"
import { collateral, marketInteraction } from './interact/market-interactions'
    // ABIS
import { FusePoolLens, FusePoolLensSecondary__factory, FusePoolLens__factory } from "../abis/types"
import { getAddresses } from "./utils/getAddresses"
import { getOracleHashes } from "./utils/getOracleHashes"
import { getPendingFlywheelRewards } from "./fetch-data/pool/getPendingFlywheelRewards"
import { accrue, claimAndAccrue } from "./interact/flywheel"



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

    const readOnlyProvider = new JsonRpcProvider('http://127.0.0.1:8545')
    
    const addresses = getAddresses(chainId)
    const oracleHashes = getOracleHashes(chainId)

    const fuseLensContract: FusePoolLens = FusePoolLens__factory.connect(addresses.FUSE_POOL_LENS_CONTRACT_ADDRESS, readOnlyProvider)
    const secondaryFuseLensContract = FusePoolLensSecondary__factory.connect(addresses.FUSE_POOL_LENS_SECONDARY_CONTRACT_ADDRESS, readOnlyProvider)

    let data: FusePoolData
    try {
        data = await fetchFusePoolData(
            readOnlyProvider, 
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
            markets: getMarketsWithData.bind({contracts: {fuseLensContract}}, data.comptroller),
            rewardedMarkets: fetchRewardedMarketsWithContext.bind(null, data.comptroller, data.oracle, readOnlyProvider),
            pendingRewards: getPendingFlywheelRewards.bind(null, readOnlyProvider, data.comptroller)
        },
        interact:{
            market: { 
                supply: marketInteraction.bind(null, provider, 'supply'),
                withdraw: marketInteraction.bind(null, provider, 'withdraw'),
                borrow: marketInteraction.bind(null, provider, 'borrow'),
                repay: marketInteraction.bind(null, provider, 'repay'),
                enterMarkets: collateral.bind(null, provider, data.comptroller, 'enter'),
                exitMarkets: collateral.bind(null, provider, data.comptroller, 'exit')
            },
            flywheel: {
                accrue: accrue.bind(null, provider),
                claimAndAccrue: claimAndAccrue.bind(null, provider)
            }
        }
    };


    return instance
}

