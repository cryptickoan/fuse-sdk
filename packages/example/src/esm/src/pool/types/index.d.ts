import { BigNumber } from "@ethersproject/bignumber";
import { Contract } from "@ethersproject/contracts";
import { Provider } from '@ethersproject/abstract-provider';
export interface TokenData {
    name: string;
    symbol: string;
    address: string;
    decimals: number;
    color: string;
    overlayTextColor: string;
    logoURL: string;
}
export interface FuseAsset {
    cToken: string;
    borrowBalance: BigNumber;
    supplyBalance: BigNumber;
    liquidity: BigNumber;
    membership: boolean;
    underlyingName: string;
    underlyingSymbol: string;
    underlyingToken: string;
    underlyingDecimals: BigNumber;
    underlyingPrice: BigNumber;
    underlyingBalance: BigNumber;
    collateralFactor: BigNumber;
    reserveFactor: BigNumber;
    adminFee: BigNumber;
    fuseFee: BigNumber;
    oracle: string;
    borrowRatePerBlock: BigNumber;
    supplyRatePerBlock: BigNumber;
    totalBorrow: BigNumber;
    totalSupply: BigNumber;
}
export interface USDPricedFuseAsset extends FuseAsset {
    supplyBalanceUSD: BigNumber;
    borrowBalanceUSD: BigNumber;
    totalSupplyUSD: BigNumber;
    totalBorrowUSD: BigNumber;
    liquidityUSD: BigNumber;
    isPaused: boolean;
    borrowGuardianPaused?: boolean;
}
export interface USDPricedFuseAssetUSDPricedFuseAssetWithTokenData extends USDPricedFuseAsset {
    tokenData: TokenData;
}
export interface FusePoolData {
    comptroller: string;
    name: string;
    oracle: string;
    oracleModel: string | null;
    id?: number;
    admin: string;
}
export declare type MarketsWithData = {
    assets: USDPricedFuseAsset[];
    totalLiquidityUSD: BigNumber;
    totalSupplyBalanceUSD: BigNumber;
    totalBorrowBalanceUSD: BigNumber;
    totalSuppliedUSD: BigNumber;
    totalBorrowedUSD: BigNumber;
};
export declare type Options = {
    from?: string;
};
export declare type PoolInformation = {
    name: string;
    creator: string;
    comptroller: string;
    blockPosted: BigNumber;
    timestampPosted: BigNumber;
};
export declare type Addresses = {
    FUSE_POOL_DIRECTORY_CONTRACT_ADDRESS: string;
    FUSE_POOL_LENS_CONTRACT_ADDRESS: string;
    FUSE_POOL_LENS_SECONDARY_CONTRACT_ADDRESS: string;
};
export declare type OracleHashes = {
    [key: string]: string;
};
export interface RewardsDistributorData {
    address: string;
    isRewardsDistributor: boolean;
    isFlywheel: boolean;
}
export declare type PoolInstance = {
    poolId: number;
    poolData: FusePoolData;
    contracts: {
        fuseLens: Contract;
        secondaryFuseLens: Contract;
    };
    fetch: {
        getMarketsWithData(comptrollerAddress: string, options?: Options): Promise<MarketsWithData>;
        fetchAvailableRdsWithContext(comptrollerAddress: string, provider: Provider): Promise<RewardsDistributorData[]>;
    };
    utils: {
        fetchTokenBalance(provider: Provider, tokenAddress: string | undefined, address?: string, parse?: boolean): Promise<number | BigNumber>;
        getDecimals(provider: Provider, tokenAddress: string): Promise<BigNumber>;
        getEthUsdPriceBN: () => Promise<BigNumber>;
        getUnderlyingBalancesForPool: (markets: USDPricedFuseAsset[]) => {
            [cToken: string]: BigNumber;
        };
    };
};
export declare type marketInteractionType = "withdraw" | "borrow" | "repay" | "supply";
export declare type actionType = "enter" | "exit";
export declare enum ComptrollerErrorCodes {
    NO_ERROR = 0,
    UNAUTHORIZED = 1,
    COMPTROLLER_MISMATCH = 2,
    INSUFFICIENT_SHORTFALL = 3,
    INSUFFICIENT_LIQUIDITY = 4,
    INVALID_CLOSE_FACTOR = 5,
    INVALID_COLLATERAL_FACTOR = 6,
    INVALID_LIQUIDATION_INCENTIVE = 7,
    MARKET_NOT_ENTERED = 8,
    MARKET_NOT_LISTED = 9,
    MARKET_ALREADY_LISTED = 10,
    MATH_ERROR = 11,
    NONZERO_BORROW_BALANCE = 12,
    PRICE_ERROR = 13,
    REJECTION = 14,
    SNAPSHOT_ERROR = 15,
    TOO_MANY_ASSETS = 16,
    TOO_MUCH_REPAY = 17,
    SUPPLIER_NOT_WHITELISTED = 18,
    BORROW_BELOW_MIN = 19,
    SUPPLY_ABOVE_MAX = 20
}
export declare enum CTokenErrorCodes {
    NO_ERROR = 0,
    UNAUTHORIZED = 1,
    BAD_INPUT = 2,
    COMPTROLLER_REJECTION = 3,
    COMPTROLLER_CALCULATION_ERROR = 4,
    INTEREST_RATE_MODEL_ERROR = 5,
    INVALID_ACCOUNT_PAIR = 6,
    INVALID_CLOSE_AMOUNT_REQUESTED = 7,
    INVALID_COLLATERAL_FACTOR = 8,
    MATH_ERROR = 9,
    MARKET_NOT_FRESH = 10,
    MARKET_NOT_LISTED = 11,
    TOKEN_INSUFFICIENT_ALLOWANCE = 12,
    TOKEN_INSUFFICIENT_BALANCE = 13,
    TOKEN_INSUFFICIENT_CASH = 14,
    TOKEN_TRANSFER_IN_FAILED = 15,
    TOKEN_TRANSFER_OUT_FAILED = 16,
    UTILIZATION_ABOVE_MAX = 17
}
