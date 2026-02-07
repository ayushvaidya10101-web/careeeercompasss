// Additional extracurricular activities - Research-based expansion
// Sources: College Board, PrepScholar, Niche.com extracurricular guides

import type { Extracurricular } from './extracurriculars';

export const ADDITIONAL_EXTRACURRICULARS: Extracurricular[] = [
  // Academic
  {
    id: "quiz-bowl",
    name: "Quiz Bowl / Academic Decathlon",
    category: "academic",
    icon: "🏆",
    description: "Fast-paced academic competition covering history, science, literature, math, and current events.",
    skills: ["Rapid recall", "Breadth of knowledge", "Teamwork", "Quick thinking", "Study discipline"],
    careerConnections: [
      { careerId: "data-scientist", careerTitle: "Data Scientist", relevance: "Broad analytical thinking and pattern recognition" },
      { careerId: "journalist", careerTitle: "Journalist", relevance: "Wide knowledge base and research skills" },
      { careerId: "professor", careerTitle: "University Professor", relevance: "Deep academic interest and knowledge" },
    ]
  },
  {
    id: "economics-club",
    name: "Economics & Policy Club",
    category: "academic",
    icon: "📈",
    description: "Studying economics, public policy, and participating in economics competitions like the Fed Challenge.",
    skills: ["Economic reasoning", "Policy analysis", "Data interpretation", "Public speaking", "Research"],
    careerConnections: [
      { careerId: "financial-analyst", careerTitle: "Financial Analyst", relevance: "Economic modeling and analysis skills" },
      { careerId: "management-consultant", careerTitle: "Management Consultant", relevance: "Economic and business understanding" },
      { careerId: "corporate-lawyer", careerTitle: "Corporate Lawyer", relevance: "Policy and regulatory knowledge" },
    ]
  },
  {
    id: "astronomy-club",
    name: "Astronomy Club / Stargazing Society",
    category: "academic",
    icon: "🔭",
    description: "Observing celestial objects, studying astrophysics concepts, and participating in astronomy events.",
    skills: ["Observation", "Scientific reasoning", "Data recording", "Patience", "Physics understanding"],
    careerConnections: [
      { careerId: "aerospace-engineer", careerTitle: "Aerospace Engineer", relevance: "Space science foundation and passion" },
      { careerId: "research-scientist", careerTitle: "Research Scientist", relevance: "Scientific observation and methodology" },
      { careerId: "data-scientist", careerTitle: "Data Scientist", relevance: "Data collection and analysis from observations" },
    ]
  },

  // Sports (additional)
  {
    id: "rock-climbing",
    name: "Rock Climbing / Bouldering",
    category: "sports",
    icon: "🧗",
    description: "Indoor and outdoor climbing requiring strength, strategy, and mental focus.",
    skills: ["Problem-solving", "Physical strength", "Risk assessment", "Mental focus", "Perseverance"],
    careerConnections: [
      { careerId: "environmental-engineer", careerTitle: "Environmental Engineer", relevance: "Outdoor fieldwork comfort and risk management" },
      { careerId: "civil-engineer", careerTitle: "Civil Engineer", relevance: "Spatial awareness and structural thinking" },
      { careerId: "physical-therapist", careerTitle: "Physical Therapist", relevance: "Body mechanics and movement expertise" },
    ]
  },
  {
    id: "fencing",
    name: "Fencing",
    category: "sports",
    icon: "⚔️",
    description: "Olympic combat sport combining physical agility with strategic thinking and split-second decision-making.",
    skills: ["Strategic thinking", "Reflexes", "Discipline", "Sportsmanship", "Focus"],
    careerConnections: [
      { careerId: "product-manager", careerTitle: "Product Manager", relevance: "Strategic planning and quick decision-making" },
      { careerId: "corporate-lawyer", careerTitle: "Corporate Lawyer", relevance: "Tactical thinking and competitive mindset" },
      { careerId: "sports-psychologist", careerTitle: "Sports Psychologist", relevance: "Understanding of mental performance in sport" },
    ]
  },
  {
    id: "rowing-crew",
    name: "Rowing / Crew",
    category: "sports",
    icon: "🚣",
    description: "Precision team sport requiring perfect synchronization, endurance, and mental toughness.",
    skills: ["Teamwork", "Discipline", "Endurance", "Time management", "Synchronization"],
    careerConnections: [
      { careerId: "management-consultant", careerTitle: "Management Consultant", relevance: "Team coordination and high-pressure performance" },
      { careerId: "investment-banker", careerTitle: "Investment Banker", relevance: "Discipline and endurance under pressure" },
      { careerId: "athletic-trainer", careerTitle: "Athletic Trainer", relevance: "Understanding of athletic training and performance" },
    ]
  },
  {
    id: "chess-club",
    name: "Chess Club / Competitive Chess",
    category: "sports",
    icon: "♟️",
    description: "Competitive chess training, tournaments, and strategic thinking development.",
    skills: ["Strategic planning", "Pattern recognition", "Concentration", "Decision-making", "Problem-solving"],
    careerConnections: [
      { careerId: "data-scientist", careerTitle: "Data Scientist", relevance: "Pattern recognition and analytical thinking" },
      { careerId: "software-engineer", careerTitle: "Software Engineer", relevance: "Algorithmic thinking and problem decomposition" },
      { careerId: "financial-analyst", careerTitle: "Financial Analyst", relevance: "Strategic analysis and risk assessment" },
    ]
  },

  // Arts (additional)
  {
    id: "ceramics-pottery",
    name: "Ceramics & Pottery",
    category: "arts",
    icon: "🏺",
    description: "Creating functional and decorative objects using clay, glazes, and kiln firing techniques.",
    skills: ["Spatial awareness", "Patience", "Craftsmanship", "Material science", "Creative design"],
    careerConnections: [
      { careerId: "industrial-engineer", careerTitle: "Industrial Engineer", relevance: "Material properties and manufacturing process understanding" },
      { careerId: "interior-designer", careerTitle: "Interior Designer", relevance: "Three-dimensional design and material knowledge" },
      { careerId: "architect", careerTitle: "Architect", relevance: "3D form and spatial design experience" },
    ]
  },
  {
    id: "choir-vocal",
    name: "Choir / Vocal Ensemble",
    category: "arts",
    icon: "🎶",
    description: "Performing in a vocal group, learning harmonization, sight-reading, and ensemble coordination.",
    skills: ["Listening skills", "Teamwork", "Discipline", "Performance", "Musical literacy"],
    careerConnections: [
      { careerId: "content-creator", careerTitle: "Content Creator", relevance: "Performance and audience engagement skills" },
      { careerId: "teacher-k12", careerTitle: "K-12 Teacher", relevance: "Group leadership and instruction" },
      { careerId: "public-relations-specialist", careerTitle: "Public Relations Specialist", relevance: "Communication and presentation skills" },
    ]
  },
  {
    id: "fashion-design",
    name: "Fashion Design Club",
    category: "arts",
    icon: "👗",
    description: "Designing, creating, and showcasing original fashion pieces and understanding textile arts.",
    skills: ["Design thinking", "Material knowledge", "Creativity", "Trend analysis", "Sewing/construction"],
    careerConnections: [
      { careerId: "graphic-designer", careerTitle: "Graphic Designer", relevance: "Visual design and branding skills" },
      { careerId: "product-manager", careerTitle: "Product Manager", relevance: "Product design and market awareness" },
      { careerId: "ui-designer", careerTitle: "UI Designer", relevance: "Aesthetic sensibility and trend awareness" },
    ]
  },

  // Technology (additional)
  {
    id: "drone-club",
    name: "Drone Building & Racing",
    category: "technology",
    icon: "🛸",
    description: "Building, programming, and racing drones, learning about aerodynamics and remote control systems.",
    skills: ["Engineering", "Electronics", "Aerodynamics", "Problem-solving", "Piloting"],
    careerConnections: [
      { careerId: "aerospace-engineer", careerTitle: "Aerospace Engineer", relevance: "Hands-on aerodynamics and flight systems" },
      { careerId: "mechanical-engineer", careerTitle: "Mechanical Engineer", relevance: "Hardware design and construction" },
      { careerId: "electrical-engineer", careerTitle: "Electrical Engineer", relevance: "Electronics and control systems" },
    ]
  },
  {
    id: "data-science-club",
    name: "Data Science / Statistics Club",
    category: "technology",
    icon: "📊",
    description: "Working with real datasets, learning statistical analysis, and creating data visualizations.",
    skills: ["Data analysis", "Statistical thinking", "Visualization", "Python/R programming", "Critical thinking"],
    careerConnections: [
      { careerId: "data-scientist", careerTitle: "Data Scientist", relevance: "Direct data analysis and visualization experience" },
      { careerId: "machine-learning-engineer", careerTitle: "Machine Learning Engineer", relevance: "Statistical foundation for ML" },
      { careerId: "financial-analyst", careerTitle: "Financial Analyst", relevance: "Quantitative analysis skills" },
    ]
  },
  {
    id: "iot-smart-home",
    name: "IoT & Smart Home Projects",
    category: "technology",
    icon: "🏠",
    description: "Building Internet of Things projects with sensors, microcontrollers, and home automation systems.",
    skills: ["Electronics", "Programming", "Systems thinking", "Hardware-software integration", "Innovation"],
    careerConnections: [
      { careerId: "electrical-engineer", careerTitle: "Electrical Engineer", relevance: "Embedded systems and sensor experience" },
      { careerId: "software-engineer", careerTitle: "Software Engineer", relevance: "Full-stack hardware and software development" },
      { careerId: "devops-engineer", careerTitle: "DevOps Engineer", relevance: "Automation and systems integration" },
    ]
  },

  // Leadership (additional)
  {
    id: "eagle-scouts",
    name: "Scouting (Eagle Scouts / Girl Guides)",
    category: "leadership",
    icon: "⚜️",
    description: "Long-term scouting program developing leadership, community service, and outdoor survival skills.",
    skills: ["Leadership", "Community service", "Outdoor skills", "Project management", "Responsibility"],
    careerConnections: [
      { careerId: "management-consultant", careerTitle: "Management Consultant", relevance: "Leadership development and project execution" },
      { careerId: "environmental-engineer", careerTitle: "Environmental Engineer", relevance: "Environmental stewardship and outdoor awareness" },
      { careerId: "healthcare-administrator", careerTitle: "Healthcare Administrator", relevance: "Service orientation and organizational leadership" },
    ]
  },
  {
    id: "ted-talks",
    name: "TEDx / Public Speaking Club",
    category: "leadership",
    icon: "🎤",
    description: "Organizing or speaking at TEDx events and practicing persuasive, impactful public speaking.",
    skills: ["Public speaking", "Storytelling", "Persuasion", "Event organizing", "Thought leadership"],
    careerConnections: [
      { careerId: "management-consultant", careerTitle: "Management Consultant", relevance: "Executive communication and presentation skills" },
      { careerId: "product-manager", careerTitle: "Product Manager", relevance: "Stakeholder communication and pitching" },
      { careerId: "journalist", careerTitle: "Journalist", relevance: "Storytelling and narrative skills" },
    ]
  },
  {
    id: "red-cross-volunteering",
    name: "Red Cross / First Aid Volunteering",
    category: "leadership",
    icon: "🏥",
    description: "Training in first aid, disaster response, and volunteering with Red Cross or similar organizations.",
    skills: ["First aid", "Crisis management", "Empathy", "Teamwork", "Composure under pressure"],
    careerConnections: [
      { careerId: "physician", careerTitle: "Physician", relevance: "Emergency care exposure and medical interest" },
      { careerId: "nurse-practitioner", careerTitle: "Nurse Practitioner", relevance: "Patient care and first response skills" },
      { careerId: "healthcare-administrator", careerTitle: "Healthcare Administrator", relevance: "Healthcare operations and crisis response" },
    ]
  },

  // Media (additional)
  {
    id: "graphic-design-club",
    name: "Graphic Design Club",
    category: "media",
    icon: "🖌️",
    description: "Learning digital design tools like Photoshop, Illustrator, and Figma to create visual content.",
    skills: ["Visual design", "Typography", "Color theory", "Digital tools proficiency", "Brand thinking"],
    careerConnections: [
      { careerId: "graphic-designer", careerTitle: "Graphic Designer", relevance: "Direct design experience and portfolio building" },
      { careerId: "ux-designer", careerTitle: "UX Designer", relevance: "Visual design foundation for digital products" },
      { careerId: "digital-marketing-specialist", careerTitle: "Digital Marketing Specialist", relevance: "Visual content creation for campaigns" },
    ]
  },
  {
    id: "photography-club",
    name: "Photography Club",
    category: "media",
    icon: "📷",
    description: "Learning composition, lighting, and post-processing for photography across styles.",
    skills: ["Composition", "Visual storytelling", "Technical camera skills", "Editing", "Attention to detail"],
    careerConnections: [
      { careerId: "content-creator", careerTitle: "Content Creator", relevance: "Visual content production skills" },
      { careerId: "graphic-designer", careerTitle: "Graphic Designer", relevance: "Photography and visual design overlap" },
      { careerId: "digital-marketing-specialist", careerTitle: "Digital Marketing Specialist", relevance: "Visual content for marketing campaigns" },
    ]
  },
  {
    id: "animation-club",
    name: "Animation & Motion Design Club",
    category: "media",
    icon: "🎞️",
    description: "Creating animations using 2D/3D software, learning motion principles and digital storytelling.",
    skills: ["Animation principles", "Digital tools", "Storytelling", "Patience", "Creativity"],
    careerConnections: [
      { careerId: "animator", careerTitle: "Animator", relevance: "Direct animation production experience" },
      { careerId: "game-developer", careerTitle: "Game Developer", relevance: "Animation for interactive media" },
      { careerId: "motion-graphics-designer", careerTitle: "Motion Graphics Designer", relevance: "Motion design and visual effects" },
    ]
  },

  // Business (additional)
  {
    id: "consulting-club",
    name: "Student Consulting Club",
    category: "business",
    icon: "🧩",
    description: "Providing pro-bono consulting to local businesses and nonprofits on real business challenges.",
    skills: ["Problem-solving", "Client management", "Research", "Presentation", "Business strategy"],
    careerConnections: [
      { careerId: "management-consultant", careerTitle: "Management Consultant", relevance: "Direct consulting experience" },
      { careerId: "product-manager", careerTitle: "Product Manager", relevance: "Strategic thinking and stakeholder management" },
      { careerId: "financial-analyst", careerTitle: "Financial Analyst", relevance: "Business analysis and financial modeling" },
    ]
  },
  {
    id: "real-estate-club",
    name: "Real Estate & Property Club",
    category: "business",
    icon: "🏢",
    description: "Learning about real estate markets, property valuation, and investment strategies.",
    skills: ["Market analysis", "Financial modeling", "Negotiation", "Research", "Investment thinking"],
    careerConnections: [
      { careerId: "financial-analyst", careerTitle: "Financial Analyst", relevance: "Real estate financial modeling" },
      { careerId: "architect", careerTitle: "Architect", relevance: "Property development understanding" },
      { careerId: "civil-engineer", careerTitle: "Civil Engineer", relevance: "Construction and development insight" },
    ]
  },
  {
    id: "marketing-club",
    name: "Marketing & Advertising Club",
    category: "business",
    icon: "📣",
    description: "Creating marketing campaigns, learning branding, and participating in marketing competitions.",
    skills: ["Marketing strategy", "Branding", "Creative thinking", "Analytics", "Persuasion"],
    careerConnections: [
      { careerId: "digital-marketing-specialist", careerTitle: "Digital Marketing Specialist", relevance: "Marketing campaign experience" },
      { careerId: "content-creator", careerTitle: "Content Creator", relevance: "Brand storytelling and content marketing" },
      { careerId: "product-manager", careerTitle: "Product Manager", relevance: "Market positioning and go-to-market strategy" },
    ]
  },

  // Environment (additional)
  {
    id: "beekeeping",
    name: "Beekeeping Club / Apiary",
    category: "environment",
    icon: "🐝",
    description: "Maintaining beehives, learning about pollination ecology, and producing honey products.",
    skills: ["Patience", "Observation", "Ecological awareness", "Responsibility", "Scientific thinking"],
    careerConnections: [
      { careerId: "environmental-engineer", careerTitle: "Environmental Engineer", relevance: "Ecosystem understanding and conservation" },
      { careerId: "veterinarian", careerTitle: "Veterinarian", relevance: "Animal welfare and biology interest" },
      { careerId: "sustainability-consultant", careerTitle: "Sustainability Consultant", relevance: "Biodiversity and sustainability awareness" },
    ]
  },
  {
    id: "marine-conservation",
    name: "Marine Conservation / Ocean Club",
    category: "environment",
    icon: "🐋",
    description: "Studying marine ecosystems, participating in beach cleanups, and ocean conservation projects.",
    skills: ["Environmental science", "Advocacy", "Fieldwork", "Data collection", "Community organizing"],
    careerConnections: [
      { careerId: "environmental-engineer", careerTitle: "Environmental Engineer", relevance: "Marine and environmental protection" },
      { careerId: "research-scientist", careerTitle: "Research Scientist", relevance: "Marine biology research experience" },
      { careerId: "sustainability-consultant", careerTitle: "Sustainability Consultant", relevance: "Ocean sustainability and conservation" },
    ]
  },
  {
    id: "renewable-energy-projects",
    name: "Renewable Energy Projects",
    category: "environment",
    icon: "☀️",
    description: "Building solar panels, wind turbines, or other renewable energy prototypes.",
    skills: ["Engineering", "Sustainability", "Problem-solving", "Physics", "Project management"],
    careerConnections: [
      { careerId: "renewable-energy-engineer", careerTitle: "Renewable Energy Engineer", relevance: "Direct renewable energy experience" },
      { careerId: "electrical-engineer", careerTitle: "Electrical Engineer", relevance: "Power systems and energy engineering" },
      { careerId: "sustainability-consultant", careerTitle: "Sustainability Consultant", relevance: "Clean energy expertise" },
    ]
  },
];
