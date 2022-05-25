var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Ethers
import { One } from '@ethersproject/constants';
import { BigNumber } from '@ethersproject/bignumber';
import { parseEther, parseUnits } from '@ethersproject/units';
import { ERC20__factory } from '../abis/types';
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
export function checkAllowance(provider, tokenAddress, owner, spender, value, approve, // If approve is true and value is greater than allowance, an awaitable tx to approve will be returned otherwise a boolean will be returned.
decimals) {
    return __awaiter(this, void 0, void 0, function* () {
        // Ether does not need approval so return.
        const isEth = tokenAddress === "0x0000000000000000000000000000000000000000";
        if (isEth)
            return;
        // 1. Create contract.
        const erc20Contract = ERC20__factory.connect(tokenAddress, provider.getSigner());
        // 2. Get decimals if they werent provided.
        if (!decimals) {
            decimals = yield erc20Contract.callStatic.decimals();
        }
        // 3. Parse value to uint256 contract call.
        const parsedAmount = decimals.eq(18) || isEth
            ? parseEther(value)
            : parseUnits(value, decimals);
        // 4. Check allowance.
        const allowance = yield erc20Contract.callStatic.allowance(owner, spender);
        const hasApprovedEnough = allowance.gte(parsedAmount);
        // 5. Approve if requested.
        if (!hasApprovedEnough && approve) {
            const max = BigNumber.from(2).pow(BigNumber.from(256)).sub(One); //big fucking #
            return yield erc20Contract.approve(spender, max);
        }
        return { hasApprovedEnough, allowance };
    });
}
