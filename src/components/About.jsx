import React from 'react'
import BtnAbout from './BtnAbout'
import BtnAbout1 from './BtnAbout1'
import Btn1 from './Btn1'
import { FaCode,FaCar,FaChalkboardTeacher } from "react-icons/fa";
import { FaBookJournalWhills } from "react-icons/fa6";
import "animate.css"

const About = () => {
  return (
    <div className='px-6 md:px-[10rem] font-poppins'  id='about'>
      <h1 className='text-center text-[2rem] font-bold dark:text-white pt-[1rem] mb-[1.5rem] text-textColor tracking-wider'>About Me</h1>
      <div className='text-primaryColor block md:flex justify-between'>
        <div>
          <p className='font-semibold text-[1rem] mb-[0.5rem] dark:text-gray-300 text-lightTextColor'>I Love</p>
          <div className='text-primaryColor flex gap-4 mb-2'><BtnAbout icon={<FaBookJournalWhills  className='text-textColor text-[1.5rem]'/>} value='Reciting Quran' /><BtnAbout icon={<FaCode className='text-[1.5rem] text-textColor' />} value='Coding' /></div>
          <div className='flex gap-4'><BtnAbout icon={<FaCar className='text-[1.5rem] text-textColor'/>} value='Travelling' /><BtnAbout icon={<FaChalkboardTeacher className='text-[1.5rem] text-textColor'/>} value='Teaching' /></div>
        </div>
        <div className='flex gap-4 my-4 md:my-0 md:gap-10'>
          <BtnAbout1 value='1+' text1='Years' text2='Experience' />
          <BtnAbout1 value='20+' text1='Project' text2='Completed' />
        </div>
      </div>
      <div className='text-lightTextColor dark:bg-gray-300 bg-white shadow rounded-2xl p-[1rem] text-center mt-[1.5rem] text-[1rem]'>I am <b>Ifra Shamim</b>, a passionate and dedicated tech enthusiast. My journey of learning and growth began early—I completed the <b>Holy Quran with Tajweed</b> at the age of <b>9</b>. In <b>2018</b>, I earned my <b>Matriculation (Pre-Medical) from Millennium's Education System</b>, securing an <b>A+ grade</b>, followed by <b>Intermediate from BAMM PECHS Govt. Degree Girls College for Women</b> in <b>2020</b>, achieving the <b>highest A grade</b>.
        Driven by my love for technology, I pursued a <b>Bachelor’s degree in Computer Science</b> from <b>Sindh Madressatul Islam University</b>, successfully completing my <b>4-year program in 2024</b>. To enhance my expertise, I enrolled in the <b>Saylani Mass IT Training Program</b> in <b>2023</b>, where I completed a <b>1-year MERN Stack Development course</b> in <b>January 2024</b>.
        My passion for sharing knowledge led me to assist my trainer in the <b>Modern Web & App Development Course</b>. With dedication and continuous learning, I progressed to become the <b>Lead Trainer</b> at <b>Saylani Mass IT Training Program</b> within just <b>3-4 months</b>. Additionally, I gained industry experience by completing my <b>internship at CBS Pakistan</b>.
        With a strong foundation in <b>MERN Stack Development</b>, <b>Web & App Development</b>, and <b>mentorship</b>, I am committed to empowering others and contributing to the tech industry with innovation and excellence. 
      </div>
      <div className="flex justify-center mt-4">
        <Btn1 value="Contact Me" />
      </div>
      <div className="py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-textColor dark:text-white">My Journey</h1>
      <div className="grid md:grid-cols-2 gap-2">
        {/* Education Section */}
        <div className="text-textColor dark:bg-gray-300 bg-white w-[100%] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <ul className="space-y-4">
            <li>
              <b>2024</b> - Bachelor's in Computer Science  
              <p className="text-sm text-lightTextColor">Sindh Madressatul Islam University</p>
            </li>
            <li>
              <b>2020</b> - Intermediate (Pre-Medical)  
              <p className="text-sm text-lightTextColor">BAMM PECHS Govt. Degree Girls College for Women</p>
            </li>
            <li>
              <b>2018</b> - Matriculation (Pre-Medical)  
              <p className="text-sm text-lightTextColor">Millennium's Education System</p>
            </li>
            <li>
              <b>2024</b> - MERN Stack Development  
              <p className="text-sm text-lightTextColor">Saylani Mass IT Training Program</p>
            </li>
          </ul>
        </div>

        {/* Experience Section */}
        <div className="text-textColor dark:bg-gray-300 bg-white  p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 animate__animated animate__bounceInRight">Experience</h2>
          <ul className="space-y-4">
            <li>
              <b>2024 - Present</b> - Lead Trainer (Web & App Development)  
              <p className="text-sm text-lightTextColor">Saylani Mass IT Training Program</p>
            </li>
            <li>
              <b>2023 - 2024</b> - Assistant Trainer (Modern Web & App Development)  
              <p className="text-sm text-lightTextColor">Saylani Mass IT Training Program</p>
            </li>
            <li>
              <b>2023</b> - Intern (CBS Pakistan)  
              <p className="text-sm text-lightTextColor">Worked on various projects to gain industry experience</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About