import { Flex, Spacer } from '@chakra-ui/react';
import type { NextPage } from 'next'
import "rari-components/assets/fonts/avenir-next/avenir.css";
import { ConnectButton } from '../src/components/buttons/ConnectButton';
import { MarketList } from '../src/components/market/MarketList';
import ConnectModal from '../src/components/modals/ConnectModal';
import { PoolTitle } from '../src/components/PoolTitle';
import { usePoolContext } from '../src/context/Pool';


const Home: NextPage = () => {
  return (
    <>
    <ConnectModal />
    <Flex margin={10} height="100%" direction="column" justifyContent="center">
      <Top/>
      <Markets/>
    </Flex>
    </>
  )
}

export default Home

const Top = () => {
  return (
    <Flex
      width={"100%"}
      justifyContent="space-between"
      alignItems="center"
    >
      <Spacer width="30%"/>
      <PoolTitle/>
      <ConnectButton/>
    </Flex>
  )
}

const Markets = () => {
  const { markets } = usePoolContext() 

  if (!markets) return null

  return (
    <Flex
      width="100%"
      height='100%'
      justifyContent="space-around"
    >
      <MarketList markets={markets} actionType={'supply'}/>
      <MarketList markets={markets} actionType={'borrow'}/>
    </Flex>
  )
}

