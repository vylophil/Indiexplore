import React, { useState } from "react";
import { Gamepad2, Menu, X, Sparkles, ChevronRight } from "lucide-react";

/**
 * Header/Navbar Component
 * Responsive navigation bar with branding, smooth section anchors,
 * mobile drawer toggle, and CTA button.
 */
export default function Navbar({ onStartTrial }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Logo / Business Name */}
        <a href="#hero" className="navbar-brand" onClick={closeMenu}>
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

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <a href="#overview" className="nav-link">Overview</a>
          <a href="#products-services" className="nav-link">Products & Services</a>
          <a href="#catalog" className="nav-link">Showcase</a>
          <a href="#bundles" className="nav-link">Bundles</a>
          <a href="#mission-vision" className="nav-link">Mission & Vision</a>
          <a href="#objectives" className="nav-link">Objectives</a>
          <a href="#pricing" className="nav-link">Pricing Plans</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* Right CTA Action */}
        <div className="navbar-actions">
          <button 
            type="button" 
            className="btn btn-primary nav-cta-btn"
            onClick={onStartTrial}
          >
            <Sparkles size={16} className="btn-icon" />
            <span>Get LahiPlay Pass</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-nav-links">
            <a href="#overview" className="mobile-nav-link" onClick={closeMenu}>
              <span>Business Overview</span>
              <ChevronRight size={18} />
            </a>
            <a href="#products-services" className="mobile-nav-link" onClick={closeMenu}>
              <span>Products & Services</span>
              <ChevronRight size={18} />
            </a>
            <a href="#catalog" className="mobile-nav-link" onClick={closeMenu}>
              <span>Featured Games</span>
              <ChevronRight size={18} />
            </a>
            <a href="#bundles" className="mobile-nav-link" onClick={closeMenu}>
              <span>Discounted Game Bundles</span>
              <ChevronRight size={18} />
            </a>
            <a href="#mission-vision" className="mobile-nav-link" onClick={closeMenu}>
              <span>Mission & Vision</span>
              <ChevronRight size={18} />
            </a>
            <a href="#objectives" className="mobile-nav-link" onClick={closeMenu}>
              <span>5 Business Objectives</span>
              <ChevronRight size={18} />
            </a>
            <a href="#pricing" className="mobile-nav-link" onClick={closeMenu}>
              <span>Subscription Plans</span>
              <ChevronRight size={18} />
            </a>
            <a href="#contact" className="mobile-nav-link" onClick={closeMenu}>
              <span>Contact & Inquiries</span>
              <ChevronRight size={18} />
            </a>
          </nav>
          <div className="mobile-drawer-cta">
            <button
              type="button"
              className="btn btn-primary btn-block"
              onClick={() => {
                closeMenu();
                onStartTrial();
              }}
            >
              <Sparkles size={16} className="btn-icon" />
              <span>Start Free 14-Day Trial</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
