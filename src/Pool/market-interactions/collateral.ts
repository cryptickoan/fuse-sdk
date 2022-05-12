// Ethers
import { Web3Provider, JsonRpcProvider } from '@ethersproject/providers';
import { Comptroller__factory } from "../../abis/types";

// SDK
import { actionType } from "../types";

/**
 * @param comptrollerAddress - Address of the comptroller where the market is listed.
 * @param marketAddress - Address of market to interact with.
 * @param action - Enter or exit.
 */
export async function collateral(
    provider: Web3Provider | JsonRpcProvider,
    comptrollerAddress: string,
    action: actionType,
    marketAddress: string[] | string
) {
    const comptrollerContract = Comptroller__factory.connect(comptrollerAddress, provider.getSigner())

    if (action === "enter" && typeof marketAddress === 'object') {
        await comptrollerContract.enterMarkets(marketAddress);
    } if (typeof marketAddress === 'string' && action === "exit") {
        await comptrollerContract.exitMarket(marketAddress);
    }
}



