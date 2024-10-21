import React from "react";
import { Link } from "react-router-dom";
import "./AirbnbNav.css";

function AirbnbNav() {
  return (
    <div className="airbnbNav-container">
      <Link to="/">
        <img src="media\images\A-removebg-preview.png" className="logo-1" />
      </Link>
      <div className="airbnb-setup">
        <button>
          List your home
        </button>
      </div>
    </div>
  );
}

export default AirbnbNav;
