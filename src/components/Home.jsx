import React from "react";
import { ReactTyped } from "react-typed";
import Btn from "./Btn";
import Btn1 from "./Btn1";
import Btn2 from "./Btn2";
import "animate.css";
const Home = () => {
  return (

    <div className="tracking-wide font-montserrat dark:text-white  flex flex-col md:flex-row items-center justify-between text-center md:text-left mx-auto px-6 md:px-[10rem] py-10">
      {/* Left Section - Text Content */}
      <div className="animate__animated animate__backInDown  md:w-1/2">
        <p className="mt-[3.2rem] md:mt-[2.5rem] text-[2rem] text-black dark:text-[#E5E7EB]  text-lightTextColor mb-4">
          Hello, I'm <span className="text-textColor text-[2.5rem] dark:text-white  font-semibold">Ifra Shamim</span>
        </p>

        <p className="text-textColor dark:text-white font-semibold text-[2rem] mb-2">
          A{" "}
          <ReactTyped className="text-lightTextColor tracking-wider text-[1.5rem] dark:text-[#E5E7EB]"
            strings={["Frontend Developer", "Mern Stack Developer"]}
            typeSpeed={100}
            loop={true}
            backSpeed={120}
          />
        </p>

        <div className="dark:text-[#E5E7EB] text-lightTextColor flex gap-2 justify-center md:justify-start mt-4 font-semibold mb-[2rem]">
          with <Btn /> experience
        </div>

        <div className="flex items-center gap-4 justify-center md:justify-start mt-2">
          <Btn1 value="Resume" />
          <Btn2 value="Hire me" />
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="md:mt-0 md:w-1/2">
        <img
          className="animate__animated animate__bounceInRight mx-auto w-[18rem] md:w-[20rem]"
          src="MyPic.png"
          alt="Ifra Shamim"
        />
      </div>
    </div>
  );
};

export default Home;
