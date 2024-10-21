import React from "react";
import "./AllCard.css";
import IconCardTop from "./cardHelper/IconCardTop";
import IconExperience from "./cardHelper/IconExperience";

function AllCards() {
  return (
    <div className="container">
      <div className="cards">
        {IconCardTop.map((card) => (
          <div className="card">
            <img src={card.cardImg} alt="" />
            <p className="location-name">{card.cardHeading}</p>
            <p>{card.hostName}</p>
            <p className="price">{card.cardInfo}</p>
          </div>
        ))}
      </div>
      <div className="past-experience">
        <h2>Past experiences</h2>
        <div className="cards">
          {IconExperience.map((card) => (
            <div className="card">
              <img src={card.cardImg} alt="" />
              <p className="location-name">{card.cardHeading}</p>
              <p>{card.hostName}</p>
              <p className="price">{card.cardInfo}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="small-footer">
        <div className="terms">
          <p>© 2024 Airbnb, Inc.</p>
          <span></span>
          <a href="">Privacy</a>
          <span></span>
          <a href="">Terms</a>
          <span></span>
          <a href="">Sitemap</a>
          <span></span>
          <a href="">Company details</a>
        </div>
        <div className="supports">
          <div className="globe">
            <i className="ri-global-line"></i>
            <a href="">English(IN)</a>
          </div>
          <a href="">₹ INR</a>
          <div className="resources">
            <a href="">Support & resources</a>
            <i className="ri-arrow-down-s-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllCards;
