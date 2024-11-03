import React from 'react'


function Card({ data }) {
  
    return (
        <divgit
            className='h-[10rem] w-[9rem] md:w-[15rem] md:h-[18rem] cursor-pointer rounded-lg  shadow-xl  '>
            <img src={data}
                    alt='' className='h-full object-cover  img '>
                </img>
            </divgit >
       
    )
}

export default Card