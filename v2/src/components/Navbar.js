import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";


function Navbar() {
  return (
    <div className="sum">
      <div className="logo">GE Rocket Booking</div>
      <nav className="item">
        <ul className="ul">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/home/rbooking">Reservation</Link>
          </li>
          <li>
            <Link to="/home/bookings">Bookings</Link>
          </li>
          <li>
            <Link to='/'>Logout</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
