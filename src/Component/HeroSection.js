import React from 'react'

const HeroSection = () => {
  return (
    <div className=' w-[100%] m-auto flex flex-col  items-center mt-6 top-0 bottom-0 absolute'>
   
    <div className='w-[70%] m-auto '>
    <div className='flex justify-center'>
        <img src='assets/circle_image/ethereum-01.png' className='w-[5%]'/>
    </div>
   
    <div className='flex w-100 justify-between items-center'>
    <div>
    <img src='assets/circle_image/circle-01.png'className='w-[70%]'/>
    </div>
      <div className='w'>
       
      <h3 className='text-white text-[75px]  font-bold text-center'>Buy & Sell Nerko's Collection</h3>
      <p className=' text-2xl  text-center text-white'>Invest and manage all your NFTs at one place.</p>
      </div>
      <div>
      <img src='assets/circle_image/x.png' className='w-[70%]'/>
      </div>
     
      </div>
      <div className='flex justify-center mt-10'>
        <button className='bg-gradient-to-r from-[#2600fc] to-[#ff00ea]   px-12 py-5 rounded-full font-bold  text-white'>Browse Collection</button>
      </div>
      <div className='flex  w-[60%] gap-40 justify-between items-center m-auto '>
        <div className='w-[20%]'>
        <img src='assets/circle_image/bitcoin-01.png' className='w-[50px]'/>
        </div>
     <div>
     <img src='assets/circle_image/circle-03.png' className='w-[30px]'/>
     </div>
     
      </div>
    </div>

    </div> 
  )
}

export default HeroSection