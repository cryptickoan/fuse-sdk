var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Zero } from "@ethersproject/constants";
import { CErc20__factory, FuseFlywheelCore__factory } from "../../../abis/types";
export const getPendingRewards = (provider, flywheels, userAddress) => __awaiter(void 0, void 0, void 0, function* () {
    let supply = {};
    let borrow = {};
    //  For every flywheel
    for (const flywheel of flywheels) {
        const flywheelContract = FuseFlywheelCore__factory.connect(flywheel, provider);
        // 1. Get listeds strategies, accrued rewards and if its rewarding supply
        const listedStrategies = yield flywheelContract.callStatic.getAllStrategies();
        const accruedRewards = yield flywheelContract.callStatic.rewardsAccrued(userAddress);
        const rewardingSupply = yield flywheelContract.callStatic.rewardingSupply();
        // If its rewarding supply
        if (rewardingSupply) {
            let shouldAccrue = {};
            // For every listed strategy
            for (const market of listedStrategies) {
                const CTokenContract = CErc20__factory.connect(market, provider);
                // 1. Get the users balance
                const balance = yield CTokenContract.callStatic.balanceOf(userAddress);
                // 2. If user balance > 0 it means theyre actively supplying
                if (balance.gt(Zero)) {
                    // 3. Get the strategy state, this will tell us when the last accrue was made
                    const strategyState = yield flywheelContract.strategyState(market);
                    const currentTimeStamp = (Date.now() / 1000).toFixed(0);
                    const timeSinceLastAccrue = parseFloat(currentTimeStamp) - strategyState.lastUpdatedTimestamp;
                    shouldAccrue[market] = {
                        lastUpdatedTimeStamp: strategyState.lastUpdatedTimestamp,
                        currentTimeStamp,
                        timeSinceLastAccrue,
                        shouldUpdate: timeSinceLastAccrue > 345600 ? true : false // If 4 Days have passed since last accrue then true.
                    };
                    supply[flywheel] = {
                        shouldAccrue,
                        accruedRewards
                    };
                }
            }
        }
        else if (accruedRewards.gt(Zero)) {
            borrow[flywheel] = {
                listedStrategies,
                accruedRewards
            };
        }
    }
    // If supply[flywheel].shouldAccrue is not empty, then those markets can be accrued for if user chooses to.
    return { supply, borrow };
});
