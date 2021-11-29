import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './component/Header'
import React from 'react';
import Banner from './component/Banner';

export default function Home() {

  return (
    <>
      <Head>
        <title>Mahbubur Rahman</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <Banner />
      </main>

      <footer className={styles.footer}>

      </footer>
    </>
  )
}
