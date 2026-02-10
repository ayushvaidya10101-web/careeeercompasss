import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SEOHead } from "@/components/SEOHead";
import { 
  filterCareersByIntersection, 
  getAllCareers,
  applyPreferenceScoring,
  INTEREST_CATEGORIES
} from "@/data/careers";
import { CareerCard } from "@/components/careers/CareerCard";
import { ArrowLeft, Search, ChevronDown } from "lucide-react";

const INITIAL_SHOW = 12;
const LOAD_MORE_COUNT = 12;

export default function CareersPage() {
  const [searchParams] = useSearchParams();
  const interests = searchParams.get("interests")?.split(",") || [];
  const workStyle = searchParams.get("workStyle") || "";
  const values = searchParams.get("values") || "";
  const environment = searchParams.get("environment") || "";

  const [searchQuery, setSearchQuery] = useState("");
  const [showMoreMatched, setShowMoreMatched] = useState(INITIAL_SHOW);
  const [showMoreOther, setShowMoreOther] = useState(INITIAL_SHOW);

  const interestLabels = interests.map(id => 
    INTEREST_CATEGORIES.find(cat => cat.id === id)?.label || id
  );

  // Get matched careers (interest intersection) and remaining careers
  const { matchedCareers, otherCareers } = useMemo(() => {
    const intersectionCareers = filterCareersByIntersection(interests);
    const intersectionIds = new Set(intersectionCareers.map(c => c.id));
    
    const allCareers = getAllCareers();
    const remaining = allCareers.filter(c => !intersectionIds.has(c.id));
    
    // Apply preference scoring
    const scoredMatched = applyPreferenceScoring(intersectionCareers, { workStyle, values, environment });
    const scoredOther = applyPreferenceScoring(remaining, { workStyle, values, environment });
    
    return { matchedCareers: scoredMatched, otherCareers: scoredOther };
  }, [interests, workStyle, values, environment]);

  // Apply search filter
  const filterBySearch = (careers: typeof matchedCareers) => {
    if (!searchQuery.trim()) return careers;
    const query = searchQuery.toLowerCase();
    return careers.filter(career =>
      career.title.toLowerCase().includes(query) ||
      career.description.toLowerCase().includes(query) ||
      career.tags.some(tag => tag.toLowerCase().includes(query))
    );
  };

  const filteredMatched = useMemo(() => filterBySearch(matchedCareers), [matchedCareers, searchQuery]);
  const filteredOther = useMemo(() => filterBySearch(otherCareers), [otherCareers, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Career Exploration" description="Explore careers matched to your interests. Find your ideal career path with accurate, sourced data." />
      <Header />
      <main id="main-content" className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <Link to="/interests" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="h-4 w-4" />
            Change Interests
          </Link>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-display text-4xl font-bold mb-4">
              Career <span className="gradient-text">Exploration</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              Showing careers at the intersection of{" "}
              <span className="font-semibold text-primary">{interestLabels.join(" & ")}</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Found {filteredMatched.length} matched careers • {filteredMatched.length + filteredOther.length} total • This is for exploration only.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search careers by title, description, or tags..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowMoreMatched(INITIAL_SHOW);
                  setShowMoreOther(INITIAL_SHOW);
                }}
                className="pl-10"
              />
            </div>
          </div>

          {/* Best Matches Section */}
          {filteredMatched.length > 0 && (
            <section className="max-w-6xl mx-auto mb-16">
              <h2 className="font-display text-2xl font-bold mb-6">
                🎯 Best Matches for <span className="gradient-text">{interestLabels.join(" & ")}</span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMatched.slice(0, showMoreMatched).map((career, index) => (
                  <CareerCard
                    key={career.id}
                    career={career}
                    selectedInterests={interests}
                    workStyle={workStyle}
                    values={values}
                    index={index}
                  />
                ))}
              </div>
              {showMoreMatched < filteredMatched.length && (
                <div className="text-center mt-8">
                  <Button
                    variant="outline"
                    onClick={() => setShowMoreMatched(prev => prev + LOAD_MORE_COUNT)}
                    className="gap-2"
                  >
                    <ChevronDown className="h-4 w-4" />
                    Show More ({filteredMatched.length - showMoreMatched} remaining)
                  </Button>
                </div>
              )}
            </section>
          )}

          {filteredMatched.length === 0 && searchQuery && (
            <div className="text-center py-12 max-w-6xl mx-auto mb-8">
              <p className="text-muted-foreground">No matched careers found for "{searchQuery}"</p>
            </div>
          )}

          {/* Explore More Section */}
          {filteredOther.length > 0 && (
            <section className="max-w-6xl mx-auto mb-12">
              <h2 className="font-display text-2xl font-bold mb-6">
                🌍 Explore All Careers
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredOther.slice(0, showMoreOther).map((career, index) => (
                  <CareerCard
                    key={career.id}
                    career={career}
                    selectedInterests={interests}
                    workStyle={workStyle}
                    values={values}
                    index={index}
                  />
                ))}
              </div>
              {showMoreOther < filteredOther.length && (
                <div className="text-center mt-8">
                  <Button
                    variant="outline"
                    onClick={() => setShowMoreOther(prev => prev + LOAD_MORE_COUNT)}
                    className="gap-2"
                  >
                    <ChevronDown className="h-4 w-4" />
                    Show More ({filteredOther.length - showMoreOther} remaining)
                  </Button>
                </div>
              )}
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
