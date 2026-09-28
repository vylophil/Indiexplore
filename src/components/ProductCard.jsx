import React from "react";
import { 
  Gamepad2, 
  Rocket, 
  Shirt, 
  Users2, 
  Package, 
  Check, 
  ArrowRight 
} from "lucide-react";

/**
 * ProductCard Component
 * Reusable child component receiving product item data via Props.
 */
export default function ProductCard({ product, onSelectService, isSelected }) {
  // Map string icon names to Lucide Icon components
  const renderIcon = (iconName) => {
    switch (iconName) {
      case "Gamepad2":
        return <Gamepad2 size={24} className="product-icon-svg" />;
      case "Rocket":
        return <Rocket size={24} className="product-icon-svg" />;
      case "Shirt":
        return <Shirt size={24} className="product-icon-svg" />;
      case "Users2":
        return <Users2 size={24} className="product-icon-svg" />;
      case "Package":
        return <Package size={24} className="product-icon-svg" />;
      default:
        return <Gamepad2 size={24} className="product-icon-svg" />;
    }
  };

  return (
    <div className={`product-card ${product.featured ? "is-featured" : ""} ${isSelected ? "is-selected" : ""}`}>
      {product.badge && (
        <div className="product-card-badge">
          <span>{product.badge}</span>
        </div>
      )}

      <div className="product-card-header">
        <div className="product-icon-box">
          {renderIcon(product.icon)}
        </div>
        <div className="product-meta">
          <span className="product-category">{product.category}</span>
          <span className="product-price">{product.startingPrice}</span>
        </div>
      </div>

      <h3 className="product-card-title">{product.title}</h3>
      <p className="product-card-short-desc">{product.shortDescription}</p>

      {/* Expanded full description */}
      <p className="product-card-full-desc">{product.fullDescription}</p>

      {/* Key Highlights List */}
      <div className="product-highlights-box">
        <span className="highlights-label">Key Features & Inclusions:</span>
        <ul className="product-highlights-list">
          {product.highlights.map((item, idx) => (
            <li key={`${product.id}-highlight-${idx}`} className="highlight-item">
              <Check size={14} className="highlight-check-icon" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="product-card-footer">
        <button
          type="button"
          className="btn btn-outline product-action-btn"
          onClick={() => onSelectService(product)}
        >
          <span>{isSelected ? "Selected Service" : "Learn More & Inquire"}</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
