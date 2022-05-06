// Ethers
import { Contract } from "@ethersproject/contracts"

// Interface
import iComptroller from "../../../Interfaces/iComptroller"

/**
 * @param comptrollerAddress - Address of comptroller to query.
 * @returns - An array of all markets available in given comptroller. (string[])
 */
export async function fetchAllMarkets(
    comptrollerAddress: string,
  ): Promise<string[]> {
    const comptrollerContract = new Contract(
      comptrollerAddress,
      iComptroller,
      this._provider
    )

    const availableMarkets = await comptrollerContract.callStatic.getAllMarkets()
    return availableMarkets
}