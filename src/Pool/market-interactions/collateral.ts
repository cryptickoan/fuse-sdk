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
    provider: Web3Provider | JsonRpcProvider,
    comptrollerAddress: string,
    action: actionType,
    marketAddress: string[]
) {
    const comptrollerInterface = new Interface([
        'function enterMarkets(address[]) external returns (uint[])',
        'function exitMarket(address cTokenAddress) external returns (uint) '
    ])

    const comptrollerContract = new Contract(
        comptrollerAddress,
        comptrollerInterface,
        provider.getSigner('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')
    )

    if (action === "enter") {
        await comptrollerContract.enterMarkets(marketAddress);
    } else {
        await comptrollerContract.exitMarket(marketAddress);
    }
}



