var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { formatEther } from 'ethers/lib/utils';
// Types
import { Comptroller__factory, FlywheelStaticRewards__factory, FuseFlywheelCore__factory, MPO__factory } from "../../../abis/types";
import { getEthUsdPriceBN } from '../../../utils';
/**
 * @param comptrollerAddress - Address of comptroller to query.
 * @returns - An array of addresses of available reward distributors in given comptroller.
 */
export function fetchRewardedMarketsWithContext(comptrollerAddress, oracleAddress, provider) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        // 1. Get all rewards distributors
        const comptrollerContract = Comptroller__factory.connect(comptrollerAddress, provider);
        const availableRds = yield comptrollerContract.callStatic.getRewardsDistributors();
        let rewardedMarkets = { supply: {}, borrow: {} };
        for (const rewardsDistributor of availableRds) {
            const flywheelContract = FuseFlywheelCore__factory.connect(rewardsDistributor, provider);
            try {
                const isFlywheel = yield flywheelContract.callStatic.isFlywheel();
                if (isFlywheel) {
                    const rewardedStrategies = yield flywheelContract.callStatic.getAllStrategies();
                    // If flywheel is rewarding any strategies
                    if (rewardedStrategies.length > 0) {
                        // Get Flywheel general info
                        // 1. This will be true if flywheel is incentivizing supply
                        const incentivizingSupply = yield flywheelContract.callStatic.rewardingSupply();
                        // 2. Rewarded token info to get APY
                        const rewardedToken = yield flywheelContract.callStatic.rewardToken();
                        const oracleContract = yield MPO__factory.connect(oracleAddress, provider);
                        const rewardedTokenPrice = yield oracleContract.callStatic.price(rewardedToken);
                        const ethPrice = yield getEthUsdPriceBN();
                        const rewardedTokenPriceUSD = (parseFloat(formatEther(rewardedTokenPrice)) * parseFloat(formatEther(ethPrice)));
                        // 3. Prepare rewards module contract
                        const rewardsModule = yield flywheelContract.callStatic.flywheelRewards();
                        const rewardsModuleContract = FlywheelStaticRewards__factory.connect(rewardsModule, provider);
                        // For every rewarded strategy get its reward info
                        for (const strategy of rewardedStrategies) {
                            const rewardsInfo = yield rewardsModuleContract.callStatic.rewardsInfo(strategy);
                            if (incentivizingSupply) {
                                rewardedMarkets.supply[strategy] = (_a = rewardedMarkets.supply[strategy]) !== null && _a !== void 0 ? _a : {};
                                rewardedMarkets.supply[strategy][rewardsDistributor] = {
                                    isFlywheel,
                                    incentivizingSupply,
                                    rewardsDistributorAddress: rewardsDistributor,
                                    rewardsPerSecondInUSD: parseFloat(formatEther(rewardsInfo.rewardsPerSecond)) * rewardedTokenPriceUSD,
                                    rewardedToken,
                                };
                            }
                            if (!incentivizingSupply) {
                                rewardedMarkets.borrow[strategy] = (_b = rewardedMarkets.borrow[strategy]) !== null && _b !== void 0 ? _b : {};
                                rewardedMarkets.borrow[strategy][rewardsDistributor] = {
                                    isFlywheel,
                                    incentivizingSupply,
                                    rewardsDistributorAddress: rewardsDistributor,
                                    rewardsPerSecondInUSD: parseFloat(formatEther(rewardsInfo.rewardsPerSecond)) * rewardedTokenPriceUSD,
                                    rewardedToken,
                                };
                            }
                        }
                    }
                }
            }
            catch (e) {
                // If not flywheel, check for RD
                // try {
                //   const isRD = await flywheelContract.callStatic.isRewardsDistributor();
                //   if (isRD) rewardsDistributors.push(rewardsDistributor)
                //   continue
                // } catch (e) {
                //   console.log(e)
                //   continue
                // }
                console.log(e);
            }
        }
        // Return a list of all rewarded markets with their respective information
        return rewardedMarkets;
    });
}
