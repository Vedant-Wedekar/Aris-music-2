import React from 'react'
import { songData } from '../assets/assets'
const Player = () => {
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
        <div className="hidden lg:flex items-center gap-4">
        <img className='w-12' src={songData[0].image} alt=""></img>
        <div className=""> 
             <p>{songData[0].name}</p>
             <p>{songData[0].desc}</p>
        </div>
      </div>
      <div className="flex items-center flex-col gap-1 m-auto"></div>
      <div className="flex gap-4"></div>
      <img ></img>
    </div>
  )
}

export default Player
