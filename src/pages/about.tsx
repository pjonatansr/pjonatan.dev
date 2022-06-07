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
      <Nav
        current={'About'}
      />
      <About />
    </>
  )
}

export default AboutPage