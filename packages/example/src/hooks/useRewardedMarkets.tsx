import { useQuery } from "react-query"

export const useRewardedMarkets = (pool: any) => {
    const { data: rewardedMarkets } = useQuery('Getting rewarded markets', async () => {
        if(!pool) return
            const rewardedMarkets = await pool.fetch.rewardedMarkets()
        return rewardedMarkets
    }, {
        refetchOnMount: false, 
        refetchOnWindowFocus: false,
        enabled: pool ? true : false 
    })

    return rewardedMarkets
}