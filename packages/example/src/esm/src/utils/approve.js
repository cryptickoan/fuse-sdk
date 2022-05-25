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
import { MaxUint256 } from '@ethersproject/constants';
import { parseEther, parseUnits } from '@ethersproject/units';
import { ERC20__factory } from '../abis/types';
/**
 * This function will approve given value/MaxUint256 to spender.
 * @param provider - An initiated ethers provider.
 * @param tokenAddress - The token to check for.
 * @param owner - Owner of tokens to be spent.
 * @param spender - Spender of the tokens.
 * @param value - Amount to be spent, as a string. Optional. If its not given MaxUint256 will be used.
 * @param decimals - Decimals of the underlying ERC20. i.e DAI = 18, USDC = 6. Optional. Will be fetched if omitted.
 */
export function approve(provider, tokenAddress, owner, spender, value, decimals) {
    return __awaiter(this, void 0, void 0, function* () {
        // Ether does not need approval so return.
        const isEth = tokenAddress === "0x0000000000000000000000000000000000000000";
        if (isEth)
            return;
        // 1. Create contract.
        const erc20Contract = ERC20__factory.connect(tokenAddress, provider.getSigner());
        // 2. If a value was provided, parse it.
        let parsedAmount = null;
        if (value) {
            // Get decimals
            if (!decimals) {
                decimals = yield erc20Contract.callStatic.decimals();
            }
            // Parse
            parsedAmount = decimals.eq(18) || isEth
                ? parseEther(value)
                : parseUnits(value, decimals);
        }
        // 3. Approve
        const amount = parsedAmount !== null && parsedAmount !== void 0 ? parsedAmount : MaxUint256;
        return yield erc20Contract.approve(spender, amount);
    });
}
