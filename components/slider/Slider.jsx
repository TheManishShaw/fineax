import React from "react";
import { useState, useEffect, useRef,  } from "react";
const featureimage = [
  "/assets/images/banner/banner1.png",
  "/assets/images/banner/banner2.jpeg",
  "/assets/images/banner/banner4.jpeg",
];
let count = 0;
let slideInterval;
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef();
  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };
  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);
    startSlider();
    return () => {
      pauseSlider();
    };
  }, []);
  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 5000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };
  const handleOnNextClick = () => {
    count = (count + 1) % featureimage.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPreviousClick = () => {
    const ImageLength = featureimage.length;
    count = (currentIndex + ImageLength - 1) % ImageLength;
    setCurrentIndex(count);
  };

  return (
    <>
      <div
        ref={slideRef}
        className="w-full xl:h-[80vh] lg:h-[80vh] md:h-screnn h-screen  bg-no-repeat object-cover object-center bg-cover bg-center flex  justify-between animate-fade-in-up fade-anim"
        style={{ backgroundImage: `url(${featureimage[currentIndex]})` }}
      >
        <div className="container px-6 py-16 mx-auto"></div>
        <div className="absolute w-full py-5 top-1/2 transform -translate-y-1/2 px-3">
          {/* 
                  <button onClick={handleOnPreviousClick} className='text-white bg-zinc-300 p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition '><ChevronLeft size={30} /></button>
                  <button onClick={handleOnNextClick} className='text-white bg-zinc-300 p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition'><ChevronRight size={30} /></button> */}
 <div className="max-w-2xl mx-auto text-center relative bg-blend-darken	">
 <div className="w-full  opacity-60  overflow-hidden  bg-gradient-to-r from-[#010101]   blur-2xl "></div>

                <div className="py-4">
                    <h3 className="xl:text-6xl lg:text-4xl md:text-xl mt-0 sm:text-md text-4xl text-gray-200   font-extrabold">
                    Get high quality data services for your AI/ML.
                    </h3>
                   
                </div>
             
            </div>
           
      
        </div>
        <div className="grid md:grid-cols-1 max-w-[1240px] m-auto animate-fade-in-down">
          <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center"></div>
        </div>
      </div>
    </>
  );
};

export default Slider;
