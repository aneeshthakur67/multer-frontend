import React, { useEffect, useState } from "react";
import { makeApiRequest } from "../utils/apiService";
import GalleryLoading from "../components/GalleryLoading";
import GalleryError from "../components/GalleryError";
import UploadModal from "../components/UploadModal";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

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
];

const Gallery = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [gallery, setGallery] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const { userData } = useUserContext(); // ✅ get auth state
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) return;

    async function fetchGallery() {
      setLoading(true);
      setError(null);
      try {
        const response = await makeApiRequest(
          "http://localhost:3000/api/user/gallery",
          "GET",
          null,
        );
        if (response.statusCode === 500) {
          const refreshed = await makeApiRequest(
            "http://localhost:3000/api/user/refresh-token",
            "POST",
            null,
          );
          if (refreshed.statusCode !== 200)
            throw new Error("Session expired. Please log in again.");
          const retry = await makeApiRequest(
            "http://localhost:3000/api/user/gallery",
            "GET",
            null,
          );
          if (retry.statusCode !== 200)
            throw new Error("Failed to fetch gallery after token refresh.");
          setGallery(retry.data);
          return;
        }
        if (response.statusCode !== 200)
          throw new Error("Failed to fetch gallery");
        setGallery(response.data);
      } catch (err) {
        setError(
          err.errors ||
            err.message ||
            "Failed to fetch gallery. Please try again.",
        );
      } finally {
        setLoading(false);
      }
    }
    fetchGallery();
  }, [userData]); // ✅ re-fetch when auth state changes

  const displayImages = gallery.length > 0 ? gallery : GALLERY_IMAGES;

  if (loading) return <GalleryLoading />;
  if (error) return <GalleryError message={error} />;
  console.log(gallery);
  return (
    <div className="section">
      <div className="section-header">
        <span className="section-title">Your Gallery</span>
        {userData && (
          <button className="section-action" onClick={() => setModalOpen(true)}>
            Upload
          </button>
        )}
      </div>

      {displayImages.length === 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "48px 16px",
            gap: 12,
            color: "#aaa",
          }}
        >
          <span style={{ fontSize: 40 }}>🖼️</span>
          <p style={{ margin: 0 }}>No images yet. Upload your first one!</p>
        </div>
      ) : (
        <div className="files-grid">
          {displayImages.map((img) => (
            <div className="file-card" key={img.title || img._id}>
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
      )}

      {!userData && (
        <div
          style={{
            marginTop: 32,
            textAlign: "center",
            padding: "20px 16px",
            borderTop: "1px solid #f0f0f0",
          }}
        >
          <p style={{ margin: "0 0 12px", fontSize: 14, color: "#888" }}>
            You're viewing sample images.{" "}
            <strong style={{ color: "#111" }}>
              Log in to upload your own.
            </strong>
          </p>
          <button
            onClick={() => navigate("/login")}
            style={{
              padding: "10px 24px",
              borderRadius: 8,
              border: "none",
              background: "#1a73e8",
              color: "#fff",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Log in
          </button>
        </div>
      )}

      {userData && (
        <UploadModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSuccess={(newImage) => {
            // setGallery((prev) => [newImage, ...prev]);
            setModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default Gallery;
