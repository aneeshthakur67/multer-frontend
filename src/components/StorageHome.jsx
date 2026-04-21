import React from "react";
import "../pages/HomePage.css";
import { NavLink } from "react-router-dom";
const StorageHome = () => {
  return (
    <div className="storage-section">
      <div className="storage-inner">
        <div className="storage-text">
          <h2>Get Your Free Storage</h2>
          <p>0 GB of 15 GB used</p>
        </div>
        <div className="storage-bar-wrap">
          <div className="storage-bar-label">
            <span>Photos &amp; Videos</span>
            <span>0% used</span>
          </div>
          <div className="storage-bar-track">
            <div className="storage-bar-fill" />
          </div>
          <div className="storage-legend">
            <div className="legend-item">
              <div className="legend-dot" style={{ background: "#1a73e8" }} />
              Photos (0 GB)
            </div>
            <div className="legend-item">
              <div className="legend-dot" style={{ background: "#34a853" }} />
              Videos (0 GB)
            </div>
            <div className="legend-item">
              <div className="legend-dot" style={{ background: "#e0e0e0" }} />
              Free (0 GB)
            </div>
          </div>
        </div>
        <NavLink className="upgrade-btn" to="/login">Get Storage</NavLink>
      </div>
    </div>
  );
};

export default StorageHome;
