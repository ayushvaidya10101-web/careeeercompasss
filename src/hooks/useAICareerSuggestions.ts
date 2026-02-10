/**
 * SECURITY: AI career suggestions hook with client-side validation
 * and safe error handling (no internal details exposed).
 */
import { useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { getSafeErrorMessage } from "@/lib/sanitize";

export interface AISuggestedCareer {
  id: string;
  title: string;
  description: string;
  demand: "High" | "Medium" | "Low";
  growthRate: string;
  salaryRange: string;
  education: string;
  tags: string[];
  whyMatch: string;
}

interface UseAICareerSuggestionsReturn {
  suggestions: AISuggestedCareer[];
  isLoading: boolean;
  error: string | null;
  fetchSuggestions: (params: {
    interests: string[];
    workStyle?: string;
    values?: string;
    environment?: string;
    existingCareerIds?: string[];
  }) => Promise<void>;
  hasFetched: boolean;
}

export function useAICareerSuggestions(): UseAICareerSuggestionsReturn {
  const [suggestions, setSuggestions] = useState<AISuggestedCareer[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasFetched, setHasFetched] = useState(false);

  const fetchSuggestions = useCallback(
    async (params: {
      interests: string[];
      workStyle?: string;
      values?: string;
      environment?: string;
      existingCareerIds?: string[];
    }) => {
      // SECURITY: Client-side pre-validation
      if (params.interests.length === 0 || params.interests.length > 5) return;

      setIsLoading(true);
      setError(null);

      try {
        const { data, error: fnError } = await supabase.functions.invoke(
          "ai-career-suggestions",
          { body: params },
        );

        if (fnError) {
          throw new Error(fnError.message || "Request failed");
        }

        if (data?.error) {
          throw new Error(data.error);
        }

        if (data?.careers && Array.isArray(data.careers)) {
          setSuggestions(data.careers);
        } else {
          setSuggestions([]);
        }
      } catch (err) {
        // SECURITY: Never expose raw error details to the UI
        setError(getSafeErrorMessage(err));
        setSuggestions([]);
      } finally {
        setIsLoading(false);
        setHasFetched(true);
      }
    },
    [],
  );

  return { suggestions, isLoading, error, fetchSuggestions, hasFetched };
}
