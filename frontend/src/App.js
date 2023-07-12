import React, { useState, useEffect } from 'react';
import "./App.css";
import Navigation from "./components/routes-nav/Navigation"
import AppRoutes from "./components/routes-nav/Routes"
import jwt from "jsonwebtoken";
import useLocalStorage from "./components/hooks/useLocalStorage";
import MorNooNightsNewsAPI from "./api/api";
import UserContext from "./components/auth/UserContext";

// Used for storing token in localStorage for "remember me" re-login
export const TOKEN_STORAGE_ID = "mornoonightsnews-token";

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

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
  function logout() {
    setCurrentUser(null);
    setToken(null);
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

  if (!infoLoaded) return <div>Loading...</div>;

  return (
    <div className="App">
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <Navigation logout={logout}/>
        <AppRoutes login={login} signup={signup}/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
