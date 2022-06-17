import Head from 'next/head';
import React from 'react'
import ServiceDetailsView from './elements/ServiceDetailsView'
import ServiceSection from './elements/ServiceSection';
const ServiceDetails = () => {
  return (
    <div>
        <Head>
            <title> Service Details | Fineax</title>
        </Head>
      <ServiceDetailsView />
      <ServiceSection/>
    </div>
  );
}

export default ServiceDetails;