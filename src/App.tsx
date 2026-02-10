import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { SkipToContent } from "./components/SkipToContent";
import { lazy, Suspense } from "react";

// Eager load the landing page for fast initial render
import Index from "./pages/Index";

// Lazy load all other pages for smaller initial bundle
const InterestsPage = lazy(() => import("./pages/InterestsPage"));
const WorkStylePage = lazy(() => import("./pages/WorkStylePage"));
const ValuesPage = lazy(() => import("./pages/ValuesPage"));
const EnvironmentPage = lazy(() => import("./pages/EnvironmentPage"));
const CareersPage = lazy(() => import("./pages/CareersPage"));
const CareerDetailPage = lazy(() => import("./pages/CareerDetailPage"));
const CollegesPage = lazy(() => import("./pages/CollegesPage"));
const CollegesCountryPage = lazy(() => import("./pages/CollegesCountryPage"));
const ExtracurricularsPage = lazy(() => import("./pages/ExtracurricularsPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        <p className="text-sm text-muted-foreground">Loading…</p>
      </div>
    </div>
  );
}

const App = () => (
  <ErrorBoundary>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <SkipToContent />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/interests" element={<InterestsPage />} />
                <Route path="/preferences/work-style" element={<WorkStylePage />} />
                <Route path="/preferences/values" element={<ValuesPage />} />
                <Route path="/preferences/environment" element={<EnvironmentPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/career/:careerId" element={<CareerDetailPage />} />
                <Route path="/colleges" element={<CollegesPage />} />
                <Route path="/colleges/:countryId" element={<CollegesCountryPage />} />
                <Route path="/extracurriculars" element={<ExtracurricularsPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </ErrorBoundary>
);

export default App;
