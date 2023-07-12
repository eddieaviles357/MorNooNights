import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../homepage/Home";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";

export default function AppRoutes({ login, signup}) {
  return(
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm login={login} />}></Route>
        <Route path="/signup" element={<SignupForm signup={signup} />}></Route>
    </Routes>
  )
}
