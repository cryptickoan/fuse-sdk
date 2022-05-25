import { useQuery } from 'react-query'
import { useNetwork, useProvider } from "wagmi";
import { Pool } from "../esm/src";

export const usePool = () => {
    const provider = useProvider()
    const {activeChain} = useNetwork()

    const {data: pool} = useQuery('Pool', async () => {
        if (!activeChain) return 
        const pool = await Pool(provider, activeChain.id, 1)
        return pool
    },{
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        enabled: activeChain ? true : false
    })

    return pool
}