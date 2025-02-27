import React from 'react';
import { GoDownload } from "react-icons/go";

const Btn1 = (props) => {
  return (
    <div className='flex items-center cursor-pointer rounded-full px-[0.5rem] border border-black w-max'>
      <a href="./Ifra_Resume_24.pdf" download="Ifra_Resume_24.pdf" className="flex items-center gap-2 px-2 py-1 font-semibold">
        <GoDownload className='font-bold'/>
        {props.value}
      </a>
    </div>
  );
};

export default Btn1;
