import React from "react";
import { Gamepad2, Heart, ExternalLink, Sparkles, Shield, ArrowUp } from "lucide-react";

/**
 * Footer Component
 * Renders company branding, project metadata, student author credits,
 * quick navigation links, and legal/course attribution.
 */
export default function Footer({ businessInfo }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-wrapper">
      <div className="footer-top-accent"></div>
      
      <div className="footer-container">
        {/* Left Column: Branding & Mission */}
        <div className="footer-col brand-col">
          <div className="footer-brand">
            <div className="brand-icon-wrapper">
              <Gamepad2 className="brand-icon" size={24} />
            </div>
            <span className="brand-title">
              Indi<span className="brand-highlight">explore</span>
            </span>
          </div>

          <p className="footer-tagline">
            "{businessInfo.tagline}"
          </p>

          <p className="footer-desc">
            The premier digital subscription hub empowering Filipino indie game developers and celebrating local storytelling across the globe.
          </p>

          <div className="flag-tribute">
            <span className="ph-flag-dot blue"></span>
            <span className="ph-flag-dot yellow"></span>
            <span className="ph-flag-dot red"></span>
            <span className="flag-text">Proudly Crafted in the Philippines</span>
          </div>
        </div>

        {/* Center Column 1: Navigation Quick Links */}
        <div className="footer-col links-col">
          <h4 className="footer-heading">Platform Directory</h4>
          <ul className="footer-links-list">
            <li><a href="#overview">Business Overview</a></li>
            <li><a href="#products-services">Products & Services</a></li>
            <li><a href="#catalog">Featured Indie Games</a></li>
            <li><a href="#mission-vision">Mission & Vision</a></li>
            <li><a href="#objectives">5 Business Objectives</a></li>
            <li><a href="#pricing">LahiPlay Subscription Pass</a></li>
            <li><a href="#contact">Contact & Dev Portal</a></li>
          </ul>
        </div>

        {/* Center Column 2: Offerings & Tiers */}
        <div className="footer-col tiers-col">
          <h4 className="footer-heading">Ecosystem Tiers</h4>
          <ul className="footer-links-list">
            <li><a href="#pricing">Student Game Pass (₱99/mo)</a></li>
            <li><a href="#pricing">LahiPlay Unlimited Pass (₱199/mo)</a></li>
            <li><a href="#pricing">Dev Patron Pass (₱349/mo)</a></li>
            <li><a href="#products-services">Developer Launchpad Portal</a></li>
            <li><a href="#products-services">Exclusive Indie Merch</a></li>
            <li><a href="#products-services">Bi-Annual Game Jams</a></li>
          </ul>
        </div>

        {/* Right Column: Academic Project & Student Credits */}
        <div className="footer-col academic-col">
          <div className="academic-badge">
            <Sparkles size={14} className="text-accent-yellow" />
            <span>Academic Capstone Portfolio</span>
          </div>
          <h4 className="footer-heading">Project Authors</h4>
          <p className="academic-course">{businessInfo.course}</p>
          <p className="academic-section">Section: <strong>{businessInfo.section}</strong> • {businessInfo.academicYear}</p>

          <ul className="team-credits-list">
            {businessInfo.team.map((member, i) => (
              <li key={`team-${i}`} className="team-member-item">
                <span className="member-name">{member.name}</span>
                <span className="member-role">{member.role}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="bottom-bar-content">
          <p className="copyright-text">
            © 2026–2027 <strong>Indiexplore</strong>. All Rights Reserved. Built with React.js & Vite for Second Term Project.
          </p>

          <button
            type="button"
            className="scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
