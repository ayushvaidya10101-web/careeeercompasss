// Extended Extracurricular Activities - from Crimson Education
// Source: https://www.crimsoneducation.org/in/blog/extracurricular-activities-list
// All activities are informational only - designed for exploration

import type { Extracurricular } from './extracurriculars';

export const EXTENDED_EXTRACURRICULARS: Extracurricular[] = [
  // Academic Competitions
  {
    id: "olympiad-math",
    name: "Math Olympiad",
    category: "academic",
    icon: "🧮",
    description: "Competitive mathematics competitions testing problem-solving and logical reasoning at national and international levels.",
    skills: ["Problem-solving", "Logical reasoning", "Abstract thinking", "Perseverance", "Mathematical creativity"],
    careerConnections: [
      { careerId: "data-scientist", careerTitle: "Data Scientist", relevance: "Strong mathematical foundation essential for statistical analysis" },
      { careerId: "machine-learning-engineer", careerTitle: "Machine Learning Engineer", relevance: "Algorithm design and optimization require advanced math" },
      { careerId: "financial-analyst", careerTitle: "Financial Analyst", relevance: "Quantitative analysis and modeling skills" },
    ]
  },
  {
    id: "olympiad-physics",
    name: "Physics Olympiad",
    category: "academic",
    icon: "⚛️",
    description: "Competitive physics competitions challenging students with theoretical and experimental problems.",
    skills: ["Scientific reasoning", "Problem-solving", "Experimental design", "Mathematical modeling", "Critical thinking"],
    careerConnections: [
      { careerId: "aerospace-engineer", careerTitle: "Aerospace Engineer", relevance: "Physics principles fundamental to aerospace design" },
      { careerId: "nuclear-engineer", careerTitle: "Nuclear Engineer", relevance: "Deep understanding of physics required" },
      { careerId: "research-scientist", careerTitle: "Research Scientist", relevance: "Experimental and theoretical research skills" },
    ]
  },
  {
    id: "olympiad-chemistry",
    name: "Chemistry Olympiad",
    category: "academic",
    icon: "🧪",
    description: "National and international chemistry competitions testing theoretical knowledge and lab skills.",
    skills: ["Scientific analysis", "Lab techniques", "Problem-solving", "Attention to detail", "Research methodology"],
    careerConnections: [
      { careerId: "chemical-engineer", careerTitle: "Chemical Engineer", relevance: "Deep chemistry knowledge for process design" },
      { careerId: "pharmacist", careerTitle: "Pharmacist", relevance: "Understanding of chemical compounds and reactions" },
      { careerId: "biomedical-engineer", careerTitle: "Biomedical Engineer", relevance: "Biochemistry knowledge for medical devices" },
    ]
  },
  {
    id: "olympiad-biology",
    name: "Biology Olympiad",
    category: "academic",
    icon: "🧬",
    description: "Competitive biology competitions covering molecular biology, ecology, and physiology.",
    skills: ["Scientific reasoning", "Research skills", "Lab techniques", "Data analysis", "Systems thinking"],
    careerConnections: [
      { careerId: "physician", careerTitle: "Physician", relevance: "Foundational understanding of biological systems" },
      { careerId: "veterinarian", careerTitle: "Veterinarian", relevance: "Animal biology and physiology knowledge" },
      { careerId: "biomedical-engineer", careerTitle: "Biomedical Engineer", relevance: "Biological principles for device design" },
    ]
  },
  {
    id: "olympiad-informatics",
    name: "Informatics Olympiad (Programming)",
    category: "technology",
    icon: "💻",
    description: "Competitive programming contests testing algorithmic thinking and coding skills.",
    skills: ["Algorithmic thinking", "Coding", "Problem decomposition", "Optimization", "Logic"],
    careerConnections: [
      { careerId: "software-engineer", careerTitle: "Software Engineer", relevance: "Core programming and algorithm skills" },
      { careerId: "ai-engineer", careerTitle: "AI Engineer", relevance: "Algorithm design crucial for AI development" },
      { careerId: "devops-engineer", careerTitle: "DevOps Engineer", relevance: "Automation and scripting foundation" },
    ]
  },

  // Research & Science
  {
    id: "science-fair",
    name: "Science Fair Projects",
    category: "academic",
    icon: "🔬",
    description: "Independent scientific research projects presented at local, regional, or national science fairs.",
    skills: ["Research methodology", "Scientific writing", "Presentation", "Critical thinking", "Independent learning"],
    careerConnections: [
      { careerId: "research-scientist", careerTitle: "Research Scientist", relevance: "Direct experience with scientific research process" },
      { careerId: "professor", careerTitle: "University Professor", relevance: "Early exposure to academic research" },
      { careerId: "data-scientist", careerTitle: "Data Scientist", relevance: "Data collection and analysis experience" },
    ]
  },
  {
    id: "research-internship",
    name: "Research Internships",
    category: "academic",
    icon: "📊",
    description: "Working with professors or industry researchers on real research projects.",
    skills: ["Research methodology", "Technical skills", "Professional communication", "Lab techniques", "Academic writing"],
    careerConnections: [
      { careerId: "research-scientist", careerTitle: "Research Scientist", relevance: "Professional research experience" },
      { careerId: "professor", careerTitle: "University Professor", relevance: "Academic research foundation" },
      { careerId: "biomedical-engineer", careerTitle: "Biomedical Engineer", relevance: "Research experience in applied sciences" },
    ]
  },
  
  // Community Service & Social Impact
  {
    id: "nonprofit-founding",
    name: "Founding a Nonprofit Organization",
    category: "leadership",
    icon: "🌟",
    description: "Starting and running a nonprofit to address a community need or social issue.",
    skills: ["Leadership", "Strategic planning", "Fundraising", "Public speaking", "Project management"],
    careerConnections: [
      { careerId: "tech-entrepreneur", careerTitle: "Tech Entrepreneur", relevance: "Organization building and leadership experience" },
      { careerId: "management-consultant", careerTitle: "Management Consultant", relevance: "Strategic thinking and organizational skills" },
      { careerId: "healthcare-administrator", careerTitle: "Healthcare Administrator", relevance: "Nonprofit and organizational management" },
    ]
  },
  {
    id: "hospital-volunteering",
    name: "Hospital Volunteering",
    category: "leadership",
    icon: "🏥",
    description: "Volunteering at hospitals to assist patients, staff, and learn about healthcare environments.",
    skills: ["Empathy", "Communication", "Responsibility", "Healthcare awareness", "Teamwork"],
    careerConnections: [
      { careerId: "physician", careerTitle: "Physician", relevance: "Early exposure to clinical environment" },
      { careerId: "nurse-practitioner", careerTitle: "Nurse Practitioner", relevance: "Understanding of patient care" },
      { careerId: "healthcare-administrator", careerTitle: "Healthcare Administrator", relevance: "Healthcare operations exposure" },
    ]
  },
  {
    id: "teaching-tutoring",
    name: "Teaching & Tutoring Underprivileged Students",
    category: "leadership",
    icon: "📚",
    description: "Providing free tutoring or teaching to students from underserved communities.",
    skills: ["Teaching", "Patience", "Communication", "Empathy", "Leadership"],
    careerConnections: [
      { careerId: "teacher-k12", careerTitle: "K-12 Teacher", relevance: "Direct teaching experience" },
      { careerId: "professor", careerTitle: "University Professor", relevance: "Teaching and mentoring skills" },
      { careerId: "instructional-designer", careerTitle: "Instructional Designer", relevance: "Understanding of learning challenges" },
    ]
  },
  {
    id: "environmental-activism",
    name: "Environmental Conservation Projects",
    category: "environment",
    icon: "🌿",
    description: "Leading or participating in environmental conservation, cleanup, or awareness initiatives.",
    skills: ["Leadership", "Project management", "Advocacy", "Community organizing", "Environmental awareness"],
    careerConnections: [
      { careerId: "environmental-engineer", careerTitle: "Environmental Engineer", relevance: "Passion for environmental solutions" },
      { careerId: "sustainability-consultant", careerTitle: "Sustainability Consultant", relevance: "Environmental project experience" },
      { careerId: "renewable-energy-engineer", careerTitle: "Renewable Energy Engineer", relevance: "Commitment to sustainability" },
    ]
  },

  // Arts & Performance (Extended)
  {
    id: "dance-team",
    name: "Dance Team / Company",
    category: "arts",
    icon: "💃",
    description: "Performing various dance styles in a competitive or performance team setting.",
    skills: ["Physical fitness", "Discipline", "Teamwork", "Creativity", "Performance"],
    careerConnections: [
      { careerId: "creative-director", careerTitle: "Creative Director", relevance: "Performance and creative expression" },
      { careerId: "content-creator", careerTitle: "Content Creator", relevance: "Entertainment and performance skills" },
      { careerId: "animator", careerTitle: "Animator", relevance: "Understanding of movement and expression" },
    ]
  },
  {
    id: "art-portfolio",
    name: "Art Portfolio Development",
    category: "arts",
    icon: "🖼️",
    description: "Creating a collection of artwork demonstrating skill and artistic growth.",
    skills: ["Creativity", "Technical skills", "Self-reflection", "Persistence", "Artistic vision"],
    careerConnections: [
      { careerId: "graphic-designer", careerTitle: "Graphic Designer", relevance: "Visual arts foundation" },
      { careerId: "interior-designer", careerTitle: "Interior Designer", relevance: "Artistic sensibility and design skills" },
      { careerId: "ui-designer", careerTitle: "UI Designer", relevance: "Visual design capabilities" },
    ]
  },
  {
    id: "creative-writing",
    name: "Creative Writing Club / Literary Magazine",
    category: "arts",
    icon: "✍️",
    description: "Writing poetry, fiction, or creative nonfiction for publication or workshops.",
    skills: ["Writing", "Creativity", "Critical thinking", "Editing", "Self-expression"],
    careerConnections: [
      { careerId: "writer", careerTitle: "Writer / Author", relevance: "Direct writing experience and portfolio" },
      { careerId: "copywriter", careerTitle: "Copywriter", relevance: "Creative writing foundation" },
      { careerId: "journalist", careerTitle: "Journalist", relevance: "Writing and storytelling skills" },
    ]
  },

  // Sports (Extended)
  {
    id: "martial-arts",
    name: "Martial Arts (Karate, Taekwondo, Judo)",
    category: "sports",
    icon: "🥋",
    description: "Training in martial arts disciplines for self-defense, competition, and personal development.",
    skills: ["Discipline", "Physical fitness", "Focus", "Respect", "Self-defense"],
    careerConnections: [
      { careerId: "athletic-trainer", careerTitle: "Athletic Trainer", relevance: "Understanding of body mechanics and training" },
      { careerId: "physical-therapist", careerTitle: "Physical Therapist", relevance: "Movement and body awareness" },
      { careerId: "sports-psychologist", careerTitle: "Sports Psychologist", relevance: "Mental discipline and focus techniques" },
    ]
  },
  {
    id: "esports",
    name: "Esports / Competitive Gaming",
    category: "sports",
    icon: "🎮",
    description: "Competing in video game tournaments at amateur or professional levels.",
    skills: ["Strategic thinking", "Teamwork", "Quick decision-making", "Hand-eye coordination", "Communication"],
    careerConnections: [
      { careerId: "game-developer", careerTitle: "Game Developer", relevance: "Deep understanding of game mechanics" },
      { careerId: "esports-business-manager", careerTitle: "Esports Business Manager", relevance: "Industry knowledge and experience" },
      { careerId: "content-creator", careerTitle: "Content Creator", relevance: "Gaming content and streaming experience" },
    ]
  },
  {
    id: "yoga-wellness",
    name: "Yoga & Wellness Programs",
    category: "sports",
    icon: "🧘",
    description: "Practicing and potentially teaching yoga, meditation, or wellness activities.",
    skills: ["Mindfulness", "Physical flexibility", "Stress management", "Self-awareness", "Teaching"],
    careerConnections: [
      { careerId: "sports-psychologist", careerTitle: "Sports Psychologist", relevance: "Mind-body connection understanding" },
      { careerId: "physical-therapist", careerTitle: "Physical Therapist", relevance: "Movement and wellness expertise" },
      { careerId: "healthcare-administrator", careerTitle: "Healthcare Administrator", relevance: "Wellness program understanding" },
    ]
  },

  // Business & Entrepreneurship (Extended)
  {
    id: "startup-club",
    name: "Student Startup / Business Venture",
    category: "business",
    icon: "🚀",
    description: "Starting and running an actual business while in school.",
    skills: ["Entrepreneurship", "Problem-solving", "Financial management", "Marketing", "Resilience"],
    careerConnections: [
      { careerId: "tech-entrepreneur", careerTitle: "Tech Entrepreneur", relevance: "Direct startup experience" },
      { careerId: "product-manager", careerTitle: "Product Manager", relevance: "Product development and market understanding" },
      { careerId: "management-consultant", careerTitle: "Management Consultant", relevance: "Business strategy experience" },
    ]
  },
  {
    id: "stock-market-simulation",
    name: "Stock Market Simulation / Investment Clubs",
    category: "business",
    icon: "📊",
    description: "Participating in virtual stock trading competitions or investment clubs.",
    skills: ["Financial analysis", "Risk assessment", "Research", "Decision-making", "Economic awareness"],
    careerConnections: [
      { careerId: "financial-analyst", careerTitle: "Financial Analyst", relevance: "Investment analysis experience" },
      { careerId: "investment-banker", careerTitle: "Investment Banker", relevance: "Market understanding and interest" },
      { careerId: "accountant", careerTitle: "Accountant", relevance: "Financial literacy foundation" },
    ]
  },

  // Technology (Extended)
  {
    id: "app-development",
    name: "App Development Projects",
    category: "technology",
    icon: "📱",
    description: "Building mobile or web applications independently or in teams.",
    skills: ["Programming", "UI/UX design", "Problem-solving", "Project management", "User research"],
    careerConnections: [
      { careerId: "mobile-app-developer", careerTitle: "Mobile App Developer", relevance: "Direct app development experience" },
      { careerId: "full-stack-developer", careerTitle: "Full Stack Developer", relevance: "Complete application development" },
      { careerId: "product-manager", careerTitle: "Product Manager", relevance: "Product building experience" },
    ]
  },
  {
    id: "cybersecurity-club",
    name: "Cybersecurity Club / CTF Competitions",
    category: "technology",
    icon: "🔐",
    description: "Participating in Capture The Flag competitions and learning security skills.",
    skills: ["Security thinking", "Problem-solving", "Technical skills", "Ethical hacking", "Attention to detail"],
    careerConnections: [
      { careerId: "cybersecurity-analyst", careerTitle: "Cybersecurity Analyst", relevance: "Hands-on security experience" },
      { careerId: "software-engineer", careerTitle: "Software Engineer", relevance: "Security-conscious development" },
      { careerId: "network-engineer", careerTitle: "Network Engineer", relevance: "Network security understanding" },
    ]
  },
  {
    id: "ai-ml-projects",
    name: "AI/Machine Learning Projects",
    category: "technology",
    icon: "🤖",
    description: "Building AI/ML models for competitions, research, or practical applications.",
    skills: ["Machine learning", "Data analysis", "Programming", "Research", "Problem-solving"],
    careerConnections: [
      { careerId: "ai-engineer", careerTitle: "AI Engineer", relevance: "Direct AI/ML development experience" },
      { careerId: "data-scientist", careerTitle: "Data Scientist", relevance: "ML and data skills" },
      { careerId: "machine-learning-engineer", careerTitle: "Machine Learning Engineer", relevance: "Hands-on ML projects" },
    ]
  },
  {
    id: "3d-printing",
    name: "3D Printing / Maker Projects",
    category: "technology",
    icon: "🖨️",
    description: "Designing and creating physical objects using 3D printing and maker technologies.",
    skills: ["CAD design", "Problem-solving", "Prototyping", "Engineering thinking", "Creativity"],
    careerConnections: [
      { careerId: "mechanical-engineer", careerTitle: "Mechanical Engineer", relevance: "Design and prototyping skills" },
      { careerId: "industrial-engineer", careerTitle: "Industrial Engineer", relevance: "Manufacturing and design experience" },
      { careerId: "biomedical-engineer", careerTitle: "Biomedical Engineer", relevance: "Medical device prototyping" },
    ]
  },

  // Media & Communication (Extended)
  {
    id: "youtube-channel",
    name: "YouTube Channel / Content Creation",
    category: "media",
    icon: "🎥",
    description: "Creating and managing a YouTube channel with regular video content.",
    skills: ["Video production", "Storytelling", "Audience engagement", "Marketing", "Consistency"],
    careerConnections: [
      { careerId: "content-creator", careerTitle: "Content Creator", relevance: "Direct content creation experience" },
      { careerId: "video-editor", careerTitle: "Video Editor", relevance: "Video production skills" },
      { careerId: "digital-marketing-specialist", careerTitle: "Digital Marketing Specialist", relevance: "Audience building and engagement" },
    ]
  },
  {
    id: "blogging",
    name: "Blogging / Online Writing",
    category: "media",
    icon: "📝",
    description: "Maintaining a blog or online publication on topics of interest.",
    skills: ["Writing", "Content strategy", "SEO", "Audience development", "Consistency"],
    careerConnections: [
      { careerId: "copywriter", careerTitle: "Copywriter", relevance: "Writing and content creation experience" },
      { careerId: "seo-specialist", careerTitle: "SEO Specialist", relevance: "SEO and content optimization" },
      { careerId: "journalist", careerTitle: "Journalist", relevance: "Writing and publishing experience" },
    ]
  },
  {
    id: "social-media-management",
    name: "Social Media Management",
    category: "media",
    icon: "📲",
    description: "Managing social media accounts for clubs, organizations, or personal brand.",
    skills: ["Social media strategy", "Content creation", "Analytics", "Community management", "Branding"],
    careerConnections: [
      { careerId: "social-media-manager", careerTitle: "Social Media Manager", relevance: "Direct social media experience" },
      { careerId: "digital-marketing-specialist", careerTitle: "Digital Marketing Specialist", relevance: "Digital marketing skills" },
      { careerId: "public-relations-specialist", careerTitle: "Public Relations Specialist", relevance: "Communication and reputation management" },
    ]
  },

  // Cultural & Language
  {
    id: "cultural-club",
    name: "Cultural Clubs & Heritage Organizations",
    category: "leadership",
    icon: "🌍",
    description: "Participating in or leading clubs celebrating cultural heritage and diversity.",
    skills: ["Cultural awareness", "Leadership", "Event planning", "Community building", "Public speaking"],
    careerConnections: [
      { careerId: "hr-manager", careerTitle: "Human Resources Manager", relevance: "Diversity and inclusion awareness" },
      { careerId: "public-relations-specialist", careerTitle: "Public Relations Specialist", relevance: "Community engagement skills" },
      { careerId: "marketing-manager", careerTitle: "Marketing Manager", relevance: "Cultural marketing understanding" },
    ]
  },
  {
    id: "language-club",
    name: "Language Clubs / Foreign Language Learning",
    category: "academic",
    icon: "🗣️",
    description: "Learning and practicing foreign languages through clubs and immersion activities.",
    skills: ["Communication", "Cultural awareness", "Persistence", "Memory", "Flexibility"],
    careerConnections: [
      { careerId: "management-consultant", careerTitle: "Management Consultant", relevance: "International business communication" },
      { careerId: "journalist", careerTitle: "Journalist", relevance: "Multilingual reporting capabilities" },
      { careerId: "marketing-manager", careerTitle: "Marketing Manager", relevance: "Global marketing communication" },
    ]
  },
];

export function getExtendedExtracurriculars(): Extracurricular[] {
  return EXTENDED_EXTRACURRICULARS;
}
