import React from "react";
import Crud from "../assets/Crud.png";
import RanQuote from "../assets/RandomQuote.png";
import WeatherApp from "../assets/WeatherApp.png";
import Portfolio from "../assets/Portfolio.png";
export default function Project() {
  return (
    <div name="projects" className="w-full h-screen bg-sky-900 text-gray-300">
      {/**Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#38b6ff]">
            Projects
          </p>
          <p className="py-4">Check out some of my recent works</p>
        </div>
        {/**GRID CONTAINER */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-0">
          {/**GRID ITEM */}
          <div
            style={{ backgroundImage: `url(${Portfolio})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  content-div m-2"
          >
            {/**Hover effect */}
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Portfolio
              </span>
              <h1 className="py-2">Technology: ReactJS, Tailwind</h1>
              <div className="py-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold textlg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/giankyle989/giankyleportfolio"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold textlg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/**GRID ITEM */}
          <div
            style={{ backgroundImage: `url(${WeatherApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  content-div m-2"
          >
            {/**Hover effect */}
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl text-center font-bold text-white tracking-wider">
                Weather App
              </span>
              <h1 className="py-2">Technology: HTML, CSS, JAVASCRIPT</h1>
              <div className="py-8 text-center">
                <a
                  href="https://weather-app-murex-one.vercel.app"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold textlg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/giankyle989/WeatherApp"
                  rel="noreferrer noopener"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold textlg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/**GRID ITEM */}
          <div
            style={{ backgroundImage: `url(${RanQuote})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  content-div m-2"
          >
            {/**Hover effect */}
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Random Quote
              </span>
              <h1 className="py-2">Technology: HTML, CSS, Javascript</h1>
              <div className="py-8 text-center">
                <a
                  href="https://random-quote-machine-mu.vercel.app"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold textlg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/giankyle989/RandomQuoteMachine"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold textlg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/**GRID ITEM */}
          <div
            style={{ backgroundImage: `url(${Crud})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  content-div m-2"
          >
            {/**Hover effect */}
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl text-center font-bold text-white tracking-wider">
                CRUD App
              </span>
              <h1 className="py-2">Technology: HTML, CSS, JAVASCRIPT</h1>
              <div className="py-8 text-center">
                <a
                  href="https://crud-app-ecru.vercel.app/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold textlg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/giankyle989/crud"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold textlg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
