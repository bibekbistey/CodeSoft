import React from 'react'
import profile from "../assets/profile.jfif"
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiFlutterFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";

const AboutMe = () => {
  return (
    <div className='max-w-[1200px] h-full md:h-[90vh] mx-auto bg-slate-300 font-mono'>
      <div className='text-center font-bold text-2xl'>
        <h1 className='p-10'>About Me</h1>
      </div>
      <div className='flex flex-col md:grid grid-cols-2 mt-10'>
        <div className='mx-auto h-auto'>
          <img src={profile}></img>
        </div>
        <div className='mt-5'>
          <h1 className='text-red-500 text-center'>Hey, I am Bibek Bista</h1>
          <p className='mx-3 mt-4 text-center'>I have a strong passion for IT field and i am eager to apply my knowledge and skills. I constantly seek for new challanges
             and opportunities for the growth within the field of technology.</p>
             <p className='mx-3 mt-5 text-center'>I have completed my Bhc hons computing degree from 
            Softworica College of IT & E-commerce  </p>
          <h1 className='mt-10 text-cyan-600 text-center font-bold'>Sills Highlights</h1>
          <div className=' flex text-center mt-5 mb-10'>
            <ul className='flex mx-auto space-x-6 md:space-x-2 lg:space-x-6'>
            <li className='ml-16 md:ml-0
            '><IoLogoHtml5 className='size-10 text-orange-400'/>HTML
            </li>
            <li className=' '><FaCss3 className='size-10 text-blue-400'/>CSS
            </li>
            <li className=' '> <FaJs className='size-10 text-yellow-500'/>JS
            </li>
            <li className=' '><FaReact className='size-10 text-blue-400'/>React.JS
            </li>
            <li className='w-[10%] '><RiTailwindCssFill className='size-10 text-blue-400'/>Tailwind CSS
            </li>
            <li className=' '> <RiFlutterFill className='size-10 text-blue-400'/> FLutter
            </li>
            <li className='w-[10%]'> <TbBrandFramerMotion className='size-10 text-purple-400'/>Framer Motion
            </li>
            </ul>
          
            

          </div>
          
            
          
        </div>
      </div>
    </div>
  )
}

export default AboutMe