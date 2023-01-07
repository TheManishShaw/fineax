import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="description" content="Fineax is one stop problem solving in artificial intelligence and machine learning systematically through a range of possible actions in order to reduce the distance of your predefined goal or solution." />
        <meta name="keywords" content="Fineax,artificial intelligence, problem-solving,Speech/ Audio,Speech/ Audio,Computer Vision ">
    <link rel="icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
