import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Folder,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Images,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import djangoHome from "@/assets/django-home.png";
import djangoCourses from "@/assets/django-courses.png";
import djangoSignedIn from "@/assets/django-signed-in.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Teodora Trendafilova — Software Developer" },
      {
        name: "description",
        content:
          "Portfolio of Teodora Trendafilova, a software developer building web applications and open-source projects.",
      },
      { property: "og:title", content: "Teodora Trendafilova — Software Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of Teodora Trendafilova, a software developer building web applications and open-source projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const GITHUB_USER = "tidorino";
const LINKEDIN = "https://linkedin.com/in/teodora-trendafilovaa";
const EMAIL = "teodoratrendafilova81@gmail.com";

const NAV = [
  { n: "01", label: "About", href: "#about" },
  { n: "02", label: "Experience", href: "#experience" },
  { n: "03", label: "Work", href: "#work" },
  { n: "04", label: "Contact", href: "#contact" },
];

const SKILLS = [
  "Python",
  "Django / FastAPI",
  "PostgreSQL",
  "LangChain / LangGraph",
  "JavaScript",
  "HTML & CSS",
];


const EXPERIENCE = [
  {
    company: "Freelance",
    role: "Software Developer",
    period: "Jun 2023  — Present",
    points: [
      "Built full-stack features for a multi-service trading platform, implementing design patterns ( LLM resolution, state management) to maintain code quality and system reliability.",
      "Integrated with external trading APIs (Binance, Kraken) and managed complex JSON-based data flows between microservices.",
      "Strengthened technical expertise through collaborative remote development on live trading systems, focusing on debugging and edge case handling.",
    ],
  },
  {
    company: "Dynamic Pricing AI",
    role: "Data Workflow Engineer",
    period: "Jan 2025 – Jul 2026",
    points: [
      "Designed and maintained data workflows supporting an AI-driven dynamic pricing platform used by e-commerce clients.",
      "Worked with Python and PostgreSQL to process, validate, and structure high-volume pricing and product data for downstream pricing models, with a focus on data reliability and handling edge cases gracefully.",
      "Collaborated with engineering team members using Git-based version control and code review to improve workflow reliability and data quality in a fast-iterating product environment.",
    ],
  },
];

type FeaturedProject = {
  title: string;
  repo?: string;
  live?: string;
  status?: string;
  description: string;
  tech: string[];
  screenshots?: { src: string; label: string }[];
};

const FEATURED: FeaturedProject[] = [
  {
    title: "Ahead and Up",
    live: "https://ahead-and-up-hub.vercel.app/",
    status: "Project in progress",
    description:
      "A bilingual (Bulgarian/English) website for a non-profit promoting accessible active lifestyles through climbing, sport and youth work. It features a children's climbing league with a searchable, filterable leaderboard, multi-step registration, a live event countdown, and donation, volunteer and contact forms backed by Supabase. Built with React, TypeScript, TanStack Start, Tailwind CSS and shadcn/ui, and deployed on Vercel.",
    tech: [
      "React",
      "TypeScript",
      "TanStack Start",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
    ],
  },
  {
    title: "d-trader",
    repo: "https://github.com/tidorino/-d-trader-portfolio",
    description:
      "AI-powered algorithmic crypto trading platform running unattended against live exchanges. Collects OHLCV candle data from Kraken and Binance, computes technical indicators, evaluates rule-based strategies, and manages the full position lifecycle (entry, trailing stop-loss/take-profit, exit) — with an LLM agent (LangGraph) that writes and validates indicator formulas declared as JSON data, then caches them so every cycle runs deterministic and LLM-free.",
    tech: ["Python", "pandas / pandas-ta", "LangGraph", "Kraken & Binance API"],
  },
  {
    title: "django-courses-app",
    repo: `https://github.com/tidorino/django-courses-app`,
    description:
      "A Django-based LMS platform for instructors to teach and students to learn online — course management, lessons and enrollments end to end.",
    tech: ["Django", "Python", "PostgreSQL"],
    screenshots: [
      { src: djangoHome, label: "Home page" },
      { src: djangoCourses, label: "Course catalog" },
      { src: djangoSignedIn, label: "Course catalog after signing in" },
    ],
  },
  {
    title: "AI Agents & Workflows",
    repo: `https://github.com/tidorino/AI-Agents-and-Workflows`,
    description:
      "A practical course project on designing and implementing AI agents and orchestrations in real-world applications.",
    tech: ["Python", "LLM Agents", "Orchestration"],
  },
];

const OTHER_PROJECTS = [
  {
    title: "MyBlog",
    repoSlug: "MyBlog",
    description:
      "A blog application built on Django for the backend, styled with HTML and CSS.",
    tech: ["Python", "Django"],
  },
  {
    title: "TODO-App",
    repoSlug: "TODO-App-November",
    description: "A JavaScript task manager — simple, fast, no framework.",
    tech: ["JavaScript"],
  },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "bg-dune/85 shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="font-mono text-xl font-bold text-gold">
          T<span className="text-sand-lightest">.</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-sm text-sand-lightest transition-colors hover:text-gold"
            >
              <span className="text-gold">{item.n}.</span> {item.label}
            </a>
          ))}
          <a
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noreferrer"
            className="rounded border border-gold px-4 py-2 font-mono text-sm text-gold transition-colors hover:bg-gold-tint"
          >
            GitHub
          </a>
        </div>
        <button
          className="text-gold md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-dune-lightest bg-dune-light px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm text-sand-lightest"
              >
                <span className="text-gold">{item.n}.</span> {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function SideRails() {
  return (
    <>
      <div className="fixed bottom-0 left-8 z-40 hidden flex-col items-center gap-5 lg:flex">
        <a
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noreferrer"
          className="text-sand transition-all hover:-translate-y-1 hover:text-gold"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          href={LINKEDIN}
          target="_blank"
          rel="noreferrer"
          className="text-sand transition-all hover:-translate-y-1 hover:text-gold"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className="text-sand transition-all hover:-translate-y-1 hover:text-gold"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
        <div className="h-24 w-px bg-sand" />
      </div>
      <div className="fixed right-8 bottom-0 z-40 hidden flex-col items-center gap-5 lg:flex">
        <a
          href={`mailto:${EMAIL}`}
          className="font-mono text-xs tracking-widest text-sand transition-all hover:-translate-y-1 hover:text-gold [writing-mode:vertical-rl]"
        >
          {EMAIL}
        </a>
        <div className="h-24 w-px bg-sand" />
      </div>
    </>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 md:px-10"
    >
      <p className="font-mono text-gold">Hi, my name is</p>
      <h1 className="mt-4 text-4xl font-bold text-sand-lightest sm:text-6xl lg:text-7xl">
        Teodora Trendafilova.
      </h1>
      <h2 className="mt-3 text-3xl font-bold text-sand sm:text-5xl lg:text-6xl">
        I build things for the web.
      </h2>
      <p className="mt-6 max-w-xl text-lg text-sand">
        I'm a software developer who enjoys solving problems
         and turning ideas into working software.
      </p>
      <div className="mt-10">
        <a
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded border border-gold px-7 py-4 font-mono text-sm text-gold transition-colors hover:bg-gold-tint"
        >
          Check out my GitHub
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-24 md:px-10">
      <h2 className="section-heading">
        <span className="font-mono text-xl text-gold">01.</span> About Me
      </h2>
      <div className="mt-10 grid gap-12 md:grid-cols-[3fr_2fr]">
        <div className="space-y-4 text-sand">
          <p>
            Hello! I'm Teodora, a developer who enjoys turning ideas into
            working software.
          </p>
          <p>
             I studied Software Engineering with Python at SoftUni (2021–2023),
            and I'm currently doing their AI & LLM Engineering program (2026–present).
          </p>
          <p>
            Lately I've been focused on Python backend development and AI-driven systems: building data
            pipelines, integrating APIs, and exploring how LLMs and AI agents (LangChain, LangGraph,
            RAG) can solve real problems.
          </p>
          <p>Here are a few technologies I work with:</p>
          <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
            {SKILLS.map((s) => (
              <li key={s} className="flex items-center gap-2">
                <span className="text-gold">▹</span> {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="group relative mx-auto h-fit w-full max-w-xs">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded border-2 border-gold transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
          <div className="relative flex aspect-square items-center justify-center rounded bg-dune-light font-mono text-6xl font-bold text-gold">
            TT
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const [active, setActive] = useState(0);
  const job = EXPERIENCE[active] ?? EXPERIENCE[0]!;

  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-24 md:px-10">
      <h2 className="section-heading">
        <span className="font-mono text-xl text-gold">02.</span> Where I've
        Worked
      </h2>
      <div className="mt-10 flex flex-col gap-8 sm:flex-row">
        <div className="flex overflow-x-auto border-b border-dune-lightest sm:min-w-40 sm:flex-col sm:border-b-0 sm:border-l">
          {EXPERIENCE.map((e, i) => (
            <button
              key={e.company}
              onClick={() => setActive(i)}
              className={`border-l-2 px-5 py-3 text-left font-mono text-sm whitespace-nowrap transition-colors ${
                i === active
                  ? "border-gold bg-dune-light text-gold"
                  : "border-transparent text-sand hover:bg-dune-light hover:text-gold"
              }`}
            >
              {e.company}
            </button>
          ))}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-sand-lightest">
            {job.role}{" "}
            <span className="text-gold">@ {job.company}</span>
          </h3>
          <p className="mt-1 font-mono text-sm text-sand">{job.period}</p>
          <ul className="mt-5 space-y-3">
            {job.points.map((p) => (
              <li key={p} className="flex gap-3 text-sand">
                <span className="mt-1 text-gold">▹</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ScreenshotGallery({ screenshots }: { screenshots: NonNullable<FeaturedProject["screenshots"]> }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const current = screenshots[active] ?? screenshots[0];

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") setActive((index) => (index + 1) % screenshots.length);
      if (event.key === "ArrowLeft") setActive((index) => (index - 1 + screenshots.length) % screenshots.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, screenshots.length]);

  if (!current) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="group relative h-full w-full overflow-hidden rounded bg-dune-light p-0 hover:bg-dune-light focus-visible:ring-2 focus-visible:ring-gold"
          aria-label="View django-courses-app screenshots"
        >
          <img
            src={screenshots[0]?.src}
            alt="django-courses-app home page preview"
            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none"
          />
          <span className="absolute bottom-3 left-3 flex items-center gap-2 rounded bg-dune px-3 py-2 font-mono text-xs text-sand-lightest shadow-lg">
            <Images size={16} /> View screenshots
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="flex max-h-[95dvh] w-[min(96vw,1100px)] max-w-none flex-col gap-3 overflow-hidden border-dune-lightest bg-dune p-3 text-left sm:rounded sm:p-5 [&>button]:z-10 [&>button]:rounded [&>button]:bg-dune-light [&>button]:p-2 [&>button]:text-sand-lightest">
        <DialogTitle className="pr-10 font-mono text-sm text-sand-lightest sm:text-base">
          django-courses-app <span className="text-sand">— {current.label}</span>
        </DialogTitle>
        <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-dune-light">
          <img
            src={current.src}
            alt={`django-courses-app: ${current.label}`}
            className="max-h-[70dvh] w-full object-contain"
          />
          <Button
            variant="secondary"
            size="icon"
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 border border-dune-lightest bg-dune text-gold hover:bg-dune-light"
            onClick={() => setActive((index) => (index - 1 + screenshots.length) % screenshots.length)}
            aria-label="Previous screenshot"
            title="Previous screenshot"
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 border border-dune-lightest bg-dune text-gold hover:bg-dune-light"
            onClick={() => setActive((index) => (index + 1) % screenshots.length)}
            aria-label="Next screenshot"
            title="Next screenshot"
          >
            <ChevronRight />
          </Button>
        </div>
        <div className="flex items-center justify-center gap-2" aria-label="Choose screenshot">
          {screenshots.map((screenshot, index) => (
            <Button
              key={screenshot.src}
              variant="ghost"
              size="icon"
              className={`h-2 w-2 rounded-full p-0 hover:bg-gold ${index === active ? "bg-gold" : "bg-sand"}`}
              onClick={() => setActive(index)}
              aria-label={`Show ${screenshot.label}`}
              aria-current={index === active ? "true" : undefined}
              title={screenshot.label}
            />
          ))}
          <span className="ml-2 font-mono text-xs text-sand">{active + 1} / {screenshots.length}</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Work() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-24 md:px-10">
      <h2 className="section-heading">
        <span className="font-mono text-xl text-gold">03.</span> Some Things
        I've Built
      </h2>

      <div className="mt-14 space-y-24">
        {FEATURED.map((p, i) => (
          <div
            key={p.title}
            className={`relative grid items-center gap-6 md:grid-cols-12 ${
              i % 2 === 1 ? "md:text-left" : "md:text-right"
            }`}
          >
            <div
              className={`relative h-56 rounded bg-dune-light md:h-72 ${
                i % 2 === 1
                  ? "md:col-span-7 md:col-start-6"
                  : "md:col-span-7"
              }`}
            >
              {p.screenshots ? (
                <ScreenshotGallery screenshots={p.screenshots} />
              ) : (
                <div className="flex h-full items-center justify-center font-mono text-4xl text-gold/40">
                  {String(i + 1).padStart(2, "0")}
                </div>
              )}
            </div>
            <div
              className={`md:absolute md:top-1/2 md:-translate-y-1/2 ${
                i % 2 === 1
                  ? "md:left-0 md:w-1/2 md:text-left"
                  : "md:right-0 md:w-1/2 md:text-right"
              }`}
            >
              <p className="font-mono text-sm text-gold">
                {p.status ?? "Featured Project"}
              </p>
              <h3 className="mt-1 text-2xl font-bold text-sand-lightest">
                {p.title}
              </h3>
              <p className="mt-4 rounded bg-dune-light p-5 text-sm text-sand-light shadow-xl">
                {p.description}
              </p>
              <ul
                className={`mt-4 flex flex-wrap gap-4 font-mono text-xs text-sand ${
                  i % 2 === 1 ? "" : "md:justify-end"
                }`}
              >
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div
                className={`mt-4 flex gap-4 ${
                  i % 2 === 1 ? "" : "md:justify-end"
                }`}
              >
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sand-lightest transition-colors hover:text-gold"
                    aria-label="GitHub repository"
                  >
                    <Github size={20} />
                  </a>
                )}
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sand-lightest transition-colors hover:text-gold"
                    aria-label="Live site"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32">
        <h3 className="text-center text-2xl font-bold text-sand-lightest">
          Other Projects
        </h3>
        <p className="mt-2 text-center font-mono text-sm text-gold">
          straight from my GitHub
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {OTHER_PROJECTS.map((p) => (
            <a
              key={p.title}
              href={`https://github.com/tidorino/${p.repoSlug}`}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col rounded bg-dune-light p-6 transition-all hover:-translate-y-2"
            >
              <div className="flex items-center justify-between">
                <Folder size={36} className="text-gold" strokeWidth={1.5} />
                <Github
                  size={20}
                  className="text-sand transition-colors group-hover:text-gold"
                />
              </div>
              <h4 className="mt-5 font-mono text-lg font-semibold text-sand-lightest transition-colors group-hover:text-gold">
                {p.title}
              </h4>
              <p className="mt-2 flex-1 text-sm text-sand">{p.description}</p>
              <ul className="mt-4 flex flex-wrap gap-3 font-mono text-xs text-sand">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-2xl px-6 py-32 text-center md:px-10"
    >
      <p className="font-mono text-gold">04. What's Next?</p>
      <h2 className="mt-4 text-4xl font-bold text-sand-lightest sm:text-5xl">
        Get In Touch
      </h2>
      <p className="mt-6 text-sand">
        I'm always open to new opportunities, collaborations, or just a chat
        about code. My inbox is open — I'll do my best to get back to you!
      </p>
      <a
        href={`mailto:${EMAIL}`}
        className="mt-10 inline-block rounded border border-gold px-8 py-4 font-mono text-sm text-gold transition-colors hover:bg-gold-tint"
      >
        Email Me
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 pb-8 text-center">
      <div className="mb-6 flex justify-center gap-6 lg:hidden">
        <a
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noreferrer"
          className="text-sand hover:text-gold"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          href={LINKEDIN}
          target="_blank"
          rel="noreferrer"
          className="text-sand hover:text-gold"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className="text-sand hover:text-gold"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
      </div>
      <a
        href="https://github.com/bchiang7/v4"
        target="_blank"
        rel="noreferrer"
        className="font-mono text-xs text-sand transition-colors hover:text-gold"
      >
        Design inspired by Brittany Chiang
      </a>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-dune">
      <Header />
      <SideRails />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
