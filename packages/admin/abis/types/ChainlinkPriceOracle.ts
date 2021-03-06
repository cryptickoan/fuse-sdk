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

export interface ChainlinkPriceOracleInterface extends utils.Interface {
  functions: {
    "BTC_ETH_PRICE_FEED()": FunctionFragment;
    "ETH_USD_PRICE_FEED()": FunctionFragment;
    "btcPriceFeeds(address)": FunctionFragment;
    "ethPriceFeeds(address)": FunctionFragment;
    "getUnderlyingPrice(address)": FunctionFragment;
    "hasPriceFeed(address)": FunctionFragment;
    "maxSecondsBeforePriceIsStale()": FunctionFragment;
    "price(address)": FunctionFragment;
    "usdPriceFeeds(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "BTC_ETH_PRICE_FEED"
      | "ETH_USD_PRICE_FEED"
      | "btcPriceFeeds"
      | "ethPriceFeeds"
      | "getUnderlyingPrice"
      | "hasPriceFeed"
      | "maxSecondsBeforePriceIsStale"
      | "price"
      | "usdPriceFeeds"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "BTC_ETH_PRICE_FEED",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ETH_USD_PRICE_FEED",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "btcPriceFeeds",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "ethPriceFeeds",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getUnderlyingPrice",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "hasPriceFeed",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "maxSecondsBeforePriceIsStale",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "price",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "usdPriceFeeds",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "BTC_ETH_PRICE_FEED",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ETH_USD_PRICE_FEED",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "btcPriceFeeds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ethPriceFeeds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUnderlyingPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasPriceFeed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxSecondsBeforePriceIsStale",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "usdPriceFeeds",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ChainlinkPriceOracle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ChainlinkPriceOracleInterface;

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
    BTC_ETH_PRICE_FEED(overrides?: CallOverrides): Promise<[string]>;

    ETH_USD_PRICE_FEED(overrides?: CallOverrides): Promise<[string]>;

    btcPriceFeeds(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    ethPriceFeeds(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getUnderlyingPrice(
      cToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    hasPriceFeed(
      underlying: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    maxSecondsBeforePriceIsStale(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    price(
      underlying: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    usdPriceFeeds(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  BTC_ETH_PRICE_FEED(overrides?: CallOverrides): Promise<string>;

  ETH_USD_PRICE_FEED(overrides?: CallOverrides): Promise<string>;

  btcPriceFeeds(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  ethPriceFeeds(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  getUnderlyingPrice(
    cToken: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  hasPriceFeed(
    underlying: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  maxSecondsBeforePriceIsStale(overrides?: CallOverrides): Promise<BigNumber>;

  price(
    underlying: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  usdPriceFeeds(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    BTC_ETH_PRICE_FEED(overrides?: CallOverrides): Promise<string>;

    ETH_USD_PRICE_FEED(overrides?: CallOverrides): Promise<string>;

    btcPriceFeeds(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    ethPriceFeeds(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    getUnderlyingPrice(
      cToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasPriceFeed(
      underlying: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    maxSecondsBeforePriceIsStale(overrides?: CallOverrides): Promise<BigNumber>;

    price(
      underlying: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    usdPriceFeeds(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    BTC_ETH_PRICE_FEED(overrides?: CallOverrides): Promise<BigNumber>;

    ETH_USD_PRICE_FEED(overrides?: CallOverrides): Promise<BigNumber>;

    btcPriceFeeds(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ethPriceFeeds(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUnderlyingPrice(
      cToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasPriceFeed(
      underlying: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxSecondsBeforePriceIsStale(overrides?: CallOverrides): Promise<BigNumber>;

    price(
      underlying: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    usdPriceFeeds(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BTC_ETH_PRICE_FEED(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ETH_USD_PRICE_FEED(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    btcPriceFeeds(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ethPriceFeeds(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUnderlyingPrice(
      cToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasPriceFeed(
      underlying: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxSecondsBeforePriceIsStale(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    price(
      underlying: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    usdPriceFeeds(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
