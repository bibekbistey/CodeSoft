// Contact.jsx

import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";




const Contact = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Contact Me</h2>
      </div>

      <div className="mt-10 max-w-lg mx-auto ">
        <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Enter Your Name"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold" htmlFor="email">Email</label>
            <input
              type="email"
              
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Enter Your Email"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold" htmlFor="message">Message</label>
            <textarea
              
              rows="4"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className='flex justify-center'>
          <button className="w-[300px] bg-green-600 text-white font-semibold py-2 rounded-md"
          >
            Send Message
          </button>
            </div>

         
        </form>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 font-bold">Connect with me on:</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://linkedin.com" className="text-blue-600 hover:text-blue-400">
            <FaLinkedin className='size-8'/>

          </a>
          <a href="https://github.com" className='hover:text-gray-500' >
            <FaGithub className='size-8' />
          </a>
          <a href="https://twitter.com" className="text-[#E1306C] hover:text-blue-700">
          <FaInstagramSquare className='size-8' />

          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
