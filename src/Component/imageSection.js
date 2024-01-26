import React from 'react'
import ImageCard from './ImageCard'


const imageSection = () => {
  return (
    <div className='flex  w-[85%] m-auto justify-between flex-wrap'>
   <ImageCard
   image="assets/images/art_01.jpg"
   text="#Metaverse"
   spanText="TheSalvare"
   />
   <ImageCard
   image="assets/images/art_02.jpg"
   text="#Polly Doll"
   spanText="TheNative"
   />
   <ImageCard
   image="assets/images/art_03.jpg"
   text="#Alec Art"
   spanText="GeorgZvic"
   />
   <ImageCard
  image="assets/images/art_04.jpg"
   text="#Toxic Poeth"
   spanText="YazoiLup"
   />
   <ImageCard
   image="assets/images/art_05.jpg"
   text="#Saphyre"
   spanText="CryptoX"
   />
   <ImageCard
   image="assets/images/art_06.jpg"
   text="#Charcuterie"
   spanText="Texira"
   />
   <ImageCard
   image="assets/images/art_07.jpg"
   text="#Paradise"
   spanText="CryptoX"
   />
   <ImageCard
   image="assets/images/art_08.jpg"
   text="#HighTown"
   spanText="TheSalvare"
   />
    </div>
  )
}

export default imageSection