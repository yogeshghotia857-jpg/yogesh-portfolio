"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Rajesh Salon",
    category: "Full Stack Booking System",
    description:
      "A professional salon booking website where customers can explore salon services and book appointments online.",
    tech: ["React", "Django", "MySQL"],
    live: "https://rajesh-salon.onrender.com",
    github: "https://github.com/yogeshghotia857-jpg/rajesh--salon",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "ZM GROUP",
    category: "Business Website",
    description:
      "A modern business website for ZM GROUP with a professional interface, company information, products and contact sections.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    live: "https://zm-group-website.vercel.app/",
    github: "https://github.com/yogeshghotia857-jpg/zm-group-website",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Wedding Invitation",
    category: "Interactive Invitation",
    description:
      "An elegant digital wedding invitation website with an interactive opening experience and responsive design.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://marriage-card-eta.vercel.app/",
    github: "#",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
  },
];

const skills = [
  { name: "HTML5", level: "Advanced", icon: "🌐" },
  { name: "CSS3", level: "Advanced", icon: "🎨" },
  { name: "JavaScript", level: "Intermediate", icon: "⚡" },
  { name: "React.js", level: "Intermediate", icon: "⚛️" },
  { name: "Next.js", level: "Intermediate", icon: "▲" },
  { name: "Python", level: "Intermediate", icon: "🐍" },
  { name: "Django", level: "Intermediate", icon: "🚀" },
  { name: "MySQL", level: "Intermediate", icon: "🗄️" },
  { name: "Git & GitHub", level: "Intermediate", icon: "🔗" },
  { name: "Tailwind CSS", level: "Intermediate", icon: "💨" },
];

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Modern, responsive and professional websites built for businesses, brands and personal portfolios.",
    icon: "💻",
  },
  {
    number: "02",
    title: "Full Stack Development",
    description:
      "Complete frontend and backend applications with modern technologies and database integration.",
    icon: "⚙️",
  },
  {
    number: "03",
    title: "UI/UX Development",
    description:
      "Clean, premium and user-friendly interfaces focused on a smooth user experience.",
    icon: "✨",
  },
  {
    number: "04",
    title: "Website Deployment",
    description:
      "Deploy websites and applications using GitHub, Vercel and other modern hosting platforms.",
    icon: "🚀",
  },
];

const testimonials = [
  {
    name: "Client Project",
    role: "Business Website",
    text: "Professional design, clean interface and a smooth user experience.",
  },
  {
    name: "Client Project",
    role: "Booking Website",
    text: "The website provides a simple and professional booking experience.",
  },
  {
    name: "Client Project",
    role: "Wedding Invitation",
    text: "A beautiful and interactive digital invitation experience.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* ================= NAVBAR ================= */}

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

          <a
            href="#home"
            onClick={closeMenu}
            className="text-2xl font-black tracking-tight"
          >
            Y<span className="text-cyan-400">.</span>
          </a>

          {/* Desktop Menu */}

          <div className="hidden items-center gap-8 md:flex">

            <a
              href="#home"
              className="text-sm text-gray-300 transition hover:text-cyan-400"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-sm text-gray-300 transition hover:text-cyan-400"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-sm text-gray-300 transition hover:text-cyan-400"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-sm text-gray-300 transition hover:text-cyan-400"
            >
              Projects
            </a>

            <a
              href="#services"
              className="text-sm text-gray-300 transition hover:text-cyan-400"
            >
              Services
            </a>

            <a
              href="#contact"
              className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
            >
              Hire Me
            </a>

          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-xl md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Menu */}

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-white/10 bg-black/95 md:hidden"
            >
              <div className="flex flex-col px-6 py-5">

                <a
                  href="#home"
                  onClick={closeMenu}
                  className="border-b border-white/10 py-4 text-gray-300"
                >
                  Home
                </a>

                <a
                  href="#about"
                  onClick={closeMenu}
                  className="border-b border-white/10 py-4 text-gray-300"
                >
                  About
                </a>

                <a
                  href="#skills"
                  onClick={closeMenu}
                  className="border-b border-white/10 py-4 text-gray-300"
                >
                  Skills
                </a>

                <a
                  href="#projects"
                  onClick={closeMenu}
                  className="border-b border-white/10 py-4 text-gray-300"
                >
                  Projects
                </a>

                <a
                  href="#services"
                  onClick={closeMenu}
                  className="border-b border-white/10 py-4 text-gray-300"
                >
                  Services
                </a>

                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="mt-4 rounded-xl bg-cyan-400 px-5 py-3 text-center font-bold text-black"
                >
                  Hire Me
                </a>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>

      {/* ================= HERO ================= */}

      <section
        id="home"
        className="relative flex min-h-screen items-center px-6 pt-28 lg:px-8"
      >

        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">

          {/* Hero Text */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              Available for Freelance Work
            </div>

            <p className="mb-4 text-lg font-medium text-gray-400">
              Hello, I&apos;m
            </p>

            <h1 className="text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
              Yogesh<span className="text-cyan-400">.</span>
            </h1>

            <h2 className="mt-5 text-2xl font-bold leading-tight text-gray-200 sm:text-3xl">
              Full Stack Web Developer
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              I build modern, responsive and high-performance websites and
              web applications using React, Next.js, Python and Django.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <a
                href="#projects"
                className="rounded-xl bg-cyan-400 px-7 py-4 text-center font-bold text-black transition hover:-translate-y-1 hover:bg-cyan-300"
              >
                View My Work →
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-center font-bold text-white transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10"
              >
                Let&apos;s Talk
              </a>

            </div>

            {/* Social Links */}

            <div className="mt-10 flex items-center gap-4">

              <a
                href="https://github.com/yogeshghotia857-jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-bold transition hover:border-cyan-400/50 hover:text-cyan-400"
              >
                Git
              </a>

              <a
                href="https://www.linkedin.com/in/yogesh-choudhary-21836631a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 font-bold transition hover:border-cyan-400/50 hover:text-cyan-400"
              >
                in
              </a>

              <a
                href="mailto:yogeshdeveloper02@gmail.com"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 font-bold transition hover:border-cyan-400/50 hover:text-cyan-400"
              >
                @
              </a>

            </div>

          </motion.div>

          {/* Developer Card */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative mx-auto w-full max-w-lg"
          >

            <div className="absolute -inset-5 rounded-[2rem] bg-cyan-400/10 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl sm:p-8">

              <div className="mb-6 flex items-center justify-between">

                <span className="text-sm text-gray-400">
                  developer.js
                </span>

                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

              </div>

              <div className="space-y-4 font-mono text-sm leading-7">

                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-300">developer</span> = {"{"}
                </p>

                <p className="pl-5">
                  name:{" "}
                  <span className="text-green-400">
                    &quot;Yogesh&quot;
                  </span>
                  ,
                </p>

                <p className="pl-5">
                  role:{" "}
                  <span className="text-green-400">
                    &quot;Full Stack Developer&quot;
                  </span>
                  ,
                </p>

                <p className="pl-5">
                  skills: [
                  <span className="text-green-400">
                    &quot;React&quot;
                  </span>
                  ,{" "}
                  <span className="text-green-400">
                    &quot;Next.js&quot;
                  </span>
                  ,{" "}
                  <span className="text-green-400">
                    &quot;Python&quot;
                  </span>
                  ]
                </p>

                <p className="pl-5">
                  passion:{" "}
                  <span className="text-green-400">
                    &quot;Building the Web&quot;
                  </span>
                </p>

                <p>{"}"}</p>

              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">

                <div className="rounded-xl border border-white/10 bg-black/30 p-4 text-center">
                  <p className="text-2xl font-black text-cyan-400">
                    3+
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Projects
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/30 p-4 text-center">
                  <p className="text-2xl font-black text-cyan-400">
                    10+
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Skills
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/30 p-4 text-center">
                  <p className="text-2xl font-black text-cyan-400">
                    24/7
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Learning
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="border-t border-white/5 px-6 py-24 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
                About Me
              </p>

              <h2 className="text-4xl font-black sm:text-5xl">
                Turning ideas into
                <span className="text-cyan-400">
                  {" "}digital experiences.
                </span>
              </h2>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-5 text-gray-400"
            >

              <p className="leading-8">
                I&apos;m Yogesh, a Full Stack Web Developer passionate about
                creating modern websites and web applications.
              </p>

              <p className="leading-8">
                I enjoy turning ideas into clean, responsive and functional
                digital products. My focus is on writing maintainable code and
                creating interfaces that provide a great user experience.
              </p>

              <p className="leading-8">
                I&apos;m continuously improving my skills in modern frontend
                technologies, backend development and deployment.
              </p>

            </motion.div>

          </div>

        </div>

      </section>

      {/* ================= SKILLS ================= */}

      <section
        id="skills"
        className="border-t border-white/5 bg-white/[0.015] px-6 py-24 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
              My Skills
            </p>

            <h2 className="text-4xl font-black sm:text-5xl">
              Technologies I Work With
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-400">
              A modern technology stack for creating fast, responsive and
              scalable web applications.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">

            {skills.map((skill, index) => (

              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
              >

                <div className="mb-4 text-3xl">
                  {skill.icon}
                </div>

                <h3 className="font-bold">
                  {skill.name}
                </h3>

                <p className="mt-2 text-xs text-gray-500">
                  {skill.level}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="border-t border-white/5 px-6 py-24 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
                Featured Work
              </p>

              <h2 className="text-4xl font-black sm:text-5xl">
                My Projects
              </h2>

            </div>

            <p className="max-w-md text-gray-400">
              A selection of projects I have built using modern web
              technologies.
            </p>

          </div>

          <div className="grid gap-8 lg:grid-cols-3">

            {projects.map((project, index) => (

              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
              >

                <div className="relative h-56 overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs text-cyan-300 backdrop-blur-md">
                    {project.category}
                  </div>

                </div>

                <div className="p-6">

                  <h3 className="text-2xl font-black">
                    {project.title}
                  </h3>

                  <p className="mt-4 min-h-[80px] text-sm leading-7 text-gray-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">

                    {project.tech.map((tech) => (

                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  <div className="mt-7 flex gap-3">

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-xl bg-cyan-400 px-4 py-3 text-center text-sm font-bold text-black transition hover:bg-cyan-300"
                    >
                      Live Demo ↗
                    </a>

                    {project.github !== "#" ? (

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-bold transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
                      >
                        GitHub ↗
                      </a>

                    ) : (

                      <span className="flex flex-1 cursor-not-allowed items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-bold text-gray-600">
                        GitHub
                      </span>

                    )}

                  </div>

                </div>

              </motion.article>

            ))}

          </div>

        </div>

      </section>

      {/* ================= SERVICES ================= */}

      <section
        id="services"
        className="border-t border-white/5 bg-white/[0.015] px-6 py-24 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
              What I Do
            </p>

            <h2 className="text-4xl font-black sm:text-5xl">
              My Services
            </h2>

          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {services.map((service, index) => (

              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-cyan-400/30"
              >

                <div className="flex items-center justify-between">

                  <span className="text-sm font-bold text-cyan-400">
                    {service.number}
                  </span>

                  <span className="text-3xl">
                    {service.icon}
                  </span>

                </div>

                <h3 className="mt-8 text-xl font-black">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {service.description}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= EDUCATION ================= */}

      <section className="border-t border-white/5 px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>

              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
                Education
              </p>

              <h2 className="mb-8 text-4xl font-black">
                My Journey
              </h2>

              <div className="relative border-l border-cyan-400/30 pl-7">

                <div className="relative">

                  <span className="absolute -left-[35px] top-1 h-4 w-4 rounded-full border-4 border-black bg-cyan-400" />

                  <p className="text-sm text-cyan-400">
                    Current
                  </p>

                  <h3 className="mt-2 text-xl font-bold">
                    Bachelor of Computer Applications
                  </h3>

                  <p className="mt-2 text-gray-400">
                    BCA Student — Building skills in software development
                    and modern web technologies.
                  </p>

                </div>

                <div className="relative mt-10">

                  <span className="absolute -left-[35px] top-1 h-4 w-4 rounded-full border-4 border-black bg-cyan-400" />

                  <p className="text-sm text-cyan-400">
                    Completed
                  </p>

                  <h3 className="mt-2 text-xl font-bold">
                    Higher Secondary Education
                  </h3>

                  <p className="mt-2 text-gray-400">
                    Completed 12th standard and continued towards computer
                    applications and web development.
                  </p>

                </div>

              </div>

            </div>

            {/* Experience */}

            <div>

              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
                Experience
              </p>

              <h2 className="mb-8 text-4xl font-black">
                Development Experience
              </h2>

              <div className="space-y-5">

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <h3 className="text-xl font-bold">
                        Freelance Web Developer
                      </h3>

                      <p className="mt-1 text-sm text-cyan-400">
                        Web Development
                      </p>

                    </div>

                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                      Active
                    </span>

                  </div>

                  <p className="mt-4 leading-7 text-gray-400">
                    Building responsive websites, business websites,
                    portfolio websites and custom web applications.
                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

                  <h3 className="text-xl font-bold">
                    Full Stack Development Learning
                  </h3>

                  <p className="mt-1 text-sm text-cyan-400">
                    React • Python • Django
                  </p>

                  <p className="mt-4 leading-7 text-gray-400">
                    Continuously learning modern frontend and backend
                    technologies while creating real-world projects.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= GITHUB ================= */}

      <section className="border-y border-white/5 bg-white/[0.015] px-6 py-20 lg:px-8">

        <div className="mx-auto max-w-5xl">

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-8 text-center sm:p-12"
          >

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-xl font-bold">
              Git
            </div>

            <h2 className="mt-7 text-3xl font-black sm:text-4xl">
              Check Out My GitHub
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
              Explore my repositories, projects and development work on
              GitHub.
            </p>

            <a
              href="https://github.com/yogeshghotia857-jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-xl bg-cyan-400 px-7 py-4 font-bold text-black transition hover:bg-cyan-300"
            >
              Visit GitHub ↗
            </a>

          </motion.div>

        </div>

      </section>

      {/* ================= TESTIMONIALS ================= */}

      <section className="px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
              Feedback
            </p>

            <h2 className="text-4xl font-black sm:text-5xl">
              Project Experience
            </h2>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {testimonials.map((item, index) => (

              <motion.div
                key={item.name + index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
              >

                <div className="mb-5 text-2xl text-cyan-400">
                  ★★★★★
                </div>

                <p className="leading-7 text-gray-400">
                  &quot;{item.text}&quot;
                </p>

                <div className="mt-7 border-t border-white/10 pt-5">

                  <h3 className="font-bold">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm text-cyan-400">
                    {item.role}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="relative border-t border-white/5 px-6 py-24 lg:px-8"
      >

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[130px]" />

        <div className="relative mx-auto max-w-5xl text-center">

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-4xl font-black sm:text-6xl">
            Let&apos;s Build Something
            <span className="text-cyan-400">
              {" "}Great.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Have a project in mind? Let&apos;s discuss your idea and turn it
            into a professional digital experience.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            {/* Email */}

            <a
              href="mailto:yogeshdeveloper02@gmail.com"
              className="rounded-xl bg-cyan-400 px-7 py-4 font-bold text-black transition hover:bg-cyan-300"
            >
              Email Me
            </a>

            {/* WhatsApp */}

            <a
              href="https://wa.me/916376610702"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-bold transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
            >
              WhatsApp Me
            </a>

            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/yogesh-choudhary-21836631a"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-bold transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
            >
              LinkedIn ↗
            </a>

          </div>

          {/* Contact Information */}

          <div className="mt-12 flex flex-col items-center justify-center gap-3 text-sm text-gray-400 sm:flex-row sm:gap-8">

            <a
              href="mailto:yogeshdeveloper02@gmail.com"
              className="transition hover:text-cyan-400"
            >
              📧 yogeshdeveloper02@gmail.com
            </a>

            <a
              href="https://wa.me/916376610702"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-400"
            >
              📱 +91 6376610702
            </a>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10 px-6 py-8 lg:px-8">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">

          <div>

            <p className="font-bold">
              Yogesh<span className="text-cyan-400">.</span>
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Full Stack Web Developer
            </p>

          </div>

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Yogesh. All rights reserved.
          </p>

          <a
            href="#home"
            className="text-sm text-gray-400 transition hover:text-cyan-400"
          >
            Back to Top ↑
          </a>

        </div>

      </footer>

    </main>
  );
}