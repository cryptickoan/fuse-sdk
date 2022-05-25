import { useQuery } from "react-query"
import { useAccount } from "wagmi"
import { useGeneral } from "../context/General"

export const useMarkets = (pool: any | undefined) => {
    const {data} = useAccount()

    const { data: markets } = useQuery('Pool markets', async () => {
        if (!pool || !data) return

        const markets = await pool.fetch.markets({from: data.address})

        return markets
    }, {
        refetchInterval: 50000,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        enabled: data && pool ? true : false
    })

    return markets
}