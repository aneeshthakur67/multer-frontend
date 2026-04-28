import { useState, useRef, useEffect } from "react";
import { useUserContext } from "../context/UserContext";
import { makeApiRequest } from "../utils/apiService";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { userData, setUserData } = useUserContext();
  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);
  const navigate = useNavigate();

  // ✅ Close modal on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await makeApiRequest(
        "http://localhost:3000/api/user/logout",
        "POST",
        null,
      );
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      setUserData(null);
      navigate("/");
    }
  };

  const initials = userData?.name
    ? userData.name.slice(0, 2).toUpperCase()
    : "?";

  return (
    <div ref={modalRef} style={{ position: "relative", display: "inline-block" }}>

      {/* ── Avatar Button ── */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        style={{
          width: 36, height: 36,
          borderRadius: "50%",
          background: "#1a73e8",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          fontSize: 13,
          fontWeight: 700,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
      >
        {initials}
      </button>

      {open && (
        <div style={{
          position: "absolute",
          top: "calc(100% + 8px)",
          right: 0,
          background: "#fff",
          border: "1px solid #e0e0e0",
          borderRadius: 12,
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
          minWidth: 200,
          zIndex: 1000,
          overflow: "hidden",
        }}>

          {/* User Info */}
          <div style={{
            padding: "16px",
            borderBottom: "1px solid #f0f0f0",
            display: "flex", alignItems: "center", gap: 10,
          }}>
            <div style={{
              width: 38, height: 38,
              borderRadius: "50%",
              background: "#1a73e8",
              color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 14, fontWeight: 700, flexShrink: 0,
            }}>
              {initials}
            </div>
            <div style={{ overflow: "hidden" }}>
              <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#111", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {userData?.name || "User"}
              </p>
              <p style={{ margin: 0, fontSize: 12, color: "#888", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {userData?.email || ""}
              </p>
            </div>
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            style={{
              width: "100%",
              padding: "12px 16px",
              background: "none",
              border: "none",
              textAlign: "left",
              fontSize: 14,
              color: "#ea4335",
              cursor: "pointer",
              display: "flex", alignItems: "center", gap: 8,
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "#fce8e6"}
            onMouseLeave={(e) => e.currentTarget.style.background = "none"}
          >
            <span>⎋</span> Logout
          </button>

        </div>
      )}
    </div>
  );
};

export default Profile;