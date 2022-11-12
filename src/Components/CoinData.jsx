import { useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { SearchContext } from './Contexts/searchContext';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';

export default function CoinData() {
const {search,setSearch} = useContext(SearchContext)
    const [coinData,setCoinData]= useState({})
    useEffect(()=>{
    async function getdata(){
          var response = await axios.get(`https://api.coingecko.com/api/v3/coins/${search}`)
         setCoinData({...response.data})
    }
    getdata()

},[search])
  return (
  <>

        {
         !(Object.keys(coinData).length === 0)?
<Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={coinData.name}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="auto"
        image={coinData.image.large}
        alt="Image not found"
      />
      <CardContent>
        <Typography variant="h5" color="black" style={{display:"flex", alignItems:"baseline"}}>
            Current Price : <Typography  color ="red"> $ {coinData.market_data.ath.usd}</Typography>
        </Typography>
        <Typography variant="h5" color="black" style={{display:"flex", alignItems:"baseline"}}>
            Rank : No. <Typography color ="red">{coinData.market_cap_rank}</Typography> 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        </CardActions>
    </Card>
    :

    null
}
</>
  )
}
