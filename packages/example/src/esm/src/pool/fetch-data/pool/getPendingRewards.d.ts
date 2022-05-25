import { Provider } from "@ethersproject/abstract-provider";
export declare const getPendingRewards: (provider: Provider, flywheels: string[], userAddress: string) => Promise<{
    supply: any;
    borrow: any;
}>;
