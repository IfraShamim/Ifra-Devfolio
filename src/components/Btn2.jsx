import React from 'react';

const Btn2 = (props) => {
  return (
    <div className='dark:bg-[#E5E7EB] dark:text-lightTextColor shadow cursor-pointer rounded-full px-[1rem] py-[0.5rem] bg-lightTextColor text-white'>
      <a href="mailto:ifrashamim29@gmail.com" className="block font-semibold w-full text-center">
        {props.value}
      </a>
    </div>
  );
};

export default Btn2;
