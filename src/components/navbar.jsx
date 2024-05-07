import React from 'react'
import { Brunel } from '../assets'


export default function Navbar() {
  return (
    <>
    <div className='bg-fixed sticky top-6 bg-white m-6 py-4 pr-6 rounded-full justify-between flex border-2  border-[#EAEAEA]'>
        <div className='flex justify-center'>
          {/* <p className='pl-9 py-6 font-bold'>Brunel</p> */}
          <img src={Brunel} alt='Brunel' className='pl-9 self-center cursor-pointer'/>
        </div>  
        <div className='space-x-4'>
          <button className='self-center py-6 px-10 border-2  border-[#EAEAEA]   rounded-full hover:bg-[#EAEAEA]'>Get Projects</button>
          <button className=' self-center py-6 px-10 bg-[#1C1C1C] rounded-full text-white  hover:bg-[#4E4E4E]'>Onboard Talent</button>
        </div>
    </div>
    </>
  )
} 
