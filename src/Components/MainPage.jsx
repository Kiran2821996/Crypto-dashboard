import React from 'react'
import MenuAppBar from './MenuAppBar'
import { useState, useEffect } from 'react'
import axios from 'axios'
export default function MainPage() {
let [data,setdata]=useState([])
useEffect(()=>{
    axios.get("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=100&interval=daily").then((res)=>console.log(res.data))
},[])
  return (
   <>
   <MenuAppBar/>

   </>
  )
}
