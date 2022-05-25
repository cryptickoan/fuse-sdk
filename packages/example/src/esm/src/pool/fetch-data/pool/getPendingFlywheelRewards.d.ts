import { Provider } from "@ethersproject/abstract-provider";
import { BigNumber } from "ethers";
export declare const getPendingFlywheelRewards: (provider: Provider, flywheels: string[], userAddress: string) => Promise<{
    supply: FlywheelSupplyRewards;
    borrow: any;
}>;
declare type FlywheelSupplyRewards = {
    [flywheel: string]: {
        shouldAccrue: AccrueInfo;
        accruedRewards: BigNumber;
    };
};
declare type AccrueInfo = {
    [market: string]: {
        lastUpdatedTimeStamp: number;
        currentTimeStamp: string;
        timeSinceLastAccrue: number;
        shouldUpdate: boolean;
        userIsActive: boolean;
    };
};
export {};
