import React from "react";

const Home = () => {
  return (
    <div>
      <div className="body">
        <div className="body-half" id="body-two">
          <div id="body-two-heading-container">
            <div className="body-two-heading">
              <p>WHEN</p>
              <i class="fab fa-pagelines"></i>
              <p>THURSDAY, NOVEMBER 26 @ 1:00 PM</p>
            </div>
            <div className="body-two-heading">
              <p>WHERE</p>
              <i class="fab fa-pagelines"></i>
              <p>20 ROOS ROAD, EAST SANDWICH, MA 02537</p>
            </div>
          </div>
          <div id="body-two-title">
            <h1>Thanksgiving Dinner</h1>
          </div>
          <div className="body-two-subtitle">
            <p>HOSTED BY</p>
          </div>
          <div className="body-two-cursive">
            <p>Will, Mary & Tubby Washburn</p>
          </div>
          <div className="body-two-paragraph">
            <p>
              Join us for food, catching up, and then probably more food. Come
              hungry!
            </p>
          </div>
        </div>
        <div className="body-half" id="body-one">
          <h2>Please join us for a gathering of</h2>
          <h1>family, friends, & food</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
