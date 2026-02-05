// Pre-indexed career data for fast filtering and matching
// This data structure is optimized for intersection-based filtering

export interface Career {
  id: string;
  title: string;
  description: string;
  interests: string[]; // Primary interest categories this career belongs to
  interestCombinations: string[]; // Specific combinations like "Sports+Business"
  preferences: {
    workStyle: string[];
    values: string[];
    environment: string[];
  };
  relevanceScore: number; // Base relevance for sorting
  demand: "High" | "Medium" | "Low";
  growthRate: string;
  salaryRange: string;
  education: string;
  tags: string[];
}

export interface CareerDetail extends Career {
  overview: string;
  dailyWork: string[];
  challenges: string[];
  workLifeBalance: string;
  stressLevel: string;
  stability: string;
  roadmap: {
    undergraduate: { degree: string; duration: string; link: string }[];
    postgraduate: { degree: string; duration: string; link: string }[];
    certifications: { name: string; provider: string; link: string }[];
    progression: string[];
  };
  futureOutlook: {
    description: string;
    source: string;
    sourceLink: string;
  };
  researchTips: string[];
  relatedCareers: string[];
  articles: { title: string; source: string; link: string }[];
}

// Interest categories
export const INTEREST_CATEGORIES = [
  { id: "technology", label: "Technology & Computing", icon: "💻" },
  { id: "business", label: "Business & Finance", icon: "📊" },
  { id: "healthcare", label: "Healthcare & Medicine", icon: "🏥" },
  { id: "arts", label: "Arts & Creative", icon: "🎨" },
  { id: "science", label: "Science & Research", icon: "🔬" },
  { id: "engineering", label: "Engineering", icon: "⚙️" },
  { id: "education", label: "Education & Training", icon: "📚" },
  { id: "sports", label: "Sports & Fitness", icon: "⚽" },
  { id: "media", label: "Media & Communication", icon: "📱" },
  { id: "law", label: "Law & Policy", icon: "⚖️" },
  { id: "environment", label: "Environment & Sustainability", icon: "🌱" },
  { id: "hospitality", label: "Hospitality & Tourism", icon: "✈️" },
] as const;

// Pre-computed intersection mappings for fast lookup
export const INTERSECTION_CAREERS: Record<string, string[]> = {
  "sports+business": [
    "sports-manager", "sports-marketing-manager", "athletic-director", 
    "sports-agent", "sports-finance-analyst", "sports-franchise-owner",
    "sports-analytics-manager", "sports-sponsorship-manager", "sports-event-manager",
    "sports-merchandise-manager", "esports-business-manager", "sports-consultant"
  ],
  "sports+technology": [
    "sports-data-analyst", "sports-software-engineer", "wearable-tech-developer",
    "sports-performance-analyst", "esports-developer", "sports-app-developer",
    "sports-ai-engineer", "sports-biomechanics-analyst", "virtual-sports-developer"
  ],
  "sports+healthcare": [
    "sports-medicine-physician", "athletic-trainer", "sports-physiotherapist",
    "sports-nutritionist", "sports-psychologist", "exercise-physiologist",
    "sports-rehabilitation-specialist", "team-physician", "sports-chiropractor"
  ],
  "technology+business": [
    "product-manager", "tech-entrepreneur", "it-consultant", "business-analyst",
    "tech-sales-engineer", "venture-capitalist-tech", "fintech-manager",
    "digital-transformation-lead", "tech-project-manager", "data-product-manager"
  ],
  "technology+healthcare": [
    "health-informatics-specialist", "biomedical-engineer", "telemedicine-developer",
    "healthcare-data-scientist", "medical-device-engineer", "clinical-software-developer",
    "health-tech-product-manager", "ai-healthcare-researcher", "ehr-specialist"
  ],
  "technology+arts": [
    "ux-designer", "game-developer", "vr-ar-designer", "digital-artist",
    "motion-graphics-designer", "creative-technologist", "multimedia-developer",
    "3d-modeler", "interactive-media-designer", "nft-artist"
  ],
  "business+healthcare": [
    "healthcare-administrator", "hospital-ceo", "health-economist",
    "pharmaceutical-sales-manager", "healthcare-consultant", "medical-practice-manager",
    "health-insurance-analyst", "clinical-operations-manager", "biotech-business-developer"
  ],
  "arts+media": [
    "creative-director", "art-director", "film-producer", "animation-director",
    "broadcast-designer", "multimedia-artist", "content-creator", "podcast-producer",
    "music-video-director", "visual-effects-artist"
  ],
  "science+technology": [
    "data-scientist", "research-scientist", "computational-biologist",
    "machine-learning-engineer", "quantum-computing-researcher", "bioinformatics-specialist",
    "materials-scientist", "ai-researcher", "robotics-researcher"
  ],
  "engineering+environment": [
    "environmental-engineer", "renewable-energy-engineer", "sustainability-consultant",
    "green-building-engineer", "water-resources-engineer", "waste-management-engineer",
    "climate-engineer", "solar-energy-engineer", "wind-energy-engineer"
  ],
  "business+law": [
    "corporate-lawyer", "compliance-officer", "legal-consultant", "contract-manager",
    "intellectual-property-manager", "regulatory-affairs-specialist", "mergers-acquisitions-lawyer",
    "business-litigation-attorney", "corporate-governance-specialist"
  ],
  "media+technology": [
    "social-media-manager", "digital-marketing-specialist", "seo-specialist",
    "content-strategist", "marketing-technologist", "growth-hacker",
    "programmatic-advertising-specialist", "influencer-marketing-manager", "podcast-technologist"
  ],
  "education+technology": [
    "instructional-designer", "edtech-product-manager", "e-learning-developer",
    "educational-technologist", "online-course-creator", "learning-experience-designer",
    "educational-data-analyst", "stem-education-specialist", "coding-bootcamp-instructor"
  ],
  "hospitality+business": [
    "hotel-manager", "restaurant-owner", "tourism-director", "event-planner",
    "hospitality-consultant", "cruise-director", "resort-manager", "catering-business-owner",
    "destination-marketing-manager", "travel-agency-owner"
  ],
};

// Master career database - structured for fast filtering
export const CAREERS_DATABASE: Career[] = [
  // Sports + Business Intersection
  {
    id: "sports-manager",
    title: "Sports Manager",
    description: "Manage operations, finances, and strategy for sports teams and organizations.",
    interests: ["sports", "business"],
    interestCombinations: ["sports+business"],
    preferences: { workStyle: ["leadership", "collaborative"], values: ["competition", "success"], environment: ["office", "arena"] },
    relevanceScore: 95,
    demand: "High",
    growthRate: "12% (2023-2033)",
    salaryRange: "$50,000 - $150,000+",
    education: "Bachelor's in Sports Management or Business",
    tags: ["Management", "Sports", "Business", "Leadership"]
  },
  {
    id: "sports-marketing-manager",
    title: "Sports Marketing Manager",
    description: "Develop and execute marketing campaigns for sports teams, athletes, and events.",
    interests: ["sports", "business", "media"],
    interestCombinations: ["sports+business", "sports+media"],
    preferences: { workStyle: ["creative", "strategic"], values: ["creativity", "impact"], environment: ["office", "events"] },
    relevanceScore: 94,
    demand: "High",
    growthRate: "10% (2023-2033)",
    salaryRange: "$55,000 - $130,000",
    education: "Bachelor's in Marketing or Sports Management",
    tags: ["Marketing", "Sports", "Campaigns", "Branding"]
  },
  {
    id: "athletic-director",
    title: "Athletic Director",
    description: "Oversee all aspects of athletic programs at schools, colleges, or organizations.",
    interests: ["sports", "business", "education"],
    interestCombinations: ["sports+business", "sports+education"],
    preferences: { workStyle: ["leadership", "administrative"], values: ["education", "athletics"], environment: ["campus", "office"] },
    relevanceScore: 92,
    demand: "Medium",
    growthRate: "8% (2023-2033)",
    salaryRange: "$70,000 - $200,000+",
    education: "Master's in Sports Administration preferred",
    tags: ["Athletics", "Education", "Administration", "Leadership"]
  },
  {
    id: "sports-agent",
    title: "Sports Agent",
    description: "Represent athletes in contract negotiations and endorsement deals.",
    interests: ["sports", "business", "law"],
    interestCombinations: ["sports+business", "sports+law"],
    preferences: { workStyle: ["negotiation", "networking"], values: ["success", "relationships"], environment: ["office", "travel"] },
    relevanceScore: 93,
    demand: "Medium",
    growthRate: "7% (2023-2033)",
    salaryRange: "$40,000 - $1,000,000+ (commission-based)",
    education: "Bachelor's in Sports Management, Law degree preferred",
    tags: ["Negotiation", "Representation", "Contracts", "Athletes"]
  },
  {
    id: "sports-analytics-manager",
    title: "Sports Analytics Manager",
    description: "Lead data analysis teams to improve team performance and business decisions.",
    interests: ["sports", "business", "technology"],
    interestCombinations: ["sports+business", "sports+technology"],
    preferences: { workStyle: ["analytical", "leadership"], values: ["data", "innovation"], environment: ["office", "arena"] },
    relevanceScore: 96,
    demand: "High",
    growthRate: "25% (2023-2033)",
    salaryRange: "$80,000 - $180,000",
    education: "Master's in Data Science or Sports Analytics",
    tags: ["Analytics", "Data", "Sports", "Leadership"]
  },
  
  // Technology + Business
  {
    id: "product-manager",
    title: "Product Manager",
    description: "Drive product strategy and development, bridging business goals with technology solutions.",
    interests: ["technology", "business"],
    interestCombinations: ["technology+business"],
    preferences: { workStyle: ["strategic", "collaborative"], values: ["innovation", "impact"], environment: ["office", "remote"] },
    relevanceScore: 97,
    demand: "High",
    growthRate: "22% (2023-2033)",
    salaryRange: "$100,000 - $200,000+",
    education: "Bachelor's in Business, CS, or related field",
    tags: ["Product", "Strategy", "Technology", "Leadership"]
  },
  {
    id: "tech-entrepreneur",
    title: "Tech Entrepreneur",
    description: "Found and grow technology startups, turning innovative ideas into businesses.",
    interests: ["technology", "business"],
    interestCombinations: ["technology+business"],
    preferences: { workStyle: ["independent", "risk-taking"], values: ["innovation", "autonomy"], environment: ["startup", "flexible"] },
    relevanceScore: 95,
    demand: "High",
    growthRate: "15% (2023-2033)",
    salaryRange: "$0 - $10,000,000+ (variable)",
    education: "Varied - often self-taught or CS/Business degree",
    tags: ["Startup", "Innovation", "Business", "Leadership"]
  },
  {
    id: "data-product-manager",
    title: "Data Product Manager",
    description: "Manage data-driven products and platforms, combining analytics with business strategy.",
    interests: ["technology", "business"],
    interestCombinations: ["technology+business"],
    preferences: { workStyle: ["analytical", "strategic"], values: ["data", "innovation"], environment: ["office", "remote"] },
    relevanceScore: 94,
    demand: "High",
    growthRate: "28% (2023-2033)",
    salaryRange: "$120,000 - $220,000",
    education: "Bachelor's/Master's in Data Science or Business",
    tags: ["Data", "Product", "Analytics", "Strategy"]
  },

  // Healthcare + Technology
  {
    id: "health-informatics-specialist",
    title: "Health Informatics Specialist",
    description: "Design and manage healthcare information systems and data infrastructure.",
    interests: ["healthcare", "technology"],
    interestCombinations: ["technology+healthcare"],
    preferences: { workStyle: ["analytical", "systematic"], values: ["health", "technology"], environment: ["hospital", "office"] },
    relevanceScore: 93,
    demand: "High",
    growthRate: "18% (2023-2033)",
    salaryRange: "$70,000 - $130,000",
    education: "Bachelor's in Health Informatics or related field",
    tags: ["Healthcare", "IT", "Data", "Systems"]
  },
  {
    id: "biomedical-engineer",
    title: "Biomedical Engineer",
    description: "Design medical devices and systems to improve patient care.",
    interests: ["healthcare", "engineering", "technology"],
    interestCombinations: ["technology+healthcare", "engineering+healthcare"],
    preferences: { workStyle: ["innovative", "research"], values: ["health", "innovation"], environment: ["lab", "office"] },
    relevanceScore: 94,
    demand: "High",
    growthRate: "10% (2023-2033)",
    salaryRange: "$65,000 - $140,000",
    education: "Bachelor's/Master's in Biomedical Engineering",
    tags: ["Medical Devices", "Engineering", "Healthcare", "Innovation"]
  },

  // Arts + Technology
  {
    id: "ux-designer",
    title: "UX Designer",
    description: "Create user-centered digital experiences that are intuitive and engaging.",
    interests: ["arts", "technology"],
    interestCombinations: ["technology+arts"],
    preferences: { workStyle: ["creative", "research"], values: ["user-focus", "design"], environment: ["office", "remote"] },
    relevanceScore: 96,
    demand: "High",
    growthRate: "16% (2023-2033)",
    salaryRange: "$70,000 - $150,000",
    education: "Bachelor's in Design, HCI, or related field",
    tags: ["Design", "UX", "Digital", "Creative"]
  },
  {
    id: "game-developer",
    title: "Game Developer",
    description: "Design and code video games for entertainment and educational purposes.",
    interests: ["arts", "technology"],
    interestCombinations: ["technology+arts"],
    preferences: { workStyle: ["creative", "technical"], values: ["creativity", "entertainment"], environment: ["studio", "remote"] },
    relevanceScore: 95,
    demand: "High",
    growthRate: "11% (2023-2033)",
    salaryRange: "$55,000 - $130,000",
    education: "Bachelor's in Computer Science or Game Development",
    tags: ["Gaming", "Programming", "Creative", "Entertainment"]
  },

  // Science + Technology
  {
    id: "data-scientist",
    title: "Data Scientist",
    description: "Extract insights from complex data to drive decision-making and innovation.",
    interests: ["science", "technology"],
    interestCombinations: ["science+technology"],
    preferences: { workStyle: ["analytical", "research"], values: ["discovery", "impact"], environment: ["office", "remote"] },
    relevanceScore: 98,
    demand: "High",
    growthRate: "35% (2023-2033)",
    salaryRange: "$85,000 - $180,000",
    education: "Master's in Data Science, Statistics, or related field",
    tags: ["Data", "Analytics", "Machine Learning", "Research"]
  },
  {
    id: "machine-learning-engineer",
    title: "Machine Learning Engineer",
    description: "Build and deploy AI/ML models to solve complex problems at scale.",
    interests: ["science", "technology"],
    interestCombinations: ["science+technology"],
    preferences: { workStyle: ["technical", "innovative"], values: ["innovation", "impact"], environment: ["office", "remote"] },
    relevanceScore: 97,
    demand: "High",
    growthRate: "40% (2023-2033)",
    salaryRange: "$100,000 - $250,000+",
    education: "Master's/PhD in CS, ML, or related field",
    tags: ["AI", "Machine Learning", "Engineering", "Innovation"]
  },

  // Environment + Engineering
  {
    id: "environmental-engineer",
    title: "Environmental Engineer",
    description: "Design solutions to environmental problems like pollution and waste management.",
    interests: ["environment", "engineering"],
    interestCombinations: ["engineering+environment"],
    preferences: { workStyle: ["analytical", "fieldwork"], values: ["sustainability", "impact"], environment: ["office", "field"] },
    relevanceScore: 92,
    demand: "High",
    growthRate: "6% (2023-2033)",
    salaryRange: "$60,000 - $120,000",
    education: "Bachelor's in Environmental Engineering",
    tags: ["Environment", "Sustainability", "Engineering", "Solutions"]
  },
  {
    id: "renewable-energy-engineer",
    title: "Renewable Energy Engineer",
    description: "Design and develop clean energy systems like solar, wind, and hydroelectric power.",
    interests: ["environment", "engineering"],
    interestCombinations: ["engineering+environment"],
    preferences: { workStyle: ["innovative", "technical"], values: ["sustainability", "innovation"], environment: ["office", "field"] },
    relevanceScore: 95,
    demand: "High",
    growthRate: "17% (2023-2033)",
    salaryRange: "$70,000 - $140,000",
    education: "Bachelor's in Electrical or Mechanical Engineering",
    tags: ["Renewable", "Energy", "Sustainability", "Engineering"]
  },

  // Education + Technology
  {
    id: "instructional-designer",
    title: "Instructional Designer",
    description: "Create engaging educational content and learning experiences using technology.",
    interests: ["education", "technology"],
    interestCombinations: ["education+technology"],
    preferences: { workStyle: ["creative", "systematic"], values: ["education", "innovation"], environment: ["office", "remote"] },
    relevanceScore: 91,
    demand: "High",
    growthRate: "14% (2023-2033)",
    salaryRange: "$55,000 - $100,000",
    education: "Master's in Instructional Design or Education",
    tags: ["Education", "Design", "E-learning", "Technology"]
  },
  {
    id: "edtech-product-manager",
    title: "EdTech Product Manager",
    description: "Lead development of educational technology products that transform learning.",
    interests: ["education", "technology", "business"],
    interestCombinations: ["education+technology", "technology+business"],
    preferences: { workStyle: ["strategic", "collaborative"], values: ["education", "innovation"], environment: ["office", "remote"] },
    relevanceScore: 93,
    demand: "High",
    growthRate: "20% (2023-2033)",
    salaryRange: "$90,000 - $170,000",
    education: "Bachelor's/Master's in Education or Business",
    tags: ["EdTech", "Product", "Education", "Innovation"]
  },

  // Pure interests - Technology
  {
    id: "software-engineer",
    title: "Software Engineer",
    description: "Design, develop, and maintain software applications and systems.",
    interests: ["technology"],
    interestCombinations: [],
    preferences: { workStyle: ["technical", "problem-solving"], values: ["innovation", "quality"], environment: ["office", "remote"] },
    relevanceScore: 95,
    demand: "High",
    growthRate: "25% (2023-2033)",
    salaryRange: "$80,000 - $200,000+",
    education: "Bachelor's in Computer Science",
    tags: ["Programming", "Development", "Technology", "Engineering"]
  },
  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity Analyst",
    description: "Protect organizations from cyber threats and security breaches.",
    interests: ["technology"],
    interestCombinations: [],
    preferences: { workStyle: ["analytical", "vigilant"], values: ["security", "protection"], environment: ["office", "remote"] },
    relevanceScore: 94,
    demand: "High",
    growthRate: "32% (2023-2033)",
    salaryRange: "$75,000 - $160,000",
    education: "Bachelor's in Cybersecurity or Computer Science",
    tags: ["Security", "Technology", "Analysis", "Protection"]
  },

  // Pure interests - Healthcare
  {
    id: "physician",
    title: "Physician",
    description: "Diagnose and treat patients, providing comprehensive medical care.",
    interests: ["healthcare"],
    interestCombinations: [],
    preferences: { workStyle: ["clinical", "caring"], values: ["health", "service"], environment: ["hospital", "clinic"] },
    relevanceScore: 95,
    demand: "High",
    growthRate: "3% (2023-2033)",
    salaryRange: "$200,000 - $500,000+",
    education: "MD/DO with residency training",
    tags: ["Medicine", "Healthcare", "Clinical", "Patient Care"]
  },
  {
    id: "registered-nurse",
    title: "Registered Nurse",
    description: "Provide and coordinate patient care in various healthcare settings.",
    interests: ["healthcare"],
    interestCombinations: [],
    preferences: { workStyle: ["caring", "teamwork"], values: ["health", "compassion"], environment: ["hospital", "clinic"] },
    relevanceScore: 94,
    demand: "High",
    growthRate: "6% (2023-2033)",
    salaryRange: "$60,000 - $120,000",
    education: "BSN or Associate Degree in Nursing",
    tags: ["Nursing", "Healthcare", "Patient Care", "Clinical"]
  },

  // More cross-interest careers
  {
    id: "sports-data-analyst",
    title: "Sports Data Analyst",
    description: "Analyze performance data to help teams make data-driven decisions.",
    interests: ["sports", "technology"],
    interestCombinations: ["sports+technology"],
    preferences: { workStyle: ["analytical", "research"], values: ["sports", "data"], environment: ["office", "arena"] },
    relevanceScore: 94,
    demand: "High",
    growthRate: "28% (2023-2033)",
    salaryRange: "$60,000 - $130,000",
    education: "Bachelor's in Data Science or Statistics",
    tags: ["Sports", "Analytics", "Data", "Performance"]
  },
  {
    id: "sports-medicine-physician",
    title: "Sports Medicine Physician",
    description: "Specialize in treating athletes and active individuals for injuries and performance.",
    interests: ["sports", "healthcare"],
    interestCombinations: ["sports+healthcare"],
    preferences: { workStyle: ["clinical", "athletic"], values: ["health", "sports"], environment: ["clinic", "field"] },
    relevanceScore: 95,
    demand: "High",
    growthRate: "9% (2023-2033)",
    salaryRange: "$200,000 - $400,000",
    education: "MD with Sports Medicine fellowship",
    tags: ["Sports Medicine", "Athletes", "Healthcare", "Performance"]
  },
  {
    id: "creative-director",
    title: "Creative Director",
    description: "Lead creative vision and teams for advertising, media, or design projects.",
    interests: ["arts", "media"],
    interestCombinations: ["arts+media"],
    preferences: { workStyle: ["creative", "leadership"], values: ["creativity", "vision"], environment: ["agency", "studio"] },
    relevanceScore: 93,
    demand: "Medium",
    growthRate: "6% (2023-2033)",
    salaryRange: "$80,000 - $200,000+",
    education: "Bachelor's in Design, Fine Arts, or related field",
    tags: ["Creative", "Leadership", "Design", "Media"]
  },
  {
    id: "corporate-lawyer",
    title: "Corporate Lawyer",
    description: "Advise businesses on legal matters, contracts, and regulatory compliance.",
    interests: ["business", "law"],
    interestCombinations: ["business+law"],
    preferences: { workStyle: ["analytical", "negotiation"], values: ["justice", "precision"], environment: ["office", "court"] },
    relevanceScore: 92,
    demand: "Medium",
    growthRate: "5% (2023-2033)",
    salaryRange: "$100,000 - $300,000+",
    education: "JD (Juris Doctor)",
    tags: ["Law", "Corporate", "Legal", "Business"]
  },
  {
    id: "hotel-manager",
    title: "Hotel Manager",
    description: "Oversee daily operations and guest experience at hotels and resorts.",
    interests: ["hospitality", "business"],
    interestCombinations: ["hospitality+business"],
    preferences: { workStyle: ["leadership", "service"], values: ["hospitality", "excellence"], environment: ["hotel", "resort"] },
    relevanceScore: 90,
    demand: "Medium",
    growthRate: "7% (2023-2033)",
    salaryRange: "$50,000 - $150,000",
    education: "Bachelor's in Hospitality Management",
    tags: ["Hospitality", "Management", "Tourism", "Service"]
  },
];

// Career detail data - extended information
export const CAREER_DETAILS: Record<string, CareerDetail> = {
  "sports-manager": {
    ...CAREERS_DATABASE.find(c => c.id === "sports-manager")!,
    overview: "Sports managers are the strategic minds behind successful sports organizations. They oversee team operations, manage budgets, negotiate contracts, and develop strategies to improve performance both on and off the field. This role requires a unique blend of business acumen and sports knowledge.",
    dailyWork: [
      "Meeting with coaches, players, and staff to discuss team operations",
      "Reviewing financial reports and managing budgets",
      "Negotiating sponsorship deals and partnerships",
      "Planning and coordinating team events and travel",
      "Analyzing performance metrics and making strategic decisions"
    ],
    challenges: [
      "High-pressure decision making during critical seasons",
      "Balancing financial constraints with competitive goals",
      "Managing diverse personalities and stakeholder expectations",
      "Adapting to rapid changes in the sports industry"
    ],
    workLifeBalance: "Variable - depends on season and organization size. Expect long hours during peak seasons.",
    stressLevel: "High during competitive seasons; moderate during off-season",
    stability: "Stable for established professionals; performance-dependent for team-facing roles",
    roadmap: {
      undergraduate: [
        { degree: "Bachelor's in Sports Management", duration: "4 years", link: "https://www.bls.gov/ooh/management/administrative-services-managers.htm" },
        { degree: "Bachelor's in Business Administration", duration: "4 years", link: "https://www.bls.gov/ooh/business-and-financial/home.htm" }
      ],
      postgraduate: [
        { degree: "MBA with Sports Management concentration", duration: "2 years", link: "https://www.aacsb.edu/" },
        { degree: "Master's in Sports Administration", duration: "1-2 years", link: "https://www.nassm.org/" }
      ],
      certifications: [
        { name: "Certified Sports Manager (CSM)", provider: "National Sports Management Association", link: "#" },
        { name: "Sports Management Worldwide Certificate", provider: "SMWW", link: "https://www.smww.com/" }
      ],
      progression: [
        "Sports Coordinator / Assistant",
        "Operations Manager",
        "Director of Operations",
        "General Manager",
        "President / CEO"
      ]
    },
    futureOutlook: {
      description: "The sports management field is expected to grow 12% through 2033, driven by increasing commercialization of sports and expansion of esports. Data analytics and digital marketing skills are becoming essential.",
      source: "U.S. Bureau of Labor Statistics",
      sourceLink: "https://www.bls.gov/ooh/management/home.htm"
    },
    researchTips: [
      "Read job descriptions on LinkedIn, Indeed, and TeamWork Online to understand current requirements",
      "Review industry reports from Sports Business Journal and Forbes Sports Money",
      "Connect with professionals through NASSM (North American Society for Sport Management)",
      "Seek internships with local sports teams or athletic departments",
      "Follow sports business news on platforms like Front Office Sports"
    ],
    relatedCareers: ["sports-marketing-manager", "athletic-director", "sports-agent", "sports-analytics-manager"],
    articles: [
      { title: "The Future of Sports Management", source: "Harvard Business Review", link: "https://hbr.org/" },
      { title: "Career Paths in Sports Business", source: "Sports Business Journal", link: "https://www.sportsbusinessjournal.com/" }
    ]
  },
  "product-manager": {
    ...CAREERS_DATABASE.find(c => c.id === "product-manager")!,
    overview: "Product managers are the visionaries who bridge technology and business. They define product strategy, work with engineering teams to build features, and ensure products meet market needs. This role requires strong communication, analytical thinking, and customer empathy.",
    dailyWork: [
      "Conducting customer interviews and analyzing user feedback",
      "Writing product requirements and specifications",
      "Collaborating with engineering, design, and marketing teams",
      "Analyzing product metrics and making data-driven decisions",
      "Prioritizing features and managing the product roadmap"
    ],
    challenges: [
      "Balancing stakeholder demands with user needs",
      "Making decisions with incomplete information",
      "Managing cross-functional teams without direct authority",
      "Keeping up with rapidly changing technology"
    ],
    workLifeBalance: "Generally good at established companies; can be demanding at startups",
    stressLevel: "Moderate to high, especially around product launches",
    stability: "High - one of the most in-demand tech roles",
    roadmap: {
      undergraduate: [
        { degree: "Bachelor's in Computer Science", duration: "4 years", link: "https://www.bls.gov/ooh/computer-and-information-technology/home.htm" },
        { degree: "Bachelor's in Business Administration", duration: "4 years", link: "https://www.bls.gov/ooh/business-and-financial/home.htm" }
      ],
      postgraduate: [
        { degree: "MBA", duration: "2 years", link: "https://www.aacsb.edu/" },
        { degree: "Master's in Product Management", duration: "1-2 years", link: "#" }
      ],
      certifications: [
        { name: "Product Management Certificate", provider: "Product School", link: "https://productschool.com/" },
        { name: "Certified Scrum Product Owner", provider: "Scrum Alliance", link: "https://www.scrumalliance.org/" }
      ],
      progression: [
        "Associate Product Manager",
        "Product Manager",
        "Senior Product Manager",
        "Director of Product",
        "VP of Product / CPO"
      ]
    },
    futureOutlook: {
      description: "Product management roles are expected to grow 22% through 2033. AI product management and data product management are emerging specializations with even higher demand.",
      source: "U.S. Bureau of Labor Statistics",
      sourceLink: "https://www.bls.gov/ooh/management/home.htm"
    },
    researchTips: [
      "Read 'Inspired' by Marty Cagan and 'Cracking the PM Interview'",
      "Take courses on platforms like Coursera, Product School, or Reforge",
      "Build side projects to demonstrate product thinking",
      "Join Product Management communities like Mind the Product",
      "Seek APM programs at companies like Google, Facebook, or Uber"
    ],
    relatedCareers: ["data-product-manager", "tech-entrepreneur", "ux-designer", "business-analyst"],
    articles: [
      { title: "What is Product Management?", source: "Mind the Product", link: "https://www.mindtheproduct.com/" },
      { title: "The PM Career Path", source: "Product School", link: "https://productschool.com/blog/" }
    ]
  },
  "data-scientist": {
    ...CAREERS_DATABASE.find(c => c.id === "data-scientist")!,
    overview: "Data scientists extract insights from complex data to drive business decisions. They combine statistical analysis, machine learning, and domain expertise to solve challenging problems. This role requires strong technical skills and the ability to communicate findings to non-technical stakeholders.",
    dailyWork: [
      "Cleaning and preprocessing large datasets",
      "Building and validating predictive models",
      "Creating visualizations and dashboards",
      "Presenting findings to stakeholders",
      "Collaborating with engineers to deploy models"
    ],
    challenges: [
      "Working with messy, incomplete data",
      "Translating complex findings for non-technical audiences",
      "Keeping up with rapidly evolving tools and techniques",
      "Balancing accuracy with business timelines"
    ],
    workLifeBalance: "Generally good; flexible work options common",
    stressLevel: "Moderate - project-dependent",
    stability: "Very high - one of the most in-demand roles globally",
    roadmap: {
      undergraduate: [
        { degree: "Bachelor's in Statistics or Mathematics", duration: "4 years", link: "https://www.bls.gov/ooh/math/statisticians.htm" },
        { degree: "Bachelor's in Computer Science", duration: "4 years", link: "https://www.bls.gov/ooh/computer-and-information-technology/home.htm" }
      ],
      postgraduate: [
        { degree: "Master's in Data Science", duration: "1-2 years", link: "#" },
        { degree: "PhD in Statistics, CS, or related field", duration: "4-6 years", link: "#" }
      ],
      certifications: [
        { name: "Google Data Analytics Certificate", provider: "Google", link: "https://grow.google/certificates/" },
        { name: "IBM Data Science Professional Certificate", provider: "IBM", link: "https://www.ibm.com/training/" }
      ],
      progression: [
        "Data Analyst",
        "Junior Data Scientist",
        "Data Scientist",
        "Senior Data Scientist",
        "Lead/Principal Data Scientist",
        "Chief Data Officer"
      ]
    },
    futureOutlook: {
      description: "Data science roles are projected to grow 35% through 2033, much faster than average. Specializations in AI/ML, NLP, and generative AI are particularly in demand.",
      source: "U.S. Bureau of Labor Statistics",
      sourceLink: "https://www.bls.gov/ooh/math/data-scientists.htm"
    },
    researchTips: [
      "Build a portfolio of projects on Kaggle or GitHub",
      "Take courses on Coursera, edX, or DataCamp",
      "Learn Python, SQL, and machine learning frameworks",
      "Read research papers and follow industry blogs",
      "Participate in data science competitions"
    ],
    relatedCareers: ["machine-learning-engineer", "data-product-manager", "business-analyst", "ai-researcher"],
    articles: [
      { title: "Becoming a Data Scientist", source: "Towards Data Science", link: "https://towardsdatascience.com/" },
      { title: "Data Science Career Guide", source: "KDnuggets", link: "https://www.kdnuggets.com/" }
    ]
  }
};

// Function to get career details (with fallback)
export function getCareerDetail(id: string): CareerDetail | null {
  if (CAREER_DETAILS[id]) {
    return CAREER_DETAILS[id];
  }
  
  // Generate basic detail from career if not found
  const career = CAREERS_DATABASE.find(c => c.id === id);
  if (!career) return null;
  
  return {
    ...career,
    overview: career.description,
    dailyWork: ["Research specific job listings for detailed daily responsibilities"],
    challenges: ["Research industry forums and professional networks for common challenges"],
    workLifeBalance: "Research on professional networks like LinkedIn",
    stressLevel: "Varies by organization and role level",
    stability: "Research industry outlook reports",
    roadmap: {
      undergraduate: [{ degree: career.education, duration: "4 years", link: "https://www.bls.gov/ooh/" }],
      postgraduate: [],
      certifications: [],
      progression: ["Entry Level", "Mid Level", "Senior Level", "Leadership"]
    },
    futureOutlook: {
      description: `Growth rate: ${career.growthRate}. Research specific industry outlook.`,
      source: "Bureau of Labor Statistics",
      sourceLink: "https://www.bls.gov/ooh/"
    },
    researchTips: [
      "Search for job listings on LinkedIn and Indeed",
      "Connect with professionals in this field",
      "Read industry publications and reports",
      "Consider informational interviews or job shadowing"
    ],
    relatedCareers: [],
    articles: []
  };
}

// Fast intersection-based career filtering
export function filterCareersByIntersection(interests: string[]): Career[] {
  if (interests.length !== 2) {
    // If not exactly 2 interests, return careers matching any interest
    return CAREERS_DATABASE.filter(career => 
      career.interests.some(i => interests.includes(i))
    ).sort((a, b) => b.relevanceScore - a.relevanceScore);
  }
  
  const sortedInterests = [...interests].sort().join("+");
  
  // First, get exact intersection matches
  const intersectionMatches = CAREERS_DATABASE.filter(career =>
    career.interestCombinations.includes(sortedInterests)
  );
  
  // Then get careers that match BOTH interests (even if not in combination list)
  const bothInterestMatches = CAREERS_DATABASE.filter(career =>
    interests.every(interest => career.interests.includes(interest)) &&
    !career.interestCombinations.includes(sortedInterests)
  );
  
  // Combine and sort by relevance
  const combined = [...intersectionMatches, ...bothInterestMatches];
  return combined.sort((a, b) => b.relevanceScore - a.relevanceScore);
}

// Apply preference scoring to careers with improved precision
export function applyPreferenceScoring(
  careers: Career[],
  preferences: { workStyle?: string; values?: string; environment?: string }
): Career[] {
  return careers.map(career => {
    let bonusScore = 0;
    let matchCount = 0;
    
    // Exact preference match gets highest priority
    if (preferences.workStyle && career.preferences.workStyle.includes(preferences.workStyle)) {
      bonusScore += 15;
      matchCount++;
    }
    if (preferences.values && career.preferences.values.includes(preferences.values)) {
      bonusScore += 15;
      matchCount++;
    }
    if (preferences.environment && career.preferences.environment.includes(preferences.environment)) {
      bonusScore += 10;
      matchCount++;
    }
    
    // Bonus for matching multiple preferences
    if (matchCount >= 2) bonusScore += 10;
    if (matchCount === 3) bonusScore += 15;
    
    return {
      ...career,
      relevanceScore: career.relevanceScore + bonusScore,
      preferenceMatchCount: matchCount
    };
  }).sort((a, b) => {
    // Sort by preference match count first, then relevance score
    const aMatch = (a as any).preferenceMatchCount || 0;
    const bMatch = (b as any).preferenceMatchCount || 0;
    if (bMatch !== aMatch) return bMatch - aMatch;
    return b.relevanceScore - a.relevanceScore;
  });
}

// Get all careers including extended database
export function getAllCareers(): Career[] {
  // Import extended careers dynamically to avoid circular deps
  const { EXTENDED_CAREERS } = require('./extendedCareers');
  return [...CAREERS_DATABASE, ...EXTENDED_CAREERS];
}

// Search careers across entire database
export function searchCareers(query: string): Career[] {
  const allCareers = getAllCareers();
  const lowerQuery = query.toLowerCase();
  
  return allCareers.filter(career =>
    career.title.toLowerCase().includes(lowerQuery) ||
    career.description.toLowerCase().includes(lowerQuery) ||
    career.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  ).sort((a, b) => b.relevanceScore - a.relevanceScore);
}
