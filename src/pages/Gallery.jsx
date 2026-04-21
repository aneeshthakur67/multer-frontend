import React from "react";

const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=75",
    title: "City Lights",
    color: "#1a73e8",
    bg: "#e8f0fe",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&q=75",
    title: "Ocean Breeze",
    color: "#34a853",
    bg: "#e6f4ea",
  },
  {
    src: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=400&q=75",
    title: "Forest Walk",
    color: "#ea4335",
    bg: "#fce8e6",
  },
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&q=75",
    title: "Desert Dunes",
    color: "#fbbc04",
    bg: "#fef7e0",
  },
  {
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&q=75",
    title: "Snow Peaks",
    color: "#1a73e8",
    bg: "#e8f0fe",
  },
  {
    src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=400&q=75",
    title: "Sunset Glow",
    color: "#ea4335",
    bg: "#fce8e6",
  },
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

const Gallery = () => {
  return (
    <div className="section">
      <div className="section-header">
        <span className="section-title">Your Gallery</span>
        <button className="section-action">Upload</button>
      </div>

      <div className="files-grid">
        {GALLERY_IMAGES.map((img) => (
          <div className="file-card" key={img.title}>
            <div className="file-thumb" style={{ background: img.bg }}>
              <img src={img.src} alt={img.title} loading="lazy" />
            </div>

            <div className="file-info">
              <div
                className="file-type-dot"
                style={{ background: img.color }}
              />
              <span className="file-name">{img.title}</span>
              <span className="file-menu">⋮</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
