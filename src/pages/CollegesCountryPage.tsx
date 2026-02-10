import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { getCollegesByCountryEnhanced, TOP_COUNTRIES, type College } from "@/data/colleges";
import { ArrowLeft, ExternalLink, MapPin, Trophy, Users, Globe, Leaf, BookOpen, Building2, Flag } from "lucide-react";
import { useLocalPreferences } from "@/hooks/useLocalPreferences";
import { AuthModal } from "@/components/auth/AuthModal";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { SEOHead } from "@/components/SEOHead";

function EnhancedCollegeCard({ college, index }: { college: College; index: number }) {
  const { addExploredCollege } = useLocalPreferences();
  const { isAuthenticated } = useAuth();
  const [showAuthPrompt, setShowAuthPrompt] = useState(false);

  const handleCollegeClick = () => {
    addExploredCollege(college.id);
  };

  return (
    <Card 
      variant="college" 
      className="overflow-hidden animate-slide-up"
      style={{ animationDelay: `${index * 0.03}s` }}
    >
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="relative flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center">
            <Trophy className="h-6 w-6 text-primary-foreground" />
            <span className="absolute -bottom-1 -right-1 px-1.5 py-0.5 bg-background rounded text-xs font-bold border">
              #{college.qsRank}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-display font-semibold text-lg leading-tight">{college.name}</h3>
              <Badge variant={college.type === "Public" ? "secondary" : "outline"} className="flex-shrink-0">
                {college.type}
              </Badge>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-3 w-3" />
              {college.city}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{college.description}</p>

        {/* QS Metrics - Enhanced */}
        {(college.learningExperience || college.employability) && (
          <div className="grid grid-cols-2 gap-3 mb-4 p-3 rounded-lg bg-muted/30">
            {college.learningExperience && (
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <BookOpen className="h-3 w-3" />
                  Learning Experience
                </div>
                <Progress value={college.learningExperience} className="h-1.5" />
                <span className="text-xs font-medium">{college.learningExperience}/100</span>
              </div>
            )}
            {college.employability && (
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Building2 className="h-3 w-3" />
                  Employability
                </div>
                <Progress value={college.employability} className="h-1.5" />
                <span className="text-xs font-medium">{college.employability}/100</span>
              </div>
            )}
            {college.globalEngagement && (
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Globe className="h-3 w-3" />
                  Global Engagement
                </div>
                <Progress value={college.globalEngagement} className="h-1.5" />
                <span className="text-xs font-medium">{college.globalEngagement}/100</span>
              </div>
            )}
            {college.sustainability && (
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Leaf className="h-3 w-3" />
                  Sustainability
                </div>
                <Progress value={college.sustainability} className="h-1.5" />
                <span className="text-xs font-medium">{college.sustainability}/100</span>
              </div>
            )}
          </div>
        )}

        {/* Additional Info */}
        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-4">
          {college.studentCount && (
            <span className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              {college.studentCount} students
            </span>
          )}
          {college.foundedYear && (
            <span>Est. {college.foundedYear}</span>
          )}
          {college.internationalStudents && (
            <span className="flex items-center gap-1">
              <Globe className="h-3 w-3" />
              {college.internationalStudents} international
            </span>
          )}
        </div>

        {/* Popular Courses */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {college.popularCourses.slice(0, 4).map(course => (
            <Badge key={course} variant="secondary" className="text-xs">{course}</Badge>
          ))}
          {college.popularCourses.length > 4 && (
            <Badge variant="outline" className="text-xs">+{college.popularCourses.length - 4} more</Badge>
          )}
        </div>

        {/* Action Button */}
        <Button 
          asChild 
          variant="outline" 
          size="sm" 
          className="w-full"
          onClick={handleCollegeClick}
        >
          <a href={college.website} target="_blank" rel="noopener noreferrer">
            Visit Official Website <ExternalLink className="h-3 w-3 ml-2" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function CollegesCountryPage() {
  const { countryId } = useParams<{ countryId: string }>();
  const country = TOP_COUNTRIES.find(c => c.id === countryId);
  const colleges = countryId ? getCollegesByCountryEnhanced(countryId) : [];
  const [authModalOpen, setAuthModalOpen] = useState(false);

  if (!country) {
    return <div className="min-h-screen flex items-center justify-center">Country not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title={`Universities in ${country.name}`} description={`Top ${colleges.length} universities in ${country.name} ranked by QS World University Rankings.`} />
      <Header />
      <main id="main-content" className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/colleges" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Countries
          </Link>

          <div className="text-center mb-12">
            <Flag className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="font-display text-4xl font-bold mb-2">
              Top Universities in <span className="gradient-text">{country.name}</span>
            </h1>
            <p className="text-muted-foreground">
              {colleges.length} universities ranked by QS World University Rankings 2024
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Source: TopUniversities.com • Rankings are for informational purposes only
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {colleges.map((college, index) => (
              <EnhancedCollegeCard key={college.id} college={college} index={index} />
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <div className="p-4 rounded-lg bg-muted/30 border border-dashed border-border">
              <p className="text-sm text-muted-foreground">
                <strong>Disclaimer:</strong> University rankings are provided for informational purposes only.
                This platform does not recommend or advise on college selection. Always conduct your own research
                and consult official university sources before making educational decisions.
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
