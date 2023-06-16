import React from 'react';

import "./App.css";
import Home from "./pages/Home";

import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
