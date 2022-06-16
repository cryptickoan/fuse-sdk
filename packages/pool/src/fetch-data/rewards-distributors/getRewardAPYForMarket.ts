// Ethers
import { Provider } from '@ethersproject/abstract-provider'
import { formatUnits } from "ethers/lib/utils"

// SDK Utils
import { getDecimals } from "@fuse-v1/utils.sdk"

// Internal
import { constructMantissa } from "./utils/constructMantissa"
import { convertMantissaToAPY, convertMantissaToAPR } from "./utils/convertMantissa"
import { fetchRewardSpeedInMarket } from "./fetchRewardSpeedsInMarket"
import { fetchRewardTokenInRd } from "./fetchRewardTokenInRd"
import { getMarketsWithData, getPriceFromOracle } from "../markets"



/**
 * 
 * @param rdAddress - The reward's distributor contract address.
 * @param marketAddress - The market to get speeds for. 
 * @param oracleAddress - The comptroller's oracle.
 * @param comptrollerAddress - The comptroller's address.
 * @param type - Will be used to get the reward distribution speed for supply or borrow.
 * @returns - An object with APR and APY of given type. i.e Supply APR/APY, Borrow APR/APY.
 */
export async function getRewardAPYForMarket(
    rdAddress: string,
    marketAddress: string,
    fusePoolLensPrimaryAddress: string,
    oracleAddress: string,
    comptrollerAddress: string,
    type: 'supply' | 'borrow',
    provider: Provider
) {
    const rewardSpeed = await fetchRewardSpeedInMarket(
            rdAddress,
            marketAddress,
            type,
            provider
        )

    const rdToken = await fetchRewardTokenInRd(
            rdAddress,
            provider
        )

    const rdTokenDecimals = await getDecimals(
            provider,
            rdToken
        )

    const rewardEthPrice = await getPriceFromOracle(
            rdToken,
            oracleAddress,
            provider
        )

    const underlying = await getMarketsWithData(
            provider,
            fusePoolLensPrimaryAddress,
            comptrollerAddress
        )

    const parsedSpeed = formatUnits(rewardSpeed)

    const mantissa = constructMantissa(
            parseFloat(parsedSpeed),
            rewardEthPrice as unknown as number,
            underlying.assets[0].totalSupply.toNumber(),
            underlying.assets[0].underlyingPrice.toNumber(),
            rdTokenDecimals.toNumber(),
            underlying.assets[0].underlyingDecimals.toNumber(),
        )

    const supplyAPY = convertMantissaToAPY(mantissa, 365);
    const supplyAPR = convertMantissaToAPR(mantissa);

    return {
        supplyAPR,
        supplyAPY
    }
}