import React from "react";

const GalleryError = ({ message }) => {
  console.log(message);
  return (
    <div className="section">
      <div className="section-header">
        <span className="section-title">Your Gallery</span>
        <button className="section-action">Upload</button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px 16px",
          gap: 12,
        }}
      >
        <span style={{ fontSize: 40 }}>⚠️</span>
        <p style={{ color: "#ea4335", fontWeight: 500, margin: 0 }}>
          {message}
        </p>
      </div>
    </div>
  );
};

export default GalleryError;
