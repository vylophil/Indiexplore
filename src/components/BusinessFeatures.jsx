import React from "react";
import { Compass, HeartHandshake, BookOpenCheck, ShieldCheck, Zap } from "lucide-react";

/**
 * BusinessFeatures Component
 * Highlights the platform's core competitive differentiators
 * ("Why Choose Us" / Business Features).
 */
export default function BusinessFeatures({ features }) {
  const renderFeatureIcon = (iconName) => {
    switch (iconName) {
      case "Compass":
        return <Compass size={28} className="feat-icon text-accent-blue" />;
      case "HeartHandshake":
        return <HeartHandshake size={28} className="feat-icon text-accent-yellow" />;
      case "BookOpenCheck":
        return <BookOpenCheck size={28} className="feat-icon text-accent-red" />;
      case "ShieldCheck":
        return <ShieldCheck size={28} className="feat-icon text-accent-blue" />;
      default:
        return <Zap size={28} className="feat-icon text-accent-yellow" />;
    }
  };

  return (
    <section className="business-features-section">
      <div className="section-header">
        <div className="section-kicker">
          <Zap size={14} className="text-accent-yellow" />
          <span>Why Choose Indiexplore</span>
        </div>
        <h2 className="section-title">
          Built For Players. <span className="text-gradient-electric">Engineered For Creators.</span>
        </h2>
        <p className="section-subtitle">
          We redefine what a digital gaming subscription can achieve by putting Philippine talent, fair monetization, and cultural authenticity first.
        </p>
      </div>

      <div className="features-card-grid">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="feature-icon-wrapper">
              {renderFeatureIcon(feature.icon)}
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-desc">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
