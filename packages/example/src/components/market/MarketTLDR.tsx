import { Avatar, Box, Flex, Spinner } from "@chakra-ui/react";
import { Text, TokenIcon, Tooltip } from "rari-components";
import { getMillions } from "../../utils/toSDK";

export const MarketTLDR = ({
    market,
    isSupply,
    rewardedMarket,
    isIncentivized
  }: {
    market: any;
    isSupply: boolean;
    rewardedMarket: any;
    isIncentivized: any;
  }) => {
    const Text1 = isSupply
      ? `${market.collateralFactorNumber}% LTV`
      : `${getMillions(market.liquidityUSD)}M Liquidity`;
  
    return (
      <Flex justifyContent="flex-start !important">
        <Text variant="secondary" alignSelf="flex-start" mr="1.5vh">
          {Text1}
        </Text>
        &middot;

        <APY isSupply={isSupply} market={market} rewardedMarket={rewardedMarket} isIncentivized={isIncentivized}/>
        
        {isSupply ? (
          <>
            &middot;
            <Text variant="secondary" ml="1.5vh">
              {getMillions(market.totalSupplyUSD)}M Supplied
            </Text>
          </>
        ) : null }
      </Flex>
    );
  };


export const APY = ({
  isSupply,
  market,
  rewardedMarket,
  isIncentivized
}:{
  isSupply: boolean,
  market: any,
  rewardedMarket: any,
  isIncentivized: boolean
}) => {
  const rewardsAPY = useRewardsAPY(market, rewardedMarket, isIncentivized, isSupply)

  return (
    <Tooltip 
      label={
        <TooltipInternal
          isIncentivized={isIncentivized} 
          rewardedMarket={rewardedMarket} 
          rewardsAPY={rewardsAPY}
          market={market}
        />}>
      <Text variant="secondary" mr="1.5vh" ml="1.5vh">
        {rewardsAPY.totalIncentive.toFixed(2)}% APY
      </Text>
    </Tooltip>
  )
}

const TooltipInternal = ({
  isIncentivized,
  rewardedMarket,
  rewardsAPY,
  market
} : {
  isIncentivized: boolean,
  rewardedMarket: any,
  rewardsAPY: any,
  market: any
}) => {
  return (
      <Flex
        direction="column"
      >
        <>
        {isIncentivized ? (
          Object.keys(rewardedMarket).map((flywheel: any) => <IncentiveLine tokenAddress={rewardedMarket[flywheel].rewardedToken} APY={rewardsAPY[flywheel].apy.toFixed(2)} />)
        ): null }
        <IncentiveLine tokenAddress={market.underlyingToken} APY={rewardsAPY.interestRate.toFixed(2)}/>
        </>
      </Flex>

  )
}

const IncentiveLine = ({
  tokenAddress,
  APY
}: {
  tokenAddress: string,
  APY: number
}) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      width="120px"
      m={2}
    >
        <Text mr={5}>
          + {APY}%
        </Text>
        <TokenIcon tokenAddress={tokenAddress} width="25px" height="25px"/>
    </Flex>
  )
}

const useRewardsAPY = (market: any, rewardedMarket: any, isIncentivized: any, isSupply: boolean) => {
  if (isIncentivized) {
    let rewardsObject: any = {
      interestRate: market.supplyAPY,
      totalIncentive: 0
    }

    for (const flywheel of Object.keys(rewardedMarket)) {
      const rewardsPerDay = rewardedMarket[flywheel].rewardsPerSecondInUSD * 86400
      const rewardsPerYear = rewardsPerDay * 365

      const apy = rewardsPerYear * 100 / parseInt( isSupply ? market.totalSupplyUSD.toString() : market.totalBorrowUSD.toString())

      rewardsObject[flywheel] = {apy}

      rewardsObject.totalIncentive = rewardsObject.totalIncentive + apy
    }


    return rewardsObject
  } 

  return {
    flywheelIncentive: 0,
    interestRate: market.supplyAPY,
    totalIncentive: market.supplyAPY
  }
}