import { useEffect, useMemo, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { MessageSquare, X, Send, Loader2 } from "lucide-react";
import { askSumfactor } from "@/lib/sumfactor-chat.functions";
import { answerLocally } from "@/lib/sumfactor-local-answer";
import { cn } from "@/lib/utils";



type ChatMessage = { role: "user" | "assistant"; content: string };

const GREETING: ChatMessage = {
  role: "assistant",
  content:
    "Hi! I'm the Sumfactor assistant. Ask me about our services, projects and case studies, technologies or how we can help your business.\n\nWhat would you like to know?",
};

const SUGGESTIONS = [
  "What services does Sumfactor offer?",
  "Show me your projects",
  "Tell me about the logistics fleet project",
  "I need a mobile app — can you help?",
];

/** Minimal, safe markdown-ish renderer: headings, bold, bullets and links. */
function renderInline(text: string, keyPrefix: string) {
  const parts = text
    .split(/(\*{1,2}[^*\s][^*\n]*\*{1,2}|https?:\/\/[^\s)]+)/g)
    .filter((p) => p !== "" && p !== undefined);
  return parts.map((part, i) => {
    const key = `${keyPrefix}-${i}`;
    if (/^https?:\/\//.test(part)) {
      return (
        <a
          key={key}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-accent underline underline-offset-2 break-all"
        >
          {part}
        </a>
      );
    }
    const emphasis = part.match(/^\*{1,2}([^*\n]+?)\*{1,2}$/);
    if (emphasis) {
      return (
        <strong key={key} className="font-semibold">
          {emphasis[1]}
        </strong>
      );
    }
    return <span key={key}>{part}</span>;
  });

}

function MessageBody({ content }: { content: string }) {
  const lines = content.split("\n");
  return (
    <div className="space-y-1.5 text-sm leading-relaxed">
      {lines.map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={i} className="h-1" />;
        if (trimmed.startsWith("###")) {
          return (
            <h3 key={i} className="pt-1 text-base font-semibold tracking-tight">
              {renderInline(trimmed.replace(/^#+\s*/, ""), `h${i}`)}
            </h3>
          );
        }
        if (/^[-•*]\s/.test(trimmed)) {
          return (
            <div key={i} className="flex gap-2 pl-1">
              <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-accent" />
              <span>{renderInline(trimmed.replace(/^[-•*]\s+/, ""), `b${i}`)}</span>
            </div>
          );
        }
        return <p key={i}>{renderInline(trimmed, `p${i}`)}</p>;
      })}
    </div>
  );
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading, open]);

  const showSuggestions = useMemo(() => messages.length === 1 && !loading, [messages, loading]);

  function send(text: string) {
    const content = text.trim();
    if (!content || loading) return;
    const next = [...messages, { role: "user" as const, content }];
    setMessages(next);
    setInput("");
    setLoading(true);
    // Answered entirely on-device — no API calls, no credits consumed.
    const reply = answerLocally(content);
    window.setTimeout(() => {
      setMessages([...next, { role: "assistant", content: reply }]);
      setLoading(false);
    }, 250);
  }


  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close Sumfactor chat" : "Chat with Sumfactor"}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow transition-transform hover:scale-105 active:scale-95"
      >
        {open ? <X className="size-6" /> : <MessageSquare className="size-6" />}
      </button>

      <div
        className={cn(
          "fixed bottom-24 right-5 z-50 flex w-[calc(100vw-2.5rem)] max-w-[400px] origin-bottom-right flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-panel transition-all duration-200",
          open
            ? "pointer-events-auto h-[min(600px,calc(100vh-8rem))] scale-100 opacity-100"
            : "pointer-events-none h-0 scale-95 opacity-0",
        )}
      >
        <header className="flex items-center gap-3 border-b border-border bg-surface px-4 py-3">
          <span className="inline-flex size-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
            S
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-foreground">Sumfactor Assistant</p>
            <p className="truncate text-xs text-muted-foreground">
              Products · Services · Projects
            </p>
          </div>
        </header>

        <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
          {messages.map((m, i) => (
            <div
              key={i}
              className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}
            >
              <div
                className={cn(
                  "max-w-[88%] rounded-2xl px-3.5 py-2.5",
                  m.role === "user"
                    ? "rounded-br-sm bg-primary text-primary-foreground"
                    : "rounded-bl-sm bg-surface text-foreground",
                )}
              >
                <MessageBody content={m.content} />
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="inline-flex items-center gap-2 rounded-2xl rounded-bl-sm bg-surface px-3.5 py-2.5 text-sm text-muted-foreground">
                <Loader2 className="size-4 animate-spin" />
                Thinking…
              </div>
            </div>
          )}

          {showSuggestions && (
            <div className="flex flex-wrap gap-2 pt-1">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => send(s)}
                  className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="flex items-center gap-2 border-t border-border bg-surface px-3 py-3"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about services or projects…"
            aria-label="Message"
            className="min-w-0 flex-1 rounded-full border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-accent"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            aria-label="Send message"
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity disabled:opacity-40"
          >
            <Send className="size-4" />
          </button>
        </form>
      </div>
    </>
  );
}
