import { useMemo, useState, useCallback } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  filterCareersByIntersection, 
  INTEREST_CATEGORIES
} from "@/data/careers";
import { CareerCard } from "@/components/careers/CareerCard";
import { ZeroResultsFallback } from "@/components/careers/ZeroResultsFallback";
import { AISuggestionsSection } from "@/components/careers/AISuggestionsSection";
import { useAICareerSuggestions } from "@/hooks/useAICareerSuggestions";
import { 
  ArrowLeft, 
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

  const { suggestions, isLoading: aiLoading, error: aiError, fetchSuggestions, hasFetched } = useAICareerSuggestions();

  // Get interest labels for display
  const interestLabels = interests.map(id => 
    INTEREST_CATEGORIES.find(cat => cat.id === id)?.label || id
  );

  // Filter and score careers using strict intersection
  const { filteredCareers, hasIntersectionResults } = useMemo(() => {
    // First try strict intersection filtering
    let careers = filterCareersByIntersection(interests);
    const hasResults = careers.length > 0;
    
    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      careers = careers.filter(career =>
        career.title.toLowerCase().includes(query) ||
        career.description.toLowerCase().includes(query) ||
        career.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return { filteredCareers: careers, hasIntersectionResults: hasResults };
  }, [interests, searchQuery]);

  // Pagination
  const totalPages = Math.ceil(filteredCareers.length / ITEMS_PER_PAGE);
  const paginatedCareers = filteredCareers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleFetchAISuggestions = useCallback(() => {
    const existingIds = filteredCareers.map(c => c.id);
    fetchSuggestions({
      interests,
      workStyle,
      values,
      environment,
      existingCareerIds: existingIds,
    });
  }, [fetchSuggestions, interests, workStyle, values, environment, filteredCareers]);

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
              {hasIntersectionResults ? (
                <>
                  Showing careers at the intersection of{" "}
                  <span className="font-semibold text-primary">{interestLabels.join(" & ")}</span>
                </>
              ) : (
                <>
                  Exploring careers related to your interests:{" "}
                  <span className="font-semibold text-primary">{interestLabels.join(" & ")}</span>
                </>
              )}
            </p>
            <p className="text-sm text-muted-foreground">
              {hasIntersectionResults 
                ? `Found ${filteredCareers.length} careers • This is for exploration only—career decisions are yours to make.`
                : "This is for exploration only—career decisions are yours to make."
              }
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

          {/* Show Zero Results Fallback if no intersection results */}
          {!hasIntersectionResults ? (
            <ZeroResultsFallback
              interests={interests}
              workStyle={workStyle}
              values={values}
              environment={environment}
              searchQuery={searchQuery}
            />
          ) : (
            <>
              {/* Career Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
                {paginatedCareers.map((career, index) => (
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
            </>
          )}

          {/* AI Suggestions Section */}
          <AISuggestionsSection
            suggestions={suggestions}
            isLoading={aiLoading}
            error={aiError}
            hasFetched={hasFetched}
            onFetch={handleFetchAISuggestions}
            interestLabels={interestLabels}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
