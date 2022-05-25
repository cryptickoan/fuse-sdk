var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { FuseFlywheelCore__factory } from "../../../abis/types";
export const accrue = (provider, flywheelAddress, strategyAddress, userAddress) => __awaiter(void 0, void 0, void 0, function* () {
    const flywheelContract = FuseFlywheelCore__factory.connect(flywheelAddress, provider.getSigner());
    return yield flywheelContract["accrue(address,address)"](strategyAddress, userAddress);
});
