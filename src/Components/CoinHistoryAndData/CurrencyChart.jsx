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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import axios from "axios";

import { SearchContext } from "../Contexts/searchContext";

export default function CurrencyChart() {
  let [data, setdata] = useState([]);
  let { search, setSearch } = useContext(SearchContext);
  const [currency, setCurrency] = useState("usd");
  let [api, setApi] = useState(
    `https://api.coingecko.com/api/v3/coins/${search}/market_chart?vs_currency=${currency}&days=10&interval=daily`
  );

  useEffect(() => {
    async function getdata() {
      const response = await axios.get(api);
      setdata(response.data.prices);
    }
    getdata();
    console.log(data);

  }, [search, currency]);

  const handleCurrency = (e) => {
    console.log(e.target.value);
    setCurrency(e.target.value);
    setApi(`https://api.coingecko.com/api/v3/coins/${search}/market_chart?vs_currency=${currency}&days=10&interval=daily`)
  };
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
      <InputLabel id="demo-simple-select-label">Select Currency </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={currency}
        label="Age"
        onChange={handleCurrency}
      >
        <MenuItem value={"EUR"}>Euro</MenuItem>
        <MenuItem value={"usd"}>Dollar</MenuItem>
        <MenuItem value={"inr"}>Rupee</MenuItem>
      </Select>

      <AreaChart
        width={650}
        height={350}
        data={objectData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis dataKey="value" />
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke="#457B9D" fill="#A8DADC" />
      </AreaChart>
    </div>
  );
}
