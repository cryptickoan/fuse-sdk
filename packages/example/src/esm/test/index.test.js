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
// Utils
import { initiateAnvilNode } from './utils';
// SDK
import colors from 'colors';
import { marketInteractionTests } from './market-interactions.test';
import { utilsTests } from './utils.test';
describe('Fuse', () => {
    let anvilNodeProcess;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        anvilNodeProcess = yield initiateAnvilNode();
    }));
    describe('Pool', () => {
        describe('utils', utilsTests);
        describe('market-interactions', marketInteractionTests);
    });
    afterAll(() => {
        if (!(process.env.NODE === 'false')) {
            anvilNodeProcess.kill();
            console.log(colors.green('Anvil node terminated successfully!'));
        }
    });
});
