import { Career, INTEREST_CATEGORIES, CAREERS_DATABASE, applyPreferenceScoring } from "@/data/careers";
import { CareerCard } from "./CareerCard";
import { AlertCircle } from "lucide-react";

interface ZeroResultsFallbackProps {
  interests: string[];
  workStyle: string;
  values: string;
  environment: string;
  searchQuery: string;
}

export function ZeroResultsFallback({ interests, workStyle, values, environment, searchQuery }: ZeroResultsFallbackProps) {
  // Get careers for each individual interest
  const interestCareers: Record<string, Career[]> = {};
  
  interests.forEach(interest => {
    let careers = CAREERS_DATABASE.filter(career => 
      career.interests.includes(interest)
    );
    
    // Apply preference scoring if preferences exist
    if (workStyle || values || environment) {
      careers = applyPreferenceScoring(careers, { workStyle, values, environment });
    }

    // Apply search filter if exists
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      careers = careers.filter(career =>
        career.title.toLowerCase().includes(query) ||
        career.description.toLowerCase().includes(query) ||
        career.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Sort by relevance and limit
    careers = careers.sort((a, b) => b.relevanceScore - a.relevanceScore).slice(0, 12);
    
    interestCareers[interest] = careers;
  });

  const getInterestLabel = (interestId: string) => {
    return INTEREST_CATEGORIES.find(cat => cat.id === interestId)?.label || interestId;
  };

  const getInterestIcon = (interestId: string) => {
    return INTEREST_CATEGORIES.find(cat => cat.id === interestId)?.icon || "🎯";
  };

  return (
    <div className="space-y-12">
      {/* Info Banner */}
      <div className="bg-muted/50 border border-border rounded-xl p-6 max-w-4xl mx-auto">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-blue/20 flex items-center justify-center">
            <AlertCircle className="h-5 w-5 text-brand-blue" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">No Exact Intersection Found</h3>
            <p className="text-sm text-muted-foreground">
              We couldn't find careers that sit at the exact intersection of your selected interests. 
              Below are careers related to each interest separately—you may find options that bridge both areas.
            </p>
          </div>
        </div>
      </div>

      {/* Separate Interest Sections */}
      {interests.map(interest => {
        const careers = interestCareers[interest];
        if (careers.length === 0) return null;

        return (
          <section key={interest} className="max-w-6xl mx-auto">
            <div className="mb-6">
              <h2 className="font-display text-2xl font-bold flex items-center gap-3">
                <span className="text-3xl">{getInterestIcon(interest)}</span>
                Careers related to{" "}
                <span className="gradient-text">{getInterestLabel(interest)}</span>
              </h2>
              <p className="text-muted-foreground mt-1">
                {careers.length} careers found in this interest area
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careers.map((career, index) => (
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
          </section>
        );
      })}
    </div>
  );
}
