import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const lists = [
    { value: "Home", path: "home" },
    { value: "About", path: "about" },
    { value: "Skills", path: "skills" },
    { value: "Projects", path: "projects" },
    { value: "Contact", path: "contact" },
  ];


  return (
    <div className="fixed bg-white w-full z-50 flex justify-between items-center px-[1.5rem] md:px-[10rem] py-2 shadow-md">
      {/* Logo */}
      <div className="text-[2rem] text-[#c18572] tracking-wide font-bold">&lt; Ifra /&gt;</div>

      {/* Mobile Menu Icons */}
      <div className="lg:hidden z-50">
        {toggle ? (
          <IoMdClose
            className="font-bold text-[#c18572] text-[2.6rem] cursor-pointer"
            onClick={() => setToggle(false)}
          />
        ) : (
          <HiOutlineBars3BottomRight
            className="font-bold text-[#c18572] text-[2.6rem] cursor-pointer"
            onClick={() => setToggle(true)}
          />
        )}
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex items-center gap-10">
        {lists.map((li, index) => (
          <li className="cursor-pointer transition text-[#cdad9e] hover:text-[#c18572] tracking-wide font-semibold" key={index}>
            <a href={`#${li.path}`}>{li.value}</a>
          </li>
        ))}
      </ul>

      {/* Responsive Mobile Navigation */}
      <ul
        className={`fixed top-0 right-0 h-screen w-[60%] bg-white shadow-lg flex flex-col justify-center items-center gap-10 transform transition-transform duration-300 ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {lists.map((li, index) => (
          <li className="cursor-pointer tracking-wide hover:text-[#c18572] font-semibold transition" key={index}>
            <a href={`#${li.path}`} onClick={() => setToggle(false)}>
              {li.value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
