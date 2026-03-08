import { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, GraduationCap, Briefcase, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getAllCareers } from '@/data/careers';
import { COLLEGES_DATABASE } from '@/data/colleges';
import { cn } from '@/lib/utils';

interface SearchResult {
  type: 'career' | 'college';
  id: string;
  title: string;
  subtitle: string;
  url: string;
}

export function HeaderSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Memoized search results
  const searchResults = useMemo(() => {
    if (!query.trim()) return [];

    const lowerQuery = query.toLowerCase();
    const matches: SearchResult[] = [];
    const allCareers = getAllCareers();

    // Search careers
    allCareers.forEach(career => {
      if (
        career.title.toLowerCase().includes(lowerQuery) ||
        career.description.toLowerCase().includes(lowerQuery) ||
        career.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
      ) {
        matches.push({
          type: 'career',
          id: career.id,
          title: career.title,
          subtitle: career.description.slice(0, 60) + '...',
          url: `/career/${career.id}`,
        });
      }
    });

    // Search colleges
    COLLEGES_DATABASE.forEach(college => {
      if (
        college.name.toLowerCase().includes(lowerQuery) ||
        college.city.toLowerCase().includes(lowerQuery) ||
        college.popularCourses.some(course => course.toLowerCase().includes(lowerQuery))
      ) {
        matches.push({
          type: 'college',
          id: college.id,
          title: college.name,
          subtitle: `${college.city} • QS Rank #${college.qsRank}`,
          url: `/colleges/${college.country}/${college.id}`,
        });
      }
    });

    return matches.slice(0, 8);
  }, [query]);

  useEffect(() => {
    setResults(searchResults);
    setSelectedIndex(0);
  }, [searchResults]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K to open
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
        return;
      }

      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(i => Math.min(i + 1, results.length - 1));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(i => Math.max(i - 1, 0));
          break;
        case 'Enter':
          e.preventDefault();
          if (results[selectedIndex]) {
            navigate(results[selectedIndex].url);
            setIsOpen(false);
            setQuery('');
          }
          break;
        case 'Escape':
          setIsOpen(false);
          setQuery('');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, navigate]);

  const handleResultClick = (result: SearchResult) => {
    navigate(result.url);
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Search Button/Input */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-muted/50 hover:bg-muted transition-colors text-sm text-muted-foreground",
          isOpen && "hidden"
        )}
      >
        <Search className="h-4 w-4" />
        <span className="hidden sm:inline">Search...</span>
        <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      {/* Expanded Search */}
      {isOpen && (
        <div className="fixed inset-x-4 top-16 sm:absolute sm:inset-auto sm:top-0 sm:right-0 sm:w-[400px] z-50">
          <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden">
            {/* Search Input */}
            <div className="flex items-center gap-2 px-3 border-b border-border">
              <Search className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <Input
                ref={inputRef}
                type="text"
                placeholder="Search careers or colleges..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border-0 focus-visible:ring-0 text-sm py-2.5 px-0 h-10"
              />
              {query && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => setQuery('')}
                >
                  <X className="h-3 w-3" />
                </Button>
              )}
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={() => {
                  setIsOpen(false);
                  setQuery('');
                }}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Results */}
            {results.length > 0 && (
              <div className="max-h-64 overflow-y-auto p-1.5">
                {results.map((result, index) => (
                  <button
                    key={`${result.type}-${result.id}`}
                    onClick={() => handleResultClick(result)}
                    className={cn(
                      "w-full flex items-center gap-2.5 px-2.5 py-2 rounded-md text-left transition-colors",
                      index === selectedIndex ? "bg-primary/10" : "hover:bg-muted"
                    )}
                  >
                    <div className={cn(
                      "flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center",
                      result.type === 'career' ? "bg-primary/10" : "bg-accent/10"
                    )}>
                      {result.type === 'career' ? (
                        <Briefcase className="h-4 w-4 text-primary" />
                      ) : (
                        <GraduationCap className="h-4 w-4 text-accent" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{result.title}</p>
                      <p className="text-xs text-muted-foreground truncate">{result.subtitle}</p>
                    </div>
                    <ArrowRight className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                  </button>
                ))}
              </div>
            )}

            {/* Empty State */}
            {query && results.length === 0 && (
              <div className="p-4 text-center">
                <p className="text-sm text-muted-foreground">No results for "{query}"</p>
              </div>
            )}

            {/* Keyboard Hints */}
            {!query && (
              <div className="p-3 text-center border-t border-border">
                <p className="text-xs text-muted-foreground">
                  <kbd className="px-1 py-0.5 bg-muted rounded text-[10px]">↑</kbd>{' '}
                  <kbd className="px-1 py-0.5 bg-muted rounded text-[10px]">↓</kbd> navigate,{' '}
                  <kbd className="px-1 py-0.5 bg-muted rounded text-[10px]">Enter</kbd> select,{' '}
                  <kbd className="px-1 py-0.5 bg-muted rounded text-[10px]">Esc</kbd> close
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
