import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, Search, BookOpen, AlertTriangle } from "lucide-react";
import { ScrollReveal } from "@/components/layout/ScrollReveal";

const problems = [
  {
    icon: HelpCircle,
    title: "Students Are Confused",
    description: "Many students feel overwhelmed by career choices and lack clear direction about their future paths.",
    color: "text-brand-blue",
    bgColor: "bg-brand-blue/10",
  },
  {
    icon: Search,
    title: "Limited Awareness",
    description: "Most students only know about a handful of careers, missing out on thousands of opportunities that could be perfect for them.",
    color: "text-brand-cyan",
    bgColor: "bg-brand-cyan/10",
  },
  {
    icon: AlertTriangle,
    title: "Misinformation",
    description: "Career decisions are often based on incomplete, outdated, or incorrect information from unreliable sources.",
    color: "text-brand-purple",
    bgColor: "bg-brand-purple/10",
  },
  {
    icon: BookOpen,
    title: "Hard to Find Facts",
    description: "Reliable, structured career information is scattered across the internet and difficult for students to access.",
    color: "text-brand-pink",
    bgColor: "bg-brand-pink/10",
  },
];

export function ProblemSection() {
  return (
    <section id="learn-more" className="py-16 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Why Career Awareness{" "}
              <span className="gradient-text">Matters</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              We understand the challenges students face when exploring careers.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <ScrollReveal key={problem.title} delay={index * 150}>
              <Card
                variant="problem"
                className="h-full"
              >
                <CardHeader className="pb-2 sm:pb-3">
                  <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ${problem.bgColor} flex items-center justify-center mb-3 sm:mb-4`}>
                    <problem.icon className={`h-5 w-5 sm:h-7 sm:w-7 ${problem.color}`} />
                  </div>
                  <CardTitle className="text-base sm:text-lg font-semibold">{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
