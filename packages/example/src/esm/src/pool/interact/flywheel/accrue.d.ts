import { JsonRpcProvider, Web3Provider } from "@ethersproject/providers";
export declare const accrue: (provider: Web3Provider | JsonRpcProvider, flywheelAddress: string, strategyAddress: string, userAddress: string) => Promise<import("ethers").ContractTransaction>;
