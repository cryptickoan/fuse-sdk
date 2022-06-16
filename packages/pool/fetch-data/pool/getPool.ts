// Utils
import { filterOnlyObjectProperties } from "../utils/filterOnlyObjectProperties"

// Types
import { PoolInformation } from "../../types"
import { Provider } from "@ethersproject/abstract-provider"
import { FusePoolDirectory__factory } from "@fuse-v1/periphery"

/**
 * @param provider - Provider to use to make the call.
 * @param fuseDirectoryAddress - Address of the pool directory contract.
 * @param poolId - ID of the pool to get.
 * @returns - Pool's general info. Name, creator, comptroller address and time of creation.
 */
 export async function getPool(
     provider: Provider,
     fuseDirectoryAddress: string,
     poolId: number
 ): Promise<PoolInformation> {
    const fusePoolDirectoryContract = FusePoolDirectory__factory.connect(fuseDirectoryAddress, provider)

    const poolInformation = await fusePoolDirectoryContract.callStatic.pools(poolId)
    const parsedPoolInformation = filterOnlyObjectProperties(poolInformation)


    return parsedPoolInformation
}