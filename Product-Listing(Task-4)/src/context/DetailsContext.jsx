import React, { useState } from 'react'

const DetailsContext = React.createContext();

export const DetailsContextProvider=({children})=>{

    const [details,setDetails]=useState(null);

    const handleDetails=(product)=>{
        setDetails(product)

    }
    return(
        <DetailsContext.Provider value={{handleDetails,details}}>
            {children}
        </DetailsContext.Provider>
    )

}

export default DetailsContext