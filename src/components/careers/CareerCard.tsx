import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, GraduationCap, ArrowRight } from "lucide-react";
import { Career, INTEREST_CATEGORIES } from "@/data/careers";

interface CareerCardProps {
  career: Career;
  selectedInterests: string[];
  workStyle?: string;
  values?: string;
  index: number;
}

export function CareerCard({ career, selectedInterests, workStyle, values, index }: CareerCardProps) {
  const getMatchBadges = () => {
    const badges = [];
    
    // Interest match badges
    career.interests.forEach(interest => {
      if (selectedInterests.includes(interest)) {
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

  // Get the intersection combination label
  const getIntersectionLabel = (): string | null => {
    if (career.interestCombinations.length === 0) return null;
    // Pick the first combination that matches the user's selected interests
    for (const combo of career.interestCombinations) {
      const parts = combo.split("+");
      if (parts.length === 2) {
        const labelA = INTEREST_CATEGORIES.find(c => c.id === parts[0])?.label?.split(" ")[0];
        const labelB = INTEREST_CATEGORIES.find(c => c.id === parts[1])?.label?.split(" ")[0];
        if (labelA && labelB) {
          // Prefer combos matching selected interests
          if (parts.every(p => selectedInterests.includes(p))) {
            return `${labelA} × ${labelB}`;
          }
        }
      }
    }
    // Fallback: show first combo
    const parts = career.interestCombinations[0].split("+");
    const labelA = INTEREST_CATEGORIES.find(c => c.id === parts[0])?.label?.split(" ")[0];
    const labelB = INTEREST_CATEGORIES.find(c => c.id === parts[1])?.label?.split(" ")[0];
    if (labelA && labelB) return `${labelA} × ${labelB}`;
    return null;
  };

  const matchBadges = getMatchBadges();
  const intersectionLabel = getIntersectionLabel();

  return (
    <Link to={`/career/${career.id}`}>
      <Card 
        variant="career" 
        className="h-full group animate-slide-up"
        style={{ animationDelay: `${index * 0.03}s` }}
      >
        <CardContent className="p-6">
          {/* Intersection Combination Badge */}
          {intersectionLabel && (
            <div className="mb-2">
              <Badge variant="outline" className="text-[10px] font-medium border-primary/30 text-primary">
                {intersectionLabel}
              </Badge>
            </div>
          )}

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
}
