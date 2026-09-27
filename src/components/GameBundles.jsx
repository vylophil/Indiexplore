import React, { useState } from "react";
import BundleModal from "./BundleModal";
import { 
  Package, 
  Sparkles, 
  Tag, 
  Check, 
  ArrowRight, 
  Flame, 
  Gift, 
  ShieldCheck, 
  Calculator, 
  Plus, 
  CheckCircle2 
} from "lucide-react";

/**
 * GameBundles Component
 * Displays curated discounted game bundles (e.g., Summer Mega Bundle,
 * Folklore Pack) and includes an interactive Custom Bundle Savings Calculator.
 */
export default function GameBundles({ bundles, allGames, onExplorePass }) {
  const [selectedBundleId, setSelectedBundleId] = useState(bundles[0]?.id || "bundle-summer");
  const [checkoutBundle, setCheckoutBundle] = useState(null);

  // Custom Bundle Builder state (interactive feature)
  const [showCustomBuilder, setShowCustomBuilder] = useState(false);
  const [selectedGameIds, setSelectedGameIds] = useState(["game-1", "game-3", "game-4"]);

  // Active curated bundle
  const activeBundle = bundles.find((b) => b.id === selectedBundleId) || bundles[0];

  // Map included games from the allGames database
  const getGamesForBundle = (gameIds) => {
    return gameIds
      .map((id) => allGames.find((g) => g.id === id))
      .filter(Boolean);
  };

  const activeBundleGames = getGamesForBundle(activeBundle.gameIds);

  // Custom Bundle Math
  const customGames = getGamesForBundle(selectedGameIds);
  const customOriginalTotal = customGames.reduce((acc, g) => acc + (g.individualPrice || 299), 0);
  
  // Tiered custom discount: 2 games = 20%, 3 games = 35%, 4+ games = 50%
  let customDiscountRate = 0;
  if (selectedGameIds.length === 2) customDiscountRate = 0.20;
  else if (selectedGameIds.length === 3) customDiscountRate = 0.35;
  else if (selectedGameIds.length >= 4) customDiscountRate = 0.50;

  const customBundlePrice = Math.round(customOriginalTotal * (1 - customDiscountRate));
  const customSavings = customOriginalTotal - customBundlePrice;

  const toggleCustomGame = (gameId) => {
    if (selectedGameIds.includes(gameId)) {
      if (selectedGameIds.length <= 1) return; // keep at least 1
      setSelectedGameIds(selectedGameIds.filter((id) => id !== gameId));
    } else {
      setSelectedGameIds([...selectedGameIds, gameId]);
    }
  };

  return (
    <section id="bundles" className="game-bundles-section">
      <div className="section-header">
        <div className="section-kicker">
          <Package size={14} className="text-accent-yellow" />
          <span>Curated Value Sets</span>
        </div>
        <h2 className="section-title">
          Discounted <span className="text-gradient-electric">Game Bundles</span>
        </h2>
        <p className="section-subtitle">
          Want to permanently own games for cheaper? Grab our seasonal themed packs or build your custom collection with up to 65% in bundled savings.
        </p>

        {/* View Mode Switcher: Curated Bundles vs Custom Bundle Builder */}
        <div className="bundle-mode-switch">
          <button
            type="button"
            className={`mode-btn ${!showCustomBuilder ? "active" : ""}`}
            onClick={() => setShowCustomBuilder(false)}
          >
            <Sparkles size={16} />
            <span>Featured Seasonal Bundles</span>
          </button>
          <button
            type="button"
            className={`mode-btn ${showCustomBuilder ? "active" : ""}`}
            onClick={() => setShowCustomBuilder(true)}
          >
            <Calculator size={16} />
            <span>Build-Your-Own Bundle Calculator</span>
          </button>
        </div>
      </div>

      {!showCustomBuilder ? (
        /* ================= 1. CURATED BUNDLES VIEW ================= */
        <div className="curated-bundles-container">
          {/* Bundle Selection Tabs */}
          <div className="bundle-nav-tabs">
            {bundles.map((bundle) => {
              const isSelected = selectedBundleId === bundle.id;
              return (
                <button
                  key={bundle.id}
                  type="button"
                  className={`bundle-tab-card ${isSelected ? "active" : ""}`}
                  onClick={() => setSelectedBundleId(bundle.id)}
                >
                  <div className="tab-top-row">
                    <span className="tab-season-tag">{bundle.season}</span>
                    <span className="tab-save-badge">-{bundle.savingsPercentage}%</span>
                  </div>
                  <h4 className="tab-bundle-title">{bundle.title}</h4>
                  <div className="tab-price-row">
                    <span className="tab-price-now">₱{bundle.bundlePrice}</span>
                    <span className="tab-price-orig">₱{bundle.originalPrice}</span>
                    <span className="tab-game-count">{bundle.gameIds.length} Games</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Bundle Showcase Card */}
          <div className="active-bundle-hero-card">
            <div className="active-bundle-banner">
              <img
                src={activeBundle.bannerImage}
                alt={activeBundle.title}
                className="bundle-hero-img"
              />
              <div className="bundle-hero-overlay">
                <div className="bundle-badge-row">
                  <span className="bundle-flair-badge">
                    <Flame size={14} className="text-accent-yellow" />
                    {activeBundle.badge}
                  </span>
                  <span className="bundle-games-badge">
                    {activeBundle.gameIds.length} Games Included
                  </span>
                </div>
                <h3 className="bundle-hero-title">{activeBundle.title}</h3>
                <p className="bundle-hero-tagline">{activeBundle.tagline}</p>
              </div>
            </div>

            <div className="active-bundle-content">
              {/* Pricing & Checkout Header */}
              <div className="bundle-pricing-deal-box">
                <div className="price-stack">
                  <span className="deal-kicker">Bundle Purchase Price</span>
                  <div className="deal-numbers">
                    <span className="deal-currency">₱</span>
                    <span className="deal-amount">{activeBundle.bundlePrice}</span>
                    <span className="deal-strikethrough">₱{activeBundle.originalPrice} Regular Total</span>
                  </div>
                  <span className="deal-savings-pill">
                    You save ₱{activeBundle.originalPrice - activeBundle.bundlePrice} ({activeBundle.savingsPercentage}% OFF)
                  </span>
                </div>

                <div className="deal-actions">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={() => setCheckoutBundle(activeBundle)}
                  >
                    <Package size={18} />
                    <span>Purchase Bundle (₱{activeBundle.bundlePrice})</span>
                  </button>
                  <p className="deal-pass-subtext">
                    ⭐ {activeBundle.lahiPlayPerk}
                  </p>
                </div>
              </div>

              {/* Games in Bundle Grid (Mapped from Games DB) */}
              <div className="bundle-games-section">
                <h4 className="games-grid-title">
                  <Tag size={16} className="text-accent-blue" />
                  Titles Included in this Bundle ({activeBundleGames.length}):
                </h4>
                
                <div className="bundle-games-mini-grid">
                  {activeBundleGames.map((game) => (
                    <div key={game.id} className="bundle-game-item-card">
                      <div className="item-thumb-box">
                        <img src={game.image} alt={game.title} className="item-thumb-img" />
                        <span className="item-genre-tag">{game.genre}</span>
                      </div>
                      <div className="item-info">
                        <h5 className="item-title">{game.title}</h5>
                        <p className="item-dev">{game.developer}</p>
                        <div className="item-footer">
                          <span className="item-standalone-price">
                            Regular: ₱{game.individualPrice || 299}
                          </span>
                          <span className="item-status-tag">Included</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bonus Digital Inclusions */}
              <div className="bundle-perks-box">
                <h4 className="perks-title">
                  <Gift size={16} className="text-accent-yellow" />
                  Bonus Digital Collectors' Content:
                </h4>
                <div className="perks-grid">
                  {activeBundle.perks.map((perk, i) => (
                    <div key={`perk-${i}`} className="bundle-perk-item">
                      <Check size={14} className="text-accent-yellow" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ================= 2. BUILD-YOUR-OWN BUNDLE CALCULATOR ================= */
        <div className="custom-builder-container">
          <div className="builder-top-card">
            <div className="builder-header">
              <div>
                <h3 className="builder-title">Interactive Custom Bundle Builder</h3>
                <p className="builder-subtitle">
                  Pick and mix any games from our Philippine indie database. The more games you add, the deeper your automatic bundle discount!
                </p>
              </div>
              <div className="builder-discount-tiers">
                <span className={`tier-chip ${selectedGameIds.length === 2 ? "active" : ""}`}>
                  2 Games: 20% OFF
                </span>
                <span className={`tier-chip ${selectedGameIds.length === 3 ? "active" : ""}`}>
                  3 Games: 35% OFF
                </span>
                <span className={`tier-chip ${selectedGameIds.length >= 4 ? "active" : ""}`}>
                  4+ Games: 50% OFF
                </span>
              </div>
            </div>

            {/* Games Selector Grid */}
            <div className="builder-games-selection-grid">
              {allGames.map((game) => {
                const isSelected = selectedGameIds.includes(game.id);
                return (
                  <div
                    key={game.id}
                    className={`selector-game-card ${isSelected ? "selected" : ""}`}
                    onClick={() => toggleCustomGame(game.id)}
                  >
                    <div className="selector-image-wrap">
                      <img src={game.image} alt={game.title} className="selector-img" />
                      <div className="selector-check">
                        {isSelected ? (
                          <CheckCircle2 size={20} className="check-icon-active" />
                        ) : (
                          <Plus size={18} className="check-icon-inactive" />
                        )}
                      </div>
                    </div>
                    <div className="selector-card-body">
                      <h4 className="selector-game-name">{game.title}</h4>
                      <p className="selector-game-genre">{game.genre}</p>
                      <span className="selector-price">₱{game.individualPrice || 299}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Live Pricing Summary Box */}
            <div className="builder-checkout-bar">
              <div className="checkout-summary-col">
                <span className="col-label">Selected: {selectedGameIds.length} Games</span>
                <div className="checkout-price-display">
                  <span className="live-bundle-price">₱{customBundlePrice}</span>
                  {customDiscountRate > 0 && (
                    <span className="live-orig-price">₱{customOriginalTotal}</span>
                  )}
                  {customDiscountRate > 0 && (
                    <span className="live-discount-tag">
                      SAVE {Math.round(customDiscountRate * 100)}% (₱{customSavings})
                    </span>
                  )}
                </div>
              </div>

              <div className="checkout-action-col">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={() =>
                    setCheckoutBundle({
                      id: "bundle-custom",
                      title: `Custom Bundle (${selectedGameIds.length} Games)`,
                      badge: `Custom Pack • ${Math.round(customDiscountRate * 100)}% OFF`,
                      tagline: `Your personalized collection of ${selectedGameIds.length} Filipino indie games.`,
                      originalPrice: customOriginalTotal,
                      bundlePrice: customBundlePrice,
                      savingsPercentage: Math.round(customDiscountRate * 100),
                      gameIds: selectedGameIds,
                      lahiPlayPerk: "Or get unlimited access to all titles with LahiPlay Pass",
                    })
                  }
                  disabled={selectedGameIds.length < 2}
                >
                  <Package size={18} />
                  <span>
                    {selectedGameIds.length < 2
                      ? "Select at least 2 games"
                      : `Purchase Custom Bundle • ₱${customBundlePrice}`}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {checkoutBundle && (
        <BundleModal
          bundle={checkoutBundle}
          includedGames={getGamesForBundle(checkoutBundle.gameIds)}
          onClose={() => setCheckoutBundle(null)}
          onExplorePass={onExplorePass}
        />
      )}
    </section>
  );
}
