import React from 'react'

const whyCard = ({number,heading, text}) => {
  return (
    <div className='lg:w-[25%] w-[100%] md:w-[40%]  mt-6 bg-[#1b1229] px-6 pt-6 pb-2 rounded-2xl'>
     <div className='bg-gradient-to-l from-[#2600fc]  to-[#ff00ea] text-[50px] text-transparent inline-block bg-clip-text font-extrabold'>
    {number}
     </div>
     <p className='text-white text-3xl font-bold mt-6'>
     {heading}
     </p>
     <p className='text-gray-400 mt-6 text-base'>{text}</p>
    </div>
  )
}

export default whyCard