// Ethers
import { Contract } from "@ethersproject/contracts"

// Utils
import { filterOnlyObjectProperties } from "../utils/filterOnlyObjectProperties"

// Types
import { PoolInformation } from "../../types"
import { Provider } from "@ethersproject/abstract-provider"
import { FuseDirectory__factory } from "../../../abis/types"

/**
 * @param provider - An ethers provider.
 * @param fuseDirectoryAddress - Fuse directory contract address.
 * @param poolId - The pool's ID. i.e 8, 156, etc.
 * @returns - Pool general info. Name, creator, comptroller address and time of creation.
 */
 export async function getPool(
     provider: Provider,
     fuseDirectoryAddress: string,
     poolId: number
 ): Promise<PoolInformation> {

    const fusePoolDirectoryContract = FuseDirectory__factory.connect(fuseDirectoryAddress, provider)

    const poolInformation = await fusePoolDirectoryContract.callStatic.pools(poolId)
    const parsedPoolInformation = filterOnlyObjectProperties(poolInformation)


    return parsedPoolInformation
}