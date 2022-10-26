import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h3>Foodway</h3>
        <div className="navbar-left-links">
          <span>Home</span>
          <span>Insta mart</span>
        </div>
      </div>
      <div className="navbar-right">
        <button>Login</button>
      </div>
    </div>
  );
}

export default Navbar;
