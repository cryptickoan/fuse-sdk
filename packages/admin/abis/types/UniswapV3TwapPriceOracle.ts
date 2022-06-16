/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface UniswapV3TwapPriceOracleInterface extends utils.Interface {
  functions: {
    "TWAP_PERIOD()": FunctionFragment;
    "WETH()": FunctionFragment;
    "feeTier()": FunctionFragment;
    "getUnderlyingPrice(address)": FunctionFragment;
    "price(address)": FunctionFragment;
    "uniswapV3Factory()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "TWAP_PERIOD"
      | "WETH"
      | "feeTier"
      | "getUnderlyingPrice"
      | "price"
      | "uniswapV3Factory"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "TWAP_PERIOD",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
  encodeFunctionData(functionFragment: "feeTier", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getUnderlyingPrice",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "price",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapV3Factory",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "TWAP_PERIOD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feeTier", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getUnderlyingPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "uniswapV3Factory",
    data: BytesLike
  ): Result;

  events: {};
}

export interface UniswapV3TwapPriceOracle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UniswapV3TwapPriceOracleInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    TWAP_PERIOD(overrides?: CallOverrides): Promise<[number]>;

    WETH(overrides?: CallOverrides): Promise<[string]>;

    feeTier(overrides?: CallOverrides): Promise<[number]>;

    getUnderlyingPrice(
      cToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    price(
      underlying: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    uniswapV3Factory(overrides?: CallOverrides): Promise<[string]>;
  };

  TWAP_PERIOD(overrides?: CallOverrides): Promise<number>;

  WETH(overrides?: CallOverrides): Promise<string>;

  feeTier(overrides?: CallOverrides): Promise<number>;

  getUnderlyingPrice(
    cToken: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  price(
    underlying: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  uniswapV3Factory(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    TWAP_PERIOD(overrides?: CallOverrides): Promise<number>;

    WETH(overrides?: CallOverrides): Promise<string>;

    feeTier(overrides?: CallOverrides): Promise<number>;

    getUnderlyingPrice(
      cToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    price(
      underlying: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    uniswapV3Factory(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    TWAP_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    WETH(overrides?: CallOverrides): Promise<BigNumber>;

    feeTier(overrides?: CallOverrides): Promise<BigNumber>;

    getUnderlyingPrice(
      cToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    price(
      underlying: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    uniswapV3Factory(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    TWAP_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    WETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeTier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUnderlyingPrice(
      cToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    price(
      underlying: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    uniswapV3Factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}