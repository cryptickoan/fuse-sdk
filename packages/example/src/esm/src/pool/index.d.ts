import { JsonRpcProvider, Web3Provider } from "@ethersproject/providers";
import { PoolInstance } from "./types";
/**
 * @param provider - An initiated ethers provider.
 * @param chainId - The chain ID. Arbitrum, Arbi Rinkeby and Mainnet are supported.
 * @param poolId - The pool's id.
 * @returns An interface that'll let apps interact with the given fuse pool. (read/write functions).
 */
export declare const Pool: (provider: Web3Provider | JsonRpcProvider, chainId: number, poolId: number) => Promise<PoolInstance | undefined>;
