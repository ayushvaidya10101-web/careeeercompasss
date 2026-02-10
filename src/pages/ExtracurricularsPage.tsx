import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

  // Filter to valid connections and rank by user relevance
  const rankedConnections = useMemo(() => {
    const valid = activity.careerConnections.filter(c => validCareerIds.has(c.careerId));
    if (userInterests.length === 0) return valid;

    // Get all careers for scoring
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
    <Card variant="elevated" className="h-full">
      <CardContent className="p-6">
        <div 
          className="flex items-start gap-4 mb-4 cursor-pointer" 
          onClick={() => onActivityClick(activity.id)}
        >
          <DynamicIcon name={activity.icon} className="h-8 w-8 text-primary" />
          <div className="flex-1">
            <h3 className="font-display font-semibold text-lg mb-1">{activity.name}</h3>
            <p className="text-sm text-muted-foreground">{activity.description}</p>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 text-sm font-medium mb-2">
            <Sparkles className="h-4 w-4 text-brand-cyan" />
            Skills Developed
          </div>
          <div className="flex flex-wrap gap-1.5">
            {activity.skills.map(skill => (
              <Badge key={skill} variant="secondary" className="text-xs">
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
                  className="block p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-sm group-hover:text-primary transition-colors">
                      {connection.careerTitle}
                    </span>
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">{connection.relevance}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
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
      <Header />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 text-secondary-foreground text-sm font-medium mb-6">
              <Award className="h-4 w-4" />
              <span>Activity-to-Career Mapping</span>
            </div>
            <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Extracurricular <span className="gradient-text-secondary">Activities</span>
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground">
              Discover how your extracurricular activities can strengthen your path to various careers.
              Every activity builds valuable skills.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              {ALL_EXTRACURRICULARS.length} activities across {EXTRACURRICULAR_CATEGORIES.length} categories
            </p>
          </div>

          <div className="flex overflow-x-auto sm:flex-wrap sm:justify-center gap-2 mb-8 sm:mb-12 pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
            >
              All Activities ({ALL_EXTRACURRICULARS.length})
            </Button>
            {EXTRACURRICULAR_CATEGORIES.map(cat => {
              const count = ALL_EXTRACURRICULARS.filter(e => e.category === cat.id).length;
              return (
                <Button
                  key={cat.id}
                  variant={selectedCategory === cat.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat.id)}
                  className="gap-1.5"
                >
                  <DynamicIcon name={cat.icon} className="h-4 w-4" />
                  {cat.label} ({count})
                </Button>
              );
            })}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
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
            <Card className="bg-muted/30 border-dashed">
              <CardHeader>
                <CardTitle className="text-lg text-center">How to Use This Information</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground space-y-4">
                <p>
                  Extracurricular activities develop skills that are valuable across many careers.
                  The connections shown here are based on skill alignment, not requirements.
                </p>
                <p className="text-sm">
                  <strong>Note:</strong> Participating in an activity doesn't guarantee success in related careers,
                  and missing activities doesn't prevent you from pursuing any career. Use this as inspiration,
                  not prescription.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
    </div>
  );
}
