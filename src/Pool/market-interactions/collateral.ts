// Ethers
import { Interface } from "@ethersproject/abi";
import { Contract } from "@ethersproject/contracts";
import { Web3Provider, JsonRpcProvider } from '@ethersproject/providers';

// SDK
import { actionType } from "../types";

/**
 * @param comptrollerAddress - Address of the comptroller where the market is listed.
 * @param marketAddress - Address of market to interact with.
 * @param action - Enter or exit.
 */
export async function collateral(
    comptrollerAddress: string,
    marketAddress: string[],
    action: actionType,
    provider: Web3Provider | JsonRpcProvider
) {
    const comptrollerInterface = new Interface([
        'function enterMarkets(address[] calldata cTokens) external returns (uint[] memory)',
        'function exitMarket(address cTokenAddress) external returns (uint) '
    ])

    const comptrollerContract = new Contract(
        comptrollerAddress,
        comptrollerInterface,
        provider.getSigner()
    )

    // Don't await this, we don't care if it gets executed first!
    if (action === "enter") {
        await comptrollerContract.enterMarkets(marketAddress);
    } else {
        await comptrollerContract.exitMarket(marketAddress);
    }
}



