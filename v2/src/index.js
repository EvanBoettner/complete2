import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Rbooking from "./pages/Rbooking";
import AllBookings from "./pages/Bookings";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="" element={<Login />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path='/home/rbooking' element={<Rbooking />}></Route>
        <Route path="/home/bookings" element={<AllBookings />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
