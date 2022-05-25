var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { FuseFlywheelLensRouter__factory } from "../../../abis/types/factories/FuseFlywheelLensRouter__factory";
export const claimAndAccrue = (provider, flywheelWithContext, flywheel, userAddress) => __awaiter(void 0, void 0, void 0, function* () {
    const flywheelRouter = FuseFlywheelLensRouter__factory.connect("0xcd9704f874d69f0cb2ddfd04ff8e5c88f3caf02e", provider.getSigner());
    const markets = Object.keys(flywheelWithContext.shouldAccrue);
    let accrue = [];
    for (const market of markets) {
        accrue.push(flywheelWithContext.shouldAccrue[market].shouldUpdate);
    }
    return yield flywheelRouter.getUnclaimedRewardsByMarkets(userAddress, markets, [flywheel], accrue);
});
