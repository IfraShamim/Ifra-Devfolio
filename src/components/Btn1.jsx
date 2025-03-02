import React from 'react';
import { GoDownload } from "react-icons/go";

const Btn1 = (props) => {
  return (
    <div className='text-lightTextColor dark:text-[#E5E7EB]   flex items-center cursor-pointer rounded-full px-[0.5rem] border border-lightTextColor dark:border-[#E5E7EB] w-max'>
      <a href="./Ifra_Resume_24.pdf" download="Ifra_Resume_24.pdf" className="flex items-center gap-2 px-2 py-1 font-semibold">
        <GoDownload className='font-bold text-lightTextColor dark:text-[#E5E7EB] text-[1.2rem]'/>
        {props.value}
      </a>
    </div>
  );
};

export default Btn1;
