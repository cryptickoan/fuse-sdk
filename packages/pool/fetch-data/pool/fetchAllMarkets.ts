// Ethers
import { Provider } from '@ethersproject/abstract-provider'
import { Comptroller__factory } from '@fuse-v1/core'

// Interface

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