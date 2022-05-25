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
 * @param rdAddress - The rewards distributor address.
 * @param marketAddress - Address of market to query.
 * @param type - String. supply or borrow.
 * @returns - BigNumber representation of supply/borrow reward speed by block.
 * @note - It can be made a regular number by parsing it with the rewarded token's decimals. ethers.utils.parseUnits(RewardSpeedInMarket, market.underlyingDecimals)
 */
export function fetchRewardSpeedInMarket(rdAddress, marketAddress, type, provider) {
    return __awaiter(this, void 0, void 0, function* () {
        const rdContract = RewardsDistributor__factory.connect(rdAddress, provider);
        return type === 'supply'
            ? rdContract.callStatic.compSupplySpeeds(marketAddress)
            : rdContract.callStatic.compBorrowSpeeds(marketAddress);
    });
}
