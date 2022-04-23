import { usePrefersReducedMotion, AbsoluteCenter, Box, Center, Container, Flex, Grid, VStack, keyframes } from "@chakra-ui/react"
import { Articles } from "./Articles"
import { Main } from './Main'

const change = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}

`;

export const Home = () => {
  const prefersReducedMotion = usePrefersReducedMotion()

  const animation = prefersReducedMotion
    ? undefined
    : `${change} infinite 15s alternate-reverse`
  return (
    <Container
      minH={"100vh"}
      minW={'100vw'}
      animation={animation}
      backgroundImage={
        'linear-gradient(to bottom, wheat, rgba(0,0,0,0.1)), linear-gradient(to left, wheat, rgba(196,43,255,50), rgba(70,44,241,50))'
      }
      backgroundSize={"400% 400%"}
      p={'1rem'}
    >
      <Box
        boxShadow={'0px 0px 5px 5px rgba(0,0,0,0.1)'}
        borderRadius={'0.5rem'}
        p={'1rem'}
        bgColor={'transparent'}
        m={'auto'}
        maxW='550px'
      >
        <Main />
        <Articles />
      </Box>
    </Container >
  )
}

