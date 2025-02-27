import React from 'react'

const BtnAbout1 = (props) => {
  return (
    <div className='rounded-full text-white bg-[#cdad9e] py-[2.5rem] px-[1.5rem] shadow font-semibold text-center'>
        <p>{props.value}</p>
        <p>{props.text1}</p>
        <p>{props.text2}</p>
    </div>
  )
}

export default BtnAbout1