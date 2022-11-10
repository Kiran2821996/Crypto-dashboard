import React from 'react'
import CoinData from './CoinData'
import CurrencyChart from './CurrencyChart'
import MenuAppBar from './MenuAppBar'
export default function MainPage() {
  return (
   <>
   <MenuAppBar/>
   <CoinData/>
   <CurrencyChart/>

   </>
  )
}
