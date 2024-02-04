import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar" id="mainNav">
        <ul>
          <img src="../public/vite.svg" alt="" id="logo" />
          <a href="">
            <li>Home</li>
          </a>
          <a href="">
            <li>Contact</li>
          </a>
          <a href="">
            <li>About us</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
