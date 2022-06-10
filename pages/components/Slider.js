import React from 'react'
import { useState, useEffect, useRef } from 'react';
import {  ChevronLeft, ChevronRight } from 'heroicons-react'; 
import Image from 'next/image';
const featureimage = [
    "/assets/images/banner.png",
    "/assets/images/banner1.png",
    "/assets/images/banner2.jpg"
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
          <div ref={slideRef} className="w-full h-[80vh]  bg-no-repeat object-cover bg-cover bg-center flex  justify-between animate-fade-in-up fade-anim" style={{ backgroundImage: `url(${featureimage[currentIndex]})`}}>
              <div className="container px-6 py-16 mx-auto">
                  
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