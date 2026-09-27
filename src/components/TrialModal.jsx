import React, { useState, useEffect } from "react";
import { X, Sparkles, Check, ShieldCheck, Gamepad2, ArrowRight } from "lucide-react";

/**
 * TrialModal Component
 * Interactive modal that appears when visitors click "Start Your Free Trial"
 * or select a subscription pass.
 */
export default function TrialModal({ isOpen, onClose, selectedPlan }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    gamerTag: "",
    email: "",
    platform: "PC (Windows / Steam Deck)",
  });
  const [isProcessing, setIsProcessing] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  if (!isOpen) return null;

  const currentPlan = selectedPlan || {
    name: "LahiPlay Unlimited Pass",
    price: "₱199 / mo",
    description: "Unlimited access to 30+ Filipino indie games with day-one releases.",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.trim()) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(2);
    }, 800);
  };

  const handleClose = () => {
    setStep(1);
    setIsProcessing(false);
    setFormData({ gamerTag: "", email: "", platform: "PC (Windows / Steam Deck)" });
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div className="modal-content trial-modal-box" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={handleClose}
          aria-label="Close trial activation modal"
        >
          <X size={20} />
        </button>

        {step === 1 ? (
          <div>
            <div className="trial-modal-header">
              <div className="trial-icon-badge">
                <Sparkles size={24} className="text-accent-yellow" />
              </div>
              <h2 className="trial-title">Start Your 14-Day Free Trial</h2>
              <p className="trial-sub">
                No upfront payment required. Instant access to certified Pinoy indie games.
              </p>
            </div>

            <div className="selected-plan-summary">
              <div>
                <span className="summary-label">Selected Tier:</span>
                <h4 className="summary-plan-name">{currentPlan.name}</h4>
              </div>
              <span className="summary-plan-price">{currentPlan.price || "₱199/mo"}</span>
            </div>

            <form onSubmit={handleSubmit} className="trial-form">
              <div className="form-group">
                <label className="form-label" htmlFor="trialGamerTag">
                  Choose GamerTag / Display Name
                </label>
                <input
                  type="text"
                  id="trialGamerTag"
                  className="form-input"
                  placeholder="e.g. PinoyGamer88"
                  value={formData.gamerTag}
                  onChange={(e) => setFormData({ ...formData, gamerTag: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="trialEmail">
                  Account Email Address
                </label>
                <input
                  type="email"
                  id="trialEmail"
                  className="form-input"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="trialPlatform">
                  Primary Gaming Device
                </label>
                <select
                  id="trialPlatform"
                  className="form-select"
                  value={formData.platform}
                  onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                >
                  <option value="PC (Windows / Steam Deck)">PC (Windows / Steam Deck)</option>
                  <option value="Mobile (Android / iOS)">Mobile (Android / iOS)</option>
                  <option value="Both PC & Mobile (Cross-Save)">Both PC & Mobile (Cross-Save)</option>
                </select>
              </div>

              <div className="trial-perks-list">
                <div className="trial-perk-item">
                  <Check size={14} className="text-accent-yellow" />
                  <span>Immediate access to 30+ titles in cloud & download</span>
                </div>
                <div className="trial-perk-item">
                  <Check size={14} className="text-accent-yellow" />
                  <span>Cancel anytime in your profile dashboard with 1 click</span>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block submit-btn"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <span className="btn-loading">
                    <span className="spinner"></span> Creating Account Vault...
                  </span>
                ) : (
                  <>
                    <Gamepad2 size={16} />
                    <span>Launch 14-Day Free Access</span>
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="trial-success-view">
            <div className="success-badge-icon">
              <ShieldCheck size={52} className="text-accent-yellow" />
            </div>
            <h3 className="success-title">Trial Activated Successfully!</h3>
            <p className="success-subtitle">
              Welcome to the Indiexplore community, <strong>{formData.gamerTag || "Gamer"}</strong>! A magic sign-in link and launcher setup instructions have been sent to <strong>{formData.email}</strong>.
            </p>

            <div className="activation-steps">
              <div className="act-step">
                <span className="step-num">1</span>
                <span>Open verification link in your inbox</span>
              </div>
              <div className="act-step">
                <span className="step-num">2</span>
                <span>Download the Indiexplore Desktop / Mobile Client</span>
              </div>
              <div className="act-step">
                <span className="step-num">3</span>
                <span>Play Diwata's Curse & other local hits instantly</span>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-primary btn-block"
              onClick={handleClose}
            >
              <span>Dive into Game Library</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
