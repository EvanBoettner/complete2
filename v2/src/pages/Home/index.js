import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import HomeImage1 from '../../components/assets/ResearchPark.jpg';
import HomeImage2 from '../../components/assets/WaukeshaCampus.jpg';
import RocketLogo from '../../components/assets/rblogo.svg';
import './index.css';
import '../../App.scss';

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div>
          <hr></hr>
        </div>
        <div className="row-fluid">
          <center>
            <img className="Logo" src={RocketLogo} alt="RocketBookingLogo" />
          </center>
        </div>
        <h1 className="location__prompt">Select A Location</h1>
        <div className="sliderr">
          <div className="Image1">
            <h3>Research Park</h3>
            <Link to="/home/wings">
              <img src={HomeImage1} alt="research"></img>
            </Link>
          </div>
          <div className="Image2">
            <h3>Waukesha Campus</h3>
            <Link to="/home/rbooking">
              <img src={HomeImage2} alt="waukesha"></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
