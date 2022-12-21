import React from "react";
import { Card, Col, Row } from "antd";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Typography } from "@mui/material";
import {} from "antd";

import "../CSS/MainPage.css";

const { Meta } = Card;

const About = () => (
  <div className="about_main">
    <Typography
      variant="h3"
      color="white"
      textAlign="center"
      paddingTop="2rem"
      gutterBottom
    >
      About Project
    </Typography>
    <Typography
      variant="p"
      color="white"
      fontSize="1.5rem"
      textAlign="center"
      paddingTop="2rem"
      gutterBottom
    >
      This project is developed by a group of three, where each one is
      responsible for making of each of three major components of this app.
      Those are as follows.
    </Typography>
    <Typography
      variant="p"
      color="white"
      fontSize="1.5rem"
      paddingTop="2rem"
      gutterBottom
    >
      <ul>
        <li> Trending @Top 7 Currencies - B.D Kiran Kumar</li>
        <li> Search and Crypto Data Table - Shivansh Rawat</li>
        <li>Crypto Coin Converter & Exchange Rate Teller - Ketan Shetge</li>
      </ul>
      <p>
        {" "}
        The primary function of dashboard is to track cryptocurrencies and coins
        and monitor their historical prices and current values so that you can
        manage crypto related financial plans accordingly.
      </p>

      <p>
        This Project effectively uses the core concepts of react including
        hooks, routes , axios and react libraries - Material UI , React- Charts
        and Ant Design .Which collectively enables us to view the currencies
        history data , exchange rates, Trending etc.{" "}
      </p>
    </Typography>

    <Typography
      variant="h3"
      color="white"
      textAlign="center"
      marginTop="2rem"
      paddingTop="2rem"
      gutterBottom
    >
      Meet The Developers of Dashboard
    </Typography>
    <div className="profileCards">
      <Card
        hoverable
        style={{
          width: 240,
          marginTop: "2rem",
        }}
        cover={
          <img
            alt="example"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQEMjX0D43wc5w/profile-displayphoto-shrink_800_800/0/1655134098103?e=1674086400&v=beta&t=pXjqIpbI0Jpd95Pd4CCCkQ6bnlTuzVrMv4YEEE7irik"
          />
        }
      >
        <Meta title="Ketan Shetge"  />
        <div className="profileLinks">
          <a href="https://www.linkedin.com/in/ketan-shetge-03248a224/">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/ketans2141">
            <GitHubIcon />
          </a>
        </div>
      </Card>

      <Card
        hoverable
        style={{
          width: 240,
          marginTop: "2rem",
        }}
        cover={
          <img
            alt="example"
            src="https://media-exp1.licdn.com/dms/image/D5603AQG0L1s3iI7v9A/profile-displayphoto-shrink_800_800/0/1666935597737?e=1674086400&v=beta&t=9HC6BwSN3-7SpHIHmnz4SoIDXPgahyR0sTBA-ruYehk"
          />
        }
      >
        <Meta title="B.D Kiran Kumar"  />
        <div className="profileLinks">
          <a href="https://www.linkedin.com/in/bdkirankumar/">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/Kiran2821996">
            <GitHubIcon />
          </a>
        </div>
      </Card>

      <Card
        hoverable
        style={{
          width: 240,
          marginTop: "2rem",
        }}
        cover={
          <img
            alt="example"
            src="https://media.licdn.com/dms/image/D4D03AQFhXXfToCt_XQ/profile-displayphoto-shrink_800_800/0/1670418374670?e=1676505600&v=beta&t=BfKaUCukR0KmLUMUe5Ap1KyQFlvIhbD0LpvSMVCkE50"
          />
        }
      >
        <Meta title="Shivansh Rawat" />
        <div className="profileLinks">
          <a href="https://media.licdn.com/dms/image/D4D03AQFhXXfToCt_XQ/profile-displayphoto-shrink_800_800/0/1670418374670?e=1677110400&v=beta&t=HiRH1R5BgYO1IswudDMVbvCUaBlEmg-sup4VZhjUN9w">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/Shivansh3218">
            <GitHubIcon />
          </a>
        </div>
      </Card>
    </div>
  </div>
);

export default About;
