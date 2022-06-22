// Ethers
import { BigNumber } from "@ethersproject/bignumber";
import { Contract, ContractTransaction } from "@ethersproject/contracts";
import { Provider } from '@ethersproject/abstract-provider'
import { JsonRpcProvider, Web3Provider } from "@ethersproject/providers";

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

export interface USDPricedFuseAssetWithTokenData extends USDPricedFuseAsset {
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

export type MarketsWithData = {
    assets: USDPricedFuseAsset[],
    totalLiquidityUSD: BigNumber,
    totalSupplyBalanceUSD: BigNumber,
    totalBorrowBalanceUSD: BigNumber,
    totalSuppliedUSD: BigNumber,
    totalBorrowedUSD: BigNumber
}

export type Options= {
    from?: string,
}

export type PoolInformation = {
    name: string,
    creator: string,
    comptroller: string,
    blockPosted: BigNumber,
    timestampPosted: BigNumber
}

export type Addresses = {
    FUSE_POOL_DIRECTORY_CONTRACT_ADDRESS: string,
    FUSE_POOL_LENS_CONTRACT_ADDRESS: string
    FUSE_POOL_LENS_SECONDARY_CONTRACT_ADDRESS: string,
}

export type OracleHashes = {
    [key: string]: string
  } 

export type FlywheelSupplyRewards = {
    [flywheel: string]: {
        shouldAccrue: AccrueInfo,
        accruedRewards: BigNumber
    }
}

export type AccrueInfo = {
    [market: string] :{
        lastUpdatedTimeStamp: number,
        currentTimeStamp: string,
        timeSinceLastAccrue: number,
        shouldUpdate: boolean,
        userIsActive: boolean,
        rewardedToken: string
    }
}

export interface RewardsDistributorData {
    address: string;
    isRewardsDistributor: boolean;
    isFlywheel: boolean;
}

export type PoolInstance = {
    poolId: number
    comptroller: string,
    name: string,
    oracle: string,
    oracleModel: string | null,
    admin: string,
    fetch: {
        markets(options?: Options): Promise<MarketsWithData>
        rewardedMarkets(): Promise<any>,
        pendingRewards(userAddress: string): Promise<{
            pendingRewards: FlywheelSupplyRewards;
        }>
    }
    interact: {
        market: {
            supply(cTokenAddress: string, amount: string, underlyingAddress: string, decimals?: BigNumber, account?: string): Promise<ContractTransaction | undefined>,
            withdraw(cTokenAddress: string, amount: string, underlyingAddress: string, decimals?: BigNumber, account?: string): Promise<ContractTransaction | undefined>,
            borrow(cTokenAddress: string, amount: string, underlyingAddress: string, decimals?: BigNumber, account?: string): Promise<ContractTransaction | undefined>,
            repay(cTokenAddress: string, amount: string, underlyingAddress: string, decimals?: BigNumber, account?: string): Promise<ContractTransaction | undefined>,
            enterMarkets(marketAddress: string[] | string): Promise<void>,
            exitMarkets(marketAddress: string[] | string): Promise<void>
        },
        flywheel: {
            
        }
    }

}

export type marketInteractionType = "withdraw" | "borrow" | "repay" | "supply"
export type actionType = "enter" | "exit"


export enum ComptrollerErrorCodes {
    NO_ERROR,
    UNAUTHORIZED,
    COMPTROLLER_MISMATCH,
    INSUFFICIENT_SHORTFALL,
    INSUFFICIENT_LIQUIDITY,
    INVALID_CLOSE_FACTOR,
    INVALID_COLLATERAL_FACTOR,
    INVALID_LIQUIDATION_INCENTIVE,
    MARKET_NOT_ENTERED,
    MARKET_NOT_LISTED,
    MARKET_ALREADY_LISTED,
    MATH_ERROR,
    NONZERO_BORROW_BALANCE,
    PRICE_ERROR,
    REJECTION,
    SNAPSHOT_ERROR,
    TOO_MANY_ASSETS,
    TOO_MUCH_REPAY,
    SUPPLIER_NOT_WHITELISTED,
    BORROW_BELOW_MIN,
    SUPPLY_ABOVE_MAX,
  }
  
  export enum CTokenErrorCodes {
    NO_ERROR,
    UNAUTHORIZED,
    BAD_INPUT,
    COMPTROLLER_REJECTION,
    COMPTROLLER_CALCULATION_ERROR,
    INTEREST_RATE_MODEL_ERROR,
    INVALID_ACCOUNT_PAIR,
    INVALID_CLOSE_AMOUNT_REQUESTED,
    INVALID_COLLATERAL_FACTOR,
    MATH_ERROR,
    MARKET_NOT_FRESH,
    MARKET_NOT_LISTED,
    TOKEN_INSUFFICIENT_ALLOWANCE,
    TOKEN_INSUFFICIENT_BALANCE,
    TOKEN_INSUFFICIENT_CASH,
    TOKEN_TRANSFER_IN_FAILED,
    TOKEN_TRANSFER_OUT_FAILED,
    UTILIZATION_ABOVE_MAX,
  }