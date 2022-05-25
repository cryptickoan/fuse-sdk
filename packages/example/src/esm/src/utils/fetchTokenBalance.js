var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { WeiPerEther } from '@ethersproject/constants';
import { ERC20__factory } from '../abis/types';
/**
 *
 * @param tokenAddress - Token address to get balance from. (ERC20)
 * @param address - User's address to use. If not present the provider's user address will be used.
 * @param parse - This is a boolean. If true, the function will return an integer, otherwise a BigNumber will be returned.
 * @returns - The user's balance. Number or BigNumber.
 */
export function fetchTokenBalance(provider, tokenAddress, address, parse) {
    return __awaiter(this, void 0, void 0, function* () {
        let balance;
        if (!tokenAddress)
            return 0;
        if (tokenAddress === "0x0000000000000000000000000000000000000000" ||
            tokenAddress === "NO_ADDRESS_HERE_USE_WETH_FOR_ADDRESS") {
            balance = yield provider.getBalance(address);
        }
        else {
            const contract = ERC20__factory.connect(tokenAddress, provider);
            balance = yield contract.callStatic.balanceOf(address);
        }
        if (parse) {
            const parsedBalance = parseFloat(balance.div(WeiPerEther).toString());
            return parsedBalance;
        }
        return balance;
    });
}
;
