import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">C.Saravanan</div>
      <div className="links">
        <NavLink exact="true" to="/" activeclassname="active-link">
          Home
        </NavLink>
        <NavLink to="/about" activeclassname="active-link">
          About
        </NavLink>
        <NavLink to="/projects" activeclassname="active-link">
          Projects
        </NavLink>
        <NavLink to="/contact" activeclassname="active-link">
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
