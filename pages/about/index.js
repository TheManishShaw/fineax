import React from 'react'
import Banner from '../components/Banner'
import InnerBanner from '../components/InnerBanner'
import Teams from './elements/Teams';
import Head from 'next/head'
const index = () => {
  return (
          <div className='bg-gray-900'>
            <Head>
              <tilte>About | Fineax</tilte>
            </Head>
      <Banner img="/assets/images/about.jpeg" title="About us" description="FINEAX AI Solutions works with data gathering, creating qualitative and worthy database for the AI/ML. The main idea or vision of our team was to serve in medical AI related issues since Healthcare technologies are future based and are in high necessity. Apart from that our team experts started working with basic solutions of AI in different sectors. We care for our clients’ relations making it more appropriate by our best services. Our expertise team are meant to source a compatible data with unique ideas in various sectors of AI/ML with a definitive goal of achieving quality sensitively giving a picture-perfect view and shape to the development tools of our respective clients. Our services/solutions speech, computer vision, healthcare are a great efforts to create a great leadership in field of Artificial Intelligence." />
    </div>
  )
}

export default index;