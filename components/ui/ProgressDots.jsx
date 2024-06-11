import React from 'react'

const ProgressDots = () => {
  return (
    <div className='fixed left-10 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-50 gap-5'>
      <Dot/>
      <Dot/>
      <Dot/>
      <Dot/>
      <Dot/>
    </div>
  )
}
const Dot = () => {
  return(
      <div className='rounded-full bg-white/40 w-4 h-4'/>
  )
}

export default ProgressDots
