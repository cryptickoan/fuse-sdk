var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { JsonRpcProvider } from "@ethersproject/providers";
import { Pool } from "./pool";
const provider = new JsonRpcProvider('http://127.0.0.1:8545/');
export const getPool = () => __awaiter(void 0, void 0, void 0, function* () {
    const pool = yield Pool(provider, 31337, 1);
    return pool;
});
