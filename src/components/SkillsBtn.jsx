import React from 'react'

const SkillsBtn = (props) => {
  return (
    <div className='font-semibold shadow flex w-max items-center p-[0.5rem] rounded-full'>{props.icon}{props.value}</div>
  )
}

export default SkillsBtn