import React  from 'react';
import InnerBanner from '../components/InnerBanner';
import ServicesSection from './elements/ServicesSection';
import Head from 'next/head';
const index = () => {
 
  return (
      <> 
      <Head>
        <title>Services | Fineax</title>
      </Head>
    <InnerBanner/>
    <ServicesSection/>
          
     
        
</>
  )
}

export default index;    