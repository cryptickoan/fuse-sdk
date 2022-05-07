
// Internal Utils
import { constructMantissa } from "./utils/constructMantissa"
import { convertMantissaToAPY, convertMantissaToAPR } from "./utils/convertMantissa"
import { Provider } from '@ethersproject/abstract-provider'
import { fetchRewardSpeedInMarket } from "./fetchRewardSpeedsInMarket"
import { fetchRewardTokenInRd } from "./fetchRewardTokenInRd"
import { getDecimals } from "../misc"
import { getMarketsWithData, getPriceFromOracle } from "../markets"
import { formatUnits, parseUnits } from "ethers/lib/utils"

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
    oracleAddress: string,
    comptrollerAddress: string,
    type: 'supply' | 'borrow',
    provider: Provider
) {
    // const rdAddress = '0x5302E909d1e93e30F05B5D6Eea766363D14F9892'
    // const marketAddress = '0xB8DA336A58a13D9F09FaA41570cAAf5Ec4879266'
    // const oracleAddress = '0xc60d11e23fc0e61A833f2c83ba2d764464704062'
    // const comptrollerAddress = '0x42053c258b5cd0b7f575e180DE4B90763cC2358b'

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