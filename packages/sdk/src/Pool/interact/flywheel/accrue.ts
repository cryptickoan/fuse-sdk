import { JsonRpcProvider, Web3Provider } from "@ethersproject/providers"
import { FuseFlywheelCore__factory } from "../../../abis/types"

export const accrue = async (
    provider: Web3Provider | JsonRpcProvider,
    flywheelAddress: string,
    strategyAddress: string,
    userAddress: string
) => {
    const flywheelContract = FuseFlywheelCore__factory.connect(flywheelAddress, provider.getSigner())

    return await flywheelContract["accrue(address,address)"](strategyAddress, userAddress)
}