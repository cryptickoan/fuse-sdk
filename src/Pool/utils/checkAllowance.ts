// Ethers
import { One } from '@ethersproject/constants';
import { BigNumber } from '@ethersproject/bignumber';
import { Contract } from '@ethersproject/contracts';
import { parseEther, parseUnits } from '@ethersproject/units';
import { Web3Provider, JsonRpcProvider } from '@ethersproject/providers';
import iERC20 from '../../Interfaces/iERC20';

/**
 * This function will check current allowance for the given spender.
 * @param provider - An initiated ethers provider.
 * @param tokenAddress - The token to check for.
 * @param owner - Owner of tokens to be spent.
 * @param spender - Spender of the tokens.
 * @param value - Amount to be spent, as a string.
 * @param approve - If true this function will return an awaitable tx to approve spender the MAX amount.
 * @param decimals - Decimals of the underlying ERC20. i.e DAI = 18, USDC = 6.
 */
export async function checkAllowance(
    provider: Web3Provider | JsonRpcProvider,
    tokenAddress: string,
    owner:string,
    spender: string,
    value: string,
    approve: boolean, // If approve is true and value is greater than allowance, an awaitable tx to approve will be returned otherwise a boolean will be returned.
    decimals?: BigNumber, // If decimals of the token are not provided this function will fetch them.
): Promise<boolean | any> {
    // Ether does not need approval so return.
    const isEth = tokenAddress === "0x0000000000000000000000000000000000000000"
    if (isEth) return
    
    // 1. Create contract.
    const erc20Contract = new Contract(
        tokenAddress,
        iERC20,
        provider.getSigner(owner)
    )

    // 2. Get decimals if they werent provided.
    if (!decimals) {
        decimals = await erc20Contract.callStatic.decimals()
    }

    // 3. Parse value to uint256 contract call.
    const parsedAmount = decimals.eq(18) || isEth 
        ? parseEther(value) 
        : parseUnits(value, decimals)


    // 4. Check allowance.
    const allowance = await erc20Contract.callStatic.allowance(owner, spender)
    const hasApprovedEnough = allowance.gte(parsedAmount);

    // 5. Approve if requested.
    if (!hasApprovedEnough && approve) {
        const max = BigNumber.from(2).pow(BigNumber.from(256)).sub(One); //big fucking #
        return await erc20Contract.approve(spender, max);
    }

    return {hasApprovedEnough, allowance}
}