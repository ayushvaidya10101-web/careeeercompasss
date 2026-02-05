import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  EXTRACURRICULAR_CATEGORIES, 
  EXTRACURRICULARS,
  getExtracurricularsByCategory,
  type Extracurricular 
} from "@/data/extracurriculars";
import { EXTENDED_EXTRACURRICULARS } from "@/data/extendedExtracurriculars";
import { Award, ArrowRight, Sparkles, Target, ChevronDown, ChevronUp } from "lucide-react";
import { useLocalPreferences } from "@/hooks/useLocalPreferences";
import { AuthModal } from "@/components/auth/AuthModal";
import { useAuth } from "@/hooks/useAuth";

// Combine all extracurriculars
const ALL_EXTRACURRICULARS = [...EXTRACURRICULARS, ...EXTENDED_EXTRACURRICULARS];

function ExtracurricularCard({ 
  activity, 
  onActivityClick 
}: { 
  activity: Extracurricular;
  onActivityClick: (id: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card variant="elevated" className="h-full">
      <CardContent className="p-6">
        <div 
          className="flex items-start gap-4 mb-4 cursor-pointer" 
          onClick={() => onActivityClick(activity.id)}
        >
          <div className="text-3xl">{activity.icon}</div>
          <div className="flex-1">
            <h3 className="font-display font-semibold text-lg mb-1">{activity.name}</h3>
            <p className="text-sm text-muted-foreground">{activity.description}</p>
          </div>
        </div>

        {/* Skills */}
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

        {/* Career Connections */}
        <div>
          <button 
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-sm font-medium mb-2 w-full text-left hover:text-primary transition-colors"
          >
            <Target className="h-4 w-4 text-brand-purple" />
            Career Connections ({activity.careerConnections.length})
            {expanded ? <ChevronUp className="h-4 w-4 ml-auto" /> : <ChevronDown className="h-4 w-4 ml-auto" />}
          </button>
          
          {expanded && (
            <div className="space-y-2 mt-3 animate-slide-up">
              {activity.careerConnections.map(connection => (
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

export default function ExtracurricularsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const { addClickedExtracurricular } = useLocalPreferences();
  const { isAuthenticated } = useAuth();

  const handleActivityClick = (activityId: string) => {
    addClickedExtracurricular(activityId);
    // Optionally prompt for auth on first interaction
    if (!isAuthenticated) {
      // Could show auth modal here, but keeping it optional
    }
  };

  const displayedActivities = selectedCategory 
    ? ALL_EXTRACURRICULARS.filter(e => e.category === selectedCategory)
    : ALL_EXTRACURRICULARS;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 text-secondary-foreground text-sm font-medium mb-6">
              <Award className="h-4 w-4" />
              <span>Activity-to-Career Mapping</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Extracurricular <span className="gradient-text-secondary">Activities</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover how your extracurricular activities can strengthen your path to various careers.
              Every activity builds valuable skills.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              {ALL_EXTRACURRICULARS.length} activities across {EXTRACURRICULAR_CATEGORIES.length} categories
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
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
                  <span>{cat.icon}</span>
                  {cat.label} ({count})
                </Button>
              );
            })}
          </div>

          {/* Activities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {displayedActivities.map((activity, index) => (
              <div 
                key={activity.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.02}s` }}
              >
                <ExtracurricularCard 
                  activity={activity} 
                  onActivityClick={handleActivityClick}
                />
              </div>
            ))}
          </div>

          {/* Info Section */}
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
                <p className="text-xs text-muted-foreground/70">
                  Sources: Crimson Education extracurricular activities research • All information is for educational exploration only
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
