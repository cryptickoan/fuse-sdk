import { JsonRpcProvider, Web3Provider } from "@ethersproject/providers"
import { FuseFlywheelLensRouter__factory } from "../../../abis/types/factories/FuseFlywheelLensRouter__factory"

export const claimAndAccrue = async (
    provider: Web3Provider | JsonRpcProvider,
    flywheelWithContext: any,
    flywheel: string,
    userAddress: string
) => {
    const flywheelRouter = FuseFlywheelLensRouter__factory.connect("0xcd9704f874d69f0cb2ddfd04ff8e5c88f3caf02e", provider.getSigner())
    
    const markets = Object.keys(flywheelWithContext.shouldAccrue)

    let accrue = []
    for (const market of markets) {
        accrue.push(flywheelWithContext.shouldAccrue[market].shouldUpdate)
    }

    return await flywheelRouter.getUnclaimedRewardsByMarkets(userAddress, markets, [flywheel], accrue)
}