import React, { useEffect, useState } from 'react'
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import axios from 'axios'

function Trending() {
    const [data,setData]= useState([]);
   
    useEffect(()=>{
        axios.get("https://api.coingecko.com/api/v3/search/trending")
        .then(response=>{
            
            setData([...response.data.coins])
            // console.log(...response.data.coins)
        })
    },[])
  return (
    <div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:'100vw'}}>
        <AreaChart
    width={800}
    height={300}
    data={data}
    margin={{
      top: 10,
      right: 30,
      left: 0,
      bottom: 0
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="item.name" />
    <YAxis dataKey="item.market_cap_rank" reversed="true"/>
    <Tooltip />
    <Area type="monotone" dataKey="item.market_cap_rank" stroke="#8884d8" fill="#8884d8" />

  </AreaChart>
  <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={500}
      height={500}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="item.name" />
      <PolarRadiusAxis />
      <Radar
       
        dataKey="item.price_btc"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
        </div>
            
    <div>
        {data.map((item)=>{
            return(
                <div>
                    <p>{item.item.name}({item.item.symbol})</p>
                    <p>{item.item.price_btc} BTC</p>
                    <img src={item.item.small} alt="" />
                </div>
            )
        })}
    </div>
 
    </div>
   
   

    
  )
}

export default Trending