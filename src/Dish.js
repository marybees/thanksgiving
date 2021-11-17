import React from "react";
import turkey from "./bw-turkey.png";

const Dish = () => {
  return (
    <div className="page-container">
      <div className="page-title">
        <div>Who's Bringing What</div>
      </div>
      <div className="image">
        <img src={turkey} alt="turkey"/>
      </div>
      <div id="dish-list-container">
        <div>
          <p>
            <div className="cursive">Ryan Baker:</div>
            <div>Heavy cream & ice cream</div>
          </p>
          <p>
            <div className="cursive">Sarah Baker & Lisa Denney:</div>
            <div>Turnip gratin, sweet potato rounds & oatmeal chocolate chip cookies</div>
          </p>
          <p>
            <div className="cursive">The Griffiths:</div>
            <div>Green bean casserole, wine & beer</div>
          </p>
          <p>
            <div className="cursive">The Washburns (II):</div>
            <div>Butternut squash & cranberry pie</div>
          </p>
          <p>
            <div className="cursive">The Washburns (III):</div>
            <div>Turkey, gravy, stuffing, biscuits, mashed potatoes, mixed berry pie & pumpkin pie</div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dish;
