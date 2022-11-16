import { Button, Input } from "antd";
import Search from "antd/lib/transfer/search";
import React from "react";
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import { SearchContext } from "../Contexts/searchContext";

import "./HeaderNav.css";

function HeaderNav() {
  let [value, setValue] = useState("");
  const { search, setSearch } = useContext(SearchContext);
  
  const [showSearch, setShowSearch] = useState(true);

  const searchFunction = () => setSearch(value);

  const handleChange = (e) => setValue(e.target.value);

  const handleShowSearch = () => setShowSearch(false);

  const handleHideSearch = () => setShowSearch(true);

  return (
    <div className="nav_link">
      <NavLink to={"/"} end>
        <h3 onClick={handleHideSearch}>TRENDS @ TOP 7</h3>
      </NavLink>
      {"---------------"}
      {showSearch ? (
        <NavLink to={"/search-a-coin"}>
          {" "}
          <h3 onClick={handleShowSearch}>Search a Coin</h3>
        </NavLink>
      ) : (
        <NavLink to={"/search-a-coin"}>
        <Input.Group compact>
      <Input
        style={{
          width: '20rem',
        }}
        defaultValue= {value}
         onChange={handleChange}
      />
      <Button type="primary" onClick={searchFunction}>Submit</Button>
    </Input.Group>

        </NavLink>
      )}

      {"---------------"}
      <NavLink to={"/coin-convertor"}>
        <h3 onClick={handleHideSearch}>Coin Converter</h3>
      </NavLink>
    </div>
  );
}

export default HeaderNav;
