import React, { useState, useEffect } from 'react';
import Navigation from "./components/routes-nav/Navigation"
import AppRoutes from "./components/routes-nav/Routes"
import useLocalStorage from "./components/hooks/useLocalStorage";
import UserContext from "./components/auth/UserContext";
import { BrowserRouter } from 'react-router-dom';
import MorNooNightsNewsAPI from "./api/api";
import jwt from "jsonwebtoken";
import "./App.css";

// Used for storing token in localStorage for "remember me" re-login
export const TOKEN_STORAGE_ID = "mornoonightsnews-token";

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [visitedNews, setVisitedNews] = useLocalStorage("recents");

  console.debug("currentUser", currentUser, "token", token);

  useEffect(function loadUserInfo() {
    console.debug("App useEffect loadUserInfo", "token=", token);

    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          // add token to api class so we can interact with
          MorNooNightsNewsAPI.token = token;
          let currentUser = await MorNooNightsNewsAPI.getCurrentUser(username);
          setCurrentUser(currentUser);
        } catch (err) {
          console.error("App loadUserInfo: problem loading", err);
          setCurrentUser(null);
        }
      };
      setInfoLoaded(true);
    }

    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);

  // Handles site logout.
  async function logout() {
    try {
      const { username } = currentUser;
      const data = { recents: JSON.parse(visitedNews) };
      await MorNooNightsNewsAPI.updateRecents(username, data);
    } catch (errors) {
      alert("failed to update recents", errors);
    }
    setCurrentUser(null);
    setToken(null);
    setVisitedNews(null);
    // update recent news
  }

  /** Handles site signup.
 *
 * Automatically logs them in (set token) upon signup.
 *
 */
  async function signup(signupData) {
    try {
      let token = await MorNooNightsNewsAPI.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  };

  // Handles site login.

  async function login(loginData) {
    try {
      let token = await MorNooNightsNewsAPI.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  };

  const updateRecentlyVisited = (news) => {
    // if no data is available set to empty array
    const visited = JSON.parse(visitedNews) || [];
    const updatedNews = {...news, visitedAt: new Date().toGMTString() }
    // allows only 5 entries
    if(visited.length >= 5) visited.shift(); // remove 1st entry
    visited.push(updatedNews)
    console.log("__HANDLE_CLICK__", visited)
    // stringify visited news and update values
    setVisitedNews( _ => JSON.stringify(visited) )
  }

  if (!infoLoaded) return <div className="text-center">Loading...</div>;

  return (
    <div className="App">
    <BrowserRouter>
      <UserContext.Provider value={{ 
        currentUser, 
        setCurrentUser, 
        visitedNews, 
        setVisitedNews,
        updateRecentlyVisited
        }}>
        <Navigation logout={logout}/>
        <AppRoutes login={login} signup={signup}/>
      </UserContext.Provider>
    </BrowserRouter>
    </div>
  );
}

export default App;
