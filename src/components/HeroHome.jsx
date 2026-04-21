import React from "react";
import { NavLink } from "react-router-dom";
import "../pages/HomePage.css";

const HeroHome = () => {
  return (
    <section className="hero">
      <h1>
        Store, share &amp; discover
        <br />
        <span className="hero-gradient-text">beautiful photos</span>
      </h1>
      <p>
        One secure place for all your images. Access from any device, share with
        anyone, and find anything instantly with AI-powered search.
      </p>
      <div className="hero-actions">
        <NavLink className="btn-white" to="/gallery">
          Go to Gallery
        </NavLink>
        <NavLink className="btn-outline-white" to="/signup">
          Get started free
        </NavLink>
      </div>
      <div className="hero-stats">
        <div className="hero-stat">
          <span className="hero-stat-num">15 GB</span>
          <span className="hero-stat-label">Free storage</span>
        </div>
        <div className="hero-stat">
          <span className="hero-stat-num">2B+</span>
          <span className="hero-stat-label">Photos stored</span>
        </div>
        <div className="hero-stat">
          <span className="hero-stat-num">190+</span>
          <span className="hero-stat-label">Countries</span>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
