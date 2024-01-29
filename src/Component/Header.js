import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [navbar, setNavbar] = useState(false)
  const [isOpen, setIsOPen] =useState(false)

const ChangeBackground = () => {
  if(window.scrollY >= 70 ){
    setNavbar(true)
  }else{
    setNavbar(false)
  }
}
window.addEventListener("scroll",ChangeBackground)

  return (
    <div className={navbar ? "w-full flex z-50  fixed left-0 right-0 items-center h-[70px] bg-gray-950": "w-full flex z-50  fixed left-0 right-0 items-center h-[70px]"}>
    <div className='flex w-[85%]  items-center z-50   top-0  justify-between m-auto'>
        <div>
            <img src='assets/secondary_logo.svg' className='w-[80%]'/>
        </div> 
        <div className='ms:hidden'>
            <ul className={ isOpen ?'absolute bg-[#1b1229] opacity-90  w-[100%] flex flex-col justify-center items-center  py-4 mt-8 right-0 left-0 ': "hidden lg:flex lg:flex-row" }>
            <li className='text-white px-3  cursor-pointer hover:text-gray-400 xs:mt-1 text-base font-bold'><Link to="/">Home </Link></li>
            <li className='text-white px-3 cursor-pointer hover:text-gray-400 xs:mt-1 text-base font-bold'>swap</li>
            <li className='text-white px-3 cursor-pointer hover:text-gray-400 xs:mt-1 text-base font-bold'> <Link to="/Presale">presale</Link></li>
            <li className='text-white px-3 cursor-pointer hover:text-gray-400 xs:mt-1 text-base font-bold '> RGT</li>
            <li className='text-white px-3 cursor-pointer hover:text-gray-400 xs:mt-1 text-base font-bold'>RWT</li>
            <li className='text-white px-3 cursor-pointer hover:text-gray-400 xs:mt-1 text-base font-bold'>White Paper</li>
            </ul>
        </div>
       <img src='assets/circle_image/menu1.png' className='block w-[20px] cursor-pointer o lg:hidden' onClick={() => setIsOPen(!isOpen)}/>
    </div>
    </div>
  )
}

export default Header