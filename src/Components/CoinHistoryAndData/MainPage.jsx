import React from "react";

import CoinData from "./CoinData";
import CurrencyChart from "./CurrencyChart";

import "../CSS/MainPage.css"

export default function MainPage() {

  return (
    <div className="MainPage">
      <div className="ChartnCoin">
        <CoinData  />
        <CurrencyChart />
      </div>
    </div>
  );
}
