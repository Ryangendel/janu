import React, { createContext, useContext, useState } from 'react';

const REIContext = createContext()

export const useREIContext = () => useContext(REIContext)

export const REIContextProvider = ( {children} ) =>{
    const [bikeInventory, setBikeInventory]= useState([{},{},{}])
    const [userInfo, setUserInfo]= useState({name:'Ryan', cc:12345678})
    //

    const addBikeToInventory=()=>{
        //somelogic 
    }

    return(
        <REIContext.Provider value={{bikeInventory, setBikeInventory, userInfo, setUserInfo, addBikeToInventory}}>
            {children}
        </REIContext.Provider>
    )
}