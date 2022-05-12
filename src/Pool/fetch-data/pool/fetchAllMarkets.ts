// Ethers
import { Provider } from '@ethersproject/abstract-provider'

// Interface
import { Comptroller__factory } from "../../../abis/types"

/**
 * @param comptrollerAddress - Address of comptroller to query.
 * @returns - An array of all markets available in given comptroller. (string[])
 */
export async function fetchAllMarkets(
    comptrollerAddress: string,
    provider: Provider
  ): Promise<string[]> {
    const comptrollerContract = Comptroller__factory.connect(comptrollerAddress, provider)

    const availableMarkets = await comptrollerContract.callStatic.getAllMarkets()
    return availableMarkets
}