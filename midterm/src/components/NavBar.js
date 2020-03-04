import React from "react"
import { NavLink } from "react-router-dom"
import logo from "../images/logo.png"

const NavBar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <ul>
                    <li><NavLink to="/" className="brand-logo" activeStyle={{background: "transparent"}}><img src={logo} alt="logo" width="65" height="65"/></NavLink></li>
                </ul>

                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>

                {/* <ul className="center">
                    <li><NavLink to="/">GameUp</NavLink></li>
                </ul> */}

                <h4 className="center">Game Up</h4>
            </div>
        </nav>
    )
}

export default NavBar