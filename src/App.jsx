import React, { useState } from "react";
import Navbar from "./components/Navbar";
import BusinessProfile from "./components/BusinessProfile";
import ProductsServices from "./components/ProductsServices";
import GameShowcase from "./components/GameShowcase";
import GameBundles from "./components/GameBundles";
import MissionVision from "./components/MissionVision";
import BusinessFeatures from "./components/BusinessFeatures";
import SubscriptionPlans from "./components/SubscriptionPlans";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import TrialModal from "./components/TrialModal";
import "./App.css";

// Import Centralized Business Data
import {
  businessInfo,
  productsAndServices,
  businessObjectives,
  showcaseGames,
  gameBundles,
  subscriptionPlans,
  platformFeatures,
} from "./data/indiexploreData";

/**
 * Main App Component
 * Integrates all modular functional components, manages cross-component state,
 * and passes props down to child components.
 */
export default function App() {
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  const [selectedPlanForTrial, setSelectedPlanForTrial] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [prefilledContactCategory, setPrefilledContactCategory] = useState("");

  // Handler to open trial modal with optional plan preselection
  const handleOpenTrial = (plan = null) => {
    setSelectedPlanForTrial(plan);
    setIsTrialOpen(true);
  };

  const handleCloseTrial = () => {
    setIsTrialOpen(false);
    setSelectedPlanForTrial(null);
  };

  // Handler when user selects a product service card
  const handleSelectProduct = (product) => {
    setSelectedProductId(product.id);
    setPrefilledContactCategory(
      product.category === "Developer Services"
        ? "Developer Game Submission & Publishing"
        : "Gamer Subscription (LahiPlay Pass)"
    );

    // Scroll smoothly to contact or relevant section
    const targetElement = document.getElementById("contact");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app-layout">
      {/* 1. Header / Navbar */}
      <Navbar onStartTrial={() => handleOpenTrial()} />

      <main className="main-content">
        {/* 2. Business Profile / Overview / Hero */}
        <BusinessProfile
          businessInfo={businessInfo}
          onStartTrial={() => handleOpenTrial()}
          onExploreCatalog={() => {
            const el = document.getElementById("catalog");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* 3. Products & Services (Rendered via Props & .map()) */}
        <ProductsServices
          products={productsAndServices}
          onSelectProduct={handleSelectProduct}
          selectedProductId={selectedProductId}
        />

        {/* 4. Featured Games Catalog & Spotlight (Interactive Showcase with Modal) */}
        <GameShowcase
          games={showcaseGames}
          onSelectPass={() => handleOpenTrial()}
        />

        {/* 5. Discounted Game Bundles (Seasonal Packs & Custom Bundle Builder) */}
        <GameBundles
          bundles={gameBundles}
          allGames={showcaseGames}
          onExplorePass={() => handleOpenTrial()}
        />

        {/* 6. Mission, Vision & 5 Business Objectives (Props passed to child components) */}
        <MissionVision
          mission={businessInfo.mission}
          vision={businessInfo.vision}
          objectives={businessObjectives}
        />

        {/* 7. Why Choose Us / Platform Features */}
        <BusinessFeatures features={platformFeatures} />

        {/* 8. Subscription Plans with Monthly/Annual state toggle */}
        <SubscriptionPlans
          plans={subscriptionPlans}
          onSelectPlan={(plan, billingCycle) => {
            setSelectedPlanForTrial({
              name: plan.name,
              price: billingCycle === "monthly" ? `₱${plan.monthlyPrice} / mo` : `₱${plan.annualPrice} / yr`,
              description: plan.description,
            });
            setIsTrialOpen(true);
          }}
        />

        {/* 9. Contact Information & Interactive Form */}
        <ContactForm prefilledInterest={prefilledContactCategory} />
      </main>

      {/* 9. Footer with student author credits */}
      <Footer businessInfo={businessInfo} />

      {/* Interactive Free Trial / Subscription Activation Modal */}
      <TrialModal
        isOpen={isTrialOpen}
        onClose={handleCloseTrial}
        selectedPlan={selectedPlanForTrial}
      />
    </div>
  );
}
