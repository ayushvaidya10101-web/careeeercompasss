import { HelpCircle, Search, BookOpen, AlertTriangle, Shield, Check } from "lucide-react";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const problems = [
  {
    icon: HelpCircle,
    title: "Students Are Confused",
    description: "Many students feel overwhelmed by career choices and lack clear direction about their future paths.",
  },
  {
    icon: Search,
    title: "Limited Awareness",
    description: "Most students only know about a handful of careers, missing out on thousands of opportunities.",
  },
  {
    icon: AlertTriangle,
    title: "Misinformation",
    description: "Career decisions are often based on incomplete, outdated, or incorrect information.",
  },
  {
    icon: BookOpen,
    title: "Hard to Find Facts",
    description: "Reliable, structured career information is scattered across the internet.",
  },
];

const promises = [
  "We do NOT tell you what YOUR career should be",
  "We only provide accurate, sourced information about career options",
  "Final decisions are always yours to make",
];

export function ProblemSection() {
  return (
    <section id="learn-more" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-4">
              Why Career Awareness{" "}
              <em className="text-primary">Matters</em>
            </h2>
            <p className="text-muted-foreground">
              We understand the challenges students face when exploring careers.
            </p>
          </div>
        </ScrollReveal>

        {/* Feature grid */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto glass-card rounded-2xl overflow-hidden">
            <div className="grid sm:grid-cols-2">
              {problems.map((problem, index) => (
                <div
                  key={problem.title}
                  className={`feature-cell border-b border-r border-border/50 last:border-b-0 sm:odd:border-r sm:even:border-r-0 ${
                    index >= 2 ? 'border-b-0' : ''
                  }`}
                >
                  <div className="accent-bar" />
                  <div className="pl-4">
                    <div className="feature-icon w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                      <problem.icon className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <h3 className="feature-title font-display text-lg mb-2">{problem.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Our Promise card */}
        <ScrollReveal delay={200}>
          <div className="max-w-3xl mx-auto mt-12 sm:mt-16">
            <div className="glass-card rounded-2xl p-6 sm:p-10 flex flex-col sm:flex-row items-start gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center">
                <Shield className="h-7 w-7 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-2xl sm:text-3xl mb-4">
                  Our Promise: <em className="text-primary">Education, Not Direction</em>
                </h3>
                <p className="text-muted-foreground mb-5">
                  This platform is designed to <strong className="text-foreground">educate and inform</strong>, not to tell you what career to choose.
                </p>
                <ul className="space-y-3 mb-6">
                  {promises.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </span>
                      <span className="text-sm text-muted-foreground">{p}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/interests"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all duration-200"
                >
                  Start Exploring <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
