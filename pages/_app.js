import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
