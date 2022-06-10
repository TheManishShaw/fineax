import Slider from "./components/Slider";
import Head from "next/head";
import HomeContent from "./home/Homecontent";

export default function Home() {
  return (
    <div>
      <Head>
        <title> Fineax Data Solution</title>
      </Head>
  <Slider/>
  <HomeContent/>

    </div>
  )
}
