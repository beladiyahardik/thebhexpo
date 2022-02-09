import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Authentication from "../config/auth/Authentication";
import Home from "./home/Home";
import Login from "./login/Login";
import Profile from "./Profile/Profile";
import Signup from "./signup/Signup";

const Pages = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [auth, setAuth] = useState(Authentication.getItem('isLogin'))

  useEffect(() => {
    setAuth(Authentication.getItem('isLogin'))
  }, [location])

  useEffect(() => {
    if (!Authentication.getItem('isLogin')) {
      navigate("/")
    }
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/u/:username" element={<Profile />} />
        <Route path="/error" element={<h1>Error</h1>} />
      </Routes>
      {
        auth == 'true' ? <Footer /> : ''
      }
    </>
  );
};

export default Pages;
