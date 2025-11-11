import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Mail, Phone, Linkedin, MapPin, ArrowDown, ArrowRight, Code2, Paintbrush, Layers, Cpu, Wrench } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const container = {
  hidden: { opacity: 0, y: 12 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' }
  })
}

const SectionTitle = ({ label, sub }) => (
  <div className="mb-8">
    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">{label}</h2>
    {sub && <p className="text-gray-500 mt-2 max-w-2xl">{sub}</p>}
  </div>
)

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-sm text-gray-700 shadow-sm backdrop-blur-sm">{children}</span>
)

function App() {
  const skills = [
    {
      title: 'Languages',
      icon: <Code2 className="h-5 w-5 text-gray-600" />,
      items: ['Java', 'Python', 'C', 'JavaScript']
    },
    {
      title: 'Tools',
      icon: <Wrench className="h-5 w-5 text-gray-600" />,
      items: ['Figma', 'GitHub', 'VS Code']
    },
    {
      title: 'Web Dev',
      icon: <Layers className="h-5 w-5 text-gray-600" />,
      items: ['HTML', 'CSS', 'React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Other',
      icon: <Paintbrush className="h-5 w-5 text-gray-600" />,
      items: ['Data Structures', 'UI/UX Wireframing', 'Event Management']
    }
  ]

  const projects = [
    {
      title: 'MERN Library Management System',
      desc: 'A work-in-progress platform to manage books, members, and lending cycles using the MERN stack.',
      stack: ['MongoDB', 'Express', 'React', 'Node.js'],
      github: '#',
      demo: '#'
    },
    {
      title: 'UI/UX Design Interfaces (Figma)',
      desc: 'High-fidelity prototypes exploring clean, accessible, and modern product flows.',
      stack: ['Figma', 'Design Systems', 'Prototyping'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Academic & Personal Projects',
      desc: 'Aesthetic experiments and course projects blending engineering with design.',
      stack: ['JavaScript', 'React', 'CSS'],
      github: '#',
      demo: '#'
    }
  ]

  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_80%_-10%,#f1f5f9,transparent),radial-gradient(900px_500px_at_-10%_10%,#fafaf9,transparent)] text-gray-900">
      {/* Top Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/60 border-b border-gray-200/60">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-gray-900">Harshal Sukhdare</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#skills" className="hover:text-gray-900 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-gray-900 transition-colors">Experience</a>
            <a href="#education" className="hover:text-gray-900 transition-colors">Education</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-1 rounded-full bg-gray-900 text-white px-4 py-2 text-sm hover:bg-gray-800 transition-colors">Say hello <ArrowRight className="h-4 w-4"/></a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative min-h-[78vh] md:min-h-[86vh] flex items-center">
        {/* Spline cover background */}
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white pointer-events-none" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 w-full">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900"
            >
              Harshal Sukhdare
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl"
            >
              Building meaningful experiences through technology, design & creativity
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-5 py-2.5 text-sm hover:bg-gray-800 transition-colors">
                View Projects <ArrowRight className="h-4 w-4"/>
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/70 px-5 py-2.5 text-sm text-gray-800 hover:bg-white transition-colors">
                Contact Me <ArrowDown className="h-4 w-4"/>
              </a>
            </motion.div>

            <div className="mt-6 flex items-center gap-4 text-gray-500">
              <Badge>Computer Science Engineering Student</Badge>
              <Badge>Full-Stack Developer</Badge>
              <Badge>UI/UX Enthusiast</Badge>
              <Badge>Event Lead</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <SectionTitle label="About" />
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={container}
            className="text-gray-600 leading-relaxed text-lg max-w-3xl"
          >
            “Innovative Computer Science Engineering student passionate about technology, design, and community engagement. Skilled in full-stack development, data structures, UI/UX design, and event leadership. Combines technical expertise with creativity through art-based initiatives and large-scale event coordination.”
          </motion.p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <SectionTitle label="Skills" sub="A balanced blend of engineering, design, and leadership." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((s, idx) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.45 }}
                className="rounded-2xl border border-gray-200 bg-white/70 p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2">
                  {s.icon}
                  <h3 className="font-medium text-gray-900">{s.title}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <Badge key={i}>{i}</Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <SectionTitle label="Projects" sub="Selected work and explorations." />
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((p, idx) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className="group rounded-2xl border border-gray-200 bg-white/70 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-40 bg-gradient-to-br from-slate-100 via-zinc-100 to-stone-100" />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <a href={p.github} className="inline-flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900">
                      <Github className="h-4 w-4" /> GitHub
                    </a>
                    <a href={p.demo} className="inline-flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900">
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <SectionTitle label="Experience" />
          <div className="space-y-4">
            {[
              {
                role: 'Creative Head – Lead Ventures',
                time: '2023–Present',
                desc: 'Managed brand identity, posters, banners and marketing designs for large events.'
              },
              {
                role: 'Core Member – Entrepreneurship Cell (E-Cell)',
                time: '',
                desc: 'Organized flagship events, sponsorships & creative campaigns.'
              },
              {
                role: 'Event Coordinator – Hack With India 2025',
                time: '',
                desc: 'Coordinated a 1000+ attendee event, handling communication, stage setup & design.'
              },
              {
                role: 'Social Initiatives Volunteer',
                time: '',
                desc: 'Contributed to art drives and social awareness initiatives.'
              }
            ].map((e, i) => (
              <motion.div
                key={e.role}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.45 }}
                className="rounded-2xl border border-gray-200 bg-white/70 p-5 shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h3 className="font-medium text-gray-900">{e.role}</h3>
                  {e.time && <span className="text-sm text-gray-500">{e.time}</span>}
                </div>
                <p className="mt-2 text-gray-600">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <SectionTitle label="Education" />
          <div className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">B.Tech in Computer Science Engineering</h3>
            <p className="text-gray-600 mt-1">Bharati Vidyapeeth Deemed University (2024–Present)</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <SectionTitle label="Contact" sub="Let’s collaborate or just say hello." />
          <div className="grid md:grid-cols-2 gap-6">
            <motion.a
              href="mailto:harshalsukhdare28@gmail.com"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-200 bg-white/70 p-5 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3"
            >
              <Mail className="h-5 w-5 text-gray-600" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-gray-800">harshalsukhdare28@gmail.com</p>
              </div>
            </motion.a>
            <motion.a
              href="tel:8976301280"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-200 bg-white/70 p-5 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3"
            >
              <Phone className="h-5 w-5 text-gray-600" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-gray-800">8976301280</p>
              </div>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/harshal-sukhdare-06460434a"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-200 bg-white/70 p-5 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3"
            >
              <Linkedin className="h-5 w-5 text-gray-600" />
              <div>
                <p className="text-sm text-gray-500">LinkedIn</p>
                <p className="text-gray-800">linkedin.com/in/harshal-sukhdare-06460434a</p>
              </div>
            </motion.a>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-200 bg-white/70 p-5 shadow-sm flex items-center gap-3"
            >
              <MapPin className="h-5 w-5 text-gray-600" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-gray-800">Andheri East, Mumbai</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200/70">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Harshal Sukhdare. All rights reserved.</p>
          <div className="flex items-center gap-4 text-gray-600">
            <a href="#home" className="text-sm hover:text-gray-900">Top</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-gray-900"><Github className="h-5 w-5"/></a>
            <a href="https://linkedin.com/in/harshal-sukhdare-06460434a" target="_blank" rel="noreferrer" className="hover:text-gray-900"><Linkedin className="h-5 w-5"/></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
