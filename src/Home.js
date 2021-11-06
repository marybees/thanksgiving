import React from 'react';

import Nav from "./Nav";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="body">
        <div className="body-half" id="body-two">
          <div id="body-two-heading-container">
            <div className="body-two-heading">
              <p>WHEN</p>
              <p>THURSDAY, NOVEMBER 26</p>
            </div>
            <div className="body-two-heading">
              <p>WHERE</p>
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
          <div>
            <p>Join us for food, catching up, and then probably more food. Come hungry!</p>
          </div>
        </div>
        <div className="body-half" id="body-one">
          <h2>Please join us for a gathering of</h2>
          <h1>family, friends, & food</h1>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home

