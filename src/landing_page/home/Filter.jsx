import React from "react";
import "./Filter.css";
import { icons } from "./FilterIcons";

function Filter() {
  function sliderRight() {
    let slider = document.getElementById("slider");
    let leftIcon = document.querySelector(".icon-nevigator-left");

    // Show the left icon immediately when clicking the right button
    leftIcon.style.display = "block";

    // Scroll 500px to the right
    slider.scrollLeft += 1000;
  }

  function sliderLeft() {
    let slider = document.getElementById("slider");
    let leftIcon = document.querySelector(".icon-nevigator-left");

    // Scroll 500px to the left
    slider.scrollLeft -= 1000;

    // Check if scrollLeft is at the start
    if (slider.scrollLeft <= 1000) {
      leftIcon.style.display = "none";
    }
  }

  return (
    <div className="filter">
      <div className="filter-cover">
        <div className="icon-nevigator-left">
          <div className="navigator-arrow" onClick={sliderLeft}>
            <i className="fa-solid fa-chevron-left"></i>
          </div>
        </div>
        <div id="slider" className="filter-icons">
          {icons.map((item) => (
            <div className="icon" key={item.id}>
              <img src={item.img} alt="" />
              <p>{item.iconName}</p>
            </div>
          ))}
        </div>

        <div className="icon-nevigator-right">
          <button className="navigator-arrow" onClick={sliderRight}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
