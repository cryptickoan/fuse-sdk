var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Comptroller__factory } from "../../../abis/types";
/**
 * @param comptrollerAddress - Address of the comptroller where the market is listed.
 * @param marketAddress - Address of market to interact with.
 * @param action - Enter or exit.
 */
export function collateral(provider, comptrollerAddress, action, marketAddress) {
    return __awaiter(this, void 0, void 0, function* () {
        const comptrollerContract = Comptroller__factory.connect(comptrollerAddress, provider.getSigner());
        if (action === "enter" && typeof marketAddress === 'object') {
            yield comptrollerContract.enterMarkets(marketAddress);
        }
        if (typeof marketAddress === 'string' && action === "exit") {
            yield comptrollerContract.exitMarket(marketAddress);
        }
    });
}
