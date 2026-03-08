import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [spinning, setSpinning] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const toggle = () => {
    setSpinning(true);
    setTheme(theme === "dark" ? "light" : "dark");
    setTimeout(() => setSpinning(false), 500);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-[9997] w-11 h-11 rounded-full glass flex items-center justify-center transition-all duration-300 hover:shadow-glow"
      style={{
        animation: spinning ? 'spin360 0.5s ease-in-out' : 'none',
      }}
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-primary" />
      ) : (
        <Moon className="h-5 w-5 text-foreground" />
      )}
    </button>
  );
}
