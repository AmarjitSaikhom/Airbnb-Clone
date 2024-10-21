import React from "react";
import AirbnbNav from "./AirbnbNav";
import AirbnbIt from "./AirbnbIt";
import EasyAirbnb from "./EasyAirbnb";
import AirCover from "./AirCover";
import YourQAndA from "./YourQAndA";
import StillHaveQ from "./StillHaveQ";
import Footer from "../footer/FooterPage";

function AirbnbYourHomePage() {
  return (
    <>
      <AirbnbNav />
      <AirbnbIt />
      <EasyAirbnb />
      <AirCover />
      <YourQAndA />
      <StillHaveQ />
      <Footer />
    </>
  );
}

export default AirbnbYourHomePage;
