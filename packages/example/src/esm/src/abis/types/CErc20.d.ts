import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface CErc20Interface extends utils.Interface {
    functions: {
        "_becomeImplementation(bytes)": FunctionFragment;
        "_delegateCompLikeTo(address)": FunctionFragment;
        "_prepare()": FunctionFragment;
        "_reduceReserves(uint256)": FunctionFragment;
        "_setAdminFee(uint256)": FunctionFragment;
        "_setImplementationSafe(address,bool,bytes)": FunctionFragment;
        "_setInterestRateModel(address)": FunctionFragment;
        "_setNameAndSymbol(string,string)": FunctionFragment;
        "_setReserveFactor(uint256)": FunctionFragment;
        "_withdrawAdminFees(uint256)": FunctionFragment;
        "_withdrawFuseFees(uint256)": FunctionFragment;
        "accrualBlockNumber()": FunctionFragment;
        "accrueInterest()": FunctionFragment;
        "adminFeeMantissa()": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "balanceOfUnderlying(address)": FunctionFragment;
        "borrow(uint256)": FunctionFragment;
        "borrowBalanceCurrent(address)": FunctionFragment;
        "borrowBalanceStored(address)": FunctionFragment;
        "borrowIndex()": FunctionFragment;
        "borrowRatePerBlock()": FunctionFragment;
        "comptroller()": FunctionFragment;
        "decimals()": FunctionFragment;
        "exchangeRateCurrent()": FunctionFragment;
        "exchangeRateStored()": FunctionFragment;
        "fuseFeeMantissa()": FunctionFragment;
        "getAccountSnapshot(address)": FunctionFragment;
        "getCash()": FunctionFragment;
        "implementation()": FunctionFragment;
        "initialize(address,address,uint256,string,string,uint8,uint256,uint256)": FunctionFragment;
        "initialize(address,address,address,string,string,uint256,uint256)": FunctionFragment;
        "interestRateModel()": FunctionFragment;
        "isCEther()": FunctionFragment;
        "isCToken()": FunctionFragment;
        "liquidateBorrow(address,uint256,address)": FunctionFragment;
        "mint(uint256)": FunctionFragment;
        "name()": FunctionFragment;
        "protocolSeizeShareMantissa()": FunctionFragment;
        "redeem(uint256)": FunctionFragment;
        "redeemUnderlying(uint256)": FunctionFragment;
        "repayBorrow(uint256)": FunctionFragment;
        "repayBorrowBehalf(address,uint256)": FunctionFragment;
        "reserveFactorMantissa()": FunctionFragment;
        "seize(address,address,uint256)": FunctionFragment;
        "supplyRatePerBlock()": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalAdminFees()": FunctionFragment;
        "totalBorrows()": FunctionFragment;
        "totalBorrowsCurrent()": FunctionFragment;
        "totalFuseFees()": FunctionFragment;
        "totalReserves()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "underlying()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_becomeImplementation" | "_delegateCompLikeTo" | "_prepare" | "_reduceReserves" | "_setAdminFee" | "_setImplementationSafe" | "_setInterestRateModel" | "_setNameAndSymbol" | "_setReserveFactor" | "_withdrawAdminFees" | "_withdrawFuseFees" | "accrualBlockNumber" | "accrueInterest" | "adminFeeMantissa" | "allowance" | "approve" | "balanceOf" | "balanceOfUnderlying" | "borrow" | "borrowBalanceCurrent" | "borrowBalanceStored" | "borrowIndex" | "borrowRatePerBlock" | "comptroller" | "decimals" | "exchangeRateCurrent" | "exchangeRateStored" | "fuseFeeMantissa" | "getAccountSnapshot" | "getCash" | "implementation" | "initialize(address,address,uint256,string,string,uint8,uint256,uint256)" | "initialize(address,address,address,string,string,uint256,uint256)" | "interestRateModel" | "isCEther" | "isCToken" | "liquidateBorrow" | "mint" | "name" | "protocolSeizeShareMantissa" | "redeem" | "redeemUnderlying" | "repayBorrow" | "repayBorrowBehalf" | "reserveFactorMantissa" | "seize" | "supplyRatePerBlock" | "symbol" | "totalAdminFees" | "totalBorrows" | "totalBorrowsCurrent" | "totalFuseFees" | "totalReserves" | "totalSupply" | "transfer" | "transferFrom" | "underlying"): FunctionFragment;
    encodeFunctionData(functionFragment: "_becomeImplementation", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "_delegateCompLikeTo", values: [string]): string;
    encodeFunctionData(functionFragment: "_prepare", values?: undefined): string;
    encodeFunctionData(functionFragment: "_reduceReserves", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setAdminFee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setImplementationSafe", values: [string, boolean, BytesLike]): string;
    encodeFunctionData(functionFragment: "_setInterestRateModel", values: [string]): string;
    encodeFunctionData(functionFragment: "_setNameAndSymbol", values: [string, string]): string;
    encodeFunctionData(functionFragment: "_setReserveFactor", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_withdrawAdminFees", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_withdrawFuseFees", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "accrualBlockNumber", values?: undefined): string;
    encodeFunctionData(functionFragment: "accrueInterest", values?: undefined): string;
    encodeFunctionData(functionFragment: "adminFeeMantissa", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "balanceOfUnderlying", values: [string]): string;
    encodeFunctionData(functionFragment: "borrow", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "borrowBalanceCurrent", values: [string]): string;
    encodeFunctionData(functionFragment: "borrowBalanceStored", values: [string]): string;
    encodeFunctionData(functionFragment: "borrowIndex", values?: undefined): string;
    encodeFunctionData(functionFragment: "borrowRatePerBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "comptroller", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "exchangeRateCurrent", values?: undefined): string;
    encodeFunctionData(functionFragment: "exchangeRateStored", values?: undefined): string;
    encodeFunctionData(functionFragment: "fuseFeeMantissa", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAccountSnapshot", values: [string]): string;
    encodeFunctionData(functionFragment: "getCash", values?: undefined): string;
    encodeFunctionData(functionFragment: "implementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize(address,address,uint256,string,string,uint8,uint256,uint256)", values: [
        string,
        string,
        BigNumberish,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "initialize(address,address,address,string,string,uint256,uint256)", values: [string, string, string, string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "interestRateModel", values?: undefined): string;
    encodeFunctionData(functionFragment: "isCEther", values?: undefined): string;
    encodeFunctionData(functionFragment: "isCToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "liquidateBorrow", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "mint", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "protocolSeizeShareMantissa", values?: undefined): string;
    encodeFunctionData(functionFragment: "redeem", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "redeemUnderlying", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "repayBorrow", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "repayBorrowBehalf", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "reserveFactorMantissa", values?: undefined): string;
    encodeFunctionData(functionFragment: "seize", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "supplyRatePerBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalAdminFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalBorrows", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalBorrowsCurrent", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalFuseFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalReserves", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "underlying", values?: undefined): string;
    decodeFunctionResult(functionFragment: "_becomeImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_delegateCompLikeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_prepare", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_reduceReserves", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setAdminFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setImplementationSafe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setInterestRateModel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setNameAndSymbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setReserveFactor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_withdrawAdminFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_withdrawFuseFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accrualBlockNumber", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accrueInterest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "adminFeeMantissa", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfUnderlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowBalanceCurrent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowBalanceStored", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowRatePerBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "comptroller", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeRateCurrent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeRateStored", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fuseFeeMantissa", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountSnapshot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "implementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize(address,address,uint256,string,string,uint8,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize(address,address,address,string,string,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "interestRateModel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isCEther", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isCToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidateBorrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protocolSeizeShareMantissa", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemUnderlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayBorrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayBorrowBehalf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reserveFactorMantissa", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "seize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supplyRatePerBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalAdminFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalBorrows", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalBorrowsCurrent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalFuseFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalReserves", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "underlying", data: BytesLike): Result;
    events: {
        "AccrueInterest(uint256,uint256,uint256,uint256)": EventFragment;
        "Approval(address,address,uint256)": EventFragment;
        "Borrow(address,uint256,uint256,uint256)": EventFragment;
        "Failure(uint256,uint256,uint256)": EventFragment;
        "LiquidateBorrow(address,address,uint256,address,uint256)": EventFragment;
        "Mint(address,uint256,uint256)": EventFragment;
        "NewAdminFee(uint256,uint256)": EventFragment;
        "NewComptroller(address,address)": EventFragment;
        "NewFuseFee(uint256,uint256)": EventFragment;
        "NewImplementation(address,address)": EventFragment;
        "NewMarketInterestRateModel(address,address)": EventFragment;
        "NewReserveFactor(uint256,uint256)": EventFragment;
        "Redeem(address,uint256,uint256)": EventFragment;
        "RepayBorrow(address,address,uint256,uint256,uint256)": EventFragment;
        "ReservesAdded(address,uint256,uint256)": EventFragment;
        "ReservesReduced(address,uint256,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AccrueInterest"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Borrow"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Failure"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiquidateBorrow"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewAdminFee"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewComptroller"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewFuseFee"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewImplementation"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewMarketInterestRateModel"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewReserveFactor"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Redeem"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RepayBorrow"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReservesAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReservesReduced"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
export interface AccrueInterestEventObject {
    cashPrior: BigNumber;
    interestAccumulated: BigNumber;
    borrowIndex: BigNumber;
    totalBorrows: BigNumber;
}
export declare type AccrueInterestEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], AccrueInterestEventObject>;
export declare type AccrueInterestEventFilter = TypedEventFilter<AccrueInterestEvent>;
export interface ApprovalEventObject {
    owner: string;
    spender: string;
    amount: BigNumber;
}
export declare type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface BorrowEventObject {
    borrower: string;
    borrowAmount: BigNumber;
    accountBorrows: BigNumber;
    totalBorrows: BigNumber;
}
export declare type BorrowEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber
], BorrowEventObject>;
export declare type BorrowEventFilter = TypedEventFilter<BorrowEvent>;
export interface FailureEventObject {
    error: BigNumber;
    info: BigNumber;
    detail: BigNumber;
}
export declare type FailureEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], FailureEventObject>;
export declare type FailureEventFilter = TypedEventFilter<FailureEvent>;
export interface LiquidateBorrowEventObject {
    liquidator: string;
    borrower: string;
    repayAmount: BigNumber;
    cTokenCollateral: string;
    seizeTokens: BigNumber;
}
export declare type LiquidateBorrowEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string,
    BigNumber
], LiquidateBorrowEventObject>;
export declare type LiquidateBorrowEventFilter = TypedEventFilter<LiquidateBorrowEvent>;
export interface MintEventObject {
    minter: string;
    mintAmount: BigNumber;
    mintTokens: BigNumber;
}
export declare type MintEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], MintEventObject>;
export declare type MintEventFilter = TypedEventFilter<MintEvent>;
export interface NewAdminFeeEventObject {
    oldAdminFeeMantissa: BigNumber;
    newAdminFeeMantissa: BigNumber;
}
export declare type NewAdminFeeEvent = TypedEvent<[
    BigNumber,
    BigNumber
], NewAdminFeeEventObject>;
export declare type NewAdminFeeEventFilter = TypedEventFilter<NewAdminFeeEvent>;
export interface NewComptrollerEventObject {
    oldComptroller: string;
    newComptroller: string;
}
export declare type NewComptrollerEvent = TypedEvent<[
    string,
    string
], NewComptrollerEventObject>;
export declare type NewComptrollerEventFilter = TypedEventFilter<NewComptrollerEvent>;
export interface NewFuseFeeEventObject {
    oldFuseFeeMantissa: BigNumber;
    newFuseFeeMantissa: BigNumber;
}
export declare type NewFuseFeeEvent = TypedEvent<[
    BigNumber,
    BigNumber
], NewFuseFeeEventObject>;
export declare type NewFuseFeeEventFilter = TypedEventFilter<NewFuseFeeEvent>;
export interface NewImplementationEventObject {
    oldImplementation: string;
    newImplementation: string;
}
export declare type NewImplementationEvent = TypedEvent<[
    string,
    string
], NewImplementationEventObject>;
export declare type NewImplementationEventFilter = TypedEventFilter<NewImplementationEvent>;
export interface NewMarketInterestRateModelEventObject {
    oldInterestRateModel: string;
    newInterestRateModel: string;
}
export declare type NewMarketInterestRateModelEvent = TypedEvent<[
    string,
    string
], NewMarketInterestRateModelEventObject>;
export declare type NewMarketInterestRateModelEventFilter = TypedEventFilter<NewMarketInterestRateModelEvent>;
export interface NewReserveFactorEventObject {
    oldReserveFactorMantissa: BigNumber;
    newReserveFactorMantissa: BigNumber;
}
export declare type NewReserveFactorEvent = TypedEvent<[
    BigNumber,
    BigNumber
], NewReserveFactorEventObject>;
export declare type NewReserveFactorEventFilter = TypedEventFilter<NewReserveFactorEvent>;
export interface RedeemEventObject {
    redeemer: string;
    redeemAmount: BigNumber;
    redeemTokens: BigNumber;
}
export declare type RedeemEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], RedeemEventObject>;
export declare type RedeemEventFilter = TypedEventFilter<RedeemEvent>;
export interface RepayBorrowEventObject {
    payer: string;
    borrower: string;
    repayAmount: BigNumber;
    accountBorrows: BigNumber;
    totalBorrows: BigNumber;
}
export declare type RepayBorrowEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], RepayBorrowEventObject>;
export declare type RepayBorrowEventFilter = TypedEventFilter<RepayBorrowEvent>;
export interface ReservesAddedEventObject {
    benefactor: string;
    addAmount: BigNumber;
    newTotalReserves: BigNumber;
}
export declare type ReservesAddedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], ReservesAddedEventObject>;
export declare type ReservesAddedEventFilter = TypedEventFilter<ReservesAddedEvent>;
export interface ReservesReducedEventObject {
    admin: string;
    reduceAmount: BigNumber;
    newTotalReserves: BigNumber;
}
export declare type ReservesReducedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], ReservesReducedEventObject>;
export declare type ReservesReducedEventFilter = TypedEventFilter<ReservesReducedEvent>;
export interface TransferEventObject {
    from: string;
    to: string;
    amount: BigNumber;
}
export declare type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface CErc20 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CErc20Interface;
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
        _becomeImplementation(data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _delegateCompLikeTo(compLikeDelegatee: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _prepare(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _reduceReserves(reduceAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setAdminFee(newAdminFeeMantissa: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setImplementationSafe(implementation_: string, allowResign: boolean, becomeImplementationData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setInterestRateModel(newInterestRateModel: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setNameAndSymbol(_name: string, _symbol: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setReserveFactor(newReserveFactorMantissa: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _withdrawAdminFees(withdrawAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _withdrawFuseFees(withdrawAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        accrualBlockNumber(overrides?: CallOverrides): Promise<[BigNumber]>;
        accrueInterest(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        adminFeeMantissa(overrides?: CallOverrides): Promise<[BigNumber]>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOfUnderlying(owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        borrow(borrowAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        borrowBalanceCurrent(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        borrowBalanceStored(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        borrowIndex(overrides?: CallOverrides): Promise<[BigNumber]>;
        borrowRatePerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
        comptroller(overrides?: CallOverrides): Promise<[string]>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        exchangeRateCurrent(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        exchangeRateStored(overrides?: CallOverrides): Promise<[BigNumber]>;
        fuseFeeMantissa(overrides?: CallOverrides): Promise<[BigNumber]>;
        getAccountSnapshot(account: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
        getCash(overrides?: CallOverrides): Promise<[BigNumber]>;
        implementation(overrides?: CallOverrides): Promise<[string]>;
        "initialize(address,address,uint256,string,string,uint8,uint256,uint256)"(comptroller_: string, interestRateModel_: string, initialExchangeRateMantissa_: BigNumberish, name_: string, symbol_: string, decimals_: BigNumberish, reserveFactorMantissa_: BigNumberish, adminFeeMantissa_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "initialize(address,address,address,string,string,uint256,uint256)"(underlying_: string, comptroller_: string, interestRateModel_: string, name_: string, symbol_: string, reserveFactorMantissa_: BigNumberish, adminFeeMantissa_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        interestRateModel(overrides?: CallOverrides): Promise<[string]>;
        isCEther(overrides?: CallOverrides): Promise<[boolean]>;
        isCToken(overrides?: CallOverrides): Promise<[boolean]>;
        liquidateBorrow(borrower: string, repayAmount: BigNumberish, cTokenCollateral: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mint(mintAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        protocolSeizeShareMantissa(overrides?: CallOverrides): Promise<[BigNumber]>;
        redeem(redeemTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        redeemUnderlying(redeemAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        repayBorrow(repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        repayBorrowBehalf(borrower: string, repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        reserveFactorMantissa(overrides?: CallOverrides): Promise<[BigNumber]>;
        seize(liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supplyRatePerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalAdminFees(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalBorrows(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalBorrowsCurrent(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        totalFuseFees(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalReserves(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(dst: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferFrom(src: string, dst: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        underlying(overrides?: CallOverrides): Promise<[string]>;
    };
    _becomeImplementation(data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _delegateCompLikeTo(compLikeDelegatee: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _prepare(overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _reduceReserves(reduceAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setAdminFee(newAdminFeeMantissa: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setImplementationSafe(implementation_: string, allowResign: boolean, becomeImplementationData: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setInterestRateModel(newInterestRateModel: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setNameAndSymbol(_name: string, _symbol: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setReserveFactor(newReserveFactorMantissa: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _withdrawAdminFees(withdrawAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _withdrawFuseFees(withdrawAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    accrualBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;
    accrueInterest(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    adminFeeMantissa(overrides?: CallOverrides): Promise<BigNumber>;
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfUnderlying(owner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    borrow(borrowAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    borrowBalanceCurrent(account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    borrowBalanceStored(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    borrowIndex(overrides?: CallOverrides): Promise<BigNumber>;
    borrowRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
    comptroller(overrides?: CallOverrides): Promise<string>;
    decimals(overrides?: CallOverrides): Promise<number>;
    exchangeRateCurrent(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    exchangeRateStored(overrides?: CallOverrides): Promise<BigNumber>;
    fuseFeeMantissa(overrides?: CallOverrides): Promise<BigNumber>;
    getAccountSnapshot(account: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
    getCash(overrides?: CallOverrides): Promise<BigNumber>;
    implementation(overrides?: CallOverrides): Promise<string>;
    "initialize(address,address,uint256,string,string,uint8,uint256,uint256)"(comptroller_: string, interestRateModel_: string, initialExchangeRateMantissa_: BigNumberish, name_: string, symbol_: string, decimals_: BigNumberish, reserveFactorMantissa_: BigNumberish, adminFeeMantissa_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "initialize(address,address,address,string,string,uint256,uint256)"(underlying_: string, comptroller_: string, interestRateModel_: string, name_: string, symbol_: string, reserveFactorMantissa_: BigNumberish, adminFeeMantissa_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    interestRateModel(overrides?: CallOverrides): Promise<string>;
    isCEther(overrides?: CallOverrides): Promise<boolean>;
    isCToken(overrides?: CallOverrides): Promise<boolean>;
    liquidateBorrow(borrower: string, repayAmount: BigNumberish, cTokenCollateral: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mint(mintAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    protocolSeizeShareMantissa(overrides?: CallOverrides): Promise<BigNumber>;
    redeem(redeemTokens: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    redeemUnderlying(redeemAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    repayBorrow(repayAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    repayBorrowBehalf(borrower: string, repayAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    reserveFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;
    seize(liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supplyRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalAdminFees(overrides?: CallOverrides): Promise<BigNumber>;
    totalBorrows(overrides?: CallOverrides): Promise<BigNumber>;
    totalBorrowsCurrent(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    totalFuseFees(overrides?: CallOverrides): Promise<BigNumber>;
    totalReserves(overrides?: CallOverrides): Promise<BigNumber>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(dst: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferFrom(src: string, dst: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    underlying(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        _becomeImplementation(data: BytesLike, overrides?: CallOverrides): Promise<void>;
        _delegateCompLikeTo(compLikeDelegatee: string, overrides?: CallOverrides): Promise<void>;
        _prepare(overrides?: CallOverrides): Promise<void>;
        _reduceReserves(reduceAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _setAdminFee(newAdminFeeMantissa: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _setImplementationSafe(implementation_: string, allowResign: boolean, becomeImplementationData: BytesLike, overrides?: CallOverrides): Promise<void>;
        _setInterestRateModel(newInterestRateModel: string, overrides?: CallOverrides): Promise<BigNumber>;
        _setNameAndSymbol(_name: string, _symbol: string, overrides?: CallOverrides): Promise<void>;
        _setReserveFactor(newReserveFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _withdrawAdminFees(withdrawAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _withdrawFuseFees(withdrawAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        accrualBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;
        accrueInterest(overrides?: CallOverrides): Promise<BigNumber>;
        adminFeeMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfUnderlying(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        borrow(borrowAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        borrowBalanceCurrent(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        borrowBalanceStored(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        borrowIndex(overrides?: CallOverrides): Promise<BigNumber>;
        borrowRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
        comptroller(overrides?: CallOverrides): Promise<string>;
        decimals(overrides?: CallOverrides): Promise<number>;
        exchangeRateCurrent(overrides?: CallOverrides): Promise<BigNumber>;
        exchangeRateStored(overrides?: CallOverrides): Promise<BigNumber>;
        fuseFeeMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        getAccountSnapshot(account: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
        getCash(overrides?: CallOverrides): Promise<BigNumber>;
        implementation(overrides?: CallOverrides): Promise<string>;
        "initialize(address,address,uint256,string,string,uint8,uint256,uint256)"(comptroller_: string, interestRateModel_: string, initialExchangeRateMantissa_: BigNumberish, name_: string, symbol_: string, decimals_: BigNumberish, reserveFactorMantissa_: BigNumberish, adminFeeMantissa_: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "initialize(address,address,address,string,string,uint256,uint256)"(underlying_: string, comptroller_: string, interestRateModel_: string, name_: string, symbol_: string, reserveFactorMantissa_: BigNumberish, adminFeeMantissa_: BigNumberish, overrides?: CallOverrides): Promise<void>;
        interestRateModel(overrides?: CallOverrides): Promise<string>;
        isCEther(overrides?: CallOverrides): Promise<boolean>;
        isCToken(overrides?: CallOverrides): Promise<boolean>;
        liquidateBorrow(borrower: string, repayAmount: BigNumberish, cTokenCollateral: string, overrides?: CallOverrides): Promise<BigNumber>;
        mint(mintAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        protocolSeizeShareMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        redeem(redeemTokens: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        redeemUnderlying(redeemAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        repayBorrow(repayAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        repayBorrowBehalf(borrower: string, repayAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        reserveFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        seize(liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        supplyRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalAdminFees(overrides?: CallOverrides): Promise<BigNumber>;
        totalBorrows(overrides?: CallOverrides): Promise<BigNumber>;
        totalBorrowsCurrent(overrides?: CallOverrides): Promise<BigNumber>;
        totalFuseFees(overrides?: CallOverrides): Promise<BigNumber>;
        totalReserves(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(dst: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(src: string, dst: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        underlying(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "AccrueInterest(uint256,uint256,uint256,uint256)"(cashPrior?: null, interestAccumulated?: null, borrowIndex?: null, totalBorrows?: null): AccrueInterestEventFilter;
        AccrueInterest(cashPrior?: null, interestAccumulated?: null, borrowIndex?: null, totalBorrows?: null): AccrueInterestEventFilter;
        "Approval(address,address,uint256)"(owner?: string | null, spender?: string | null, amount?: null): ApprovalEventFilter;
        Approval(owner?: string | null, spender?: string | null, amount?: null): ApprovalEventFilter;
        "Borrow(address,uint256,uint256,uint256)"(borrower?: null, borrowAmount?: null, accountBorrows?: null, totalBorrows?: null): BorrowEventFilter;
        Borrow(borrower?: null, borrowAmount?: null, accountBorrows?: null, totalBorrows?: null): BorrowEventFilter;
        "Failure(uint256,uint256,uint256)"(error?: null, info?: null, detail?: null): FailureEventFilter;
        Failure(error?: null, info?: null, detail?: null): FailureEventFilter;
        "LiquidateBorrow(address,address,uint256,address,uint256)"(liquidator?: null, borrower?: null, repayAmount?: null, cTokenCollateral?: null, seizeTokens?: null): LiquidateBorrowEventFilter;
        LiquidateBorrow(liquidator?: null, borrower?: null, repayAmount?: null, cTokenCollateral?: null, seizeTokens?: null): LiquidateBorrowEventFilter;
        "Mint(address,uint256,uint256)"(minter?: null, mintAmount?: null, mintTokens?: null): MintEventFilter;
        Mint(minter?: null, mintAmount?: null, mintTokens?: null): MintEventFilter;
        "NewAdminFee(uint256,uint256)"(oldAdminFeeMantissa?: null, newAdminFeeMantissa?: null): NewAdminFeeEventFilter;
        NewAdminFee(oldAdminFeeMantissa?: null, newAdminFeeMantissa?: null): NewAdminFeeEventFilter;
        "NewComptroller(address,address)"(oldComptroller?: null, newComptroller?: null): NewComptrollerEventFilter;
        NewComptroller(oldComptroller?: null, newComptroller?: null): NewComptrollerEventFilter;
        "NewFuseFee(uint256,uint256)"(oldFuseFeeMantissa?: null, newFuseFeeMantissa?: null): NewFuseFeeEventFilter;
        NewFuseFee(oldFuseFeeMantissa?: null, newFuseFeeMantissa?: null): NewFuseFeeEventFilter;
        "NewImplementation(address,address)"(oldImplementation?: null, newImplementation?: null): NewImplementationEventFilter;
        NewImplementation(oldImplementation?: null, newImplementation?: null): NewImplementationEventFilter;
        "NewMarketInterestRateModel(address,address)"(oldInterestRateModel?: null, newInterestRateModel?: null): NewMarketInterestRateModelEventFilter;
        NewMarketInterestRateModel(oldInterestRateModel?: null, newInterestRateModel?: null): NewMarketInterestRateModelEventFilter;
        "NewReserveFactor(uint256,uint256)"(oldReserveFactorMantissa?: null, newReserveFactorMantissa?: null): NewReserveFactorEventFilter;
        NewReserveFactor(oldReserveFactorMantissa?: null, newReserveFactorMantissa?: null): NewReserveFactorEventFilter;
        "Redeem(address,uint256,uint256)"(redeemer?: null, redeemAmount?: null, redeemTokens?: null): RedeemEventFilter;
        Redeem(redeemer?: null, redeemAmount?: null, redeemTokens?: null): RedeemEventFilter;
        "RepayBorrow(address,address,uint256,uint256,uint256)"(payer?: null, borrower?: null, repayAmount?: null, accountBorrows?: null, totalBorrows?: null): RepayBorrowEventFilter;
        RepayBorrow(payer?: null, borrower?: null, repayAmount?: null, accountBorrows?: null, totalBorrows?: null): RepayBorrowEventFilter;
        "ReservesAdded(address,uint256,uint256)"(benefactor?: null, addAmount?: null, newTotalReserves?: null): ReservesAddedEventFilter;
        ReservesAdded(benefactor?: null, addAmount?: null, newTotalReserves?: null): ReservesAddedEventFilter;
        "ReservesReduced(address,uint256,uint256)"(admin?: null, reduceAmount?: null, newTotalReserves?: null): ReservesReducedEventFilter;
        ReservesReduced(admin?: null, reduceAmount?: null, newTotalReserves?: null): ReservesReducedEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, amount?: null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, amount?: null): TransferEventFilter;
    };
    estimateGas: {
        _becomeImplementation(data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _delegateCompLikeTo(compLikeDelegatee: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _prepare(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _reduceReserves(reduceAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setAdminFee(newAdminFeeMantissa: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setImplementationSafe(implementation_: string, allowResign: boolean, becomeImplementationData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setInterestRateModel(newInterestRateModel: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setNameAndSymbol(_name: string, _symbol: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setReserveFactor(newReserveFactorMantissa: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _withdrawAdminFees(withdrawAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _withdrawFuseFees(withdrawAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        accrualBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;
        accrueInterest(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        adminFeeMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfUnderlying(owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        borrow(borrowAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        borrowBalanceCurrent(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        borrowBalanceStored(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        borrowIndex(overrides?: CallOverrides): Promise<BigNumber>;
        borrowRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
        comptroller(overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        exchangeRateCurrent(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        exchangeRateStored(overrides?: CallOverrides): Promise<BigNumber>;
        fuseFeeMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        getAccountSnapshot(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        getCash(overrides?: CallOverrides): Promise<BigNumber>;
        implementation(overrides?: CallOverrides): Promise<BigNumber>;
        "initialize(address,address,uint256,string,string,uint8,uint256,uint256)"(comptroller_: string, interestRateModel_: string, initialExchangeRateMantissa_: BigNumberish, name_: string, symbol_: string, decimals_: BigNumberish, reserveFactorMantissa_: BigNumberish, adminFeeMantissa_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "initialize(address,address,address,string,string,uint256,uint256)"(underlying_: string, comptroller_: string, interestRateModel_: string, name_: string, symbol_: string, reserveFactorMantissa_: BigNumberish, adminFeeMantissa_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        interestRateModel(overrides?: CallOverrides): Promise<BigNumber>;
        isCEther(overrides?: CallOverrides): Promise<BigNumber>;
        isCToken(overrides?: CallOverrides): Promise<BigNumber>;
        liquidateBorrow(borrower: string, repayAmount: BigNumberish, cTokenCollateral: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mint(mintAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        protocolSeizeShareMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        redeem(redeemTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        redeemUnderlying(redeemAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        repayBorrow(repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        repayBorrowBehalf(borrower: string, repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        reserveFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        seize(liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supplyRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalAdminFees(overrides?: CallOverrides): Promise<BigNumber>;
        totalBorrows(overrides?: CallOverrides): Promise<BigNumber>;
        totalBorrowsCurrent(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        totalFuseFees(overrides?: CallOverrides): Promise<BigNumber>;
        totalReserves(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(dst: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferFrom(src: string, dst: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        underlying(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _becomeImplementation(data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _delegateCompLikeTo(compLikeDelegatee: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _prepare(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _reduceReserves(reduceAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setAdminFee(newAdminFeeMantissa: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setImplementationSafe(implementation_: string, allowResign: boolean, becomeImplementationData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setInterestRateModel(newInterestRateModel: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setNameAndSymbol(_name: string, _symbol: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setReserveFactor(newReserveFactorMantissa: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _withdrawAdminFees(withdrawAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _withdrawFuseFees(withdrawAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        accrualBlockNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accrueInterest(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        adminFeeMantissa(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfUnderlying(owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        borrow(borrowAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        borrowBalanceCurrent(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        borrowBalanceStored(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowRatePerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        comptroller(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        exchangeRateCurrent(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        exchangeRateStored(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fuseFeeMantissa(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAccountSnapshot(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCash(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "initialize(address,address,uint256,string,string,uint8,uint256,uint256)"(comptroller_: string, interestRateModel_: string, initialExchangeRateMantissa_: BigNumberish, name_: string, symbol_: string, decimals_: BigNumberish, reserveFactorMantissa_: BigNumberish, adminFeeMantissa_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "initialize(address,address,address,string,string,uint256,uint256)"(underlying_: string, comptroller_: string, interestRateModel_: string, name_: string, symbol_: string, reserveFactorMantissa_: BigNumberish, adminFeeMantissa_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        interestRateModel(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isCEther(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isCToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        liquidateBorrow(borrower: string, repayAmount: BigNumberish, cTokenCollateral: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mint(mintAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        protocolSeizeShareMantissa(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        redeem(redeemTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        redeemUnderlying(redeemAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        repayBorrow(repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        repayBorrowBehalf(borrower: string, repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        reserveFactorMantissa(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        seize(liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supplyRatePerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalAdminFees(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalBorrows(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalBorrowsCurrent(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        totalFuseFees(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalReserves(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(dst: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(src: string, dst: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        underlying(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
