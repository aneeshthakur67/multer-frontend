import React from "react";

const GalleryLoading = () => {
  return (
    <div className="section">
      <div className="section-header">
        <span className="section-title">Your Gallery</span>
        <button className="section-action">Upload</button>
      </div>
      <div className="files-grid">
        {Array.from({ length: 6 }).map((_, i) => (
          <div className="file-card" key={i}>
            <div
              className="file-thumb"
              style={{
                background: "#f0f0f0",
                animation: "pulse 1.5s ease-in-out infinite",
              }}
            />
            <div className="file-info">
              <div
                style={{
                  height: 12,
                  width: "60%",
                  background: "#e0e0e0",
                  borderRadius: 4,
                  animation: "pulse 1.5s ease-in-out infinite",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Pulse keyframe */}
      <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
        `}</style>
    </div>
  );
};

export default GalleryLoading;
