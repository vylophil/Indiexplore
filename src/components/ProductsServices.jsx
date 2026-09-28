import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { Layers, Filter } from "lucide-react";

/**
 * ProductsServices Component
 * Receives the array of products via props, filters dynamically using useState(),
 * and renders each product through reusable ProductCard components using .map().
 */
export default function ProductsServices({ products, onSelectProduct, selectedProductId }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Derive unique categories from products list
  const categories = ["All", ...new Set(products.map((item) => item.category))];

  // Filter products based on selected tab state
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  return (
    <section id="products-services" className="products-services-section">
      <div className="section-header">
        <div className="section-kicker">
          <Layers size={14} className="text-accent-blue" />
          <span>Core Offerings & Ecosystem</span>
        </div>
        <h2 className="section-title">
          Our Products & <span className="text-gradient-electric">Services</span>
        </h2>
        <p className="section-subtitle">
          Designed specifically to uplift Philippine indie game creators while delivering maximum value, cultural authenticity, and endless entertainment to gamers.
        </p>
      </div>

      {/* Interactive Category Filter Pills (useState Demo) */}
      <div className="category-filter-bar">
        <div className="filter-label">
          <Filter size={16} />
          <span>Filter Offerings:</span>
        </div>
        <div className="filter-pill-group">
          {categories.map((category) => (
            <button
              key={`category-${category}`}
              type="button"
              className={`filter-pill-btn ${selectedCategory === category ? "active" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
              {category === "All" ? ` (${products.length})` : ""}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Products Grid rendering via .map() */}
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isSelected={selectedProductId === product.id}
            onSelectService={onSelectProduct}
          />
        ))}
      </div>

      {/* Callout Notice for Developers & Students */}
      <div className="creator-spotlight-banner">
        <div className="banner-text-side">
          <h4 className="banner-title">Are you a Filipino Game Developer or Student Studio?</h4>
          <p className="banner-description">
            Submit your playable demo or vertical slice today. Benefit from our 70/30 creator revenue split, marketing spotlight, and zero upfront hosting fees.
          </p>
        </div>
        <div className="banner-action-side">
          <a href="#contact" className="btn btn-primary">
            Submit Game to Launchpad
          </a>
        </div>
      </div>
    </section>
  );
}
