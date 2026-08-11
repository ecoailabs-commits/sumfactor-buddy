import { createFileRoute } from "@tanstack/react-router";
import { ChatWidget } from "@/components/ChatWidget";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sumfactor AI Assistant — Services, Projects & Case Studies" },
      {
        name: "description",
        content:
          "Ask the Sumfactor AI assistant about our software services, mobile apps, web solutions and project case studies. Verified answers straight from sumfactor.com.",
      },
      { property: "og:title", content: "Sumfactor AI Assistant" },
      {
        property: "og:description",
        content:
          "Chat with Sumfactor's official assistant about services, projects, technologies and how we can help your business.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SERVICES = [
  { name: "UI/UX Design", url: "https://sumfactor.com/PossibleTogether/ui-ux-design-services/" },
  { name: "Mobile Apps", url: "https://sumfactor.com/PossibleTogether/mobile-app-services/" },
  { name: "Web Solutions", url: "https://sumfactor.com/PossibleTogether/web-solutions/" },
  {
    name: "Custom Software",
    url: "https://sumfactor.com/PossibleTogether/custom-software-services-2/",
  },
  { name: "IT Team Scaling", url: "https://sumfactor.com/PossibleTogether/it-team-scaling/" },
  {
    name: "Digital Marketing",
    url: "https://sumfactor.com/PossibleTogether/digital-marketing-service/",
  },
];

function Index() {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <section className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center sm:py-32">
        <span className="rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Possible Together
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Sumfactor AI Assistant
        </h1>
        <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
          Ask anything about Sumfactor's services, products, projects and case studies. Answers come
          only from verified sumfactor.com content — with a direct link to the exact page.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {SERVICES.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:border-accent"
            >
              {s.name}
            </a>
          ))}
        </div>

        <p className="mt-12 text-sm text-muted-foreground">
          Tap the chat button in the corner to start — or reach us at{" "}
          <a
            href="mailto:info@sumfactor.com"
            className="font-medium text-accent underline underline-offset-4"
          >
            info@sumfactor.com
          </a>
        </p>
      </section>
      </main>
      <ChatWidget />
    </>
  );
}
