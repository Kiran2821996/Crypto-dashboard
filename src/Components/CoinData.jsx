import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function CoinData() {
    const [coinData,setCoinData]= useState([])
    useEffect(()=>{
    async function getdata(){
        const response = await axios.get("https://api.coingecko.com/api/v3/coins/bitcoin")
         console.log(response.data)
         setCoinData(response.data)
    }
    getdata()
},[])
  return (<>
    {
    <div>
            <p>{coinData.name}</p>
             <img src= {coinData.image.large} alt="Not Found"/>
             <p>Current price of 1 bitcoin is &nbsp; $ {coinData.market_data.ath.usd}</p>
             <p>Rank in crypto Market : &nbsp; No.{coinData.market_cap_rank}</p>
    </div>
        }
</>
  )
}
