import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav-body">
            <h2>Thanksgiving</h2>
            <div className="nav-body-half">
                <h3>PICK A</h3>
                <Link style={{ textDecoration: "none", color: "white" }} to="/dish"><h3 className="link">DISH</h3></Link>
                <Link style={{ textDecoration: "none", color: "white" }} to="/seat"><h3 className="link">SEAT</h3></Link>
            </div>
        </div>
    )
}

export default Nav

