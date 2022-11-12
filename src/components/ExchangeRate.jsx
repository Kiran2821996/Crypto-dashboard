import React from "react";

export function ExchangeRate({exchangeRate,primaryCurrency,secondarycurrency}){
    return(
        <>
        {/* <div>Exchange Rate</div> */}
        <div>
            <h1>Exchange Rate </h1>
            <h2>From {primaryCurrency} to {secondarycurrency} : <span><h1>{exchangeRate}</h1></span></h2>
        </div>
           
        </>
    )
}