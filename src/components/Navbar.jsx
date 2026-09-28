import React from "react";
import { Gamepad2 } from "lucide-react";

/**
 * Header/Navbar Component
 * Shared navigation bar with branding, section anchors, and CTA button.
 */
export default function Navbar({ onStartTrial }) {
  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Logo / Business Name */}
        <a href="#hero" className="navbar-brand">
          <div className="brand-icon-wrapper">
            <Gamepad2 className="brand-icon" size={24} />
            <span className="brand-dot-pulse"></span>
          </div>
          <div className="brand-text-block">
            <span className="brand-title">
              Indi<span className="brand-highlight">explore</span>
            </span>
            <span className="brand-badge">PH INDIE PASS</span>
          </div>
        </a>

        {/* Shared Navigation Links */}
        <nav className="desktop-nav">
          <a href="#catalog" className="nav-link">Discover</a>
          <a href="#products-services" className="nav-link">Services</a>
          <a href="#bundles" className="nav-link">Bundles</a>
          <a href="#mission-vision" className="nav-link">About</a>
          <a href="#pricing" className="nav-link">Plans</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* Primary Action */}
        <div className="navbar-actions">
          <button 
            type="button" 
            className="btn btn-primary nav-cta-btn"
            onClick={onStartTrial}
          >
            <Gamepad2 size={16} className="btn-icon" aria-hidden="true" />
            <span>Get LahiPlay Pass</span>
          </button>
        </div>
      </div>
    </header>
  );
}
