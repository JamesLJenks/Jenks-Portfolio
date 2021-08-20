import React from "react"
import {NavLink} from "react-router-dom"


function Navbar() {
  return (
    <div className="App">
      <ul>
          <li>
              <NavLink
                className = "nav-link"
                activeClassName = "active"
                isActive = {
                    () => window.location.pathname === "/about"
                }
                to = "/about"
              >About</NavLink>
          </li>
          <li>
              <NavLink
                className = "nav-link"
                activeClassName = "active"
                isActive = {
                    () => window.location.pathname === "/projects"
                }
                to = "/projects"
              >Projects</NavLink>
          </li>
          <li>
              <NavLink
                className = "nav-link"
                activeClassName = "active"
                isActive = {
                    () => window.location.pathname === "/contact"
                }
                to = "/contact"
              >Contact</NavLink>
          </li>
          <li>
              <NavLink
                className = "nav-link"
                activeClassName = "active"
                isActive = {
                    () => window.location.pathname === "/resume"
                }
                to = "/resume"
              >Resume</NavLink>
          </li>
      </ul>
    </div>
  );
}

export default Navbar;
