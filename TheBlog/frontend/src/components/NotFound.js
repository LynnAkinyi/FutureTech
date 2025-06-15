import React from "react";
import { Link } from "react-router-dom";
import NotFoundImage from "../assets/404.png";

function NotFound() {
  return (
    <div
      className="not-found"
      style={{ backgroundImage: `url(${NotFoundImage})` }}
    >
      <div className="not-found-content">
        <h2>OOPS!</h2>
        <p>The page you're looking for doesn't exist.</p>
        <Link to="/">Go Back to Home Page</Link>
      </div>
    </div>
  );
}

export default NotFound;
