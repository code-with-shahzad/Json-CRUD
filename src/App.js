import React from "react";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/SignUp";
import Details from "./components/Details";
import "./App.css";
import Api from "./components/Api";

const App = () => {
  return (
    <>
      <Api />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </>
  );
};

export default App;
