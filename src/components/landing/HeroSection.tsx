import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, Search, BookOpen, AlertTriangle, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/layout/ScrollReveal";

const challenges = [
  {
    icon: HelpCircle,
    title: "Students Are Confused",
    description: "Many students feel overwhelmed by career choices and lack clear direction about their future paths.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Search,
    title: "Limited Awareness",
    description: "Most students only know about a handful of careers, missing out on thousands of opportunities.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: AlertTriangle,
    title: "Misinformation",
    description: "Career decisions are often based on incomplete, outdated, or incorrect information from unreliable sources.",
    color: "text-accent-foreground",
    bgColor: "bg-accent/10",
  },
  {
    icon: BookOpen,
    title: "Hard to Find Facts",
    description: "Reliable, structured career information is scattered across the internet and difficult to access.",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
];

export function HeroSection() {
  return (
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Awareness-first heading */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <h1
            className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6 animate-slide-up"
          >
            Why Career Awareness{" "}
            <span className="gradient-text">Matters</span>
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Before choosing a career, it helps to understand the challenges students face — and why accurate information makes all the difference.
          </p>
        </div>

        {/* Challenge cards */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12 sm:mb-16">
          {challenges.map((challenge, index) => (
            <ScrollReveal key={challenge.title} delay={index * 100}>
              <Card variant="problem" className="h-full">
                <CardHeader className="pb-2 sm:pb-3">
                  <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ${challenge.bgColor} flex items-center justify-center mb-3 sm:mb-4`}>
                    <challenge.icon className={`h-5 w-5 sm:h-7 sm:w-7 ${challenge.color}`} />
                  </div>
                  <CardTitle className="text-base sm:text-lg font-semibold">{challenge.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {challenge.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Gentle CTA — not pushy, framed as a logical next step */}
        <ScrollReveal delay={400}>
          <div className="max-w-xl mx-auto text-center">
            <p className="text-muted-foreground text-sm sm:text-base mb-5">
              That's why we built a place where you can explore 1000+ career paths with accurate, sourced information — at your own pace.
            </p>
            <Button asChild variant="outline" size="lg" className="min-h-[48px]">
              <Link to="/interests">
                Learn More About Careers
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
