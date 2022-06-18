import React from "react";
import ServiceDetailsView from "./elements/ServiceDetailsView";
import ServiceSection from "./elements/ServiceSection";
import Head from "next/head";
import OurBest from "./elements/OurBest";

const Computer = () => {
  return (
    <div className="bg-gray-800">
      <Head>
        <title> Computer Vision | Fineax</title>
      </Head>

      <ServiceDetailsView
        heading="Computer Vision "
        heading1=""
        description="Acquiring, processing, analyzing and understanding digital images/videos and extraction of high- from the real world in order to produce numerical or symbolic information with Fineax Expertized and our Qaulityze data, working with numerous visions such as"
        img1="/assets/images/car1.jpeg"
        img2="/assets/images/car2.jpeg"
        img3="/assets/images/services/self_drive.jpg"
      />

      
<OurBest/>
      <ServiceSection />
    </div>
  );
};

export default Computer;
