import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
    setError("");

    try {
      const response = await api.login(credentials);

      if (response.token) {
        // Store token
        localStorage.setItem("token", response.token);

        // Show success notification
        setSuccess(true);

        // Navigate after animation
        setTimeout(() => {
          setSuccess(false);
          navigate("/dashboard");
        }, 3000);
      } else {
        setError("Login failed - Please try again");
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.message ||
          "Login failed - Please check your credentials"
      );
    }
  };

  return (
    <div className="container">
      <div className="left-container"></div>
      <div className="auth-form">
        <h2>Welcome Back!</h2>
        <p>Please login to your account</p>
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
        <div className="register-link">
          <p>Don't have an account?</p>
          <Link to="/register">Register here</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
