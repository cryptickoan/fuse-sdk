import { ReactNode, useContext, createContext } from "react";
import { useMarkets } from "../hooks/useMarkets";
import { usePool } from "../hooks/usePool";
import { useRewardedMarkets } from "../hooks/useRewardedMarkets";

const PoolContext = createContext<any>(undefined)

export const PoolProvider = ({
    children
} : { 
    children: ReactNode
}) => {
    const pool = usePool()
    const markets = useMarkets(pool)
    const rewardedMarkets = useRewardedMarkets(pool)

    const value = {
        pool,
        markets,
        rewardedMarkets
    }

    return <PoolContext.Provider value={value}>{children}</PoolContext.Provider>
}

export function usePoolContext() {
    const context = useContext(PoolContext)
    return context
}