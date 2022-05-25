import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { FuseDirectory, FuseDirectoryInterface } from "../FuseDirectory";
export declare class FuseDirectory__factory {
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
    static createInterface(): FuseDirectoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FuseDirectory;
}
