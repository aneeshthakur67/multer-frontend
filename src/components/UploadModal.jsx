import React, { useState, useRef } from "react";
import { makeApiRequest } from "../utils/apiService";

const UploadModal = ({ isOpen, onClose, onSuccess }) => {
  const [form, setForm] = useState({ title: "", file: null, preview: null });
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;
    setForm((prev) => ({
      ...prev,
      file: selected,
      preview: URL.createObjectURL(selected),
    }));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const dropped = e.dataTransfer.files[0];
    if (!dropped) return;
    setForm((prev) => ({
      ...prev,
      file: dropped,
      preview: URL.createObjectURL(dropped),
    }));
  };

  const reset = () => {
    setForm({ title: "", file: null, preview: null });
    setError(null);
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleSubmit = async () => {
    if (!form.file) return setError("Please select an image.");
    if (!form.title.trim()) return setError("Please enter a title.");

    setUploading(true);
    setError(null);
    try {
      const data = {
        image: form.file,
        title: form.title,
      };
      const response = await makeApiRequest(
        "http://localhost:3000/api/user/gallery/upload",
        "POST",
        data,
      );

      if (response.statusCode !== 200 && response.statusCode !== 201) {
        throw new Error(response.message || "Upload failed.");
      }

      onSuccess(response.data);
      reset();
    } catch (err) {
      setError(err.message || "Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={handleClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(4px)",
          zIndex: 999,
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "#fff",
          borderRadius: 16,
          padding: "32px 28px",
          width: "100%",
          maxWidth: 460,
          zIndex: 1000,
          boxShadow: "0 24px 60px rgba(0,0,0,0.2)",
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2
            style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "#111" }}
          >
            Upload Image
          </h2>
          <button
            onClick={handleClose}
            style={{
              background: "none",
              border: "none",
              fontSize: 22,
              cursor: "pointer",
              color: "#666",
            }}
          >
            ✕
          </button>
        </div>

        {/* Drop Zone */}
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={(e) => {
            console.log(form);
            console.log(e);
            fileInputRef.current.click();
          }}
          style={{
            border: "2px dashed #d0d0d0",
            borderRadius: 12,
            padding: "24px 16px",
            textAlign: "center",
            cursor: "pointer",
            background: form.preview ? "#000" : "#fafafa",
            minHeight: 160,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {form.preview ? (
            <img
              src={form.preview}
              alt="preview"
              style={{
                maxHeight: 200,
                maxWidth: "100%",
                borderRadius: 8,
                objectFit: "contain",
              }}
            />
          ) : (
            <div
              style={{
                color: "#aaa",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 36 }}>🖼️</span>
              <p style={{ margin: 0, fontSize: 14 }}>
                Drag & drop or{" "}
                <span style={{ color: "#1a73e8", fontWeight: 600 }}>
                  browse
                </span>
              </p>
              <p style={{ margin: 0, fontSize: 12, color: "#ccc" }}>
                PNG, JPG, WEBP up to 10MB
              </p>
            </div>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>

        {/* Title Input */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label style={{ fontSize: 13, fontWeight: 600, color: "#444" }}>
            Title
          </label>
          <input
            type="text"
            placeholder="Enter image title..."
            value={form.title}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, title: e.target.value }))
            }
            style={{
              padding: "10px 14px",
              borderRadius: 8,
              border: "1.5px solid #e0e0e0",
              fontSize: 14,
              outline: "none",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#1a73e8")}
            onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
          />
        </div>

        {/* Error */}
        {error && (
          <p
            style={{
              margin: 0,
              fontSize: 13,
              color: "#ea4335",
              fontWeight: 500,
            }}
          >
            ⚠️ {error}
          </p>
        )}

        {/* Actions */}
        <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
          <button
            onClick={handleClose}
            style={{
              padding: "10px 20px",
              borderRadius: 8,
              border: "1.5px solid #e0e0e0",
              background: "#fff",
              cursor: "pointer",
              fontSize: 14,
              color: "#444",
              fontWeight: 500,
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={uploading}
            style={{
              padding: "10px 24px",
              borderRadius: 8,
              border: "none",
              background: uploading ? "#a8c7fa" : "#1a73e8",
              color: "#fff",
              cursor: uploading ? "not-allowed" : "pointer",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </div>
      </div>
    </>
  );
};

export default UploadModal;
