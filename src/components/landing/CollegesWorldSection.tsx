import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { TOP_COUNTRIES } from "@/data/colleges";
import { Globe, ArrowRight, Flag } from "lucide-react";
import { ScrollReveal } from "@/components/layout/ScrollReveal";

export function CollegesWorldSection() {
  return (
    <section className="py-16 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-secondary/50 text-secondary-foreground text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              <Globe className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>Explore Global Education</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Colleges Around the{" "}
              <span className="gradient-text-secondary">World</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Discover top-ranked universities across 10 countries, sorted by QS World Rankings.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {TOP_COUNTRIES.map((country, index) => (
            <ScrollReveal key={country.id} delay={index * 80}>
              <Link to={`/colleges/${country.id}`}>
                <Card
                  variant="country"
                  className="h-full group"
                >
                  <CardContent className="p-4 sm:p-6 text-center">
                    <Flag className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-2 sm:mb-3 mx-auto" />
                    <h3 className="font-display font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1 group-hover:text-primary transition-colors">
                      {country.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">
                      {country.collegeCount} Universities
                    </p>
                    <div className="mt-2 sm:mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 mx-auto text-primary" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
