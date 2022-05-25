import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from "rari-components/theme";
import { WagmiConfig, createClient } from 'wagmi'
import { GeneralProvider } from '../src/context/General';
import { PoolProvider } from '../src/context/Pool';
import { QueryClient, QueryClientProvider } from 'react-query';

function MyApp({ Component, pageProps }: AppProps) {
  const client = createClient()
  const queryClient = new QueryClient()

  return (
    <WagmiConfig client={client}>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <GeneralProvider>
            <PoolProvider>
              <Component {...pageProps} />{/* ... */}
            </PoolProvider>
          </GeneralProvider>
        </QueryClientProvider>
      </ChakraProvider>
    </WagmiConfig>
  )
}

export default MyApp
