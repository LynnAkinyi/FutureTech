import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <header className="nav-header">
      <h1>The Blog</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Home;
