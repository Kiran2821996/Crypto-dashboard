import React from 'react'
import CoinData from './CoinData'
import CurrencyChart from './CurrencyChart'
import MenuAppBar from './MenuAppBar'
import './MainPage.css'
import { SearchContext } from './Contexts/searchContext'
import { useContext } from 'react'
export default function MainPage() {

  let search =useContext(SearchContext)

  return (
   <>
   {/* <h1>{search.search}</h1> */}
   <MenuAppBar/>
   <div className='ChartnCoin'>
   <CoinData/>
   <CurrencyChart/>
   </div>
   

   </>
  )
}
