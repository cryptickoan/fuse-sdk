import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { MPO, MPOInterface } from "../MPO";
export declare class MPO__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): MPOInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MPO;
}
