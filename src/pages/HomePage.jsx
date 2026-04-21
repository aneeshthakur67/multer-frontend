import FeaturesHome from "../components/FeaturesHome";
import HeroHome from "../components/HeroHome";
import StorageHome from "../components/StorageHome";
import SuggestedHome from "../components/SuggestedHome";
import "./HomePage.css";

export default function HomePage() {
  return (
    <main className="home-main">
      {/* ── HERO ── */}
      <HeroHome />

      {/* ── SUGGESTED ── */}
      <SuggestedHome />

      <div className="divider" />

      {/* ── FEATURES ── */}
      <FeaturesHome />

      {/* ── STORAGE ── */}
      <StorageHome />
    </main>
  );
}
