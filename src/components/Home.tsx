import { Box, Container } from "@chakra-ui/react"
import { Articles } from "./Articles"
import { Main } from './Main'
import { SocialButtons } from "./SocialButtons";



export const Home = () => {

  return (
    <Container
      maxW={'100vw'}
      minH={'92vh'}
      maxH={'min-content'}
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

