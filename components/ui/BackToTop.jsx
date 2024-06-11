import React from 'react'
import Image from 'next/image'

const BackToTop = () => {
  return (
    <div className='z-50 fixed  right-0 text-xs font-bold bottom-40 text-gray-400 -rotate-90 flex items-center justify-center cursor-pointer'>
      <span>BACK TO TOP</span> 
        <Image src={"/images/up.svg"} width={20} height={100} alt="back to top"  className='rotate-90'/>
 </div>
  )
}

export default BackToTop
