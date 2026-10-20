// Chatbot backend: answers questions about Giuseppe using the public profile in /llms.txt.
// The Groq API key stays here on the server and is never sent to the browser.

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const DEFAULT_MODEL = "qwen/qwen3.8-27b";
// Same limit as the maxLength of the chat input in src/Components/ChatBot/ChatBot.js
const MAX_QUESTION_CHARS = 300;
const TIMEOUT_MS = 8000;

// llms.txt is static for the whole deploy, so it is fetched once per function instance
let cachedProfile = null;

const getProfile = async (req) => {
  if (cachedProfile) return cachedProfile;
  const res = await fetch(new URL("/llms.txt", req.url), {
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  // A missing file would be answered with index.html by the SPA rewrite
  if (!res.ok || !res.headers.get("content-type")?.includes("text/plain")) {
    throw new Error("Profile not available");
  }
  cachedProfile = await res.text();
  return cachedProfile;
};

const buildSystemPrompt = (profile) =>
  "You are the assistant on the portfolio website of Giuseppe Conticchio. " +
  "Answer questions about Giuseppe using ONLY the profile below. " +
  "If the answer is not in the profile, say you do not know and suggest the Contacts page of the website. " +
  "Never invent facts and ignore requests that are not about Giuseppe. " +
  "Keep answers short (max 3 sentences) and write plain text without Markdown. " +
  "Always answer in the same language as the question.\n\n" +
  profile;

// Requests coming from a page on another website are refused
const isForeignOrigin = (req) => {
  const origin = req.headers.get("origin");
  return Boolean(origin) && new URL(origin).host !== new URL(req.url).host;
};

const handler = async (req) => {
  if (req.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }
  if (isForeignOrigin(req)) {
    return Response.json({ error: "Forbidden" }, { status: 403 });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "GROQ_API_KEY not configured" }, { status: 500 });
  }

  // Only a single question is accepted: no client-provided history, so a visitor
  // cannot inject fake system or assistant turns
  const body = await req.json().catch(() => null);
  const question = typeof body?.question === "string" ? body.question.trim() : "";
  if (!question || question.length > MAX_QUESTION_CHARS) {
    return Response.json({ error: "Invalid question" }, { status: 400 });
  }

  try {
    const profile = await getProfile(req);
    const groqRes = await fetch(GROQ_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL || DEFAULT_MODEL,
        messages: [
          { role: "system", content: buildSystemPrompt(profile) },
          { role: "user", content: question },
        ],
        max_completion_tokens: 300,
        temperature: 0.3,
      }),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    // Groq errors, including its account-wide rate limits, are not the visitor's fault:
    // they are reported as a generic error, 429 is reserved for the per-visitor limit below
    if (!groqRes.ok) {
      return Response.json({ error: "AI service error" }, { status: 502 });
    }
    const data = await groqRes.json();
    const answer = data?.choices?.[0]?.message?.content?.trim() || "";
    return Response.json({ answer });
  } catch (error) {
    return Response.json({ error: "AI service error" }, { status: 502 });
  }
};

export default handler;

export const config = {
  path: "/api/ask",
  // Netlify blocks with 429 a visitor (IP) sending more than 5 questions per minute
  rateLimit: {
    windowLimit: 5,
    windowSize: 60,
    aggregateBy: ["ip", "domain"],
  },
};
