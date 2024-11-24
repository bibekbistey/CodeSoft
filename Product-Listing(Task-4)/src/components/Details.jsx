import React, { useContext } from 'react'

import {product} from "../components/Data"
import DetailsContext from '../context/DetailsContext'

const Details = () => {
    const prod=useContext(DetailsContext);
  return (
    <div className='bg-transparent'>
      <div className='justify-center flex'>
      <h1  className='font-serif font-bold text-4xl p-10'>Product Details</h1>
      </div>
    <div className="container mt-24 border border-gray-300  mx-auto p-6 bg-white shadow-lg rounded-lg max-w-3xl">
      
      <div className="flex flex-col md:flex-row gap-8 ">
        
        {/* Product Images */}
        <div className="flex-1">
          
          <div className="flex gap-4 mt-4">
            <img
              src={prod.details.image}
              className="w-60 h-60 object-cover rounded-lg border mx-auto border-gray-200"
            />
            
          </div>
        </div>
        
        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{prod.details.name}</h1>
          <p className="text-xl font-semibold text-gray-700 mb-4">{prod.details.price}</p>
          <p className="text-gray-600 mb-6">
            {prod.details.detail}
          </p>
          
          {/* Specifications
          <h3 className="text-lg font-medium mb-2">Specifications</h3>
          <ul className="mb-6 space-y-2">
            <li className="flex justify-between">
              <span className="font-semibold">Battery Life:</span>
              <span>20 hours</span>
            </li>
            <li className="flex justify-between">
              <span className="font-semibold">Color:</span>
              <span>Black</span>
            </li>
            <li className="flex justify-between">
              <span className="font-semibold">Connectivity:</span>
              <span>Bluetooth 5.0</span>
            </li>
            <li className="flex justify-between">
              <span className="font-semibold">Warranty:</span>
              <span>1 year</span>
            </li>
          </ul> */}

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg font-medium shadow-md hover:bg-blue-700">
              Add to Cart
            </button>
            <button className="border border-blue-600 text-blue-600 py-2 px-4 rounded-lg font-medium hover:bg-blue-50">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Details