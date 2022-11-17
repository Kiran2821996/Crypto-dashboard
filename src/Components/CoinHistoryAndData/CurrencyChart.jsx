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
import Select from "@mui/material/Select";
import axios from "axios";

import { SearchContext } from "../Contexts/searchContext";

import "../CSS/MainPage.css";

export default function CurrencyChart() {
  const [data, setdata] = useState([]);
  const { search, setSearch } = useContext(SearchContext);
  const [currency, setCurrency] = useState("usd");
  const [api, setApi] = useState(
    `https://api.coingecko.com/api/v3/coins/${search}/market_chart?vs_currency=${currency}&days=10&interval=daily`
  );

  const handleCurrency = (e) => {
    setCurrency(e.target.value);
    setApi(
      `https://api.coingecko.com/api/v3/coins/${search}/market_chart?vs_currency=${e.target.value}&days=10&interval=daily`
    );
  };

  useEffect(() => {
    async function getdata() {
      const response = await axios.get(api);
      setdata(response.data.prices);
    }
    
    getdata();
  }, [search, currency]);

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
      <h1 className="headingOfChart">
        {" "}
        The below chart shows currency price of past month
      </h1>
      <div className="currencyChartHeading">
        <InputLabel id="demo-simple-select-label">Select Currency </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currency}
          label="Age"
          style={{ height: "1.6rem", marginLeft: "0.5rem" }}
          onChange={handleCurrency}
        >
          <MenuItem value={"eur"}>Euro</MenuItem>
          <MenuItem value={"usd"}>Dollar</MenuItem>
          <MenuItem value={"inr"}>Rupee</MenuItem>
          <MenuItem value={"jpy"}>Yen</MenuItem>
          <MenuItem value={"gbp"}>British Pound</MenuItem>
        </Select>
      </div>

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
