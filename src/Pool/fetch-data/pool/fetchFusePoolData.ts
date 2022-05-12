// Ethers
import { Contract } from "@ethersproject/contracts";

// Internal 
    // Types
import { FusePoolData, OracleHashes } from "../../types";
    // Functions
import { filterPoolName } from "../utils/filterPoolName";
    // Interfaces
import { getPool } from "./getPool";
import { Provider } from "@ethersproject/abstract-provider";
import { identifyPriceOracle } from "./identifyPriceOracle";
import { Comptroller__factory } from "../../../abis/types";


/**
 * @param provider - An ethers provider.
 * @param fuseDirectoryAddress - Address for the fuse directory contract.
 * @param poolId - The pool ID.
 * @param oracleHashes - A list of all known oracle hashes. Used to identify oracle version.
 * @returns - General pool data of the given pool. i.e Pool name, admin's address, oracle address, oracle model and comptroller's address. 
 */
export async function fetchFusePoolData (
    provider: Provider,
    fuseDirectoryAddress: string,
    poolId: number,
    oracleHashes: OracleHashes
): Promise<FusePoolData | undefined> {
    // 1. Get Pool info from lens.
    const {
        comptroller,
        name: _unfiliteredName,
    } = await getPool(
        provider, 
        fuseDirectoryAddress,
        poolId
    )

    // Remove any profanity from the pool name
    let name = filterPoolName(_unfiliteredName);
    

    // 2. Create comptroller contract.
    const comptrollerContract = Comptroller__factory.connect(comptroller, provider)

    // 3. Get Oracle and oracle model.
    let oracle: string = await comptrollerContract.callStatic.oracle();
    let oracleModel: string | null = await identifyPriceOracle(provider, oracle, oracleHashes);
    
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