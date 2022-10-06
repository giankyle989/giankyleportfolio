import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[70px] flex justify-between items-center px-4 bg-sky-900 text-gray-300">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "70px" }}></img>
      </div>
      {/*menu*/}
      <div>
        <ul className="hidden md:flex">
          <li className="hover:border-2 py-2">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="hover:border-2 py-2">

            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="hover:border-2 py-2">
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className="hover:border-2 py-2">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/*hamburger*/}

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars className="icon-pointer" /> : <FaTimes className="icon-pointer" />}
      </div>

      {/*mobile menu*/}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-screen h-screen bg-sky-900 flex flex-col justify-center items-center"
        }
      >
        <li className="py-4 text-4xl hover:border-2">
          {" "}
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-4 text-4xl hover:border-2 ">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-4 text-4xl hover:border-2">
          <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="py-4 text-4xl hover:border-2">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
