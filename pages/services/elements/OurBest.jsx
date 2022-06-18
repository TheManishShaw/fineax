import React from 'react'
const features = [
    {
      id: 1,
      heading: "Car Interiors",
      description:
        "Being it image our videos in different angles with required format and high-quality assurance.",
      img:"/assets/images/car2.jpeg",
    },
    {
      id: 2,
      heading: "Driver’s Case",
      description:
        "Image/Videos of driver with different KSS level, occlusions, various angles with unique identity, gender, age groups as well as ethnicities.",
        img:"/assets/images/car1.jpeg",
      },
    {
      id: 3,
      heading: "Facial Image/videos",
      description:
        "Our uniqueness in Images/Videos for Facial Datasets with different head poses, angles, age, gender, ethnicities working on different occlusions, wearable objects.",
        img:"/assets/images/face.jpeg",
      },
    {
      id: 4,
      heading: "Our best Healthcare Datasets",
      description:
        "High-Quality Images in DICOM format extracted from different machines customized as per requirement by our clients, maintaining all the necessities.",
        img:"/assets/images/health.jpeg",
      },
  ];
const OurBest = () => {
  return (
    <div>
              <section className="text-gray-400 body-font bg-gray-800">
              <div className="container px-5 py-24 mx-auto">
                  <div className="flex flex-wrap w-full mb-20">
                      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">DISCOVER INNOVATION AND POSSIBILITIES</h1>
                          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                      </div>
                  </div>
                  <div className="flex flex-wrap -m-4">
                    {features.map((item) =>(
                        <div key={item.id} className="xl:w-1/4 md:w-1/2 p-1 rounded-md hover:bg-gray-900 hover:scale-105 transition-all">
                        <div className=" bg-opacity-40 p-6 rounded-lg">
                            <img className="h-40 rounded w-full object-cover object-center mb-6" src={item.img} alt="content" />
                            
                            <h2 className="text-lg text-white font-medium title-font mb-4"> {item.heading}</h2>
                            <p className="leading-relaxed text-base">{item.description}</p>
                        </div>
                        </div>
                    ))}                 
                </div>
              </div>
          </section> 
    </div>
  )
}

export default OurBest