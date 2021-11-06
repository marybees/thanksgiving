import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Seat from "./Seat";
import Dish from "./Dish";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/seat" element={<Seat />}></Route>
          <Route path="/dish" element={<Dish />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
