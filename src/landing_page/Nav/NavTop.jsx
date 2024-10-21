import React, { useState } from "react";
import "./NavTop.css";
import { Link } from "react-router-dom";

function NavTop() {
  const [isNone, setIsNone] = useState(false);

  function handleSideBarMenu() {
    setIsNone(!isNone);
  }

  return (
    <div className="nav-top">
      <div className="nav-top-left">
        <Link to="/">
          <img src="media\images\A-removebg-preview.png" className="logo-1" />
        </Link>
        <Link to="/">
          <img src="media/images/logo1.png" className="logo-2" />
        </Link>
      </div>
      <div className="nav-top-middle"></div>
      <div className="nav-top-right">
        <div className="airbnb-your-home">
          <p>Airbnb your home</p>
          <i className="ri-global-line"></i>
        </div>
        <div className="side-menu" onClick={handleSideBarMenu}>
          <div className="side-menu-cover">
            <i className="fa-solid fa-bars"></i>
            <div className="user-icon">S</div>
          </div>
        </div>
        <div className={`side-menu-bar ${isNone ? "visible" : ""}`}>
          <ul>
            <li>
              <Link className="link" to="/message">
                Message
              </Link>
            </li>
            <li>
              <Link className="link" to="/tips">
                Tips
              </Link>
            </li>
            <li>
              <Link className="link" to="/wishlists">
                Wishlists
              </Link>
            </li>
            <div></div>
            <li>
              <Link className="link" to="/airbnbYourHome">
                Airbnb your home
              </Link>
            </li>
            <li>
              <Link className="link" to="/hostAnExperience">
                Host an experience
              </Link>
            </li>
            <li>
              <Link className="link" to="/account">
                Account
              </Link>
            </li>
            <div></div>
            <li>
              <Link className="link" to="/helpCenter">
                Help Center
              </Link>
            </li>
            <li>
              <Link className="link" to="/signIn">
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavTop;
