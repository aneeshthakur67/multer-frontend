import React from "react";
const FEATURES = [
  {
    icon: "☁️",
    bg: "#e8f0fe",
    title: "Unlimited backup",
    desc: "Your photos are safely stored in the cloud, accessible from any device, anywhere in the world.",
    badge: null,
  },
  {
    icon: "🤖",
    bg: "#e6f4ea",
    title: "AI-powered search",
    desc: "Find any photo instantly. Search by object, location, face, or describe what you're looking for.",
    badge: "New",
  },
  {
    icon: "🔗",
    bg: "#fce8e6",
    title: "Easy sharing",
    desc: "Share individual photos or entire albums with a link. Set permissions and expiry dates.",
    badge: null,
  },
  {
    icon: "🔒",
    bg: "#fef7e0",
    title: "Bank-grade security",
    desc: "End-to-end encryption and two-factor authentication keep your memories safe and private.",
    badge: null,
  },
];
const FeaturesHome = () => {
  return (
    <div className="section">
      <div className="section-header">
        <span className="section-title">Why PixelDrive</span>
      </div>
      <div className="features-grid">
        {FEATURES.map((f) => (
          <div className="feature-card" key={f.title}>
            <div className="feature-icon" style={{ background: f.bg }}>
              {f.icon}
            </div>
            <h3>
              {f.title} {f.badge && <span className="badge">{f.badge}</span>}
            </h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesHome;
