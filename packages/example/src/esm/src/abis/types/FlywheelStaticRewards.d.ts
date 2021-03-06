import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace FlywheelStaticRewards {
    type RewardsInfoStruct = {
        ufh: BigNumberish;
        undefined: BigNumberish;
    };
    type RewardsInfoStructOutput = [BigNumber, number];
}
export interface FlywheelStaticRewardsInterface extends utils.Interface {
    functions: {
        "authority()": FunctionFragment;
        "flywheel()": FunctionFragment;
        "getAccruedRewards(address,uint32)": FunctionFragment;
        "owner()": FunctionFragment;
        "rewardToken()": FunctionFragment;
        "rewardsInfo(address)": FunctionFragment;
        "setAuthority(address)": FunctionFragment;
        "setOwner(address)": FunctionFragment;
        "setRewardsInfo(address,(uint224,uint32))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "authority" | "flywheel" | "getAccruedRewards" | "owner" | "rewardToken" | "rewardsInfo" | "setAuthority" | "setOwner" | "setRewardsInfo"): FunctionFragment;
    encodeFunctionData(functionFragment: "authority", values?: undefined): string;
    encodeFunctionData(functionFragment: "flywheel", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAccruedRewards", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardsInfo", values: [string]): string;
    encodeFunctionData(functionFragment: "setAuthority", values: [string]): string;
    encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "setRewardsInfo", values: [string, FlywheelStaticRewards.RewardsInfoStruct]): string;
    decodeFunctionResult(functionFragment: "authority", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flywheel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccruedRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardsInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAuthority", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRewardsInfo", data: BytesLike): Result;
    events: {
        "AuthorityUpdated(address,address)": EventFragment;
        "OwnerUpdated(address,address)": EventFragment;
        "RewardsInfoUpdate(address,uint224,uint32)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AuthorityUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardsInfoUpdate"): EventFragment;
}
export interface AuthorityUpdatedEventObject {
    user: string;
    newAuthority: string;
}
export declare type AuthorityUpdatedEvent = TypedEvent<[
    string,
    string
], AuthorityUpdatedEventObject>;
export declare type AuthorityUpdatedEventFilter = TypedEventFilter<AuthorityUpdatedEvent>;
export interface OwnerUpdatedEventObject {
    user: string;
    newOwner: string;
}
export declare type OwnerUpdatedEvent = TypedEvent<[
    string,
    string
], OwnerUpdatedEventObject>;
export declare type OwnerUpdatedEventFilter = TypedEventFilter<OwnerUpdatedEvent>;
export interface RewardsInfoUpdateEventObject {
    strategy: string;
    rewardsPerSecond: BigNumber;
    rewardsEndTimestamp: number;
}
export declare type RewardsInfoUpdateEvent = TypedEvent<[
    string,
    BigNumber,
    number
], RewardsInfoUpdateEventObject>;
export declare type RewardsInfoUpdateEventFilter = TypedEventFilter<RewardsInfoUpdateEvent>;
export interface FlywheelStaticRewards extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: FlywheelStaticRewardsInterface;
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
        authority(overrides?: CallOverrides): Promise<[string]>;
        flywheel(overrides?: CallOverrides): Promise<[string]>;
        getAccruedRewards(strategy: string, lastUpdatedTimestamp: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            amount: BigNumber;
        }>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        rewardToken(overrides?: CallOverrides): Promise<[string]>;
        rewardsInfo(arg0: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            number
        ] & {
            rewardsPerSecond: BigNumber;
            rewardsEndTimestamp: number;
        }>;
        setAuthority(newAuthority: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setOwner(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setRewardsInfo(strategy: string, rewards: FlywheelStaticRewards.RewardsInfoStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    authority(overrides?: CallOverrides): Promise<string>;
    flywheel(overrides?: CallOverrides): Promise<string>;
    getAccruedRewards(strategy: string, lastUpdatedTimestamp: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    rewardToken(overrides?: CallOverrides): Promise<string>;
    rewardsInfo(arg0: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        number
    ] & {
        rewardsPerSecond: BigNumber;
        rewardsEndTimestamp: number;
    }>;
    setAuthority(newAuthority: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setOwner(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setRewardsInfo(strategy: string, rewards: FlywheelStaticRewards.RewardsInfoStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        authority(overrides?: CallOverrides): Promise<string>;
        flywheel(overrides?: CallOverrides): Promise<string>;
        getAccruedRewards(strategy: string, lastUpdatedTimestamp: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        rewardToken(overrides?: CallOverrides): Promise<string>;
        rewardsInfo(arg0: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            number
        ] & {
            rewardsPerSecond: BigNumber;
            rewardsEndTimestamp: number;
        }>;
        setAuthority(newAuthority: string, overrides?: CallOverrides): Promise<void>;
        setOwner(newOwner: string, overrides?: CallOverrides): Promise<void>;
        setRewardsInfo(strategy: string, rewards: FlywheelStaticRewards.RewardsInfoStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AuthorityUpdated(address,address)"(user?: string | null, newAuthority?: string | null): AuthorityUpdatedEventFilter;
        AuthorityUpdated(user?: string | null, newAuthority?: string | null): AuthorityUpdatedEventFilter;
        "OwnerUpdated(address,address)"(user?: string | null, newOwner?: string | null): OwnerUpdatedEventFilter;
        OwnerUpdated(user?: string | null, newOwner?: string | null): OwnerUpdatedEventFilter;
        "RewardsInfoUpdate(address,uint224,uint32)"(strategy?: string | null, rewardsPerSecond?: null, rewardsEndTimestamp?: null): RewardsInfoUpdateEventFilter;
        RewardsInfoUpdate(strategy?: string | null, rewardsPerSecond?: null, rewardsEndTimestamp?: null): RewardsInfoUpdateEventFilter;
    };
    estimateGas: {
        authority(overrides?: CallOverrides): Promise<BigNumber>;
        flywheel(overrides?: CallOverrides): Promise<BigNumber>;
        getAccruedRewards(strategy: string, lastUpdatedTimestamp: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        rewardToken(overrides?: CallOverrides): Promise<BigNumber>;
        rewardsInfo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        setAuthority(newAuthority: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setOwner(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setRewardsInfo(strategy: string, rewards: FlywheelStaticRewards.RewardsInfoStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        authority(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        flywheel(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAccruedRewards(strategy: string, lastUpdatedTimestamp: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardsInfo(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAuthority(newAuthority: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setOwner(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setRewardsInfo(strategy: string, rewards: FlywheelStaticRewards.RewardsInfoStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
