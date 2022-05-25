import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface FuseDirectoryInterface extends utils.Interface {
    functions: {
        "pools(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "pools"): FunctionFragment;
    encodeFunctionData(functionFragment: "pools", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "pools", data: BytesLike): Result;
    events: {};
}
export interface FuseDirectory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: FuseDirectoryInterface;
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
        pools(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            BigNumber,
            BigNumber
        ] & {
            name: string;
            creator: string;
            comptroller: string;
            blockPosted: BigNumber;
            timestampPosted: BigNumber;
        }>;
    };
    pools(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
        string,
        string,
        string,
        BigNumber,
        BigNumber
    ] & {
        name: string;
        creator: string;
        comptroller: string;
        blockPosted: BigNumber;
        timestampPosted: BigNumber;
    }>;
    callStatic: {
        pools(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            BigNumber,
            BigNumber
        ] & {
            name: string;
            creator: string;
            comptroller: string;
            blockPosted: BigNumber;
            timestampPosted: BigNumber;
        }>;
    };
    filters: {};
    estimateGas: {
        pools(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        pools(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
