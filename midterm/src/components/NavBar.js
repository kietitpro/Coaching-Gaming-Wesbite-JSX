import React from "react"
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a href="https://google.com" className="brand-logo">Logo</a>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar