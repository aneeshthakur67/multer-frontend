import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <div className="header-left">
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

      {/* Right nav */}
      <div className="header-right">
        <NavLink
          className={({ isActive }) => {
            isActive ? "nav-link-btn active" : "nav-link-btn";
          }}
          to="/gallery"
        >
          Gallery
        </NavLink>
        <NavLink className="sign-in-btn" to="/login">
          Login
        </NavLink>
      </div>
    </header>
  );
}
