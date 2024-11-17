import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const { username, password } = formData;
    if (username === "admin" && password === "password") {
      localStorage.setItem("token", "dummyToken"); // Simulated token
      navigate("/dashboard"); // Redirect to the dashboard
    } else {
      setError("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Physiyoga Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
