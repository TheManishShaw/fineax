import React from 'react'
import ServicesDetails from './elements/ServicesDetails';
import ServicesSection from './elements/ServicesSection';
import Head from 'next/head'
const HealthCare = () => {
  return (
    <div>
       <Head>
            <title> Health Care | Fineax</title>
        </Head>
        <ServicesDetails 
        heading="Health Care" 
        heading1="" 
        description="AI in medical has a great role and is future dependent, today patients are expecting lot from technologies to overcome manual surgeries to painless. AI has shown potential in interpreting many different types of image data including MRI, CT scan, X-rays.  Shape your machine learning with our high-quality datasets.  MRI, CT scan, X-Rays of different region with several anomalies, with customized as per your needs. A Premium Quality collection de-identified as per HIPAA Norms, taken care of PII, this will allow ML systems to approach complex problem solving. "
        img1="/assets/images/health.jpeg"
        img2="/assets/images/health3.jpeg"
        img3="/assets/images/health1.jpeg"
        />
        <ServicesSection/>
    </div>
  )
}

export default HealthCare;