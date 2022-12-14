import Head from 'next/head'

import Image from 'next/image'

import styles from '../styles/Home.module.css'

import Header from "../components/Header";

export default function Home()
{
  return (
      <div className={styles.container}>

      <Head>
        <title>EventWave</title>

          <meta name="description" content="Generated by create next app" />

          <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*header*/}

      <Header />


    </div>
  )
}
