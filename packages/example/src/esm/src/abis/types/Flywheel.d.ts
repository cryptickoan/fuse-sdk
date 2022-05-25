import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface FlywheelInterface extends utils.Interface {
    functions: {
        "isFlywheel()": FunctionFragment;
        "isRewardsDistributor()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "isFlywheel" | "isRewardsDistributor"): FunctionFragment;
    encodeFunctionData(functionFragment: "isFlywheel", values?: undefined): string;
    encodeFunctionData(functionFragment: "isRewardsDistributor", values?: undefined): string;
    decodeFunctionResult(functionFragment: "isFlywheel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isRewardsDistributor", data: BytesLike): Result;
    events: {};
}
export interface Flywheel extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: FlywheelInterface;
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
        isFlywheel(overrides?: CallOverrides): Promise<[boolean]>;
        isRewardsDistributor(overrides?: CallOverrides): Promise<[boolean]>;
    };
    isFlywheel(overrides?: CallOverrides): Promise<boolean>;
    isRewardsDistributor(overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        isFlywheel(overrides?: CallOverrides): Promise<boolean>;
        isRewardsDistributor(overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        isFlywheel(overrides?: CallOverrides): Promise<BigNumber>;
        isRewardsDistributor(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        isFlywheel(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isRewardsDistributor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
