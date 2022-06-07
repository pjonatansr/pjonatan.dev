import type { AppProps } from 'next/app'
import { Box, ChakraProvider, keyframes, usePrefersReducedMotion } from '@chakra-ui/react'
import { theme } from '../components/theme'
import Head from 'next/head'
import "@fontsource/rampart-one"
import "@fontsource/vt323"
import "@fontsource/sacramento"

function MyApp({ Component, pageProps }: AppProps) {
  const change = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}`;

  const prefersReducedMotion = usePrefersReducedMotion()
  const animation = prefersReducedMotion
    ? undefined
    : `${change} infinite 15s alternate-reverse`

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <Box
        animation={animation}
        backgroundImage={
          'linear-gradient(to bottom, wheat, rgba(0,0,0,0.1)), linear-gradient(to right, wheat, blue, blue, wheat)'
        }
        backgroundSize={"400% 400%"}
      >
        <Component {...pageProps} />

      </Box>
    </ChakraProvider>
  )
}

export default MyApp