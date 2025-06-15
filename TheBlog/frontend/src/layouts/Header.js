import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-content">
        <div className="logo-section">
          <Link to="/" className="logo">
            TheBlog
          </Link>
        </div>

        <nav className="main-nav">
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
          </ul>
        </nav>

        <div className="contact-section">
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
