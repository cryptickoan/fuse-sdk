// Ethers
import { Contract } from "@ethersproject/contracts";

// Internal 
    // Types
import { FusePoolData, OracleHashes } from "../../types";
    // Functions
import { filterPoolName } from "../utils/filterPoolName";
    // Interfaces
import iComptroller from "../../../Interfaces/iComptroller";
import { getPool } from "./getPool";
import { Provider } from "@ethersproject/abstract-provider";
import { identifyPriceOracle } from "./identifyPriceOracle";


/**
 * @param fuseDirectoryAddress - Address for the fuse directory contract.
 * @param provider - An ethers provider.
 * @param poolId - The pool ID.
 * @param oracleHashes - A list of all known oracle hashes. Used to identify oracle version.
 * @returns - General pool data of the given pool. i.e Pool name, admin's address, oracle address, oracle model and comptroller's address. 
 */
export async function fetchFusePoolData (
    fuseDirectoryAddress: string,
    provider: Provider, 
    poolId: number,
    oracleHashes: OracleHashes
): Promise<FusePoolData | undefined> {
    // 1. Get Pool info from lens.
    const {
        comptroller,
        name: _unfiliteredName,
    } = await getPool(
        fuseDirectoryAddress,
        provider, 
        poolId
    )

    // Remove any profanity from the pool name
    let name = filterPoolName(_unfiliteredName);
    

    // 2. Create comptroller contract.
    const comptrollerContract = new Contract(
        comptroller,
        iComptroller,
        provider
    )

    // 3. Get Oracle and oracle model.
    let oracle: string = await comptrollerContract.callStatic.oracle();
    let oracleModel: string | null = await identifyPriceOracle(oracle, provider, oracleHashes);
    
    // 4. Get pool's admin address.
    const admin = await comptrollerContract.callStatic.admin();
    
    return {
        comptroller,
        name,
        oracle,
        oracleModel,
        admin,
    };
};