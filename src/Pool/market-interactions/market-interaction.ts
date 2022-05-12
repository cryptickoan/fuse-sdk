// Ethers
import { Contract } from "@ethersproject/contracts";
import { parseEther, parseUnits } from "@ethersproject/units";
import { BigNumber } from "@ethersproject/bignumber";
import { Web3Provider, JsonRpcProvider } from '@ethersproject/providers';

// Internal
    // Utils
import { testForCTokenErrorAndSend } from "./utils/testForCTokenErrorAndSend";
import { getDecimals } from "../utils/getDecimals";
    // Types
import { marketInteractionType } from "../types";
import { CErc20__factory } from "../../abis/types";

/**
 * @param provider - An initiated ethers provider.
 * @param action - Type of action to perform. i.e borrow, withdraw, repay.
 * @param cTokenAddress - Address of market to withdraw from.
 * @param amount - The amount to withdraw.
 * @param underlyingAddress - Address of the market's underlying asset.
 * @param decimals - Underlying token's decimals. i.e DAI = 18.
 * @param account - User's account. Used only by an rpc node.
 */
export async function marketInteraction(
    provider: Web3Provider | JsonRpcProvider,
    action: marketInteractionType,
    cTokenAddress: string,
    amount: string,
    underlyingAddress: string,
    decimals?: BigNumber,
    account?: string
) {
    // 1. Initiate market/ctoken contract.
    const cTokenContract = CErc20__factory.connect(cTokenAddress, provider.getSigner(account))

    const isEth = underlyingAddress === "0x0000000000000000000000000000000000000000"

    // 2. Parse given amount to the underlying asset's notation.
        // Fetch decimals if not given.
        if(!decimals && !isEth){
            decimals = await getDecimals(
                provider,
                underlyingAddress
            )
        }

    // 3. Parse given amount.
    const parsedAmount = decimals?.eq(18) || isEth 
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
                return await cTokenContract['mint()']({ 
                    value: parsedAmount
                });
            }
            break
        default:
            break;
    }
}