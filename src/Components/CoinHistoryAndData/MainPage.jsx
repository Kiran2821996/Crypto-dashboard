import React from "react";
import CoinData from "./CoinData";
import CurrencyChart from "./CurrencyChart";
import MenuAppBar from "./MenuAppBar";

import "../css/MainPage.css"

export default function MainPage() {
  return (
    <div className="MainPage">
      <MenuAppBar />
      <div className="ChartnCoin">
        <CoinData  />
        <CurrencyChart />
      </div>
    </div>
  );
}
