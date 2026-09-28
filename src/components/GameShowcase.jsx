import { lazy, Suspense, useState } from "react";
import GameCard from "./GameCard";
import { Gamepad2, Trophy, Flame } from "lucide-react";

const GameModal = lazy(() => import("./GameModal"));

/**
 * GameShowcase Component
 * Highlights the Game of the Month and provides an interactive filterable
 * game catalog with modal inspection.
 */
export default function GameShowcase({ games, onSelectPass }) {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [activeGameModal, setActiveGameModal] = useState(null);

  // Extract unique genres
  const genres = ["All", ...new Set(games.map((g) => g.genre))];

  // Filter games based on genre selection
  const filteredGames =
    selectedGenre === "All"
      ? games
      : games.filter((g) => g.genre === selectedGenre);

  // Game of the Month spotlight title
  const spotlightGame = games.find((g) => g.spotlight) || games[0];

  return (
    <section id="catalog" className="game-showcase-section">
      <div className="section-header">
        <div className="section-kicker">
          <Gamepad2 size={14} className="text-accent-yellow" />
          <span>Curated Pinoy Library</span>
        </div>
        <h2 className="section-title">
          Explore Featured <span className="text-gradient-electric">Indie Titles</span>
        </h2>
        <p className="section-subtitle">
          From ancient Philippine mythology to futuristic Neo-Manila cyberpunk, explore original worlds crafted by talented Filipino indie developers.
        </p>
      </div>

      {/* Spotlight Feature Card: Game of the Month */}
      <div className="spotlight-feature-box">
        <div className="spotlight-badge-label">
          <Trophy size={16} className="text-accent-yellow" />
          <span>DEVELOPER SPOTLIGHT — GAME OF THE MONTH</span>
        </div>
        <div className="spotlight-content-grid">
          <div className="spotlight-image-col">
            <img
              src={spotlightGame.image}
              alt={spotlightGame.title}
              className="spotlight-banner-img"
              loading="lazy"
              decoding="async"
            />
            <div className="spotlight-overlay-tag">
              <Flame size={16} className="text-accent-red" />
              <span>Trending in Manila & Cebu</span>
            </div>
          </div>
          <div className="spotlight-info-col">
            <span className="spotlight-genre">{spotlightGame.genre}</span>
            <h3 className="spotlight-title">{spotlightGame.title}</h3>
            <p className="spotlight-studio">
              Developed by <strong>{spotlightGame.developer}</strong>
            </p>
            <p className="spotlight-desc">{spotlightGame.description}</p>
            
            <div className="spotlight-bullets">
              {spotlightGame.features.map((feat, i) => (
                <div key={`spotlight-feat-${i}`} className="spotlight-bullet-item">
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="spotlight-action-row">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setActiveGameModal(spotlightGame)}
              >
                <span>Launch Interactive Demo</span>
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onSelectPass}
              >
                <span>Play with LahiPlay Pass</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Genre Filter Tabs */}
      <div className="catalog-filter-tabs">
        {genres.map((genre) => (
          <button
            key={`genre-tab-${genre}`}
            type="button"
            className={`catalog-tab-btn ${selectedGenre === genre ? "active" : ""}`}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Games Grid Rendered via .map() */}
      <div className="games-grid">
        {filteredGames.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            onSelectGame={(g) => setActiveGameModal(g)}
          />
        ))}
      </div>

      {/* Modal Popup for Selected Game */}
      {activeGameModal && (
        <Suspense fallback={null}>
          <GameModal
            game={activeGameModal}
            onClose={() => setActiveGameModal(null)}
            onSelectPass={() => {
              setActiveGameModal(null);
              onSelectPass();
            }}
          />
        </Suspense>
      )}
    </section>
  );
}
