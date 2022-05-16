import { Provider } from "@ethersproject/abstract-provider"
import { Zero } from "@ethersproject/constants"
import { CErc20__factory, FuseFlywheelCore__factory } from "../../../abis/types"

export const getPendingRewards = async (
    provider: Provider,
    flywheels: string[],
    userAddress: string
) => {
    let supply: any = {}
    let borrow: any = {}

    //  For every flywheel
    for (const flywheel of flywheels) {
        const flywheelContract = FuseFlywheelCore__factory.connect(flywheel, provider)

        // 1. Get listeds strategies, accrued rewards and if its rewarding supply
        const listedStrategies = await flywheelContract.callStatic.getAllStrategies()
        const accruedRewards = await flywheelContract.callStatic.rewardsAccrued(userAddress)
        const rewardingSupply = await flywheelContract.callStatic.rewardingSupply()

        // If its rewarding supply
        if (rewardingSupply) {
            let shouldAccrue: any = {}

            // For every listed strategy
            for (const market of listedStrategies) {
                const CTokenContract = CErc20__factory.connect(market, provider)

                // 1. Get the users balance
                const balance = await CTokenContract.callStatic.balanceOf(userAddress)

                // 2. If user balance > 0 it means theyre actively supplying
                if (balance.gt(Zero)) {

                    // 3. Get the strategy state, this will tell us when the last accrue was made
                    const strategyState = await flywheelContract.strategyState(market)
                    shouldAccrue[market] = strategyState
                }
            }

            supply[flywheel] = {
                shouldAccrue,
                accruedRewards
            }
        } else {
            borrow[flywheel] = {
                listedStrategies,
                accruedRewards
            }
        }
    }

    // If supply[flywheel].shouldAccrue is not empty, then those markets can be accrued for if user chooses to.
    return {supply, borrow}
}