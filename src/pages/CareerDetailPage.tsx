import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getCareerDetail, CAREERS_DATABASE, INTEREST_CATEGORIES } from "@/data/careers";
import { CareerColleges } from "@/components/careers/CareerColleges";
import { AuthModal } from "@/components/auth/AuthModal";
import { useAuth } from "@/hooks/useAuth";
import { 
  ArrowLeft, 
  ExternalLink, 
  TrendingUp, 
  DollarSign, 
  GraduationCap,
  Briefcase,
  Clock,
  Shield,
  Brain,
  MapPin,
  BookOpen,
  Lightbulb,
  Users,
  FileText,
  Lock
} from "lucide-react";

export default function CareerDetailPage() {
  const { careerId } = useParams<{ careerId: string }>();
  const career = careerId ? getCareerDetail(careerId) : null;
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const { isAuthenticated, loading } = useAuth();

  if (!career) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Career Not Found</h1>
            <Link to="/interests">
              <Button>Explore Careers</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Show auth gate if not authenticated
  if (!loading && !isAuthenticated) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <Link to="/careers" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to Careers
            </Link>

            {/* Hero Preview Section */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-wrap gap-2 mb-4">
                {career.interests.map(interestId => {
                  const cat = INTEREST_CATEGORIES.find(c => c.id === interestId);
                  return cat && (
                    <Badge key={cat.id} variant="default" className="text-sm">
                      {cat.icon} {cat.label}
                    </Badge>
                  );
                })}
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                {career.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {career.overview}
              </p>
            </div>

            {/* Auth Gate */}
            <Card className="max-w-lg mx-auto text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lock className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold mb-3">
                  Sign in to View Full Details
                </h2>
                <p className="text-muted-foreground mb-6">
                  Create a free account or sign in to access complete career information, 
                  roadmaps, salary data, and personalized recommendations.
                </p>
                <Button 
                  size="lg" 
                  className="w-full"
                  onClick={() => setAuthModalOpen(true)}
                >
                  Sign In to Continue
                </Button>
                <p className="text-xs text-muted-foreground mt-4">
                  Free forever. No credit card required.
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
        <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
      </div>
    );
  }

  const interestLabels = career.interests.map(id => 
    INTEREST_CATEGORIES.find(cat => cat.id === id)
  ).filter(Boolean);

  const relatedCareers = career.relatedCareers
    .map(id => CAREERS_DATABASE.find(c => c.id === id))
    .filter(Boolean)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/careers" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Careers
          </Link>

          {/* Hero Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {interestLabels.map(cat => cat && (
                <Badge key={cat.id} variant="default" className="text-sm">
                  {cat.icon} {cat.label}
                </Badge>
              ))}
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {career.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {career.overview}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-muted/50 rounded-xl p-4">
                <div className="flex items-center gap-2 text-brand-cyan mb-1">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm font-medium">Demand</span>
                </div>
                <p className="font-bold">{career.demand}</p>
                <p className="text-xs text-muted-foreground">{career.growthRate}</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-4">
                <div className="flex items-center gap-2 text-brand-cyan mb-1">
                  <DollarSign className="h-4 w-4" />
                  <span className="text-sm font-medium">Salary Range</span>
                </div>
                <p className="font-bold text-sm">{career.salaryRange}</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-4">
                <div className="flex items-center gap-2 text-brand-purple mb-1">
                  <GraduationCap className="h-4 w-4" />
                  <span className="text-sm font-medium">Education</span>
                </div>
                <p className="font-bold text-sm">{career.education}</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-4">
                <div className="flex items-center gap-2 text-brand-pink mb-1">
                  <Shield className="h-4 w-4" />
                  <span className="text-sm font-medium">Stability</span>
                </div>
                <p className="font-bold text-sm">{career.stability}</p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* What to Expect */}
              <Card variant="gradient">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    What to Expect & How to Research
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      Daily Work
                    </h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {career.dailyWork.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Brain className="h-4 w-4 text-muted-foreground" />
                      Common Challenges
                    </h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {career.challenges.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <Separator />
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-1">Work-Life Balance</h4>
                      <p className="text-sm text-muted-foreground">{career.workLifeBalance}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Stress Level</h4>
                      <p className="text-sm text-muted-foreground">{career.stressLevel}</p>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-brand-cyan" />
                      How to Research This Career
                    </h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {career.researchTips.map((tip, i) => (
                        <li key={i}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Career Roadmap */}
              <Card variant="gradient">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    How to Become a {career.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {career.roadmap.undergraduate.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <GraduationCap className="h-4 w-4" />
                        Undergraduate Path
                      </h4>
                      <div className="space-y-2">
                        {career.roadmap.undergraduate.map((item, i) => (
                          <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                            <div>
                              <p className="font-medium">{item.degree}</p>
                              <p className="text-sm text-muted-foreground">{item.duration}</p>
                            </div>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                              <Button variant="ghost" size="sm">
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {career.roadmap.postgraduate.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        Postgraduate Options
                      </h4>
                      <div className="space-y-2">
                        {career.roadmap.postgraduate.map((item, i) => (
                          <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                            <div>
                              <p className="font-medium">{item.degree}</p>
                              <p className="text-sm text-muted-foreground">{item.duration}</p>
                            </div>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                              <Button variant="ghost" size="sm">
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {career.roadmap.certifications.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3">Certifications</h4>
                      <div className="space-y-2">
                        {career.roadmap.certifications.map((cert, i) => (
                          <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                            <div>
                              <p className="font-medium">{cert.name}</p>
                              <p className="text-sm text-muted-foreground">{cert.provider}</p>
                            </div>
                            <a href={cert.link} target="_blank" rel="noopener noreferrer">
                              <Button variant="ghost" size="sm">
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {career.roadmap.progression.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3">Career Progression</h4>
                      <div className="flex flex-wrap gap-2">
                        {career.roadmap.progression.map((stage, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Badge variant="outline">{stage}</Badge>
                            {i < career.roadmap.progression.length - 1 && (
                              <span className="text-muted-foreground">→</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Future Outlook */}
              <Card variant="gradient">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-brand-cyan" />
                    Future Outlook
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{career.futureOutlook.description}</p>
                  <a 
                    href={career.futureOutlook.sourceLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    <FileText className="h-4 w-4" />
                    Source: {career.futureOutlook.source}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>

              {/* Career-Based College Recommendations */}
              <CareerColleges 
                careerId={career.id} 
                careerTitle={career.title}
                interests={career.interests}
              />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Articles */}
              {career.articles.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Further Reading</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {career.articles.map((article, i) => (
                      <a 
                        key={i}
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <p className="font-medium text-sm line-clamp-2">{article.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{article.source}</p>
                      </a>
                    ))}
                  </CardContent>
                </Card>
              )}

              {/* Related Careers */}
              {relatedCareers.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Similar Careers
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {relatedCareers.map(related => related && (
                      <Link 
                        key={related.id}
                        to={`/career/${related.id}`}
                        className="block p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <p className="font-medium text-sm">{related.title}</p>
                        <p className="text-xs text-muted-foreground line-clamp-1">{related.description}</p>
                      </Link>
                    ))}
                  </CardContent>
                </Card>
              )}

              {/* Disclaimer */}
              <Card className="bg-muted/30 border-dashed">
                <CardContent className="p-4">
                  <p className="text-xs text-muted-foreground">
                    <strong>Note:</strong> This information is for educational purposes only. 
                    Salary ranges, growth rates, and job outlook may vary by location and market conditions. 
                    Always verify information through official sources before making career decisions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
