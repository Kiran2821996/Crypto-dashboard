import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/CryptoNews.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export function CryptoNews() {
  const [newsArticle, setNewsArticle] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://crypto-news-live3.p.rapidapi.com/news",
      headers: {
        "X-RapidAPI-Key": "5880e8a812msh9940b0966e5ae28p1931d5jsn669cb51ffb1c",
        "X-RapidAPI-Host": "crypto-news-live3.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setNewsArticle(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  console.log(newsArticle);

  return (
    <>
      <div>
        <h1 className="newsFeedHeading">News Feed</h1>
        <div className="newsTitleCard">
          {newsArticle?.map((item, index) => {
            return (
              <Card sx={{ maxWidth: 275, margin: "20px",backgroundColor:"#a8dadc" }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {<a href={item.source}>{item.source}</a>}
                  </Typography>
                  <Typography variant="body2" sx={{ height: "70px" }}>
                    <strong>{item.title}</strong>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    sx={{ backgroundColor: "#1d3557" }}
                    className="readMoreBtn_"
                  >
                    {" "}
                    <a href={item.url} className="readMoreLink">
                      {" "}
                      Read More{" "}
                    </a>
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}
