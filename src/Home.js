import React from 'react';

import Nav from "./Nav";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="body">
        <div className="body-half" id="body-two">
          <div id="body-two-heading">
            <div id="body-two-left-heading">
              <h2>WHEN</h2>
              <h2>THURSDAY, NOVEMBER 26</h2>
            </div>
            <div id="body-two-right-heading">
              <h2>WHERE</h2>
              <h2>20 ROOS ROAD, EAST SANDWICH, MA 02537</h2>
            </div>
          </div>
          <div id="body-two-title">
              <h1>THANKSGIVING DINNER</h1>
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
          <div className="body-two-subtitle">
              <p>GUEST LIST</p>
          </div>
          <div id="guest-list-container">
            <div className="body-two-cursive guest-list-column">
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
            <div className="body-two-cursive guest-list-column">
              <p>Noël Briand</p>
              <p>Donna Higgie</p>
            </div>
          </div>
        </div>
        <div className="body-half" id="body-one">
          <h2>Please join us for a gathering of</h2>
          <h1>family, friends, and food</h1>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home

