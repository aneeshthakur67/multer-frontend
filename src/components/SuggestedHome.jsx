import React from "react";

const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=75",
    title: "Alpine Solitude",
    color: "#1a73e8",
    bg: "#e8f0fe",
  },
  {
    src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=400&q=75",
    title: "Golden Hour",
    color: "#ea4335",
    bg: "#fce8e6",
  },
  {
    src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&q=75",
    title: "Autumn Path",
    color: "#34a853",
    bg: "#e6f4ea",
  },
  {
    src: "https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?w=400&q=75",
    title: "Mountain Lake",
    color: "#fbbc04",
    bg: "#fef7e0",
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=75",
    title: "Last Light",
    color: "#1a73e8",
    bg: "#e8f0fe",
  },
];

const SuggestedHome = () => {
  return (
    <div className="section" id="suggested">
      <div className="section-header">
        <span className="section-title">Suggested</span>
        <button className="section-action">View all</button>
      </div>
      <div className="files-grid">
        {PHOTOS.map((p) => (
          <div className="file-card" key={p.title}>
            <div className="file-thumb" style={{ background: p.bg }}>
              <img src={p.src} alt={p.title} loading="lazy" />
            </div>
            <div className="file-info">
              <div className="file-type-dot" style={{ background: p.color }} />
              <span className="file-name">{p.title}</span>
              <span className="file-menu">⋮</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedHome;
