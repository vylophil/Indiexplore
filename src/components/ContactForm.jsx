import React, { useState, useEffect } from "react";
import { 
  Send, 
  CheckCircle2, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Sparkles, 
  AlertCircle, 
  Headphones, 
  Gamepad2, 
  RotateCcw 
} from "lucide-react";

/**
 * ContactForm Component
 * Fully interactive controlled form using useState() for real-time field state,
 * input validation, and submission confirmation rendering.
 */
export default function ContactForm({ prefilledInterest }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    category: prefilledInterest || "Gamer Subscription (LahiPlay Pass)",
    message: "",
  });

  // Sync prefilledInterest prop when it changes after initial mount
  useEffect(() => {
    if (prefilledInterest) {
      setFormData((prev) => ({ ...prev, category: prefilledInterest }));
    }
  }, [prefilledInterest]);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const interestOptions = [
    "Gamer Subscription (LahiPlay Pass)",
    "Developer Game Submission & Publishing",
    "University / Academic Partnership",
    "Merchandise & Art Collaboration",
    "Game Jam Sponsorship & Inquiries",
    "General Feedback & Support",
  ];

  const validate = () => {
    const errors = {};
    if (!formData.fullName.trim()) {
      errors.fullName = "Please provide your full name or gamer tag.";
    }
    if (!formData.email.trim()) {
      errors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email format.";
    }
    if (!formData.message.trim()) {
      errors.message = "Please include a message or inquiry details.";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters long.";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear field-specific error as user types
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    // Simulate reactive submission processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        ...formData,
        submittedAt: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        ticketId: `IDX-${Math.floor(100000 + Math.random() * 900000)}`,
      });
    }, 700);
  };

  const handleResetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      category: "Gamer Subscription (LahiPlay Pass)",
      message: "",
    });
    setFormErrors({});
    setSubmittedData(null);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <div className="section-kicker">
          <Mail size={14} className="text-accent-blue" />
          <span>Connect With Indiexplore</span>
        </div>
        <h2 className="section-title">
          Get in Touch & <span className="text-gradient-electric">Join the Movement</span>
        </h2>
        <p className="section-subtitle">
          Whether you're a player looking for trial support, a local indie developer with a game pitch, or a university seeking partnership, our team is ready to connect.
        </p>
      </div>

      <div className="contact-layout-grid">
        {/* Contact Information Cards Side */}
        <div className="contact-info-col">
          <div className="info-card-block">
            <h3 className="info-headline">Official Contact Channels</h3>
            <p className="info-desc">
              Reach our support team or schedule an indie studio onboarding call directly with our developer relations leads.
            </p>

            <div className="info-item-list">
              <div className="contact-detail-row">
                <div className="detail-icon-circle blue">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="detail-label">General Support & Subscriptions:</span>
                  <a href="mailto:support@indiexplore.ph" className="detail-value">
                    support@indiexplore.ph
                  </a>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="detail-icon-circle yellow">
                  <Gamepad2 size={18} />
                </div>
                <div>
                  <span className="detail-label">Developer Submissions & Pitches:</span>
                  <a href="mailto:launchpad@indiexplore.ph" className="detail-value">
                    launchpad@indiexplore.ph
                  </a>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="detail-icon-circle red">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="detail-label">Headquarters & Incubation Hub:</span>
                  <p className="detail-value text-muted">
                    Bonifacio Global City, Taguig & Quezon City Innovation Labs, Metro Manila, Philippines
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Community Discord Card */}
            <div className="community-perk-card">
              <div className="perk-badge">24/7 Live Discord</div>
              <h4 className="perk-title">Pinoy Game Dev Guild</h4>
              <p className="perk-desc">
                Over 3,500 Filipino developers, pixel artists, composers, and playtesters sharing builds daily.
              </p>
              <div className="perk-status">
                <span className="live-dot"></span>
                <span>840 members currently online</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Contact Form Side */}
        <div className="contact-form-col">
          <div className="form-card-container">
            {submittedData ? (
              /* Success Screen (Visible UI Change produced by state) */
              <div className="form-success-card">
                <div className="success-badge-icon">
                  <CheckCircle2 size={48} className="text-accent-yellow" />
                </div>
                <h3 className="success-title">Mabuhay! Message Dispatched.</h3>
                <p className="success-subtitle">
                  Salamat for reaching out to <strong>Indiexplore</strong>. A support specialist or developer relations lead will review your submission and reply within 24 business hours.
                </p>

                <div className="receipt-box">
                  <div className="receipt-row">
                    <span className="receipt-key">Ticket Reference:</span>
                    <span className="receipt-val text-accent-yellow font-mono">{submittedData.ticketId}</span>
                  </div>
                  <div className="receipt-row">
                    <span className="receipt-key">Gamer / Sender:</span>
                    <span className="receipt-val">{submittedData.fullName}</span>
                  </div>
                  <div className="receipt-row">
                    <span className="receipt-key">Reply Email:</span>
                    <span className="receipt-val">{submittedData.email}</span>
                  </div>
                  <div className="receipt-row">
                    <span className="receipt-key">Topic Selected:</span>
                    <span className="receipt-val">{submittedData.category}</span>
                  </div>
                  <div className="receipt-row">
                    <span className="receipt-key">Logged Timestamp:</span>
                    <span className="receipt-val">{submittedData.submittedAt}</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-secondary btn-block"
                  onClick={handleResetForm}
                >
                  <RotateCcw size={16} />
                  <span>Send Another Inquiry</span>
                </button>
              </div>
            ) : (
              /* Controlled Input Form */
              <form onSubmit={handleSubmit} noValidate className="interactive-form">
                <div className="form-top-bar">
                  <h3 className="form-heading">Send a Direct Message</h3>
                  <span className="form-note">Fields marked with * are required</span>
                </div>

                {/* Full Name */}
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">
                    Full Name or Dev Handle <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className={`form-input ${formErrors.fullName ? "input-error" : ""}`}
                    placeholder="e.g. Juan dela Cruz or CyberBayanihan"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  {formErrors.fullName && (
                    <span className="field-error-message">
                      <AlertCircle size={14} />
                      {formErrors.fullName}
                    </span>
                  )}
                </div>

                {/* Email Address */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address <span className="req">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-input ${formErrors.email ? "input-error" : ""}`}
                    placeholder="e.g. gamer@example.ph"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {formErrors.email && (
                    <span className="field-error-message">
                      <AlertCircle size={14} />
                      {formErrors.email}
                    </span>
                  )}
                </div>

                {/* Category Selection */}
                <div className="form-group">
                  <label htmlFor="category" className="form-label">
                    Nature of Inquiry
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="form-select"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    {interestOptions.map((opt, i) => (
                      <option key={`opt-${i}`} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Body */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Your Message / Pitch Details <span className="req">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className={`form-textarea ${formErrors.message ? "input-error" : ""}`}
                    placeholder="Tell us about your questions, game prototype link, or partnership idea..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {formErrors.message && (
                    <span className="field-error-message">
                      <AlertCircle size={14} />
                      {formErrors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-primary btn-block submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="btn-loading">
                      <span className="spinner"></span> Transmitting Inquiry...
                    </span>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
