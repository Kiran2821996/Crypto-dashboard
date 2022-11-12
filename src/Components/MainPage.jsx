import React from "react";
import CoinData from "./CoinData";
import CurrencyChart from "./CurrencyChart";
import MenuAppBar from "./MenuAppBar";

import "./MainPage.css";

export default function MainPage() {
  return (
    <>
      <MenuAppBar />
      <div className="ChartnCoin">
        <CoinData />
        <CurrencyChart />
      </div>
    </>
  );
}
