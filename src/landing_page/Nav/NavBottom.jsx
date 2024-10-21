import React from "react";
import "./NavBottom.css";
import { useState, useEffect } from "react";

function NavBottom() {
  let [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav-bottom ${isScroll ? "shrunk" : ""}`}>
      <div
        className={`nav-bottom-inside ${
          isScroll ? "nav-bottom-inside-small" : ""
        }`}
      >
        <div className={`experience ${isScroll ? "experience-remove" : ""}`}>
          <p className="stay">Stays</p>
          <p className="experien">Experiences</p>
        </div>
        <div className={`search-bar ${isScroll ? "search-bar-small" : ""}`}>
          <div
            className="search-contain-small-cover"
            style={{ display: isScroll ? "block" : "none" }}
          >
            <div className="search-contain-small">
              <p>Anywhere</p>
              <span></span>
              <p>Any week</p>
              <span></span>
              <p>Add guests</p>
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>

          <div className="search-contain-cover">
            <div className={isScroll ? "" : "search-contain"}>
              <div className="where">
                <p>Where</p>
                <p className="font-gray">Search destinations</p>
              </div>
              <span></span>
              <div className="check">
                <div className="check-in">
                  <p>Check in</p>
                  <p className="font-gray">Add dates</p>
                </div>
                <span></span>
                <div className="check-out">
                  <p>Check out</p>
                  <p className="font-gray">Add dates</p>
                </div>
              </div>
              <span></span>
              <div className="who">
                <div className="add-guest">
                  <p>Who</p>
                  <p className="font-gray">Add guests</p>
                </div>
                <div className="search-icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="search-contain-after-740">
            <div className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="where-to">
              <p>Where to?</p>

              <ul>
                <li>Anywhere</li>
                <span></span>
                <li>Any week</li>
                <span></span>
                <li>Add guests</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBottom;
