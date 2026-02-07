// QS-style metrics for all colleges in the database
// These approximate scores are derived from QS World University Rankings methodology
// Categories: Learning Experience, Employability, Global Engagement, Sustainability
// All scores out of 100

export interface CollegeMetrics {
  learningExperience: number;
  employability: number;
  globalEngagement: number;
  sustainability: number;
  researchOutput: string;
  internationalStudents: string;
}

export const COLLEGE_METRICS: Record<string, CollegeMetrics> = {
  // === United States ===
  "mit": { learningExperience: 96, employability: 99, globalEngagement: 89, sustainability: 85, researchOutput: "Exceptional", internationalStudents: "33%" },
  "harvard": { learningExperience: 97, employability: 99, globalEngagement: 88, sustainability: 87, researchOutput: "Exceptional", internationalStudents: "24%" },
  "stanford": { learningExperience: 96, employability: 99, globalEngagement: 86, sustainability: 88, researchOutput: "Exceptional", internationalStudents: "23%" },
  "caltech": { learningExperience: 98, employability: 94, globalEngagement: 90, sustainability: 82, researchOutput: "Exceptional", internationalStudents: "33%" },
  "uchicago": { learningExperience: 95, employability: 95, globalEngagement: 84, sustainability: 80, researchOutput: "Very High", internationalStudents: "28%" },
  "upenn": { learningExperience: 93, employability: 97, globalEngagement: 82, sustainability: 79, researchOutput: "Very High", internationalStudents: "22%" },
  "princeton": { learningExperience: 97, employability: 95, globalEngagement: 83, sustainability: 81, researchOutput: "Very High", internationalStudents: "23%" },
  "yale": { learningExperience: 96, employability: 96, globalEngagement: 83, sustainability: 82, researchOutput: "Very High", internationalStudents: "21%" },
  "cornell": { learningExperience: 91, employability: 94, globalEngagement: 80, sustainability: 83, researchOutput: "Very High", internationalStudents: "24%" },
  "columbia": { learningExperience: 92, employability: 96, globalEngagement: 88, sustainability: 80, researchOutput: "Very High", internationalStudents: "34%" },
  "berkeley": { learningExperience: 90, employability: 97, globalEngagement: 78, sustainability: 86, researchOutput: "Exceptional", internationalStudents: "17%" },
  "ucla": { learningExperience: 88, employability: 95, globalEngagement: 75, sustainability: 84, researchOutput: "Very High", internationalStudents: "16%" },
  "nyu": { learningExperience: 85, employability: 93, globalEngagement: 92, sustainability: 78, researchOutput: "Very High", internationalStudents: "30%" },
  "duke": { learningExperience: 93, employability: 94, globalEngagement: 79, sustainability: 81, researchOutput: "Very High", internationalStudents: "19%" },
  "northwestern": { learningExperience: 92, employability: 94, globalEngagement: 77, sustainability: 79, researchOutput: "Very High", internationalStudents: "18%" },
  "umich": { learningExperience: 89, employability: 94, globalEngagement: 76, sustainability: 83, researchOutput: "Very High", internationalStudents: "15%" },
  "cmu": { learningExperience: 91, employability: 96, globalEngagement: 82, sustainability: 77, researchOutput: "Very High", internationalStudents: "42%" },
  "jhu": { learningExperience: 92, employability: 93, globalEngagement: 80, sustainability: 78, researchOutput: "Exceptional", internationalStudents: "27%" },
  "gatech": { learningExperience: 87, employability: 94, globalEngagement: 75, sustainability: 80, researchOutput: "Very High", internationalStudents: "28%" },
  "usc": { learningExperience: 84, employability: 91, globalEngagement: 80, sustainability: 76, researchOutput: "High", internationalStudents: "24%" },

  // === United Kingdom ===
  "cambridge": { learningExperience: 97, employability: 99, globalEngagement: 95, sustainability: 88, researchOutput: "Exceptional", internationalStudents: "37%" },
  "oxford": { learningExperience: 98, employability: 99, globalEngagement: 96, sustainability: 89, researchOutput: "Exceptional", internationalStudents: "41%" },
  "imperial": { learningExperience: 93, employability: 97, globalEngagement: 94, sustainability: 85, researchOutput: "Exceptional", internationalStudents: "56%" },
  "ucl": { learningExperience: 90, employability: 95, globalEngagement: 96, sustainability: 83, researchOutput: "Very High", internationalStudents: "52%" },
  "edinburgh": { learningExperience: 88, employability: 92, globalEngagement: 91, sustainability: 86, researchOutput: "Very High", internationalStudents: "40%" },
  "manchester": { learningExperience: 85, employability: 92, globalEngagement: 89, sustainability: 84, researchOutput: "Very High", internationalStudents: "39%" },
  "kcl": { learningExperience: 86, employability: 91, globalEngagement: 93, sustainability: 81, researchOutput: "Very High", internationalStudents: "47%" },
  "lse": { learningExperience: 89, employability: 97, globalEngagement: 97, sustainability: 79, researchOutput: "Very High", internationalStudents: "70%" },
  "bristol": { learningExperience: 86, employability: 89, globalEngagement: 85, sustainability: 82, researchOutput: "Very High", internationalStudents: "28%" },
  "warwick": { learningExperience: 87, employability: 92, globalEngagement: 88, sustainability: 80, researchOutput: "Very High", internationalStudents: "37%" },
  "glasgow": { learningExperience: 84, employability: 87, globalEngagement: 87, sustainability: 83, researchOutput: "High", internationalStudents: "35%" },
  "birmingham": { learningExperience: 83, employability: 88, globalEngagement: 86, sustainability: 82, researchOutput: "High", internationalStudents: "30%" },
  "southampton": { learningExperience: 82, employability: 85, globalEngagement: 84, sustainability: 80, researchOutput: "High", internationalStudents: "28%" },
  "leeds": { learningExperience: 83, employability: 87, globalEngagement: 85, sustainability: 81, researchOutput: "High", internationalStudents: "26%" },
  "sheffield": { learningExperience: 81, employability: 86, globalEngagement: 86, sustainability: 80, researchOutput: "High", internationalStudents: "29%" },
  "durham": { learningExperience: 88, employability: 89, globalEngagement: 84, sustainability: 79, researchOutput: "High", internationalStudents: "30%" },
  "nottingham": { learningExperience: 82, employability: 87, globalEngagement: 88, sustainability: 80, researchOutput: "High", internationalStudents: "32%" },
  "st-andrews": { learningExperience: 90, employability: 88, globalEngagement: 89, sustainability: 78, researchOutput: "High", internationalStudents: "45%" },
  "queen-mary": { learningExperience: 79, employability: 83, globalEngagement: 90, sustainability: 77, researchOutput: "High", internationalStudents: "42%" },
  "exeter": { learningExperience: 82, employability: 85, globalEngagement: 82, sustainability: 79, researchOutput: "High", internationalStudents: "25%" },

  // === Australia ===
  "melbourne": { learningExperience: 92, employability: 96, globalEngagement: 90, sustainability: 87, researchOutput: "Exceptional", internationalStudents: "42%" },
  "unsw": { learningExperience: 88, employability: 94, globalEngagement: 88, sustainability: 84, researchOutput: "Very High", internationalStudents: "38%" },
  "sydney": { learningExperience: 89, employability: 95, globalEngagement: 89, sustainability: 85, researchOutput: "Very High", internationalStudents: "35%" },
  "anu": { learningExperience: 90, employability: 91, globalEngagement: 86, sustainability: 83, researchOutput: "Very High", internationalStudents: "34%" },
  "monash": { learningExperience: 86, employability: 91, globalEngagement: 87, sustainability: 84, researchOutput: "Very High", internationalStudents: "36%" },
  "queensland": { learningExperience: 87, employability: 90, globalEngagement: 84, sustainability: 85, researchOutput: "Very High", internationalStudents: "30%" },
  "western-australia": { learningExperience: 84, employability: 87, globalEngagement: 82, sustainability: 83, researchOutput: "High", internationalStudents: "28%" },
  "adelaide": { learningExperience: 83, employability: 86, globalEngagement: 80, sustainability: 82, researchOutput: "High", internationalStudents: "32%" },
  "uts": { learningExperience: 80, employability: 88, globalEngagement: 83, sustainability: 80, researchOutput: "High", internationalStudents: "30%" },
  "macquarie": { learningExperience: 78, employability: 83, globalEngagement: 81, sustainability: 77, researchOutput: "High", internationalStudents: "27%" },
  "rmit": { learningExperience: 76, employability: 85, globalEngagement: 84, sustainability: 78, researchOutput: "High", internationalStudents: "33%" },
  "wollongong": { learningExperience: 77, employability: 82, globalEngagement: 78, sustainability: 76, researchOutput: "High", internationalStudents: "25%" },
  "curtin": { learningExperience: 75, employability: 81, globalEngagement: 80, sustainability: 77, researchOutput: "High", internationalStudents: "32%" },
  "queensland-tech": { learningExperience: 76, employability: 84, globalEngagement: 77, sustainability: 78, researchOutput: "High", internationalStudents: "22%" },
  "deakin": { learningExperience: 74, employability: 80, globalEngagement: 76, sustainability: 76, researchOutput: "Moderate", internationalStudents: "20%" },
  "griffith": { learningExperience: 73, employability: 79, globalEngagement: 75, sustainability: 77, researchOutput: "Moderate", internationalStudents: "21%" },
  "latrobe": { learningExperience: 72, employability: 78, globalEngagement: 74, sustainability: 75, researchOutput: "Moderate", internationalStudents: "22%" },
  "swinburne": { learningExperience: 73, employability: 80, globalEngagement: 76, sustainability: 74, researchOutput: "Moderate", internationalStudents: "25%" },
  "tasmania": { learningExperience: 74, employability: 77, globalEngagement: 72, sustainability: 78, researchOutput: "Moderate", internationalStudents: "18%" },
  "flinders": { learningExperience: 73, employability: 76, globalEngagement: 70, sustainability: 75, researchOutput: "Moderate", internationalStudents: "16%" },

  // === Canada ===
  "toronto": { learningExperience: 91, employability: 96, globalEngagement: 87, sustainability: 86, researchOutput: "Exceptional", internationalStudents: "25%" },
  "mcgill": { learningExperience: 90, employability: 94, globalEngagement: 89, sustainability: 83, researchOutput: "Very High", internationalStudents: "30%" },
  "ubc": { learningExperience: 89, employability: 93, globalEngagement: 88, sustainability: 88, researchOutput: "Very High", internationalStudents: "28%" },
  "alberta": { learningExperience: 83, employability: 88, globalEngagement: 78, sustainability: 82, researchOutput: "Very High", internationalStudents: "22%" },
  "montreal": { learningExperience: 82, employability: 86, globalEngagement: 76, sustainability: 80, researchOutput: "High", internationalStudents: "18%" },
  "waterloo": { learningExperience: 86, employability: 94, globalEngagement: 80, sustainability: 79, researchOutput: "Very High", internationalStudents: "24%" },
  "western": { learningExperience: 83, employability: 89, globalEngagement: 75, sustainability: 78, researchOutput: "High", internationalStudents: "17%" },
  "ottawa": { learningExperience: 78, employability: 82, globalEngagement: 76, sustainability: 77, researchOutput: "High", internationalStudents: "15%" },
  "calgary": { learningExperience: 80, employability: 84, globalEngagement: 74, sustainability: 79, researchOutput: "High", internationalStudents: "16%" },
  "queens": { learningExperience: 84, employability: 87, globalEngagement: 72, sustainability: 77, researchOutput: "High", internationalStudents: "14%" },
  "mcmaster": { learningExperience: 82, employability: 86, globalEngagement: 76, sustainability: 80, researchOutput: "Very High", internationalStudents: "16%" },
  "dalhousie": { learningExperience: 77, employability: 80, globalEngagement: 72, sustainability: 78, researchOutput: "High", internationalStudents: "20%" },
  "simon-fraser": { learningExperience: 78, employability: 83, globalEngagement: 75, sustainability: 80, researchOutput: "High", internationalStudents: "22%" },
  "victoria": { learningExperience: 79, employability: 82, globalEngagement: 73, sustainability: 82, researchOutput: "High", internationalStudents: "18%" },
  "laval": { learningExperience: 76, employability: 79, globalEngagement: 68, sustainability: 76, researchOutput: "High", internationalStudents: "12%" },
  "york": { learningExperience: 74, employability: 81, globalEngagement: 78, sustainability: 75, researchOutput: "Moderate", internationalStudents: "20%" },
  "guelph": { learningExperience: 76, employability: 80, globalEngagement: 68, sustainability: 83, researchOutput: "High", internationalStudents: "10%" },
  "carleton": { learningExperience: 75, employability: 79, globalEngagement: 70, sustainability: 74, researchOutput: "Moderate", internationalStudents: "18%" },
  "manitoba": { learningExperience: 72, employability: 76, globalEngagement: 68, sustainability: 73, researchOutput: "Moderate", internationalStudents: "22%" },
  "saskatchewan": { learningExperience: 73, employability: 77, globalEngagement: 67, sustainability: 74, researchOutput: "High", internationalStudents: "15%" },

  // === Germany ===
  "tum": { learningExperience: 90, employability: 95, globalEngagement: 85, sustainability: 84, researchOutput: "Exceptional", internationalStudents: "37%" },
  "lmu": { learningExperience: 89, employability: 91, globalEngagement: 82, sustainability: 82, researchOutput: "Exceptional", internationalStudents: "18%" },
  "heidelberg": { learningExperience: 90, employability: 90, globalEngagement: 80, sustainability: 81, researchOutput: "Exceptional", internationalStudents: "19%" },
  "fu-berlin": { learningExperience: 85, employability: 87, globalEngagement: 84, sustainability: 82, researchOutput: "Very High", internationalStudents: "20%" },
  "hu-berlin": { learningExperience: 86, employability: 86, globalEngagement: 83, sustainability: 81, researchOutput: "Very High", internationalStudents: "18%" },
  "kit": { learningExperience: 84, employability: 90, globalEngagement: 78, sustainability: 83, researchOutput: "Very High", internationalStudents: "24%" },
  "rwth-aachen": { learningExperience: 85, employability: 92, globalEngagement: 79, sustainability: 80, researchOutput: "Very High", internationalStudents: "26%" },
  "tu-berlin": { learningExperience: 82, employability: 88, globalEngagement: 82, sustainability: 79, researchOutput: "Very High", internationalStudents: "25%" },
  "freiburg": { learningExperience: 84, employability: 85, globalEngagement: 77, sustainability: 83, researchOutput: "Very High", internationalStudents: "16%" },
  "gottingen": { learningExperience: 83, employability: 84, globalEngagement: 78, sustainability: 80, researchOutput: "Very High", internationalStudents: "15%" },
  "tubingen": { learningExperience: 85, employability: 85, globalEngagement: 76, sustainability: 81, researchOutput: "Very High", internationalStudents: "16%" },
  "tu-dresden": { learningExperience: 80, employability: 84, globalEngagement: 74, sustainability: 79, researchOutput: "High", internationalStudents: "18%" },
  "hamburg": { learningExperience: 80, employability: 83, globalEngagement: 76, sustainability: 78, researchOutput: "High", internationalStudents: "14%" },
  "bonn": { learningExperience: 82, employability: 84, globalEngagement: 75, sustainability: 78, researchOutput: "Very High", internationalStudents: "15%" },
  "koln": { learningExperience: 79, employability: 83, globalEngagement: 76, sustainability: 77, researchOutput: "High", internationalStudents: "13%" },
  "frankfurt": { learningExperience: 80, employability: 84, globalEngagement: 78, sustainability: 77, researchOutput: "High", internationalStudents: "16%" },
  "erlangen": { learningExperience: 81, employability: 85, globalEngagement: 74, sustainability: 78, researchOutput: "High", internationalStudents: "15%" },
  "munster": { learningExperience: 79, employability: 82, globalEngagement: 72, sustainability: 77, researchOutput: "High", internationalStudents: "11%" },
  "mainz": { learningExperience: 78, employability: 81, globalEngagement: 74, sustainability: 76, researchOutput: "High", internationalStudents: "14%" },
  "stuttgart": { learningExperience: 82, employability: 88, globalEngagement: 76, sustainability: 79, researchOutput: "High", internationalStudents: "22%" },

  // === Singapore ===
  "nus": { learningExperience: 93, employability: 98, globalEngagement: 93, sustainability: 86, researchOutput: "Exceptional", internationalStudents: "30%" },
  "ntu-singapore": { learningExperience: 91, employability: 96, globalEngagement: 92, sustainability: 88, researchOutput: "Exceptional", internationalStudents: "27%" },
  "smu": { learningExperience: 86, employability: 93, globalEngagement: 88, sustainability: 78, researchOutput: "High", internationalStudents: "35%" },
  "sutd": { learningExperience: 88, employability: 90, globalEngagement: 85, sustainability: 80, researchOutput: "High", internationalStudents: "25%" },
  "sit": { learningExperience: 80, employability: 87, globalEngagement: 75, sustainability: 74, researchOutput: "Moderate", internationalStudents: "10%" },
  "suss": { learningExperience: 77, employability: 84, globalEngagement: 72, sustainability: 72, researchOutput: "Moderate", internationalStudents: "8%" },
  "nie": { learningExperience: 85, employability: 86, globalEngagement: 78, sustainability: 76, researchOutput: "High", internationalStudents: "15%" },
  "sp-jain-sg": { learningExperience: 78, employability: 85, globalEngagement: 88, sustainability: 70, researchOutput: "Moderate", internationalStudents: "90%" },
  "iss-nus": { learningExperience: 82, employability: 89, globalEngagement: 85, sustainability: 73, researchOutput: "Moderate", internationalStudents: "40%" },
  "lasalle": { learningExperience: 80, employability: 78, globalEngagement: 75, sustainability: 68, researchOutput: "Moderate", internationalStudents: "30%" },

  // === Hong Kong ===
  "hku": { learningExperience: 91, employability: 96, globalEngagement: 95, sustainability: 84, researchOutput: "Exceptional", internationalStudents: "42%" },
  "hkust": { learningExperience: 90, employability: 95, globalEngagement: 94, sustainability: 82, researchOutput: "Very High", internationalStudents: "35%" },
  "cuhk": { learningExperience: 88, employability: 93, globalEngagement: 90, sustainability: 80, researchOutput: "Very High", internationalStudents: "28%" },
  "cityu": { learningExperience: 84, employability: 89, globalEngagement: 92, sustainability: 79, researchOutput: "Very High", internationalStudents: "38%" },
  "polyu": { learningExperience: 82, employability: 88, globalEngagement: 88, sustainability: 78, researchOutput: "High", internationalStudents: "25%" },
  "hkbu": { learningExperience: 79, employability: 82, globalEngagement: 85, sustainability: 75, researchOutput: "High", internationalStudents: "22%" },
  "lingnan": { learningExperience: 80, employability: 78, globalEngagement: 82, sustainability: 73, researchOutput: "Moderate", internationalStudents: "20%" },
  "eduhk": { learningExperience: 83, employability: 80, globalEngagement: 78, sustainability: 74, researchOutput: "Moderate", internationalStudents: "15%" },
  "ouhk": { learningExperience: 72, employability: 75, globalEngagement: 68, sustainability: 68, researchOutput: "Moderate", internationalStudents: "10%" },
  "hsuhk": { learningExperience: 76, employability: 77, globalEngagement: 70, sustainability: 70, researchOutput: "Moderate", internationalStudents: "12%" },

  // === Japan ===
  "tokyo": { learningExperience: 93, employability: 95, globalEngagement: 72, sustainability: 82, researchOutput: "Exceptional", internationalStudents: "12%" },
  "kyoto": { learningExperience: 92, employability: 92, globalEngagement: 68, sustainability: 81, researchOutput: "Exceptional", internationalStudents: "10%" },
  "osaka": { learningExperience: 88, employability: 90, globalEngagement: 67, sustainability: 79, researchOutput: "Very High", internationalStudents: "11%" },
  "tohoku": { learningExperience: 87, employability: 88, globalEngagement: 65, sustainability: 78, researchOutput: "Very High", internationalStudents: "10%" },
  "titech": { learningExperience: 89, employability: 92, globalEngagement: 70, sustainability: 78, researchOutput: "Very High", internationalStudents: "16%" },
  "nagoya": { learningExperience: 86, employability: 87, globalEngagement: 64, sustainability: 77, researchOutput: "Very High", internationalStudents: "10%" },
  "hokkaido": { learningExperience: 84, employability: 85, globalEngagement: 63, sustainability: 79, researchOutput: "Very High", internationalStudents: "9%" },
  "kyushu": { learningExperience: 85, employability: 86, globalEngagement: 64, sustainability: 78, researchOutput: "Very High", internationalStudents: "11%" },
  "waseda": { learningExperience: 83, employability: 92, globalEngagement: 78, sustainability: 76, researchOutput: "High", internationalStudents: "14%" },
  "keio": { learningExperience: 84, employability: 93, globalEngagement: 75, sustainability: 75, researchOutput: "High", internationalStudents: "11%" },
  "tsukuba": { learningExperience: 83, employability: 84, globalEngagement: 65, sustainability: 77, researchOutput: "Very High", internationalStudents: "13%" },
  "hiroshima": { learningExperience: 80, employability: 82, globalEngagement: 60, sustainability: 76, researchOutput: "High", internationalStudents: "9%" },
  "kobe": { learningExperience: 81, employability: 85, globalEngagement: 62, sustainability: 75, researchOutput: "High", internationalStudents: "8%" },
  "chiba": { learningExperience: 78, employability: 80, globalEngagement: 58, sustainability: 74, researchOutput: "High", internationalStudents: "8%" },
  "kanazawa": { learningExperience: 77, employability: 79, globalEngagement: 58, sustainability: 75, researchOutput: "High", internationalStudents: "7%" },
  "okayama": { learningExperience: 76, employability: 78, globalEngagement: 56, sustainability: 74, researchOutput: "High", internationalStudents: "7%" },
  "niigata": { learningExperience: 75, employability: 76, globalEngagement: 54, sustainability: 73, researchOutput: "Moderate", internationalStudents: "6%" },
  "ritsumeikan": { learningExperience: 76, employability: 80, globalEngagement: 65, sustainability: 72, researchOutput: "Moderate", internationalStudents: "10%" },
  "sophia": { learningExperience: 80, employability: 82, globalEngagement: 72, sustainability: 73, researchOutput: "High", internationalStudents: "14%" },
  "icu": { learningExperience: 84, employability: 81, globalEngagement: 80, sustainability: 74, researchOutput: "Moderate", internationalStudents: "18%" },

  // === China ===
  "peking": { learningExperience: 93, employability: 96, globalEngagement: 75, sustainability: 83, researchOutput: "Exceptional", internationalStudents: "12%" },
  "tsinghua": { learningExperience: 94, employability: 97, globalEngagement: 76, sustainability: 85, researchOutput: "Exceptional", internationalStudents: "11%" },
  "fudan": { learningExperience: 89, employability: 93, globalEngagement: 74, sustainability: 80, researchOutput: "Very High", internationalStudents: "14%" },
  "zhejiang": { learningExperience: 88, employability: 91, globalEngagement: 72, sustainability: 82, researchOutput: "Exceptional", internationalStudents: "10%" },
  "sjtu": { learningExperience: 87, employability: 92, globalEngagement: 73, sustainability: 81, researchOutput: "Very High", internationalStudents: "11%" },
  "ustc": { learningExperience: 90, employability: 88, globalEngagement: 68, sustainability: 79, researchOutput: "Very High", internationalStudents: "8%" },
  "nanjing": { learningExperience: 86, employability: 88, globalEngagement: 68, sustainability: 78, researchOutput: "Very High", internationalStudents: "9%" },
  "wuhan": { learningExperience: 83, employability: 86, globalEngagement: 65, sustainability: 77, researchOutput: "Very High", internationalStudents: "8%" },
  "sun-yat-sen": { learningExperience: 82, employability: 85, globalEngagement: 64, sustainability: 76, researchOutput: "Very High", internationalStudents: "7%" },
  "tongji": { learningExperience: 83, employability: 87, globalEngagement: 70, sustainability: 78, researchOutput: "High", internationalStudents: "12%" },
  "harbin": { learningExperience: 82, employability: 86, globalEngagement: 62, sustainability: 75, researchOutput: "Very High", internationalStudents: "7%" },
  "xian-jiaotong": { learningExperience: 81, employability: 85, globalEngagement: 63, sustainability: 76, researchOutput: "Very High", internationalStudents: "6%" },
  "beihang": { learningExperience: 83, employability: 88, globalEngagement: 64, sustainability: 74, researchOutput: "Very High", internationalStudents: "8%" },
  "tianjin": { learningExperience: 80, employability: 84, globalEngagement: 62, sustainability: 75, researchOutput: "High", internationalStudents: "9%" },
  "huazhong": { learningExperience: 80, employability: 84, globalEngagement: 60, sustainability: 74, researchOutput: "High", internationalStudents: "7%" },
  "sichuan": { learningExperience: 78, employability: 82, globalEngagement: 58, sustainability: 73, researchOutput: "High", internationalStudents: "5%" },
  "southeast": { learningExperience: 79, employability: 83, globalEngagement: 60, sustainability: 74, researchOutput: "High", internationalStudents: "6%" },
  "nankai": { learningExperience: 80, employability: 83, globalEngagement: 62, sustainability: 73, researchOutput: "High", internationalStudents: "7%" },
  "renmin": { learningExperience: 84, employability: 90, globalEngagement: 66, sustainability: 74, researchOutput: "High", internationalStudents: "10%" },
  "beijing-normal": { learningExperience: 83, employability: 84, globalEngagement: 64, sustainability: 76, researchOutput: "High", internationalStudents: "8%" },

  // === Switzerland ===
  "eth": { learningExperience: 96, employability: 97, globalEngagement: 93, sustainability: 90, researchOutput: "Exceptional", internationalStudents: "40%" },
  "epfl": { learningExperience: 94, employability: 96, globalEngagement: 95, sustainability: 88, researchOutput: "Exceptional", internationalStudents: "57%" },
  "zurich": { learningExperience: 90, employability: 89, globalEngagement: 88, sustainability: 84, researchOutput: "Very High", internationalStudents: "22%" },
  "geneva": { learningExperience: 86, employability: 85, globalEngagement: 90, sustainability: 82, researchOutput: "Very High", internationalStudents: "38%" },
  "bern": { learningExperience: 84, employability: 83, globalEngagement: 82, sustainability: 80, researchOutput: "High", internationalStudents: "16%" },
  "basel": { learningExperience: 85, employability: 84, globalEngagement: 85, sustainability: 81, researchOutput: "Very High", internationalStudents: "28%" },
  "lausanne": { learningExperience: 83, employability: 82, globalEngagement: 86, sustainability: 80, researchOutput: "High", internationalStudents: "25%" },
  "st-gallen": { learningExperience: 86, employability: 93, globalEngagement: 90, sustainability: 78, researchOutput: "High", internationalStudents: "38%" },
  "fribourg": { learningExperience: 78, employability: 78, globalEngagement: 78, sustainability: 76, researchOutput: "Moderate", internationalStudents: "20%" },
  "neuchatel": { learningExperience: 77, employability: 76, globalEngagement: 76, sustainability: 74, researchOutput: "Moderate", internationalStudents: "22%" },
};

// Merge metrics into a college object
export function applyMetrics<T extends { id: string }>(college: T): T & Partial<CollegeMetrics> {
  const metrics = COLLEGE_METRICS[college.id];
  if (metrics) {
    return { ...college, ...metrics };
  }
  return college;
}

// Apply metrics to an array of colleges
export function applyMetricsToAll<T extends { id: string }>(colleges: T[]): (T & Partial<CollegeMetrics>)[] {
  return colleges.map(applyMetrics);
}
