import { Avatar, Box, Flex, Spinner } from "@chakra-ui/react"
import { Badge, ExpandableCard, Heading } from "rari-components"
import { useTokenData } from "../../hooks/useTokenData"
import { MarketTLDR } from "./MarketTLDR"

export const MarketCard = ({
    market,
    actionType,
    rewardedMarkets
  } : {
    market: any,
    actionType: "borrow"  |"supply"
    rewardedMarkets: any
  }
  ) => {
    const tokenData = useTokenData(market.underlyingToken)
    const isIncentivized = Object.keys(rewardedMarkets[actionType]).includes(market.cToken)
    const isSupply = actionType === 'supply'
  
    return (
      <ExpandableCard
        expandableChildren={<></>}
        minWidth="100%"
        mb={2.5}
        mt={2.5}
        >
        <Flex alignItems="center" width="100%">
         {tokenData ? <Avatar src={tokenData.logoURL} mr={4} /> : <Spinner />}
            <Flex direction="column" width="100%">
              <Flex width="50%">
                <Heading size="lg" mr={4}>
                  {tokenData?.symbol}
                </Heading>
                <Box alignSelf="center" display='flex' flexDirection={isIncentivized? "row" : "column" } mr={4}>
                  <Badge variant={isSupply ? "success" : "warning"}>
                    {isSupply ? "Supply" : "Borrow"}
                  </Badge>
                  { isIncentivized ? 
                    <Badge ml={4}>
                    Incentivized
                  </Badge> 
                    : null }
                </Box>
              </Flex>
              <MarketTLDR
                market={market}
                isSupply={isSupply}
                rewardedMarket={rewardedMarkets[actionType][market.cToken]}
                isIncentivized={isIncentivized}
              />
            </Flex>
          </Flex>
  
      </ExpandableCard>
    )
  }