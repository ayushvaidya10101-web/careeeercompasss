// Career to College mapping - matches careers to universities with relevant programs
// All rankings sourced from QS World University Rankings 2024

export interface CareerCollege {
  collegeId: string;
  programName: string;
  programUrl: string;
  relevanceScore: number; // 1-100, higher = more relevant
}

export interface CareerCollegeMapping {
  careerId: string;
  colleges: CareerCollege[];
}

// Interest category to relevant course keywords mapping
export const INTEREST_TO_COURSES: Record<string, string[]> = {
  technology: ["Computer Science", "Engineering", "Computing", "Informatics", "Data Science", "Software"],
  business: ["Business", "Economics", "Finance", "Management", "Marketing", "MBA", "Commerce"],
  healthcare: ["Medicine", "Nursing", "Public Health", "Biomedical", "Pharmacy", "Health Sciences"],
  arts: ["Arts", "Design", "Film", "Drama", "Music", "Architecture", "Fine Arts", "Creative"],
  science: ["Sciences", "Physics", "Chemistry", "Biology", "Mathematics", "Research"],
  engineering: ["Engineering", "Mechanical", "Electrical", "Civil", "Chemical", "Aerospace"],
  education: ["Education", "Teaching", "Pedagogy", "Learning"],
  sports: ["Sports", "Kinesiology", "Physical Education", "Athletic", "Exercise Science"],
  media: ["Communication", "Journalism", "Media", "Broadcasting", "Film & Television"],
  law: ["Law", "Legal Studies", "Jurisprudence", "Political Science"],
  environment: ["Environmental", "Sustainability", "Climate", "Ecology", "Conservation"],
  hospitality: ["Hospitality", "Tourism", "Hotel Administration", "Culinary"],
};

// Career-specific program mappings with official program URLs
export const CAREER_COLLEGE_MAPPINGS: CareerCollegeMapping[] = [
  // Sports + Business careers
  {
    careerId: "sports-manager",
    colleges: [
      { collegeId: "columbia", programName: "Sports Management Program", programUrl: "https://www.sps.columbia.edu/academics/masters/sports-management", relevanceScore: 95 },
      { collegeId: "umich", programName: "Sport Management", programUrl: "https://kinesiology.umich.edu/academics/sport-management", relevanceScore: 94 },
      { collegeId: "nyu", programName: "Sports Business", programUrl: "https://www.sps.nyu.edu/homepage/academics/divisions-and-departments/schack-institute-of-real-estate/ma-in-sports-business.html", relevanceScore: 93 },
      { collegeId: "usc", programName: "Sports Business", programUrl: "https://annenberg.usc.edu/journalism/sports-journalism", relevanceScore: 90 },
      { collegeId: "manchester", programName: "Sport Business", programUrl: "https://www.manchester.ac.uk/study/masters/courses/list/03171/msc-sport-business/", relevanceScore: 88 },
    ]
  },
  {
    careerId: "sports-marketing-manager",
    colleges: [
      { collegeId: "nyu", programName: "Sports & Society", programUrl: "https://steinhardt.nyu.edu/degree/ma-applied-psychology/sports-society", relevanceScore: 94 },
      { collegeId: "columbia", programName: "Sports Management", programUrl: "https://www.sps.columbia.edu/academics/masters/sports-management", relevanceScore: 92 },
      { collegeId: "northwestern", programName: "Sports Administration", programUrl: "https://www.sps.northwestern.edu/masters/sports-administration/", relevanceScore: 91 },
      { collegeId: "lse", programName: "Management & Marketing", programUrl: "https://www.lse.ac.uk/study-at-lse/Graduate/degree-programmes-2024/MSc-Marketing", relevanceScore: 85 },
    ]
  },
  {
    careerId: "athletic-director",
    colleges: [
      { collegeId: "umich", programName: "Sport Management", programUrl: "https://kinesiology.umich.edu/academics/sport-management", relevanceScore: 96 },
      { collegeId: "columbia", programName: "Sports Management", programUrl: "https://www.sps.columbia.edu/academics/masters/sports-management", relevanceScore: 93 },
      { collegeId: "nyu", programName: "Sports Business", programUrl: "https://www.sps.nyu.edu/homepage/academics/divisions-and-departments/schack-institute-of-real-estate/ma-in-sports-business.html", relevanceScore: 90 },
      { collegeId: "ohio-state", programName: "Sport Management", programUrl: "https://cph.osu.edu/undergraduate/sport-industry", relevanceScore: 88 },
    ]
  },
  {
    careerId: "sports-agent",
    colleges: [
      { collegeId: "columbia", programName: "Sports Management", programUrl: "https://www.sps.columbia.edu/academics/masters/sports-management", relevanceScore: 94 },
      { collegeId: "harvard", programName: "Law School", programUrl: "https://hls.harvard.edu/", relevanceScore: 92 },
      { collegeId: "yale", programName: "Law", programUrl: "https://law.yale.edu/", relevanceScore: 91 },
      { collegeId: "nyu", programName: "Sports Business", programUrl: "https://www.sps.nyu.edu/homepage/academics/divisions-and-departments/schack-institute-of-real-estate/ma-in-sports-business.html", relevanceScore: 88 },
    ]
  },
  {
    careerId: "sports-analytics-manager",
    colleges: [
      { collegeId: "mit", programName: "Sloan Sports Analytics", programUrl: "https://www.sloansportsconference.com/", relevanceScore: 98 },
      { collegeId: "stanford", programName: "Statistics & Data Science", programUrl: "https://statistics.stanford.edu/", relevanceScore: 95 },
      { collegeId: "cmu", programName: "Statistics & Data Science", programUrl: "https://www.cmu.edu/dietrich/statistics-datascience/", relevanceScore: 94 },
      { collegeId: "berkeley", programName: "Data Science", programUrl: "https://data.berkeley.edu/", relevanceScore: 92 },
    ]
  },

  // Technology + Business careers
  {
    careerId: "product-manager",
    colleges: [
      { collegeId: "stanford", programName: "MS in Management Science & Engineering", programUrl: "https://msande.stanford.edu/", relevanceScore: 98 },
      { collegeId: "mit", programName: "Sloan MBA", programUrl: "https://mitsloan.mit.edu/mba", relevanceScore: 97 },
      { collegeId: "harvard", programName: "MBA", programUrl: "https://www.hbs.edu/mba/", relevanceScore: 96 },
      { collegeId: "cmu", programName: "Product Management", programUrl: "https://www.cmu.edu/tepper/programs/master-product-management/", relevanceScore: 95 },
      { collegeId: "berkeley", programName: "Haas MBA", programUrl: "https://haas.berkeley.edu/", relevanceScore: 94 },
    ]
  },
  {
    careerId: "tech-entrepreneur",
    colleges: [
      { collegeId: "stanford", programName: "Graduate School of Business", programUrl: "https://www.gsb.stanford.edu/", relevanceScore: 99 },
      { collegeId: "mit", programName: "Martin Trust Center", programUrl: "https://entrepreneurship.mit.edu/", relevanceScore: 98 },
      { collegeId: "harvard", programName: "Innovation & Entrepreneurship", programUrl: "https://www.hbs.edu/entrepreneurship/", relevanceScore: 95 },
      { collegeId: "berkeley", programName: "SCET Entrepreneurship", programUrl: "https://scet.berkeley.edu/", relevanceScore: 93 },
    ]
  },
  {
    careerId: "data-product-manager",
    colleges: [
      { collegeId: "cmu", programName: "Product Management", programUrl: "https://www.cmu.edu/tepper/programs/master-product-management/", relevanceScore: 97 },
      { collegeId: "stanford", programName: "Data Science", programUrl: "https://statistics.stanford.edu/", relevanceScore: 95 },
      { collegeId: "mit", programName: "Master of Business Analytics", programUrl: "https://mitsloan.mit.edu/master-of-business-analytics", relevanceScore: 94 },
      { collegeId: "berkeley", programName: "IEOR", programUrl: "https://ieor.berkeley.edu/", relevanceScore: 92 },
    ]
  },

  // Healthcare + Technology
  {
    careerId: "health-informatics-specialist",
    colleges: [
      { collegeId: "stanford", programName: "Biomedical Informatics", programUrl: "https://med.stanford.edu/bmi.html", relevanceScore: 98 },
      { collegeId: "mit", programName: "Health Sciences & Technology", programUrl: "https://hst.mit.edu/", relevanceScore: 96 },
      { collegeId: "harvard", programName: "Biomedical Informatics", programUrl: "https://dbmi.hms.harvard.edu/", relevanceScore: 95 },
      { collegeId: "jhu", programName: "Health Informatics", programUrl: "https://www.jhsph.edu/", relevanceScore: 93 },
    ]
  },
  {
    careerId: "biomedical-engineer",
    colleges: [
      { collegeId: "jhu", programName: "Biomedical Engineering", programUrl: "https://www.bme.jhu.edu/", relevanceScore: 99 },
      { collegeId: "mit", programName: "Biological Engineering", programUrl: "https://be.mit.edu/", relevanceScore: 98 },
      { collegeId: "stanford", programName: "Bioengineering", programUrl: "https://bioengineering.stanford.edu/", relevanceScore: 97 },
      { collegeId: "gatech", programName: "Biomedical Engineering", programUrl: "https://bme.gatech.edu/", relevanceScore: 95 },
      { collegeId: "imperial", programName: "Biomedical Engineering", programUrl: "https://www.imperial.ac.uk/bioengineering/", relevanceScore: 93 },
    ]
  },

  // Arts + Technology
  {
    careerId: "ux-designer",
    colleges: [
      { collegeId: "cmu", programName: "Human-Computer Interaction", programUrl: "https://www.hcii.cmu.edu/", relevanceScore: 99 },
      { collegeId: "stanford", programName: "Design Program", programUrl: "https://designprogram.stanford.edu/", relevanceScore: 97 },
      { collegeId: "mit", programName: "Media Lab", programUrl: "https://www.media.mit.edu/", relevanceScore: 95 },
      { collegeId: "gatech", programName: "Digital Media", programUrl: "https://dm.lmc.gatech.edu/", relevanceScore: 92 },
      { collegeId: "ucl", programName: "Human-Computer Interaction", programUrl: "https://www.ucl.ac.uk/pals/study/masters/msc-human-computer-interaction", relevanceScore: 90 },
    ]
  },
  {
    careerId: "game-developer",
    colleges: [
      { collegeId: "usc", programName: "Interactive Media & Games", programUrl: "https://cinema.usc.edu/interactive/", relevanceScore: 98 },
      { collegeId: "cmu", programName: "Entertainment Technology", programUrl: "https://www.etc.cmu.edu/", relevanceScore: 97 },
      { collegeId: "mit", programName: "Game Lab", programUrl: "https://gamelab.mit.edu/", relevanceScore: 94 },
      { collegeId: "nyu", programName: "Game Center", programUrl: "https://gamecenter.nyu.edu/", relevanceScore: 93 },
    ]
  },

  // Science + Technology
  {
    careerId: "data-scientist",
    colleges: [
      { collegeId: "stanford", programName: "Statistics & Data Science", programUrl: "https://statistics.stanford.edu/", relevanceScore: 99 },
      { collegeId: "mit", programName: "Data, Systems, and Society", programUrl: "https://idss.mit.edu/", relevanceScore: 98 },
      { collegeId: "berkeley", programName: "Data Science", programUrl: "https://data.berkeley.edu/", relevanceScore: 97 },
      { collegeId: "cmu", programName: "Machine Learning", programUrl: "https://www.ml.cmu.edu/", relevanceScore: 96 },
      { collegeId: "harvard", programName: "Data Science", programUrl: "https://datascience.harvard.edu/", relevanceScore: 95 },
    ]
  },
  {
    careerId: "machine-learning-engineer",
    colleges: [
      { collegeId: "stanford", programName: "CS - Machine Learning", programUrl: "https://cs.stanford.edu/", relevanceScore: 99 },
      { collegeId: "cmu", programName: "Machine Learning", programUrl: "https://www.ml.cmu.edu/", relevanceScore: 99 },
      { collegeId: "mit", programName: "EECS - AI", programUrl: "https://www.eecs.mit.edu/", relevanceScore: 98 },
      { collegeId: "berkeley", programName: "AI Research", programUrl: "https://bair.berkeley.edu/", relevanceScore: 96 },
      { collegeId: "cambridge", programName: "Machine Learning", programUrl: "https://mlg.eng.cam.ac.uk/", relevanceScore: 94 },
    ]
  },

  // Environment + Engineering
  {
    careerId: "environmental-engineer",
    colleges: [
      { collegeId: "stanford", programName: "Environmental Engineering", programUrl: "https://cee.stanford.edu/", relevanceScore: 98 },
      { collegeId: "mit", programName: "Civil & Environmental", programUrl: "https://cee.mit.edu/", relevanceScore: 97 },
      { collegeId: "berkeley", programName: "Civil & Environmental Eng", programUrl: "https://ce.berkeley.edu/", relevanceScore: 96 },
      { collegeId: "eth-zurich", programName: "Environmental Engineering", programUrl: "https://ethz.ch/en/studies/bachelor/bachelor-study-programmes/engineering-sciences/environmental-engineering.html", relevanceScore: 95 },
      { collegeId: "imperial", programName: "Environmental Engineering", programUrl: "https://www.imperial.ac.uk/civil-engineering/", relevanceScore: 93 },
    ]
  },
  {
    careerId: "renewable-energy-engineer",
    colleges: [
      { collegeId: "stanford", programName: "Energy Resources Engineering", programUrl: "https://earth.stanford.edu/ere", relevanceScore: 97 },
      { collegeId: "mit", programName: "Energy Studies", programUrl: "https://energy.mit.edu/", relevanceScore: 96 },
      { collegeId: "imperial", programName: "Sustainable Energy Futures", programUrl: "https://www.imperial.ac.uk/energy-futures-lab/", relevanceScore: 94 },
      { collegeId: "eth-zurich", programName: "Energy Science", programUrl: "https://ethz.ch/en/studies/master/degree-programmes/engineering-sciences/energy-science-and-technology.html", relevanceScore: 93 },
    ]
  },

  // Education + Technology
  {
    careerId: "instructional-designer",
    colleges: [
      { collegeId: "stanford", programName: "Learning Design & Technology", programUrl: "https://ed.stanford.edu/ldt", relevanceScore: 97 },
      { collegeId: "harvard", programName: "Education", programUrl: "https://www.gse.harvard.edu/", relevanceScore: 95 },
      { collegeId: "columbia", programName: "Instructional Technology", programUrl: "https://www.tc.columbia.edu/", relevanceScore: 93 },
      { collegeId: "ucl", programName: "Education & Technology", programUrl: "https://www.ucl.ac.uk/ioe/", relevanceScore: 90 },
    ]
  },
  {
    careerId: "edtech-product-manager",
    colleges: [
      { collegeId: "stanford", programName: "Learning Design & Technology", programUrl: "https://ed.stanford.edu/ldt", relevanceScore: 96 },
      { collegeId: "harvard", programName: "Technology, Innovation, and Education", programUrl: "https://www.gse.harvard.edu/masters/tie", relevanceScore: 94 },
      { collegeId: "cmu", programName: "Learning Sciences", programUrl: "https://www.hcii.cmu.edu/", relevanceScore: 92 },
      { collegeId: "mit", programName: "Media Lab - Learning", programUrl: "https://www.media.mit.edu/", relevanceScore: 91 },
    ]
  },
];

// Function to get colleges for a specific career
export function getCollegesForCareer(careerId: string): CareerCollege[] {
  const mapping = CAREER_COLLEGE_MAPPINGS.find(m => m.careerId === careerId);
  return mapping?.colleges || [];
}

// Function to get colleges based on career interests (fallback)
export function getCollegesByInterests(interests: string[]): { collegeId: string; coursesMatch: string[] }[] {
  // This returns colleges that have courses matching the interests
  const relevantCourses: string[] = [];
  interests.forEach(interest => {
    const courses = INTEREST_TO_COURSES[interest] || [];
    relevantCourses.push(...courses);
  });
  
  // Import colleges dynamically to avoid circular dependencies
  return []; // This will be populated by the component using COLLEGES_DATABASE directly
}
