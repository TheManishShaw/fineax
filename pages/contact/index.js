import React from 'react'
import InnerBanner from '../components/InnerBanner';
import Head from 'next/head';
import FormSection from './elements/FormSection';
const index = () => {
  return (
    <>
      <Head>
        <title>Contact | Fineax</title>
      </Head>
      <InnerBanner/>
      <FormSection/>
    </>
  )
}

export default index;