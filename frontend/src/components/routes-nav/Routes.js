import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "../homepage/Home";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import TopNews from "../news/TopNews";

export default function AppRoutes({ login, signup}) {

  return(
    <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/login" element={<LoginForm login={login} />} />
        <Route path="/signup" element={<SignupForm signup={signup} />} />
        {/* Private route -- access to current users or admin */}
        <Route element={<PrivateRoute />}>
          <Route path="/news" element={<TopNews />} />
        </Route>

    </Routes>
  )
}
