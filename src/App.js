import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import Seat from "./Seat";
import Dish from "./Dish";
import Schedule from './Schedule';

const App = () => {
  return (
    <div>
      <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/guests" element={<Seat />}></Route>
          <Route path="/dishes" element={<Dish />}></Route>
          <Route path="/schedule" element={<Schedule />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
