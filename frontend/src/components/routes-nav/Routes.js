import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../homepage/Home";
import ProfileForm from "../profiles/ProfileForm";

export default function Navigation(params) {
  return(
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfileForm />} />
    </Routes>
  )
}
