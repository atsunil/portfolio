import { useEffect, useState } from "react"

/* ------------------------------------------------------------------ */
/* real data — Sunil A                                                 */
/* ------------------------------------------------------------------ */

const ME = {
  name: "Sunil A",
  role: "DevOps · AI enthusiast",
  location: "Kavuthampalayam, Tiruppur, Tamil Nadu",
  email: "atsunil049@gmail.com",
  bio: "I build and automate the boring, breakable parts of software so the good ideas can ship without drama. Lately I'm deep into where AI actually earns its place in an engineering workflow — and when the terminal goes quiet, I'm behind the decks as sunil.vox.",
}

const SOCIALS = [
  { label: "GitHub", handle: "@atsunil", href: "https://github.com/atsunil" },
  {
    label: "LinkedIn",
    handle: "Sunil A",
    href: "https://www.linkedin.com/in/sunil-a-9b268028b/",
  },
  {
    label: "Instagram",
    handle: "@sunil.vox",
    href: "https://www.instagram.com/sunil.vox/",
  },
]

const NAV = [
  { label: "Intro", href: "#intro" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Learn", href: "#learn" },
  { label: "Contact", href: "#contact" },
]

const SKILLS = [
  { group: "Languages", items: ["Python", "JavaScript", "C"], color: "bg-acid" },
  { group: "Frameworks", items: ["uv"], color: "bg-hot text-paper" },
  {
    group: "Tools",
    items: ["Git", "Figma", "Docker", "Claude Code"],
    color: "bg-volt text-paper",
  },
  { group: "Also into", items: ["UI/UX", "DJ"], color: "bg-yolk" },
]

const TICKER = [
  "PYTHON",
  "◆",
  "DOCKER",
  "◆",
  "AI WORKFLOWS",
  "◆",
  "UI/UX",
  "◆",
  "DJ SET",
  "◆",
  "AUTOMATE EVERYTHING",
  "◆",
]

// Placeholders — swap with your real projects any time.
const WORK = [
  {
    no: "01",
    title: "Add a project",
    kind: "Placeholder",
    blurb:
      "Drop your first real project here — a name, one or two sentences, and the tech you used. Ideal for a CI/CD or automation build.",
    tags: ["DevOps", "Docker"],
    accent: "bg-acid",
  },
  {
    no: "02",
    title: "Add a project",
    kind: "Placeholder",
    blurb:
      "A great slot for something AI-flavoured — a script, an agent, a model experiment. Show what problem it solved.",
    tags: ["Python", "AI"],
    accent: "bg-hot",
  },
  {
    no: "03",
    title: "Add a project",
    kind: "Placeholder",
    blurb:
      "Something design- or web-oriented works well here — a UI/UX piece or a small tool built with JavaScript.",
    tags: ["JavaScript", "UI/UX"],
    accent: "bg-volt",
  },
]

/* ------------------------------------------------------------------ */
/* reveal-on-scroll                                                    */
/* ------------------------------------------------------------------ */

function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"))
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in")
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/* ------------------------------------------------------------------ */
/* bits                                                                */
/* ------------------------------------------------------------------ */

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border-2 border-ink px-2 py-1 font-mono text-[11px] font-bold uppercase tracking-wide">
      {children}
    </span>
  )
}

/* Vertical spine — fixed rail on the left (desktop only). */
function Spine() {
  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-full w-16 flex-col items-center justify-between border-r-[3px] border-ink bg-ink py-6 text-paper lg:flex">
      <a href="#intro" className="brutal grid size-10 place-items-center bg-acid font-display text-xl text-ink">
        S
      </a>
      <div
        className="font-display text-sm uppercase tracking-[0.4em]"
        style={{ writingMode: "vertical-rl" }}
      >
        Sunil A — DevOps × AI × Beats
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="size-2 animate-blink rounded-full bg-acid" />
        <span className="font-mono text-[9px] uppercase" style={{ writingMode: "vertical-rl" }}>
          open
        </span>
      </div>
    </aside>
  )
}

function TopBar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-cream/90 backdrop-blur-sm lg:pl-16">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#intro" className="font-mono text-sm font-bold uppercase tracking-widest">
          sunil<span className="text-hot">.</span>a
          <span className="ml-2 hidden text-ink/50 sm:inline">// portfolio</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="brutal-press px-3 py-2 font-mono text-xs font-bold uppercase tracking-wide transition-colors hover:bg-ink hover:text-acid"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          className="brutal brutal-press grid size-9 place-items-center bg-paper md:hidden"
          aria-label="Menu"
        >
          <span className="font-display leading-none">{open ? "×" : "≡"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t-[3px] border-ink bg-cream md:hidden">
          <div className="flex flex-col gap-2 px-4 py-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="brutal bg-paper px-4 py-3 font-mono text-sm font-bold uppercase"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

/* Bento-grid hero — a distinctly different arrangement. */
function Intro() {
  return (
    <section id="intro" className="grid-paper">
      <div className="mx-auto max-w-5xl px-4 py-12 md:px-8 md:py-16">
        <div className="grid auto-rows-[minmax(0,auto)] gap-4 md:grid-cols-3">
          {/* name — big cell */}
          <div className="reveal brutal bg-paper p-6 md:col-span-2 md:p-10">
            <span className="brutal inline-block bg-acid px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider">
              {ME.role}
            </span>
            <h1 className="mt-5 font-display text-[16vw] uppercase leading-[0.8] md:text-[7rem]">
              Sunil
              <span className="block text-outline">A</span>
            </h1>
            <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-ink/80 md:text-lg">
              {ME.bio}
            </p>
          </div>

          {/* right column stack */}
          <div className="flex flex-col gap-4">
            <div className="reveal brutal bg-hot p-6 text-paper">
              <div className="font-mono text-xs font-bold uppercase tracking-widest">
                Based in
              </div>
              <div className="mt-2 font-display text-2xl uppercase leading-none">
                Tiruppur
              </div>
              <div className="mt-2 font-mono text-xs leading-snug text-paper/80">
                {ME.location}
              </div>
            </div>

            <a
              href="#contact"
              className="reveal brutal brutal-hover brutal-press grid flex-1 place-items-center bg-ink p-6 text-center text-acid"
            >
              <span>
                <span className="font-display text-3xl uppercase leading-none">
                  Let's talk
                </span>
                <span className="mt-2 block font-mono text-xs uppercase tracking-widest">
                  → say hi
                </span>
              </span>
            </a>
          </div>

          {/* social row — three even cells */}
          {SOCIALS.map((s, i) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className={`reveal brutal brutal-hover brutal-press flex items-center justify-between p-5 ${
                i === 0 ? "bg-volt text-paper" : i === 1 ? "bg-yolk" : "bg-mint"
              }`}
            >
              <span>
                <span className="block font-display text-xl uppercase leading-none">
                  {s.label}
                </span>
                <span className="mt-1 block font-mono text-xs">{s.handle}</span>
              </span>
              <span className="font-display text-2xl">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Diagonal ticker. */
function Ticker() {
  const row = [...TICKER, ...TICKER]
  return (
    <div className="relative overflow-hidden border-y-[3px] border-ink bg-acid py-3 lg:ml-16">
      <div className="marquee overflow-hidden">
        <div className="marquee-track animate-marquee-rev">
          {row.map((t, i) => (
            <span
              key={i}
              className={`mx-4 font-display text-xl uppercase md:text-2xl ${
                t === "◆" ? "text-hot" : ""
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function Skills() {
  return (
    <section id="skills" className="dot-paper border-t-[3px] border-ink bg-paper">
      <div className="mx-auto max-w-5xl px-4 py-14 md:px-8 md:py-20">
        <div className="reveal mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl uppercase md:text-6xl">
            What I<br />
            <span className="bg-ink px-2 text-acid">work with</span>
          </h2>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-ink/60">
            // stack &amp; craft
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {SKILLS.map((s, i) => (
            <div
              key={s.group}
              className={`reveal brutal brutal-hover ${s.color} p-6`}
              style={{ transitionDelay: `${(i % 2) * 80}ms` }}
            >
              <div className="mb-4 font-mono text-xs font-bold uppercase tracking-widest">
                {s.group}
              </div>
              <div className="flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span
                    key={it}
                    className="brutal bg-paper px-3 py-1 font-display text-lg uppercase text-ink"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Work() {
  return (
    <section id="work" className="border-t-[3px] border-ink bg-cream">
      <div className="mx-auto max-w-5xl px-4 py-14 md:px-8 md:py-20">
        <div className="reveal mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl uppercase md:text-6xl">
            Selected<br />
            <span className="text-outline">work</span>
          </h2>
          <span className="brutal inline-block bg-yolk px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider rotate-2">
            edit these ✎
          </span>
        </div>

        <div className="space-y-5">
          {WORK.map((w) => (
            <article
              key={w.no}
              className="reveal brutal brutal-hover group grid gap-4 bg-paper p-6 md:grid-cols-[auto_1fr_auto] md:items-center md:p-8"
            >
              <span className={`brutal ${w.accent} grid size-14 place-items-center font-display text-2xl`}>
                {w.no}
              </span>
              <div>
                <div className="font-mono text-xs font-bold uppercase tracking-widest text-ink/50">
                  {w.kind}
                </div>
                <h3 className="mt-1 font-display text-2xl uppercase leading-none md:text-3xl">
                  {w.title}
                </h3>
                <p className="mt-2 max-w-2xl font-sans leading-relaxed text-ink/80">
                  {w.blurb}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {w.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
              <span className="hidden font-display text-4xl transition-transform group-hover:translate-x-1 md:block">
                →
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Education card. */
function Learn() {
  return (
    <section id="learn" className="border-t-[3px] border-ink bg-ink text-paper">
      <div className="mx-auto max-w-5xl px-4 py-14 md:px-8 md:py-20">
        <div className="reveal grid gap-6 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div>
            <span className="brutal inline-block bg-acid px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-ink">
              Education
            </span>
            <h2 className="mt-4 font-display text-4xl uppercase leading-[0.9] md:text-6xl">
              Currently<br />
              <span className="text-outline-white">leveling up</span>
            </h2>
          </div>
          <div className="brutal bg-paper p-6 text-ink md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div className="font-display text-3xl uppercase leading-none">
                B.Sc. Computer Science
              </div>
              <span className="brutal shrink-0 bg-hot px-3 py-1 font-mono text-sm font-bold text-paper">
                2026
              </span>
            </div>
            <div className="mt-4 border-t-[3px] border-ink pt-4 font-mono text-sm uppercase tracking-wide">
              VET Institute of Arts &amp; Science
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="border-t-[3px] border-ink bg-acid">
      <div className="mx-auto max-w-5xl px-4 py-20 md:px-8 md:py-28">
        <div className="reveal text-center">
          <p className="font-mono text-sm font-bold uppercase tracking-widest">
            Got a project, a role, or just want to talk shop?
          </p>
          <h2 className="mt-5 font-display text-[13vw] uppercase leading-[0.82] md:text-[7rem]">
            Let's build
            <span className="block text-outline">something</span>
          </h2>
        </div>

        <div className="reveal mx-auto mt-10 flex max-w-xl flex-col gap-4">
          <a
            href={`mailto:${ME.email}`}
            className="brutal brutal-hover brutal-press bg-ink px-6 py-5 text-center font-mono text-base font-bold uppercase tracking-wide text-acid"
          >
            {ME.email}
          </a>
          <div className="grid gap-4 sm:grid-cols-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="brutal brutal-hover brutal-press bg-paper px-4 py-4 text-center font-mono text-sm font-bold uppercase tracking-wide"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t-[3px] border-ink bg-ink py-6 text-paper lg:pl-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 font-mono text-xs uppercase tracking-wide md:flex-row md:px-8">
        <span>© {new Date().getFullYear()} Sunil A — Tiruppur, TN</span>
        <span>
          Built neo-brutalist · <span className="text-acid">acid green</span>
        </span>
      </div>
    </footer>
  )
}

/* ------------------------------------------------------------------ */

export default function App() {
  useReveal()
  return (
    <div className="grain min-h-full">
      <Spine />
      <TopBar />
      <main className="lg:pl-16">
        <Intro />
        <Ticker />
        <Skills />
        <Work />
        <Learn />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
