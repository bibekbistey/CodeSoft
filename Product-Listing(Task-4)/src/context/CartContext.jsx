import React, { useState } from 'react'
import {product} from "../components/Data"

const CartContext = React.createContext();


export const CartContextPorvider=({children})=>{
    
    const [cart,setCart] = useState([])

    const handlecart=(newproduct)=>{
        setCart([...cart,newproduct])
    }

    return(
        <CartContext.Provider value={{handlecart,cart}}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContext