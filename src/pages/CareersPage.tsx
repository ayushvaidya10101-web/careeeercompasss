import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  filterCareersByIntersection, 
  applyPreferenceScoring, 
  INTEREST_CATEGORIES,
  type Career 
} from "@/data/careers";
import { 
  ArrowLeft, 
  ArrowRight, 
  TrendingUp, 
  DollarSign, 
  GraduationCap,
  Search,
  Filter
} from "lucide-react";

const ITEMS_PER_PAGE = 12;

export default function CareersPage() {
  const [searchParams] = useSearchParams();
  const interests = searchParams.get("interests")?.split(",") || [];
  const workStyle = searchParams.get("workStyle") || "";
  const values = searchParams.get("values") || "";
  const environment = searchParams.get("environment") || "";

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Get interest labels for display
  const interestLabels = interests.map(id => 
    INTEREST_CATEGORIES.find(cat => cat.id === id)?.label || id
  );

  // Filter and score careers
  const filteredCareers = useMemo(() => {
    let careers = filterCareersByIntersection(interests);
    
    if (workStyle || values || environment) {
      careers = applyPreferenceScoring(careers, { workStyle, values, environment });
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      careers = careers.filter(career =>
        career.title.toLowerCase().includes(query) ||
        career.description.toLowerCase().includes(query) ||
        career.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return careers;
  }, [interests, workStyle, values, environment, searchQuery]);

  // Pagination
  const totalPages = Math.ceil(filteredCareers.length / ITEMS_PER_PAGE);
  const paginatedCareers = filteredCareers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const getMatchBadges = (career: Career) => {
    const badges = [];
    
    // Interest match badges
    career.interests.forEach(interest => {
      if (interests.includes(interest)) {
        const category = INTEREST_CATEGORIES.find(c => c.id === interest);
        if (category) {
          badges.push({ label: category.label, type: "interest", icon: category.icon });
        }
      }
    });

    // Preference match badges
    if (workStyle && career.preferences.workStyle.includes(workStyle)) {
      badges.push({ label: `${workStyle} work`, type: "preference" });
    }
    if (values && career.preferences.values.includes(values)) {
      badges.push({ label: values, type: "preference" });
    }

    return badges;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/interests" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="h-4 w-4" />
            Change Interests
          </Link>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="font-display text-4xl font-bold mb-4">
              Career <span className="gradient-text">Exploration</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Showing careers at the intersection of{" "}
              <span className="font-semibold text-primary">{interestLabels.join(" & ")}</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Found {filteredCareers.length} careers • This is for exploration only—career decisions are yours to make.
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search careers by title, description, or tags..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </div>
          </div>

          {/* Career Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {paginatedCareers.map((career, index) => {
              const matchBadges = getMatchBadges(career);
              return (
                <Link key={career.id} to={`/career/${career.id}`}>
                  <Card 
                    variant="career" 
                    className="h-full group animate-slide-up"
                    style={{ animationDelay: `${index * 0.03}s` }}
                  >
                    <CardContent className="p-6">
                      {/* Match Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {matchBadges.slice(0, 3).map((badge, i) => (
                          <Badge 
                            key={i} 
                            variant={badge.type === "interest" ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {badge.icon && <span className="mr-1">{badge.icon}</span>}
                            {badge.label}
                          </Badge>
                        ))}
                      </div>

                      <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {career.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {career.description}
                      </p>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-3 gap-2 text-xs mb-4">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <TrendingUp className="h-3 w-3 text-brand-cyan" />
                          <span>{career.demand}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <DollarSign className="h-3 w-3 text-brand-cyan" />
                          <span className="truncate">{career.salaryRange.split("-")[0]}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <GraduationCap className="h-3 w-3 text-brand-purple" />
                          <span className="truncate">Bachelor's+</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {career.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2">
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(p => p - 1)}
              >
                Previous
              </Button>
              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let page: number;
                  if (totalPages <= 5) {
                    page = i + 1;
                  } else if (currentPage <= 3) {
                    page = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    page = totalPages - 4 + i;
                  } else {
                    page = currentPage - 2 + i;
                  }
                  return (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </Button>
                  );
                })}
              </div>
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(p => p + 1)}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
