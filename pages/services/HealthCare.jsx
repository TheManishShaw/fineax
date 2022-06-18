import React from "react";
import ServiceDetailsView from "./elements/ServiceDetailsView";
import ServiceSection from "./elements/ServiceSection";
import Head from "next/head";
import FormSection from "../contact/elements/FormSection";
const HealthCare = () => {
  return (
    <div>
      <Head>
        <title> Health Care | Fineax</title>
      </Head>
      <ServiceDetailsView
        heading="Health Care"
        heading1=""
        description="AI in medical has a great role and is future dependent, today patients are expecting lot from technologies to overcome manual surgeries to painless. AI has shown potential in interpreting many different types of image data including MRI, CT scan, X-rays.  Shape your machine learning with our high-quality datasets.  MRI, CT scan, X-Rays of different region with several anomalies, with customized as per your needs. A Premium Quality collection de-identified as per HIPAA Norms, taken care of PII, this will allow ML systems to approach complex problem solving. "
        img1="/assets/images/health.jpeg"
        img2="/assets/images/health3.jpeg"
        img3="/assets/images/health1.jpeg"
      />
    
      <FormSection/>
      <ServiceSection />
    </div>
  );
};

export default HealthCare;
