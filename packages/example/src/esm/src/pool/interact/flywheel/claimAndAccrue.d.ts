import { JsonRpcProvider, Web3Provider } from "@ethersproject/providers";
export declare const claimAndAccrue: (provider: Web3Provider | JsonRpcProvider, flywheelWithContext: any, flywheel: string, userAddress: string) => Promise<import("ethers").ContractTransaction>;
