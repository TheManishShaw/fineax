import React from "react";
import InnerBanner from "../../components/innerbanner/InnerBanner";
import ServiceSection from "./elements/ServiceSection";
import Head from "next/head";
const index = () => {
  return (
    <div className="bg-gray-900">
      <Head>
        <title>Services | Fineax</title>
      </Head>
      <ServiceSection />
    </div>
  );
};

export default index;
