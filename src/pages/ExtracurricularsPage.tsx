import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  EXTRACURRICULAR_CATEGORIES, 
  EXTRACURRICULARS,
  type Extracurricular 
} from "@/data/extracurriculars";
import { EXTENDED_EXTRACURRICULARS } from "@/data/extendedExtracurriculars";
import { ADDITIONAL_EXTRACURRICULARS } from "@/data/additionalExtracurriculars";
import { getAllCareers } from "@/data/careers";
import { Award, ArrowRight, Sparkles, Target, ChevronDown, ChevronUp } from "lucide-react";
import { DynamicIcon } from "@/components/DynamicIcon";
import { useLocalPreferences } from "@/hooks/useLocalPreferences";
import { AuthModal } from "@/components/auth/AuthModal";
import { useAuth } from "@/hooks/useAuth";
import { SEOHead } from "@/components/SEOHead";

const ALL_EXTRACURRICULARS = [...EXTRACURRICULARS, ...EXTENDED_EXTRACURRICULARS, ...ADDITIONAL_EXTRACURRICULARS];

function ExtracurricularCard({ 
  activity, 
  validCareerIds,
  userInterests,
  userPreferences,
  onActivityClick 
}: { 
  activity: Extracurricular;
  validCareerIds: Set<string>;
  userInterests: string[];
  userPreferences: { workStyle?: string[]; values?: string[]; environment?: string[] };
  onActivityClick: (id: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);

  const rankedConnections = useMemo(() => {
    const valid = activity.careerConnections.filter(c => validCareerIds.has(c.careerId));
    if (userInterests.length === 0) return valid;

    const allCareers = getAllCareers();
    const careerMap = new Map(allCareers.map(c => [c.id, c]));

    return [...valid].sort((a, b) => {
      const ca = careerMap.get(a.careerId);
      const cb = careerMap.get(b.careerId);
      if (!ca || !cb) return 0;

      const scoreA = getRelevanceScore(ca, userInterests, userPreferences);
      const scoreB = getRelevanceScore(cb, userInterests, userPreferences);
      return scoreB - scoreA;
    });
  }, [activity.careerConnections, validCareerIds, userInterests, userPreferences]);

  if (rankedConnections.length === 0) return null;

  return (
    <div className="glass-card gradient-sweep rounded-2xl h-full">
      <div className="p-5 sm:p-6">
        <div 
          className="flex items-start gap-4 mb-4 cursor-pointer" 
          onClick={() => onActivityClick(activity.id)}
        >
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:rotate-3 transition-transform">
            <DynamicIcon name={activity.icon} className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-display text-lg mb-1">{activity.name}</h3>
            <p className="text-sm text-muted-foreground">{activity.description}</p>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 text-sm font-medium mb-2">
            <Sparkles className="h-4 w-4 text-secondary" />
            Skills Developed
          </div>
          <div className="flex flex-wrap gap-1.5">
            {activity.skills.map(skill => (
              <Badge key={skill} variant="teal" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <button 
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-sm font-medium mb-2 w-full text-left hover:text-primary transition-colors"
          >
            <Target className="h-4 w-4 text-brand-purple" />
            Career Connections ({rankedConnections.length})
            {expanded ? <ChevronUp className="h-4 w-4 ml-auto" /> : <ChevronDown className="h-4 w-4 ml-auto" />}
          </button>
          
          {expanded && (
            <div className="space-y-2 mt-3 animate-slide-up">
              {rankedConnections.map(connection => (
                <Link 
                  key={connection.careerId}
                  to={`/career/${connection.careerId}`}
                  className="block p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-sm group-hover:text-primary transition-colors flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-sm bg-primary rotate-45 flex-shrink-0" />
                      {connection.careerTitle}
                    </span>
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground pl-4">{connection.relevance}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function getRelevanceScore(
  career: { interests: string[]; preferences: { workStyle: string[]; values: string[]; environment: string[] } },
  userInterests: string[],
  userPrefs: { workStyle?: string[]; values?: string[]; environment?: string[] }
): number {
  let score = 0;
  const interestMatch = career.interests.filter(i => userInterests.includes(i)).length;
  score += interestMatch * 10;

  if (userPrefs.workStyle?.some(ws => career.preferences.workStyle.includes(ws))) score += 5;
  if (userPrefs.values?.some(v => career.preferences.values.includes(v))) score += 5;
  if (userPrefs.environment?.some(e => career.preferences.environment.includes(e))) score += 3;

  return score;
}

export default function ExtracurricularsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const { preferences, addClickedExtracurricular } = useLocalPreferences();
  const { isAuthenticated } = useAuth();

  const validCareerIds = useMemo(() => {
    return new Set(getAllCareers().map(c => c.id));
  }, []);

  const handleActivityClick = (activityId: string) => {
    addClickedExtracurricular(activityId);
  };

  const displayedActivities = selectedCategory 
    ? ALL_EXTRACURRICULARS.filter(e => e.category === selectedCategory)
    : ALL_EXTRACURRICULARS;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Extracurricular Activities" description="Discover how extracurricular activities build skills that connect to various career paths." />
      <Header />
      <main id="main-content" className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-6">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Activity-to-Career Mapping</span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl mb-4">
              Extracurricular <em className="text-secondary">Activities</em>
            </h1>
            <p className="text-muted-foreground">
              Discover how your extracurricular activities can strengthen your path to various careers.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              {ALL_EXTRACURRICULARS.length} activities across {EXTRACURRICULAR_CATEGORIES.length} categories
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex overflow-x-auto sm:flex-wrap sm:justify-center gap-2 mb-8 sm:mb-12 pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap min-h-[44px] ${
                selectedCategory === null
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "glass hover:bg-primary/10"
              }`}
            >
              All ({ALL_EXTRACURRICULARS.length})
            </button>
            {EXTRACURRICULAR_CATEGORIES.map(cat => {
              const count = ALL_EXTRACURRICULARS.filter(e => e.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap min-h-[44px] flex items-center gap-1.5 ${
                    selectedCategory === cat.id
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "glass hover:bg-primary/10"
                  }`}
                >
                  <DynamicIcon name={cat.icon} className="h-4 w-4" />
                  {cat.label} ({count})
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {displayedActivities.map((activity, index) => (
              <div 
                key={activity.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.02}s` }}
              >
                <ExtracurricularCard 
                  activity={activity} 
                  validCareerIds={validCareerIds}
                  userInterests={preferences.selectedInterests}
                  userPreferences={preferences.preferences}
                  onActivityClick={handleActivityClick}
                />
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <div className="glass-card rounded-2xl p-6 sm:p-8 text-center">
              <h3 className="font-display text-xl mb-3">How to Use This Information</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Extracurricular activities develop skills that are valuable across many careers.
                The connections shown here are based on skill alignment, not requirements.
              </p>
              <p className="text-xs text-muted-foreground">
                <strong>Note:</strong> Participating in an activity doesn't guarantee success in related careers.
                Use this as inspiration, not prescription.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
    </div>
  );
}
