

# Fix Broken Extracurricular-to-Career Links

## Problem
Extracurricular activities reference career IDs (like `animator`, `journalist`, `physician`, `architect`, etc.) that don't exist in any career database. When users click these links, they land on a "Career Not Found" page. This affects both mobile and desktop identically -- it's a data integrity issue, not a platform issue.

## Root Cause
The three extracurricular files collectively reference ~80+ unique career IDs, but many of these IDs were never added to the career databases (`careers.ts`, `extendedCareers.ts`, `medicalCareers.ts`, etc.). The `getCareerDetail()` function correctly searches all databases but returns `null` for missing IDs.

## Solution

### Step 1: Create a career ID validation utility
Create `src/data/validateCareerLinks.ts` with:
- A function that collects all career IDs referenced in extracurriculars
- A function that checks each against `getAllCareers()` and returns missing IDs
- A `getValidCareerConnections()` function that filters out any connection whose `careerId` is not in the global career index
- Cache the validated career ID set on first call (simple module-level `Set<string>`) so repeated lookups are instant

### Step 2: Add missing careers to the database
Create `src/data/extracurricularCareers.ts` containing Career entries for every ID referenced in extracurriculars that doesn't already exist. This covers careers like:
- `animator`, `journalist`, `physician`, `architect`, `veterinarian`, `pharmacist`
- `physical-therapist`, `nurse-practitioner`, `professor`, `teacher-k12`
- `graphic-designer`, `interior-designer`, `ui-designer`, `video-editor`
- `aerospace-engineer`, `mechanical-engineer`, `civil-engineer`, `electrical-engineer`
- `mobile-app-developer`, `full-stack-developer`, `cybersecurity-analyst`
- `investment-banker`, `accountant`, `public-relations-specialist`
- And all other missing IDs (~40-50 careers total)

Each career will have proper `interests`, `interestCombinations`, `preferences`, `salaryRange`, `demand`, `growthRate`, `education`, and `tags` fields.

### Step 3: Register new careers in getAllCareers()
Update `src/data/careers.ts` to import and include `EXTRACURRICULAR_CAREERS` in the `getAllCareers()` deduplication array.

### Step 4: Add runtime validation in ExtracurricularsPage
Update `src/pages/ExtracurricularsPage.tsx` to filter career connections at render time:
- Build a `Set<string>` of all valid career IDs from `getAllCareers()` (cached via `useMemo`)
- Before rendering each `ExtracurricularCard`, filter its `careerConnections` to only include entries where `careerId` exists in the valid set
- Never show a career connection that would lead to a 404

### Step 5: Add relevance ranking to career connections
When displaying career connections from an extracurricular, sort them using the user's preferences (if available from `useLocalPreferences`):
1. Careers matching both user's selected interests and preferences (highest)
2. Careers matching either interests or preferences
3. All other valid careers (lowest)

This ranking is applied in the `ExtracurricularCard` component using `applyPreferenceScoring` from the careers module.

### Step 6: Graceful fallback in CareerDetailPage
Update `src/pages/CareerDetailPage.tsx` so when a career ID is not found, instead of showing "Career Not Found", it shows related careers from the same interest categories. This ensures no empty states even if an edge case slips through.

## Technical Details

### Files to create:
- `src/data/extracurricularCareers.ts` -- ~40-50 new Career entries for all missing IDs
- `src/data/validateCareerLinks.ts` -- validation utility with cached ID set

### Files to modify:
- `src/data/careers.ts` -- add import and include new careers in `getAllCareers()`
- `src/pages/ExtracurricularsPage.tsx` -- filter invalid connections, add relevance sorting
- `src/pages/CareerDetailPage.tsx` -- add fallback UI showing related careers instead of dead end

### Performance:
- Career ID set is built once and cached at module level
- No additional network requests
- No increase in bundle size beyond the new career data (~40-50 entries)
- `useMemo` prevents re-computation on every render

