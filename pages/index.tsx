import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Reddit Clone</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <h1>Hello Reddit</h1>
    </div>
  )
}

export default Home
