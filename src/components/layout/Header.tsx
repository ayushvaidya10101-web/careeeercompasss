import { useState } from "react";
import { Link } from "react-router-dom";
import { TOP_COUNTRIES } from "@/data/colleges";
import { GraduationCap, Globe, Menu, X, BookOpen, Award, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { AuthModal } from "@/components/auth/AuthModal";
import { HeaderSearch } from "@/components/search/HeaderSearch";
import { toast } from "sonner";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const { user, signOut, isAuthenticated } = useAuth();

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast.error("Failed to sign out");
    } else {
      toast.success("Signed out successfully");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-lg sm:text-xl font-display font-bold">
            <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
            <span className="gradient-text">Career Compass</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4">
            {/* Global Search */}
            <HeaderSearch />
            
            {/* Primary Action Buttons */}
            <Link to="/extracurriculars">
              <Button variant="ghost" size="sm" className="gap-2">
                <Award className="h-4 w-4" />
                Extracurriculars
              </Button>
            </Link>
            <Link to="/colleges">
              <Button variant="glow" size="sm" className="gap-2">
                <Globe className="h-4 w-4" />
                Explore Colleges
              </Button>
            </Link>

            <ThemeToggle />

            {/* Auth Button */}
            {isAuthenticated ? (
              <div className="flex items-center gap-2 ml-2">
                <span className="text-sm text-muted-foreground">
                  {user?.email?.split('@')[0]}
                </span>
                <Button variant="ghost" size="sm" onClick={handleSignOut}>
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2 ml-2"
                onClick={() => setAuthModalOpen(true)}
              >
                <User className="h-4 w-4" />
                Sign In
              </Button>
            )}
            
            {/* Country Quick Links */}
            <div className="hidden xl:flex items-center gap-2 ml-4 pl-4 border-l border-border">
              {TOP_COUNTRIES.slice(0, 5).map((country) => (
                <Link
                  key={country.id}
                  to={`/colleges/${country.id}`}
                  className="flex items-center gap-1.5 px-2.5 py-1 text-sm rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all duration-200"
                >
                  <span>{country.flag}</span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile Controls */}
          <div className="flex items-center gap-0.5 lg:hidden">
            {/* Mobile Search Toggle */}
            <button
              onClick={() => {
                setMobileSearchOpen(!mobileSearchOpen);
                setMobileMenuOpen(false);
              }}
              className="p-2.5 rounded-lg hover:bg-muted min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <ThemeToggle />
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                setMobileSearchOpen(false);
              }}
              className="p-2.5 rounded-lg hover:bg-muted min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Overlay */}
        {mobileSearchOpen && (
          <div className="lg:hidden py-3 border-t border-border">
            <HeaderSearch />
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-1">
              <Link 
                to="/colleges" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3.5 rounded-lg bg-primary/10 text-primary font-medium min-h-[48px]"
              >
                <Globe className="h-5 w-5" />
                Explore Colleges
              </Link>
              <Link 
                to="/extracurriculars" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3.5 rounded-lg hover:bg-muted min-h-[48px]"
              >
                <Award className="h-5 w-5" />
                Extracurriculars
              </Link>
              <Link 
                to="/interests" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3.5 rounded-lg hover:bg-muted min-h-[48px]"
              >
                <BookOpen className="h-5 w-5" />
                Explore Careers
              </Link>

              {/* Auth for Mobile */}
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    handleSignOut();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-lg hover:bg-muted text-left min-h-[48px]"
                >
                  <User className="h-5 w-5" />
                  Sign Out ({user?.email?.split('@')[0]})
                </button>
              ) : (
                <button
                  onClick={() => {
                    setAuthModalOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-lg hover:bg-muted text-left min-h-[48px]"
                >
                  <User className="h-5 w-5" />
                  Sign In
                </button>
              )}

              <div className="mt-4 pt-4 border-t border-border">
                <p className="px-4 text-sm text-muted-foreground mb-3">Top Countries</p>
                <div className="flex flex-wrap gap-2 px-4">
                  {TOP_COUNTRIES.map((country) => (
                    <Link
                      key={country.id}
                      to={`/colleges/${country.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-1.5 px-3 py-2 text-sm rounded-full bg-muted/50 hover:bg-primary/10 min-h-[40px]"
                    >
                      <span>{country.flag}</span>
                      <span>{country.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Auth Modal */}
      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
    </header>
  );
}
