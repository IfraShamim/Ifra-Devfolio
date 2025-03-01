import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const lists = [
    { value: "Home", path: "home" },
    { value: "About", path: "about" },
    { value: "Skills", path: "skills" },
    { value: "Projects", path: "projects" },
    { value: "Contact", path: "contact" },
  ];

  return (
    <div className="dark:bg-[#3E4454] bg-primaryColor font-montserrat fixed w-full z-50 flex justify-between items-center px-6 md:px-[10rem] py-3 shadow-md  transition-all">
      {/* Logo */}
      <div className="flex items-center">
      <div className="dark:text-white text-[2rem] text-textColor tracking-widest font-bold">
        &lt; Ifra /&gt;
      </div>

      {/* Theme Toggle Button (Always Visible) */}
      <button
        onClick={toggleTheme}
        className="text-2xl p-2 rounded-full transition-all text-gray-800 dark:text-white lg:hidden"
      >
        {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
      </button>
      </div>

      {/* Mobile Menu Icons */}
      <div className="lg:hidden z-50">
        {toggle ? (
          <IoMdClose
            className="text-textColor dark:text-[#E5E7EB] text-3xl cursor-pointer"
            onClick={() => setToggle(false)}
          />
        ) : (
          <HiOutlineBars3BottomRight
            className="text-textColor dark:text-[#E5E7EB] text-3xl cursor-pointer"
            onClick={() => setToggle(true)}
          />
        )}
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex items-center gap-8">
        {lists.map((li, index) => (
          <li
            key={index}
            className="cursor-pointer text-lightTextColor dark:text-gray-300 hover:text-primaryColor dark:hover:text-primaryColor tracking-wide font-semibold"
          >
            <a href={`#${li.path}`}>{li.value}</a>
          </li>
        ))}

        {/* Theme Toggle Button (For Desktop View) */}
        <button
          onClick={toggleTheme}
          className="text-2xl p-2 rounded-full transition-all text-gray-800 dark:text-white"
        >
          {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
        </button>
      </ul>

      {/* Mobile Navigation */}
      <ul
        className={`fixed top-0 right-0 h-screen w-3/5 bg-lightTextColor text-textColor dark:bg-gray-800 shadow-lg flex flex-col justify-center items-center gap-8 transform transition-transform duration-300 ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {lists.map((li, index) => (
          <li
            key={index}
            className="cursor-pointer text-gray-800 dark:text-gray-200 hover:text-primaryColor dark:hover:text-primaryColor tracking-wide font-semibold"
            onClick={() => setToggle(false)}
          >
            <a href={`#${li.path}`}>{li.value}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
