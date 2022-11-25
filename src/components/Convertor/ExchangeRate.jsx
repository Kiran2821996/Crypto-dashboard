import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import "../CSS/ExchangeRate.css";
import { Margin } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export function ExchangeRate({
  exchangeRate,
  primaryCurrency,
  secondarycurrency,
}) {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: 50,
          marginTop: 2,
          backgroundColor: "#457b9d",
        }}
      >
        <Stack spacing={2}>
          <Item>
            <div className="exchangeRateContainer">
              <div>
                <h2 className="exchangeRateText">  <img src="https://insmac.org/uploads/posts/2017-08/1503479787_exchange-rates.png" alt="" className="exchangeRateLogo"/> Exchange Rate</h2>
                <div className="currencyChangeRate">
                  <h2 className="fromTo">
                    From {primaryCurrency} to {secondarycurrency} :{" "}
                  </h2>
                  <h1 className="exchangeRateValue">&nbsp;{exchangeRate}</h1>
                </div>
              </div>
            </div>
          </Item>
        </Stack>
      </Box>
    </>
  );
}
