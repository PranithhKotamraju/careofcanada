"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const communityPreviewPosts = [
  {
    name: "Sai",
    city: "Brampton",
    text: "Got my first interview after 3 months 🎉",
    points: 120,
  },
  {
    name: "Priya",
    city: "Mississauga",
    text: "Any tips for finding a basement near transit?",
    points: 45,
  },
  {
    name: "Kiran",
    city: "Toronto",
    text: "Passed my G2 today 🚗",
    points: 80,
  },
];

const navLinks = [
  ["Home", "#home"],
  ["First 30 Days", "/first-30-days"],
  ["Resources", "#resources"],
  ["Videos", "#videos"],
  ["Community 🍁127", "/community"],
  ["Partners", "/community-partners"],
  ["About", "#about"],
];

const stats = [
  ["6.6K+", "Instagram Followers"],
  ["82K+", "Monthly Views"],
  ["200+", "YouTube Subscribers"],
];

const tools = [
  ["📋", "First 30 Days Checklist", "SIN, bank account, phone plan, health card, resume and basic setup.", "/first-30-days"],
  ["💰", "Cost Calculator", "Estimate rent, groceries, phone, transit and monthly survival cost.", ""],
  ["💼", "Job Tracker", "Track job applications, interview status and follow-up dates.", ""],
];

const resources = [
  ["Resume Template", "Simple Canadian-style resume guidance for newcomers."],
  ["Interview Questions", "Common questions and calm preparation tips."],
  ["Newcomer Links", "Important official links for first 30–60 days."],
  ["Money Basics", "Budgeting, credit score and survival cost basics."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#fff8f5] via-[#fff4ef] to-[#fdeee8] text-[#251010]">
      <div className="pointer-events-none absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-red-200/40 blur-3xl" />
      <div className="pointer-events-none absolute right-[-140px] top-[520px] h-96 w-96 rounded-full bg-orange-100/70 blur-3xl" />
      <div className="pointer-events-none absolute bottom-80 left-[-140px] h-96 w-96 rounded-full bg-red-100/70 blur-3xl" />

      <nav className="sticky top-0 z-50 border-b border-[#ead7cf] bg-[#fff8f5]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#home" className="leading-tight">
            <h1 className="text-lg font-bold text-red-600 sm:text-xl">
              🍁 CareOfCanada
            </h1>
            <p className="text-xs text-[#5c4b4b]">Telugu Newcomer Hub</p>
          </a>

          <div className="hidden items-center gap-1 text-sm font-semibold md:flex">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className={`rounded-full px-4 py-2 transition ${
                  label.includes("Community")
                    ? "bg-red-50 text-red-600"
                    : "text-[#3a1515] hover:bg-red-50 hover:text-red-600"
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <motion.img
              whileHover={{ scale: 1.08, rotate: 2 }}
              src="/images/aj4.png"
              alt="Ajith"
              className="h-10 w-10 rounded-full border-2 border-red-600 object-cover"
            />

            <a
              href="https://www.instagram.com/mcajith8"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-xl bg-red-600 px-5 py-2 font-semibold text-white shadow-sm transition hover:bg-red-700 hover:shadow-md md:block"
            >
              Meet Ajith
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-3xl md:hidden"
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-[#ead7cf] bg-[#fff8f5] px-4 py-4 md:hidden"
          >
            <div className="flex flex-col gap-2 text-sm font-semibold">
              {navLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 ${
                    label.includes("Community")
                      ? "bg-red-600 text-white"
                      : "hover:bg-red-50"
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      <section id="home" className="relative z-10 px-4 py-10 sm:px-6 sm:py-14">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <img src="/images/cocaj.jpg" alt="" className="w-[850px] opacity-[0.04]" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[1fr_360px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.55 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              The Telugu Newcomer Hub 🇨🇦
              <span className="block text-red-600">
                Jobs. Housing. Money. Community.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#5c4b4b] lg:mx-0">
              Everything you need to start your Canada journey.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <motion.a
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                href="/first-30-days"
                className="rounded-xl bg-red-600 px-6 py-3 text-center font-semibold text-white shadow-sm hover:bg-red-700"
              >
                Start Your Journey
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                href="#resources"
                className="rounded-xl border border-[#ead7cf] bg-white/70 px-6 py-3 text-center font-semibold text-[#3a1515] hover:bg-white"
              >
                Explore Resources
              </motion.a>
            </div>

            <motion.div
              whileHover={{ y: -4 }}
              className="mx-auto mt-6 max-w-lg rounded-2xl border border-[#ead7cf] bg-white/80 p-5 shadow-md backdrop-blur lg:mx-0"
            >
              <h3 className="text-2xl font-bold">Join the Community 🇨🇦</h3>
              <p className="mt-2 text-[#5c4b4b]">Jobs. Money. Settlement.</p>
              <div className="ml-embedded mt-5" data-form="QVxZ18"></div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-red-900/40 bg-gradient-to-b from-[#3a1515] via-[#251010] to-[#140909] p-5 text-white shadow-[0_20px_50px_rgba(220,38,38,0.18)]"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-red-400">
                  Community Preview 🍁
                </p>
                <h3 className="mt-2 text-2xl font-bold">Telugu Newcomer Wall</h3>
              </div>

              <span className="shrink-0 rounded-full bg-red-600 px-3 py-1 text-sm font-semibold">
                127 members
              </span>
            </div>

            <div className="mt-4 space-y-3">
              {communityPreviewPosts.map((post, index) => (
                <motion.div
                  key={post.name}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="rounded-2xl border border-red-900/40 bg-[#1b0f0f] p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-600 font-bold">
                      {post.name.charAt(0)}
                    </div>

                    <div>
                      <p className="font-semibold">{post.name}</p>
                      <p className="text-xs text-red-100/60">{post.city}</p>
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-red-50">{post.text}</p>

                  <p className="mt-3 text-sm text-red-400">
                    🍁 {post.points} Maple Points
                  </p>
                </motion.div>
              ))}
            </div>

            <a
              href="/community"
              className="mt-4 block rounded-xl bg-red-600 px-5 py-3 text-center font-semibold text-white hover:bg-red-700"
            >
              View Community Wall
            </a>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="grid gap-4 text-center sm:grid-cols-3">
          {stats.map(([number, label], index) => (
            <motion.div
              key={label}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-2xl border border-[#ead7cf] bg-white/75 p-5 shadow-sm backdrop-blur"
            >
              <h3 className="text-4xl font-bold text-red-600">{number}</h3>
              <p className="mt-2 text-sm font-medium text-[#5c4b4b]">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="tools" className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Tools for your first steps in Canada
        </h2>

        <div className="grid gap-5 md:grid-cols-3">
          {tools.map(([icon, title, text, href], index) => (
            <motion.div
              key={title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-[#ead7cf] bg-white/75 p-6 shadow-sm backdrop-blur hover:shadow-xl"
            >
              <div className="mb-4 text-4xl">{icon}</div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-2 leading-7 text-[#5c4b4b]">{text}</p>

              {href && (
                <a
                  href={href}
                  className="mt-5 inline-block rounded-xl bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-700"
                >
                  Open Checklist
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <section id="resources" className="relative z-10 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl rounded-3xl border border-[#ead7cf] bg-white/55 p-5 shadow-sm backdrop-blur sm:p-8">
          <h2 className="mb-8 text-center text-3xl font-bold">Free Resources</h2>

          <div className="grid gap-5 md:grid-cols-2">
            {resources.map(([title, text], index) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-[#ead7cf] bg-white/80 p-6 shadow-sm hover:shadow-lg"
              >
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-2 leading-7 text-[#5c4b4b]">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="videos" className="relative z-10 mx-auto max-w-5xl px-4 py-12 text-center sm:px-6 sm:py-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold">Latest Videos</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#5c4b4b]">
            Watch CareOfCanada Telugu guidance on Instagram and YouTube.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://www.instagram.com/careofcanada"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
            >
              Watch on Instagram
            </a>

            <a
              href="https://www.youtube.com/@careofcanadaTV"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-[#ead7cf] bg-white/70 px-6 py-3 font-semibold text-[#3a1515] hover:bg-white"
            >
              Watch on YouTube
            </a>
          </div>
        </motion.div>
      </section>

      <section id="about" className="relative z-10 px-4 py-14 text-center sm:px-6 sm:py-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-4xl rounded-3xl border border-[#ead7cf] bg-white/60 p-6 shadow-sm backdrop-blur sm:p-10"
        >
          <motion.img
            whileHover={{ scale: 1.06, rotate: 2 }}
            src="/images/aj4.png"
            alt="Ajith"
            className="mx-auto mb-7 h-32 w-32 rounded-full border-4 border-white object-cover shadow-xl"
          />

          <h2 className="text-3xl font-bold sm:text-4xl">
            The Story Behind CareOfCanada 🇨🇦
          </h2>

          <p className="mt-6 text-lg">Namaste mowa 👋</p>

          <div className="mx-auto mt-6 max-w-3xl space-y-5 text-lg leading-8 text-[#251010] sm:text-xl">
            <p>
              I'm Ajith — a software engineer, Telugu rapper, content creator,
              husband, father, and fellow immigrant building a life in Canada.
            </p>

            <p>
              From memes and music to newcomer guidance, I've always enjoyed
              creating content that helps people, makes them smile, and keeps
              things real.
            </p>

            <p>
              That's why I started CareOfCanada — a place where Telugu newcomers
              can find practical guidance on jobs, money, settlement, and everyday life in Canada.
            </p>
          </div>

          <h3 className="mt-8 text-3xl font-bold">
            Jobs. Housing. Money. Community.
          </h3>

          <p className="mt-3 text-lg text-[#5c4b4b]">
            Everything you need to start your Canada journey.
          </p>

          <a
            href="https://www.instagram.com/mcajith8"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
          >
            Connect With Ajith
          </a>
        </motion.div>
      </section>

      <footer className="relative z-10 border-t border-[#ead7cf] px-4 py-8 text-center text-sm text-[#5c4b4b]">
        © 2026 CareOfCanada • The Telugu Newcomer Hub 🇨🇦
      </footer>
    </main>
  );
}