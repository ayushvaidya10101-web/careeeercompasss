import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { TOP_COUNTRIES } from "@/data/colleges";
import { Globe, Menu, X, Award, User, Search, Instagram } from "lucide-react";
import logoImg from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { AuthModal } from "@/components/auth/AuthModal";
import { HeaderSearch } from "@/components/search/HeaderSearch";
import { toast } from "sonner";

const NAV_LINKS = [
  { to: "/interests", label: "Careers" },
  { to: "/colleges", label: "Colleges" },
  { to: "/extracurriculars", label: "Activities" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const { user, signOut, isAuthenticated } = useAuth();
  const location = useLocation();

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast.error("Failed to sign out");
    } else {
      toast.success("Signed out successfully");
    }
  };

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <>
      <header
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl glass rounded-full px-4 sm:px-6 py-2.5 transition-all duration-300"
        role="banner"
      >
        <div className="flex items-center justify-between gap-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img src={logoImg} alt="Career Compass" className="h-7 w-7 rounded-full object-cover" />
            <span className="font-display text-lg sm:text-xl tracking-tight">
              Career Compass
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                  isActive(link.to)
                    ? "text-primary tubelight-glow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-2">
            <HeaderSearch />
            <a
              href="https://www.instagram.com/careercompassss/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-4 w-4 text-muted-foreground" />
            </a>
            {isAuthenticated ? (
              <div className="flex items-center gap-2">
                <Link
                  to="/profile"
                  className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-primary-hover flex items-center justify-center text-xs font-bold text-primary-foreground"
                  title="Profile"
                >
                  {user?.email?.charAt(0).toUpperCase()}
                </Link>
                <button
                  onClick={handleSignOut}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Button
                size="sm"
                className="rounded-full bg-gradient-to-r from-primary to-primary-hover text-primary-foreground px-5 shadow-glow hover:shadow-card-hover"
                onClick={() => setAuthModalOpen(true)}
              >
                Sign In
              </Button>
            )}
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-1 lg:hidden">
            <button
              onClick={() => { setMobileSearchOpen(!mobileSearchOpen); setMobileMenuOpen(false); }}
              className="p-2.5 rounded-full hover:bg-primary/10 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => { setMobileMenuOpen(!mobileMenuOpen); setMobileSearchOpen(false); }}
              className="p-2.5 rounded-full hover:bg-primary/10 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {mobileSearchOpen && (
          <div className="lg:hidden pt-3 pb-1 border-t border-border/50 mt-2">
            <HeaderSearch />
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pt-3 pb-2 border-t border-border/50 mt-2" aria-label="Mobile navigation">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors min-h-[48px] flex items-center ${
                    isActive(link.to) ? "text-primary bg-primary/10" : "hover:bg-muted/50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {isAuthenticated ? (
                <>
                  <Link
                    to="/profile"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-xl text-sm font-medium hover:bg-muted/50 min-h-[48px] flex items-center gap-3"
                  >
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-primary to-primary-hover flex items-center justify-center text-[10px] font-bold text-primary-foreground">
                      {user?.email?.charAt(0).toUpperCase()}
                    </div>
                    Profile
                  </Link>
                  <button
                    onClick={() => { handleSignOut(); setMobileMenuOpen(false); }}
                    className="px-4 py-3 rounded-xl text-sm font-medium hover:bg-muted/50 text-left min-h-[48px] flex items-center gap-3"
                  >
                    <User className="h-4 w-4" />
                    Sign Out
                  </button>
                </>
              ) : (
                <button
                  onClick={() => { setAuthModalOpen(true); setMobileMenuOpen(false); }}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-primary hover:bg-primary/10 text-left min-h-[48px] flex items-center gap-3"
                >
                  <User className="h-4 w-4" />
                  Sign In
                </button>
              )}
            </div>
          </nav>
        )}
      </header>

      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
    </>
  );
}
