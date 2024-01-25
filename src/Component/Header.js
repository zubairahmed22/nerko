import React from 'react'

const Header = () => {
  return (
    <div className='flex w-[85%]  items-center z-50 mt-8  top-0  fixed left-0 right-0  justify-between m-auto'>
        <div>
            <img src='assets/secondary_logo.svg'/>
        </div> 
        <div className='ms:hidden'>
            <ul className='hidden  lg:flex'>
            <li className='text-white px-3  text-base font-bold'>Home</li>
            <li className='text-white px-3 text-base font-bold'>Collection</li>
            <li className='text-white px-3  text-base font-bold'>Choose</li>
            <li className='text-white px-3 text-base font-bold '>About</li>
            <li className='text-white px-3 text-base font-bold'>Roadmap</li>
            </ul>
        </div>
       <img src='assets/circle_image/menu1.png' className='block w-[20px]  lg:hidden'/>
    </div>
  )
}

export default Header