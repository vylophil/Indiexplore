import React from "react";
import { Library, TrendingUp, GraduationCap, Coins, Flame, CheckCircle } from "lucide-react";

/**
 * ObjectiveCard Component
 * Reusable child component for presenting each business objective.
 */
export default function ObjectiveCard({ objective, index }) {
  const renderIcon = (iconName) => {
    switch (iconName) {
      case "Library":
        return <Library size={22} className="obj-icon" />;
      case "TrendingUp":
        return <TrendingUp size={22} className="obj-icon" />;
      case "GraduationCap":
        return <GraduationCap size={22} className="obj-icon" />;
      case "Coins":
        return <Coins size={22} className="obj-icon" />;
      case "Flame":
        return <Flame size={22} className="obj-icon" />;
      default:
        return <CheckCircle size={22} className="obj-icon" />;
    }
  };

  return (
    <div className="objective-card">
      <div className="objective-card-top">
        <div className="objective-badge-index">
          <span>{objective.target}</span>
        </div>
        <div className="objective-icon-wrapper">
          {renderIcon(objective.icon)}
        </div>
      </div>

      <div className="objective-metric-badge">
        <span className="metric-text">{objective.metric}</span>
      </div>

      <h3 className="objective-title">{objective.title}</h3>
      <p className="objective-description">{objective.description}</p>

      <div className="objective-status-footer">
        <span className="status-indicator-dot"></span>
        <span className="status-label">{objective.status}</span>
      </div>
    </div>
  );
}
