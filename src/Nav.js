import React from "react";
import { Link } from "react-router-dom";

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
        <Link style={{ textDecoration: "none", color: "white" }} to="/dish">
          <h3 className="link">PICK A DISH</h3>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/seat">
          <h3 className="link">GUEST LIST</h3>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
