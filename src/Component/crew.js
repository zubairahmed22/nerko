import React from 'react'

const Crew = () => {
  return (
    <div className='mt-20'>
       <div className='flex justify-center'>
        <p className='text-white 3xl text-[55px]  font-bold'>Nerko's Crew</p>
        </div>
        <div className='flex w-[85%] m-auto mt-20 justify-center'>

        <div className='w-[33.333%]'>
           <div className='flex justify-center items-center'>
            <img src='assets/images/02.png' className='rounded-full w-[50%]'/>
            </div> 
            <div className='flex  flex-col justify-center items-center'>
                <p className='text-white text-2xl font-bold'>Steps Jobs</p>
                <p className='text-gray-400 text-center'>Artist</p>
            </div>    
        </div> 

        <div className='w-[33.333%]'>
           <div className='flex justify-center items-center'>
            <img src='assets/images/02.png' className='rounded-full w-[50%]'/>
            </div>     
        </div> 
        <div className='w-[33.333%]'>
           <div className='flex justify-center items-center'>
            <img src='assets/images/02.png' className='rounded-full w-[50%]'/>
            </div>     
        </div>
        <div className='w-[33.333%]'>
           <div className='flex justify-center items-center'>
            <img src='assets/images/02.png' className='rounded-full w-[50%]'/>
            </div>     
        </div>  
        </div>
       
    </div>
  )
}

export default Crew