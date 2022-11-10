import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
export default function CurrencyChart() {
    let [data,setdata]=useState([])
useEffect(()=>{
  async function getdata(){
   const response = await axios.get("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=100&interval=monthly")
   setdata(response.data.prices)
  }
  getdata()
},[])

let objectData = data.map(function(x){
  return {
    time :(x[0]/90000000).toFixed(2)
    ,value:(x[1]/100)/5
  }
})
    return (
        <>
       
        <LineChart width={600} height={400} data={objectData}>
         <XAxis dataKey="time"/>
         <YAxis dataKey="value"/>
         <CartesianGrid stroke="white" strokeDasharray="5 5"/>
         <Line  dataKey="value" stroke="purple" />
       </LineChart>
     
        </>
       )
}
