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
        description="On device AI has become increasingly important for reasons of latency, privacy and overall autonomy as computing becomes more and more ambient. Moreover, making AI, in particular computer vision, efficient and run well in low resource computing environments using various frameworks Acquiring, processing, analyzing and understanding digital images/videos and extraction of high- from the real world in order to produce numerical or symbolic information with Fineax Expertized and our Qaulityze data, working with numerous visions."
        img1="/assets/images/car1.jpeg"
        img2="/assets/images/car2.jpeg"
        img3="/assets/images/services/self-drive.jpg"
      />

      
<OurBest/>
      <ServiceSection />
    </div>
  );
};

export default Computer;
