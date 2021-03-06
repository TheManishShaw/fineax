import React from "react";
import Link from "next/link";
const SingleService = (props) => {
  return (
    <>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6 hover:shadow-lg hover:bg-gray-800 hover:scale-105 hover:rounded-lg hover:delay-100 transition-all">
        <div key={props.key} className="rounded-lg h-64 overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center h-full w-full"
            src={props.img}
          />
        </div>
        <a href={props.link}>
          <h2 className="text-xl font-medium title-font text-white mt-5">
            {props.title}
          </h2>
          <p className="text-base leading-relaxed mt-2">{props.description}</p>
        </a>
        <a
          href={props.link}
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
      </div>
    </>
  );
};

export default SingleService;
