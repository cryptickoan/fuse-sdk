import { Interface } from "@ethersproject/abi";

const iFuseLens = new Interface([
    'function getPoolAssetsWithData(address comptroller) external returns ( tuple(address cToken, address underlyingToken, string underlyingName, string underlyingSymbol, uint256 underlyingDecimals, uint256 underlyingBalance, uint256 supplyRatePerBlock, uint256 borrowRatePerBlock, uint256 totalSupply, uint256 totalBorrow, uint256 supplyBalance, uint256 borrowBalance, uint256 liquidity, bool membership, uint256 exchangeRate, uint256 underlyingPrice, address oracle, uint256 collateralFactor, uint256 reserveFactor, uint256 adminFee, uint256 fuseFee, bool borrowGuardianPaused)[] )',
    'function getMaxRedeem(address account, address CToken) external returns (uint256)',
    'function getMaxBorrow(address account, address CToken) external returns (uint256)'
])

export default iFuseLens