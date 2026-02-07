import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { interests, workStyle, values, environment, existingCareerIds } = await req.json();

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
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
${existingCareerIds?.length ? `Already have these career IDs (do not repeat similar titles): ${existingCareerIds.slice(0, 30).join(", ")}` : ""}

Suggest 6 real career roles at the intersection of these interests.`;

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
                description: "Return 6 career suggestions at the intersection of the student's interests.",
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
                            description: "kebab-case unique ID, e.g. clinical-data-manager",
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
                            description: "Brief explanation of why this career matches the student's interests",
                          },
                        },
                        required: [
                          "id",
                          "title",
                          "description",
                          "demand",
                          "growthRate",
                          "salaryRange",
                          "education",
                          "tags",
                          "whyMatch",
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
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({
            error: "Rate limit exceeded. Please try again in a moment.",
          }),
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({
            error: "AI credits exhausted. Please add credits to continue.",
          }),
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "Failed to generate career suggestions" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const data = await response.json();

    // Extract tool call result
    const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
    if (!toolCall) {
      return new Response(
        JSON.stringify({ error: "No suggestions generated" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const result = JSON.parse(toolCall.function.arguments);

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("ai-career-suggestions error:", e);
    return new Response(
      JSON.stringify({
        error: e instanceof Error ? e.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
