var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { RewardsDistributor__factory } from "../../../abis/types";
/**
 * @param rdAddress - Address of the reward distributor to query.
 * @returns - The address of the rewarded token (ERC20). String.
 */
export function fetchRewardTokenInRd(rdAddress, provider) {
    return __awaiter(this, void 0, void 0, function* () {
        const rdContract = RewardsDistributor__factory.connect(rdAddress, provider);
        return yield rdContract.callStatic.rewardToken();
    });
}
