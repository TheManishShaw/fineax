import React  from 'react';
import InnerBanner from '../components/InnerBanner';
import ServicesSection from './elements/ServicesSection';
import Head from 'next/head';
const index = () => {
 
  return (
      <div className='bg-gray-900'> 
      <Head>
        <title>Services | Fineax</title>
      </Head>
    <InnerBanner/>
    <ServicesSection/>
          
     
        
</div>
  )
}

export default index;    