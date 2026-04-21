import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { makeApiRequest } from "../utils/apiService"; 
import "./Auth.css";

const Signup = () => {
  const navigate = useNavigate(); // Hook to redirect user after successful signup

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // New state variables for API handling
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await makeApiRequest(
        "http://localhost:4000/api/user/file/register",
        "POST",
        formData,
      );
      navigate("/login");
    } catch (err) {
      console.error("Signup failed:", err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false); // Stop the loading spinner/state
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="logo-container">
          <div className="app-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.5 20.25L9 12.75L13.5 20.25H4.5Z" fill="#0066da" />
              <path d="M9 12.75L13.5 5.25H19.5L15 12.75H9Z" fill="#00ac47" />
              <path
                d="M15 12.75L19.5 5.25L22.5 10.25L18 17.75L15 12.75Z"
                fill="#ea4335"
              />
              <path
                d="M13.5 20.25H19.5L22.5 15.25H16.5L13.5 20.25Z"
                fill="#00832d"
              />
              <path
                d="M4.5 20.25L7.5 15.25H13.5L10.5 20.25H4.5Z"
                fill="#2684fc"
              />
              <path d="M9 12.75L4.5 5.25H10.5L15 12.75H9Z" fill="#ffba00" />
            </svg>
          </div>
          <span className="app-name">
            Pixel<span>Drive</span>
          </span>
        </div>

        <h1 className="auth-title">Create your Account</h1>
        <p className="auth-subtitle">to continue to your app</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          {/* Display API Errors at the top of the form */}
          {error && (
            <div
              style={{
                color: "#ea4335",
                backgroundColor: "#fce8e6",
                padding: "10px",
                borderRadius: "4px",
                marginBottom: "16px",
                fontSize: "14px",
                textAlign: "center",
              }}
            >
              {error}
            </div>
          )}

          <div className="input-group">
            <input
              type="text"
              name="name"
              className="auth-input"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={loading} // Disable input while loading
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              className="auth-input"
              placeholder="Email or phone"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              className="auth-input"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>

          <div className="auth-actions">
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? "Creating..." : "Next"}
            </button>
          </div>

          <div className="bottom-text">
            Already have an account?{" "}
            <Link to="/login" className="bottom-link">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
