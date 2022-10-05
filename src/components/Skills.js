import React from "react";
import Css from "../assets/css.png";
import Html from "../assets/html.png";
import Javascript from "../assets/javascript.png";
import Tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
export default function Skills() {
  return (
    <div name="skills" className="w-full h-screen bg-sky-900 text-gray-300">
      {/**Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#38b6ff]">
            Skills
          </p>
          <p className="py-4"> These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Html} alt="HTML icon"></img>
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Css} alt="CSS icon"></img>
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Javascript} alt="JS icon"></img>
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={Tailwind}
              alt="Tailwind icon"
            ></img>
            <p className="my-4">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={react} alt="React icon"></img>
            <p className="my-4">React</p>
          </div>
        </div>
      </div>
    </div>
  );
}
