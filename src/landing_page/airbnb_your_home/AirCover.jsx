import React from "react";
import "./AirCover.css";

function AirCover() {
  return (
    <div className="airCover">
      <img src="media\images\AirCover.webp" alt="" />
      <h1>
        However you host, <br /> you’re protected
      </h1>
      <p>
        Top-to-bottom protection, included every time <br /> you host your home
        on Airbnb.
      </p>
      <div className="airCover-insurance">
        <div
          className="damage-protection"
          style={{ borderBottom: "1px solid #d4c7c7" }}
        >
          <p>Up to $3m USD damage protection</p>
          <i className="fa-solid fa-check"></i>
        </div>
        <div
          className="damage-protection"
          style={{ borderBottom: "1px solid #d4c7c7" }}
        >
          <p>Up to $1m USD liability insurance</p>
          <i className="fa-solid fa-check"></i>
        </div>
        <div className="damage-protection">
          <p>24-hour safety line</p>
          <i className="fa-solid fa-check"></i>
        </div>
      </div>
      <button>Learn about AirCover</button>
    </div>
  );
}

export default AirCover;
