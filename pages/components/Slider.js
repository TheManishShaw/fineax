import React from 'react'
import { useState, useEffect, useRef } from 'react';
import {  ChevronLeft, ChevronRight } from 'heroicons-react'; 
import Image from 'next/image';
const featureimage = [
    "/assets/images/banner.png",
    "/assets/images/banner1.png",
    "/assets/images/banner2.png"
];
let count = 0;
let slideInterval;
const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideRef = useRef();
    const removeAnimation = () =>{
        slideRef.current.classList.remove('fade-anim');

    }
    useEffect(() =>{
     slideRef.current.addEventListener ('animationend', removeAnimation);
        slideRef.current.addEventListener('mouseenter', pauseSlider);
        slideRef.current.addEventListener('mouseleave', startSlider);
        startSlider();
        return () => {
            pauseSlider();
        }
    },[])
    const startSlider = () =>{
     slideInterval = setInterval(() =>{
            handleOnNextClick();
        }, 3000)
    }

    const pauseSlider = () =>{
        clearInterval(slideInterval);
    };
    const handleOnNextClick = () => {
        count =(count + 1) % featureimage.length;
      setCurrentIndex(count); 
        slideRef.current.classList.add('fade-anim');
    }
    const handleOnPreviousClick = () => {
        const ImageLength = featureimage.length
        count = (currentIndex + ImageLength - 1) % ImageLength;
        setCurrentIndex(count); 
    };

  return (
      <>
          <div ref={slideRef} className="w-full h-[80vh]  bg-no-repeat object-cover bg-cover bg-center flex  justify-between  fade-anim" style={{ backgroundImage: `url(${featureimage[currentIndex]})`}}>
              <div className="container px-6 py-16 mx-auto">
                  <div className="items-center lg:flex">
                      <div className="w-full lg:w-1/2">
                          <div className="lg:max-w-lg">
                              <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">Subscribe To The <span className="text-blue-500">Newsletter</span></h1>

                              <p className="mt-4 text-gray-600 dark:text-gray-400">be the first to knows when our <span className="font-medium text-blue-500">Brand</span> is live</p>

                              <div className="flex flex-col mt-8 space-y-3 lg:space-y-0 lg:flex-row">
                                  <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address"/>

                                  <button className="w-full px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
                                          Subscribe
                                      </button>
                              </div>
                          </div>
                      </div>

                      <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                          <Image className="w-full h-full max-w-xl" layout='fill' src="/assets/images/ai/ai3.webp" alt="#"/>
                      </div>
                  </div>
              </div>
              <div className="absolute w-full py-5 top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">

{/* 
                  <button onClick={handleOnPreviousClick} className='text-white bg-zinc-300 p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition '><ChevronLeft size={30} /></button>
                  <button onClick={handleOnNextClick} className='text-white bg-zinc-300 p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition'><ChevronRight size={30} /></button> */}

              </div>
          <div className="grid md:grid-cols-1 max-w-[1240px] m-auto animate-fade-in-down">
              
              <div className='absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center'>
                   </div>
          </div>
         
      </div>
     

      </>
  )
}

export default Slider;