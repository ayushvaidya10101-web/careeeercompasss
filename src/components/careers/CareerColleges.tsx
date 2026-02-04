import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getCollegesForCareer, INTEREST_TO_COURSES } from "@/data/careerColleges";
import { COLLEGES_DATABASE } from "@/data/colleges";
import { GraduationCap, ExternalLink, Trophy, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface CareerCollegesProps {
  careerId: string;
  careerTitle: string;
  interests: string[];
}

export function CareerColleges({ careerId, careerTitle, interests }: CareerCollegesProps) {
  // Get specific career-college mappings
  const careerColleges = getCollegesForCareer(careerId);
  
  // Get relevant course keywords for fallback
  const relevantCourses: string[] = [];
  interests.forEach(interest => {
    const courses = INTEREST_TO_COURSES[interest] || [];
    relevantCourses.push(...courses);
  });

  // If we have specific mappings, use them
  if (careerColleges.length > 0) {
    const collegesWithDetails = careerColleges
      .map(cc => {
        const college = COLLEGES_DATABASE.find(c => c.id === cc.collegeId);
        return college ? { ...college, programName: cc.programName, programUrl: cc.programUrl, relevanceScore: cc.relevanceScore } : null;
      })
      .filter(Boolean)
      .sort((a, b) => (b?.relevanceScore || 0) - (a?.relevanceScore || 0));

    return (
      <Card variant="gradient">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-brand-blue" />
            Recommended Universities for {careerTitle}
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Top-ranked universities offering relevant programs, sorted by QS World University Rankings
          </p>
        </CardHeader>
        <CardContent className="space-y-3">
          {collegesWithDetails.map(college => college && (
            <div 
              key={college.id} 
              className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center">
                <Trophy className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div>
                    <Link 
                      to={`/colleges/${college.country}`}
                      className="font-semibold hover:text-primary transition-colors"
                    >
                      {college.name}
                    </Link>
                    <Badge variant="outline" className="ml-2 text-xs">
                      QS #{college.qsRank}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                  <MapPin className="h-3 w-3" />
                  {college.city}
                </div>
                <p className="text-sm text-primary font-medium mb-2">
                  {college.programName}
                </p>
                <div className="flex gap-2">
                  <Button asChild size="sm" variant="outline" className="text-xs">
                    <a href={college.programUrl} target="_blank" rel="noopener noreferrer">
                      View Program <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="ghost" className="text-xs">
                    <a href={college.website} target="_blank" rel="noopener noreferrer">
                      University Site
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
          
          <p className="text-xs text-muted-foreground pt-2 border-t">
            Rankings sourced from QS World University Rankings 2024 via TopUniversities.com.
            Program details should be verified on official university websites.
          </p>
        </CardContent>
      </Card>
    );
  }

  // Fallback: Show colleges with matching courses based on interests
  const matchingColleges = COLLEGES_DATABASE
    .filter(college => {
      return college.popularCourses.some(course => 
        relevantCourses.some(rc => course.toLowerCase().includes(rc.toLowerCase()))
      );
    })
    .sort((a, b) => a.qsRank - b.qsRank)
    .slice(0, 5);

  if (matchingColleges.length === 0) {
    return null;
  }

  return (
    <Card variant="gradient">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-brand-blue" />
          Universities with Related Programs
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Top-ranked universities offering courses in related fields
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        {matchingColleges.map(college => {
          const matchedCourses = college.popularCourses.filter(course =>
            relevantCourses.some(rc => course.toLowerCase().includes(rc.toLowerCase()))
          );
          
          return (
            <div 
              key={college.id} 
              className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center">
                <Trophy className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <Link 
                    to={`/colleges/${college.country}`}
                    className="font-semibold hover:text-primary transition-colors"
                  >
                    {college.name}
                  </Link>
                  <Badge variant="outline" className="text-xs">
                    QS #{college.qsRank}
                  </Badge>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                  <MapPin className="h-3 w-3" />
                  {college.city}
                </div>
                <div className="flex flex-wrap gap-1 mb-2">
                  {matchedCourses.slice(0, 3).map(course => (
                    <Badge key={course} variant="secondary" className="text-xs">
                      {course}
                    </Badge>
                  ))}
                </div>
                <Button asChild size="sm" variant="ghost" className="text-xs">
                  <a href={college.website} target="_blank" rel="noopener noreferrer">
                    Visit Website <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </Button>
              </div>
            </div>
          );
        })}
        
        <p className="text-xs text-muted-foreground pt-2 border-t">
          Rankings sourced from QS World University Rankings 2024. 
          This is informational only—verify programs on official university websites.
        </p>
      </CardContent>
    </Card>
  );
}
