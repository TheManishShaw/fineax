import Slider from "./components/Slider";
import Head from "next/head";
import HomeContent from "./home/Homecontent";
import ServiceSection from "./services/elements/ServicesSection"
import Testing from "./components/Testing";
import Features from "./home/elements/Features";
export default function Home() {
  return (
    <div>
      <Head>
        <title> Fineax Data Solution</title>
      </Head>
  <Slider/>
  <ServiceSection/>
  <HomeContent/>
  <Features/>
    </div>
  )
}
