/**
 * AI Career Suggestions Edge Function
 *
 * SECURITY:
 * - Rate-limited (5 req / 60s per IP, 10 / 60s per user)
 * - Strict input validation (type, length, enum whitelist)
 * - No internal error details leaked to clients
 * - JWT verification via shared security module
 */

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import {
  corsHeaders,
  isRateLimited,
  rateLimitKey,
  safeErrorResponse,
  jsonResponse,
  validateStringArray,
  validateString,
  ValidationError,
  verifyAuth,
} from "../_shared/security.ts";

// ── Allowed enum values (whitelist) ─────────────────────────────────────
const ALLOWED_INTERESTS = new Set([
  "technology", "science", "arts", "business", "healthcare",
  "education", "engineering", "law", "media", "social-sciences",
  "agriculture", "sports", "design", "environment", "hospitality",
  "finance", "government", "nonprofit", "trades", "military",
]);

serve(async (req) => {
  // CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Only POST allowed
  if (req.method !== "POST") {
    return safeErrorResponse("Method not allowed", 405);
  }

  try {
    // ── Rate limiting ───────────────────────────────────────────────
    const userId = await verifyAuth(req);
    const rlKey = rateLimitKey(req, userId ?? undefined);
    const limit = userId ? 10 : 5; // authenticated users get higher limit
    if (isRateLimited(rlKey, limit, 60_000)) {
      return safeErrorResponse(
        "Too many requests. Please wait a moment and try again.",
        429,
      );
    }

    // ── Parse & validate body ───────────────────────────────────────
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return safeErrorResponse("Invalid JSON body", 400);
    }

    if (typeof body !== "object" || body === null || Array.isArray(body)) {
      return safeErrorResponse("Request body must be a JSON object", 400);
    }

    const raw = body as Record<string, unknown>;

    // Only allow known fields — reject unexpected keys
    const allowedFields = new Set([
      "interests", "workStyle", "values", "environment", "existingCareerIds",
    ]);
    for (const key of Object.keys(raw)) {
      if (!allowedFields.has(key)) {
        return safeErrorResponse(`Unknown field: ${key}`, 400);
      }
    }

    // Validate interests (required, 1-5 items, must be from whitelist)
    const interests = validateStringArray(raw.interests, "interests", 5, 50);
    if (interests.length === 0) {
      return safeErrorResponse("At least one interest is required", 400);
    }
    for (const interest of interests) {
      if (!ALLOWED_INTERESTS.has(interest)) {
        return safeErrorResponse(`Invalid interest: ${interest}`, 400);
      }
    }

    // Validate optional string fields
    const workStyle = raw.workStyle
      ? validateString(raw.workStyle, "workStyle", 100)
      : undefined;
    const values = raw.values
      ? validateString(raw.values, "values", 100)
      : undefined;
    const environment = raw.environment
      ? validateString(raw.environment, "environment", 100)
      : undefined;

    // Validate optional existingCareerIds
    const existingCareerIds = raw.existingCareerIds
      ? validateStringArray(raw.existingCareerIds, "existingCareerIds", 50, 100)
      : [];

    // ── Build AI prompt ─────────────────────────────────────────────
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      return safeErrorResponse("Service temporarily unavailable", 503);
    }

    const interestLabels = interests.join(" and ");
    const preferencesContext = [
      workStyle ? `Work style preference: ${workStyle}` : "",
      values ? `Values: ${values}` : "",
      environment ? `Preferred environment: ${environment}` : "",
    ]
      .filter(Boolean)
      .join(". ");

    const systemPrompt = `You are a career guidance expert. Given a student's interests and preferences, suggest real, widely-practiced career roles that sit at the intersection of their chosen interest areas.

RULES:
- Only suggest real, established career roles that exist today
- Each career must genuinely connect to BOTH interest areas
- Provide realistic salary ranges, growth rates, and education requirements
- Do NOT repeat careers the user already has (provided in existing_ids)
- Suggest exactly 6 careers
- Be specific with job titles (e.g., "Clinical Data Manager" not "Healthcare Worker")`;

    const userPrompt = `Student interests: ${interestLabels}
${preferencesContext ? `Preferences: ${preferencesContext}` : ""}
${existingCareerIds.length ? `Already have these career IDs (do not repeat similar titles): ${existingCareerIds.slice(0, 30).join(", ")}` : ""}

Suggest 6 real career roles at the intersection of these interests.`;

    // ── Call AI gateway ─────────────────────────────────────────────
    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt },
          ],
          tools: [
            {
              type: "function",
              function: {
                name: "suggest_careers",
                description:
                  "Return 6 career suggestions at the intersection of the student's interests.",
                parameters: {
                  type: "object",
                  properties: {
                    careers: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          id: {
                            type: "string",
                            description:
                              "kebab-case unique ID, e.g. clinical-data-manager",
                          },
                          title: { type: "string", description: "Job title" },
                          description: {
                            type: "string",
                            description: "One-sentence career description",
                          },
                          demand: {
                            type: "string",
                            enum: ["High", "Medium", "Low"],
                          },
                          growthRate: {
                            type: "string",
                            description: "e.g. 15% (2024-2034)",
                          },
                          salaryRange: {
                            type: "string",
                            description: "e.g. $60,000 - $120,000",
                          },
                          education: {
                            type: "string",
                            description: "Required education level",
                          },
                          tags: {
                            type: "array",
                            items: { type: "string" },
                            description: "3-4 relevant tags",
                          },
                          whyMatch: {
                            type: "string",
                            description:
                              "Brief explanation of why this career matches the student's interests",
                          },
                        },
                        required: [
                          "id", "title", "description", "demand",
                          "growthRate", "salaryRange", "education",
                          "tags", "whyMatch",
                        ],
                        additionalProperties: false,
                      },
                    },
                  },
                  required: ["careers"],
                  additionalProperties: false,
                },
              },
            },
          ],
          tool_choice: {
            type: "function",
            function: { name: "suggest_careers" },
          },
        }),
      },
    );

    // ── Handle AI gateway errors safely ─────────────────────────────
    if (!response.ok) {
      // Log internally, return generic message to user
      const errorText = await response.text();
      console.error(`AI gateway error: ${response.status} ${errorText}`);

      if (response.status === 429) {
        return safeErrorResponse(
          "Our AI service is busy. Please try again in a moment.",
          429,
        );
      }
      if (response.status === 402) {
        return safeErrorResponse(
          "AI service temporarily unavailable. Please try again later.",
          402,
        );
      }
      return safeErrorResponse("Failed to generate career suggestions", 500);
    }

    const data = await response.json();
    const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
    if (!toolCall) {
      return safeErrorResponse("No suggestions generated", 500);
    }

    let result: unknown;
    try {
      result = JSON.parse(toolCall.function.arguments);
    } catch {
      console.error("Failed to parse AI tool call arguments");
      return safeErrorResponse("Failed to process AI response", 500);
    }

    return jsonResponse(result);
  } catch (e) {
    // Validation errors are safe to show
    if (e instanceof ValidationError) {
      return safeErrorResponse(e.message, 400);
    }
    // Everything else: log internally, return generic message
    console.error("ai-career-suggestions error:", e);
    return safeErrorResponse("An unexpected error occurred", 500);
  }
});
