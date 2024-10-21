import React, { useState, useEffect } from "react";
import "./AirbnbIt.css";

function AirbnbIt() {
  const [sliderValue, setSliderValue] = useState(1); // State for slider display
  const [progressWidth, setProgressWidth] = useState("0%"); // State for progress width
  const [tooltipPosition, setTooltipPosition] = useState("0%"); // State for tooltip/slider thumb position
  const [isDragging, setIsDragging] = useState(false);

  // Handle the slider value change
  const handleSliderChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    setSliderValue(newValue);
  };

  // This effect runs when the slider value changes to update the UI dynamically
  useEffect(() => {
    let maxValue = 30;
    let progressPercentage = (sliderValue / maxValue) * 100 + "%";
    setProgressWidth(progressPercentage);
    let tooltipPercentage = (sliderValue / maxValue) * 58 + "%";
    setTooltipPosition(tooltipPercentage);
  }, [sliderValue]);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="airbnbIt-container">
      <div className="airbnbIt-left">
        <h1>
          Your home could <br />
          make ₹<span>{(2691 * sliderValue).toLocaleString("en-IN")}</span>{" "}
          <br /> on Airbnb
        </h1>

        <div className={isDragging ? "night-on" : ""}>
          <p>
            <span>{sliderValue} nights</span> ₹2,691/night
          </p>
          <p>
            <a href="#">
              Learn how we <span>estimate earnings</span>
            </a>
          </p>
        </div>
        {/* Custom range slider */}
        <div className="range-slider">
          <input
            type="range"
            min="1"
            max="30"
            value={sliderValue}
            className="slider"
            onChange={handleSliderChange}
            step="1"
            onMouseDown={handleMouseDown} // Start dragging
            onMouseUp={handleMouseUp} // Stop dragging
            onTouchStart={handleMouseDown} // Handle touch events
            onTouchEnd={handleMouseUp}
          />
          <div
            className={`tooltip ${isDragging ? "block" : ""}`}
            style={{ left: tooltipPosition }}
          >
            {sliderValue} {sliderValue > 1 ? "nights" : "night"}
          </div>
          <div
            className={`progress ${isDragging ? "active-progress" : ""}`}
            style={{ width: progressWidth }}
          ></div>
        </div>

        <div className="airbnbIt-left-search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <p>Kolkata</p>
          <p className="muted-color">Entire place</p>
          <p className="muted-color">2 bedrooms</p>
        </div>
      </div>
      <div className="airbnbIt-right">
        <img src="media/images/map.png" alt="map" />
      </div>
    </div>
  );
}

export default AirbnbIt;
