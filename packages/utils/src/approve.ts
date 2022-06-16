// Ethers
import { MaxUint256 } from '@ethersproject/constants';
import { BigNumber } from '@ethersproject/bignumber';
import { parseEther, parseUnits } from '@ethersproject/units';
import { Web3Provider, JsonRpcProvider } from '@ethersproject/providers';

// Contracts
import { ERC20__factory } from '@fuse-v1/flywheel';

/**
 * This function will approve given value/MaxUint256 to spender.
 * @param provider - An initiated ethers provider.
 * @param tokenAddress - The token to check for.
 * @param owner - Owner of tokens to be spent.
 * @param spender - Spender of the tokens.
 * @param value - Amount to be spent, as a string. Optional. If its not given MaxUint256 will be used.
 * @param decimals - Decimals of the underlying ERC20. i.e DAI = 18, USDC = 6. Optional. Will be fetched if omitted.
 */
export async function approve(
    provider: Web3Provider | JsonRpcProvider,
    tokenAddress: string,
    owner:string,
    spender: string,
    value?: string,
    decimals?: BigNumber, // If decimals of the token are not provided this function will fetch them.
): Promise<boolean | any> {
    // Ether does not need approval so return.
    const isEth = tokenAddress === "0x0000000000000000000000000000000000000000"
    if (isEth) return
    
    // 1. Create contract.
    const erc20Contract = ERC20__factory.connect(tokenAddress, provider.getSigner())

    // 2. If a value was provided, parse it.
    let parsedAmount: null | BigNumber = null
    if (value) {
        // Get decimals
        if (!decimals) {
            decimals = BigNumber.from(await erc20Contract.callStatic.decimals())
        }

        // Parse
        parsedAmount = decimals.eq(18) || isEth 
        ? parseEther(value) 
        : parseUnits(value, decimals)
    }

    // 3. Approve
    const amount = parsedAmount ?? MaxUint256
    return await erc20Contract.approve(spender, amount);
}