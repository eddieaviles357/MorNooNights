import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navigation.css";
import UserContext from "../auth/UserContext"; 

export default function Navigation({ logout }) {
  
  const {currentUser} = useContext(UserContext);
  // console.log("NAVIGATION CURR_USER::", currentUser);
  // displays when user is logged in
  function loggedInNav() {
    return (
        <ul>
          <li>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/recents">Recents</NavLink>
            <NavLink to="/search">Search</NavLink>
            <NavLink to="/" onClick={logout}>
              Log out {currentUser.first_name || currentUser.username}
            </NavLink>
          </li>
        </ul>
    );
  };
  // displays when user is logged out or is a new user
  function loggedOutNav() {
    return (
        <ul>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/signup">Sign Up</NavLink></li>
        </ul>
    );
  };

  return (
    <nav className="Nav">
      <Link className="navbar-brand" to="/">
        MorNooNightsNews
      </Link>
      {currentUser ? loggedInNav() : loggedOutNav()}
    </nav>
  );
};