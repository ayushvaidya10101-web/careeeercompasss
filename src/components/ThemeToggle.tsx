import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="p-2 rounded-full hover:bg-primary/10 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
    >
      <Sun className="h-4 w-4 transition-transform duration-300 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 transition-transform duration-300 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
    </button>
  );
}
