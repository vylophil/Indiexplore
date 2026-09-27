import React, { useState, useEffect } from "react";
import { X, Check, ShieldCheck, Download, Sparkles, Gamepad2, ArrowRight } from "lucide-react";

/**
 * BundleModal Component
 * Interactive checkout & digital delivery simulator for purchasing game bundles.
 */
export default function BundleModal({ bundle, includedGames, onClose, onExplorePass }) {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("GCash / Maya");
  const [isProcessing, setIsProcessing] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (!bundle) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [bundle]);

  // Close on Escape key press
  useEffect(() => {
    if (!bundle) return;
    const handleEsc = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [bundle, onClose]);

  if (!bundle) return null;

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(2);
    }, 800);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content bundle-modal-box" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close bundle modal"
        >
          <X size={20} />
        </button>

        {step === 1 ? (
          <div>
            <div className="bundle-modal-header">
              <span className="bundle-modal-badge">{bundle.badge}</span>
              <h2 className="bundle-modal-title">{bundle.title}</h2>
              <p className="bundle-modal-sub">{bundle.tagline}</p>
            </div>

            {/* Price & Savings Banner */}
            <div className="bundle-price-deal-card">
              <div>
                <span className="deal-label">Total Bundle Price</span>
                <div className="deal-price-row">
                  <span className="deal-final-price">₱{bundle.bundlePrice}</span>
                  <span className="deal-strikethrough-price">₱{bundle.originalPrice}</span>
                </div>
              </div>
              <span className="deal-savings-tag">SAVE {bundle.savingsPercentage}%</span>
            </div>

            {/* Games Included Preview */}
            <div className="bundle-included-list-preview">
              <span className="preview-label">Includes {includedGames.length} Certified Games:</span>
              <div className="bundle-games-pill-row">
                {includedGames.map((g) => (
                  <div key={g.id} className="bundle-game-pill">
                    <img src={g.image} alt={g.title} className="pill-thumb" />
                    <span>{g.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleCheckout} className="bundle-checkout-form">
              <div className="form-group">
                <label className="form-label" htmlFor="bundleEmail">
                  Recipient Email (Game Keys Delivered Here) <span className="req">*</span>
                </label>
                <input
                  type="email"
                  id="bundleEmail"
                  className="form-input"
                  placeholder="e.g. gamer@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="paymentSelect">
                  Preferred Payment Provider
                </label>
                <select
                  id="paymentSelect"
                  className="form-select"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <option value="GCash / Maya">GCash / Maya (Philippines QR)</option>
                  <option value="Credit / Debit Card">Credit / Debit Card (Visa, Mastercard)</option>
                  <option value="Indiexplore Steam Wallet Key">Indiexplore Wallet Credit</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block submit-btn"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <span className="btn-loading">
                    <span className="spinner"></span> Generating Vault License Keys...
                  </span>
                ) : (
                  <>
                    <Sparkles size={16} />
                    <span>Complete Bundle Order • ₱{bundle.bundlePrice}</span>
                  </>
                )}
              </button>
            </form>

            <div className="bundle-modal-footer-note">
              <p>
                💡 {bundle.lahiPlayPerk}.{" "}
                <button
                  type="button"
                  className="link-button"
                  onClick={() => {
                    onClose();
                    onExplorePass();
                  }}
                >
                  View Subscription Options
                </button>
              </p>
            </div>
          </div>
        ) : (
          <div className="bundle-success-view">
            <div className="success-badge-icon">
              <ShieldCheck size={52} className="text-accent-yellow" />
            </div>
            <h3 className="success-title">Bundle Added to Your Vault!</h3>
            <p className="success-subtitle">
              Salamat! Your order for <strong>{bundle.title}</strong> has been confirmed. Download links and activation keys for all {includedGames.length} games have been dispatched to <strong>{email}</strong>.
            </p>

            <div className="vault-keys-receipt">
              {includedGames.map((g, idx) => (
                <div key={g.id} className="key-receipt-row">
                  <div className="key-game-title">
                    <span>{idx + 1}. {g.title}</span>
                    <small>by {g.developer}</small>
                  </div>
                  <span className="key-code">
                    IDX-KEY-{g.id.toUpperCase()}-{Math.floor(1000 + Math.random() * 9000)}
                  </span>
                </div>
              ))}
            </div>

            <div className="bundle-success-actions">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                <span>Continue Browsing</span>
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onClose}
              >
                <Download size={16} />
                <span>Launch Indiexplore Client</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
