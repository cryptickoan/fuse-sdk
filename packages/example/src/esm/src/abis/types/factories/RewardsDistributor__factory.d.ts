import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { RewardsDistributor, RewardsDistributorInterface } from "../RewardsDistributor";
export declare class RewardsDistributor__factory {
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
    static createInterface(): RewardsDistributorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): RewardsDistributor;
}
