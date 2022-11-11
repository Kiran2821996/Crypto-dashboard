import React from "react";

function TrendItems({ data }) {
  return (
    <div>
      {data.map((item, idx) => {
        return (
          <div className="trend_block_item" key={idx}>
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
    </div>
  );
}

export default TrendItems;
