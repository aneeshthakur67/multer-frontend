import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { set, useForm } from "react-hook-form";
import { makeApiRequest } from "../utils/apiService";
import "./Auth.css";
import { useUserContext } from "../context/UserContext";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {setUserData} = useUserContext() || {};
  console.log(context);
  const onSubmit = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await makeApiRequest(
        "http://localhost:3000/api/user/login",
        "POST",
        data,
      );
      setUserData(response.data)
      console.log("Login successful:", response);
      navigate("/");
    } catch (err) {
      console.error("Login failed:", err);
      setError(err.message || "Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
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

        <h1 className="auth-title">Sign in</h1>

        <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
          {/* Display API Errors */}
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
              type="email"
              className="auth-input"
              placeholder="Email or phone"
              disabled={loading}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="error-text">{errors.email.message}</span>
            )}
          </div>

          <div className="input-group">
            <input
              type="password"
              className="auth-input"
              placeholder="Password"
              disabled={loading}
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <span className="error-text">{errors.password.message}</span>
            )}
          </div>

          <div className="auth-actions">
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? "Signing in..." : "Next"}
            </button>
          </div>

          <div className="bottom-text">
            Don't have an account?{" "}
            <Link to="/signup" className="bottom-link">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
