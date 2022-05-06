// Ethers
import { Contract } from "@ethersproject/contracts";

// Internal 
    // Types
import { FusePoolData } from "../../types";
    // Functions
import { filterPoolName } from "../utils/filterPoolName";
    // Interfaces
import iComptroller from "../../../Interfaces/iComptroller";

/**
 * @returns - General pool data of the given pool. i.e Pool name, admin's address, oracle address, oracle model and comptroller's address.
 */
export async function fetchFusePoolData (): Promise<FusePoolData | undefined> {
    // 1. Get Pool info from lens.
    const {
        comptroller,
        name: _unfiliteredName,
    } = await this.getPool(
        this._provider, 
        this.poolId, 
        this.addresses.FUSE_POOL_DIRECTORY_CONTRACT_ADDRESS
    )

      
    // Remove any profanity from the pool name
    let name = filterPoolName(_unfiliteredName);
    

    // 2. Create comptroller contract.
    const comptrollerContract = new Contract(
        comptroller,
        iComptroller,
        this._provider
    )

    // 3. Get Oracle and oracle model.
    let oracle: string = await comptrollerContract.callStatic.oracle();
    let oracleModel: string | null = await this.identifyPriceOracle(oracle);
    
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