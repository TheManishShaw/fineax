import '../styles/globals.css'
import Layout from './components/Layout'
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="description" content="Fineax Data Solution company" />
        <link rel="icon" href="/favicon.png" />
      </Head>
    <Component {...pageProps}/>
    </Layout>
  )}

export default MyApp;
