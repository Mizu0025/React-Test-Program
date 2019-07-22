import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  debugger;
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeStyle={activeStyle} exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/toast" activeStyle={activeStyle}>
            Toast
          </NavLink>
        </li>
        <li>
          <NavLink to="/fileserver" activeStyle={activeStyle}>
            File Server
          </NavLink>
        </li>
        <li>
          <NavLink to="/fileservermanagement" activeStyle={activeStyle}>
            File Server Management
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
