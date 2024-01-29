import React from 'react'
import HeroSection from "./Component/HeroSection";
import ImageSection from "./Component/imageSection";
import ChooseUs from "./Component/Chooseus";
import Platform from "./Component/platform";
import MultipleChain from "./Component/multipleChain";
import Crew from "./Component/crew";
import FaqSection from "./Component/Faqs";
import Discovery from "./Component/discovery";


const Home = () => {
  return (
    <div>
        <section className=" h-[700px] bg-[url(../public/assets/collection-grid.png)] bg-no-repeat relative bg-center   bg-cover py-10 opacity-30 ">
   
   </section>
 <HeroSection/>
    <ImageSection/>
    <ChooseUs/>
    <Platform/>
    <MultipleChain/>
    <Crew/>
    <FaqSection/>
    <Discovery/>
    </div>
  )
}

export default Home