import React, { useState } from "react";

const Dish = () => {
//   const [value, setValue] = useState("");
//   const [dishList, setDishList] = {}

//   const dish = (guestName, dishInput) => {
//     `${guestName}: ${dishInput[guestName]}`;
//   }

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };

//   const handleSubmit = (e) => {
//       e.preventDefault();
//       setDishList(dish)

//   }

  return (
    <div className="page-container">
      <div className="page-title">
        <p>Bring a Dish</p>
      </div>
      <form>
        <label>
          Select your name:
          <select>
            <option>Ryan Baker</option>
            <option>Sarah Baker</option>
            <option>Lisa Denney</option>
            <option>Chris Griffith</option>
            <option>CJ Griffith</option>
            <option>Erin Griffith</option>
            <option>Wesley Griffith</option>
            <option>Mary Washburn</option>
            <option>Rik Washburn</option>
            <option>Sue Washburn</option>
            <option>Will Washburn</option>
            <option>Noël Briand</option>
            <option>Donna Higgie</option>
          </select>
        </label>
        <input type="text"  name="dish"  />
        {/* value={value} */}
        {/* onChange={handleChange} */}
        <button >submit</button>
        {/* onSubmit={handleSubmit} */}
      </form>
    </div>
  );
};

export default Dish;
