import React, { useState, useEffect, useContext } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Card } from "antd";
import axios from "axios";

import { ExchangeRate } from "./ExchangeRate";
import { CryptoLogo } from "./CryptoLogo";
import { searchContext } from "./ContextPrimary";
import { searchContextOne } from "./ContextSecondary";

import "../css/CryptoConvertor.css";

export function CryptoConvertor() {
  const { search, setSearch } = useContext(searchContext);
  const { searchOne, setSearchOne } = useContext(searchContextOne);

  const currencies = ["BTC", "ETH", "USDC", "INR", "XRP", "LTC", "ADA"];
  const [primaryCurrency, setPrimaryCurrency] = useState("BTC");
  const [secondaryCurrency, setSecondaryCurrency] = useState("USDC");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(0);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [url, setUrl] = useState("https://alpha-vantage.p.rapidapi.com/query");
  const [cryptoLogoPrimary, setCryptoLogoPrimary] = useState([]);
  const [cryptoLogoSecondary, setCryptoLogoSecondary] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${primaryCurrency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((response) => {
        setCryptoLogoPrimary(response.data);
      });
  }, [primaryCurrency]);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${secondaryCurrency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((response) => {
        setCryptoLogoSecondary(response.data);
      });
  }, [secondaryCurrency]);

  const handleConvert = () => {
    const options = {
      method: "GET",
      url: url,
      params: {
        from_currency: "BTC",
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: "USD",
      },
      headers: {
        "X-RapidAPI-Key": "5880e8a812msh9940b0966e5ae28p1931d5jsn669cb51ffb1c",
        "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setExchangeRate(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
        setResult(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"] *
            amount
        );
      })
      .catch(function (error) {});
  };

  const handleSelectPrimary = (e) => {
    setPrimaryCurrency(e.target.value);
    setSearch(e.target.value);
  };

  const handleSelectSecondary = (e) => {
    setSecondaryCurrency(e.target.value);
    setSearchOne(e.target.value);
  };

  return (
    <>
      <div className="convertorConatainer">
        <div className="site-card-border-less-wrapper">
          <Card
            title="Primary Currency"
            className="primaryCard"
            bordered={true}
            style={{ width: 400 }}
          >
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              InputLabelProps={{ shrink: true }}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">Crypto</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={primaryCurrency}
                label="Crypto"
                onChange={handleSelectPrimary}
              >
                {currencies.map((currency, index) => (
                  <MenuItem key={index} value={currency}>
                    {currency}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Card>

          <Card
            title="Secondary Currency"
            bordered={true}
            style={{ width: 400 }}
          >
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              InputLabelProps={{ shrink: true }}
              value={result}
              disabled={true}
            />

            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">Crypto</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={secondaryCurrency}
                label="Crypto"
                onChange={handleSelectSecondary}
              >
                {currencies.map((currency, index) => (
                  <MenuItem key={index} value={currency}>
                    {currency}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Card>

          <div className="btn-exchange-rate-container">
            <Button
              className="convertBtn"
              variant="contained"
              sx={{ backgroundColor: "#1d3557", color: "#f1faee" }}
              onClick={handleConvert}
            >
              Convert
            </Button>
            <div className="exChangeRateDisplay">
              <ExchangeRate
                exchangeRate={exchangeRate}
                primaryCurrency={primaryCurrency}
                secondarycurrency={secondaryCurrency}
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            {cryptoLogoPrimary.map((item) => {
              {
                if (item.symbol === search.toLowerCase()) {
                  return <img src={item.image} className="cryptoIcon" alt="" />;
                }
              }
            })}

          </div>
          <div>
            {cryptoLogoSecondary.map((item) => {
              {
                if (item.symbol === searchOne.toLowerCase()) {
                  return <img src={item.image} className="cryptoIconOne" alt="" />;
                }
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}
