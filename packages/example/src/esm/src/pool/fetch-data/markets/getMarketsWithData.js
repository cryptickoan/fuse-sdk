var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Ethers
import { Zero, WeiPerEther } from '@ethersproject/constants';
// Utils
import { filterOnlyObjectProperties } from "../utils/filterOnlyObjectProperties";
import { getEthUsdPriceBN } from '../../../utils';
import { convertMantissaToAPY } from '../utils/mantissaToAPY';
import { formatEther } from 'ethers/lib/utils';
/**
 * @param comptrollerAddress - Comptroller to look for.
 * @param options - Optional parameter to override sender and gas. Usually used when calling the lens to simulate an address.
 * @returns - Async function call to get all public pools.
 */
export function getMarketsWithData(comptrollerAddress, options) {
    return __awaiter(this, void 0, void 0, function* () {
        let assets = (yield this.contracts.fuseLensContract.callStatic.getPoolAssetsWithData(comptrollerAddress, options !== null && options !== void 0 ? options : {})).map(filterOnlyObjectProperties);
        const ethPrice = yield getEthUsdPriceBN();
        let totalLiquidityUSD = Zero;
        let totalSupplyBalanceUSD = Zero;
        let totalBorrowBalanceUSD = Zero;
        let totalSuppliedUSD = Zero;
        let totalBorrowedUSD = Zero;
        for (let i = 0; i < assets.length; i++) {
            let asset = assets[i];
            asset.supplyBalanceUSD = asset.supplyBalance
                .mul(asset.underlyingPrice)
                .mul(ethPrice)
                .div(WeiPerEther.pow(3));
            asset.borrowBalanceUSD = asset.borrowBalance
                .mul(asset.underlyingPrice)
                .mul(ethPrice)
                .div(WeiPerEther.pow(3));
            totalSupplyBalanceUSD = totalSupplyBalanceUSD.add(asset.supplyBalanceUSD);
            totalBorrowBalanceUSD = totalBorrowBalanceUSD.add(asset.borrowBalanceUSD);
            asset.totalSupplyUSD = asset.totalSupply
                .mul(asset.underlyingPrice)
                .mul(ethPrice)
                .div(WeiPerEther.pow(3));
            asset.totalBorrowUSD = asset.totalBorrow
                .mul(asset.underlyingPrice)
                .mul(ethPrice)
                .div(WeiPerEther.pow(3));
            asset.supplyAPY = convertMantissaToAPY(asset.supplyRatePerBlock);
            asset.borrowAPY = convertMantissaToAPY(asset.borrowRatePerBlock);
            asset.collateralFactorNumber = formatEther(asset.collateralFactor.mul(100));
            totalSuppliedUSD = totalSuppliedUSD.add(asset.totalSupplyUSD);
            totalBorrowedUSD = totalBorrowedUSD.add(asset.totalBorrowUSD);
            asset.liquidityUSD = asset.liquidity
                .mul(asset.underlyingPrice)
                .mul(ethPrice)
                .div(WeiPerEther.pow(3));
            totalLiquidityUSD.add(asset.liquidityUSD);
        }
        return {
            assets: assets.sort((a, b) => (b.liquidityUSD.gt(a.liquidityUSD) ? 1 : -1)),
            totalLiquidityUSD,
            totalSupplyBalanceUSD,
            totalBorrowBalanceUSD,
            totalSuppliedUSD,
            totalBorrowedUSD
        };
    });
}
