import React from 'react'
import { createContext,useState } from 'react'

const searchContextOne=createContext();

function ContextSecondary({children}) {
    const [ searchOne,setSearchOne]=useState("BTC");

  return (
    <div>
        <searchContextOne.Provider value={{searchOne,setSearchOne}}>
            {children}
        </searchContextOne.Provider>
    </div>
  )
}

export { ContextSecondary,searchContextOne}