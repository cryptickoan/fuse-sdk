import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Flywheel, FlywheelInterface } from "../Flywheel";
export declare class Flywheel__factory {
    static readonly abi: {
        inputs: any[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): FlywheelInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Flywheel;
}
