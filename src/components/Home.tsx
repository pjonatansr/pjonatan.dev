import { Flex } from "@chakra-ui/react"
import { Main } from './Main'

export const Home = () => {
  return (
    <Flex
      flex={1}
      maxW={'100%'}
      h='100vh'
      alignItems="center"
      flexDirection="column"
      pb="5px"
      pt="5px"
      style={{
        backgroundColor: '#e5e5f7',
        opacity: '0.8',
        backgroundImage:
          'linear-gradient(to bottom, wheat, rgba(0,0,0,0.1) 1px), radial-gradient(circle, white 5%, wheat 25%, rgba(196,43,255,1), rgba(70,44,241,1))',
      }}
    >

      <Flex
        h='100vh'
        bgColor='#fff5'
      >
        <Main />

      </Flex>
    </Flex>
  )
}

