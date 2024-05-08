import React from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";


export default function Navbar() {
  return (
    <>
    <div className='bg-white m-5 py-3 px-2 md:px-5 items-center rounded-full justify justify-between flex border-2  border-[#EAEAEA]'>
        <div className='flex justify-center'>
          {/* <p className='pl-9 py-6 font-bold'>Brunel</p> */}
          <img src={logo} alt='Brunel' className='pl-5 self-center cursor-pointer'/>
        </div>  
        <div className='space-x-4'>
          <Link to="/registration">
            <button href="/register" className='self-center py-6 px-10 border-2  border-[#EAEAEA]  jusitfy rounded-full hover:bg-[#EAEAEA] ease-out duration-300'>Get Projects</button>
          </Link>
          <button className=' self-center py-6 px-10 bg-[#1C1C1C] rounded-full text-white  hover:bg-[#4E4E4E] hidden md:inline-block ease-out duration-300'>Onboard Talent</button>
        </div>
    </div>
    </>
  )
} 
