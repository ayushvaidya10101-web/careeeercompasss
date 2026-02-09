import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { TOP_COUNTRIES } from "@/data/colleges";
import { Globe, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/layout/ScrollReveal";

export function CollegesWorldSection() {
  return (
    <section className="py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 text-secondary-foreground text-sm font-medium mb-4">
              <Globe className="h-4 w-4" />
              <span>Explore Global Education</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Colleges Around the{" "}
              <span className="gradient-text-secondary">World</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover top-ranked universities across 10 countries, sorted by QS World Rankings.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {TOP_COUNTRIES.map((country, index) => (
            <ScrollReveal key={country.id} delay={index * 80}>
              <Link to={`/colleges/${country.id}`}>
                <Card
                  variant="country"
                  className="h-full group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{country.flag}</div>
                    <h3 className="font-display font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                      {country.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {country.collegeCount} Universities
                    </p>
                    <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="h-4 w-4 mx-auto text-primary" />
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
