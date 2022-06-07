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
      <Nav
        current={'Home'}
      />
      <Home />
    </>
  )
}

export default HomePage
