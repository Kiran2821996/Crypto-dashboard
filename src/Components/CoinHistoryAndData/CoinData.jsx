import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

import { SearchContext } from "../Contexts/searchContext";

export default function CoinData() {
  const { search, setSearch } = useContext(SearchContext);
  const [coinData, setCoinData] = useState({});
  let [api, setApi] = useState(
    `https://api.coingecko.com/api/v3/coins/${search}`
  );
  useEffect(() => {
    async function getdata() {
      var response = await axios.get(api);
      setCoinData({ ...response.data });
    }
    getdata();
  }, [search]);

  const {
    name,
    image,
    market_data,
    market_cap_rank,
    sentiment_votes_up_percentage,
  } = coinData;

  return (
    <>
      {!(Object.keys(coinData).length === 0) ? (
        <Card
          sx={{ maxWidth: 450 }}
          style={{ backgroundColor: "rgb(241, 250, 238)" , width:"25vw"}}
        >
          <CardHeader title={name} subheader="October 29 2022" />
          <CardMedia 
          style={{width:"200px"}}
            component="img"
            height="auto"
            image={image.large}
            alt="Image not found"
          />
          <CardContent>
            <Typography
              variant="h6"
              color="black"
              style={{ display: "flex", alignItems: "baseline" }}
            >
              Current Price :
              <Typography  variant="h6" color="red"> ${market_data.ath.usd}</Typography>
            </Typography>
            <Typography
              variant="h6"
              color="black"
              style={{ display: "flex", alignItems: "baseline" }}
            >
              Rank : No.&nbsp;  <Typography variant="h6" color="red">{market_cap_rank}</Typography>
            </Typography>
            <Typography
              variant="h6"
              color="black"
              style={{ display: "flex", alignItems: "baseline" }}
            >
              Market upvote: &nbsp;
              <Typography color="red">
                {sentiment_votes_up_percentage}%
              </Typography>
            </Typography>
            <Typography
              variant="h6"
              color="black"
              style={{ display: "flex", alignItems: "baseline" }}
            >
             Volume:  &nbsp; 
              <Typography variant="h6" color="red">{coinData.tickers[0].volume.toFixed(2)}</Typography>
            </Typography>
          </CardContent>
          <CardActions disableSpacing></CardActions>
        </Card>
      ) : null}
    </>
  );
}
