import React from "react";
import { NavLink } from "react-router-dom";
import { Component, useState } from "react";
import { ImSearch } from "react-icons/im";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  // 1st variable is state, 2nd variable is the function to change it. False is the default value
  const HandleClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen); // if value is true switch to false
  };
  return (
    <nav className="nav-items">
      <h1 className="brand-name">ImperfectSkin</h1>
      <ul>
        <a
          onClick={HandleClick}
          href="#"
          data-testid="toggle-button"
          className="toggle-button"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
      </ul>

      {isOpen && (
        <ul className="nav-links">
          <a href="/">
            <NavLink
              style={{ color: "white", "text-decoration": "none" }}
              to="/"
            >
              H0ME
            </NavLink>
          </a>
          <a>
            <NavLink
              style={{ color: "white", "text-decoration": "none" }}
              to="/shop"
              activeClassName="is-active"
            >
              SHOP
            </NavLink>
          </a>
          <a>
            <NavLink
              style={{ color: "white", "text-decoration": "none" }}
              to="/about"
            >
              ABOUT
            </NavLink>
          </a>
          <a>
            <NavLink
              style={{ color: "white", "text-decoration": "none" }}
              to="/contact"
            >
              CONTACT
            </NavLink>
          </a>
        </ul>
      )}

      <div className="icons">
        <ul>
          <a href="">
            <ImSearch />
          </a>
          <a href="">
   
          </a>
          <a href="">
    
          </a>
        </ul>
      </div>
    </nav>
  );
}
