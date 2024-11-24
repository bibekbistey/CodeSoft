import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";
import { NavLink } from 'react-router-dom';



const Navbar = () => {
    const [open,setOpen]=useState(false)
    const handleopen=()=>{
        setOpen(!open)
    }

    const navbar=[
        {
            name:"Home",
            path:""
        },
        {
            name:"Project",
            path:"/project"
        },
        {
            name:"Contact",
            path:"/contact"
        },
        {
            name:"About Me",
            path:"/about"
        }
    ];
  return (
    <>
    <div className='font-mono w-full h-[10vh] shadow-lg flex justify-between items-center bg-black'>
        <div className='mx-4'>
            <h1 className='text-2xl text-red-500'>Bibek.B</h1>
        </div>
        <div>
            <ul className='md:flex space-x-10 mr-14 hidden'>
                {navbar.map((item,index)=>
                <li key={index} className='text-lg text-white cursor-pointer hover:scale-105'>
                    <NavLink to={item.path} className={({isActive})=>isActive?"text-orange-300":""}>{item.name}</NavLink></li>
                )}
                
            </ul>

        </div>
        <div className='mr-10 md:hidden'>
            {!open?<CiMenuBurger onClick={handleopen} className='text-white w-5 h-5'/>:<IoIosCloseCircle onClick={handleopen} className='text-red-400 w-5 h-5' />}
        
        

        </div>

        {/* --------for small screen-------- */}

        
       

    </div>
    <div>
        <ul className={open?' md:hidden fixed top-16 left-0 bg-[#1D7874] w-1/2 h-[90vh] space-y-14 ':"fixed left-[-100%]"}>
            {navbar.map((item,index)=>
            <li key={index} className='text-lg text-white cursor-pointer mx-4 mt-10 hover:scale-105 border-b-2 font-mono font-bold'>
                <NavLink to={item.path} className={({isActive})=>isActive?"text-orange-500":""} onClick={()=>setOpen(false)} >{item.name}</NavLink></li>
            )}
            
        </ul>

    </div>
</>

  )
}

export default Navbar