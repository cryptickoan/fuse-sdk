var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import 'dotenv/config';
// SDK
import { formatEther } from 'ethers/lib/utils';
import { JsonRpcProvider } from '@ethersproject/providers';
import { Pool } from '../src';
import { Comptroller__factory } from '../src/abis/types';
const provider = new JsonRpcProvider("http://127.0.0.1:8545");
export const marketInteractionTests = () => {
    it('Should supply', () => __awaiter(void 0, void 0, void 0, function* () {
        const fuse = yield Pool(provider, 1, 156);
        jest.setTimeout(900 * 1000);
        const comptroller = Comptroller__factory.connect(fuse.comptroller, provider);
        const shouldBeFalse = yield comptroller.callStatic.suppliers('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');
        const receipt = yield fuse.interact.supply("0xe92a3db67e4b6AC86114149F522644b34264f858", "2000", "0x0000000000000000000000000000000000000000", null, '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');
        const balance = yield fuse.utils.fetchTokenBalance('0x0000000000000000000000000000000000000000', '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');
        const shouldBeTrue = yield comptroller.callStatic.suppliers('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');
        expect(shouldBeTrue).toBe(true);
        expect(shouldBeFalse).toBe(false);
    }));
    it('Should enter market', () => __awaiter(void 0, void 0, void 0, function* () {
        const fuse = yield Pool(provider, 1, 156);
        const comptroller = Comptroller__factory.connect(fuse.comptroller, provider);
        const shouldBeFalse = (yield comptroller.callStatic.getAllBorrowers()).includes('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');
        yield fuse.interact.enterMarkets(['0xe92a3db67e4b6AC86114149F522644b34264f858']);
        const shouldBeTrue = (yield comptroller.callStatic.getAllBorrowers()).includes('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');
        expect(shouldBeFalse).toBe(false);
        expect(shouldBeTrue).toBe(true);
    }));
    it('Should borrow', () => __awaiter(void 0, void 0, void 0, function* () {
        const fuse = yield Pool(provider, 1, 156);
        jest.setTimeout(900 * 1000);
        yield fuse.interact.enterMarkets(['0xe92a3db67e4b6AC86114149F522644b34264f858']);
        yield fuse.interact.borrow("0xe92a3db67e4b6AC86114149F522644b34264f858", "1", "0x0000000000000000000000000000000000000000");
    }));
    it('Should repay', () => __awaiter(void 0, void 0, void 0, function* () {
        const fuse = yield Pool(provider, 1, 156);
        yield fuse.interact.repay("0xe92a3db67e4b6AC86114149F522644b34264f858", "1", "0x0000000000000000000000000000000000000000");
        const balance = yield fuse.utils.fetchTokenBalance('0x0000000000000000000000000000000000000000', '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');
        expect(formatEther(balance)).toContain("7999");
    }));
    it('Should withdraw', () => __awaiter(void 0, void 0, void 0, function* () {
        const fuse = yield Pool(provider, 1, 156);
        yield fuse.interact.withdraw("0xe92a3db67e4b6AC86114149F522644b34264f858", "1500", "0x0000000000000000000000000000000000000000");
        const balance = yield fuse.utils.fetchTokenBalance('0x0000000000000000000000000000000000000000', '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');
        expect(formatEther(balance)).toContain("9499");
    }));
};
describe('Market Interactions', marketInteractionTests);
