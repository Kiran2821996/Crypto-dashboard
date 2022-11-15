import React from "react";
import { useState, useEffect, useContext } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import Typography from "@mui/material/Typography";
import axios from "axios";

import { SearchContext } from "../Contexts/searchContext";

export default function CurrencyChart() {
  let [data, setdata] = useState([]);
  let { search, setSearch } = useContext(SearchContext);
  let [api, setApi] = useState(
    `https://api.coingecko.com/api/v3/coins/${search}/market_chart?vs_currency=usd&days=10&interval=daily`
  );

  useEffect(() => {
    async function getdata() {
      const response = await axios.get(api);
      setdata(response.data.prices);
    }
    getdata();
  }, [search]);

  let objectData = data.map(function (x) {
    var a = new Date(x[0] * 1000);
    var date = a.getDate();
    return {
      day: date,
      value: x[1],
    };
  });

  objectData.sort((a, b) => {
    return a.day - b.day;
  });

  return (
    <div className="CurrencyChart">
      <Typography
        variant="subtitle1"
        gutterBottom
        style={{ marginLeft: "12%", marginTop: "1%", marginBottom: "0", color:"#364d79" }}
      >
        History Chart shows performance of crypto value by days for the past
        month in USD.
      </Typography>
      <AreaChart
        width={650}
        height={400}
        data={objectData}
        margin={{ top: 30, right: 10, left: 30, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#16c1db" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#16c1db" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="day" />
        <YAxis dataKey="value" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="day"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </div>
  );
}
