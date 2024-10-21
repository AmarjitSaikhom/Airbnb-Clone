import React from "react";
import NavTop from "../Nav/NavTop";
import "./Wishlists.css";

function Wishlists() {
  return (
    <div className="wishlist-container">
      <div className="wishlist-nav">
        <NavTop />
      </div>
      <div className="wishlist-cards">
        <h1>Wishlists</h1>
        <div className="wishlist-item">
          <div className="wishlist-card">
            <div className="recently-view">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <h5>Recently viewed</h5>
            <p>Today</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlists;
