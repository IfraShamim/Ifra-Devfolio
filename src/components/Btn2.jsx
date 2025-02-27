import React from 'react';

const Btn2 = (props) => {
  return (
    <div className='shadow cursor-pointer rounded-full px-[1rem] py-[0.5rem]'>
      <a href="mailto:ifrashamim29@gmail.com" className="block font-semibold w-full text-center">
        {props.value}
      </a>
    </div>
  );
};

export default Btn2;
