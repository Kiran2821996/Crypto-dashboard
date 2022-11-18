import React from "react";
import "../css/ExchangeRate.css"

export function ExchangeRate({exchangeRate,primaryCurrency,secondarycurrency}){
    return(
        <>
        <div>
            <h1 className="echangeRateText">Exchange Rate </h1>
            <h2>From {primaryCurrency} to {secondarycurrency} : <span><h1>{exchangeRate}</h1></span></h2>
        </div>
           
        </>
    )
}