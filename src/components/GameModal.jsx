import React, { useState, useEffect } from "react";
import { X, Star, Play, Check, ShieldCheck, MapPin, Gamepad2, Sparkles } from "lucide-react";

/**
 * GameModal Component
 * Interactive modal that appears when a user clicks on any Filipino indie game
 * in the showcase catalog, featuring a playable trial simulator.
 */
export default function GameModal({ game, onClose, onSelectPass }) {
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);
  const [demoProgress, setDemoProgress] = useState(0);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (!game) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [game]);

  // Close on Escape key press
  useEffect(() => {
    if (!game) return;
    const handleEsc = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [game, onClose]);

  if (!game) return null;

  const handleLaunchDemo = () => {
    setIsPlayingDemo(true);
    setDemoProgress(15);
    const interval = setInterval(() => {
      setDemoProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 25;
      });
    }, 400);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close game details modal"
        >
          <X size={20} />
        </button>

        <div className="modal-header-media">
          <img src={game.image} alt={game.title} className="modal-cover-img" />
          <div className="modal-header-gradient"></div>
          
          <div className="modal-header-badges">
            <span className="badge-genre">{game.genre}</span>
            <span className="badge-rating">
              <Star size={14} className="star-icon" /> {game.rating} / 5.0
            </span>
          </div>

          <div className="modal-header-info">
            <h2 className="modal-game-title">{game.title}</h2>
            <p className="modal-dev-info">
              <MapPin size={14} className="text-accent-yellow" />
              <span>Developed by {game.developer}</span>
            </p>
          </div>
        </div>

        <div className="modal-body">
          {/* Tags */}
          <div className="modal-tag-cloud">
            {game.tags.map((tag, i) => (
              <span key={`tag-${i}`} className="modal-tag">
                #{tag}
              </span>
            ))}
          </div>

          <p className="modal-description">{game.description}</p>

          {/* Key Game Features */}
          <div className="modal-features-section">
            <h4 className="features-title">
              <Sparkles size={16} className="text-accent-blue" />
              Game Highlights & Features
            </h4>
            <div className="modal-features-grid">
              {game.features.map((feat, idx) => (
                <div key={`feat-${idx}`} className="modal-feat-item">
                  <Check size={16} className="text-accent-yellow" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Demo Simulation Area */}
          <div className="demo-simulator-box">
            <div className="simulator-header">
              <div className="sim-title-group">
                <Gamepad2 size={20} className="text-accent-blue" />
                <strong>Indiexplore Cloud Stream Tester</strong>
              </div>
              <span className="sim-status">
                {demoProgress === 100 ? "Ready to Stream!" : isPlayingDemo ? "Connecting..." : "Pass Included"}
              </span>
            </div>

            {isPlayingDemo ? (
              <div className="demo-progress-wrapper">
                <div className="progress-bar-bg">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${demoProgress}%` }}
                  ></div>
                </div>
                <p className="progress-text">
                  {demoProgress < 100
                    ? `Loading cloud instance from Manila server (${demoProgress}%)...`
                    : `Instance connected! Stream active at 1080p 60FPS latency 12ms.`}
                </p>
              </div>
            ) : (
              <p className="demo-hint-text">
                Test how {game.title} runs instantly without downloading through the Indiexplore Cloud Player.
              </p>
            )}

            <div className="modal-action-row">
              <button
                type="button"
                className="btn btn-secondary sim-launch-btn"
                onClick={handleLaunchDemo}
              >
                <Play size={16} />
                <span>{isPlayingDemo && demoProgress === 100 ? "Restart Stream" : "Test Cloud Demo"}</span>
              </button>

              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  onClose();
                  onSelectPass();
                }}
              >
                <ShieldCheck size={16} />
                <span>Unlock Full Game with LahiPlay Pass</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
