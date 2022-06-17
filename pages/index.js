import Slider from "../components/slider/Slider";
import Features from "./home/elements/Features";
import Head from "next/head";
import ServiceSection from "./services/elements/ServiceSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Fineax</title>
      </Head>
     <Slider/>
     <ServiceSection/>
     <Features/>
    </div>
  )
}
