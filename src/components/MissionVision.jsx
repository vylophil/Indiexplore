import React from "react";
import ObjectiveCard from "./ObjectiveCard";
import { Compass, Eye, Target, Flag } from "lucide-react";

/**
 * MissionVision Component
 * Renders the Mission and Vision statements alongside the 5 official
 * Business Objectives from Activity 4.
 */
export default function MissionVision({ mission, vision, objectives }) {
  return (
    <section id="mission-vision" className="mission-vision-section">
      <div className="section-header">
        <div className="section-kicker">
          <Flag size={14} className="text-accent-yellow" />
          <span>Strategic Foundation</span>
        </div>
        <h2 className="section-title">
          Mission, Vision & <span className="text-gradient-electric">Strategic Goals</span>
        </h2>
        <p className="section-subtitle">
          Guiding our commitment to empower Filipino indie developers and deliver authentic, world-class entertainment to gaming communities worldwide.
        </p>
      </div>

      {/* Mission & Vision Twin Cards */}
      <div className="mission-vision-grid">
        {/* Mission Card */}
        <div className="statement-card mission-card">
          <div className="statement-card-glow blue-glow"></div>
          <div className="statement-header">
            <div className="statement-icon-box bg-blue">
              <Compass size={28} className="text-accent-blue" />
            </div>
            <div>
              <span className="statement-kicker">Our Purpose</span>
              <h3 className="statement-heading">Mission Statement</h3>
            </div>
          </div>
          <blockquote className="statement-quote">
            "{mission}"
          </blockquote>
          <div className="statement-key-pillars">
            <div className="pillar-tag">Creator Accessibility</div>
            <div className="pillar-tag">Cultural Celebration</div>
            <div className="pillar-tag">Community-Driven Hub</div>
          </div>
        </div>

        {/* Vision Card */}
        <div className="statement-card vision-card">
          <div className="statement-card-glow yellow-glow"></div>
          <div className="statement-header">
            <div className="statement-icon-box bg-yellow">
              <Eye size={28} className="text-accent-yellow" />
            </div>
            <div>
              <span className="statement-kicker">Our North Star</span>
              <h3 className="statement-heading">Vision Statement</h3>
            </div>
          </div>
          <blockquote className="statement-quote">
            "{vision}"
          </blockquote>
          <div className="statement-key-pillars">
            <div className="pillar-tag">Premier SE Asia Hub</div>
            <div className="pillar-tag">Sustainable Developer Careers</div>
            <div className="pillar-tag">Global Gaming Culture</div>
          </div>
        </div>
      </div>

      {/* 5 Business Objectives Section */}
      <div id="objectives" className="objectives-wrapper">
        <div className="objectives-subhead">
          <div className="subhead-left">
            <Target size={20} className="text-accent-red" />
            <h3 className="subhead-title">5 Key Business Objectives</h3>
          </div>
          <p className="subhead-desc">
            Measurable, time-bound milestones establishing platform sustainability, creator funding, and community expansion.
          </p>
        </div>

        {/* Mapped array of objects using Props */}
        <div className="objectives-grid">
          {objectives.map((obj, idx) => (
            <ObjectiveCard
              key={obj.id}
              objective={obj}
              index={idx + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
