import React,{useState,useEffect} from 'react'
// import { BarChart, Bar } from "recharts";
import axios from 'axios';
import './Coinlist.css'
import { Carousel } from 'antd';
const contentStyle = {
    display:"flex",
    height: '60px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

function CoinList() {
    const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then((response) => {
        setData([...response.data]);
        console.log(response.data)
      });
  }, []);
  return (
    <div >
       <Carousel autoplay="true" dots="false">
       {data.map((item) => {
      return (
        
          <div style={contentStyle}>
            <div  style={{display:"flex",justifyContent: "center",
          alignItems: "center",marginTop:"1%"}}>
            <img src={item.image} width={50} alt="" />
            <div className='coinList-details'>
              <p>
                {item.name}({item.symbol})-{item.current_price} INR
              </p>
             
            </div>
          
            </div>
           
           
          </div>
        
      );
    })}</Carousel>  
    
  </div>
  )
}


export default CoinList;

// import React from 'react';

// const App = () => (
//   <Carousel autoplay>
//     <div>
//       <h3 >1</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>2</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>3</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>4</h3>
//     </div>
//   </Carousel>
// );
// export default App;