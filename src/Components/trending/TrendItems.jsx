import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

function TrendItems({ data }) {
  const [dataShow, setDataShow] = useState([]);
  const [dataClick, setdataClick] = useState("BTC");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${dataClick}/market_chart?vs_currency=inr&days=5&interval=daily`
      )
      .then((res) => setDataShow([...res.data.prices]));
  }, [dataClick]);

  let objectData = dataShow.map(function (x) {
    var a = new Date(x[0] * 1000);
    var date = a.getDate();
    return {
      day: date,
      price: x[1],
    };
  });
  objectData.sort((a, b) => {
    return a.day - b.day;
  });

  const handleClick = (item) => {
    setdataClick(item);
    setToggle(true);
  };

  const handleClose = () => {
    setToggle(false);
  };

  return (
    <div>
      {data.map((item, idx) => {
        return (
          <div
            className="trend_block_item"
            key={idx}
            onClick={(e) => handleClick(item.item.id)}
          >
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
      {toggle && (
        <div className="pop_screen">
          <h1>{dataClick}</h1>
          <button onClick={handleClose}>close</button>
          <AreaChart
            width={630}
            height={350}
            data={objectData}
            margin={{ top: 100, right: 10, left: 30, bottom: 0 }}
          >
            <Legend />
            <XAxis dataKey="day" />
            <YAxis dataKey="price" />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="price"
              stroke="#457B9D"
              fill="#F1FAEE"
              fillOpacity={0.5}
            />
          </AreaChart>
        </div>
      )}
    </div>
  );
}

export default TrendItems;

