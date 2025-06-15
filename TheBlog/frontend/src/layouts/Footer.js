import React from "react";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} TheBlog. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
