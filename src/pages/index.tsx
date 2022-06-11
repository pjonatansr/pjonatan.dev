import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Home } from '../components/Home'
import { Nav } from '../components/Nav'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pablo Jonatan | Home</title>
      </Head>
      <Flex
        direction={'column'}
      >

        <Nav
          current={'Home'}
        />
        <Home />
      </Flex>
    </>
  )
}

export default HomePage
