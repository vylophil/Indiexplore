# Indiexplore — Single Page Application (SPA) Business Portfolio
**INTECH 3112: Web Applications Development II — Second Term Project**  
**Academic Year:** 1st Semester A.Y. 2026–2027  
**Section:** Lab A 3-1  
**Instructor:** MARY CAMILLE DC. RABANG  

---

### Student Authors & Team Information
- **Gonzales, Ralph Jerick S.** — *Lead Frontend & Architecture*
- **Mesa, Vince Daniel** — *UI/UX & Component Engineering*
- **Siega, Vinze Norbert** — *Product Strategy & Content Design*

---

### Business Identity & Overview (Activity 4 Approved Plan)
- **Company / Business Name:** Indiexplore
- **Tagline / Slogan:** *"Explore the Unseen. Play the Extraordinary."*
- **Tagline Meaning:** Encourages players to venture beyond mainstream titles to discover hidden local talent (*"Explore the Unseen"*) and experience unique, high-quality gameplay created by Filipino indie developers (*"Play the Extraordinary"*).
- **Core Concept:** A subscription-based game pass designed for gamers and local game developers (like an "Xbox Game Pass for Pinoy Creators"). Our platform focuses specifically on indie games made by Filipino creators, bringing local talent into the global spotlight.
- **Brand Palette:**
  - **Primary:** Electric Blue (`#0052FF`)
  - **Secondary:** Neon Yellow / Gold (`#FFC700`)
  - **Accent:** Crimson Red (`#E60000`)
  - **Surfaces:** Dark Charcoal (`#121212`) & Deep Void (`#07090e`)
  *(Subtly paying homage to the Philippine national flag with an energetic, modern gaming aesthetic)*

---

### Project Architecture & Rubrics Alignment

#### 1. Component-Based Architecture (`src/components/`)
- `Navbar.jsx`: Header with brand logo, pulsing live dot, section anchors, mobile menu drawer toggle, and CTA.
- `BusinessProfile.jsx`: Business Profile/Overview with high-energy gameplay teaser card, stat counters, tagline meaning, problem solved, and target audience breakdown.
- `ProductsServices.jsx`: Products and Services catalog with dynamic category filtering.
- `ProductCard.jsx`: Reusable child component rendering each product with badge, price, description, and feature checklist.
- `GameShowcase.jsx`: Developer Spotlight / Game of the Month ("Diwata's Curse") and browseable catalog with genre filter.
- `GameCard.jsx`: Reusable child game card with rating, tags, and quick-inspect action.
- `GameModal.jsx`: Interactive modal for game inspection with a cloud stream test simulator.
- `MissionVision.jsx`: Mission and Vision statements plus the 5 Business Objectives.
- `ObjectiveCard.jsx`: Reusable child card presenting each of the 5 business milestones.
- `BusinessFeatures.jsx`: "Why Choose Us" platform differentiators.
- `SubscriptionPlans.jsx`: Pricing tiers ("LahiPlay Unlimited Pass", Student Pass, Dev Patron Pass) with interactive monthly/annual billing toggle.
- `ContactForm.jsx`: Controlled interactive contact form with real-time validation and receipt confirmation banner.
- `Footer.jsx`: Platform directory, student author credits, and back-to-top button.
- `TrialModal.jsx`: 14-day free trial onboarding modal with instant simulation.

#### 2. Props & Dynamic Data Flow
- Centralized data in `src/data/indiexploreData.js`.
- All products, services, objectives, games, and pricing tiers are stored in arrays of objects.
- Dynamically rendered using `.map()` with unique `key` props (`key={product.id}`, `key={objective.id}`, etc.).
- Props passed cleanly from parent components to child components (`ProductCard`, `GameCard`, `ObjectiveCard`).

#### 3. State Management (`useState`) & Interactivity
- **Billing Cycle Toggle:** Toggles between Monthly and Annual billing in `SubscriptionPlans.jsx`, dynamically updating prices and showing a 20% discount badge.
- **Category & Genre Filters:** In `ProductsServices.jsx` and `GameShowcase.jsx`, clicking category or genre pills dynamically re-filters the displayed cards.
- **Game Inspection Modal & Cloud Demo:** Clicking any game opens `GameModal.jsx` with an interactive stream progress bar simulation.
- **Controlled Contact Form:** Tracks user input, displays field-specific error messages, and transitions to a verified receipt screen upon submission.
- **Free Trial Onboarding:** `TrialModal.jsx` handles user registration simulation.
- **Mobile Menu Drawer:** Responsive toggle for mobile screens.

#### 4. Information Organization & Visual Presentation
- Implements all approved business data from Activity 4.
- High visual aesthetics: glassmorphism, glowing borders, custom gaming typography (Space Grotesk & Outfit).
- Responsive layout for desktop, tablet, and mobile devices.

---

### How to Run Locally

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173/`.

3. **Production Build:**
   ```bash
   npm run build
   ```
