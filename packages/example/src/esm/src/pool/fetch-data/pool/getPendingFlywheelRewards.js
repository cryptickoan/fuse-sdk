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
export const getPendingFlywheelRewards = (provider, flywheels, userAddress) => __awaiter(void 0, void 0, void 0, function* () {
    let supply = {};
    let borrow = {};
    //  For every flywheel
    for (const flywheel of flywheels) {
        const flywheelContract = FuseFlywheelCore__factory.connect(flywheel, provider);
        // 1. Get listeds strategies, accrued rewards and incentivized action
        const listedStrategies = yield flywheelContract.callStatic.getAllStrategies();
        const accruedRewards = yield flywheelContract.callStatic.rewardsAccrued(userAddress);
        const incentivizingSupply = yield flywheelContract.callStatic.rewardingSupply();
        let shouldAccrue = {};
        for (const market of listedStrategies) {
            // 1. Get the strategy state, this will tell us when the last accrue was made
            const strategyState = yield flywheelContract.strategyState(market);
            const currentTimeStamp = (Date.now() / 1000).toFixed(0);
            const timeSinceLastAccrue = parseFloat(currentTimeStamp) - strategyState.lastUpdatedTimestamp;
            shouldAccrue[market] = {
                lastUpdatedTimeStamp: strategyState.lastUpdatedTimestamp,
                currentTimeStamp,
                timeSinceLastAccrue,
                shouldUpdate: false,
                userIsActive: false
            };
            // If its incentivizing supply
            if (incentivizingSupply) {
                // 1. Get the users supply balance
                const CTokenContract = CErc20__factory.connect(market, provider);
                const balance = yield CTokenContract.callStatic.balanceOf(userAddress);
                // 2. If user balance > 0 it means theyre actively supplying, which will also mean they're still receiving rewards.
                if (balance.gt(Zero)) {
                    // If 4 Days have passed since last accrue then true.
                    shouldAccrue[market].shouldUpdate = timeSinceLastAccrue > 345600 ? true : false;
                    shouldAccrue[market].userIsActive = true;
                }
                supply[flywheel] = {
                    shouldAccrue,
                    accruedRewards
                };
                // If borrowing is incentivized
            }
            if (!incentivizingSupply) {
                // 1. Get the users borrow balance
                const CTokenContract = CErc20__factory.connect(market, provider);
                const balance = yield CTokenContract.callStatic.balanceOf(userAddress);
                // 2. If user balance > 0 it means theyre actively borrowing, which will also mean they're still receiving rewards.
                if (balance.gt(Zero)) {
                    // If 4 Days have passed since last accrue then true.
                    shouldAccrue[market].shouldUpdate = timeSinceLastAccrue > 345600 ? true : false;
                    shouldAccrue[market].userIsActive = true;
                }
                borrow[flywheel] = {
                    shouldAccrue,
                    accruedRewards
                };
            }
        }
    }
    // If supply[flywheel].shouldAccrue is not empty, then those markets can be accrued for if user chooses to.
    return { supply, borrow };
});
