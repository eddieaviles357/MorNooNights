import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
    return (
        <nav className="Nav">
            <Link to='/'>Home</Link>
            <ul>
                <li><NavLink to='/profile'>Profile</NavLink></li>
            </ul>
        </nav>
    )
}