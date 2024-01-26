import React from 'react'
import WhyCard from './whyCard'

const Chooseus = () => {
  return (
    <div>
    <div className='flex justify-center py-10 mt-20 '>
    <img src='assets/images/divider-01.svg' className='w-[6%]'/>
    </div>
    <div className='text-[55px] font-extrabold flex mt-16 text-white justify-center'>
    Why choose us?
    </div>
    <div className='lg:w-[85%] lg:m-auto lg:flex-nowrap  md:flex   md:w-[75%] gap-10 md:m-auto md:flex-wrap   lg:flex  lg:gap-6 m-auto lg:mt-10'>
    
   <WhyCard
   number="01."
   heading="Huge
   collection"
   text="A collection of 5,000 unique Nerkos built to go beyond the digital space that will unlock numerous benefits for our community."
   />
   <WhyCard
    number="02."
    heading="High
    quality"
    text="The nerko’s collection includes dozens of rare heads, costumes, and colorways of the artist's palette. They are drawn with great care."
   />
   <WhyCard
   number="03."
   heading="Top
   resource"
   text="Tasty design resources made with care for each pixel. Tokens, metaverse and game resources NFTs. Access additional drops."
   />
   <WhyCard
   number="04."
   heading="Big
   community"
   text="Be part of a community of nerko owners and create user generated items. Rent, advertise, lounch stores, create items. We make it easy to discover."
   />
    </div>
    </div>
  )
}

export default Chooseus 