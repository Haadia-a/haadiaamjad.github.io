import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Github, Linkedin, FileText, ExternalLink, Menu, X, ArrowRight, MapPin, Hexagon, Orbit } from 'lucide-react'

const navItems = [
  { id: 'intro', label: 'Intro' },
  { id: 'about', label: 'About / Resume' },
  { id: 'papers', label: 'Papers & Links' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
]

const resumeItems = [
  {
    date: '2025 — Present',
    title: 'Your Current Role or Study Program',
    org: 'Organization / University',
    details: 'Describe your focus, responsibilities, research area, or impact in one concise sentence.',
  },
  {
    date: '2024 — 2025',
    title: 'Previous Experience',
    org: 'Company / Lab / Project',
    details: 'Add measurable outcomes where possible: shipped X, researched Y, improved Z.',
  },
  {
    date: '2023',
    title: 'Selected Project',
    org: 'Independent / Coursework',
    details: 'Highlight a project that shows your taste, technical ability, or intellectual curiosity.',
  },
]

const skills = ['Research', 'Writing', 'Data Analysis', 'Web Development', 'Public Speaking', 'Design', 'Python', 'JavaScript']

const papers = [
  {
    type: 'Paper',
    title: 'Example Paper Title Goes Here',
    source: 'Journal / arXiv / Class Paper',
    year: '2026',
    description: 'A short summary of the argument, method, or why this paper matters.',
    url: '#',
  },
  {
    type: 'Article Link',
    title: 'Interesting Article Worth Saving',
    source: 'Publication Name',
    year: '2026',
    description: 'One or two lines explaining why you recommend this link.',
    url: '#',
  },
  {
    type: 'Reading Note',
    title: 'Notes on a Book, Report, or Essay',
    source: 'Personal Notes',
    year: '2025',
    description: 'Use this page as a curated library of ideas you return to often.',
    url: '#',
  },
]

const blogPosts = [
  {
    title: 'My First Blog Post',
    date: 'April 2026',
    tag: 'Personal',
    excerpt: 'A short preview of the post. Write about what you are learning, building, reading, or noticing.',
  },
  {
    title: 'What I’m Reading This Month',
    date: 'April 2026',
    tag: 'Reading',
    excerpt: 'Use blog posts for more personal, exploratory writing than your papers/links section.',
  },
  {
    title: 'Project Notes: Building This Website',
    date: 'April 2026',
    tag: 'Build Log',
    excerpt: 'A behind-the-scenes post about design decisions, tools, and what you want to improve next.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

function AmbientGrid() {
  return (
    <div className="ambient-grid" aria-hidden="true">
      <div className="grid-lines" />
      <motion.div className="glow glow-one" animate={{ scale: [1, 1.15, 1], opacity: [0.16, 0.3, 0.16] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="glow glow-two" animate={{ y: [0, -28, 0], x: [0, -18, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
    </div>
  )
}

function TechOrbit() {
  const nodes = [
    { label: 'WRITE', x: '8%', y: '28%', delay: 0 },
    { label: 'BUILD', x: '72%', y: '18%', delay: 0.4 },
    { label: 'READ', x: '76%', y: '72%', delay: 0.8 },
    { label: 'THINK', x: '12%', y: '74%', delay: 1.2 },
  ]

  return (
    <div className="tech-orbit">
      <motion.div className="orbit-plane" animate={{ rotateX: [58, 64, 58], rotateZ: [0, 360] }} transition={{ rotateZ: { duration: 34, repeat: Infinity, ease: 'linear' }, rotateX: { duration: 8, repeat: Infinity, ease: 'easeInOut' } }}>
        <div className="ring ring-one" />
        <div className="ring ring-two" />
        <div className="axis axis-v" />
        <div className="axis axis-h" />
      </motion.div>

      <motion.div className="core-cube" animate={{ rotateY: [0, 360], rotateX: [8, -8, 8] }} transition={{ rotateY: { duration: 18, repeat: Infinity, ease: 'linear' }, rotateX: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}>
        <div className="cube-inner" />
        <Hexagon className="hex-icon" />
        <motion.div className="pulse-ring" animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.35, 0.75, 0.35] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }} />
      </motion.div>

      <motion.div className="dashed-orbit" animate={{ rotate: 360 }} transition={{ duration: 26, repeat: Infinity, ease: 'linear' }} />

      {nodes.map((node) => (
        <motion.div key={node.label} className="node-chip" style={{ left: node.x, top: node.y }} animate={{ y: [0, -8, 0], opacity: [0.72, 1, 0.72] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: node.delay }}>
          {node.label}
        </motion.div>
      ))}

      <motion.div className="orbit-caption" animate={{ y: [0, 7, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
        <Orbit size={16} /> signal / system / self
      </motion.div>
    </div>
  )
}

function Button({ children, href, variant = 'primary' }) {
  return <a href={href} className={`button ${variant}`}>{children}</a>
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section">
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <motion.p variants={fadeUp} className="eyebrow">{eyebrow}</motion.p>
        <motion.h2 variants={fadeUp} className="section-title">{title}</motion.h2>
        <motion.div variants={fadeUp} className="section-body">{children}</motion.div>
      </motion.div>
    </section>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="navbar">
      <nav className="nav-inner">
        <a href="#intro" className="brand"><span>H</span>Haadia Amjad</a>
        <div className="nav-links">
          {navItems.map((item) => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}
        </div>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X size={22} /> : <Menu size={22} />}</button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
            {navItems.map((item) => <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>{item.label}</a>)}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function Intro() {
  return (
    <section id="intro" className="intro">
      <AmbientGrid />
      <div className="intro-grid">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="intro-copy">
          <motion.div variants={fadeUp} className="status-pill"><span /> Open to opportunities, collaborations, and ideas</motion.div>
          <motion.h1 variants={fadeUp}>Hi, I’m <span>Haadia Amjad</span>.</motion.h1>
          <motion.p variants={fadeUp}>I write, research, and build thoughtful systems. This site is my home for selected work, notes, essays, and projects.</motion.p>
          <motion.div variants={fadeUp} className="button-row">
            <Button href="#about">View my work <ArrowRight size={16} /></Button>
            <Button href="#contact" variant="secondary">Contact me</Button>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
          <TechOrbit />
        </motion.div>
      </div>
    </section>
  )
}

function About() {
  return (
    <Section id="about" eyebrow="About / Resume" title="A resume page that still feels personal.">
      <div className="about-grid">
        <div className="about-copy">
          <p>Write a warm paragraph about who you are, what you care about, and what kind of work you want to be known for. Keep it specific: your field, your questions, your tools, and your style.</p>
          <div className="skills">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          <Button href="#" variant="secondary"><FileText size={16} /> Download resume</Button>
        </div>
        <div className="timeline">
          {resumeItems.map((item, index) => (
            <motion.div key={item.title} className="timeline-item" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
              <span className="timeline-dot" />
              <p className="date">{item.date}</p>
              <h3>{item.title}</h3>
              <p className="org">{item.org}</p>
              <p>{item.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

function Papers() {
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'Paper', 'Article Link', 'Reading Note']
  const visible = useMemo(() => filter === 'All' ? papers : papers.filter((paper) => paper.type === filter), [filter])
  return (
    <Section id="papers" eyebrow="Papers & Links" title="A curated library of papers, articles, and notes.">
      <div className="filters">{filters.map((item) => <button key={item} onClick={() => setFilter(item)} className={filter === item ? 'active' : ''}>{item}</button>)}</div>
      <div className="card-grid">
        {visible.map((item) => (
          <motion.a key={item.title} href={item.url} whileHover={{ y: -6, rotateX: 2, rotateY: -2 }} className="content-card">
            <div className="card-top"><span>{item.type}</span><ExternalLink size={16} /></div>
            <h3>{item.title}</h3>
            <p className="meta">{item.source} · {item.year}</p>
            <p>{item.description}</p>
          </motion.a>
        ))}
      </div>
    </Section>
  )
}

function Blog() {
  return (
    <Section id="blog" eyebrow="Blog" title="Essays, build logs, and reflections.">
      <div className="card-grid">
        {blogPosts.map((post, index) => (
          <motion.article key={post.title} className="content-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} whileHover={{ y: -6 }}>
            <div className="card-top"><span>{post.tag}</span><small>{post.date}</small></div>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <a href="#" className="read-link">Read post <ArrowRight size={16} /></a>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let’s make it easy for people to reach you.">
      <div className="contact-grid">
        <div className="contact-card">
          <a href="mailto:you@example.com"><Mail size={20} /> you@example.com</a>
          <a href="#"><Github size={20} /> GitHub</a>
          <a href="#"><Linkedin size={20} /> LinkedIn</a>
          <p><MapPin size={20} /> City, Country</p>
        </div>
        <form className="contact-card form" onSubmit={(event) => event.preventDefault()}>
          <input placeholder="Your name" />
          <input placeholder="Your email" type="email" />
          <textarea placeholder="Message" />
          <button>Send message</button>
          <p>Connect this form later with Formspree, Basin, Netlify Forms, or your own backend.</p>
        </form>
      </div>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Haadia Amjad. Built with care.</p>
      <div><a href="#intro">Top</a><a href="#papers">Reading</a><a href="#blog">Blog</a></div>
    </footer>
  )
}

export default function App() {
  return (
    <main>
      <Navbar />
      <Intro />
      <About />
      <Papers />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}
