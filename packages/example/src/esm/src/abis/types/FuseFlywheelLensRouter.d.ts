import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace FuseFlywheelLensRouter {
    type RewardsInfoStruct = {
        rewardSpeedPerSecondPerToken: BigNumberish;
        rewardTokenPrice: BigNumberish;
        formattedAPR: BigNumberish;
        flywheel: string;
        rewardToken: string;
    };
    type RewardsInfoStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string
    ] & {
        rewardSpeedPerSecondPerToken: BigNumber;
        rewardTokenPrice: BigNumber;
        formattedAPR: BigNumber;
        flywheel: string;
        rewardToken: string;
    };
    type MarketRewardsInfoStruct = {
        underlyingPrice: BigNumberish;
        market: string;
        rewardsInfo: FuseFlywheelLensRouter.RewardsInfoStruct[];
    };
    type MarketRewardsInfoStructOutput = [
        BigNumber,
        string,
        FuseFlywheelLensRouter.RewardsInfoStructOutput[]
    ] & {
        underlyingPrice: BigNumber;
        market: string;
        rewardsInfo: FuseFlywheelLensRouter.RewardsInfoStructOutput[];
    };
}
export interface FuseFlywheelLensRouterInterface extends utils.Interface {
    functions: {
        "getMarketRewardsInfo(address)": FunctionFragment;
        "getUnclaimedRewardsByMarkets(address,address[],address[],bool[])": FunctionFragment;
        "getUnclaimedRewardsForMarket(address,address,address[],bool[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getMarketRewardsInfo" | "getUnclaimedRewardsByMarkets" | "getUnclaimedRewardsForMarket"): FunctionFragment;
    encodeFunctionData(functionFragment: "getMarketRewardsInfo", values: [string]): string;
    encodeFunctionData(functionFragment: "getUnclaimedRewardsByMarkets", values: [string, string[], string[], boolean[]]): string;
    encodeFunctionData(functionFragment: "getUnclaimedRewardsForMarket", values: [string, string, string[], boolean[]]): string;
    decodeFunctionResult(functionFragment: "getMarketRewardsInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUnclaimedRewardsByMarkets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUnclaimedRewardsForMarket", data: BytesLike): Result;
    events: {};
}
export interface FuseFlywheelLensRouter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: FuseFlywheelLensRouterInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        getMarketRewardsInfo(comptroller: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getUnclaimedRewardsByMarkets(user: string, markets: string[], flywheels: string[], accrue: boolean[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getUnclaimedRewardsForMarket(user: string, market: string, flywheels: string[], accrue: boolean[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    getMarketRewardsInfo(comptroller: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getUnclaimedRewardsByMarkets(user: string, markets: string[], flywheels: string[], accrue: boolean[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getUnclaimedRewardsForMarket(user: string, market: string, flywheels: string[], accrue: boolean[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getMarketRewardsInfo(comptroller: string, overrides?: CallOverrides): Promise<FuseFlywheelLensRouter.MarketRewardsInfoStructOutput[]>;
        getUnclaimedRewardsByMarkets(user: string, markets: string[], flywheels: string[], accrue: boolean[], overrides?: CallOverrides): Promise<BigNumber[]>;
        getUnclaimedRewardsForMarket(user: string, market: string, flywheels: string[], accrue: boolean[], overrides?: CallOverrides): Promise<BigNumber[]>;
    };
    filters: {};
    estimateGas: {
        getMarketRewardsInfo(comptroller: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getUnclaimedRewardsByMarkets(user: string, markets: string[], flywheels: string[], accrue: boolean[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getUnclaimedRewardsForMarket(user: string, market: string, flywheels: string[], accrue: boolean[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getMarketRewardsInfo(comptroller: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getUnclaimedRewardsByMarkets(user: string, markets: string[], flywheels: string[], accrue: boolean[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getUnclaimedRewardsForMarket(user: string, market: string, flywheels: string[], accrue: boolean[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
