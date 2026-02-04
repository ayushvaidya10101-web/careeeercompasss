import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, Search, BookOpen, AlertTriangle } from "lucide-react";

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
    <section id="learn-more" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Why Career Awareness{" "}
            <span className="gradient-text">Matters</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We understand the challenges students face when exploring careers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <Card 
              key={problem.title} 
              variant="problem"
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-14 h-14 rounded-2xl ${problem.bgColor} flex items-center justify-center mb-4`}>
                  <problem.icon className={`h-7 w-7 ${problem.color}`} />
                </div>
                <CardTitle className="text-lg font-semibold">{problem.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
