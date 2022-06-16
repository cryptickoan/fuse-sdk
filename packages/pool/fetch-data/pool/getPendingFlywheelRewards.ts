import { Provider } from "@ethersproject/abstract-provider"
import { Zero } from "@ethersproject/constants"
import { CErc20__factory, Comptroller__factory } from "@fuse-v1/core"
import { FuseFlywheelCore__factory } from "@fuse-v1/flywheel"
import { BigNumber } from "ethers"

export const getPendingFlywheelRewards = async (
    provider: Provider,
    comptroller: string,
    userAddress: string
) => {
    let pendingRewards = {}
    const comptrollerContract = Comptroller__factory.connect(comptroller, provider)
    const flywheels = await comptrollerContract.callStatic.getRewardsDistributors()

    //  For every flywheel
    for (const flywheel of flywheels) {
        const flywheelContract = FuseFlywheelCore__factory.connect(flywheel, provider)

        // 1. Get listed strategies, accrued rewards and incentivized action
        const listedStrategies = await flywheelContract.callStatic.getAllStrategies()
        const accruedRewards = await flywheelContract.callStatic.rewardsAccrued(userAddress)
        const incentivizingSupply = await flywheelContract.callStatic.rewardingSupply()
        const rewardedToken = await flywheelContract.callStatic.rewardToken()

        let shouldAccrue: any  = {}
        for (const market of listedStrategies) {
            // 1. Get the strategy state, this will tell us when the last accrue was made
            const strategyState = await flywheelContract.strategyState(market)
            const currentTimeStamp = (Date.now() / 1000).toFixed(0)
            const timeSinceLastAccrue =  parseFloat(currentTimeStamp) - strategyState.lastUpdatedTimestamp 
            
            shouldAccrue[market] = {
                lastUpdatedTimeStamp: strategyState.lastUpdatedTimestamp,
                currentTimeStamp,
                timeSinceLastAccrue,
                shouldUpdate: false, 
                userIsActive: false,
                rewardedToken
            }

             // If its incentivizing supply
            if (incentivizingSupply) {
                // 1. Get the users supply balance
                const CTokenContract = CErc20__factory.connect(market, provider)
                const balance = await CTokenContract.callStatic.balanceOf(userAddress)

                // 2. If user balance > 0 it means theyre actively supplying, which will also mean they're still receiving rewards.
                if (balance.gt(Zero)) {
                    // If 4 Days have passed since last accrue then true.
                    shouldAccrue[market].shouldUpdate = timeSinceLastAccrue > 345600 ? true : false
                    shouldAccrue[market].userIsActive = true
                } 
                
                pendingRewards[flywheel] = {
                    shouldAccrue,
                    accruedRewards
                }
                
            // If borrowing is incentivized
            }
            
            if (!incentivizingSupply) {
                // 1. Get the users borrow balance
                const CTokenContract = CErc20__factory.connect(market, provider)
                const balance = await CTokenContract.callStatic.balanceOf(userAddress)
                
                // 2. If user balance > 0 it means theyre actively borrowing, which will also mean they're still receiving rewards.
                if (balance.gt(Zero)) {
                    // If 4 Days have passed since last accrue then true.
                    shouldAccrue[market].shouldUpdate = timeSinceLastAccrue > 345600 ? true : false
                    shouldAccrue[market].userIsActive = true
                } 

                pendingRewards[flywheel] = {
                    shouldAccrue,
                    accruedRewards
                }
            }
        }
    }

    // If supply[flywheel].shouldAccrue is not empty, then those markets can be accrued for if user chooses to.
    return {pendingRewards}
}

type FlywheelSupplyRewards = {
    [flywheel: string]: {
        shouldAccrue: AccrueInfo,
        accruedRewards: BigNumber
    }
}

type AccrueInfo = {
    [market: string] :{
        lastUpdatedTimeStamp: number,
        currentTimeStamp: string,
        timeSinceLastAccrue: number,
        shouldUpdate: boolean,
        userIsActive: boolean
    }
}