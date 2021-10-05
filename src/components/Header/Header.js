import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  // navbar

  return (
    <div className="nav">
      <div>
        <h2 className='brand'>Digital IT Center</h2>
      </div>
      <div className='navLink-container'>
        <NavLink className="nav-link" to="/home">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/services">
          Services
        </NavLink>
        <NavLink className="nav-link" to="/about">
          About Us
        </NavLink>
        <NavLink className="nav-link" to="/contract">
          Contract Us
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
