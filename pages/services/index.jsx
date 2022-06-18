import React from "react";
import InnerBanner from "../../components/innerbanner/InnerBanner";
import ServiceSection from "./elements/ServiceSection";
import Head from "next/head";
import Banner from "../../components/banner/Banner";
const index = () => {
  return (
    <div className="bg-gray-900">
      <Head>
        <title>Services | Fineax</title>
      </Head>
      <Banner title="  Get high quality data services for your AI/ML. DISCOVER INNOVATION
AND POSSIBILITIES" img="/assets/images/aibot.png"/>
      <ServiceSection />
    </div>
  );
};

export default index;
