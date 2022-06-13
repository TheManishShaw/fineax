import Head from 'next/head';
import React from 'react'
import ServicesDetails from './elements/ServicesDetails';
import ServicesSection from './elements/ServicesSection';
const ServiceDetails = () => {
  return (
    <div>
        <Head>
            <title> Service Details | Fineax</title>
        </Head>
      <ServicesDetails />
      <ServicesSection/>
    </div>
  );
}

export default ServiceDetails;