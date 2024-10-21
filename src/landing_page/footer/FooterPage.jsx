import React from "react";
import FooterTop from "./FooterTop";
import "./FooterPage.css";

function FooterPage() {
  return (
    <div className="footer">
      <span></span>
      <FooterTop />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>© 2024 Airbnb, Inc.</p>
          <div className="footer-bottom-left-ancor">
            <span></span>
            <a href="">Privacy</a>
            <span></span>
            <a href="">Terms</a>
            <span></span>
            <a href="">Sitemap</a>
            <span></span>
            <a href="">Company details</a>
          </div>
        </div>
        <div className="footer-bottom-right">
          <div className="globe">
            <i className="ri-global-line"></i>
            <a href="">English(IN)</a>
          </div>
          <a href="">₹ INR</a>
          <div className="resources">
            <i className="fa-brands fa-square-facebook"></i>
            <i className="fa-brands fa-square-twitter"></i>
            <i className="fa-brands fa-square-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterPage;
