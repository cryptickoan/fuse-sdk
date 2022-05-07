// Ethers
import { One } from '@ethersproject/constants';
import { BigNumber } from '@ethersproject/bignumber';
import { Contract } from '@ethersproject/contracts';
import { parseEther, parseUnits } from '@ethersproject/units';
import { Interface } from '@ethersproject/abi';
import { Web3Provider, JsonRpcProvider } from '@ethersproject/providers';

/**
 * This function will check current allowance of the market address. If allowance is not enough it'll increase given allowance. 
 * This is necessary because the market will be executing the transaction on behalf of the user, so it needs permission to use funds.
 * @param userAddress - Address of user to check allowance for.
 * @param marketAddress - Market/ctoken to give approval to.
 * @param underlyingAddress - The token to approve.
 * @param amount - Amount user is supplying.
 * @param decimals - Decimals of the underlying ERC20. i.e DAI = 18, USDC = 6.
 */
export async function checkAllowanceAndApprove(
    userAddress:string,
    marketAddress: string,
    underlyingAddress: string,
    amount: string,
    decimals: BigNumber,
    provider: Web3Provider | JsonRpcProvider
) {
    const isEth = underlyingAddress === "0x0000000000000000000000000000000000000000"
    if (isEth) return
    
    const erc20Interface = new Interface([
        'function allowance(address owner, address spender) public view returns (uint256 remaining)',
        'function approve(address spender, uint256 value) public returns (bool success)',
    ])

    const erc20Contract = new Contract(
        underlyingAddress,
        erc20Interface,
        provider.getSigner(userAddress)
    )

    

    // 3. Parse given amount.
    const parsedAmount = decimals.eq(18) || isEth 
        ? parseEther(amount) 
        : parseUnits(amount, decimals)

    const hasApprovedEnough = (
        await erc20Contract.callStatic.allowance(userAddress, marketAddress)
    ).gte(parsedAmount);
        
    if (!hasApprovedEnough) {
        const max = BigNumber.from(2).pow(BigNumber.from(256)).sub(One); //big fucking #
        await erc20Contract.approve(marketAddress, max);
    }
}