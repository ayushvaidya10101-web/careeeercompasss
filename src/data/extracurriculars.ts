// Extracurricular activities with career mappings

export interface Extracurricular {
  id: string;
  name: string;
  category: string;
  icon: string;
  description: string;
  skills: string[];
  careerConnections: {
    careerId: string;
    careerTitle: string;
    relevance: string;
  }[];
}

export const EXTRACURRICULAR_CATEGORIES = [
  { id: "sports", label: "Sports & Athletics", icon: "⚽" },
  { id: "arts", label: "Arts & Performance", icon: "🎭" },
  { id: "academic", label: "Academic Clubs", icon: "📚" },
  { id: "leadership", label: "Leadership & Service", icon: "🏛️" },
  { id: "technology", label: "Technology & Innovation", icon: "💻" },
  { id: "media", label: "Media & Communication", icon: "📱" },
  { id: "business", label: "Business & Entrepreneurship", icon: "💼" },
  { id: "environment", label: "Environment & Outdoors", icon: "🌱" },
];

export const EXTRACURRICULARS: Extracurricular[] = [
  // Sports & Athletics
  {
    id: "team-sports",
    name: "Team Sports (Football, Basketball, Soccer)",
    category: "sports",
    icon: "⚽",
    description: "Competitive team athletics requiring coordination, strategy, and physical fitness.",
    skills: ["Teamwork", "Leadership", "Communication", "Strategic thinking", "Discipline"],
    careerConnections: [
      { careerId: "sports-manager", careerTitle: "Sports Manager", relevance: "Direct experience in team dynamics and sports operations" },
      { careerId: "athletic-director", careerTitle: "Athletic Director", relevance: "Understanding of athletic programs and team management" },
      { careerId: "sports-marketing-manager", careerTitle: "Sports Marketing Manager", relevance: "Firsthand knowledge of athlete and fan perspectives" },
      { careerId: "sports-agent", careerTitle: "Sports Agent", relevance: "Deep understanding of athlete needs and team dynamics" },
    ]
  },
  {
    id: "individual-sports",
    name: "Individual Sports (Tennis, Swimming, Track)",
    category: "sports",
    icon: "🏊",
    description: "Solo competitive athletics focusing on personal achievement and self-improvement.",
    skills: ["Self-discipline", "Goal setting", "Resilience", "Time management", "Focus"],
    careerConnections: [
      { careerId: "sports-psychologist", careerTitle: "Sports Psychologist", relevance: "Experience with mental aspects of athletic performance" },
      { careerId: "athletic-trainer", careerTitle: "Athletic Trainer", relevance: "Understanding of training regimens and physical demands" },
      { careerId: "sports-analytics-manager", careerTitle: "Sports Analytics Manager", relevance: "Personal data tracking and performance optimization experience" },
    ]
  },
  {
    id: "coaching-mentoring",
    name: "Coaching & Youth Sports Mentoring",
    category: "sports",
    icon: "🏅",
    description: "Teaching and guiding younger athletes in sports fundamentals and teamwork.",
    skills: ["Teaching", "Patience", "Leadership", "Communication", "Motivation"],
    careerConnections: [
      { careerId: "athletic-director", careerTitle: "Athletic Director", relevance: "Experience developing athletes and managing programs" },
      { careerId: "instructional-designer", careerTitle: "Instructional Designer", relevance: "Teaching and curriculum development skills" },
      { careerId: "sports-psychologist", careerTitle: "Sports Psychologist", relevance: "Understanding of athlete motivation and development" },
    ]
  },

  // Arts & Performance
  {
    id: "theater-drama",
    name: "Theater & Drama Club",
    category: "arts",
    icon: "🎭",
    description: "Acting, stage production, and theatrical performance.",
    skills: ["Public speaking", "Creativity", "Collaboration", "Emotional intelligence", "Memorization"],
    careerConnections: [
      { careerId: "creative-director", careerTitle: "Creative Director", relevance: "Creative vision and production experience" },
      { careerId: "ux-designer", careerTitle: "UX Designer", relevance: "Understanding of human emotion and storytelling" },
      { careerId: "content-creator", careerTitle: "Content Creator", relevance: "Performance and audience engagement skills" },
    ]
  },
  {
    id: "music-band",
    name: "Music, Band & Orchestra",
    category: "arts",
    icon: "🎵",
    description: "Musical performance, composition, and ensemble collaboration.",
    skills: ["Discipline", "Teamwork", "Creativity", "Pattern recognition", "Dedication"],
    careerConnections: [
      { careerId: "game-developer", careerTitle: "Game Developer", relevance: "Audio design and creative collaboration" },
      { careerId: "multimedia-developer", careerTitle: "Multimedia Developer", relevance: "Understanding of audio-visual experiences" },
      { careerId: "creative-director", careerTitle: "Creative Director", relevance: "Artistic vision and team coordination" },
    ]
  },
  {
    id: "visual-arts",
    name: "Visual Arts (Painting, Sculpture, Photography)",
    category: "arts",
    icon: "🎨",
    description: "Creating visual artwork through various mediums and techniques.",
    skills: ["Visual thinking", "Creativity", "Attention to detail", "Patience", "Technical skills"],
    careerConnections: [
      { careerId: "ux-designer", careerTitle: "UX Designer", relevance: "Visual design and aesthetic sensibility" },
      { careerId: "digital-artist", careerTitle: "Digital Artist", relevance: "Traditional art foundation for digital work" },
      { careerId: "3d-modeler", careerTitle: "3D Modeler", relevance: "Spatial awareness and artistic skills" },
    ]
  },

  // Academic Clubs
  {
    id: "debate-forensics",
    name: "Debate & Forensics",
    category: "academic",
    icon: "🎤",
    description: "Competitive public speaking, argumentation, and critical analysis.",
    skills: ["Public speaking", "Research", "Critical thinking", "Persuasion", "Quick thinking"],
    careerConnections: [
      { careerId: "corporate-lawyer", careerTitle: "Corporate Lawyer", relevance: "Argumentation and research skills essential for legal work" },
      { careerId: "product-manager", careerTitle: "Product Manager", relevance: "Stakeholder persuasion and strategic communication" },
      { careerId: "healthcare-consultant", careerTitle: "Healthcare Consultant", relevance: "Analytical thinking and presentation skills" },
    ]
  },
  {
    id: "science-olympiad",
    name: "Science Olympiad & Math Competitions",
    category: "academic",
    icon: "🔬",
    description: "Competitive STEM events testing scientific knowledge and problem-solving.",
    skills: ["Problem-solving", "Scientific thinking", "Teamwork", "Research", "Analytical skills"],
    careerConnections: [
      { careerId: "data-scientist", careerTitle: "Data Scientist", relevance: "Strong analytical and quantitative foundation" },
      { careerId: "machine-learning-engineer", careerTitle: "Machine Learning Engineer", relevance: "Problem-solving and mathematical skills" },
      { careerId: "biomedical-engineer", careerTitle: "Biomedical Engineer", relevance: "Scientific method and research experience" },
    ]
  },
  {
    id: "model-un",
    name: "Model United Nations",
    category: "academic",
    icon: "🌍",
    description: "Simulating UN proceedings to discuss global issues and diplomacy.",
    skills: ["Diplomacy", "Research", "Public speaking", "Global awareness", "Negotiation"],
    careerConnections: [
      { careerId: "healthcare-administrator", careerTitle: "Healthcare Administrator", relevance: "Policy understanding and stakeholder management" },
      { careerId: "sustainability-consultant", careerTitle: "Sustainability Consultant", relevance: "Global perspective and policy awareness" },
      { careerId: "corporate-lawyer", careerTitle: "Corporate Lawyer", relevance: "Negotiation and international law exposure" },
    ]
  },

  // Leadership & Service
  {
    id: "student-government",
    name: "Student Government",
    category: "leadership",
    icon: "🏛️",
    description: "Elected representation and leadership within school governance.",
    skills: ["Leadership", "Public speaking", "Organization", "Advocacy", "Decision-making"],
    careerConnections: [
      { careerId: "product-manager", careerTitle: "Product Manager", relevance: "Leadership and stakeholder management" },
      { careerId: "hospital-ceo", careerTitle: "Hospital CEO", relevance: "Governance and organizational leadership" },
      { careerId: "athletic-director", careerTitle: "Athletic Director", relevance: "Administrative leadership experience" },
    ]
  },
  {
    id: "volunteer-service",
    name: "Community Service & Volunteering",
    category: "leadership",
    icon: "🤝",
    description: "Contributing time and skills to help community organizations and causes.",
    skills: ["Empathy", "Teamwork", "Communication", "Social awareness", "Organization"],
    careerConnections: [
      { careerId: "healthcare-administrator", careerTitle: "Healthcare Administrator", relevance: "Community health understanding" },
      { careerId: "sports-psychologist", careerTitle: "Sports Psychologist", relevance: "Empathy and helping orientation" },
      { careerId: "instructional-designer", careerTitle: "Instructional Designer", relevance: "Educational outreach experience" },
    ]
  },
  {
    id: "peer-tutoring",
    name: "Peer Tutoring & Mentorship",
    category: "leadership",
    icon: "📖",
    description: "Helping fellow students understand academic material and develop skills.",
    skills: ["Teaching", "Patience", "Communication", "Subject mastery", "Empathy"],
    careerConnections: [
      { careerId: "instructional-designer", careerTitle: "Instructional Designer", relevance: "Direct teaching and explanation experience" },
      { careerId: "edtech-product-manager", careerTitle: "EdTech Product Manager", relevance: "Understanding of learning challenges" },
      { careerId: "data-scientist", careerTitle: "Data Scientist", relevance: "Deep subject knowledge and explanation skills" },
    ]
  },

  // Technology & Innovation
  {
    id: "robotics-club",
    name: "Robotics Club",
    category: "technology",
    icon: "🤖",
    description: "Building, programming, and competing with robots.",
    skills: ["Engineering", "Programming", "Teamwork", "Problem-solving", "Innovation"],
    careerConnections: [
      { careerId: "machine-learning-engineer", careerTitle: "Machine Learning Engineer", relevance: "Programming and AI fundamentals" },
      { careerId: "biomedical-engineer", careerTitle: "Biomedical Engineer", relevance: "Engineering design and prototyping" },
      { careerId: "game-developer", careerTitle: "Game Developer", relevance: "Programming and systems thinking" },
    ]
  },
  {
    id: "coding-club",
    name: "Coding & Programming Club",
    category: "technology",
    icon: "💻",
    description: "Learning and practicing software development and computational thinking.",
    skills: ["Programming", "Logic", "Problem-solving", "Collaboration", "Continuous learning"],
    careerConnections: [
      { careerId: "data-scientist", careerTitle: "Data Scientist", relevance: "Core programming skills for data work" },
      { careerId: "game-developer", careerTitle: "Game Developer", relevance: "Software development foundation" },
      { careerId: "health-informatics-specialist", careerTitle: "Health Informatics Specialist", relevance: "Technical skills for healthcare systems" },
    ]
  },
  {
    id: "hackathons",
    name: "Hackathons & Tech Competitions",
    category: "technology",
    icon: "🚀",
    description: "Intensive events building innovative solutions under time pressure.",
    skills: ["Rapid prototyping", "Teamwork", "Creativity", "Time management", "Presentation"],
    careerConnections: [
      { careerId: "tech-entrepreneur", careerTitle: "Tech Entrepreneur", relevance: "Startup simulation and rapid development" },
      { careerId: "product-manager", careerTitle: "Product Manager", relevance: "Product ideation and team coordination" },
      { careerId: "ux-designer", careerTitle: "UX Designer", relevance: "Rapid prototyping and user focus" },
    ]
  },

  // Media & Communication
  {
    id: "school-newspaper",
    name: "School Newspaper / Journalism",
    category: "media",
    icon: "📰",
    description: "Reporting, writing, and publishing news for the school community.",
    skills: ["Writing", "Research", "Interviewing", "Editing", "Deadline management"],
    careerConnections: [
      { careerId: "content-creator", careerTitle: "Content Creator", relevance: "Content production and audience engagement" },
      { careerId: "social-media-manager", careerTitle: "Social Media Manager", relevance: "Content creation and community understanding" },
      { careerId: "digital-marketing-specialist", careerTitle: "Digital Marketing Specialist", relevance: "Writing and communication skills" },
    ]
  },
  {
    id: "video-production",
    name: "Video Production & Film Club",
    category: "media",
    icon: "🎬",
    description: "Creating video content from scripting to post-production.",
    skills: ["Storytelling", "Technical skills", "Creativity", "Collaboration", "Editing"],
    careerConnections: [
      { careerId: "vr-ar-designer", careerTitle: "VR/AR Designer", relevance: "Visual storytelling and production skills" },
      { careerId: "motion-graphics-designer", careerTitle: "Motion Graphics Designer", relevance: "Video editing and visual effects" },
      { careerId: "content-creator", careerTitle: "Content Creator", relevance: "Video production expertise" },
    ]
  },
  {
    id: "podcast-radio",
    name: "Podcast & School Radio",
    category: "media",
    icon: "🎙️",
    description: "Audio content creation, hosting, and broadcasting.",
    skills: ["Public speaking", "Audio editing", "Interviewing", "Content planning", "Storytelling"],
    careerConnections: [
      { careerId: "podcast-producer", careerTitle: "Podcast Producer", relevance: "Direct audio production experience" },
      { careerId: "digital-marketing-specialist", careerTitle: "Digital Marketing Specialist", relevance: "Content marketing and audience building" },
      { careerId: "creative-director", careerTitle: "Creative Director", relevance: "Content strategy and production" },
    ]
  },

  // Business & Entrepreneurship
  {
    id: "deca-fbla",
    name: "DECA / FBLA Business Clubs",
    category: "business",
    icon: "💼",
    description: "Business education and competitive events in marketing, finance, and entrepreneurship.",
    skills: ["Business acumen", "Presentation", "Leadership", "Problem-solving", "Networking"],
    careerConnections: [
      { careerId: "product-manager", careerTitle: "Product Manager", relevance: "Business strategy and presentation skills" },
      { careerId: "sports-marketing-manager", careerTitle: "Sports Marketing Manager", relevance: "Marketing competition experience" },
      { careerId: "tech-entrepreneur", careerTitle: "Tech Entrepreneur", relevance: "Business plan development and pitching" },
    ]
  },
  {
    id: "investment-club",
    name: "Investment & Finance Club",
    category: "business",
    icon: "📈",
    description: "Learning about financial markets, investing, and economic analysis.",
    skills: ["Financial analysis", "Research", "Critical thinking", "Risk assessment", "Data analysis"],
    careerConnections: [
      { careerId: "sports-finance-analyst", careerTitle: "Sports Finance Analyst", relevance: "Financial modeling and analysis skills" },
      { careerId: "data-product-manager", careerTitle: "Data Product Manager", relevance: "Data-driven decision making" },
      { careerId: "health-economist", careerTitle: "Health Economist", relevance: "Economic analysis fundamentals" },
    ]
  },
  {
    id: "entrepreneurship-club",
    name: "Entrepreneurship Club",
    category: "business",
    icon: "🚀",
    description: "Developing business ideas and learning startup fundamentals.",
    skills: ["Innovation", "Business planning", "Pitching", "Resilience", "Market research"],
    careerConnections: [
      { careerId: "tech-entrepreneur", careerTitle: "Tech Entrepreneur", relevance: "Direct startup experience and mentality" },
      { careerId: "product-manager", careerTitle: "Product Manager", relevance: "Product thinking and market validation" },
      { careerId: "sports-franchise-owner", careerTitle: "Sports Franchise Owner", relevance: "Business ownership mindset" },
    ]
  },

  // Environment & Outdoors
  {
    id: "environmental-club",
    name: "Environmental Club",
    category: "environment",
    icon: "🌱",
    description: "Promoting environmental awareness and sustainability initiatives.",
    skills: ["Advocacy", "Project management", "Research", "Community organizing", "Sustainability mindset"],
    careerConnections: [
      { careerId: "environmental-engineer", careerTitle: "Environmental Engineer", relevance: "Passion for environmental solutions" },
      { careerId: "sustainability-consultant", careerTitle: "Sustainability Consultant", relevance: "Sustainability project experience" },
      { careerId: "renewable-energy-engineer", careerTitle: "Renewable Energy Engineer", relevance: "Environmental awareness and motivation" },
    ]
  },
  {
    id: "outdoor-adventure",
    name: "Outdoor Adventure & Hiking Club",
    category: "environment",
    icon: "🏔️",
    description: "Organized outdoor activities and wilderness exploration.",
    skills: ["Leadership", "Risk management", "Physical fitness", "Navigation", "Team coordination"],
    careerConnections: [
      { careerId: "environmental-engineer", careerTitle: "Environmental Engineer", relevance: "Field work appreciation and outdoor skills" },
      { careerId: "athletic-trainer", careerTitle: "Athletic Trainer", relevance: "Physical activity and fitness understanding" },
      { careerId: "sports-manager", careerTitle: "Sports Manager", relevance: "Event coordination and group leadership" },
    ]
  },
  {
    id: "gardening-farming",
    name: "Gardening & Urban Farming",
    category: "environment",
    icon: "🌻",
    description: "Growing plants and learning sustainable agriculture practices.",
    skills: ["Patience", "Science application", "Sustainability", "Project management", "Biology knowledge"],
    careerConnections: [
      { careerId: "sustainability-consultant", careerTitle: "Sustainability Consultant", relevance: "Hands-on sustainability experience" },
      { careerId: "sports-nutritionist", careerTitle: "Sports Nutritionist", relevance: "Understanding of food production and nutrition" },
      { careerId: "environmental-engineer", careerTitle: "Environmental Engineer", relevance: "Agricultural and ecological knowledge" },
    ]
  },

  // Leadership — MUN (extended)
  {
    id: "mun",
    name: "Model United Nations (MUN)",
    category: "leadership",
    icon: "Globe",
    description: "Simulating United Nations proceedings to debate global policy issues, practice diplomacy, and build international awareness.",
    skills: ["Diplomacy", "Research", "Public speaking", "Negotiation", "Global awareness", "Position paper writing"],
    careerConnections: [
      { careerId: "corporate-lawyer", careerTitle: "Corporate Lawyer", relevance: "Negotiation and policy argumentation skills" },
      { careerId: "product-manager", careerTitle: "Product Manager", relevance: "Stakeholder alignment and persuasion" },
      { careerId: "sustainability-consultant", careerTitle: "Sustainability Consultant", relevance: "Global policy and international frameworks exposure" },
      { careerId: "healthcare-administrator", careerTitle: "Healthcare Administrator", relevance: "WHO/health policy understanding" }
    ]
  },
  {
    id: "youth-parliament",
    name: "Youth Parliament",
    category: "leadership",
    icon: "Landmark",
    description: "Participating in structured parliamentary debates and legislative simulations to develop civic and governance skills.",
    skills: ["Public speaking", "Critical thinking", "Civic awareness", "Argumentation", "Leadership"],
    careerConnections: [
      { careerId: "corporate-lawyer", careerTitle: "Corporate Lawyer", relevance: "Legal reasoning and legislative understanding" },
      { careerId: "product-manager", careerTitle: "Product Manager", relevance: "Decision-making under structure" },
      { careerId: "hospital-ceo", careerTitle: "Hospital CEO", relevance: "Governance and policy navigation" }
    ]
  },
  {
    id: "tedx-organizer",
    name: "TEDx / Event Organizer",
    category: "leadership",
    icon: "Mic",
    description: "Organizing TEDx events or large-scale conferences — managing speakers, logistics, branding, and audience experience.",
    skills: ["Event management", "Leadership", "Communication", "Branding", "Project management", "Networking"],
    careerConnections: [
      { careerId: "sports-event-manager", careerTitle: "Sports Event Manager", relevance: "Direct large-scale event execution experience" },
      { careerId: "product-manager", careerTitle: "Product Manager", relevance: "End-to-end project ownership" },
      { careerId: "sports-marketing-manager", careerTitle: "Sports Marketing Manager", relevance: "Brand and audience engagement" }
    ]
  },
  {
    id: "ngo-volunteering",
    name: "NGO & Community Development Work",
    category: "leadership",
    icon: "HeartHandshake",
    description: "Volunteering with non-profits on education, health, or environment programs to create community impact.",
    skills: ["Empathy", "Project management", "Community organizing", "Communication", "Social awareness"],
    careerConnections: [
      { careerId: "healthcare-administrator", careerTitle: "Healthcare Administrator", relevance: "Grassroots health program experience" },
      { careerId: "sustainability-consultant", careerTitle: "Sustainability Consultant", relevance: "Community sustainability initiatives" },
      { careerId: "instructional-designer", careerTitle: "Instructional Designer", relevance: "Educational outreach and program design" }
    ]
  },

  // Academic
  {
    id: "economics-olympiad",
    name: "Economics Olympiad",
    category: "academic",
    icon: "BarChart2",
    description: "Competitive economics events testing microeconomics, macroeconomics, and data analysis under exam conditions.",
    skills: ["Economic thinking", "Data analysis", "Critical reasoning", "Mathematics", "Research"],
    careerConnections: [
      { careerId: "sports-finance-analyst", careerTitle: "Sports Finance Analyst", relevance: "Quantitative financial reasoning" },
      { careerId: "data-scientist", careerTitle: "Data Scientist", relevance: "Analytical and statistical foundations" },
      { careerId: "health-economist", careerTitle: "Health Economist", relevance: "Economic modeling skills" }
    ]
  },
  {
    id: "quiz-club",
    name: "Quiz Club & Knowledge Competitions",
    category: "academic",
    icon: "HelpCircle",
    description: "Competitive quizzing across general knowledge, science, history, and current affairs at school and national level.",
    skills: ["General knowledge", "Quick thinking", "Memory retention", "Research", "Teamwork"],
    careerConnections: [
      { careerId: "data-scientist", careerTitle: "Data Scientist", relevance: "Pattern recognition and broad domain knowledge" },
      { careerId: "content-creator", careerTitle: "Content Creator", relevance: "Wide knowledge base for content creation" },
      { careerId: "instructional-designer", careerTitle: "Instructional Designer", relevance: "Curriculum and knowledge structuring" }
    ]
  },
  {
    id: "writing-competition",
    name: "Creative Writing & Essay Competitions",
    category: "academic",
    icon: "PenLine",
    description: "Competing in essay writing, short story, or debate writing competitions at school or national level.",
    skills: ["Writing", "Critical thinking", "Creativity", "Research", "Argumentation"],
    careerConnections: [
      { careerId: "content-creator", careerTitle: "Content Creator", relevance: "Strong writing foundation" },
      { careerId: "digital-marketing-specialist", careerTitle: "Digital Marketing Specialist", relevance: "Copywriting and communication" },
      { careerId: "corporate-lawyer", careerTitle: "Corporate Lawyer", relevance: "Legal writing and argumentation" }
    ]
  },

  // Technology
  {
    id: "open-source",
    name: "Open Source Contributing",
    category: "technology",
    icon: "GitBranch",
    description: "Contributing code to open source projects on GitHub — fixing bugs, adding features, and collaborating globally.",
    skills: ["Programming", "Collaboration", "Version control", "Code review", "Documentation"],
    careerConnections: [
      { careerId: "software-engineer", careerTitle: "Software Engineer", relevance: "Real-world collaborative coding experience" },
      { careerId: "machine-learning-engineer", careerTitle: "Machine Learning Engineer", relevance: "Open source ML framework contribution" },
      { careerId: "data-scientist", careerTitle: "Data Scientist", relevance: "Data tool development and collaboration" }
    ]
  },
  {
    id: "competitive-programming",
    name: "Competitive Programming (LeetCode / Codeforces)",
    category: "technology",
    icon: "Terminal",
    description: "Solving algorithmic problems on platforms like LeetCode, Codeforces, or CodeChef to sharpen programming skills.",
    skills: ["Algorithms", "Data structures", "Problem solving", "Time complexity", "Programming"],
    careerConnections: [
      { careerId: "software-engineer", careerTitle: "Software Engineer", relevance: "Core CS fundamentals for technical interviews" },
      { careerId: "machine-learning-engineer", careerTitle: "Machine Learning Engineer", relevance: "Mathematical and algorithmic thinking" },
      { careerId: "data-scientist", careerTitle: "Data Scientist", relevance: "Optimization and algorithmic problem solving" }
    ]
  },
  {
    id: "ai-projects",
    name: "AI/ML Personal Projects",
    category: "technology",
    icon: "BrainCircuit",
    description: "Building personal AI/ML projects — from image classifiers to chatbots — and publishing them on GitHub or Hugging Face.",
    skills: ["Machine learning", "Python", "Data preprocessing", "Model training", "Research"],
    careerConnections: [
      { careerId: "machine-learning-engineer", careerTitle: "Machine Learning Engineer", relevance: "Hands-on AI project portfolio" },
      { careerId: "data-scientist", careerTitle: "Data Scientist", relevance: "Applied ML and data pipeline experience" },
      { careerId: "health-informatics-specialist", careerTitle: "Health Informatics Specialist", relevance: "AI in healthcare applications" }
    ]
  },

  // Arts
  {
    id: "classical-dance",
    name: "Classical Dance (Bharatanatyam, Kathak, etc.)",
    category: "arts",
    icon: "Music4",
    description: "Training and performing classical Indian dance forms, developing discipline, expression, and cultural knowledge.",
    skills: ["Discipline", "Creativity", "Physical fitness", "Cultural awareness", "Performance"],
    careerConnections: [
      { careerId: "creative-director", careerTitle: "Creative Director", relevance: "Artistic expression and performance direction" },
      { careerId: "content-creator", careerTitle: "Content Creator", relevance: "Performance and cultural content creation" },
      { careerId: "ux-designer", careerTitle: "UX Designer", relevance: "Understanding human expression and emotion" }
    ]
  },
  {
    id: "photography",
    name: "Photography Club",
    category: "arts",
    icon: "Camera",
    description: "Practicing composition, lighting, and storytelling through photography across portrait, street, and nature genres.",
    skills: ["Visual composition", "Creativity", "Attention to detail", "Storytelling", "Technical skills"],
    careerConnections: [
      { careerId: "ux-designer", careerTitle: "UX Designer", relevance: "Visual design and aesthetic eye" },
      { careerId: "digital-artist", careerTitle: "Digital Artist", relevance: "Visual storytelling foundation" },
      { careerId: "content-creator", careerTitle: "Content Creator", relevance: "Visual content creation skills" }
    ]
  },

  // Sports
  {
    id: "chess",
    name: "Chess (Competitive)",
    category: "sports",
    icon: "Crown",
    description: "Playing chess competitively at school, district, or national level, developing strategic thinking and patience.",
    skills: ["Strategic thinking", "Pattern recognition", "Patience", "Decision-making", "Focus"],
    careerConnections: [
      { careerId: "data-scientist", careerTitle: "Data Scientist", relevance: "Pattern recognition and strategic analysis" },
      { careerId: "product-manager", careerTitle: "Product Manager", relevance: "Strategic planning and long-term thinking" },
      { careerId: "sports-analytics-manager", careerTitle: "Sports Analytics Manager", relevance: "Game theory and performance optimization" }
    ]
  },
  {
    id: "cricket",
    name: "Cricket (Competitive)",
    category: "sports",
    icon: "CircleDot",
    description: "Playing competitive cricket at school or club level, developing teamwork, strategy, and athletic discipline.",
    skills: ["Teamwork", "Strategy", "Physical fitness", "Leadership", "Discipline"],
    careerConnections: [
      { careerId: "sports-manager", careerTitle: "Sports Manager", relevance: "Team dynamics and sports operations" },
      { careerId: "sports-marketing-manager", careerTitle: "Sports Marketing Manager", relevance: "Athlete and fan perspective" },
      { careerId: "athletic-trainer", careerTitle: "Athletic Trainer", relevance: "Physical conditioning knowledge" }
    ]
  },

  // Business
  {
    id: "case-competition",
    name: "Business Case Competition",
    category: "business",
    icon: "Lightbulb",
    description: "Competing in business case competitions by solving real company problems with structured analysis and presentations.",
    skills: ["Business analysis", "Presentation", "Teamwork", "Problem solving", "Financial modeling"],
    careerConnections: [
      { careerId: "product-manager", careerTitle: "Product Manager", relevance: "Business problem solving and stakeholder pitching" },
      { careerId: "tech-entrepreneur", careerTitle: "Tech Entrepreneur", relevance: "Real-world business challenge experience" },
      { careerId: "sports-finance-analyst", careerTitle: "Sports Finance Analyst", relevance: "Financial analysis and case structuring" }
    ]
  },
  {
    id: "mock-stock",
    name: "Mock Stock Market / Finance Club",
    category: "business",
    icon: "TrendingUp",
    description: "Participating in simulated stock market competitions to learn investing, portfolio management, and economic analysis.",
    skills: ["Financial analysis", "Risk management", "Research", "Data interpretation", "Decision-making"],
    careerConnections: [
      { careerId: "sports-finance-analyst", careerTitle: "Sports Finance Analyst", relevance: "Financial modeling and market analysis" },
      { careerId: "data-product-manager", careerTitle: "Data Product Manager", relevance: "Data-driven decision making" },
      { careerId: "health-economist", careerTitle: "Health Economist", relevance: "Economic modeling and analysis" }
    ]
  },
];

export function getExtracurricularsByCategory(categoryId: string): Extracurricular[] {
  return EXTRACURRICULARS.filter(e => e.category === categoryId);
}

export function getExtracurricularById(id: string): Extracurricular | undefined {
  return EXTRACURRICULARS.find(e => e.id === id);
}

export function getExtracurricularsByCareerId(careerId: string): Extracurricular[] {
  return EXTRACURRICULARS.filter(e => 
    e.careerConnections.some(c => c.careerId === careerId)
  );
}
