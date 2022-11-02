import React from "react";
import turkey from "./bw-turkey.png";
import family from "./assets/family.JPG";

const Seat = () => {
  return (
    <div>
      <div className="body">
        <div className="body-half" id="body-two">
          <div id="body-two-title">
            <h1>Guest List</h1>
            <div className="image">
              <img src={turkey} alt="turkey" />
            </div>
          </div>
          <div id="guest-list-container">
            <div className="body-two-cursive guest-list-column">
              <p>Rik Washburn</p>
              <p>Sue Washburn</p>
              <p>Blu Washburn</p>
            </div>
            <div className="body-two-cursive guest-list-column">
              <p>Ryan Baker</p>
              <p>Sarah Baker</p>
              <p>Lisa Denney</p>
              <p>Willie Denney</p>
            </div>
            <div className="body-two-cursive guest-list-column">
              <p>Chris Griffith</p>
              <p>CJ Griffith</p>
              <p>Erin Griffith</p>
              <p>Wesley Griffith</p>
              <p>Winnie Griffith</p>
            </div>
            <div className="body-two-cursive guest-list-column">
              <p>May Washburn</p>
              <p>Tubby Washburn</p>
              <p>Will Washburn</p>
              <p>Mary Washburn</p>
            </div>
            <div className="body-two-cursive guest-list-column">
              <p>Noël Briand</p>
              <p>Donna Higgie</p>
            </div>
          </div>
        </div>
        <div className="body-half" id="body-one" style={{ backgroundImage: `url(${family})`, transform: 'scale(1, 1)' }}></div>
      </div>
    </div>
  );
};

export default Seat;
