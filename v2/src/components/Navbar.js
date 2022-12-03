// import React from "react";
// import { Link } from "react-router-dom";
// import "./styles/Navbar.css";


// function Navbar() {
//   return (
//     <div className="sum">
//       <div className="logo">GE Rocket Booking</div>
//       <nav className="item">
//         <ul className="ul">
//           <li>
//             <Link to="/home">Home</Link>
//           </li>
//           <li>
//             <Link to="/home/rbooking">Reservation</Link>
//           </li>
//           <li>
//             <Link to="/home/bookings">Admin</Link>
//           </li>
//           <li>
//             <Link to='/'>Logout</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;

import "../App.scss";
import '../index';
import RocketLogo from "./assets/rblogo.svg";
import RocketIcon from "./assets/rbicon.svg";
import {
  Navbar,
  Button,
  Container,
  Nav,
  NavItem,
  NavLink,
  NavDropdown,
  Form,
  Stack,
} from "react-bootstrap";

function Nbar() {
  return (
    <div>
      <header>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <div>
                <img src={RocketIcon} alt="RocketBookingIcon" />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <NavDropdown title="Cubicle Booking" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/home/rbooking">
                    Waukesha
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/home/awing">
                    Research Park Awing
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/home/bwing">
                    Research Park Bwing
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/home/bookings">
                    Admin Page
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/">Sign Out</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      {/* <div>
        <hr></hr>
      </div>
      <div className="row-fluid">
        <center>
          <img className="Logo" src={RocketLogo} alt="RocketBookingLogo" />
        </center>
      </div> */}
    </div>
  );
}
export default Nbar;

