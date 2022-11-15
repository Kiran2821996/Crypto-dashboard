import React from "react";
import { NavLink } from "react-router-dom";

import "./HeaderNav.css";

function HeaderNav() {
  return (
    <div>
      <div className="nav_link">
      <NavLink to={"/"} end>
        TRENDS @ TOP 7
      </NavLink>
      {"---------------"}
      <NavLink to={"/search-a-coin"}>SEARCH A COIN</NavLink>
      {"---------------"}
      <NavLink to={"/coin-convertor"}>COIN CONVERTOR</NavLink>
     
    </div>
    <div className="logo">
       <img  src="./861bac90cbe64151929e1d382c2b0a52.png" alt="Logo" />
    </div>
    </div>
    
  );
}

export default HeaderNav;
