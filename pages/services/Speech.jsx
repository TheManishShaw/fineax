import React from "react";
import ServiceDetails from "./elements/ServiceDetailsView";
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
      <div className="bg-gray-900 px-12">
      <h1 className="font-bold text-2xl text-white mb-3 ">DATA COLLECTION </h1>
      <p className="text-white text-lg">Text collections such as utterances, NERs, sentiments, or paragraphs of few hundreds words in various languages around the globe such as German, Russian, Mexican, French, English, Danish Spanish, Arabic etc., are available with analyzed by our analysts in respective languages ready for speech or audio recordings.</p>
     <p className="text-white text-lg">Audio collections in several different languages with our native speakers around the globe with remarkable audio quality and dialects.
Fineax providing a high-quality audio service for Automated Speech Recognition systems (ASR), Virtual Assistance, Voice command applications.
Our audios go through a Quality control check before it is delivered to our clients for miss spell words, grammatic errors, low frequencies, edition of proper tags where required etc.,
</p><p className="text-white text-lg">Customize the audio as per your requirements setting it to single channel to multi-channels, whether it is a script based, natural conversation on different niches or text-based audio recordings as per your convenient.</p>
     
      <h1 className="font-bold text-2xl text-white mt-4 mb-3 ">Workflow</h1>
      <p className="text-white text-lg">We manage our team and tasks quite efficiently by bifurcating the task to our team members having expertise in audio recordings, Quality Analysis each managing the task with high accuracy to achieve the given time goals.</p>
      </div>
      <ServiceSection />
    </div>
  );
};

export default Speech;
