import React from "react";
import ServiceDetails from "./elements/ServiceDetails";
import ServiceSection from "./elements/ServiceSection";
import Head from "next/head";
const features = [
  {
    id: 1,
    heading: "Car Interiors",
    description:
      "Being it image our videos in different angles with required format and high-quality assurance.",
  },
  {
    id: 2,
    heading: "Driver’s Case",
    description:
      "Image/Videos of driver with different KSS level, occlusions, various angles with unique identity, gender, age groups as well as ethnicities.",
  },
  {
    id: 3,
    heading: "Facial Image/videos",
    description:
      "Our uniqueness in Images/Videos for Facial Datasets with different head poses, angles, age, gender, ethnicities working on different occlusions, wearable objects.",
  },
  {
    id: 4,
    heading: "Our best Healthcare Datasets",
    description:
      "High-Quality Images in DICOM format extracted from different machines   customized as per requirement by our clients, maintaining all the necessities especially slice thickness, modality of scan, age groups are available along   with clinical reports, de-identified/ PII maintained by our Radiologist and finely sourced.",
  },
];
const Computer = () => {
  return (
    <div className="bg-gray-800">
      <Head>
        <title> Computer Vision | Fineax</title>
      </Head>

      <ServiceDetails
        heading="Speech/ Audio "
        heading1=""
        description="Acquiring, processing, analyzing and understanding digital images/videos and extraction of high- from the real world in order to produce numerical or symbolic information with Fineax Expertized and our Qaulityze data, working with numerous visions such as"
        img1="/assets/images/car1.jpeg"
        img2="/assets/images/car2.jpeg"
        img3="/assets/images/services/self_drive.jpg"
      />

      <div className="px-4  py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">DISCOVER</span>
            </span>{" "}
            INNOVATION AND POSSIBILITIES
          </h2>
        </div>
        <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between p-5  rounded shadow-sm hover:bg-gray-900 hover:scale-105 transition-all"
            >
              <div>
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-12 h-12 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5 text-white">
                  {item.heading}
                </h6>
                <p className="mb-3 text-sm text-zinc-100">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ServiceSection />
    </div>
  );
};

export default Computer;
