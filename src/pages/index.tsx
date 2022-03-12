import type { NextPage } from 'next'
import Head from 'next/head'
import { Home } from '../components/Home'

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pablo Jonatan | Home</title>
        <meta name="description" content="Pablo Jonatan, Software Engineer." />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Home />
    </div>
  )
}

export default HomePage
