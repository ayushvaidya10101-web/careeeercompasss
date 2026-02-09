import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { TOP_COUNTRIES } from "@/data/colleges";
import { Globe, ArrowRight, GraduationCap } from "lucide-react";
import { ScrollReveal } from "@/components/layout/ScrollReveal";

export default function CollegesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 text-secondary-foreground text-sm font-medium mb-6">
              <Globe className="h-4 w-4" />
              <span>Global Education Explorer</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Colleges Around the{" "}
              <span className="gradient-text">World</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore top-ranked universities across 10 countries. All rankings are sourced
              directly from QS World University Rankings via TopUniversities.com.
            </p>
          </div>

          {/* Countries Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {TOP_COUNTRIES.map((country, index) => (
              <ScrollReveal key={country.id} delay={index * 80}>
                <Link to={`/colleges/${country.id}`}>
                  <Card
                    variant="country"
                    className="h-full group"
                  >
                    <CardContent className="p-8 text-center">
                      <div className="text-5xl mb-4">{country.flag}</div>
                      <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        {country.name}
                      </h3>
                      <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-4">
                        <GraduationCap className="h-4 w-4" />
                        <span>{country.collegeCount} Universities</span>
                      </div>
                      <div className="flex items-center justify-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-all">
                        <span className="text-sm font-medium">View Rankings</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* Info Section */}
          <ScrollReveal>
            <div className="mt-20 max-w-3xl mx-auto text-center">
              <div className="bg-muted/30 rounded-2xl p-8 border border-border">
                <h2 className="font-display text-2xl font-bold mb-4">About Our Rankings</h2>
                <p className="text-muted-foreground mb-4">
                  All university rankings displayed on this platform are sourced exclusively from the
                  <strong> QS World University Rankings</strong> published by TopUniversities.com.
                </p>
                <p className="text-sm text-muted-foreground">
                  This section is informational only and does not recommend or advise students on college choices.
                  Always conduct your own research before making educational decisions.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}
