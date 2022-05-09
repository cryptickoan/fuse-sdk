// Ethers
import { Contract } from "@ethersproject/contracts";
import { parseEther, parseUnits } from "@ethersproject/units";
import { BigNumber } from "@ethersproject/bignumber";
import { Web3Provider, JsonRpcProvider } from '@ethersproject/providers';

// Internal
    // Utils
import { testForCTokenErrorAndSend } from "./utils/testForCTokenErrorAndSend";
import { getDecimals } from "../fetch-data/misc/getDecimals";
    // Types
import { marketInteractionType } from "../types";
    // Interfaces
import iCToken from "../../Interfaces/iCToken";

/**
 * @param action - Type of action to perform. i.e borrow, withdraw, repay.
 * @param cTokenAddress - Address of market to withdraw from.
 * @param amount - The amount to withdraw.
 * @param tokenAddress - Address of the market's underlying asset.
 * @param decimals - Underlying token's decimals. i.e DAI = 18.
 */
export async function marketInteraction(
    action: marketInteractionType,
    cTokenAddress: string,
    amount: string,
    tokenAddress: string,
    provider: Web3Provider | JsonRpcProvider,
    decimals?: BigNumber,
) {

    // 1. Initiate market/ctoken contract.
    const cTokenContract = new Contract(
        cTokenAddress,
        iCToken,
        provider.getSigner()
    )

    const isEth = tokenAddress === "0x0000000000000000000000000000000000000000"

    // 2. Parse given amount to the underlying asset's notation.
        // Fetch decimals if not given.
        if(!decimals && !isEth){
            decimals = await getDecimals(
                provider,
                tokenAddress
            )
        }

    // 3. Parse given amount.
    const parsedAmount = decimals.eq(18) || isEth 
        ? parseEther(amount) 
        : parseUnits(amount, decimals)
    
    // 4. Perform action.
    switch (action) {
        case 'withdraw':
            await testForCTokenErrorAndSend(
                cTokenContract.callStatic.redeemUnderlying,
                parsedAmount,
                cTokenContract.redeemUnderlying,
                "Cannot withdraw this amount right now!"
              );
            break;
        case 'borrow':
            await testForCTokenErrorAndSend(
                cTokenContract.callStatic['borrow(uint256)'],
                parsedAmount,
                cTokenContract['borrow(uint256)'],
                "Cannot borrow this amount right now!"
              );
              break
        case 'repay':
            if (!isEth) {   
                await testForCTokenErrorAndSend(
                    cTokenContract.callStatic['repayBorrow(uint256)'],
                    parsedAmount,
                    cTokenContract['repayBorrow(uint256)'],
                    "Cannot repay this amount right now!"
                );
            } else {
                await cTokenContract['repayBorrow()']({
                    value: parsedAmount,
                });
            }
            break
        case 'supply':
            if (!isEth) {
                await testForCTokenErrorAndSend(
                    cTokenContract.callStatic['mint(uint256)'],
                    parsedAmount,
                    cTokenContract['mint(uint256)'],
                    "Cannot deposit this amount right now!"
                ); 
            } else {
                await cTokenContract['mint()']({ 
                    value: parsedAmount
                });
            }
            break
        default:
            break;
    }
}