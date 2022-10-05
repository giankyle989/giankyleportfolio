import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Home() {
  return (
    <div name='home' className="w-full h-screen bg-sky-900">
      {/**Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#38b6ff]">Hi! My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white ">
          Kyle Laguerta
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Web Developer
        </h2>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#38b6ff] hover:border-[#38b6ff]">
            View Work
            <span className="group-hover:rotate-90 duration-200">
              <HiArrowNarrowRight className="ml-3"/>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
