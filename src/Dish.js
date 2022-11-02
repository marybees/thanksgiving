import React from "react";
import turkey from "./bw-turkey.png";
import dessert from "./assets/dessert.JPG";

const Dish = () => {
  return (
    <div>
      <div className="body">
        <div className="body-half" id="body-two">
          <div id="body-two-heading-container">
          </div>
          <div id="body-two-title">
            <h1>Who's Bringing What</h1>
            <div className="image">
              <img src={turkey} alt="turkey" />
            </div>
          </div>
          <div className="body-two-paragraph">
            <p>
              <div className="cursive">The Washburns (South):</div>
              <div>Turkey, gravy, stuffing, biscuits, mashed potatoes, pie TBD</div>
            </p>
          </div>
        </div>
        <div className="body-half" id="body-one" style={{ backgroundImage: `url(${dessert})`, transform: 'scale(1, 1)' }}></div>
      </div>
    </div>
  );
};

export default Dish;
