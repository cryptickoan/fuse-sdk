import { Box, Flex } from '@chakra-ui/react';
import { BigNumber, BigNumberish } from 'ethers';
import { commify } from 'ethers/lib/utils';
import { Text } from 'rari-components';
import "rari-components/assets/fonts/avenir-next/avenir.css";
import { usePoolContext } from '../context/Pool';
import { toUSD } from '../utils/toSDK';


export const PoolTitle = () => {
    const { pool, markets } = usePoolContext()
    return (
      <Box
        width="30%"
        flex="1"
        display="flex"
        justifyContent="center"
        alignContent="center"
      >
        <Flex
          direction="column"
          width="100%"
          alignItems="center"
        >
          <Text fontSize="3vw"> { pool ?  `${pool.name}` : "Loading..." }</Text>

          <Flex
            direction="row"
            width="100%"
            justifyContent="space-around"
            >
          { markets ?
          <>
            <Stats
              number={toUSD(markets.totalLiquidityUSD)}
              description="Liquidity"
            />
            <Stats
              number={toUSD(markets.totalSuppliedUSD)}
              description="TVL"
            />
            <Stats
              number={toUSD(markets.totalBorrowedUSD)}
              description="Borrowed"
            />
          </>
            : null 
          }
          </Flex>
        </Flex>
      </Box>
    )
  }


  const Stats = ({
    number,
    description
  }: {
    number: string,
    description: string
  }) => {
    return (
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize='1.3vw'> {number} </Text>
        <Text fontSize="1vw"> {description} </Text>
      </Flex>
    )
  }