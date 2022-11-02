import React from "react";
import { Link } from "react-router-dom";
import turkey from "./bw-turkey.png";

const Nav = () => {
  return (
    <div className="nav-body">
      <div className="nav-body-half">
        <Link
          style={{
            textDecoration: "none",
            color: "white",
            marginRight: "1rem",
          }}
          to="/"
        >
          <h2>Thanksgiving</h2>
        </Link>
      </div>
      <div className="nav-body-half">
        <Link style={{ textDecoration: "none", color: "white" }} to="/schedule">
          <h3 className="link">SCHEDULE OF EVENTS</h3>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/dishes">
          <h3 className="link">DISHES</h3>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/guests">
          <h3 className="link">GUEST LIST</h3>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
