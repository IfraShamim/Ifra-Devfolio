import React from "react";
import { ReactTyped } from "react-typed";
import Btn from "./Btn";
import Btn1 from "./Btn1";
import Btn2 from "./Btn2";
import "animate.css";
const Home = () => {
  return (
    <div className="tracking-wide flex flex-col md:flex-row items-center justify-between text-center md:text-left max-w-screen-lg mx-auto px-6 md:px-8 py-10">
      {/* Left Section - Text Content */}
      <div className="animate__animated animate__backInDown  md:w-1/2">
        <p className="mt-[3.5rem] font-bold text-[2.5rem] text-[#cdad9e] mb-2">
          Hello! I am <span className="text-[#c18572]">Ifra Shamim</span>
        </p>

        <p className="text-[#c18572] font-semibold text-[1.3rem] mb-2">
          A{" "}
          <ReactTyped className="text-[#cdad9e]"
            strings={["Frontend Developer", "MERN Stack Developer"]}
            typeSpeed={100}
            loop={true}
            backSpeed={120}
          />
        </p>

        <div className="text-[#cdad9e] flex gap-2 justify-center md:justify-start mt-4 font-semibold">
          with <Btn /> experience
        </div>

        <div className="flex items-center gap-4 justify-center md:justify-start mt-4">
          <Btn1 value="Resume" />
          <Btn2 value="Hire me" />
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="mt-10 md:mt-0 md:w-1/2">
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
