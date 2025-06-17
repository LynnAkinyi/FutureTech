import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Facebook, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-columns">
          <div className="footer-column">
            <h3>Home</h3>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/team">Our Team</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>News</h3>
            <ul>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/guides">Guides</Link>
              </li>
              <li>
                <Link to="/help">Help Center</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Blogs</h3>
            <ul>
              <li>
                <Link to="/features">Features</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/download">Download</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Podcasts</h3>
            <ul>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/support">Support</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li>
                <Link to="/privacy">Privacy</Link>
              </li>
              <li>
                <Link to="/terms">Terms</Link>
              </li>
              <li>
                <Link to="/cookies">Cookies</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <Link to="/terms">Terms & Conditions</Link>
            <span className="divider">|</span>
            <Link to="/privacy">Privacy Policy</Link>
          </div>

          <div className="footer-bottom-center">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </a>
          </div>

          <div className="footer-bottom-right">
            <p>
              &copy; {new Date().getFullYear()} TheBlog. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
