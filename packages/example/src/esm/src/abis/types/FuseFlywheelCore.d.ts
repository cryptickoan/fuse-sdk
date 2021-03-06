import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace FlywheelCore {
    type RewardsStateStruct = {
        index: BigNumberish;
        lastUpdatedTimestamp: BigNumberish;
    };
    type RewardsStateStructOutput = [BigNumber, number] & {
        index: BigNumber;
        lastUpdatedTimestamp: number;
    };
}
export interface FuseFlywheelCoreInterface extends utils.Interface {
    functions: {
        "ONE()": FunctionFragment;
        "accrue(address,address)": FunctionFragment;
        "accrue(address,address,address)": FunctionFragment;
        "addMarketForRewards(address)": FunctionFragment;
        "addStrategyForRewards(address)": FunctionFragment;
        "allStrategies(uint256)": FunctionFragment;
        "authority()": FunctionFragment;
        "claimRewards(address)": FunctionFragment;
        "compAccrued(address)": FunctionFragment;
        "flywheelBooster()": FunctionFragment;
        "flywheelPreBorrowerAction(address,address)": FunctionFragment;
        "flywheelPreSupplierAction(address,address)": FunctionFragment;
        "flywheelPreTransferAction(address,address,address)": FunctionFragment;
        "flywheelRewards()": FunctionFragment;
        "getAllStrategies()": FunctionFragment;
        "isFlywheel()": FunctionFragment;
        "isRewardsDistributor()": FunctionFragment;
        "marketState(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "rewardToken()": FunctionFragment;
        "rewardingSupply()": FunctionFragment;
        "rewardsAccrued(address)": FunctionFragment;
        "setAuthority(address)": FunctionFragment;
        "setBooster(address)": FunctionFragment;
        "setFlywheelRewards(address)": FunctionFragment;
        "setOwner(address)": FunctionFragment;
        "strategyState(address)": FunctionFragment;
        "userIndex(address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ONE" | "accrue(address,address)" | "accrue(address,address,address)" | "addMarketForRewards" | "addStrategyForRewards" | "allStrategies" | "authority" | "claimRewards" | "compAccrued" | "flywheelBooster" | "flywheelPreBorrowerAction" | "flywheelPreSupplierAction" | "flywheelPreTransferAction" | "flywheelRewards" | "getAllStrategies" | "isFlywheel" | "isRewardsDistributor" | "marketState" | "owner" | "rewardToken" | "rewardingSupply" | "rewardsAccrued" | "setAuthority" | "setBooster" | "setFlywheelRewards" | "setOwner" | "strategyState" | "userIndex"): FunctionFragment;
    encodeFunctionData(functionFragment: "ONE", values?: undefined): string;
    encodeFunctionData(functionFragment: "accrue(address,address)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "accrue(address,address,address)", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "addMarketForRewards", values: [string]): string;
    encodeFunctionData(functionFragment: "addStrategyForRewards", values: [string]): string;
    encodeFunctionData(functionFragment: "allStrategies", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "authority", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimRewards", values: [string]): string;
    encodeFunctionData(functionFragment: "compAccrued", values: [string]): string;
    encodeFunctionData(functionFragment: "flywheelBooster", values?: undefined): string;
    encodeFunctionData(functionFragment: "flywheelPreBorrowerAction", values: [string, string]): string;
    encodeFunctionData(functionFragment: "flywheelPreSupplierAction", values: [string, string]): string;
    encodeFunctionData(functionFragment: "flywheelPreTransferAction", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "flywheelRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllStrategies", values?: undefined): string;
    encodeFunctionData(functionFragment: "isFlywheel", values?: undefined): string;
    encodeFunctionData(functionFragment: "isRewardsDistributor", values?: undefined): string;
    encodeFunctionData(functionFragment: "marketState", values: [string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardingSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardsAccrued", values: [string]): string;
    encodeFunctionData(functionFragment: "setAuthority", values: [string]): string;
    encodeFunctionData(functionFragment: "setBooster", values: [string]): string;
    encodeFunctionData(functionFragment: "setFlywheelRewards", values: [string]): string;
    encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "strategyState", values: [string]): string;
    encodeFunctionData(functionFragment: "userIndex", values: [string, string]): string;
    decodeFunctionResult(functionFragment: "ONE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accrue(address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accrue(address,address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addMarketForRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addStrategyForRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allStrategies", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authority", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compAccrued", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flywheelBooster", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flywheelPreBorrowerAction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flywheelPreSupplierAction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flywheelPreTransferAction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flywheelRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllStrategies", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isFlywheel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isRewardsDistributor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "marketState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardingSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardsAccrued", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAuthority", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBooster", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFlywheelRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "strategyState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userIndex", data: BytesLike): Result;
    events: {
        "AccrueRewards(address,address,uint256,uint256)": EventFragment;
        "AddStrategy(address)": EventFragment;
        "AuthorityUpdated(address,address)": EventFragment;
        "ClaimRewards(address,uint256)": EventFragment;
        "FlywheelBoosterUpdate(address)": EventFragment;
        "FlywheelRewardsUpdate(address)": EventFragment;
        "OwnerUpdated(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AccrueRewards"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AddStrategy"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AuthorityUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClaimRewards"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FlywheelBoosterUpdate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FlywheelRewardsUpdate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerUpdated"): EventFragment;
}
export interface AccrueRewardsEventObject {
    strategy: string;
    user: string;
    rewardsDelta: BigNumber;
    rewardsIndex: BigNumber;
}
export declare type AccrueRewardsEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], AccrueRewardsEventObject>;
export declare type AccrueRewardsEventFilter = TypedEventFilter<AccrueRewardsEvent>;
export interface AddStrategyEventObject {
    newStrategy: string;
}
export declare type AddStrategyEvent = TypedEvent<[string], AddStrategyEventObject>;
export declare type AddStrategyEventFilter = TypedEventFilter<AddStrategyEvent>;
export interface AuthorityUpdatedEventObject {
    user: string;
    newAuthority: string;
}
export declare type AuthorityUpdatedEvent = TypedEvent<[
    string,
    string
], AuthorityUpdatedEventObject>;
export declare type AuthorityUpdatedEventFilter = TypedEventFilter<AuthorityUpdatedEvent>;
export interface ClaimRewardsEventObject {
    user: string;
    amount: BigNumber;
}
export declare type ClaimRewardsEvent = TypedEvent<[
    string,
    BigNumber
], ClaimRewardsEventObject>;
export declare type ClaimRewardsEventFilter = TypedEventFilter<ClaimRewardsEvent>;
export interface FlywheelBoosterUpdateEventObject {
    newBooster: string;
}
export declare type FlywheelBoosterUpdateEvent = TypedEvent<[
    string
], FlywheelBoosterUpdateEventObject>;
export declare type FlywheelBoosterUpdateEventFilter = TypedEventFilter<FlywheelBoosterUpdateEvent>;
export interface FlywheelRewardsUpdateEventObject {
    newFlywheelRewards: string;
}
export declare type FlywheelRewardsUpdateEvent = TypedEvent<[
    string
], FlywheelRewardsUpdateEventObject>;
export declare type FlywheelRewardsUpdateEventFilter = TypedEventFilter<FlywheelRewardsUpdateEvent>;
export interface OwnerUpdatedEventObject {
    user: string;
    newOwner: string;
}
export declare type OwnerUpdatedEvent = TypedEvent<[
    string,
    string
], OwnerUpdatedEventObject>;
export declare type OwnerUpdatedEventFilter = TypedEventFilter<OwnerUpdatedEvent>;
export interface FuseFlywheelCore extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: FuseFlywheelCoreInterface;
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
        ONE(overrides?: CallOverrides): Promise<[BigNumber]>;
        "accrue(address,address)"(strategy: string, user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "accrue(address,address,address)"(strategy: string, user: string, secondUser: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addMarketForRewards(strategy: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addStrategyForRewards(strategy: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        allStrategies(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        authority(overrides?: CallOverrides): Promise<[string]>;
        claimRewards(user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        compAccrued(user: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        flywheelBooster(overrides?: CallOverrides): Promise<[string]>;
        flywheelPreBorrowerAction(market: string, borrower: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        flywheelPreSupplierAction(market: string, supplier: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        flywheelPreTransferAction(market: string, src: string, dst: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        flywheelRewards(overrides?: CallOverrides): Promise<[string]>;
        getAllStrategies(overrides?: CallOverrides): Promise<[string[]]>;
        isFlywheel(overrides?: CallOverrides): Promise<[boolean]>;
        isRewardsDistributor(overrides?: CallOverrides): Promise<[boolean]>;
        marketState(strategy: string, overrides?: CallOverrides): Promise<[FlywheelCore.RewardsStateStructOutput]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        rewardToken(overrides?: CallOverrides): Promise<[string]>;
        rewardingSupply(overrides?: CallOverrides): Promise<[boolean]>;
        rewardsAccrued(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        setAuthority(newAuthority: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setBooster(newBooster: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setFlywheelRewards(newFlywheelRewards: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setOwner(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        strategyState(arg0: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            number
        ] & {
            index: BigNumber;
            lastUpdatedTimestamp: number;
        }>;
        userIndex(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    ONE(overrides?: CallOverrides): Promise<BigNumber>;
    "accrue(address,address)"(strategy: string, user: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "accrue(address,address,address)"(strategy: string, user: string, secondUser: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addMarketForRewards(strategy: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addStrategyForRewards(strategy: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    allStrategies(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    authority(overrides?: CallOverrides): Promise<string>;
    claimRewards(user: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    compAccrued(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    flywheelBooster(overrides?: CallOverrides): Promise<string>;
    flywheelPreBorrowerAction(market: string, borrower: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    flywheelPreSupplierAction(market: string, supplier: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    flywheelPreTransferAction(market: string, src: string, dst: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    flywheelRewards(overrides?: CallOverrides): Promise<string>;
    getAllStrategies(overrides?: CallOverrides): Promise<string[]>;
    isFlywheel(overrides?: CallOverrides): Promise<boolean>;
    isRewardsDistributor(overrides?: CallOverrides): Promise<boolean>;
    marketState(strategy: string, overrides?: CallOverrides): Promise<FlywheelCore.RewardsStateStructOutput>;
    owner(overrides?: CallOverrides): Promise<string>;
    rewardToken(overrides?: CallOverrides): Promise<string>;
    rewardingSupply(overrides?: CallOverrides): Promise<boolean>;
    rewardsAccrued(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    setAuthority(newAuthority: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setBooster(newBooster: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setFlywheelRewards(newFlywheelRewards: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setOwner(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    strategyState(arg0: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        number
    ] & {
        index: BigNumber;
        lastUpdatedTimestamp: number;
    }>;
    userIndex(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        ONE(overrides?: CallOverrides): Promise<BigNumber>;
        "accrue(address,address)"(strategy: string, user: string, overrides?: CallOverrides): Promise<BigNumber>;
        "accrue(address,address,address)"(strategy: string, user: string, secondUser: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        addMarketForRewards(strategy: string, overrides?: CallOverrides): Promise<void>;
        addStrategyForRewards(strategy: string, overrides?: CallOverrides): Promise<void>;
        allStrategies(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        authority(overrides?: CallOverrides): Promise<string>;
        claimRewards(user: string, overrides?: CallOverrides): Promise<void>;
        compAccrued(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        flywheelBooster(overrides?: CallOverrides): Promise<string>;
        flywheelPreBorrowerAction(market: string, borrower: string, overrides?: CallOverrides): Promise<void>;
        flywheelPreSupplierAction(market: string, supplier: string, overrides?: CallOverrides): Promise<void>;
        flywheelPreTransferAction(market: string, src: string, dst: string, overrides?: CallOverrides): Promise<void>;
        flywheelRewards(overrides?: CallOverrides): Promise<string>;
        getAllStrategies(overrides?: CallOverrides): Promise<string[]>;
        isFlywheel(overrides?: CallOverrides): Promise<boolean>;
        isRewardsDistributor(overrides?: CallOverrides): Promise<boolean>;
        marketState(strategy: string, overrides?: CallOverrides): Promise<FlywheelCore.RewardsStateStructOutput>;
        owner(overrides?: CallOverrides): Promise<string>;
        rewardToken(overrides?: CallOverrides): Promise<string>;
        rewardingSupply(overrides?: CallOverrides): Promise<boolean>;
        rewardsAccrued(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        setAuthority(newAuthority: string, overrides?: CallOverrides): Promise<void>;
        setBooster(newBooster: string, overrides?: CallOverrides): Promise<void>;
        setFlywheelRewards(newFlywheelRewards: string, overrides?: CallOverrides): Promise<void>;
        setOwner(newOwner: string, overrides?: CallOverrides): Promise<void>;
        strategyState(arg0: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            number
        ] & {
            index: BigNumber;
            lastUpdatedTimestamp: number;
        }>;
        userIndex(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "AccrueRewards(address,address,uint256,uint256)"(strategy?: string | null, user?: string | null, rewardsDelta?: null, rewardsIndex?: null): AccrueRewardsEventFilter;
        AccrueRewards(strategy?: string | null, user?: string | null, rewardsDelta?: null, rewardsIndex?: null): AccrueRewardsEventFilter;
        "AddStrategy(address)"(newStrategy?: string | null): AddStrategyEventFilter;
        AddStrategy(newStrategy?: string | null): AddStrategyEventFilter;
        "AuthorityUpdated(address,address)"(user?: string | null, newAuthority?: string | null): AuthorityUpdatedEventFilter;
        AuthorityUpdated(user?: string | null, newAuthority?: string | null): AuthorityUpdatedEventFilter;
        "ClaimRewards(address,uint256)"(user?: string | null, amount?: null): ClaimRewardsEventFilter;
        ClaimRewards(user?: string | null, amount?: null): ClaimRewardsEventFilter;
        "FlywheelBoosterUpdate(address)"(newBooster?: string | null): FlywheelBoosterUpdateEventFilter;
        FlywheelBoosterUpdate(newBooster?: string | null): FlywheelBoosterUpdateEventFilter;
        "FlywheelRewardsUpdate(address)"(newFlywheelRewards?: string | null): FlywheelRewardsUpdateEventFilter;
        FlywheelRewardsUpdate(newFlywheelRewards?: string | null): FlywheelRewardsUpdateEventFilter;
        "OwnerUpdated(address,address)"(user?: string | null, newOwner?: string | null): OwnerUpdatedEventFilter;
        OwnerUpdated(user?: string | null, newOwner?: string | null): OwnerUpdatedEventFilter;
    };
    estimateGas: {
        ONE(overrides?: CallOverrides): Promise<BigNumber>;
        "accrue(address,address)"(strategy: string, user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "accrue(address,address,address)"(strategy: string, user: string, secondUser: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addMarketForRewards(strategy: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addStrategyForRewards(strategy: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        allStrategies(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        authority(overrides?: CallOverrides): Promise<BigNumber>;
        claimRewards(user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        compAccrued(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        flywheelBooster(overrides?: CallOverrides): Promise<BigNumber>;
        flywheelPreBorrowerAction(market: string, borrower: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        flywheelPreSupplierAction(market: string, supplier: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        flywheelPreTransferAction(market: string, src: string, dst: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        flywheelRewards(overrides?: CallOverrides): Promise<BigNumber>;
        getAllStrategies(overrides?: CallOverrides): Promise<BigNumber>;
        isFlywheel(overrides?: CallOverrides): Promise<BigNumber>;
        isRewardsDistributor(overrides?: CallOverrides): Promise<BigNumber>;
        marketState(strategy: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        rewardToken(overrides?: CallOverrides): Promise<BigNumber>;
        rewardingSupply(overrides?: CallOverrides): Promise<BigNumber>;
        rewardsAccrued(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        setAuthority(newAuthority: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setBooster(newBooster: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setFlywheelRewards(newFlywheelRewards: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setOwner(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        strategyState(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        userIndex(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        ONE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "accrue(address,address)"(strategy: string, user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "accrue(address,address,address)"(strategy: string, user: string, secondUser: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addMarketForRewards(strategy: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addStrategyForRewards(strategy: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        allStrategies(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        authority(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimRewards(user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        compAccrued(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        flywheelBooster(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        flywheelPreBorrowerAction(market: string, borrower: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        flywheelPreSupplierAction(market: string, supplier: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        flywheelPreTransferAction(market: string, src: string, dst: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        flywheelRewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllStrategies(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isFlywheel(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isRewardsDistributor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        marketState(strategy: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardingSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardsAccrued(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAuthority(newAuthority: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setBooster(newBooster: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setFlywheelRewards(newFlywheelRewards: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setOwner(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        strategyState(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        userIndex(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
