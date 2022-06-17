import React from "react";
import ServiceDetails from "./elements/ServiceDetails";
import ServiceSection from "./elements/ServiceSection";
import Head from "next/head";
const Speech = () => {
  return (
    <div>
      <Head>
        <title> Audio / Speech | Fineax</title>
      </Head>
      <ServiceDetails
        heading="Speech/ Audio "
        heading1=""
        description="Get your  high-quality machine learning custom models to classify, extract, and detect sentiment with minimum effort and machine learning expertise using Fineax AI for natural language,  high-quality audio transcripts rapidly with acoustic tags in a variety of languages, leveraging NLP to improve transcription quality and efficiency. Qualitative developing, training and improving conversational AI, whether being single or multi-speakers, natural or scripted conversation/utterances we create a concrete data for you, along with extraction and transcription done finely by our expertized team.
        We only prefer native speakers to make our audios pure and high quality, the same as for transcription or utterances, making it precise, qualitative and compatible for NLP with proper dialects.
        "
        img1="/assets/images/audio.jpg"
        img2="/assets/images/audio1.jpg"
        img3="/assets/images/audio2.jpg"
      />
      <ServiceSection />
    </div>
  );
};

export default Speech;
