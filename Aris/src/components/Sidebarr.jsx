import React from 'react'
import { assets } from '../assets/assets.js'
const Sidebar = () => {
  return (
    <div className=' w-[25%] h-full p-2 flex-col gap-2    text-white hidden lg:flex'>
        <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
            <div className="flex items-center gap-3  pl-8 cursor-pointer mb-6">
                <img className='w-6 ' src={assets.homeicon} alt=""  />
                <p className='font-bold'>home</p>
            </div>
            <div className="flex items-center gap-3  pl-8 cursor-pointer mb-4">
                <img className='w-6 ' src={assets.Sea} alt=""  />
                <p className='font-bold'>search</p>
            </div>
            <div className=" h-[85%] bg-[#121212] rounded">
              <div className="p-4 flex justify-between items-center">
                <div className="flex items-center gap-3 ">
                  <img className='w-8 ' src={assets.st} alt=""  />
                  < p className='font-semibold'>Your Library</p>
                </div>
                    <div className="flex items-center gap-3 ">
                <img className='w-5' src={assets.Arr} alt=""  />
                <img className='w-5' src={assets.Pul} alt=""  />
                     </div>

              </div>
              <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col  items-start gap-1 justify-start pl-4">

                <h1>Create ur first playlist</h1>
                <p className='font-light'> it's easy</p>
                <button className='bg-white px-4 py-1.5 text-[15px] text-black rounded-full mt-4 ' >Create Playlist</button>
              </div>

              <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col  items-start gap-1 justify-start pl-4 mt-4">

                  <h1>lets Find Some Podcasts to follow</h1>
                  <p className='font-light'>we'll keep You update on new episodes </p>
                  <button className='bg-white px-4 py-1.5 text-[15px] text-black rounded-full mt-4 ' >Browser Podcasts</button>
</div>
        





            </div>





        </div>
    </div>
 
  )
}

export default Sidebar
