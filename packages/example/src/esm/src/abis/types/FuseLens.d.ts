import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace FusePoolLens {
    type FusePoolAssetStruct = {
        cToken: string;
        underlyingToken: string;
        underlyingName: string;
        underlyingSymbol: string;
        underlyingDecimals: BigNumberish;
        underlyingBalance: BigNumberish;
        supplyRatePerBlock: BigNumberish;
        borrowRatePerBlock: BigNumberish;
        totalSupply: BigNumberish;
        totalBorrow: BigNumberish;
        supplyBalance: BigNumberish;
        borrowBalance: BigNumberish;
        liquidity: BigNumberish;
        membership: boolean;
        exchangeRate: BigNumberish;
        underlyingPrice: BigNumberish;
        oracle: string;
        collateralFactor: BigNumberish;
        reserveFactor: BigNumberish;
        adminFee: BigNumberish;
        fuseFee: BigNumberish;
        borrowGuardianPaused: boolean;
    };
    type FusePoolAssetStructOutput = [
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
    ] & {
        cToken: string;
        underlyingToken: string;
        underlyingName: string;
        underlyingSymbol: string;
        underlyingDecimals: BigNumber;
        underlyingBalance: BigNumber;
        supplyRatePerBlock: BigNumber;
        borrowRatePerBlock: BigNumber;
        totalSupply: BigNumber;
        totalBorrow: BigNumber;
        supplyBalance: BigNumber;
        borrowBalance: BigNumber;
        liquidity: BigNumber;
        membership: boolean;
        exchangeRate: BigNumber;
        underlyingPrice: BigNumber;
        oracle: string;
        collateralFactor: BigNumber;
        reserveFactor: BigNumber;
        adminFee: BigNumber;
        fuseFee: BigNumber;
        borrowGuardianPaused: boolean;
    };
}
export interface FuseLensInterface extends utils.Interface {
    functions: {
        "getPoolAssetsWithData(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getPoolAssetsWithData"): FunctionFragment;
    encodeFunctionData(functionFragment: "getPoolAssetsWithData", values: [string]): string;
    decodeFunctionResult(functionFragment: "getPoolAssetsWithData", data: BytesLike): Result;
    events: {};
}
export interface FuseLens extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: FuseLensInterface;
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
        getPoolAssetsWithData(comptroller: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    getPoolAssetsWithData(comptroller: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getPoolAssetsWithData(comptroller: string, overrides?: CallOverrides): Promise<FusePoolLens.FusePoolAssetStructOutput[]>;
    };
    filters: {};
    estimateGas: {
        getPoolAssetsWithData(comptroller: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getPoolAssetsWithData(comptroller: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
