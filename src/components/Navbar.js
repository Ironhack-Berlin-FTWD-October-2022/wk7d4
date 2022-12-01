import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "selected p-3" : "p-3")}
        >
          HOMEPAGE
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "selected p-3" : "p-3")}
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "selected p-3" : "p-3")}
        >
          PROJECTS
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "selected p-3" : "p-3")}
        >
          CONTACT
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
