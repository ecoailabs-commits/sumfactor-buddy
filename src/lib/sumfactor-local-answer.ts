// Zero-credit answer engine: runs fully in the browser with no AI API calls.
// All content is verified from https://sumfactor.com/ — nothing is invented.

export type Project = {
  name: string;
  industry: string;
  summary: string;
  tech: string[];
  url: string;
  keywords: string[];
};

export const PROJECTS: Project[] = [
  {
    name: "AKM Academy",
    industry: "Education",
    summary:
      "Volunteer tutoring organization offering free sessions to inspire and empower students worldwide; the platform connects passionate teachers with eager learners.",
    tech: ["Web App", "Next.js", "Vapor", "REST API"],
    url: "https://sumfactor.com/project/akm-innovative-online-learning/",
    keywords: ["education", "learning", "e-learning", "tutoring", "lms", "school", "student", "akm"],
  },
  {
    name: "Sonoma Valley Transport (SVT)",
    industry: "Logistics",
    summary:
      "Logistics platform with real-time tracking, route optimization and dispatch management for fleets operating in California, improving delivery precision and operational efficiency.",
    tech: ["Web App", "Next.js", "Vapor", "REST API"],
    url: "https://sumfactor.com/project/revolutionizing-logistics-with-smart-fleet-solutions/",
    keywords: [
      "logistics",
      "fleet",
      "transport",
      "dispatch",
      "route",
      "tracking",
      "svt",
      "sonoma",
      "trucking",
      "supply chain",
    ],
  },
  {
    name: "SuttaBazaar",
    industry: "Smoke Shop / E-commerce",
    summary:
      "Vape and smoke accessories online store with easy product browsing, shopping and doorstep delivery, with a modern UX for adult users across India.",
    tech: ["WordPress", "WooCommerce"],
    url: "https://sumfactor.com/project/discover-premium-smoking-essentials-at-sutta-bazaar/",
    keywords: ["ecommerce", "e-commerce", "store", "shop", "woocommerce", "wordpress", "sutta"],
  },
  {
    name: "Mubarkaan",
    industry: "Fashion",
    summary:
      "Ethnic fashion brand showcasing modern Indian couture; the website combines product discovery, customization options and online purchases in an elegant layout.",
    tech: ["WordPress", "WooCommerce"],
    url: "https://sumfactor.com/project/mubarkaanstore-modern-indian-ethnic-wear-men-usa/",
    keywords: ["fashion", "clothing", "ethnic", "apparel", "ecommerce", "mubarkaan", "retail"],
  },
  {
    name: "Choji's Genie",
    industry: "Grocery",
    summary:
      "Local grocery delivery platform focused on speed, variety and real-time stock visibility, including address pinning, cart management and secure checkout.",
    tech: ["React.js", "Vapor", "Web App", "Android", "iOS"],
    url: "https://sumfactor.com/project/chojis-genie-fast-grocery-delivery-real-time-stock/",
    keywords: ["grocery", "delivery", "quick commerce", "choji", "genie", "food"],
  },
  {
    name: "Birth Control Pill Application (PREV)",
    industry: "Healthcare",
    summary:
      "Patented algorithm to track the birth control cycle, Stripe subscription-based payments, launched in 11 countries with full localization.",
    tech: ["iOS", "Android", "NodeJS", "Stripe"],
    url: "https://sumfactor.com/project/prev-smart-birth-control-app-cycle-tracking/",
    keywords: [
      "healthcare",
      "health",
      "medical",
      "cycle",
      "birth control",
      "prev",
      "subscription",
      "stripe",
      "localization",
    ],
  },
  {
    name: "LabNear: Find Labs Near You",
    industry: "Medical",
    summary:
      "At-home Covid testing with an admin panel and Lab Management System (LMS) for seamless operations and user management.",
    tech: ["iOS", "Android", "NodeJS"],
    url: "https://sumfactor.com/project/labnear-at-home-covid-testing/",
    keywords: ["lab", "labnear", "covid", "testing", "medical", "healthcare", "admin panel"],
  },
  {
    name: "Golf Mind Body",
    industry: "Fitness",
    summary:
      "Golf performance app with subscriptions, podcast and Apple Watch sync, helping golfers elevate focus and wellness.",
    tech: ["iOS", "Apple Watch", "Podcast"],
    url: "https://sumfactor.com/project/golf-mind-body-golf-performance-app/",
    keywords: ["golf", "fitness", "sport", "wearable", "apple watch", "wellness", "podcast"],
  },
  {
    name: "IFE: In-Flight Entertainment",
    industry: "Aviation",
    summary:
      "Flight-based Android in-flight entertainment system used by SpiceJet Airlines in India, with synchronized entertainment across all seat devices; won global awards.",
    tech: ["Android", "IFE"],
    url: "https://sumfactor.com/project/ife-in-flight-entertainment/",
    keywords: ["aviation", "airline", "flight", "entertainment", "ife", "spicejet", "android"],
  },
  {
    name: "Book Airport Cab",
    industry: "Travel",
    summary:
      "Book a guaranteed cab from your flight — a 100% assurance system kept in sync with SpiceJet Airlines.",
    tech: ["Cab Booking", "Flight Sync", "Web App"],
    url: "https://sumfactor.com/project/book-airport-cab-spicejet-cab-booking-app/",
    keywords: ["cab", "taxi", "travel", "airport", "booking", "ride", "spicejet"],
  },
];

export const SERVICES = [
  {
    name: "UI/UX Design",
    summary:
      "Boosts usability and crafts memorable experiences with user-centric design.",
    url: "https://sumfactor.com/PossibleTogether/ui-ux-design-services/",
    keywords: ["ui", "ux", "design", "usability", "wireframe", "prototype", "figma"],
  },
  {
    name: "IT Team Scaling",
    summary:
      "On-demand tech talent that fits your goals — skilled professionals integrate with your existing team without permanent hiring.",
    url: "https://sumfactor.com/PossibleTogether/it-team-scaling/",
    keywords: ["team", "scaling", "staff", "hiring", "developers", "resource", "augmentation"],
  },
  {
    name: "Mobile Apps",
    summary:
      "Mobile app development for platforms including iOS and Android — user-centric, high-performance apps.",
    url: "https://sumfactor.com/PossibleTogether/mobile-app-services/",
    keywords: ["mobile", "app", "ios", "android", "iphone", "flutter", "react native"],
  },
  {
    name: "Web Solutions",
    summary:
      "Scalable, secure, high-performance websites and web applications tailored to business goals.",
    url: "https://sumfactor.com/PossibleTogether/web-solutions/",
    keywords: ["web", "website", "web app", "portal", "frontend", "backend", "wordpress"],
  },
  {
    name: "Custom Software",
    summary:
      "Bespoke software to streamline processes and solve unique business challenges.",
    url: "https://sumfactor.com/PossibleTogether/custom-software-services-2/",
    keywords: ["custom", "software", "bespoke", "erp", "crm", "automation", "saas"],
  },
  {
    name: "Digital Marketing",
    summary:
      "Marketing strategy and SEO, social media presence and online campaigns that improve reach, traffic and conversions.",
    url: "https://sumfactor.com/PossibleTogether/digital-marketing-service/",
    keywords: ["marketing", "seo", "social media", "ads", "campaign", "traffic", "leads"],
  },
];

const CONTACT_BLOCK = [
  "**Talk to the team**",
  "- Email: info@sumfactor.com",
  "- Phone: +91 83606 80236",
  "- Contact form: https://sumfactor.com/contact-us/",
].join("\n");

function normalize(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9+#.\s]/g, " ");
}

function has(q: string, ...terms: string[]) {
  return terms.some((t) => q.includes(t));
}

function projectCard(p: Project) {
  return [
    `**${p.name}** — ${p.industry}`,
    p.summary,
    `- Technologies: ${p.tech.join(", ")}`,
    `- View Details → ${p.url}`,
  ].join("\n");
}

function scoreProjects(q: string) {
  return PROJECTS.map((p) => {
    let score = 0;
    if (q.includes(normalize(p.name).trim())) score += 6;
    for (const k of p.keywords) if (q.includes(k)) score += 2;
    if (q.includes(p.industry.toLowerCase())) score += 3;
    for (const t of p.tech) if (q.includes(t.toLowerCase())) score += 1;
    return { p, score };
  })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score);
}

function scoreServices(q: string) {
  return SERVICES.map((s) => {
    let score = 0;
    if (q.includes(s.name.toLowerCase())) score += 5;
    for (const k of s.keywords) if (q.includes(k)) score += 2;
    return { s, score };
  })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score);
}

/** Fully local, deterministic answer generation — no AI credits consumed. */
export function answerLocally(question: string): string {
  const q = normalize(question);

  if (!q.trim()) {
    return "Ask me about Sumfactor's services, projects, technologies or how to get in touch.";
  }

  if (has(q, "hi", "hello", "hey", "good morning", "good evening") && q.length < 25) {
    return "Hello! I can help with Sumfactor's services, project case studies, technologies and company details.\n\nWhat would you like to explore?";
  }

  if (has(q, "price", "pricing", "cost", "quote", "budget", "rate", "charge", "how much")) {
    return [
      "Sumfactor doesn't publish fixed pricing on the website — every engagement is scoped individually.",
      "",
      "Your estimate depends on:",
      "- Scope and feature set",
      "- Complexity and integrations",
      "- Platforms (web, iOS, Android)",
      "- Timeline",
      "",
      "The team shares a customized estimate once they understand your requirements.",
      "",
      CONTACT_BLOCK,
    ].join("\n");
  }

  if (has(q, "contact", "email", "phone", "call", "reach", "get in touch", "talk to")) {
    return ["Here's how to reach Sumfactor:", "", CONTACT_BLOCK].join("\n");
  }

  if (has(q, "office", "location", "where are you", "address", "based", "headquart")) {
    return [
      "Sumfactor operates from two international locations:",
      "- Chandigarh, India",
      "- New Jersey, USA",
      "",
      "Office visits can be scheduled — https://sumfactor.com/contact-us/",
    ].join("\n");
  }

  const strongContentMatch =
    Math.max(scoreProjects(q)[0]?.score ?? 0, scoreServices(q)[0]?.score ?? 0) >= 4;

  if (
    !strongContentMatch &&
    has(
      q,
      "about sumfactor",
      "about the company",
      "about you",
      "who are you",
      "your company",
      "history",
      "founded",
      "established",
      "leadership",
      "core values",
      "mission",
      "vision",
      "ceo",
      "director",
    )
  ) {

    return [
      "**About Sumfactor** — tagline: *Possible Together!*",
      "- Custom software and mobile app development company, established in 2019.",
      "- A strategic development hub helping startups scale and enterprises innovate.",
      "- Offices in Chandigarh, India and New Jersey, USA.",
      "- Core values: Transparency, Quality, Innovation.",
      "- Leadership: Sukhdev S. Chadda (Director), Ajay Sharma (CEO), Rohit Thakur (Tech Lead).",
      "- Agile delivery, rigorous testing and a dedicated QA team.",
      "",
      "More: https://sumfactor.com/about-us/",
    ].join("\n");
  }

  if (has(q, "quality", "qa", "testing", "process", "methodology", "agile", "how do you work")) {
    return [
      "**How Sumfactor delivers quality**",
      "- Agile development methodologies",
      "- Rigorous testing throughout the lifecycle",
      "- A dedicated QA team",
      "- Transparent communication with clients involved at every stage",
      "",
      "More in the FAQ: https://sumfactor.com/faq/",
    ].join("\n");
  }

  if (has(q, "faq", "questions")) {
    return "You can browse all frequently asked questions here: https://sumfactor.com/faq/\n\nOr ask me directly about services, projects, locations or getting started.";
  }

  if (has(q, "insight", "article", "blog")) {
    return "Sumfactor publishes articles on the Insights page: https://sumfactor.com/insights/";
  }

  if (has(q, "start", "get started", "begin", "hire", "work with", "engage", "proposal")) {
    return [
      "Getting started is simple — reach out through the contact form or a phone call, share your goals, and the team maps out scope, platforms and timeline.",
      "",
      CONTACT_BLOCK,
    ].join("\n");
  }

  const projectMatches = scoreProjects(q);
  const serviceMatches = scoreServices(q);

  const asksProjects = has(q, "project", "case study", "case studies", "portfolio", "work", "built", "clients", "example");
  const asksServices = has(q, "service", "services", "offer", "capabilit", "do you do", "help me", "can you build", "need");

  if (asksProjects && projectMatches.length === 0) {
    return [
      "**Sumfactor project case studies**",
      "",
      ...PROJECTS.map((p) => `- **${p.name}** (${p.industry}) — View Details → ${p.url}`),
      "",
      "Ask about any one of these and I'll share the details, or see https://sumfactor.com/projects/",
    ].join("\n");
  }

  if (asksServices && serviceMatches.length === 0) {
    return [
      "**Sumfactor services**",
      "",
      ...SERVICES.map((s) => `- **${s.name}** — ${s.summary}\n  ${s.url}`),
      "",
      "Tell me a bit about your product idea and I'll point you to the closest fit.",
    ].join("\n");
  }

  if (projectMatches.length && projectMatches[0]!.score >= (serviceMatches[0]?.score ?? 0)) {
    const top = projectMatches.slice(0, 3);
    const lines = [
      top.length > 1
        ? "Here are the closest Sumfactor case studies:"
        : "Here's the relevant Sumfactor case study:",
      "",
      ...top.map((r) => projectCard(r.p)),
    ];
    if (serviceMatches.length) {
      lines.push("", `Related service: **${serviceMatches[0]!.s.name}** — ${serviceMatches[0]!.s.url}`);
    }
    lines.push("", "Want a similar build? " + CONTACT_BLOCK);
    return lines.join("\n");
  }

  if (serviceMatches.length) {
    const top = serviceMatches.slice(0, 3);
    const lines = ["Here's what fits your question:", ""];
    for (const r of top) {
      lines.push(`**${r.s.name}**`, r.s.summary, `- Learn more → ${r.s.url}`, "");
    }
    const related = scoreProjects(q).slice(0, 2);
    if (related.length) {
      lines.push("Related work:", ...related.map((r) => `- **${r.p.name}** → ${r.p.url}`), "");
    }
    lines.push(CONTACT_BLOCK);
    return lines.join("\n");
  }

  return [
    "I don't have verified information about that in Sumfactor's website content, so I'd rather not guess.",
    "",
    "I can help with:",
    "- Services: UI/UX Design, Mobile Apps, Web Solutions, Custom Software, IT Team Scaling, Digital Marketing",
    "- 10 project case studies across logistics, healthcare, education, e-commerce, aviation and more",
    "- Company details, locations, process and how to get started",
    "",
    "For anything else, the team can answer directly:",
    CONTACT_BLOCK,
  ].join("\n");
}
