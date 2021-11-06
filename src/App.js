import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import Seat from "./Seat";
import Dish from "./Dish";

const App = () => {
  return (
    <div>
      <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/seat" element={<Seat />}></Route>
          <Route path="/dish" element={<Dish />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
