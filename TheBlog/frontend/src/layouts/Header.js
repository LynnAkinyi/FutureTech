import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="main-header">
      <div className="header-content">
        <div className="logo-section">
          <Link to="/" className="logo">
            TheBlog
          </Link>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`main-nav ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/podcast">Podcast</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
            <li>
              <Link to="/resources">Contact Us</Link>
            </li>
          </ul>
        </nav>

        <div className="contact-section">
          <Link to="/login">Login</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
