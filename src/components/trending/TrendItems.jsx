import React, { useState } from "react";

function TrendItems({ data }) {
  const [dataClick,setdataClick]=useState("");
  const [toggle,setToggle]=useState(false)

  const handleClick=(item)=>{
setdataClick(item)
setToggle(true)
console.log(dataClick)
  }
  const handleClose=()=>{
    console.log("llll")
     setToggle(false)
  }
  return (
    <div>
      {data.map((item, idx) => {
        return (
          <div className="trend_block_item" key={idx} onClick={(e)=>handleClick(item.item.symbol)}>
            <img src={item.item.small} alt="bit-coin-img" />
            <div>
              <p>
                {item.item.name}({item.item.symbol})
              </p>
              <p>{item.item.price_btc.toFixed(15)} BTC</p>
            </div>
          </div>
        );
      })}
      {toggle &&  <div className="pop_screen">
    <h1>{dataClick}</h1>  
    <button onClick={handleClose}>close</button>
      </div>}
     
    </div>
  );
}

export default TrendItems;
