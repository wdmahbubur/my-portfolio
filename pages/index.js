import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './component/Header'
import React from 'react';
import Banner from './component/Banner';
import Features from './component/Features';
import Portfolio from './component/Portfolio';
import Blog from './component/Blog';
import Contact from './component/Contact';
import Footer from './component/Footer';
import About from './component/About';
import AOS from 'aos';
import { SpiralSpinner, ImpulseSpinner } from "react-spinners-kit";
import Layout from './component/Layout';

export default function Home() {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    AOS.refreshHard();
    AOS.init();
  }, [])

  setTimeout(() => setLoading(false), 3000);

  return (
    <>
      <Head>
        <title>Mahbubur Rahman- Portfolio</title>
        <meta name="description" content="Junior Full-Stack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        loading ? <div className="absolute flex flex-col justify-center items-center w-full h-full">
          <SpiralSpinner size={70} frontColor="#2563eb" loading={loading} />
          <h1 className="text-xl text-gray-800 mt-4 text-center flex items-end">Welcome To My World &nbsp;<div className="mb-1"><ImpulseSpinner size={20} frontColor="#2563eb" loading={loading} /></div> </h1>
        </div> : <>
          <Layout>
            <Banner />
            <hr className="h-1 bg-gray-200 rounded-lg" />
            <About />
            <hr className="h-1 bg-gray-200 rounded-lg" />
            <Features />
            <hr className="h-1 bg-gray-200 rounded-lg" />
            <Portfolio />
            <hr className="h-1 bg-gray-200 rounded-lg" />
            <Blog />
            <hr className="h-1 bg-gray-200 rounded-lg" />
            <Contact />
          </Layout>

        </>
      }
    </>
  )
}
