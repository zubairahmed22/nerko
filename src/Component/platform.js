import React from 'react'

const platform = () => {
  return (
    <div>
        <div className='flex justify-center py-10 mt-20 '>
    <img src='assets/images/divider-01.svg' className='lg:w-[6%] w-[20%]'/>
    </div>
    <div className='lg:text-[55px]  text-[40px] font-extrabold flex mt-16 text-white justify-center'>
    About the platform
    </div>

     <div className='lg:w-[85%]  md:w-[75%] lg:flex lg:justify-between  mt-20 m-auto'>
       <div>
        <img src='assets/images/features-01.png' className='lg:w-[80%]'/>
       </div>
       <div>
        <div className='xs:flex xs:justify-center xs:items-center md:flex md:justify-center md:items-center '>
        <p className='bg-gradient-to-l from-[#2600fc] xs:text-[20px] xs:mt-4 sm:mt-10 to-[#ff00ea] xs:text-center sm:text-center text-base font-bold text-transparent inline-block bg-clip-text'>CREATE AND INVEST</p>
        </div>
        
        <div className='lg:text-[55px] text-[45px] xs:leading-none  sm:leading-none text-center lg:text-start lg:leading-none  font-bold  list-none  text-white'>
        Create your own NFT
    </div>
    <p className='text-gray-300 xs:mt-4 md:text-center md:mt-4 xs:text-center'>Multiple Chains, One Home. Stack up all your NFTs from across blockchains.

</p>
<div className=' lg:flex lg:flex-row  lg:gap-8 flex-col justify-center  items-center mt-10'>
    <div className='mt-4 lg:mt-0'>
    <p className='text-white text-[40px] md:text-center lg:text-start font-bold text-center'>4,500+</p>
    <p className='text-gray-300  xs:text-center sm:text-center xs:text-[16px] text-base'>Collections Indexed
every 5mins.</p>
    </div>
    <div className=' mt-10 lg:mt-0'>
    <p className='text-white text-[40px] md:text-center lg:text-start font-bold xs:text-center'>2.5x</p>
    <p className='text-gray-300 xs:text-center sm:text-center xs:text-[16px] text-base'>Difference in Floor & Estimated NFT Value</p>
    </div>
    
</div>
       </div>
     </div>
    </div>
  )
}

export default platform