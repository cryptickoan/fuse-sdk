import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ComptrollerInterface extends utils.Interface {
    functions: {
        "getRewardsDistributors()": FunctionFragment;
        "getAllMarkets()": FunctionFragment;
        "oracle()": FunctionFragment;
        "admin()": FunctionFragment;
        "suppliers(address)": FunctionFragment;
        "getAllBorrowers()": FunctionFragment;
        "enterMarkets(address[])": FunctionFragment;
        "exitMarket(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getRewardsDistributors" | "getAllMarkets" | "oracle" | "admin" | "suppliers" | "getAllBorrowers" | "enterMarkets" | "exitMarket"): FunctionFragment;
    encodeFunctionData(functionFragment: "getRewardsDistributors", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllMarkets", values?: undefined): string;
    encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "suppliers", values: [string]): string;
    encodeFunctionData(functionFragment: "getAllBorrowers", values?: undefined): string;
    encodeFunctionData(functionFragment: "enterMarkets", values: [string[]]): string;
    encodeFunctionData(functionFragment: "exitMarket", values: [string]): string;
    decodeFunctionResult(functionFragment: "getRewardsDistributors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllMarkets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "suppliers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllBorrowers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enterMarkets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exitMarket", data: BytesLike): Result;
    events: {};
}
export interface Comptroller extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ComptrollerInterface;
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
        getRewardsDistributors(overrides?: CallOverrides): Promise<[string[]]>;
        getAllMarkets(overrides?: CallOverrides): Promise<[string[]]>;
        oracle(overrides?: CallOverrides): Promise<[string]>;
        admin(overrides?: CallOverrides): Promise<[string]>;
        suppliers(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        getAllBorrowers(overrides?: CallOverrides): Promise<[string[]]>;
        enterMarkets(cTokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        exitMarket(cTokenAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    getRewardsDistributors(overrides?: CallOverrides): Promise<string[]>;
    getAllMarkets(overrides?: CallOverrides): Promise<string[]>;
    oracle(overrides?: CallOverrides): Promise<string>;
    admin(overrides?: CallOverrides): Promise<string>;
    suppliers(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    getAllBorrowers(overrides?: CallOverrides): Promise<string[]>;
    enterMarkets(cTokens: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    exitMarket(cTokenAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getRewardsDistributors(overrides?: CallOverrides): Promise<string[]>;
        getAllMarkets(overrides?: CallOverrides): Promise<string[]>;
        oracle(overrides?: CallOverrides): Promise<string>;
        admin(overrides?: CallOverrides): Promise<string>;
        suppliers(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        getAllBorrowers(overrides?: CallOverrides): Promise<string[]>;
        enterMarkets(cTokens: string[], overrides?: CallOverrides): Promise<BigNumber[]>;
        exitMarket(cTokenAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        getRewardsDistributors(overrides?: CallOverrides): Promise<BigNumber>;
        getAllMarkets(overrides?: CallOverrides): Promise<BigNumber>;
        oracle(overrides?: CallOverrides): Promise<BigNumber>;
        admin(overrides?: CallOverrides): Promise<BigNumber>;
        suppliers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAllBorrowers(overrides?: CallOverrides): Promise<BigNumber>;
        enterMarkets(cTokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        exitMarket(cTokenAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getRewardsDistributors(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllMarkets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        suppliers(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllBorrowers(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        enterMarkets(cTokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        exitMarket(cTokenAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
