import { AppProps } from 'next/app'

import { SidebarDrawerProvider } from 'context/SidebarDrawerContext'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp
