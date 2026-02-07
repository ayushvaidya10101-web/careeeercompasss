import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { TrendingUp, DollarSign, GraduationCap, Sparkles, Brain, RefreshCw, AlertCircle } from "lucide-react";
import type { AISuggestedCareer } from "@/hooks/useAICareerSuggestions";

interface AISuggestionsSectionProps {
  suggestions: AISuggestedCareer[];
  isLoading: boolean;
  error: string | null;
  hasFetched: boolean;
  onFetch: () => void;
  interestLabels: string[];
}

function AISuggestionCard({ career, index }: { career: AISuggestedCareer; index: number }) {
  return (
    <Card 
      variant="career" 
      className="h-full group animate-slide-up border-brand-purple/20"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <CardContent className="p-6">
        {/* AI Badge */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          <Badge className="text-xs bg-gradient-to-r from-brand-purple to-brand-blue text-white border-0">
            <Sparkles className="h-3 w-3 mr-1" />
            AI Suggested
          </Badge>
          <Badge variant={career.demand === "High" ? "default" : "secondary"} className="text-xs">
            {career.demand} Demand
          </Badge>
        </div>

        <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
          {career.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {career.description}
        </p>

        {/* Why it matches */}
        <div className="text-xs text-brand-purple bg-brand-purple/5 rounded-lg p-2.5 mb-4 border border-brand-purple/10">
          <span className="font-medium">Why this matches: </span>
          {career.whyMatch}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-2 text-xs mb-4">
          <div className="flex items-center gap-1 text-muted-foreground">
            <TrendingUp className="h-3 w-3 text-brand-cyan" />
            <span className="truncate">{career.growthRate}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <DollarSign className="h-3 w-3 text-brand-cyan" />
            <span className="truncate">{career.salaryRange.split("-")[0]}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <GraduationCap className="h-3 w-3 text-brand-purple" />
            <span className="truncate">
              {career.education.includes("Master") ? "Master's+" : 
               career.education.includes("Bachelor") ? "Bachelor's+" : 
               career.education}
            </span>
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
      </CardContent>
    </Card>
  );
}

function LoadingSkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <Card key={i} className="h-full">
          <CardContent className="p-6 space-y-3">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-12 w-full rounded-lg" />
            <div className="grid grid-cols-3 gap-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function AISuggestionsSection({
  suggestions,
  isLoading,
  error,
  hasFetched,
  onFetch,
  interestLabels,
}: AISuggestionsSectionProps) {
  return (
    <section className="max-w-6xl mx-auto mt-16 mb-12">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 rounded-lg bg-gradient-to-r from-brand-purple/20 to-brand-blue/20">
              <Brain className="h-5 w-5 text-brand-purple" />
            </div>
            <h2 className="font-display text-2xl font-bold">
              AI-Powered <span className="gradient-text">Discoveries</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">
            {hasFetched
              ? `Additional career paths at the intersection of ${interestLabels.join(" & ")}`
              : `Discover more career paths with AI-powered suggestions for ${interestLabels.join(" & ")}`
            }
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={onFetch}
          disabled={isLoading}
          className="gap-2"
        >
          {isLoading ? (
            <RefreshCw className="h-4 w-4 animate-spin" />
          ) : (
            <Sparkles className="h-4 w-4" />
          )}
          {hasFetched ? "Refresh" : "Discover More"}
        </Button>
      </div>

      {/* Content */}
      {isLoading && <LoadingSkeleton />}

      {error && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <p className="text-sm">{error}</p>
        </div>
      )}

      {!isLoading && !error && suggestions.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {suggestions.map((career, index) => (
            <AISuggestionCard key={career.id} career={career} index={index} />
          ))}
        </div>
      )}

      {!isLoading && !error && !hasFetched && (
        <div className="text-center py-12 rounded-xl border border-dashed border-brand-purple/30 bg-brand-purple/5">
          <Brain className="h-10 w-10 mx-auto text-brand-purple/50 mb-3" />
          <p className="text-muted-foreground mb-4">
            Click "Discover More" to find additional careers using AI
          </p>
          <Button onClick={onFetch} className="gap-2" variant="outline">
            <Sparkles className="h-4 w-4" />
            Discover AI Career Suggestions
          </Button>
        </div>
      )}

      {!isLoading && !error && hasFetched && suggestions.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          <p>No additional suggestions found. Try refreshing.</p>
        </div>
      )}
    </section>
  );
}
