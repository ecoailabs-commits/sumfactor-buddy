import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { SUMFACTOR_SYSTEM_PROMPT } from "./sumfactor-prompt";
import { SUMFACTOR_KNOWLEDGE } from "./sumfactor-knowledge";
import { answerLocally } from "./sumfactor-local-answer";

const schema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().min(1).max(4000),
      }),
    )
    .min(1)
    .max(30),
});

const MODEL = "gemini-2.5-flash";

/**
 * Zero-Lovable-credit chat: talks straight to Google's Gemini free tier with the
 * site owner's own API key, so no Lovable AI Gateway credits are consumed.
 * If no key is configured (or the call fails) it falls back to the fully local,
 * deterministic answer engine so the widget always answers.
 */
export const askSumfactor = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const lastUser =
      [...data.messages].reverse().find((m) => m.role === "user")?.content ?? "";
    const apiKey = process.env["GEMINI_API_KEY"];
    if (!apiKey) {
      return { reply: answerLocally(lastUser), source: "local" as const };
    }

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
        {
          method: "POST",
          headers: {
            "x-goog-api-key": apiKey,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            systemInstruction: {
              parts: [{ text: SUMFACTOR_SYSTEM_PROMPT + SUMFACTOR_KNOWLEDGE }],
            },
            contents: data.messages.map((m) => ({
              role: m.role === "assistant" ? "model" : "user",
              parts: [{ text: m.content }],
            })),
            generationConfig: { temperature: 0.3, maxOutputTokens: 900 },
          }),
        },
      );

      if (!response.ok) {
        console.error(`Gemini request failed [${response.status}]: ${await response.text()}`);
        return { reply: answerLocally(lastUser), source: "local" as const };
      }

      const json = (await response.json()) as {
        candidates?: { content?: { parts?: { text?: string }[] } }[];
      };
      const reply = json.candidates?.[0]?.content?.parts
        ?.map((p) => p.text ?? "")
        .join("")
        .trim();

      if (!reply) return { reply: answerLocally(lastUser), source: "local" as const };
      return { reply, source: "ai" as const };
    } catch (error) {
      console.error(error);
      return { reply: answerLocally(lastUser), source: "local" as const };
    }
  });
