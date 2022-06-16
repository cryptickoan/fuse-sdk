// Ethers
import { Zero, WeiPerEther } from '@ethersproject/constants';
import { BigNumber } from "@ethersproject/bignumber";

// SDK Utils
import { getEthUsdPriceBN } from '@fuse-v1/utils.sdk';

// Internal
    // Types
import { Options } from '../../types';
import { MarketsWithData } from '../../types';
    // Utils
import { filterOnlyObjectProperties } from "../utils/filterOnlyObjectProperties";
import { convertMantissaToAPY } from '../utils/mantissaToAPY';
import { formatEther } from 'ethers/lib/utils';
import { FusePoolLens__factory } from '@fuse-v1/periphery';
import { Provider } from '@ethersproject/abstract-provider';

/**
 * @param comptrollerAddress - Comptroller to look for.
 * @param options - Optional parameter to override sender and gas. Usually used when calling the lens to simulate an address.
 * @returns - Async function call to get all public pools.
 */
export async function getMarketsWithData(
    provider: Provider,
    fusePoolLensPrimaryAddress: string,
    comptrollerAddress: string,
    options?: Options
): Promise<MarketsWithData> {
    let assets: any[] = (
        await (FusePoolLens__factory.connect(fusePoolLensPrimaryAddress, provider)).callStatic.getPoolAssetsWithData(
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

        asset.supplyAPY = convertMantissaToAPY(asset.supplyRatePerBlock);
        asset.borrowAPY = convertMantissaToAPY(asset.borrowRatePerBlock);
        asset.collateralFactorNumber = formatEther(asset.collateralFactor.mul(100))
    
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