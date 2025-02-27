import React from 'react'

const BtnAbout = (props) => {
  return (
    <div className='shadow p-[0.5rem] rounded-full w-max font-semibold flex items-center gap-2'>{props.icon}{props.value}</div>
  )
}

export default BtnAbout