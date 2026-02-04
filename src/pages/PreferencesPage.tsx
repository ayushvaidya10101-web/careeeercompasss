import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowLeft, Briefcase, Heart, Building2 } from "lucide-react";

const WORK_STYLES = [
  { id: "leadership", label: "Leadership & Management", description: "Leading teams and making strategic decisions" },
  { id: "collaborative", label: "Collaborative Teamwork", description: "Working closely with others on shared goals" },
  { id: "independent", label: "Independent Work", description: "Self-directed tasks with autonomy" },
  { id: "creative", label: "Creative Problem-Solving", description: "Innovative and artistic approaches" },
  { id: "analytical", label: "Analytical & Research", description: "Data-driven investigation and analysis" },
];

const VALUES = [
  { id: "impact", label: "Making an Impact", description: "Creating meaningful change in the world" },
  { id: "innovation", label: "Innovation & Discovery", description: "Pushing boundaries and creating new things" },
  { id: "stability", label: "Stability & Security", description: "Predictable income and job security" },
  { id: "creativity", label: "Creative Expression", description: "Expressing ideas through your work" },
  { id: "helping", label: "Helping Others", description: "Directly improving people's lives" },
];

const ENVIRONMENTS = [
  { id: "office", label: "Office Setting", description: "Traditional professional workspace" },
  { id: "remote", label: "Remote / Flexible", description: "Work from anywhere with flexibility" },
  { id: "field", label: "Fieldwork / Outdoor", description: "Active work in various locations" },
  { id: "lab", label: "Lab / Research Facility", description: "Controlled research environments" },
  { id: "studio", label: "Studio / Creative Space", description: "Artistic and production environments" },
];

export default function PreferencesPage() {
  const [searchParams] = useSearchParams();
  const interests = searchParams.get("interests")?.split(",") || [];
  const navigate = useNavigate();

  const [workStyle, setWorkStyle] = useState<string>("");
  const [values, setValues] = useState<string>("");
  const [environment, setEnvironment] = useState<string>("");

  const handleContinue = () => {
    const params = new URLSearchParams({
      interests: interests.join(","),
      workStyle,
      values,
      environment,
    });
    navigate(`/careers?${params.toString()}`);
  };

  const canContinue = workStyle && values && environment;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-display text-4xl font-bold mb-4">
              Tell Us Your <span className="gradient-text">Preferences</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              These preferences help us rank and tag careers that might resonate with you.
              <br />
              <span className="text-sm">Note: All matching careers will be shown—these only affect order and tags.</span>
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-8">
            {/* Work Style */}
            <Card variant="gradient">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-semibold">How do you prefer to work?</h2>
                    <p className="text-sm text-muted-foreground">Select the work style that appeals to you most</p>
                  </div>
                </div>
                <RadioGroup value={workStyle} onValueChange={setWorkStyle} className="space-y-3">
                  {WORK_STYLES.map((style) => (
                    <div key={style.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value={style.id} id={`work-${style.id}`} className="mt-1" />
                      <Label htmlFor={`work-${style.id}`} className="flex-1 cursor-pointer">
                        <span className="font-medium block">{style.label}</span>
                        <span className="text-sm text-muted-foreground">{style.description}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Values */}
            <Card variant="gradient">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-secondary/30">
                    <Heart className="h-5 w-5 text-brand-pink" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-semibold">What matters most to you?</h2>
                    <p className="text-sm text-muted-foreground">Select the value that drives you</p>
                  </div>
                </div>
                <RadioGroup value={values} onValueChange={setValues} className="space-y-3">
                  {VALUES.map((val) => (
                    <div key={val.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value={val.id} id={`value-${val.id}`} className="mt-1" />
                      <Label htmlFor={`value-${val.id}`} className="flex-1 cursor-pointer">
                        <span className="font-medium block">{val.label}</span>
                        <span className="text-sm text-muted-foreground">{val.description}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Environment */}
            <Card variant="gradient">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-brand-cyan/20">
                    <Building2 className="h-5 w-5 text-brand-cyan" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-semibold">What environment suits you?</h2>
                    <p className="text-sm text-muted-foreground">Select your preferred work setting</p>
                  </div>
                </div>
                <RadioGroup value={environment} onValueChange={setEnvironment} className="space-y-3">
                  {ENVIRONMENTS.map((env) => (
                    <div key={env.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value={env.id} id={`env-${env.id}`} className="mt-1" />
                      <Label htmlFor={`env-${env.id}`} className="flex-1 cursor-pointer">
                        <span className="font-medium block">{env.label}</span>
                        <span className="text-sm text-muted-foreground">{env.description}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Continue Button */}
            <div className="text-center pt-4">
              <Button
                variant="hero"
                size="xl"
                disabled={!canContinue}
                onClick={handleContinue}
              >
                Explore Careers
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
