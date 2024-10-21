import React from "react";
import "./FooterTop.css";

function FooterTop() {
  return (
    <div className="footer-top">
      <div className="support">
        <h3>Support</h3>
        <p>Help Centre</p>
        <p>Get help with a safety issue</p>
        <p>AirCover</p>
        <p>Anti-discrimination</p>
        <p>Disability support</p>
        <p>Cancellation options</p>
        <p>Report neighbourhood concern</p>
      </div>
      <div className="hosting">
        <h3>Hosting</h3>
        <p>Airbnb your home</p>
        <p>AirCover for Hosts</p>
        <p>Hosting resources</p>
        <p>Community forum</p>
        <p>Hosting responsibly</p>
        <p>Join a free Hosting class</p>
      </div>
      <div className="airbnb">
        <h3>Airbnb</h3>
        <p>Newsroom</p>
        <p>New features</p>
        <p>Careers</p>
        <p>Investors</p>
        <p>Airbnb.org emergency stays</p>
      </div>
    </div>
  );
}

export default FooterTop;
