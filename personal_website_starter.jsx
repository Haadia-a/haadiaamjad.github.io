import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, FileText, ExternalLink, Menu, X, ArrowRight, MapPin, Hexagon, Orbit, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const navItems = [
  { id: "intro", label: "Intro" },
  { id: "about", label: "About / Resume" },
  { id: "papers", label: "Papers & Links" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const resumeItems = [
  {
    date: "2025 — Present",
    title: "Your Current Role or Study Program",
    org: "Organization / University",
    details: "Describe your focus, responsibilities, research area, or impact in one concise sentence.",
  },
  {
    date: "2024 — 2025",
    title: "Previous Experience",
    org: "Company / Lab / Project",
    details: "Add measurable outcomes where possible: shipped X, researched Y, improved Z.",
  },
  {
    date: "2023",
    title: "Selected Project",
    org: "Independent / Coursework",
    details: "Highlight a project that shows your taste, technical ability, or intellectual curiosity.",
  },
];

const skills = ["Research", "Writing", "Data Analysis", "Web Development", "Public Speaking", "Design", "Python", "JavaScript"];

const papers = [
  {
    type: "Paper",
    title: "Example Paper Title Goes Here",
    source: "Journal / arXiv / Class Paper",
    year: "2026",
    description: "A short summary of the argument, method, or why this paper matters.",
    url: "#",
  },
  {
    type: "Article Link",
    title: "Interesting Article Worth Saving",
    source: "Publication Name",
    year: "2026",
    description: "One or two lines explaining why you recommend this link.",
    url: "#",
  },
  {
    type: "Reading Note",
    title: "Notes on a Book, Report, or Essay",
    source: "Personal Notes",
    year: "2025",
    description: "Use this page as a curated library of ideas you return to often.",
    url: "#",
  },
];

const blogPosts = [
  {
    title: "My First Blog Post",
    date: "April 2026",
    tag: "Personal",
    excerpt: "A short preview of the post. Write about what you are learning, building, reading, or noticing.",
  },
  {
    title: "What I’m Reading This Month",
    date: "April 2026",
    tag: "Reading",
    excerpt: "Use blog posts for more personal, exploratory writing than your papers/links section.",
  },
  {
    title: "Project Notes: Building This Website",
    date: "April 2026",
    tag: "Build Log",
    excerpt: "A behind-the-scenes post about design decisions, tools, and what you want to improve next.",
  },
];

function AmbientGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.055)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(circle_at_center,black,transparent_74%)]" />
      <motion.div
        className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.16, 0.3, 0.16] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10rem] right-[-4rem] h-[30rem] w-[30rem] rounded-full bg-indigo-500/10 blur-3xl"
        animate={{ y: [0, -28, 0], x: [0, -18, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function TechOrbit() {
  const nodes = [
    { label: "WRITE", x: "8%", y: "28%", delay: 0 },
    { label: "BUILD", x: "72%", y: "18%", delay: 0.4 },
    { label: "READ", x: "76%", y: "72%", delay: 0.8 },
    { label: "THINK", x: "12%", y: "74%", delay: 1.2 },
  ];

  return (
    <div className="relative mx-auto aspect-square max-w-[31rem] [perspective:1100px]">
      <motion.div
        className="absolute inset-6 rounded-[2.2rem] border border-violet-300/20 bg-slate-950/70 shadow-2xl shadow-violet-950/40 backdrop-blur"
        animate={{ rotateX: [58, 64, 58], rotateZ: [0, 360] }}
        transition={{ rotateZ: { duration: 34, repeat: Infinity, ease: "linear" }, rotateX: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-10 rounded-full border border-violet-300/20" />
        <div className="absolute inset-20 rounded-full border border-indigo-300/20" />
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-violet-300/30 to-transparent" />
        <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-violet-300/30 to-transparent" />
      </motion.div>

      <motion.div
        className="absolute inset-[22%] grid place-items-center rounded-[1.8rem] border border-violet-200/30 bg-gradient-to-br from-slate-900 via-violet-950/80 to-slate-950 shadow-2xl shadow-violet-900/35"
        animate={{ rotateY: [0, 360], rotateX: [8, -8, 8] }}
        transition={{ rotateY: { duration: 18, repeat: Infinity, ease: "linear" }, rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-3 rounded-[1.4rem] border border-white/10" />
        <Hexagon className="h-20 w-20 text-violet-200/80" />
        <motion.div
          className="absolute h-24 w-24 rounded-full border border-violet-300/30"
          animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.35, 0.75, 0.35] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div
        className="absolute inset-[10%] rounded-full border border-dashed border-violet-300/25"
        animate={{ rotate: 360 }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      />

      {nodes.map((node) => (
        <motion.div
          key={node.label}
          className="absolute rounded-2xl border border-violet-300/20 bg-slate-950/80 px-3 py-2 text-[0.68rem] font-medium tracking-[0.22em] text-violet-100 shadow-lg shadow-violet-950/40 backdrop-blur"
          style={{ left: node.x, top: node.y }}
          animate={{ y: [0, -8, 0], opacity: [0.72, 1, 0.72] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: node.delay }}
        >
          {node.label}
        </motion.div>
      ))}

      <motion.div
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-violet-300/20 bg-slate-950/80 px-4 py-2 text-xs text-violet-100/80 backdrop-blur"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Orbit className="h-4 w-4" /> signal / system / self
      </motion.div>
    </div>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.p variants={fadeUp} className="mb-3 text-sm font-medium uppercase tracking-[0.28em] text-violet-300/70">
          {eyebrow}
        </motion.p>
        <motion.h2 variants={fadeUp} className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
          {title}
        </motion.h2>
        <motion.div variants={fadeUp} className="mt-10">
          {children}
        </motion.div>
      </motion.div>
    </section>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-violet-200/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#intro" className="group flex items-center gap-2 font-semibold text-slate-50">
          <span className="grid h-9 w-9 place-items-center rounded-2xl border border-violet-300/20 bg-violet-400/10 text-violet-100 shadow-sm shadow-violet-950/40 transition group-hover:rotate-6">Y</span>
          <span>Your Name</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="rounded-full px-4 py-2 text-sm text-slate-400 transition hover:bg-violet-400/10 hover:text-violet-100">
              {item.label}
            </a>
          ))}
        </div>

        <button className="rounded-xl p-2 text-slate-100 md:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-violet-200/10 bg-slate-950 md:hidden"
          >
            <div className="mx-auto grid max-w-6xl gap-1 px-5 py-4">
              {navItems.map((item) => (
                <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-slate-300 hover:bg-violet-400/10">
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Intro() {
  return (
    <section id="intro" className="relative isolate min-h-screen overflow-hidden px-5 pt-32 sm:px-8">
      <AmbientGrid />
      <div className="mx-auto grid max-w-6xl items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="relative z-10">
          <motion.div variants={fadeUp} className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-slate-950/60 px-4 py-2 text-sm text-slate-300 shadow-sm shadow-violet-950/30 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_18px_rgba(196,181,253,0.85)]" />
            Open to opportunities, collaborations, and ideas
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-5xl font-semibold tracking-tight text-slate-50 sm:text-7xl">
            Hi, I’m <span className="bg-gradient-to-r from-white via-violet-200 to-indigo-300 bg-clip-text text-transparent">Your Name</span>.
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            I write, research, and build thoughtful systems. This site is my home for selected work, notes, essays, and projects.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="rounded-2xl bg-violet-200 px-6 py-6 text-base text-slate-950 hover:bg-violet-100">
              <a href="#about">View my work <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <Button asChild variant="outline" className="rounded-2xl border-violet-300/20 bg-slate-950/30 px-6 py-6 text-base text-violet-100 hover:bg-violet-400/10 hover:text-white">
              <a href="#contact">Contact me</a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <TechOrbit />
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About / Resume" title="A resume page that still feels personal.">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6 text-slate-400">
          <p className="text-lg leading-8">
            Write a warm paragraph about who you are, what you care about, and what kind of work you want to be known for. Keep it specific: your field, your questions, your tools, and your style.
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-violet-300/15 bg-violet-300/5 px-4 py-2 text-sm text-violet-100 shadow-sm">
                {skill}
              </span>
            ))}
          </div>
          <Button asChild variant="outline" className="rounded-2xl border-violet-300/20 bg-slate-950/30 text-violet-100 hover:bg-violet-400/10 hover:text-white">
            <a href="#" aria-label="Download resume"><FileText className="mr-2 h-4 w-4" /> Download resume</a>
          </Button>
        </div>

        <div className="relative border-l border-violet-300/15 pl-6">
          {resumeItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="relative mb-8 last:mb-0"
            >
              <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-violet-200 ring-4 ring-slate-950" />
              <p className="text-sm text-violet-300/60">{item.date}</p>
              <h3 className="mt-1 text-xl font-semibold text-slate-50">{item.title}</h3>
              <p className="mt-1 text-slate-400">{item.org}</p>
              <p className="mt-3 leading-7 text-slate-400">{item.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Papers() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Paper", "Article Link", "Reading Note"];
  const visible = useMemo(() => filter === "All" ? papers : papers.filter((paper) => paper.type === filter), [filter]);

  return (
    <Section id="papers" eyebrow="Papers & Links" title="A curated library of papers, articles, and notes.">
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`rounded-full px-4 py-2 text-sm transition ${filter === item ? "bg-violet-200 text-slate-950" : "border border-violet-300/15 bg-slate-950/40 text-slate-400 hover:bg-violet-400/10 hover:text-violet-100"}`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {visible.map((item) => (
          <motion.a
            key={item.title}
            href={item.url}
            whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
            className="group block rounded-[1.5rem] border border-violet-300/15 bg-slate-950/55 p-6 shadow-sm shadow-violet-950/30 backdrop-blur transition hover:border-violet-200/30 hover:shadow-xl hover:shadow-violet-950/40"
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="rounded-full bg-violet-300/10 px-3 py-1 text-xs font-medium text-violet-100">{item.type}</span>
              <ExternalLink className="h-4 w-4 text-slate-500 transition group-hover:text-violet-100" />
            </div>
            <h3 className="text-xl font-semibold text-slate-50">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-500">{item.source} · {item.year}</p>
            <p className="mt-4 leading-7 text-slate-400">{item.description}</p>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

function Blog() {
  return (
    <Section id="blog" eyebrow="Blog" title="Essays, build logs, and reflections.">
      <div className="grid gap-5 md:grid-cols-3">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="rounded-[1.5rem] border border-violet-300/15 bg-slate-950/55 p-6 shadow-sm shadow-violet-950/30 backdrop-blur"
          >
            <div className="mb-8 flex items-center justify-between text-sm text-slate-500">
              <span className="rounded-full bg-violet-300/10 px-3 py-1 text-violet-100">{post.tag}</span>
              <span>{post.date}</span>
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-slate-50">{post.title}</h3>
            <p className="mt-4 leading-7 text-slate-400">{post.excerpt}</p>
            <a href="#" className="mt-6 inline-flex items-center text-sm font-medium text-violet-100">
              Read post <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let’s make it easy for people to reach you.">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Card className="rounded-[1.5rem] border-violet-300/15 bg-slate-950/55 shadow-sm shadow-violet-950/30 backdrop-blur">
          <CardContent className="space-y-5 p-6">
            <a href="mailto:you@example.com" className="flex items-center gap-3 text-slate-300 hover:text-violet-100"><Mail className="h-5 w-5" /> you@example.com</a>
            <a href="#" className="flex items-center gap-3 text-slate-300 hover:text-violet-100"><Github className="h-5 w-5" /> GitHub</a>
            <a href="#" className="flex items-center gap-3 text-slate-300 hover:text-violet-100"><Linkedin className="h-5 w-5" /> LinkedIn</a>
            <p className="flex items-center gap-3 text-slate-300"><MapPin className="h-5 w-5" /> City, Country</p>
          </CardContent>
        </Card>

        <Card className="rounded-[1.5rem] border-violet-300/15 bg-slate-950/55 shadow-sm shadow-violet-950/30 backdrop-blur">
          <CardContent className="p-6">
            <form className="grid gap-4" onSubmit={(event) => event.preventDefault()}>
              <input className="rounded-2xl border border-violet-300/15 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-violet-200/40" placeholder="Your name" />
              <input className="rounded-2xl border border-violet-300/15 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-violet-200/40" placeholder="Your email" type="email" />
              <textarea className="min-h-36 rounded-2xl border border-violet-300/15 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-violet-200/40" placeholder="Message" />
              <Button className="rounded-2xl bg-violet-200 py-6 text-base text-slate-950 hover:bg-violet-100">Send message</Button>
              <p className="text-sm text-slate-500">Connect this form later with Formspree, Basin, Netlify Forms, or your own backend.</p>
            </form>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-violet-300/10 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-slate-500 sm:flex-row">
        <p>© 2026 Your Name. Built with care.</p>
        <div className="flex gap-4">
          <a href="#intro" className="hover:text-violet-100">Top</a>
          <a href="#papers" className="hover:text-violet-100">Reading</a>
          <a href="#blog" className="hover:text-violet-100">Blog</a>
        </div>
      </div>
    </footer>
  );
}

export default function PersonalWebsite() {
  return (
    <main className="min-h-screen scroll-smooth bg-slate-950 text-slate-50 selection:bg-violet-200 selection:text-slate-950">
      <Navbar />
      <Intro />
      <About />
      <Papers />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
