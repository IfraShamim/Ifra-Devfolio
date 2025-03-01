import React from 'react'

const SkillsBtn = (props) => {
  return (
    <div className='font-semibold text-lightTextColor dark:bg-gray-300 bg-white shadow flex w-max items-center p-[0.5rem] rounded-full gap-2'>{props.icon}{props.value}</div>
  )
}

export default SkillsBtn