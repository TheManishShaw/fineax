import Slider from "../components/slider/Slider";
import Features from "./home/elements/Features";
import Head from "next/head";
import ServiceSection from "./services/elements/ServiceSection";
import HomeContent from "./home/Homecontent";
import OurBest from "./services/elements/OurBest";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Fineax</title>
      </Head>
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Site Under Maintenance</h1>
      </div>
      {/* <Slider/>
     <Features/>
     
     
     <OurBest/>
     <ServiceSection/> */}
    </div>
  );
}
