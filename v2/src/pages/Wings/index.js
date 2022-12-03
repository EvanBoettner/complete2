import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import WingA from "../../components/assets/floormap.png";
import WingB from "../../components/assets/floormap2.png";
import "./index.css";
import "../../App.scss";


const Locations = () => {
    return (
      <div>
        <Navbar/>
        <h1 className="location__prompt">Select A Location</h1>
        <div className="sliderr">
          <div className="Image1">
            <h3>Research Park Awing</h3>
            <Link to="/home/awing">
              <img src={WingA} alt="A"></img>
            </Link>
          </div>
          <div className="Image2">
            <h3>Research Park Bwing</h3>
            <Link to="/home/bwing">
              <img src={WingB} alt="B"></img>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Locations;