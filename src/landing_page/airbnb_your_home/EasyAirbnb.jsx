import React from "react";
import "./EasyAirbnb.css";

function EasyAirbnb() {
  return (
    <div className="easyAirbnb-container">
      <h1>
        It’s easy to list your <br /> home on Airbnb
      </h1>
      <img src="media\images\phone-image.webp" />
      <div className="easyAirbnb-create-listing">
        <div className="easyAirbnb-listing-icons">
          <i className="fa-solid fa-house"></i>
          <p>
            Create a listing for your <br /> place in just a few steps
          </p>
        </div>
        <div className="easyAirbnb-listing-icons">
          <i className="fa-regular fa-clock"></i>
          <p>
            Go at your own pace, and <br /> make changes whenever
          </p>
        </div>
        <div className="easyAirbnb-listing-icons">
          <i className="fa-regular fa-message"></i>
          <p>
            Get 1:1 support from <br /> experienced hosts at any time
          </p>
        </div>
      </div>
      <button>List your home</button>
    </div>
  );
}

export default EasyAirbnb;
