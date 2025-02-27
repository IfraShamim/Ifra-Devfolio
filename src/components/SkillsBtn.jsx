import React from 'react'

const SkillsBtn = (props) => {
  return (
    <div className='font-semibold text-[#c18572] shadow flex w-max items-center p-[0.5rem] rounded-full gap-2'>{props.icon}{props.value}</div>
  )
}

export default SkillsBtn