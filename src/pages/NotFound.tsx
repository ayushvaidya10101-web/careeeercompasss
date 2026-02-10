import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEOHead title="Page Not Found" description="The page you're looking for doesn't exist." />
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
        <div className="text-center max-w-md">
          <h1 className="mb-2 text-6xl font-bold font-display gradient-text">404</h1>
          <p className="mb-2 text-xl font-semibold">Page not found</p>
          <p className="mb-8 text-muted-foreground">
            The page at <code className="text-sm bg-muted px-2 py-1 rounded">{location.pathname}</code> doesn't exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="outline" onClick={() => window.history.back()} className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </Button>
            <Button asChild className="gap-2">
              <Link to="/">
                <Home className="h-4 w-4" />
                Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
