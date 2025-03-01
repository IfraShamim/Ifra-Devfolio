import React from 'react'

const BtnAbout = (props) => {
  return (
    <div className='shadow p-[0.5rem] dark:bg-gray-300 dark:text-textColor text-textColor bg-white rounded-full w-max font-semibold flex items-center gap-2'>{props.icon}{props.value}</div>
  )
}

export default BtnAbout