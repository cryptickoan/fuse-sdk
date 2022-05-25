var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Interface
import { Comptroller__factory } from "../../../abis/types";
/**
 * @param comptrollerAddress - Address of comptroller to query.
 * @returns - An array of all markets available in given comptroller. (string[])
 */
export function fetchAllMarkets(comptrollerAddress, provider) {
    return __awaiter(this, void 0, void 0, function* () {
        const comptrollerContract = Comptroller__factory.connect(comptrollerAddress, provider);
        const availableMarkets = yield comptrollerContract.callStatic.getAllMarkets();
        return availableMarkets;
    });
}
