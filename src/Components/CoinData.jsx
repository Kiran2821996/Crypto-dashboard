import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';




const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
export default function CoinData() {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };


   
    const [coinData,setCoinData]= useState({})
    useEffect(()=>{
    async function getdata(){
        const response = await axios.get("https://api.coingecko.com/api/v3/coins/bitcoin")
        //  console.log(response.data)
         setCoinData({...response.data})
    }
    getdata()

},[])
  return (
  <>
    {/* {
        // console.log(!coinData==={})
        // console.log(Object.keys(coinData).length === 0)
        !(Object.keys(coinData).length === 0)?
    <div>
            <p>{coinData.name}</p>
             <img src= {coinData.image.large} alt="Not Found"/>
             <p>Current price of 1 bitcoin is &nbsp; $ {coinData.market_data.ath.usd}</p>
             <p>Rank in crypto Market : &nbsp; No.{coinData.market_cap_rank}</p>
    </div>:
    null
        } */}
        
<Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title="Shrimp and Chorizo Paella"
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
            Current Price : <Typography varient = "p" color ="red"> $ {coinData.market_data.ath.usd}</Typography>
        </Typography>
        <Typography variant="h5" color="black">
            Rank : No.  {coinData.market_cap_rank}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        </CardActions>
    </Card>
</>
  )
}
