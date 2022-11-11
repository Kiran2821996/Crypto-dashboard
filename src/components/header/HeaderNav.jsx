import React from 'react'
import {  NavLink } from "react-router-dom";

import "./HeaderNav.css";

function HeaderNav() {
  return (
    <div className='nav_link'>
      <NavLink  to={"/"} end>
              TRENDS @ TOP 7
            </NavLink>
            {"---------------"}
            <NavLink to={"/shivansh-component"} >
            shivansh-component
            </NavLink>
            {"---------------"}
            <NavLink to={"/ketan-component"} >
            ketan-component
            </NavLink>
    </div>
  )
}

export default HeaderNav