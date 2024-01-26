import React from 'react'

const ImageCard = ({image, text, spanText}) => {
  return (
    <div className=' lg:w-[250px] md:w-[250px] mt-6  bg-[#1b1229] rounded-lg py-4 px-4 h-auto'>
    <img src={image} className='rounded-lg'/>
    <p className='text-2xl text-white text-center py-2 font-bold'>{text}</p>
    <p className='text-gray-400 text-center'>By <span className='text-gray-400'>{spanText}</span></p>
   </div>
  )
}

export default ImageCard