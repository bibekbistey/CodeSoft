import React from 'react'
import profile from "../assets/profile.jfif"

const Home = () => {
  return (
    <div className='max-w-[1200px] h-screen bg-[#E6FAF5] mx-auto font-mono md:flex justify-between'>
        <div className='text-center w-full h-1/3 space-y-5 mt-9 md:w-1/2 mx-auto md:mt-24'>
            <h1 className='text-xl font-bold md:text-3xl'>Hello</h1>
            <h1 className='text-yellow-600 md:text-2xl'>I'm Front-end Developer</h1>
            <h1 className='text-gray-400 md:text-lg '>I am a skilled and passionate web designer with 
                        qualification and experience in creating visually 
                        appealing and user-friendly websites</h1>
            <div className='w-30 top-10'>
                <a href='/My_CV.pdf' download={"Bibek_CV.pdf"} className='p-2 bg-red-400 rounded-lg'>Download CV</a>
            </div>
        </div>
        <div className='w-[90%] h-auto justify-center md:mt-10'>
            <img src={profile} alt="profile" className='md:w-1/2 mt-10 rounded-md shadow-xl mx-auto' />
        </div>

    </div>
  )
}

export default Home