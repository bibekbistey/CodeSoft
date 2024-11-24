import React, { useContext } from 'react'
import { product } from './Data';
import Details from './Details';

import { FaCartPlus } from "react-icons/fa";
import CartContext from '../context/CartContext';
import { NavLink, useNavigate } from 'react-router-dom';
import DetailsContext from '../context/DetailsContext';

const Products = () => {
    const prod=useContext(CartContext)
    const detail=useContext(DetailsContext)
    const navigate=useNavigate();
    const handleProductClick = (productItem) => {
        detail.handleDetails(productItem); 
        navigate('/details'); 
    };
  return (
    <section className='bg-zinc-200 mb-7 max-w-[1200px] h-full mx-auto'>
        <div className='flex items-center justify-between'>
            <h1 className='font-bold text-2xl mx-10 text-center pt-4'>Products</h1>
            {/* <div className='mt-15'>
                <input className='mt-10 mx-5' type='text' onChange={(e)=>{setsearch(e.target.value)}}></input>
            </div> */}
            <div className='mr-16 pt-4'>
                <NavLink to={"/cart"}><FaCartPlus size={30} /></NavLink>
                
                
            </div>
            
            
            {/* <div className='flex justify-center items-center'>
                <button className='flex justify-center'>Cart</button>
            </div> */}
            

        </div>
        
        <div  className=' md:grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
            {product.       
                
                map((cloth,index)=>

                <div 
                onClick={()=>{handleProductClick(cloth)}}  key={index}className='w-60 h-64 border border-gray-800 shadow-2xl mx-auto mt-10 cursor-pointer hover:scale-105 rounded-2xl '>

                    <img className='w-52 h-48 mx-auto object-cover mt-1 ' src={cloth.image}></img>
                    <div className='flex justify-between items-center px-2 pt-2'>
                         <div className=''>
                            <h1 className='font-bold px-2'>{cloth.name}</h1>
                            <p className='pt-1 px-2'>NPR: {cloth.price}</p>
                        </div>
                            <div className=' '>
                            <FaCartPlus onClick={(e)=>{ e.stopPropagation(); // Prevents triggering handleProductClick
                                        prod.handlecart(cloth);prod.handlecart(cloth)}} size={20} />
                            </div>
                            

                        
                        
                        
                    </div>
                    
                    

                    
                    

                </div>
            )}
            
        </div>
        
   </section>
  )
}

export default Products