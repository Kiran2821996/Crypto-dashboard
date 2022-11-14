import React from "react";

import CoinData from "./CoinData";
import CurrencyChart from "./CurrencyChart";
import MenuAppBar from "./MenuAppBar";

import "./CSS/MainPage.css";

export default function MainPage() {
  return (
    <>
      <MenuAppBar />
      <div className="ChartnCoin">
        <CoinData className="Se" />
        <CurrencyChart />
      </div>
    </>
  );
}
