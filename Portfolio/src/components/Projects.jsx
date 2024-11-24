import React from 'react'
import jersey from "../assets/jersey.png"
import doctor from "../assets/doctor.png"
import flappy from "../assets/flappybird.webp"
import crud from "../assets/crud.png"
import cart from "../assets/cart.png"
import { FaGithub } from "react-icons/fa";


const Projects = () => {

  const projects=[{
    name:"Jersey-hub",
    image:jersey,
    link:"https://jersey-hub.netlify.app/",
    description: "This is an e-commerce jersey shop created using HTML, Css, Javascript and Django. The features include: Admin can add, edit and delete the products. User can add to cart and buy the products.",
  },
  {
    name:"Doctor-Appointment Booking",
    image:doctor,
    link:"https://github.com/bibekbistey/DoctorAppointmentBooking-Frontend  ",
    description: "An e-commerce site for jerseys",
  },
  {
    name:"Flappy-Bird",
    image:flappy,
    link:"https://github.com/bibekbistey/FlappyBird.git",
    description: " I created flappy bird game using python as my college project",
  },
  {
    name:"To-Do React App",
    image:crud,
    link:"https://github.com/bibekbistey/React-Projects ",
    description: "This is a Do-to react app. In this project we can add to-do list, delete lists,edit the list and update the list",
  },
  {
    name:"Quiz-React-App",
    image:cart,
    link:"https://github.com/bibekbistey/React-Projects ",
    description: "This Quiz react app consists of 5 question. User can choose the correct answer. If the answer is correct score will be updated",
  },
  {
    name:"React CRUD",
    image:crud,
    link:"https://github.com/bibekbistey/React-Projects ",
    description: "In this app, User can add, edit and delete their personal details. User can create, read,delete and update thier information.",
  },
  {
    name:"Shopping-Cart",
    image:cart,
    link:"https://github.com/bibekbistey/React-Projects ",
    description: "In this project user can select products and add to cart",
  }
]
  return (
    <div className='max-w-[1200px] h-full mx-auto bg-green-200 font-mono'>
      <div className='text-center text-2xl h-[10%]'>
        <h1 className='font-bold p-5'>Projects</h1>
      </div>
      
        <ul className='max-w-[400px] md:max-w-[800px] mx-auto mt-5 md:grid grid-cols-2 gap-10 '>
          {projects.map((project,index)=>
            <li className='bg-transparent border border-black shadow-lg mt-4 h-[47vh]' key={index}>
              <img className='h-[25vh] mx-auto' src={project.image}></img>
              <div className='bg-white h-[21.5vh] '>
              <h1 className='text-center font-bold text-blue-700'>{project.name}</h1>
              <a href={project.link} className='flex justify-center text-blue-500 p-1'><FaGithub className='size-5 text-black'/>
              </a>
              <p className='text-center text-sm w-[90%]'>{project.description}</p>
              </div>
            </li>
          )}
        </ul>
    </div>
  )
}

export default Projects