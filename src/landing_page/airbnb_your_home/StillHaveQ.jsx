import React from "react";
import "./StillHaveQ.css";

function StillHavQ() {
  return (
    <div className="stillHaveQ-container">
      <h1>Still have questions?</h1>
      <h3>Get answers from an experienced local host.</h3>
      <button>Ask a host</button>
      <div className="co-host">
        <p>
          Hosts on the Co‑Host Network typically have high ratings, low
          cancellation rates and established Airbnb hosting experience. Ratings
          are based on guest reviews for <br /> listings they host or co‑host
          and may not represent the co‑host’s unique services.
        </p>
        <p>
          Co‑Host Network is powered by Airbnb Global Services Limited, Airbnb
          Living LLC and Airbnb Plataforma Digital Ltda. Available in select
          locations only. <br /> <a href="#">Learn more.</a> 
        </p>
      </div>
    </div>
  );
}

export default StillHavQ;
