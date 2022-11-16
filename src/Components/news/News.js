import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "antd";

import "./News.css";

const News=()=>{
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=crypto&from=2022-10-11&sortBy=publishedAt&apiKey=72635734611e40d5b63c90dc5248f92b"
      )
      .then((response) => {
        setData([...response.data.articles]);
      });
  }, []);
  return (
    <Carousel autoplay="true" dotPosition="right" className="caroosel_left">
      {data.map((item,idx) => {
        return (
          <div className="contentStyle" key={idx}>
            <a href={item.url} target="blank">
              <h1 className="news_header">{item.title}</h1>
            </a>
            <img
              className="image-headline"
              src={item.urlToImage}
              alt="Unavailable"
              width={"360px"}
            />
          </div>
        );
      })}
    </Carousel>
  );
}

export default News;
