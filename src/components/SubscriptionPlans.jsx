import React, { useState } from "react";
import { Check, Sparkles, Zap, Shield, HelpCircle, ArrowRight, CheckCircle2 } from "lucide-react";

/**
 * SubscriptionPlans Component
 * Demonstrates useState() for dynamic billing cycle (Monthly vs Annual)
 * and interactive plan selection with instant UI state reaction.
 */
export default function SubscriptionPlans({ plans, onSelectPlan }) {
  const [billingCycle, setBillingCycle] = useState("monthly"); // 'monthly' | 'annual'
  const [activePlanId, setActivePlanId] = useState("plan-lahiplay");
  const [confirmationNotice, setConfirmationNotice] = useState(null);

  const handlePlanClick = (plan) => {
    setActivePlanId(plan.id);
    const priceText = billingCycle === "monthly" 
      ? `₱${plan.monthlyPrice} / month` 
      : `₱${plan.annualPrice} / year`;
    
    setConfirmationNotice({
      planName: plan.name,
      price: priceText,
      billingCycle: billingCycle === "monthly" ? "Monthly Billing" : "Annual Billing (20% Off)",
    });

    if (onSelectPlan) {
      onSelectPlan(plan, billingCycle);
    }
  };

  return (
    <section id="pricing" className="subscription-plans-section">
      <div className="section-header">
        <div className="section-kicker">
          <Sparkles size={14} className="text-accent-yellow" />
          <span>Membership Tiers</span>
        </div>
        <h2 className="section-title">
          Choose Your <span className="text-gradient-electric">LahiPlay Pass</span>
        </h2>
        <p className="section-subtitle">
          Cancel anytime. Play on PC and mobile. 70% of your subscription revenue is directly routed to local Filipino game creators.
        </p>

        {/* Interactive State Toggle: Monthly vs Annual */}
        <div className="billing-toggle-container">
          <div className="billing-toggle-card">
            <button
              type="button"
              className={`toggle-option ${billingCycle === "monthly" ? "active" : ""}`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              className={`toggle-option ${billingCycle === "annual" ? "active" : ""}`}
              onClick={() => setBillingCycle("annual")}
            >
              <span>Annual Billing</span>
              <span className="save-badge">SAVE 20%</span>
            </button>
          </div>
        </div>
      </div>

      {/* Plans Grid rendered via .map() */}
      <div className="plans-grid">
        {plans.map((plan) => {
          const isSelected = activePlanId === plan.id;
          const price = billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice;
          const billingSuffix = billingCycle === "monthly" ? "/ month" : "/ year";

          return (
            <div
              key={plan.id}
              className={`plan-card ${plan.recommended ? "plan-recommended" : ""} ${isSelected ? "plan-active" : ""}`}
            >
              {plan.badge && (
                <div className="plan-badge-tag">
                  <span>{plan.badge}</span>
                </div>
              )}

              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-desc">{plan.description}</p>
                <div className="plan-price-wrapper">
                  <span className="currency">₱</span>
                  <span className="amount">{price}</span>
                  <span className="period">{billingSuffix}</span>
                </div>
                {billingCycle === "annual" && (
                  <span className="annual-savings-pill">Includes 2 months free</span>
                )}
              </div>

              <div className="plan-features-list">
                <span className="features-headline">What's included:</span>
                <ul>
                  {plan.features.map((feature, idx) => (
                    <li key={`${plan.id}-feat-${idx}`} className="plan-feat-item">
                      <Check size={16} className="feat-check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="plan-cta-box">
                <button
                  type="button"
                  className={`btn ${plan.recommended ? "btn-primary" : "btn-secondary"} btn-block`}
                  onClick={() => handlePlanClick(plan)}
                >
                  <span>{isSelected ? "Selected Tier" : plan.cta}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Reactive State Change Banner (Produces visible UI change upon selection) */}
      {confirmationNotice && (
        <div className="plan-selected-toast">
          <div className="toast-content">
            <CheckCircle2 size={24} className="text-accent-yellow" />
            <div>
              <h4 className="toast-title">
                Selected: <strong>{confirmationNotice.planName}</strong> ({confirmationNotice.price})
              </h4>
              <p className="toast-desc">
                Your selection is locked with {confirmationNotice.billingCycle}. Ready to link your account or start your 14-day free trial without commitment.
              </p>
            </div>
          </div>
          <a href="#contact" className="btn btn-outline btn-sm">
            Proceed with this Plan
          </a>
        </div>
      )}

      {/* Student Verification Note */}
      <div className="plans-footnote">
        <HelpCircle size={16} className="text-accent-blue" />
        <span>
          Enrolled in a Philippine university or college? Upload your student ID or institutional email to activate the <strong>₱99 / mo Student Pass</strong> instantly.
        </span>
      </div>
    </section>
  );
}
