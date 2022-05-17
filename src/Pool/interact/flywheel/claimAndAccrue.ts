import { JsonRpcProvider, Web3Provider } from "@ethersproject/providers"
import { FuseFlywheelLensRouter__factory } from "../../../abis/types/factories/FuseFlywheelLensRouter__factory"

export const claimAndAccrue = (
    provider: Web3Provider | JsonRpcProvider,
    market: string | string[],
    flywheels: string[],
    accrue: boolean[],
    userAddress: string
) => {
    const flywheelRouter = FuseFlywheelLensRouter__factory.connect("0xcd9704f874d69f0cb2ddfd04ff8e5c88f3caf02e", provider.getSigner())

    if (typeof market === 'string') {

        return flywheelRouter.getUnclaimedRewardsForMarket(userAddress, market, flywheels, accrue)
    }

    return flywheelRouter.getUnclaimedRewardsByMarkets(userAddress, market, flywheels, accrue)

}