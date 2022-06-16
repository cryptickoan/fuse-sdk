// Ethers
import { parseEther, parseUnits } from "@ethersproject/units";
import { BigNumber } from "@ethersproject/bignumber";
import { Web3Provider, JsonRpcProvider } from '@ethersproject/providers';

// SDK Utils
import { getDecimals } from "@fuse-v1/utils.sdk";

// Contract 
import { CErc20__factory, CEther__factory } from "@fuse-v1/core";

// Internal
    // Utils
import { testForCTokenErrorAndSend } from './utils/testForCTokenErrorAndSend';
    // Types
import { marketInteractionType } from '../../types';

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
    const isEth = underlyingAddress === "0x0000000000000000000000000000000000000000"
    
    const cTokenContract = isEth ? CEther__factory.connect(cTokenAddress, provider.getSigner()) : CErc20__factory.connect(cTokenAddress, provider.getSigner())
    
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
                cTokenContract.callStatic.borrow,
                parsedAmount,
                cTokenContract.borrow,
                "Cannot borrow this amount right now!"
              );
              break
        case 'repay':
            if (!isEth) {   
                await testForCTokenErrorAndSend(
                    cTokenContract.callStatic.repayBorrow,
                    parsedAmount,
                    cTokenContract.repayBorrow,
                    "Cannot repay this amount right now!"
                );
            } else {
                await cTokenContract.repayBorrow(
                    parsedAmount
                );
            }
            break
        case 'supply':
            if (!isEth) {
                await testForCTokenErrorAndSend(
                    cTokenContract.callStatic.mint,
                    parsedAmount,
                    cTokenContract.mint,
                    "Cannot deposit this amount right now!"
                ); 
            } else {
                return await cTokenContract.mint(
                    parsedAmount
                );
            }
            break
        default:
            break;
    }
}