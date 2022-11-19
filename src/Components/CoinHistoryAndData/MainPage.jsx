import React from "react";

import CoinData from "./CoinData";
import CurrencyChart from "./CurrencyChart";

import "../CSS/MainPage.css"
import CoinTable from "./CoinTable";

export default function MainPage() {

  return (
    <div className="MainPage">
      <div className="ChartnCoin">
        <CoinData  />
        <CurrencyChart />
      </div>
      <CoinTable/>
    </div>
  );
}
