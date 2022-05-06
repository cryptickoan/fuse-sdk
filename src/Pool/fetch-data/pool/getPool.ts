// Ethers
import { Contract } from "@ethersproject/contracts"

// Utils
import { filterOnlyObjectProperties } from "../utils/filterOnlyObjectProperties"

// Types
import { PoolInformation } from "../../types"
import iFuseDirectory from "../../../Interfaces/iFuseDirectory"

/**
 * @returns - Pool general info. Name, creator, comptroller address and time of creation.
 */
 export async function getPool(): Promise<PoolInformation> {
    const fusePoolDirectoryContract = new Contract(
        this.addresses.FUSE_POOL_DIRECTORY_CONTRACT_ADDRESS,
        iFuseDirectory,
        this._provider
    )

    const poolInformation = await fusePoolDirectoryContract.callStatic.pools(this.poolId)
    const parsedPoolInformation = filterOnlyObjectProperties(poolInformation)

    return parsedPoolInformation
}