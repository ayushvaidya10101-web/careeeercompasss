import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'career_compass_preferences';

export interface LocalPreferences {
  selectedInterests: string[];
  viewedCareers: string[];
  exploredColleges: string[];
  clickedExtracurriculars: string[];
  preferences: {
    workStyle?: string[];
    values?: string[];
    environment?: string[];
  };
  lastUpdated: string;
}

const defaultPreferences: LocalPreferences = {
  selectedInterests: [],
  viewedCareers: [],
  exploredColleges: [],
  clickedExtracurriculars: [],
  preferences: {},
  lastUpdated: new Date().toISOString(),
};

export function useLocalPreferences() {
  const [preferences, setPreferences] = useState<LocalPreferences>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error('Error reading preferences:', error);
    }
    return defaultPreferences;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
    } catch (error) {
      console.error('Error saving preferences:', error);
    }
  }, [preferences]);

  const addViewedCareer = useCallback((careerId: string) => {
    setPreferences(prev => {
      if (prev.viewedCareers.includes(careerId)) return prev;
      return {
        ...prev,
        viewedCareers: [...prev.viewedCareers, careerId].slice(-50), // Keep last 50
        lastUpdated: new Date().toISOString(),
      };
    });
  }, []);

  const addExploredCollege = useCallback((collegeId: string) => {
    setPreferences(prev => {
      if (prev.exploredColleges.includes(collegeId)) return prev;
      return {
        ...prev,
        exploredColleges: [...prev.exploredColleges, collegeId].slice(-50),
        lastUpdated: new Date().toISOString(),
      };
    });
  }, []);

  const addClickedExtracurricular = useCallback((extracurricularId: string) => {
    setPreferences(prev => {
      if (prev.clickedExtracurriculars.includes(extracurricularId)) return prev;
      return {
        ...prev,
        clickedExtracurriculars: [...prev.clickedExtracurriculars, extracurricularId].slice(-50),
        lastUpdated: new Date().toISOString(),
      };
    });
  }, []);

  const setSelectedInterests = useCallback((interests: string[]) => {
    setPreferences(prev => ({
      ...prev,
      selectedInterests: interests,
      lastUpdated: new Date().toISOString(),
    }));
  }, []);

  const setUserPreferences = useCallback((prefs: LocalPreferences['preferences']) => {
    setPreferences(prev => ({
      ...prev,
      preferences: prefs,
      lastUpdated: new Date().toISOString(),
    }));
  }, []);

  const clearPreferences = useCallback(() => {
    setPreferences(defaultPreferences);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return {
    preferences,
    addViewedCareer,
    addExploredCollege,
    addClickedExtracurricular,
    setSelectedInterests,
    setUserPreferences,
    clearPreferences,
  };
}
