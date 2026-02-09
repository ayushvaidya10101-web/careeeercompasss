// Validation utility for extracurricular-to-career links
// Caches valid career IDs at module level for instant lookups

import { getAllCareers } from './careers';
import type { Extracurricular } from './extracurriculars';

let _validCareerIds: Set<string> | null = null;

export function getValidCareerIdSet(): Set<string> {
  if (!_validCareerIds) {
    _validCareerIds = new Set(getAllCareers().map(c => c.id));
  }
  return _validCareerIds;
}

export function getValidCareerConnections(
  activity: Extracurricular
): Extracurricular['careerConnections'] {
  const validIds = getValidCareerIdSet();
  return activity.careerConnections.filter(c => validIds.has(c.careerId));
}

export function getMissingCareerIds(activities: Extracurricular[]): string[] {
  const validIds = getValidCareerIdSet();
  const missing = new Set<string>();
  for (const act of activities) {
    for (const conn of act.careerConnections) {
      if (!validIds.has(conn.careerId)) {
        missing.add(conn.careerId);
      }
    }
  }
  return Array.from(missing);
}
