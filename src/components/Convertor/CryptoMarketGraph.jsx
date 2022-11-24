import React, { PureComponent, useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

export function CryptoMarketGraph() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://frozen-harbor-02472.herokuapp.com/bitcoin`)
      .then((response) => {
        console.log(response.data);
        setMyData(response.data);
      });
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <div>
        <BarChart width={600} height={500} data={myData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="market_cap_rank" fill="#83c5be" />
          <Tooltip />
        </BarChart>
      </div>
    </ResponsiveContainer>
  );
}
