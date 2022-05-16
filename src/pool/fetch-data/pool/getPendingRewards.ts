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
    for (const flywheel of flywheels) {
        const flywheelContract = FuseFlywheelCore__factory.connect(flywheel, provider)

        const listedStrategies = await flywheelContract.callStatic.getAllStrategies()
        const accruedRewards = await flywheelContract.callStatic.rewardsAccrued(userAddress)
        const rewardingSupply = await flywheelContract.callStatic.rewardingSupply()

        if (rewardingSupply) {
            let shouldAccrue: any = {}
            for (const market of listedStrategies) {
                const CTokenContract = CErc20__factory.connect(market, provider)
                const balance = await CTokenContract.callStatic.balanceOf(userAddress)

                if (balance.gt(Zero)) {
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

    console.log({hi: supply['0x71089Ba41e478702e1904692385Be3972B2cBf9e'].shouldAccrue, borrow})

    return {supply, borrow}
    // 2. Divide between borrow/supply rewarding flywheels
    //  Supply Rewards
        // 1. Get all listed strategis
        // 2. Get accrued rewards
        // 3. Get users total supply for each strategy
        // 4. If totalSupply > 0, shouldAccrue = [strategies]
        // 5. Return {accruedRewards, shouldAccrue}
    // Borrow Rewards
        // 1. Get all listed strategies
        // 2. Get accrued rewards
        // 3. Get users total borrow for each strategy
        // 4. If totalBorrow > 0, shouldAccrue = [strategies]
        // 5. return {accruedRewards, shouldAccrue}
}