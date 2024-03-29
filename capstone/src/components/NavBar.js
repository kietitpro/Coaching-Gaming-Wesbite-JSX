import React from "react";
import {NavLink} from "react-router-dom";
import logo from "../images/logo.png";

const NavBar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <ul>
          <li>
            <NavLink
              to="/"
              className="brand-logo"
              activeStyle={{background: "transparent"}}
            >
              <h4>GameUp</h4>
              <img src={logo} alt="logo" width="65" height="65" />
            </NavLink>
          </li>
        </ul>

        <ul className="right">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/service">Service</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
