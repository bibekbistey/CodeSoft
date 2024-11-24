import React, { useContext } from 'react'
import CartContext from '../context/CartContext'

const Cart = () => {

    

    const product=useContext(CartContext)
    const total=product.cart.reduce((initial,added)=>initial+added.price,0)
    
  return (
    <div className='max-w-[1200px] h-screen mx-auto bg-gray-400'>
        
        <div className='flex justify-center font-serif'>
            <h1 className='text-3xl p-5'>Cart items</h1>
        </div>
        <div className=''>
           {product.cart.map((prod,index)=>
           <div key={index} className='flex  w-[80%] md:w-1/2 h-24 border border-gray-800 shadow-2xl mx-auto mt-10 cursor-pointer hover:scale-105 rounded-2xl'>
                <img className='w-auto h-full object-cover' src={prod.image}></img>
                <div className='mr-10 mt-3 font-mono ml-24'>
                    <h1 className='font-bold'>{prod.name}</h1>
                    <h1>NPR: {prod.price}</h1>
                </div>
                
            </div>
                

           )}
        </div>
        <div className='flex font-serif font-bold mx-auto justify-center mt-20 text-center p-3 border w-44 border-gray-300 shadow-xl'>Total: {total}</div>
    </div>
  )
}

export default Cart