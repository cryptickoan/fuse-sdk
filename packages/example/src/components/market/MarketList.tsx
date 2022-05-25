import { Accordion, VStack } from "@chakra-ui/react"
import { usePoolContext } from "../../context/Pool"
import { MarketCard } from "./MarketCard"

export const MarketList = ({
    markets,
    actionType
  } : {
    markets: any,
    actionType: "supply" | "borrow"
  }) => {
    const {rewardedMarkets} = usePoolContext()
  
    if (!rewardedMarkets) return null
    return (
      <VStack
        width="45%"
        minHeight="100%"
        mt={5}
      >
        <Accordion
          minWidth="100%"
        >
          {markets.assets.map((market: any) => {
              return (
                <MarketCard market={market} actionType={actionType} rewardedMarkets={rewardedMarkets}/>
              )
            }
          )}
        </Accordion>
      </VStack>
    )
  }