import React from 'react'
import SingleServices from './SingleServices'
import servicesData from '../../../data/services/servicesData'
const ServicesSection = () => {
  return (
        <>
          <section className="text-gray-400 bg-gray-900 body-font">
              <div className="container px-5 py-24 mx-auto">
                  <div className="flex flex-col">
                      <div className="h-1 bg-gray-800 rounded overflow-hidden">
                          <div className="w-24 h-full bg-indigo-500"></div>
                      </div>
                      <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                          <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">Our  Best Solutions </h1>
                          <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0"> Health Care Dataset of  high - quality assurance, best for machine learning, de-identified by our Healthcare experts.</p>
                      </div>
                  </div>
                  <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                      {servicesData.map((item) => (
                          <SingleServices key={item.id} img={item.img} title={item.title} description={item.description} link={item.href} />
                      ))}
                  </div>
              </div>
          </section>

    </>
  )
}

export default ServicesSection;