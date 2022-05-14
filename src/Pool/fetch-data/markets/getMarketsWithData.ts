// Ethers
import { Zero, WeiPerEther } from '@ethersproject/constants';
import { BigNumber } from "@ethersproject/bignumber";

// Internal
    // Types
import { USDPricedFuseAsset } from "../../types";
import { Options } from '../../types';
import { MarketsWithData } from '../../types';
    // Utils
import { filterOnlyObjectProperties } from "../utils/filterOnlyObjectProperties";
import { getEthUsdPriceBN } from '../../../utils';

/**
 * @param comptrollerAddress - Comptroller to look for.
 * @param options - Optional parameter to override sender and gas. Usually used when calling the lens to simulate an address.
 * @returns - Async function call to get all public pools.
 */
export async function getMarketsWithData(
    comptrollerAddress: string,
    options?: Options
): Promise<MarketsWithData> {
    let assets: USDPricedFuseAsset[] = (
        await this.contracts.fuseLensContract.callStatic.getPoolAssetsWithData(
            comptrollerAddress,  options ?? {})
    ).map(filterOnlyObjectProperties)

    const ethPrice: BigNumber = await getEthUsdPriceBN();

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
    }
}