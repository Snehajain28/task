import React from 'react'
import pic from '../assests/BioAlpine-Master-Alps-WPC.jpg'
function Main() {
  return (
    <div className='w-[100vw] h-[100vh] relative'>
      <p className='absolute lg:left-[20%] bottom-[18%]  left-[2%] md:text-[4.3rem]  md:left-[3rem]  lg:leading-[4rem] md:leading-[5rem]  w-[14rem] text-white leading-[2.5rem] font-extrabold text-[2rem]'>Wellness in every scoop!</p>
      <img loading="lazy"  className="w-11/12 mx-auto md:w-10/12  lg:w-[75vw] lg:h-[40vw]" alt='random' src={pic} ></img>
    </div>
  )
}

export default Main
