import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import { ContextPrimary, searchContext } from "./ContextPrimary";

export function CryptoLogo() {
  const { search, setSearch } = useContext(searchContext);
  const [api, setApi] = useState(
    `https://api.coingecko.com/api/v3/coins/${search}`
  );
  const [cryptoLogo, setCryptoLogo] = useState("");

  useEffect(() => {
    async function getData() {
      const response = await axios.get(api);
      console.log(response.data);
    }
    getData();
  }, []);

  return <></>;
}
