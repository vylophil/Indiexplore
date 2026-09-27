// Indiexplore Business Data (Derived directly from Activity 4 Approved Plan)

export const businessInfo = {
  name: "Indiexplore",
  tagline: "Explore the Unseen. Play the Extraordinary.",
  taglineMeaning:
    "It encourages players to venture beyond mainstream titles to discover hidden local talent ('Explore the Unseen') and experience unique, high-quality gameplay created by Filipino indie developers ('Play the Extraordinary').",
  overview:
    "Indiexplore is a pioneering subscription-based gaming platform and digital distribution hub dedicated to indie games created by Filipino developers. Like an 'Xbox Game Pass for Pinoy Creators', we bridge local talent with gamers worldwide, spotlighting homegrown storytelling, cultural folklore, and innovative game mechanics.",
  problemSolved:
    "Filipino game developers struggle with visibility, funding, and local market reach, often leaving their extraordinary talents unrecognized locally. Simultaneously, Filipino gamers lack a centralized, affordable platform to discover homegrown titles. Indiexplore bridges this gap by offering developers a direct channel to an engaged audience, marketing power, and stable subscription revenue.",
  targetAudience: {
    ageGroup: "15 – 35 years old",
    profile:
      "Casual and core Filipino gamers, gaming enthusiasts, students, young working professionals, software developers, content creators, and the global Filipino diaspora.",
    location: "Philippines (urban centers nationwide) and international diaspora hubs.",
    valueProposition:
      "Gamers get affordable access to a diverse, culturally resonant catalog of games without buying each title individually. Developers get a dedicated launchpad handling marketing, monetization, and community building.",
  },
  mission:
    "To connect Filipino game creators with local and international players by providing an accessible, community-driven subscription platform that celebrates local talent, story, and culture.",
  vision:
    "To become the premier gaming distribution hub in Southeast Asia that empowers local developers and makes Filipino-made games a celebrated cornerstone of global gaming culture.",
  brandColors: {
    electricBlue: "#0052FF",
    neonGold: "#FFC700",
    crimsonRed: "#E60000",
    darkCharcoal: "#121212",
  },
  team: [
    { name: "Gonzales, Ralph Jerick S.", role: "Lead Frontend & Architecture" },
    { name: "Mesa, Vince Daniel", role: "UI/UX & Component Engineering" },
    { name: "Siega, Vinze Norbert", role: "Product Strategy & Content Design" },
  ],
  section: "Lab A 3-1",
  course: "INTECH 3112: Web Applications Development II",
  academicYear: "1st SEMESTER A.Y. 2026–2027",
};

// 5 Approved Core Products / Services from Activity 4
export const productsAndServices = [
  {
    id: "prod-1",
    title: "Indie Game Pass Subscription",
    badge: "Core Offering",
    featured: true,
    icon: "Gamepad2",
    shortDescription:
      "A monthly/annual pass giving players unlimited access to a curated library of Filipino-developed indie games.",
    fullDescription:
      "Our premier subscription service, the 'LahiPlay Unlimited Pass', unlocks instant cloud and local installation of dozens of award-winning Filipino indie titles across PC and mobile. Enjoy zero ads, day-one releases, and cross-save functionality.",
    highlights: [
      "Access to 30+ curated local indie titles at launch",
      "Day-one access to certified Philippine game studio releases",
      "Seamless cross-platform cloud saves on PC and mobile",
      "Exclusive subscriber badge in the community hub",
    ],
    startingPrice: "₱149 / mo",
    category: "Subscription",
  },
  {
    id: "prod-2",
    title: "Developer Launchpad & Portal",
    badge: "For Creators",
    featured: true,
    icon: "Rocket",
    shortDescription:
      "Publishing tools, analytics, and revenue-sharing services for local devs to host and monetize their titles.",
    fullDescription:
      "A comprehensive creator dashboard designed specifically for indie studios and student teams. Gain access to transparent real-time telemetry, automated telemetry SDKs, marketing boosts, and an industry-leading 70/30 revenue share model.",
    highlights: [
      "Generous 70/30 creator-first revenue split",
      "Integrated telemetry, crash logging, and player analytics",
      "Automated patch deployment and store listing manager",
      "Direct promotional spotlighting on the Indiexplore homepage",
    ],
    startingPrice: "Free onboarding",
    category: "Developer Services",
  },
  {
    id: "prod-3",
    title: "Exclusive Indie Merch",
    badge: "Fan Gear",
    featured: false,
    icon: "Shirt",
    shortDescription:
      "Physical and digital merchandise (t-shirts, posters, in-game cosmetics) celebrating local games and characters.",
    fullDescription:
      "Support your favorite Pinoy creators in style. Our merch line collaborates directly with indie game artists to produce limited-run apparel, art prints, character figurines, and exclusive digital cosmetic packs.",
    highlights: [
      "Official collaborations with indie game character designers",
      "High-grade sustainably made apparel and collectibles",
      "Bundled digital codes for exclusive in-game cosmetic skins",
      "Royalty kickback directly sent to original game artists",
    ],
    startingPrice: "From ₱299",
    category: "Merchandise",
  },
  {
    id: "prod-4",
    title: "Community & Event Hub",
    badge: "Social & Events",
    featured: false,
    icon: "Users2",
    shortDescription:
      "Forums, game jam hosting, and live-streamed developer showcases to foster fan-developer engagement.",
    fullDescription:
      "A vibrant home for the Philippine gaming ecosystem. Participate in semi-annual nationwide game jams, attend live virtual dev QA sessions, share fan art, join player voice lounges, and vote on upcoming platform features.",
    highlights: [
      "Bi-annual 'Indiexplore Jam' with industry prize pools",
      "Live developer roundtables and behind-the-scenes streams",
      "Active player forums with direct dev feedback channels",
      "Beta testing focus groups and community game awards",
    ],
    startingPrice: "Included in Pass",
    category: "Community",
  },
  {
    id: "prod-5",
    title: "Early Access & Beta Testing Access",
    badge: "VIP Tier Perk",
    featured: true,
    icon: "Sparkles",
    shortDescription:
      "Special tier perk allowing subscriber feedback during a local game's developmental phase.",
    fullDescription:
      "Get behind the curtain and play raw, unreleased vertical slices of upcoming Philippine games. Subscribers test game builds, submit bug reports directly to developers, and earn special in-game credits when games officially launch.",
    highlights: [
      "Play upcoming titles 3 to 6 months prior to commercial launch",
      "Direct Discord / Dev channel for bug submission and feature feedback",
      "Name commemorated in official game credit rolls",
      "Exclusive pre-alpha participant cosmetic flair",
    ],
    startingPrice: "Tier Perk",
    category: "Exclusive Perk",
  },
];

// 5 Approved Business Objectives from Activity 4
export const businessObjectives = [
  {
    id: "obj-1",
    target: "Objective 1",
    title: "Curated Game Roster",
    metric: "30+ Games",
    description: "Onboard at least 30 Filipino-developed indie games prior to platform commercial launch.",
    status: "In Progress (24/30)",
    icon: "Library",
  },
  {
    id: "obj-2",
    target: "Objective 2",
    title: "Active Subscriber Base",
    metric: "10,000 Users",
    description: "Reach 10,000 active paid subscribers within the first year of operation across the archipelago.",
    status: "Year 1 Target",
    icon: "TrendingUp",
  },
  {
    id: "obj-3",
    target: "Objective 3",
    title: "Academic Partnerships",
    metric: "Top Universities",
    description:
      "Partner with top Philippine universities offering Game Development programs to support student developers.",
    status: "Partnership Framework Ready",
    icon: "GraduationCap",
  },
  {
    id: "obj-4",
    target: "Objective 4",
    title: "Creator-First Revenue Share",
    metric: "70 / 30 Model",
    description:
      "Establish a sustainable 70/30 revenue-share model that directly funds participating local game studios.",
    status: "Smart Contract Verified",
    icon: "Coins",
  },
  {
    id: "obj-5",
    target: "Objective 5",
    title: "Incubation Game Jams",
    metric: "2x Annual Jams",
    description: "Host two annual digital game jams to incubate new local developer talent for the platform.",
    status: "Calendar Slated",
    icon: "Flame",
  },
];

// Curated Showcase of Filipino Indie Games (Catalog for dynamic .map() & interactive modal)
export const showcaseGames = [
  {
    id: "game-1",
    title: "Diwata's Curse",
    developer: "Anito Studios (Cebu City)",
    genre: "Action RPG",
    rating: "4.9",
    tags: ["Filipino Mythology", "Fast Combat", "Atmospheric"],
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    description:
      "An action-packed mythological hack-and-slash set deep within ancient Philippine forests. Wield elemental swords forged by Bathala and vanquish corrupted tikbalangs and engkantos.",
    features: ["Mythology-rich narrative", "60 FPS fluid hack-and-slash", "Original Kulintang synth soundtrack"],
    individualPrice: 349,
    spotlight: true,
  },
  {
    id: "game-2",
    title: "Balete Drive: Midnight Shift",
    developer: "Katipunan Interactive (Quezon City)",
    genre: "Psychological Horror",
    rating: "4.8",
    tags: ["Urban Legend", "Survival Horror", "Story Rich"],
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    description:
      "You are a nocturnal ride-hailing driver navigating the eerie streets of New Manila. Uncover dark secrets along Balete Drive as supernatural hitchhikers test your sanity.",
    features: ["Binaural 3D audio design", "Multiple branching endings", "Authentic jeepney & street aesthetics"],
    individualPrice: 299,
    spotlight: false,
  },
  {
    id: "game-3",
    title: "Jeepney Drift Grand Prix",
    developer: "Bayanihan Pixels (Davao City)",
    genre: "Arcade Racing",
    rating: "4.7",
    tags: ["Retro Pixel", "High Octane", "Multiplayer"],
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
    description:
      "Tear up EDSA and provincial mountain passes in ultra-customized Philippine jeepneys equipped with nitro boosters, neon lights, and blasting budots basslines.",
    features: ["Local 4-player splitscreen", "Deep jeepney visual customization", "Chiptune OPM remixes"],
    individualPrice: 349,
    spotlight: false,
  },
  {
    id: "game-4",
    title: "Sari-Sari Chronicles",
    developer: "Tsinelas Interactive (Manila)",
    genre: "Cozy Sim",
    rating: "4.9",
    tags: ["Cozy Simulation", "Cultural", "Chill"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    description:
      "Inherit your grandmother's beloved neighborhood sari-sari store in a sun-drenched coastal barangay. Brew iced coffee, gossip with colorful neighbors, and revitalize the community.",
    features: ["Relaxing day-night loop", "Over 100 authentic local snacks & goods", "Heartwarming character stories"],
    individualPrice: 249,
    spotlight: false,
  },
  {
    id: "game-5",
    title: "Agimat & The Cyber Void",
    developer: "Neon Tamaraw (Baguio City)",
    genre: "Cyberpunk Roguelite",
    rating: "4.8",
    tags: ["Cyberpunk", "Deckbuilder", "Roguelite"],
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80",
    description:
      "Set in Neo-Maynila 2088. Hack into mega-corporation databanks by fusing mystical indigenous talismans (Anting-Anting) with cybernetic deckbuilding augments.",
    features: ["Synergistic talisman deckbuilding", "Procedural cyber-dungeons", "Gritty neon-lit aesthetic"],
    individualPrice: 349,
    spotlight: false,
  },
  {
    id: "game-6",
    title: "Mayon: Ash & Fire",
    developer: "Bicol Tech Guild (Legazpi City)",
    genre: "Metroidvania",
    rating: "4.9",
    tags: ["2D Platformer", "Rich Lore", "Hand-Drawn"],
    image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=800&q=80",
    description:
      "A hand-drawn 2D metroidvania chronicling the eternal tragic love story of Daragang Magayon. Traverse lava caverns and cloud peaks using wind and flame dash abilities.",
    features: ["Hand-painted Filipino art style", "Fluid precision platforming", "Epic multi-phase boss battles"],
    individualPrice: 399,
    spotlight: false,
  },
  {
    id: "game-7",
    title: "Alamat: The Lost Tribe",
    developer: "UST Game Lab & Student Guild (Manila)",
    genre: "Action-Adventure",
    rating: "4.8",
    tags: ["Student Project", "Archaeology", "Puzzles"],
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    description:
      "A high-praise student capstone project. Unravel ancient pre-colonial indigenous script and solve environmental water puzzles in hidden subterranean caves.",
    features: ["Pre-colonial Baybayin cipher mechanics", "Lush cave lighting", "Winner of Best Student Game 2026"],
    individualPrice: 199,
    spotlight: false,
  },
  {
    id: "game-8",
    title: "Kanto Fighter: Barangay Brawl",
    developer: "De La Salle-CSB Pixel Team (Taft Ave, Manila)",
    genre: "Arcade Beat 'em Up",
    rating: "4.7",
    tags: ["Student Project", "Pixel Art", "Retro"],
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80",
    description:
      "A nostalgic 90s-style arcade brawler set in neighborhood basketball courts and fiesta streets. Team up with friends and wield slippers, monobloc chairs, and arnis sticks!",
    features: ["Retro 16-bit sprites", "Local 2-player co-op", "Hilarious sound effects & street banter"],
    individualPrice: 199,
    spotlight: false,
  },
];

// Curated Game Bundles Database (Discounted bundles for cheaper ownership)
export const gameBundles = [
  {
    id: "bundle-summer",
    title: "Pinoy Summer Mega Bundle",
    badge: "Summer Special • 65% OFF",
    season: "Summer Edition 2026",
    tagline: "Beat the tropical heat with 4 top-rated Philippine indie masterpieces in one high-value pack!",
    bannerImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
    gameIds: ["game-1", "game-3", "game-4", "game-6"],
    originalPrice: 1346,
    bundlePrice: 469,
    savingsPercentage: 65,
    lahiPlayPerk: "Or included FREE with LahiPlay Unlimited Pass",
    perks: [
      "Keep all 4 games forever in your personal vault (DRM-Free)",
      "Includes 4 Complete Digital Soundtracks (FLAC + MP3 320kbps)",
      "Exclusive 'Halo-Halo Nitro' Jeepney livery in Jeepney Drift",
      "Digital Artbook: 'Creatures of the Archipelago' (120-page PDF)",
      "65% savings compared to purchasing each game individually"
    ],
    highlighted: true,
  },
  {
    id: "bundle-folklore",
    title: "Philippine Mythology & Dark Lore Pack",
    badge: "Mythology Collector • 55% OFF",
    season: "Folklore & Horror Collection",
    tagline: "Encounter ancient diwatas, cursed balete drives, and volcanic deities of Bicol.",
    bannerImage: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
    gameIds: ["game-1", "game-2", "game-6"],
    originalPrice: 1047,
    bundlePrice: 469,
    savingsPercentage: 55,
    lahiPlayPerk: "Or included FREE with LahiPlay Unlimited Pass",
    perks: [
      "3 Full atmospheric story-driven Philippine myth titles",
      "Behind-the-scenes folklore documentary interview with creators",
      "Exclusive in-game 'Anting-Anting' protective charm cosmetic",
      "Original Kulintang synth and binaural 3D audio tracks"
    ],
    highlighted: false,
  },
  {
    id: "bundle-arcade-future",
    title: "Neo-Manila Cyber & Speed Duo",
    badge: "Adrenaline Pack • 50% OFF",
    season: "Fast-Paced & Competitive",
    tagline: "Drift neon jeepneys across EDSA and hack mega-corporation databanks with mystical agimat.",
    bannerImage: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80",
    gameIds: ["game-3", "game-5"],
    originalPrice: 698,
    bundlePrice: 349,
    savingsPercentage: 50,
    lahiPlayPerk: "Or included FREE with LahiPlay Unlimited Pass",
    perks: [
      "2 Fast-paced competitive & roguelite titles",
      "Multiplayer split-screen and cloud leaderboard access",
      "Exclusive Cyber-Tamaraw holographic player emblem",
      "Chiptune & Synthwave OPM remix EP download"
    ],
    highlighted: false,
  },
  {
    id: "bundle-student-spotlight",
    title: "University Rising Stars Showcase Bundle",
    badge: "Student Grant • 60% OFF",
    season: "Student Creator Special",
    tagline: "Outstanding capstone projects and debut titles from student developers across PH universities.",
    bannerImage: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80",
    gameIds: ["game-4", "game-7", "game-8"],
    originalPrice: 647,
    bundlePrice: 259,
    savingsPercentage: 60,
    lahiPlayPerk: "Or included FREE with LahiPlay Unlimited Pass",
    perks: [
      "100% of bundle revenue goes directly to student creator tech & tuition funds",
      "Includes student developer commentary audio track",
      "Special 'Student Patron' badge on Indiexplore community forums",
      "Access to raw early concept pitch decks and sketch galleries"
    ],
    highlighted: false,
  },
];

// Subscription Plans (Activity 4 Highlight: "LahiPlay Unlimited Pass", Student Pass vs Standard Pass)
export const subscriptionPlans = [
  {
    id: "plan-student",
    name: "Student Game Pass",
    badge: "Student Verified",
    monthlyPrice: 99,
    annualPrice: 890,
    description: "Tailored for college students and aspiring game developers with a valid school ID.",
    features: [
      "Full access to 30+ Filipino indie game titles",
      "Unlimited cloud and offline PC/mobile play",
      "Developer forum & community Discord access",
      "Special discounts on student dev game jams",
      "1 simultaneous device stream",
    ],
    cta: "Claim Student Discount",
    recommended: false,
  },
  {
    id: "plan-lahiplay",
    name: "LahiPlay Unlimited Pass",
    badge: "Most Popular",
    monthlyPrice: 199,
    annualPrice: 1790,
    description: "The core gaming subscription tier spotlighting the best of Philippine indie creativity.",
    features: [
      "Complete library of 30+ Filipino indie titles",
      "Day-one access to new local studio releases",
      "Early Access & Beta testing privileges",
      "Exclusive in-game cosmetics & Pinoy character skins",
      "10% discount on all physical indie merch orders",
      "3 simultaneous device streams",
    ],
    cta: "Start 14-Day Free Trial",
    recommended: true,
  },
  {
    id: "plan-dev-patron",
    name: "Dev Patron & Studio Pass",
    badge: "Creator Supporter",
    monthlyPrice: 349,
    annualPrice: 3140,
    description: "For true patrons of Pinoy gaming who want to directly supercharge local indie studios.",
    features: [
      "Everything in LahiPlay Unlimited Pass",
      "Additional 50% revenue tip routed directly to indie devs",
      "Your name featured in Indiexplore Patron Credits",
      "VIP invitation to bi-annual closed Game Jam judging",
      "Exclusive quarterly developer artbook PDF & soundtracks",
      "Unlimited simultaneous devices",
    ],
    cta: "Become a Patron",
    recommended: false,
  },
];

// Why Choose Us / Platform Features
export const platformFeatures = [
  {
    id: "feat-1",
    title: "100% Filipino-Made",
    description: "Every single title on Indiexplore is developed by homegrown studios, indie solo creators, or passionate student teams across Luzon, Visayas, and Mindanao.",
    icon: "Compass",
  },
  {
    id: "feat-2",
    title: "70/30 Dev-First Split",
    description: "We empower creators by delivering 70% of subscription revenue directly to game studios based on player engagement, fueling sustainable local gaming careers.",
    icon: "HeartHandshake",
  },
  {
    id: "feat-3",
    title: "Cultural Storytelling",
    description: "Experience authentic Philippine mythology, iconic folklore, humor, and heart that mainstream international game distributors frequently overlook.",
    icon: "BookOpenCheck",
  },
  {
    id: "feat-4",
    title: "No Hidden Paywalls",
    description: "One subscription unlocks everything. No predatory gacha microtransactions or forced advertisements—just pure, artistic video game entertainment.",
    icon: "ShieldCheck",
  },
];
