var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ERC20__factory } from "../abis/types";
/**
 * @param provider - An initiated ethers provider.
 * @param tokenAddress - Address of the token to get decimals for.
 * @returns - The decimals of given token.
 */
export function getDecimals(provider, tokenAddress) {
    return __awaiter(this, void 0, void 0, function* () {
        const erc20Contract = ERC20__factory.connect(tokenAddress, provider);
        return yield erc20Contract.callStatic.decimals();
    });
}
