import React, { useState } from "react";
import "./YourQAndA.css";

function YourQAndA() {
  const [activeQuestion, setActiveQuestion] = useState([false, false, false]);

  let handleDropDown = (index) => {
    const updatedClickState = [...activeQuestion];

    // Toggle the clicked question's boolean value without affecting others
    updatedClickState[index] = !updatedClickState[index];

    // Update the state
    setActiveQuestion(updatedClickState);
  };


  return (
    <div className="yourQandA-container">
      <h1>
        Your questions, <br /> answered
      </h1>
      <div className="question-container">
        <div className="questions" onClick={() => handleDropDown(0)}>
          <div className="question">
            <p>Top questions</p>
            <i className="fa-solid fa-angle-down"></i>
          </div>
          <div className="question-box" style={{display:activeQuestion[0] ? "block" : null}}>
            <h5>Is my place right for Airbnb?</h5>
            <p>
              Airbnb guests are interested in all kinds of places – spare rooms,
              flats, houses, ,<br /> holiday homes, even treehouses.
            </p>
            <h5>Do I have to host all the time?</h5>
            <p>
              No – you control your calendar. You can host once a year, a few
              nights a month or <br /> more often.
            </p>
            <h5>What are Airbnb’s fees?</h5>
            <p>
              It’s free to create a listing, and Airbnb typically collects a
              service fee of 3% of the <br /> reservation subtotal once you get
              paid. In many areas, Airbnb automatically <br /> collects and pays
              sales and tourism taxes on your behalf.{" "}
              <a href="#">Learn more about fees.</a>
            </p>
          </div>
        </div>
        <div className="questions" onClick={() => handleDropDown(1)}>
          <div className="question">
            <p>Hosting basics</p>
            <i className="fa-solid fa-angle-down"></i>
          </div>
          <div className="question-box" style={{display:activeQuestion[1] ? "block" : null}}>
            <h5>How do I get started?</h5>
            <p>
              You can create a listing in just a few steps, all at your own
              pace. Start by telling us <br /> about your home, take some photos
              and add details about what makes it <br /> unique.{" "}
              <a href="#">Start your listing.</a>
            </p>
            <h5>How do I get my home ready for guests?</h5>
            <p>
              Make sure that your home is clean, clutter-free and that
              everything is working <br /> properly. Items like fresh linen and
              stocked toiletries help create a comfortable <br /> and inviting
              place to stay.
              <a href="#">Check out our guide to getting your home ready.</a>
            </p>
            <h5>How am I protected when I host?</h5>
            <p>
              AirCover for Hosts provides top-to-bottom protection every time
              you host your <br /> home on Airbnb.{" "}
              <a href="#">
                Learn more about AirCover for Hosts and what’s included.
              </a>
            </p>
            <h5>Any tips on being a great host?</h5>
            <p>
              From sharing a list of your favourite local places to responding
              quickly to guest <br /> messages, there are lots of ways to be an
              excellent host. <a href="">Get more hosting tips.</a>
            </p>
          </div>
        </div>
        <div className="questions" onClick={() => handleDropDown(2)}>
          <div className="question">
            <p>Policy & regulations</p>
            <i className="fa-solid fa-angle-down"></i>
          </div>
          <div className="question-box" style={{display:activeQuestion[2] ? "block" : null}}>
            <h5>Are there any regulations that apply in my city?</h5>
            <p>
              Some areas have laws and regulations for hosting your home. It’s
              important to <br /> familiarise yourself with any laws that may
              apply to your location. Also, <br /> depending on where you live,
              you may need to check with your HOA, read your <br /> lease
              agreement or notify your landlord or neighbours about your plans
              to host <br /> on Airbnb.{" "}
              <a href="#">Learn more about responsible hosting.</a>
            </p>
            <h5>What if I have other questions?</h5>
            <p>
              Local hosts are a great source for information and insights. We
              can connect you <br /> with an experienced Airbnb host in your
              area who may be able to answer <br /> additional questions.{" "}
              <a href="#"> Ask a host.</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourQAndA;
