import React from 'react';
import SkillsBtn from './SkillsBtn';
import { FaHtml5,FaCss3,FaBootstrap,FaReact } from "react-icons/fa";
import { IoLogoJavascript,IoLogoFirebase } from "react-icons/io5";
import { SiTypescript,SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
const Skills = () => {
  return (
    <div id='skills' className="text-center p-6">
      <h1 className="text-3xl font-bold mb-6">Skills</h1>
        <div className='flex flex-wrap justify-center gap-6'>
        <SkillsBtn value="HTML5" icon={<FaHtml5 />} />
        <SkillsBtn value="Css3" icon={<FaCss3 />} />
        <SkillsBtn value="Javascript + ES6" icon={<IoLogoJavascript />} />
        <SkillsBtn value="Bootstrap5" icon={<FaBootstrap />} />
        <SkillsBtn value="Typescript" icon={<SiTypescript />} />
        <SkillsBtn value="Firebase" icon={<IoLogoFirebase  />} />
        <SkillsBtn value="Tailwind Css" icon={<RiTailwindCssFill />} />
        <SkillsBtn value="React Js" icon={<FaReact />} />
        <SkillsBtn value="Redux" icon={<SiRedux />} />
        </div>
    </div>
  );
};

export default Skills;
