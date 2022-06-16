/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace FusePoolDirectory {
  export type FusePoolStruct = {
    name: PromiseOrValue<string>;
    creator: PromiseOrValue<string>;
    comptroller: PromiseOrValue<string>;
    blockPosted: PromiseOrValue<BigNumberish>;
    timestampPosted: PromiseOrValue<BigNumberish>;
  };

  export type FusePoolStructOutput = [
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
  };
}

export interface FusePoolDirectoryInterface extends utils.Interface {
  functions: {
    "_editAdminWhitelist(address[],bool)": FunctionFragment;
    "_editDeployerWhitelist(address[],bool)": FunctionFragment;
    "_setDeployerWhitelistEnforcement(bool)": FunctionFragment;
    "adminWhitelist(address)": FunctionFragment;
    "bookmarkPool(address)": FunctionFragment;
    "deployPool(string,address,bool,uint256,uint256,address)": FunctionFragment;
    "deployerWhitelist(address)": FunctionFragment;
    "enforceDeployerWhitelist()": FunctionFragment;
    "getAllPools()": FunctionFragment;
    "getBookmarks(address)": FunctionFragment;
    "getPoolsByAccount(address)": FunctionFragment;
    "getPublicPools()": FunctionFragment;
    "getPublicPoolsByVerification(bool)": FunctionFragment;
    "initialize(bool,address[])": FunctionFragment;
    "owner()": FunctionFragment;
    "poolExists(address)": FunctionFragment;
    "pools(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setPoolName(uint256,string)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_editAdminWhitelist"
      | "_editDeployerWhitelist"
      | "_setDeployerWhitelistEnforcement"
      | "adminWhitelist"
      | "bookmarkPool"
      | "deployPool"
      | "deployerWhitelist"
      | "enforceDeployerWhitelist"
      | "getAllPools"
      | "getBookmarks"
      | "getPoolsByAccount"
      | "getPublicPools"
      | "getPublicPoolsByVerification"
      | "initialize"
      | "owner"
      | "poolExists"
      | "pools"
      | "renounceOwnership"
      | "setPoolName"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_editAdminWhitelist",
    values: [PromiseOrValue<string>[], PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "_editDeployerWhitelist",
    values: [PromiseOrValue<string>[], PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "_setDeployerWhitelistEnforcement",
    values: [PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "adminWhitelist",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "bookmarkPool",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "deployPool",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "deployerWhitelist",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "enforceDeployerWhitelist",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllPools",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBookmarks",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPoolsByAccount",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPublicPools",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPublicPoolsByVerification",
    values: [PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<boolean>, PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "poolExists",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "pools",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setPoolName",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "_editAdminWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_editDeployerWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_setDeployerWhitelistEnforcement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "adminWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bookmarkPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deployPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deployerWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enforceDeployerWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllPools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBookmarks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPoolsByAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPublicPools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPublicPoolsByVerification",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolExists", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pools", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPoolName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "AdminWhitelistUpdated(address[],bool)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "PoolRegistered(uint256,tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminWhitelistUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolRegistered"): EventFragment;
}

export interface AdminWhitelistUpdatedEventObject {
  admins: string[];
  status: boolean;
}
export type AdminWhitelistUpdatedEvent = TypedEvent<
  [string[], boolean],
  AdminWhitelistUpdatedEventObject
>;

export type AdminWhitelistUpdatedEventFilter =
  TypedEventFilter<AdminWhitelistUpdatedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface PoolRegisteredEventObject {
  index: BigNumber;
  pool: FusePoolDirectory.FusePoolStructOutput;
}
export type PoolRegisteredEvent = TypedEvent<
  [BigNumber, FusePoolDirectory.FusePoolStructOutput],
  PoolRegisteredEventObject
>;

export type PoolRegisteredEventFilter = TypedEventFilter<PoolRegisteredEvent>;

export interface FusePoolDirectory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FusePoolDirectoryInterface;

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
    _editAdminWhitelist(
      admins: PromiseOrValue<string>[],
      status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    _editDeployerWhitelist(
      deployers: PromiseOrValue<string>[],
      status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    _setDeployerWhitelistEnforcement(
      enforce: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    adminWhitelist(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    bookmarkPool(
      comptroller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deployPool(
      name: PromiseOrValue<string>,
      implementation: PromiseOrValue<string>,
      enforceWhitelist: PromiseOrValue<boolean>,
      closeFactor: PromiseOrValue<BigNumberish>,
      liquidationIncentive: PromiseOrValue<BigNumberish>,
      priceOracle: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deployerWhitelist(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    enforceDeployerWhitelist(overrides?: CallOverrides): Promise<[boolean]>;

    getAllPools(
      overrides?: CallOverrides
    ): Promise<[FusePoolDirectory.FusePoolStructOutput[]]>;

    getBookmarks(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    getPoolsByAccount(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[], FusePoolDirectory.FusePoolStructOutput[]]>;

    getPublicPools(
      overrides?: CallOverrides
    ): Promise<[BigNumber[], FusePoolDirectory.FusePoolStructOutput[]]>;

    getPublicPoolsByVerification(
      whitelistedAdmin: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[], FusePoolDirectory.FusePoolStructOutput[]]>;

    initialize(
      _enforceDeployerWhitelist: PromiseOrValue<boolean>,
      _deployerWhitelist: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    poolExists(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    pools(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, BigNumber] & {
        name: string;
        creator: string;
        comptroller: string;
        blockPosted: BigNumber;
        timestampPosted: BigNumber;
      }
    >;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setPoolName(
      index: PromiseOrValue<BigNumberish>,
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  _editAdminWhitelist(
    admins: PromiseOrValue<string>[],
    status: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  _editDeployerWhitelist(
    deployers: PromiseOrValue<string>[],
    status: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  _setDeployerWhitelistEnforcement(
    enforce: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  adminWhitelist(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  bookmarkPool(
    comptroller: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deployPool(
    name: PromiseOrValue<string>,
    implementation: PromiseOrValue<string>,
    enforceWhitelist: PromiseOrValue<boolean>,
    closeFactor: PromiseOrValue<BigNumberish>,
    liquidationIncentive: PromiseOrValue<BigNumberish>,
    priceOracle: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deployerWhitelist(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  enforceDeployerWhitelist(overrides?: CallOverrides): Promise<boolean>;

  getAllPools(
    overrides?: CallOverrides
  ): Promise<FusePoolDirectory.FusePoolStructOutput[]>;

  getBookmarks(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getPoolsByAccount(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[BigNumber[], FusePoolDirectory.FusePoolStructOutput[]]>;

  getPublicPools(
    overrides?: CallOverrides
  ): Promise<[BigNumber[], FusePoolDirectory.FusePoolStructOutput[]]>;

  getPublicPoolsByVerification(
    whitelistedAdmin: PromiseOrValue<boolean>,
    overrides?: CallOverrides
  ): Promise<[BigNumber[], FusePoolDirectory.FusePoolStructOutput[]]>;

  initialize(
    _enforceDeployerWhitelist: PromiseOrValue<boolean>,
    _deployerWhitelist: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  poolExists(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  pools(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, BigNumber, BigNumber] & {
      name: string;
      creator: string;
      comptroller: string;
      blockPosted: BigNumber;
      timestampPosted: BigNumber;
    }
  >;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setPoolName(
    index: PromiseOrValue<BigNumberish>,
    name: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _editAdminWhitelist(
      admins: PromiseOrValue<string>[],
      status: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    _editDeployerWhitelist(
      deployers: PromiseOrValue<string>[],
      status: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    _setDeployerWhitelistEnforcement(
      enforce: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    adminWhitelist(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    bookmarkPool(
      comptroller: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    deployPool(
      name: PromiseOrValue<string>,
      implementation: PromiseOrValue<string>,
      enforceWhitelist: PromiseOrValue<boolean>,
      closeFactor: PromiseOrValue<BigNumberish>,
      liquidationIncentive: PromiseOrValue<BigNumberish>,
      priceOracle: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string]>;

    deployerWhitelist(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    enforceDeployerWhitelist(overrides?: CallOverrides): Promise<boolean>;

    getAllPools(
      overrides?: CallOverrides
    ): Promise<FusePoolDirectory.FusePoolStructOutput[]>;

    getBookmarks(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getPoolsByAccount(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[], FusePoolDirectory.FusePoolStructOutput[]]>;

    getPublicPools(
      overrides?: CallOverrides
    ): Promise<[BigNumber[], FusePoolDirectory.FusePoolStructOutput[]]>;

    getPublicPoolsByVerification(
      whitelistedAdmin: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[], FusePoolDirectory.FusePoolStructOutput[]]>;

    initialize(
      _enforceDeployerWhitelist: PromiseOrValue<boolean>,
      _deployerWhitelist: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    poolExists(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    pools(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, BigNumber] & {
        name: string;
        creator: string;
        comptroller: string;
        blockPosted: BigNumber;
        timestampPosted: BigNumber;
      }
    >;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setPoolName(
      index: PromiseOrValue<BigNumberish>,
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AdminWhitelistUpdated(address[],bool)"(
      admins?: null,
      status?: null
    ): AdminWhitelistUpdatedEventFilter;
    AdminWhitelistUpdated(
      admins?: null,
      status?: null
    ): AdminWhitelistUpdatedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "PoolRegistered(uint256,tuple)"(
      index?: null,
      pool?: null
    ): PoolRegisteredEventFilter;
    PoolRegistered(index?: null, pool?: null): PoolRegisteredEventFilter;
  };

  estimateGas: {
    _editAdminWhitelist(
      admins: PromiseOrValue<string>[],
      status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    _editDeployerWhitelist(
      deployers: PromiseOrValue<string>[],
      status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    _setDeployerWhitelistEnforcement(
      enforce: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    adminWhitelist(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    bookmarkPool(
      comptroller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deployPool(
      name: PromiseOrValue<string>,
      implementation: PromiseOrValue<string>,
      enforceWhitelist: PromiseOrValue<boolean>,
      closeFactor: PromiseOrValue<BigNumberish>,
      liquidationIncentive: PromiseOrValue<BigNumberish>,
      priceOracle: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deployerWhitelist(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    enforceDeployerWhitelist(overrides?: CallOverrides): Promise<BigNumber>;

    getAllPools(overrides?: CallOverrides): Promise<BigNumber>;

    getBookmarks(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPoolsByAccount(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPublicPools(overrides?: CallOverrides): Promise<BigNumber>;

    getPublicPoolsByVerification(
      whitelistedAdmin: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _enforceDeployerWhitelist: PromiseOrValue<boolean>,
      _deployerWhitelist: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    poolExists(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pools(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setPoolName(
      index: PromiseOrValue<BigNumberish>,
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _editAdminWhitelist(
      admins: PromiseOrValue<string>[],
      status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    _editDeployerWhitelist(
      deployers: PromiseOrValue<string>[],
      status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    _setDeployerWhitelistEnforcement(
      enforce: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    adminWhitelist(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bookmarkPool(
      comptroller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deployPool(
      name: PromiseOrValue<string>,
      implementation: PromiseOrValue<string>,
      enforceWhitelist: PromiseOrValue<boolean>,
      closeFactor: PromiseOrValue<BigNumberish>,
      liquidationIncentive: PromiseOrValue<BigNumberish>,
      priceOracle: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deployerWhitelist(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    enforceDeployerWhitelist(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllPools(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBookmarks(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPoolsByAccount(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPublicPools(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPublicPoolsByVerification(
      whitelistedAdmin: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _enforceDeployerWhitelist: PromiseOrValue<boolean>,
      _deployerWhitelist: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolExists(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pools(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setPoolName(
      index: PromiseOrValue<BigNumberish>,
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}