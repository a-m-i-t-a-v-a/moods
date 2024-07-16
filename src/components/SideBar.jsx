import React from 'react'
import { assets } from '../assets/assets'

const SideBar = () => {
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
          <img className='w-6' src={assets.home_icon} alt='Home'/>
          <p className='font-mono'>Home</p>
        </div>
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
          <img className='w-6' src={assets.search_icon} alt='Home'/>
          <p className='font-mono'>Search</p>
        </div>
      </div>
      <div className='bg-[#121212] h-[85%] rounded'>
        <div className='p-4 flex items-center justify-between'>
           <div className='flex items-center gap-3'>
             <img className='w-8' src={assets.stack_icon}/>
             <p className='font-mono'>Your Library</p>
           </div>
           <div className='flex items-center gap-3'>
             <img className='w-4' src={assets.arrow_icon}/>
             <img className='w-4' src={assets.plus_icon}/>
           </div>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-mono flex flex-col items-start justify-start gap-1 pl-4'>
          <h1 className='font-bold'>Create your first playlist</h1>
          <p className='font-light'>So, let&apos;s get started!</p>
          <button className='px-4 py-4 mt-4 text-[15px] bg-blue-900 text-white rounded-full'>Create Playlist</button>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-mono flex flex-col items-start justify-start mt-4 gap-1 pl-4'>
          <h1 className='font-bold'>Let&apos;s find some podcast to follow</h1>
          <p className='font-light'>Well will keep you hooked!</p>
          <button className='px-4 py-4 mt-4 text-[15px] bg-blue-900 text-white rounded-full'>Browse Podcast</button>
        </div>
      </div>
    </div>
  )
}

export default SideBar
