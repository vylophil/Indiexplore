import React, { useState } from "react";
import { 
  Play, 
  Gamepad2, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  MapPin, 
  Target, 
  Flame, 
  Volume2, 
  VolumeX, 
  Info,
  CheckCircle2,
  ChevronRight
} from "lucide-react";

/**
 * BusinessProfile Component
 * Renders the Hero section, Business Profile/Overview, Tagline Meaning,
 * Problem Solved statement, and Target Audience breakdown.
 */
export default function BusinessProfile({ businessInfo, onStartTrial, onExploreCatalog }) {
  const [isPlayingTeaser, setIsPlayingTeaser] = useState(false);
  // UI placeholder toggle — will control a real <video> element once trailer media is integrated
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section id="overview" className="business-profile-section">
      {/* Hero Banner / High Energy Showcase */}
      <div id="hero" className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-flag-pip"></span>
            <Sparkles size={14} className="text-accent-yellow" />
            <span>The Philippines' 1st Indie Game Subscription Pass</span>
          </div>

          <h1 className="hero-title">
            <span className="title-white">Discover & Support</span>
            <br />
            <span className="text-gradient-electric">Filipino Indie Games.</span>
          </h1>

          <p className="hero-tagline">
            "{businessInfo.tagline}"
          </p>

          <p className="hero-description">
            {businessInfo.overview}
          </p>

          {/* Primary Action Buttons */}
          <div className="hero-cta-group">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={onStartTrial}
            >
              <Sparkles size={18} className="btn-icon" />
              <span>Start Your Free Trial — Play Local Games Today</span>
            </button>
            <a
              href="#catalog"
              className="btn btn-secondary btn-lg"
              onClick={onExploreCatalog}
            >
              <Gamepad2 size={18} className="btn-icon" />
              <span>Browse 30+ Game Titles</span>
            </a>
          </div>

          {/* Key Value Micro-Badges */}
          <div className="hero-feature-tags">
            <div className="hero-tag-item">
              <CheckCircle2 size={16} className="text-accent-blue" />
              <span>Unlimited PC & Mobile Play</span>
            </div>
            <div className="hero-tag-item">
              <CheckCircle2 size={16} className="text-accent-yellow" />
              <span>70% Direct Revenue to Local Devs</span>
            </div>
            <div className="hero-tag-item">
              <CheckCircle2 size={16} className="text-accent-red" />
              <span>Zero Ads & Zero Gacha Microtransactions</span>
            </div>
          </div>
        </div>

        {/* Video / High-Energy Gameplay Banner Teaser Card */}
        <div className="hero-visual-wrapper">
          <div className="game-trailer-card">
            <div className="trailer-header">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-blue"></span>
              </div>
              <span className="trailer-badge">
                <span className="live-indicator"></span> GAME OF THE MONTH TRAILER
              </span>
              <button 
                type="button" 
                className="trailer-audio-btn" 
                onClick={() => setIsMuted(!isMuted)}
                title={isMuted ? "Unmute sound" : "Mute sound"}
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
            </div>

            <div className="trailer-media-frame">
              <img
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80"
                alt="Filipino Indie Game Diwata's Curse Gameplay Trailer Preview"
                className="trailer-poster-image"
              />
              <div className="trailer-overlay">
                <div className="trailer-center-action">
                  <button
                    type="button"
                    className={`trailer-play-pulse-btn ${isPlayingTeaser ? "playing" : ""}`}
                    onClick={() => setIsPlayingTeaser(!isPlayingTeaser)}
                    aria-label="Toggle trailer video preview"
                  >
                    <Play size={28} className="play-icon" />
                  </button>
                  <p className="trailer-prompt">
                    {isPlayingTeaser ? "Streaming 'Diwata's Curse' Alpha..." : "Click to Preview Gameplay Clip"}
                  </p>
                </div>

                <div className="trailer-footer-caption">
                  <div>
                    <h4 className="caption-game-title">Diwata's Curse: Echoes of Bathala</h4>
                    <p className="caption-game-dev">By Anito Studios • Cebu City, Philippines</p>
                  </div>
                  <span className="resolution-badge">4K 60FPS</span>
                </div>
              </div>
            </div>

            {/* Quick Live Bar */}
            <div className="trailer-status-bar">
              <div className="status-item">
                <span className="status-label">Engine:</span>
                <span className="status-value">Unreal Engine 5</span>
              </div>
              <div className="status-item">
                <span className="status-label">Launch Status:</span>
                <span className="status-value text-accent-yellow">Day-One Pass Title</span>
              </div>
              <div className="status-item">
                <span className="status-label">Community Rating:</span>
                <span className="status-value text-accent-blue">★ 4.9 / 5.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Numerical Impact Highlights Grid */}
      <div className="stats-ticker-container">
        <div className="stat-card">
          <div className="stat-number">30+</div>
          <div className="stat-label">Filipino Indie Games</div>
          <p className="stat-sub">Curated for commercial launch</p>
        </div>
        <div className="stat-card">
          <div className="stat-number text-accent-blue">70%</div>
          <div className="stat-label">Dev Revenue Share</div>
          <p className="stat-sub">Direct funding to local studios</p>
        </div>
        <div className="stat-card">
          <div className="stat-number text-accent-yellow">10,000</div>
          <div className="stat-label">Year-1 Subscribers</div>
          <p className="stat-sub">Target gaming community</p>
        </div>
        <div className="stat-card">
          <div className="stat-number text-accent-red">100%</div>
          <div className="stat-label">Homegrown Pinoy Talent</div>
          <p className="stat-sub">Luzon, Visayas & Mindanao</p>
        </div>
      </div>

      {/* Business Core Context: Tagline Meaning & Problem Solved */}
      <div className="profile-details-grid">
        {/* Card 1: Business Identity & Slogan Deep Dive */}
        <div className="profile-card brand-meaning-card">
          <div className="card-header-icon">
            <Sparkles className="text-accent-blue" size={26} />
          </div>
          <span className="card-kicker">Business Identity & Philosophy</span>
          <h3 className="card-heading">Why "Indiexplore"?</h3>
          <p className="card-body-text">
            <strong>"Indiexplore"</strong> combines the spirit of <em>"Indie"</em> and <em>"Explore"</em>, capturing our core vision of discovering unique, hidden gems created by local developers and inviting players to embark on journeys across an ever-expanding library of homegrown titles.
          </p>
          <div className="quote-box">
            <p className="quote-tagline">“{businessInfo.tagline}”</p>
            <p className="quote-explanation">
              <strong>Tagline Interpretation:</strong> {businessInfo.taglineMeaning}
            </p>
          </div>
        </div>

        {/* Card 2: The Problem We Solve */}
        <div className="profile-card problem-solved-card">
          <div className="card-header-icon">
            <Target className="text-accent-red" size={26} />
          </div>
          <span className="card-kicker">Market Opportunity & Solution</span>
          <h3 className="card-heading">What Problem Does Indiexplore Solve?</h3>
          <p className="card-body-text">
            {businessInfo.problemSolved}
          </p>
          <div className="solution-pillars">
            <div className="pillar-item">
              <div className="pillar-bullet text-accent-blue">01</div>
              <div>
                <strong>For Filipino Developers:</strong>
                <p>Guaranteed distribution, marketing support, and sustainable 70/30 subscription revenue.</p>
              </div>
            </div>
            <div className="pillar-item">
              <div className="pillar-bullet text-accent-yellow">02</div>
              <div>
                <strong>For Filipino Gamers:</strong>
                <p>One unified, low-cost subscription to play all homegrown games without purchasing each title separately.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Target Customers & Demographics */}
        <div className="profile-card target-audience-card full-width-card">
          <div className="audience-header">
            <div className="card-header-icon">
              <Users className="text-accent-yellow" size={26} />
            </div>
            <div>
              <span className="card-kicker">Audience Segmentation</span>
              <h3 className="card-heading">Who Are Our Target Customers?</h3>
            </div>
          </div>
          
          <div className="audience-columns">
            <div className="audience-col">
              <h4 className="col-title">
                <Target size={18} className="text-accent-blue" />
                Target Demographics
              </h4>
              <ul className="audience-list">
                <li><strong>Age Bracket:</strong> {businessInfo.targetAudience.ageGroup}</li>
                <li><strong>Profiles:</strong> {businessInfo.targetAudience.profile}</li>
                <li><strong>Geographic Reach:</strong> {businessInfo.targetAudience.location}</li>
              </ul>
            </div>
            
            <div className="audience-col">
              <h4 className="col-title">
                <ShieldCheck size={18} className="text-accent-yellow" />
                Why Customers Need Indiexplore
              </h4>
              <p className="audience-desc">
                {businessInfo.targetAudience.valueProposition}
              </p>
              <div className="audience-callout">
                <Info size={16} className="text-accent-blue" />
                <span>Empowering student developers from local universities to release their capstone games commercially.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
