import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { SUMFACTOR_SYSTEM_PROMPT } from "./sumfactor-prompt";

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

export const askSumfactor = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) {
      return { reply: "The assistant is not configured yet. Please try again later." };
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [{ role: "system", content: SUMFACTOR_SYSTEM_PROMPT }, ...data.messages],
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error(`AI gateway failed [${response.status}]: ${body}`);
      if (response.status === 429) {
        return { reply: "I'm getting a lot of questions right now. Please try again in a moment." };
      }
      return {
        reply:
          "Something went wrong on my side. You can reach the Sumfactor team directly at info@sumfactor.com or https://sumfactor.com/contact-us/",
      };
    }

    const json = (await response.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const reply = json.choices?.[0]?.message?.content?.trim();
    return {
      reply:
        reply ||
        "I don't have verified information about that in Sumfactor's current website content.",
    };
  });
