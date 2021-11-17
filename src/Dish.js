import React from "react";
import turkey from "./bw-turkey.png";

const Dish = () => {
  return (
    <div className="page-container">
      <div className="page-title">
        <p>Who's Bringing What</p>
      </div>
      <div className="image">
        <img src={turkey} alt="turkey"/>
      </div>
      <div id="guest-list-container">
        <div className="body-two-cursive guest-list-column" style={{ textAlign: "right" }}>
          <p>Ryan Baker</p>
          <p>Sarah Baker</p>
          <p>Lisa Denney</p>
        </div>
        <div className="body-two-cursive guest-list-column">
          <p>Chris Griffith</p>
          <p>CJ Griffith</p>
          <p>Erin Griffith</p>
          <p>Wesley Griffith</p>
        </div>
        <div className="body-two-cursive guest-list-column">
          <p>Mary Washburn</p>
          <p>Rik Washburn</p>
          <p>Sue Washburn</p>
          <p>Will Washburn</p>
        </div>
      </div>
    </div>
  );
};

export default Dish;
