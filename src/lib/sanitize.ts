/**
 * SECURITY: Client-side input sanitisation utilities.
 *
 * All user-facing inputs should pass through these before
 * being sent to APIs or rendered in the DOM.
 */

/** Strip control characters, trim, and enforce max length. */
export function sanitizeString(value: string, maxLength = 500): string {
  // eslint-disable-next-line no-control-regex
  return value.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "").trim().slice(0, maxLength);
}

/** Validate email format (basic, non-regex-DoS-vulnerable). */
export function isValidEmail(email: string): boolean {
  if (email.length > 254) return false;
  const parts = email.split("@");
  if (parts.length !== 2) return false;
  const [local, domain] = parts;
  if (!local || local.length > 64) return false;
  if (!domain || !domain.includes(".")) return false;
  return true;
}

/** Validate password strength for sign-up. */
export function validatePassword(password: string): string | null {
  if (password.length < 8) return "Password must be at least 8 characters";
  if (password.length > 128) return "Password must be at most 128 characters";
  return null;
}

/**
 * Safe error message extraction — never expose raw error objects.
 * Only returns known, user-safe messages.
 */
export function getSafeErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    // Only return Supabase auth errors which are user-facing by design
    const msg = error.message;
    const safePatterns = [
      "Invalid login credentials",
      "Email not confirmed",
      "User already registered",
      "Password should be at least",
      "Unable to validate email",
      "Signup requires a valid password",
      "Email rate limit exceeded",
      "For security purposes",
    ];
    for (const pattern of safePatterns) {
      if (msg.includes(pattern)) return msg;
    }
  }
  return "Something went wrong. Please try again.";
}
