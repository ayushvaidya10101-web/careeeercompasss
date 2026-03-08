import { Link } from "react-router-dom";
import { TOP_COUNTRIES } from "@/data/colleges";
import { Globe, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/layout/ScrollReveal";

export function CollegesWorldSection() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-4">
              <Globe className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Explore Global Education</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-4">
              Colleges Around the{" "}
              <em className="text-primary">World</em>
            </h2>
            <p className="text-muted-foreground">
              Discover top-ranked universities across 10 countries, sorted by QS World Rankings.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {TOP_COUNTRIES.map((country, index) => (
            <ScrollReveal key={country.id} delay={index * 90}>
              <Link to={`/colleges/${country.id}`}>
                <div className="glass-card rounded-2xl p-4 sm:p-6 text-center group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                    <span className="text-lg sm:text-xl">{country.flag}</span>
                  </div>
                  <h3 className="font-display text-sm sm:text-base mb-1 group-hover:text-primary transition-colors">
                    {country.name}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">
                    {country.collegeCount} Universities
                  </p>
                  <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="h-3.5 w-3.5 mx-auto text-primary" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
