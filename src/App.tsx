import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Index from "./pages/Index";
import InterestsPage from "./pages/InterestsPage";
import WorkStylePage from "./pages/WorkStylePage";
import ValuesPage from "./pages/ValuesPage";
import EnvironmentPage from "./pages/EnvironmentPage";
import CareersPage from "./pages/CareersPage";
import CareerDetailPage from "./pages/CareerDetailPage";
import CollegesPage from "./pages/CollegesPage";
import CollegesCountryPage from "./pages/CollegesCountryPage";
import ExtracurricularsPage from "./pages/ExtracurricularsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
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
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
