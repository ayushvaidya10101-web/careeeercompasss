import { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, GraduationCap, Briefcase, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CAREERS_DATABASE } from '@/data/careers';
import { COLLEGES_DATABASE } from '@/data/colleges';
import { cn } from '@/lib/utils';

interface SearchResult {
  type: 'career' | 'college';
  id: string;
  title: string;
  subtitle: string;
  url: string;
}

export function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Memoized search results
  const searchResults = useMemo(() => {
    if (!query.trim()) return [];

    const lowerQuery = query.toLowerCase();
    const matches: SearchResult[] = [];

    // Search careers
    CAREERS_DATABASE.forEach(career => {
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
          url: `/careers/${career.id}`,
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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
          e.preventDefault();
          setIsOpen(true);
        }
        return;
      }

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
    <>
      {/* Floating Search Button */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full shadow-lg bg-primary text-primary-foreground hover:bg-primary/90 border-0"
      >
        <Search className="h-6 w-6" />
      </Button>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => {
              setIsOpen(false);
              setQuery('');
            }}
          />

          {/* Search Container */}
          <div className="relative w-full max-w-xl mx-4 bg-card border border-border rounded-xl shadow-2xl overflow-hidden">
            {/* Search Input */}
            <div className="flex items-center gap-3 px-4 border-b border-border">
              <Search className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              <Input
                ref={inputRef}
                type="text"
                placeholder="Search careers or colleges..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border-0 focus-visible:ring-0 text-lg py-4 px-0"
              />
              {query && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setQuery('')}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Results */}
            {results.length > 0 && (
              <div className="max-h-80 overflow-y-auto p-2">
                {results.map((result, index) => (
                  <button
                    key={`${result.type}-${result.id}`}
                    onClick={() => handleResultClick(result)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-colors",
                      index === selectedIndex ? "bg-primary/10" : "hover:bg-muted"
                    )}
                  >
                    <div className={cn(
                      "flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center",
                      result.type === 'career' ? "bg-primary/10" : "bg-accent/10"
                    )}>
                      {result.type === 'career' ? (
                        <Briefcase className="h-5 w-5 text-primary" />
                      ) : (
                        <GraduationCap className="h-5 w-5 text-accent" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{result.title}</p>
                      <p className="text-sm text-muted-foreground truncate">{result.subtitle}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  </button>
                ))}
              </div>
            )}

            {/* Empty State */}
            {query && results.length === 0 && (
              <div className="p-8 text-center">
                <p className="text-muted-foreground">No results found for "{query}"</p>
              </div>
            )}

            {/* Keyboard Hints */}
            {!query && (
              <div className="p-4 text-center text-sm text-muted-foreground">
                <p>Type to search for careers or colleges</p>
                <p className="mt-1 text-xs">
                  Press <kbd className="px-1.5 py-0.5 bg-muted rounded">↑</kbd>{' '}
                  <kbd className="px-1.5 py-0.5 bg-muted rounded">↓</kbd> to navigate,{' '}
                  <kbd className="px-1.5 py-0.5 bg-muted rounded">Enter</kbd> to select
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
