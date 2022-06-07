import { usePrefersReducedMotion, Box, Container, keyframes } from "@chakra-ui/react"
import { Articles } from "./Articles"
import { Main } from './Main'
import { SocialButtons } from "./SocialButtons";



export const Home = () => {

  return (
    <Container
      minH={"92vh"}
      maxW={'100vw'}

      p={'1rem'}
    >
      <Box
        maxW='550px'
        m={'auto'}
      >
        <Main />
        <SocialButtons />
        <Articles />
      </Box>
    </Container >
  )
}

