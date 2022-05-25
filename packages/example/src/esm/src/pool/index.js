var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Ethers
import { JsonRpcProvider } from "@ethersproject/providers";
// Functions
import { fetchRewardedMarketsWithContext, fetchFusePoolData, getMarketsWithData, } from "./fetch-data";
import { collateral, marketInteraction } from "./interact/market-interactions";
// ABIS
import { FuseLensSecondary__factory, FuseLens__factory } from "../abis/types";
import { getAddresses } from "./utils/getAddresses";
import { getOracleHashes } from "./utils/getOracleHashes";
import { getPendingFlywheelRewards } from "./fetch-data/pool/getPendingFlywheelRewards";
import { accrue, claimAndAccrue } from "./interact/flywheel";
/**
 * @param provider - An initiated ethers provider.
 * @param chainId - The chain ID. Arbitrum, Arbi Rinkeby and Mainnet are supported.
 * @param poolId - The pool's id.
 * @returns An interface that'll let apps interact with the given fuse pool. (read/write functions).
 */
export const Pool = function (provider, chainId, poolId) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!provider || !chainId || !poolId) {
            return undefined;
        }
        const readOnlyProvider = new JsonRpcProvider('http://127.0.0.1:8545');
        const addresses = getAddresses(chainId);
        const oracleHashes = getOracleHashes(chainId);
        const fuseLensContract = FuseLens__factory.connect(addresses.FUSE_POOL_LENS_CONTRACT_ADDRESS, readOnlyProvider);
        const secondaryFuseLensContract = FuseLensSecondary__factory.connect(addresses.FUSE_POOL_LENS_SECONDARY_CONTRACT_ADDRESS, readOnlyProvider);
        let data;
        try {
            data = yield fetchFusePoolData(readOnlyProvider, addresses.FUSE_POOL_DIRECTORY_CONTRACT_ADDRESS, poolId, oracleHashes);
        }
        catch (e) {
            throw e;
        }
        const instance = Object.assign(Object.assign({ poolId }, data), { fetch: {
                markets: getMarketsWithData.bind({ contracts: { fuseLensContract } }, data.comptroller),
                rewardedMarkets: fetchRewardedMarketsWithContext.bind(null, data.comptroller, data.oracle, readOnlyProvider),
                pendingRewards: getPendingFlywheelRewards.bind(null, readOnlyProvider)
            }, interact: {
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
            } });
        return instance;
    });
};
