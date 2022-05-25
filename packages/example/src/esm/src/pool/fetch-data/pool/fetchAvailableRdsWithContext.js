var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Types
import { Comptroller__factory, Flywheel__factory } from "../../../abis/types";
/**
 * @param comptrollerAddress - Address of comptroller to query.
 * @returns - An array of addresses of available reward distributors in given comptroller.
 */
export function fetchAvailableRdsWithContext(comptrollerAddress, provider) {
    return __awaiter(this, void 0, void 0, function* () {
        const comptrollerContract = Comptroller__factory.connect(comptrollerAddress, provider);
        const availableRds = yield comptrollerContract.callStatic.getRewardsDistributors();
        let flywheels = [];
        let rewardsDistributors = [];
        for (const rewardsDistributor of availableRds) {
            const rdContract = Flywheel__factory.connect(rewardsDistributor, provider);
            try {
                const isFlywheel = yield rdContract.callStatic.isFlywheel();
                if (isFlywheel)
                    flywheels.push(rewardsDistributor);
                continue;
            }
            catch (_a) {
                // If not flywheel, check for RD
                try {
                    const isRD = yield rdContract.callStatic.isRewardsDistributor();
                    if (isRD)
                        rewardsDistributors.push(rewardsDistributor);
                    continue;
                }
                catch (e) {
                    console.log(e);
                    continue;
                }
            }
        }
        let rewardsDistributorWithContext = {};
        if (flywheels.length > 0) {
            rewardsDistributorWithContext.flywheels = flywheels;
        }
        if (rewardsDistributors.length > 0) {
            rewardsDistributorWithContext.rewardsDistributors = rewardsDistributors;
        }
        return rewardsDistributorWithContext;
    });
}
