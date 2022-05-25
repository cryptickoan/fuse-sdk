import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface FuseLensSecondaryInterface extends utils.Interface {
    functions: {
        "getMaxRedeem(address,address)": FunctionFragment;
        "getMaxBorrow(address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getMaxRedeem" | "getMaxBorrow"): FunctionFragment;
    encodeFunctionData(functionFragment: "getMaxRedeem", values: [string, string]): string;
    encodeFunctionData(functionFragment: "getMaxBorrow", values: [string, string]): string;
    decodeFunctionResult(functionFragment: "getMaxRedeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMaxBorrow", data: BytesLike): Result;
    events: {};
}
export interface FuseLensSecondary extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: FuseLensSecondaryInterface;
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
        getMaxRedeem(account: string, cTokenModify: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getMaxBorrow(account: string, cTokenModify: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    getMaxRedeem(account: string, cTokenModify: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getMaxBorrow(account: string, cTokenModify: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getMaxRedeem(account: string, cTokenModify: string, overrides?: CallOverrides): Promise<BigNumber>;
        getMaxBorrow(account: string, cTokenModify: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        getMaxRedeem(account: string, cTokenModify: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getMaxBorrow(account: string, cTokenModify: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getMaxRedeem(account: string, cTokenModify: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getMaxBorrow(account: string, cTokenModify: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
