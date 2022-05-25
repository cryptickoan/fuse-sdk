var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Utils
import { filterOnlyObjectProperties } from "../utils/filterOnlyObjectProperties";
import { FuseDirectory__factory } from "../../../abis/types";
/**
 * @returns - Pool general info. Name, creator, comptroller address and time of creation.
 */
export function getPool(provider, fuseDirectoryAddress, poolId) {
    return __awaiter(this, void 0, void 0, function* () {
        const fusePoolDirectoryContract = FuseDirectory__factory.connect(fuseDirectoryAddress, provider);
        const poolInformation = yield fusePoolDirectoryContract.callStatic.pools(poolId);
        const parsedPoolInformation = filterOnlyObjectProperties(poolInformation);
        return parsedPoolInformation;
    });
}
