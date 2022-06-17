import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="description" content="Fineax Data Solution company" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
