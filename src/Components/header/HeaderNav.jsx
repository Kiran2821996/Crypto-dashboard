import React from "react";
import { NavLink } from "react-router-dom";

import "./HeaderNav.css";

function HeaderNav() {
  return (
    <div className="nav_link">
      <NavLink to={"/"} end>
        TRENDS @ TOP 7
      </NavLink>
      {"---------------"}
      <NavLink to={"/search-a-coin"}>SEARCH A COIN</NavLink>
      {"---------------"}
      <NavLink to={"/coin-convertor"}>COIN CONVERTOR</NavLink>
    </div>
  );
}

export default HeaderNav;
