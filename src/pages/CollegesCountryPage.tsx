import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getCollegesByCountry, TOP_COUNTRIES } from "@/data/colleges";
import { ArrowLeft, ExternalLink, MapPin, Trophy } from "lucide-react";

export default function CollegesCountryPage() {
  const { countryId } = useParams<{ countryId: string }>();
  const country = TOP_COUNTRIES.find(c => c.id === countryId);
  const colleges = countryId ? getCollegesByCountry(countryId) : [];

  if (!country) {
    return <div className="min-h-screen flex items-center justify-center">Country not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="text-center mb-12">
            <div className="text-5xl mb-4">{country.flag}</div>
            <h1 className="font-display text-4xl font-bold mb-2">
              Top Universities in <span className="gradient-text">{country.name}</span>
            </h1>
            <p className="text-muted-foreground">
              Ranked by QS World University Rankings 2024 • Source: TopUniversities.com
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {colleges.slice(0, 20).map((college, index) => (
              <Card key={college.id} variant="college" className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center">
                      <Trophy className="h-6 w-6 text-primary-foreground" />
                      <span className="absolute text-xs font-bold text-primary-foreground">#{college.qsRank}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-display font-semibold text-lg leading-tight">{college.name}</h3>
                        <Badge variant={college.type === "Public" ? "secondary" : "outline"} className="flex-shrink-0">
                          {college.type}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                        <MapPin className="h-3 w-3" />
                        {college.city}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{college.description}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {college.popularCourses.slice(0, 4).map(course => (
                          <Badge key={course} variant="secondary" className="text-xs">{course}</Badge>
                        ))}
                      </div>
                      <Button asChild variant="outline" size="sm" className="w-full">
                        <a href={college.website} target="_blank" rel="noopener noreferrer">
                          Visit Website <ExternalLink className="h-3 w-3 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
