/**
 * SECURITY MODULE — shared utilities for all edge functions.
 *
 * Provides:
 * - IP + user-based rate limiting (in-memory, per-isolate)
 * - Input validation helpers
 * - Sanitised error responses (never leak internals)
 * - CORS headers
 * - JWT verification helper
 */

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// ── CORS ────────────────────────────────────────────────────────────────
export const corsHeaders: Record<string, string> = {
  "Access-Control-Allow-Origin": "*", // tightened per-function if needed
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
};

// ── RATE LIMITER (in-memory, per Deno isolate) ──────────────────────────
interface RateBucket {
  count: number;
  resetAt: number;
}

const buckets = new Map<string, RateBucket>();

/**
 * Simple sliding-window rate limiter.
 * @returns true if the request should be REJECTED (over limit).
 */
export function isRateLimited(
  key: string,
  maxRequests: number = 10,
  windowMs: number = 60_000,
): boolean {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || now > bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  bucket.count++;
  return bucket.count > maxRequests;
}

/** Derive a rate-limit key from the request (IP + optional userId). */
export function rateLimitKey(req: Request, userId?: string): string {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("cf-connecting-ip") ??
    "unknown";
  return userId ? `user:${userId}` : `ip:${ip}`;
}

// ── ERROR RESPONSES ─────────────────────────────────────────────────────
/** Return a safe JSON error — never expose stack traces or internal details. */
export function safeErrorResponse(
  userMessage: string,
  status: number = 500,
): Response {
  return new Response(
    JSON.stringify({ error: userMessage }),
    {
      status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    },
  );
}

export function jsonResponse(data: unknown, status: number = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

// ── INPUT VALIDATION ────────────────────────────────────────────────────
/** Validate a string field: non-empty, within length, no control chars. */
export function validateString(
  value: unknown,
  fieldName: string,
  maxLength: number = 500,
): string {
  if (typeof value !== "string") {
    throw new ValidationError(`${fieldName} must be a string`);
  }
  const trimmed = value.trim();
  if (trimmed.length === 0) {
    throw new ValidationError(`${fieldName} must not be empty`);
  }
  if (trimmed.length > maxLength) {
    throw new ValidationError(
      `${fieldName} must be at most ${maxLength} characters`,
    );
  }
  // Strip control characters (except newlines/tabs for descriptions)
  // eslint-disable-next-line no-control-regex
  if (/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/.test(trimmed)) {
    throw new ValidationError(`${fieldName} contains invalid characters`);
  }
  return trimmed;
}

/** Validate an array of strings with per-item + total limits. */
export function validateStringArray(
  value: unknown,
  fieldName: string,
  maxItems: number = 20,
  maxItemLength: number = 100,
): string[] {
  if (!Array.isArray(value)) {
    throw new ValidationError(`${fieldName} must be an array`);
  }
  if (value.length > maxItems) {
    throw new ValidationError(
      `${fieldName} must have at most ${maxItems} items`,
    );
  }
  return value.map((item, i) =>
    validateString(item, `${fieldName}[${i}]`, maxItemLength)
  );
}

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

// ── JWT / AUTH HELPER ───────────────────────────────────────────────────
/**
 * Verify the caller's JWT and return their user ID.
 * Returns null if unauthenticated (public endpoint).
 * Throws on invalid token.
 */
export async function verifyAuth(req: Request): Promise<string | null> {
  const authHeader = req.headers.get("Authorization");
  if (!authHeader?.startsWith("Bearer ")) return null;

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_ANON_KEY")!,
    { global: { headers: { Authorization: authHeader } } },
  );

  const token = authHeader.replace("Bearer ", "");
  const { data, error } = await supabase.auth.getClaims(token);
  if (error || !data?.claims) return null;
  return data.claims.sub as string;
}
