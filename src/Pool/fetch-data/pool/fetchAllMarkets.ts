// Ethers
import { Contract } from "@ethersproject/contracts"
import { Provider } from '@ethersproject/abstract-provider'

// Interface
import iComptroller from "../../../Interfaces/iComptroller"

/**
 * @param comptrollerAddress - Address of comptroller to query.
 * @returns - An array of all markets available in given comptroller. (string[])
 */
export async function fetchAllMarkets(
    comptrollerAddress: string,
    provider: Provider
  ): Promise<string[]> {
    const comptrollerContract = new Contract(
      comptrollerAddress,
      iComptroller,
      provider
    )

    const availableMarkets = await comptrollerContract.callStatic.getAllMarkets()
    return availableMarkets
}