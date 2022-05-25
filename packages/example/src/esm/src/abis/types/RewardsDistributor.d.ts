import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface RewardsDistributorInterface extends utils.Interface {
    functions: {
        "getAllMarkets()": FunctionFragment;
        "compSupplySpeeds(address)": FunctionFragment;
        "compBorrowSpeeds(address)": FunctionFragment;
        "rewardToken()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getAllMarkets" | "compSupplySpeeds" | "compBorrowSpeeds" | "rewardToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "getAllMarkets", values?: undefined): string;
    encodeFunctionData(functionFragment: "compSupplySpeeds", values: [string]): string;
    encodeFunctionData(functionFragment: "compBorrowSpeeds", values: [string]): string;
    encodeFunctionData(functionFragment: "rewardToken", values?: undefined): string;
    decodeFunctionResult(functionFragment: "getAllMarkets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compSupplySpeeds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compBorrowSpeeds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardToken", data: BytesLike): Result;
    events: {};
}
export interface RewardsDistributor extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RewardsDistributorInterface;
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
        getAllMarkets(overrides?: CallOverrides): Promise<[string[]]>;
        compSupplySpeeds(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        compBorrowSpeeds(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        rewardToken(overrides?: CallOverrides): Promise<[string]>;
    };
    getAllMarkets(overrides?: CallOverrides): Promise<string[]>;
    compSupplySpeeds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    compBorrowSpeeds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    rewardToken(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        getAllMarkets(overrides?: CallOverrides): Promise<string[]>;
        compSupplySpeeds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        compBorrowSpeeds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        rewardToken(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        getAllMarkets(overrides?: CallOverrides): Promise<BigNumber>;
        compSupplySpeeds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        compBorrowSpeeds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        rewardToken(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getAllMarkets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        compSupplySpeeds(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        compBorrowSpeeds(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
