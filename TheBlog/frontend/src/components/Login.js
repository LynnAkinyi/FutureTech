import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.login(credentials);
      console.log("Login component response:", response); // Debug log

      if (response.token) {
        setSuccess(true);
        setError("");
        console.log("Setting success state:", true); // Debug log

        // Increase delay
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      } else {
        setError("Login failed - no token received");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(err.message || "Invalid credentials");
    }
  };

  return (
    <div className="container">
      <div className="left-container"></div>
      <div className="auth-form">
        <h2>Login</h2>
        {error && <div className="error">{error}</div>}
        {success && <div className="success">Login successful!</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
