import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="shadow-2xl px-6 md:px-[10rem] py-[0.8rem]">
        {/* Left Section */}
        <div className="block md:flex justify-between text-center md:text-left">
          <h2 className="font-semibold">Built by Ifra Shamim</h2>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
