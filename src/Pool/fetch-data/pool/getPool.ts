// Ethers
import { Contract } from "@ethersproject/contracts"

// Utils
import { filterOnlyObjectProperties } from "../utils/filterOnlyObjectProperties"

// Types
import { PoolInformation } from "../../types"
import iFuseDirectory from "../../../Interfaces/iFuseDirectory"
import { Provider } from "@ethersproject/abstract-provider"

/**
 * @returns - Pool general info. Name, creator, comptroller address and time of creation.
 */
 export async function getPool(
     fuseDirectoryAddress: string,
     provider: Provider,
     poolId: number
 ): Promise<PoolInformation> {

    const fusePoolDirectoryContract = new Contract(
        fuseDirectoryAddress,
        iFuseDirectory,
        provider
    )

    const poolInformation = await fusePoolDirectoryContract.callStatic.pools(poolId)
    const parsedPoolInformation = filterOnlyObjectProperties(poolInformation)


    return parsedPoolInformation
}