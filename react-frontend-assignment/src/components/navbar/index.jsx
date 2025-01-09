import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./style.css";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileMenuClose, setShowMobileMenuClose] = useState(false);

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbarGrid">
          <h1>Frontend assignment</h1>
          <nav className="desktopMenu">
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="mobileMenuIcon">
            {showMobileMenuClose ? (
              <FaTimes />
            ) : (
              <FaBars />
            )}
          </div>
          {showMobileMenu && (
            <nav className="mobileMenu">
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Product</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
