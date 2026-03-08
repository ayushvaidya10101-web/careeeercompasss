import { Link, useLocation } from "react-router-dom";
import { Briefcase, Building2, Star } from "lucide-react";

const NAV_ITEMS = [
  { to: "/careers", icon: Briefcase, label: "Careers" },
  { to: "/colleges", icon: Building2, label: "Colleges" },
  { to: "/extracurriculars", icon: Star, label: "Activities" },
];

export function BottomNav() {
  const location = useLocation();

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-t border-border"
      aria-label="Mobile bottom navigation"
    >
      <div className="flex items-center justify-around h-16">
        {NAV_ITEMS.map(({ to, icon: Icon, label }) => {
          const isActive = location.pathname.startsWith(to);
          return (
            <Link
              key={to}
              to={to}
              className={`flex flex-col items-center justify-center gap-1 min-w-[64px] min-h-[44px] px-3 py-2 transition-colors ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-[10px] font-medium leading-none">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
