var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Functions
import { filterPoolName } from "../utils/filterPoolName";
// Interfaces
import { getPool } from "./getPool";
import { identifyPriceOracle } from "./identifyPriceOracle";
import { Comptroller__factory } from "../../../abis/types";
/**
 * @param fuseDirectoryAddress - Address for the fuse directory contract.
 * @param provider - An ethers provider.
 * @param poolId - The pool ID.
 * @param oracleHashes - A list of all known oracle hashes. Used to identify oracle version.
 * @returns - General pool data of the given pool. i.e Pool name, admin's address, oracle address, oracle model and comptroller's address.
 */
export function fetchFusePoolData(provider, fuseDirectoryAddress, poolId, oracleHashes) {
    return __awaiter(this, void 0, void 0, function* () {
        // 1. Get Pool info from lens.
        const { comptroller, name: _unfiliteredName, } = yield getPool(provider, fuseDirectoryAddress, poolId);
        // Remove any profanity from the pool name
        let name = filterPoolName(_unfiliteredName);
        // 2. Create comptroller contract.
        const comptrollerContract = Comptroller__factory.connect(comptroller, provider);
        // 3. Get Oracle and oracle model.
        let oracle = yield comptrollerContract.callStatic.oracle();
        let oracleModel = yield identifyPriceOracle(provider, oracle, oracleHashes);
        // 4. Get pool's admin address.
        const admin = yield comptrollerContract.callStatic.admin();
        return {
            comptroller,
            name,
            oracle,
            oracleModel,
            admin,
        };
    });
}
;
