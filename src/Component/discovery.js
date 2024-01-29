import React from 'react'

const discovery = () => {
  return (
    <div className='lg:flex lg:flex-col  lg:items-center xs:w-[100%] md:w-[75%] lg:justify-center m-auto'>
      <div className='flex justify-center items-center   gap-20 xs:w-[90%]  md:w-[60%]'>
        <div className='flex lg:w-[10%]'>
        <img src='assets/images/circle-01.png'/>
        </div>
         <div className='flex  xs:w-[90%] flex-col'>
         <p className='text-white xs:text-[40px] sm:text-[45px]  md:text-[75px] mt-20  text-center leading-none font-bold'>We make it easy to Discover</p>
         <p className='text-gray-400 text-center mt-4 font-semibold text-base'>Invest and manage all your NFTs at one place.</p>
         </div>
        
        <div>
        <img src='assets/images/ethereum-02.png'/>
        </div>
        
        </div> 
        <div>
        <div className='flex justify-center mt-10'>
        <button className='bg-gradient-to-r from-[#2600fc] to-[#ff00ea]   px-12 py-5 rounded-full font-bold  text-white'>Join Community</button>
      </div>
            </div> 
    </div>
  )
}

export default discovery