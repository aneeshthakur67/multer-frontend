import "./Footer.css";

const DriveIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M4.5 20.25L9 12.75L13.5 20.25H4.5Z" fill="#0066da" />
    <path d="M9 12.75L13.5 5.25H19.5L15 12.75H9Z" fill="#00ac47" />
    <path d="M15 12.75L19.5 5.25L22.5 10.25L18 17.75L15 12.75Z" fill="#ea4335" />
    <path d="M13.5 20.25H19.5L22.5 15.25H16.5L13.5 20.25Z" fill="#00832d" />
    <path d="M4.5 20.25L7.5 15.25H13.5L10.5 20.25H4.5Z" fill="#2684fc" />
    <path d="M9 12.75L4.5 5.25H10.5L15 12.75H9Z" fill="#ffba00" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-brand-col">
          <div className="footer-brand">
            <DriveIcon />
            <span className="footer-brand-name">PixelDrive</span>
          </div>
          <p className="footer-tagline">
            One secure place for all your photos. Beautiful, searchable, always
            with you.
          </p>
        </div>

        {/* Product */}
        <div className="footer-col">
          <h4>Product</h4>
          <a>Gallery</a>
          <a>My Drive</a>
          <a>Shared with me</a>
          <a>Trash</a>
        </div>

        {/* Plans */}
        <div className="footer-col">
          <h4>Plans</h4>
          <a>Free — 15 GB</a>
          <a>Basic — 100 GB</a>
          <a>Standard — 200 GB</a>
          <a>Premium — 2 TB</a>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h4>Company</h4>
          <a>About</a>
          <a>Blog</a>
          <a>Careers</a>
          <a>Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">
          © {new Date().getFullYear()} PixelDrive Inc. All rights reserved.
        </span>
        <div className="footer-links">
          <a>Privacy</a>
          <a>Terms</a>
          <a>Cookies</a>
          <a>Status</a>
        </div>
      </div>
    </footer>
  );
}
