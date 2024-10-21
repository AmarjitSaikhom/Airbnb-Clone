import React from "react";
import NavTop from "../Nav/NavTop";
import "./Tips.css";

function Tips() {
  return (
    <div className="trips-container">
      <div className="trips-nav">
        <NavTop />
      </div>
      <div className="trips">
        <h1>Trips</h1>
      </div>
      <div className="trips-book">
        <h2>No trips booked... yet!</h2>
        <p>
          Time to dust off your bags and start planning your next adventure.
        </p>
        <button>Start searching</button>
      </div>
      <div className="visit-help-center">
        <p>
          Can’t find your reservation here? <a href="">Visit the Help Centre</a>
        </p>
      </div>
    </div>
  );
}

export default Tips;
