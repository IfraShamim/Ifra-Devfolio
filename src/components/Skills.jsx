import React from 'react';
import SkillsBtn from './SkillsBtn';
import { FaHtml5,FaCss3,FaBootstrap,FaReact } from "react-icons/fa";
import { IoLogoJavascript,IoLogoFirebase } from "react-icons/io5";
import { SiTypescript,SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
const Skills = () => {
  return (
    <div id='skills' className="font-montserrat text-center py-[2.5rem] px-6 md:px-24">
      <h1 className="text-3xl font-bold mb-6 text-textColor dark:text-white">Skills</h1>
        <div className='flex flex-wrap justify-center gap-2 md:gap-6'>
        <SkillsBtn value="HTML5" icon={<FaHtml5 className='text-[#FF5733] text-[2rem]' />} />
        <SkillsBtn value="Css3" icon={<FaCss3 className='text-blue-700 text-[2rem]'/>} />
        <SkillsBtn value="Javascript + ES6" icon={<IoLogoJavascript className='text-yellow-500 text-[2rem]'/>} />
        <SkillsBtn value="Bootstrap5" icon={<FaBootstrap className='text-purple-700 text-[2rem]'/>} />
        <SkillsBtn value="Typescript" icon={<SiTypescript className='text-blue-950 text-[2rem]'/>} />
        <SkillsBtn value="Firebase" icon={<IoLogoFirebase  className='text-yellow-400 text-[2rem]'/>} />
        <SkillsBtn value="Tailwind Css" icon={<RiTailwindCssFill className='text-blue-900 text-[2rem]'/>} />
        <SkillsBtn value="React Js" icon={<FaReact className='text-blue-800 text-[2rem]'/>} />
        <SkillsBtn value="Redux" icon={<SiRedux className='text-red-700 text-[2rem]'/>} />
        </div>
    </div>
  );
};

export default Skills;
