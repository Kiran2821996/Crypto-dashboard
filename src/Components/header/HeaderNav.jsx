import React from "react";
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import { SearchContext } from "../Contexts/searchContext";

import "./HeaderNav.css";

function HeaderNav() {
  let [value, setValue] = useState("");
  const { search, setSearch } = useContext(SearchContext);

  const searchFunction = () => setSearch(value);

  const handleChange = (e) => setValue(e.target.value);

  return (
    <div className="nav_link">
      <NavLink to={"/"} end>
        TRENDS @ TOP 7
      </NavLink>
      {"---------------"}

      <NavLink to={"/search-a-coin"}>
        <input
          className="inputField"
          type="text"
          onChange={handleChange}
          value={value}
          placeholder="Search your crypto..."
        />
        <button className="searchBtn" onClick={searchFunction}>
          Search
        </button>
      </NavLink>
      {"---------------"}
      <NavLink to={"/coin-convertor"}>COIN CONVERTOR</NavLink>
    </div>
  );
}

export default HeaderNav;
