import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Comptroller, ComptrollerInterface } from "../Comptroller";
export declare class Comptroller__factory {
    static readonly abi: {
        constant: boolean;
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
        payable: boolean;
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ComptrollerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Comptroller;
}
