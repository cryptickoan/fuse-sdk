import { Box } from '@chakra-ui/react';
import { Button } from 'rari-components';
import "rari-components/assets/fonts/avenir-next/avenir.css";
import { useAccount } from 'wagmi';
import { useGeneral } from '../../context/General';

export const ConnectButton = () => {
    const { onOpen } = useGeneral()
    const { data } = useAccount()
  
      return (
        <Box
          width="30%"
          flex="1"
          display="flex"
          justifyContent="flex-end"
        >
          <Button onClick={onOpen} flexGrow="30%" maxWidth="30%">
            {!data ? "Connect" :  `${data.address}`}
          </Button>
        </Box>
      )
    }