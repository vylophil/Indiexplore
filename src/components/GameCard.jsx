import React from "react";
import { Play, MapPin, Eye } from "lucide-react";

/**
 * GameCard Component
 * Reusable child component for rendering individual game cards.
 */
export default function GameCard({ game, onSelectGame }) {
  return (
    <div className={`game-card ${game.spotlight ? "spotlight-card" : ""}`}>
      <div className="game-card-media">
        <img
          src={game.image}
          alt={game.title}
          className="game-cover-image"
          loading="lazy"
          decoding="async"
          onError={(e) => { e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' fill='%23141924'%3E%3Crect width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2364748b' font-family='sans-serif' font-size='16'%3EImage Unavailable%3C/text%3E%3C/svg%3E"; }}
        />
        <div className="game-card-overlay">
          <button
            type="button"
            className="game-quick-view-btn"
            onClick={() => onSelectGame(game)}
            aria-label={`View details for ${game.title}`}
          >
            <Eye size={18} />
            <span>Game Details</span>
          </button>
        </div>

        <div className="game-card-top-badges">
          <span className="genre-pill">{game.genre}</span>
        </div>

        {game.spotlight && (
          <div className="spotlight-ribbon">
            <span>GAME OF THE MONTH</span>
          </div>
        )}
      </div>

      <div className="game-card-body">
        <h3 className="game-card-title">{game.title}</h3>
        <p className="game-card-dev">
          <MapPin size={13} className="text-accent-yellow" />
          <span>{game.developer}</span>
        </p>

        <p className="game-card-snippet">{game.description}</p>

        <div className="game-card-tags">
          {game.tags.slice(0, 2).map((tag, idx) => (
            <span key={`${game.id}-tag-${idx}`} className="game-mini-tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="game-card-footer">
          <button
            type="button"
            className="btn btn-outline btn-sm w-full"
            onClick={() => onSelectGame(game)}
          >
            <Play size={14} />
            <span>Inspect & Play Demo</span>
          </button>
        </div>
      </div>
    </div>
  );
}
