import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { About } from '../components/About'
import { Nav } from '../components/Nav'

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pablo Jonatan | About</title>
      </Head>
      <Flex
        direction={'column'}
        alignItems={'center'}
      >
        <Nav
          current={'About'}
        />
        <About />

      </Flex>
    </>
  )
}

export default AboutPage