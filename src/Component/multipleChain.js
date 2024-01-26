import React from 'react'

const multipleChain = () => {
  return (
    <div className='w-[85%]  xs:flex xs:flex-col-reverse m-auto lg:flex lg:flex-row lg:justify-between mt-20'>
          <div className='lg:w-[50%]'>
        <div className='xs:flex xs:justify-center items-center'>
        <p className='bg-gradient-to-l from-[#2600fc]  sm:mt-10 to-[#ff00ea] xs:text-[20px] xs:mt-4 text-base font-bold xs:text-center sm:text-center text-transparent inline-block bg-clip-text'>SYNC AND TRACK</p>
        </div>
       
        <div className='lg:text-[55px] lg:mt-3 xs:mt-6 text-[35px] xs:text-center xs:leading-none lg:text-start lg:leading-none    text-center font-bold  list-none  text-white'>
        Multiple Chains, One Home
    </div>
    <p className='text-gray-300  lg:text-base  lg:mt-4 xs:text-center xs:mt-6'>We make it easy to Discover, 
    Invest and manage all your NFTs at one place, looked up one of the more obscure.
    Find the right NFT collections to buy within the platform.

</p>
<div className=' flex gap-10'>
    <div className='flex justify-center gap-4 mt-6 items-center'>
     <div className=' py-3 px-3 bg-gradient-to-l from-[#2600fc] rounded-2xl to-[#ff00ea] '>
       icon1
     </div>
    <p className='text-gray-300 text-base'>Collections Indexed
every 5mins.</p>
    </div>
    <div className='flex  justify-center gap-4 mt-6  items-center'>
    <div className='bg-gradient-to-l  py-3 px-3 from-[#2600fc] rounded-2xl to-[#ff00ea] '>
     icon2
     </div>
     <div>
     <p className='text-gray-300 text-base'>Difference in Floor & Estimated NFT Value</p>
     </div>
   
    </div>
    
</div>
       </div>
       <div className='lg:w-[50%]'>
       <img src='assets/images/features-04.png' className='lg:w-[90%] xs:w-[100%]'/>
    </div>
    </div>
  )
}

export default multipleChain