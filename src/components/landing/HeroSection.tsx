import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/30">
      {/* Background Effects — hidden on mobile for perf */}
      <div className="absolute inset-0 overflow-hidden hidden sm:block">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-4 pt-20 sm:pt-24 pb-16 sm:pb-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-6 sm:mb-10 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
            <span>Discover Your Future — On Your Terms</span>
          </div>

          {/* Main Heading */}
          <h1
            className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-5 sm:mb-8 animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            Learn More About{" "}
            <span className="gradient-text">Careers</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-12 animate-slide-up"
            style={{ animationDelay: "0.5s" }}
          >
            Explore 1000+ career paths with accurate, sourced information.
            We educate — you decide.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-slide-up"
            style={{ animationDelay: "0.7s" }}
          >
            <Button asChild variant="hero" size="xl" className="w-full sm:w-auto min-h-[48px]">
              <Link to="/interests">
                Explore Careers
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto min-h-[48px]">
              <a href="#learn-more">
                Learn More
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-20 pt-8 sm:pt-10 border-t border-border/50 max-w-lg mx-auto animate-fade-in"
            style={{ animationDelay: "1.0s" }}
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-display font-bold gradient-text">1000+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Careers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-display font-bold gradient-text">250+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Colleges</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-display font-bold gradient-text">10</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Countries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator — hidden on very small screens */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  );
}
