import { JsonRpcProvider } from "@ethersproject/providers";
import { Pool } from "./pool";

const provider = new JsonRpcProvider('http://127.0.0.1:8545/')

export const getPool = async () => {
    const pool: any = await Pool(provider, 31337, 1)
    return pool
}