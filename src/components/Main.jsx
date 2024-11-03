import React from 'react'
import pic from '../assests/BioAlpine-Master-Alps-WPC.jpg'
function Main() {
  return (
    <div className='w-[100vw] h-[60vw] md:h-[70vw] relative'>
      <p className='absolute top-[55%] left-[2%] md:text-[4.3rem] md:top-[9.4rem] md:left-[3rem] md:leading-[5rem]  w-[14rem] text-white leading-[2.5rem] font-extrabold text-[2rem]'>Wellness in every scoop!</p>
      <img loading="lazy"  className="w-11/12 mx-auto md:w-10/12 h-6/12" alt='random' src={pic} ></img>
    </div>
  )
}

export default Main
