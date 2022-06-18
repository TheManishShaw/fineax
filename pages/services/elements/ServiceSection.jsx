import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
const ServiceSection = () => {
  const {router,router1,router2} = useRouter();
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-800 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">
                Our Best Solutions{" "}
              </h1>             
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6 hover:shadow-lg hover:bg-gray-800 hover:scale-105 hover:rounded-lg hover:delay-100 transition-all">
        <div className="rounded-lg h-64 overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center h-full w-full"         
            src="/assets/images/audio.jpg"
          />
        </div>
       
        <a   onClick={() => router.push('/services/Speech')}>
          <h2 className="text-xl font-medium title-font text-white mt-5">
          Speech/ Audio
          </h2>
          <p className="text-base leading-relaxed mt-2">Speech recognition has a long history with several waves of major innovations. Most recently, the field has benefited from advances in deep learning and big data.</p>
        </a>
        <Link  href="/services/Speech">
        <a className="text-indigo-400 inline-flex items-center mt-3 cursor-pointer">
          Learn More
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
        </Link>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6 hover:shadow-lg hover:bg-gray-800 hover:scale-105 hover:rounded-lg hover:delay-100 transition-all">
        <div className="rounded-lg h-64 overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center h-full w-full"         
            src="/assets/images/health3.jpeg"
          />
        </div>
       
        <a  onClick={() => router1.push('/services/Computer')}>
          <h2 className="text-xl font-medium title-font text-white mt-5">
          Computer Vision
          </h2>
          <p className="text-base leading-relaxed mt-2">Boost your system working on visual world with our energy efficient solutions along with cost and time effectiveness. </p>
        </a>
        <Link   href="/services/Computer">
        <a
       
        
          className="text-indigo-400 inline-flex items-center mt-3 cursor-pointer"
        >
          Learn More
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
        </Link>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6 hover:shadow-lg hover:bg-gray-800 hover:scale-105 hover:rounded-lg hover:delay-100 transition-all">
        <div className="rounded-lg h-64 overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center h-full w-full"         
            src="/assets/images/services/doctor.jpg"
          />
        </div>
       
        <a  onClick={() => router2.push('/services/HealthCare')}>
          <h2 className="text-xl font-medium title-font text-white mt-5">
          Healthcare Datasets
          </h2>
          <p className="text-base leading-relaxed mt-2">AI in medical has a great role and is future dependent, today patients are expecting lot from technologies to overcome manual surgeries to painless.</p>
        </a>
        <Link  href="/services/HealthCare">
        <a
        
         
          className="text-indigo-400 inline-flex items-center mt-3 cursor-pointer"
        >
          Learn More
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
        </Link>
      </div>
          
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
