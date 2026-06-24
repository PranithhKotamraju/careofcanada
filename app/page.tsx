"use client";

import GuidanceCallCard from "@/components/GuidanceCallCard";
import CostCalculator from "@/components/CostCalculator";
import JobTracker from "@/components/JobTracker";
import BenefitsGuide from "@/components/BenefitsGuide";
import CommunityMissionBanner from "@/components/CommunityMissionBanner";
import WhatsAppCommunityCard from "@/components/WhatsAppCommunityCard";
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
  ["Start Here", "/first-30-days"],
  ["Tools", "#tools"],
  ["Benefits", "#benefits"],
  ["Resources", "#resources"],
  ["Community 🍁127", "/community"],
  ["Talent Hub", "/talent-hub"],
  ["This Week", "#this-week"],
  ["1:1 Call", "#guidance-call"],
];

const stats = [
  ["6.6K+", "Instagram Followers"],
  ["82K+", "Monthly Views"],
  ["200+", "YouTube Subscribers"],
];

const tools = [
  ["📋", "First 30 Days Checklist", "SIN, bank account, phone plan, health card, resume and basic setup.", "/first-30-days"],
  ["💰", "Cost Calculator", "Estimate rent, groceries, phone, transit and monthly survival cost.", "#cost-calculator"],
  ["💼", "Job Tracker", "Track job applications, interview status and follow-up dates.", "#job-tracker"],
];

const resources = [
  [
    "Resume Template",
    "Simple Canadian-style resume guidance for newcomers.",
    "/resources/resume-template",
  ],
  [
    "Interview Questions",
    "Common questions and calm preparation tips.",
    "/resources/interview-questions",
  ],
  [
    "Newcomer Links",
    "Important official links for first 30–60 days.",
    "/resources/newcomer-links",
  ],
  [
    "Money Basics",
    "Budgeting, credit score and survival cost basics.",
    "/resources/money-basics",
  ],
];

const thisWeekEvents = [
  {
    title: "Mahalaxmi Vastra Veda Saree Pop-Up",
    date: "June 27, 2026",
    location: "42 Clipper Lane, Bowmanville, ON",
    description:
      "Exclusive in-person saree pop-up for upcoming Aashadam and Shravana Masam collections.",
    image: "/images/mahalaxmi-saree-pop-up.jpg",
    href: "https://wa.me/12899967567",
  },
];

const latestReels = [
  {
    title: "Express Entry 2026 Major Update",
    description: "12-month rule and new priority jobs explained in a quick reel.",
    href: "https://www.instagram.com/reel/DU6chiEEp5O/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "US to Canada PR Draws Hint",
    description: "A quick look at why some education courses may be safer for PR planning.",
    href: "https://www.instagram.com/reel/DUQ9h0QD8O9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];

const mailerLiteSubscribeUrl =
  "https://assets.mailerlite.com/jsonp/2461634/forms/190924753687545174/subscribe";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [emailSignupSubmitted, setEmailSignupSubmitted] = useState(false);
  const [emailSignupSuccess, setEmailSignupSuccess] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#fff8f5] via-[#fff4ef] to-[#fdeee8] text-[#251010]">
      <div className="pointer-events-none absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-red-200/40 blur-3xl" />
      <div className="pointer-events-none absolute right-[-140px] top-[520px] h-96 w-96 rounded-full bg-orange-100/70 blur-3xl" />
      <div className="pointer-events-none absolute bottom-80 left-[-140px] h-96 w-96 rounded-full bg-red-100/70 blur-3xl" />

      <nav className="sticky top-0 z-50 border-b border-[#ead7cf] bg-[#fff8f5]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#home" className="flex items-center gap-3 leading-tight">
            <img
              src="/brand/careofcanada-nav-logo.png"
              alt="CareOfCanada"
              className="h-16 w-16 object-contain"
            />
            <div>
              <h1 className="text-lg font-bold text-red-600 sm:text-xl">
                CareOfCanada
              </h1>
              <p className="text-xs text-[#5c4b4b]">Telugu Newcomer Hub</p>
            </div>
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
            <a
              href="#join-free"
              className="hidden rounded-xl bg-red-600 px-5 py-2 font-semibold text-white shadow-sm transition hover:bg-red-700 hover:shadow-md md:block"
            >
              Join Free
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

      <section id="home" className="relative z-10 px-4 py-7 sm:px-6 sm:py-10">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <img src="/images/cocaj.jpg" alt="" className="w-[850px] opacity-[0.04]" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[1fr_390px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.55 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
              The Telugu Newcomer Hub 🇨🇦
              <span className="block text-red-600">
                Jobs. Housing. Money. Community.
              </span>
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-lg leading-7 text-[#5c4b4b] lg:mx-0">
              Everything you need to start your Canada journey.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
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
              id="join-free"
              whileHover={{ y: -4 }}
              className="mx-auto mt-4 max-w-2xl rounded-3xl border border-[#ead7cf] bg-white/80 p-3 text-left shadow-md backdrop-blur lg:mx-0"
            >
              <div className="grid gap-3 md:grid-cols-[1.05fr_0.95fr] md:items-center">
                <div className="p-3 md:p-4">
                  <h3 className="text-2xl font-bold">Join the Community 🇨🇦</h3>
                  <p className="mt-2 text-[#5c4b4b]">
                    Weekly newcomer tips on jobs, housing, money, and first
                    steps in Canada.
                  </p>

                  {emailSignupSuccess ? (
                    <div className="mt-4 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                      Welcome aboard, mowa 🍁 Check your inbox.
                    </div>
                  ) : (
                    <form
                      action={mailerLiteSubscribeUrl}
                      method="post"
                      target="mailerlite-signup-frame"
                      onSubmit={() => setEmailSignupSubmitted(true)}
                      className="mt-4 flex flex-col gap-2 sm:flex-row"
                    >
                      <label htmlFor="homepage-email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="homepage-email"
                        type="email"
                        name="fields[email]"
                        required
                        autoComplete="email"
                        placeholder="Enter your email"
                        className="min-w-0 flex-1 rounded-xl border border-[#ead7cf] bg-white px-4 py-3 text-sm text-[#251010] outline-none transition placeholder:text-[#8c7770] focus:border-red-500 focus:ring-2 focus:ring-red-100"
                      />
                      <input type="hidden" name="ml-submit" value="1" />
                      <input type="hidden" name="anticsrf" value="true" />
                      <button
                        type="submit"
                        className="rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700"
                      >
                        Join Free
                      </button>
                    </form>
                  )}

                  <iframe
                    name="mailerlite-signup-frame"
                    title="CareOfCanada email signup"
                    className="hidden"
                    onLoad={() => {
                      if (emailSignupSubmitted) {
                        setEmailSignupSuccess(true);
                      }
                    }}
                  />
                </div>

                <GuidanceCallCard
                  id="guidance-call"
                  compact
                  className="text-left shadow-[0_14px_28px_rgba(220,38,38,0.12)]"
                />
              </div>
            </motion.div>

          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-red-900/40 bg-gradient-to-b from-[#3a1515] via-[#251010] to-[#140909] p-4 text-white shadow-[0_18px_44px_rgba(220,38,38,0.16)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-red-400">
                    Community Preview 🍁
                  </p>
                  <h3 className="mt-1 text-2xl font-bold">
                    Telugu Newcomer Wall
                  </h3>
                </div>

                <span className="shrink-0 rounded-full bg-red-600 px-3 py-1 text-sm font-semibold">
                  127 members
                </span>
              </div>

              <div className="mt-4 space-y-3">
                {communityPreviewPosts.slice(0, 2).map((post, index) => (
                  <motion.div
                    key={post.name}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="rounded-2xl border border-red-900/40 bg-[#1b0f0f] p-3"
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

                    <p className="mt-3 text-sm leading-6 text-red-50">
                      {post.text}
                    </p>

                    <p className="mt-2 text-sm text-red-400">
                      🍁 {post.points} Maple Points
                    </p>
                  </motion.div>
                ))}
              </div>

              <a
                href="/community"
                className="mt-4 block rounded-xl bg-red-600 px-5 py-2.5 text-center font-semibold text-white hover:bg-red-700"
              >
                View Community Wall
              </a>
            </motion.div>

            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <WhatsAppCommunityCard compact className="h-full" />
              <CommunityMissionBanner className="mt-0 h-full max-w-none" />
            </div>
          </div>
        </div>
      </section>

      <section id="tools" className="relative z-10 mx-auto max-w-6xl px-4 py-7 sm:px-6 sm:py-9">
        <h2 className="mb-5 text-center text-2xl font-bold sm:text-3xl">
          Tools for your first steps in Canada
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {tools.map(([icon, title, text, href], index) => (
            <motion.div
              key={title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-[#ead7cf] bg-white/75 p-5 shadow-sm backdrop-blur hover:shadow-lg"
            >
              <div className="mb-3 text-3xl">{icon}</div>
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#5c4b4b]">{text}</p>

              {href && (
                <a
                  href={href}
                  className="mt-4 inline-block rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
                >
                  {title === "Cost Calculator"
                    ? "Open Calculator"
                    : title === "Job Tracker"
                      ? "Open Tracker"
                      : "Open Checklist"}
                </a>
              )}
            </motion.div>
          ))}
        </div>

        <CostCalculator />
        <JobTracker />
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

      <BenefitsGuide />

      <section id="this-week" className="relative z-10 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold text-red-600">
              Local picks, manually curated
            </p>
            <h2 className="mt-2 text-3xl font-bold">
              This Week for Newcomers 🍁
            </h2>
            <p className="mx-auto mt-3 max-w-2xl leading-7 text-[#5c4b4b]">
              Telugu events, newcomer-friendly pop-ups, and useful local things
              happening around Canada.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {thisWeekEvents.map((event, index) => (
              <motion.article
                key={event.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="overflow-hidden rounded-3xl border border-[#ead7cf] bg-white/80 shadow-sm backdrop-blur hover:shadow-xl"
              >
                <div className="aspect-[4/5] overflow-hidden bg-[#fff4ef]">
                  <img
                    src={event.image}
                    alt={`${event.title} flyer`}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-5">
                  <p className="text-sm font-semibold text-red-600">
                    {event.date}
                  </p>
                  <h3 className="mt-2 text-xl font-bold">{event.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-[#5c4b4b]">
                    📍 {event.location}
                  </p>
                  <p className="mt-3 leading-7 text-[#5c4b4b]">
                    {event.description}
                  </p>

                  <a
                    href={event.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block rounded-xl bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-700"
                  >
                    WhatsApp for Details
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="relative z-10 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl rounded-3xl border border-[#ead7cf] bg-white/55 p-5 shadow-sm backdrop-blur sm:p-8">
          <h2 className="mb-8 text-center text-3xl font-bold">Free Resources</h2>

          <div className="grid gap-5 md:grid-cols-2">
            {resources.map(([title, text, href], index) => (
              <motion.a
                key={title}
                href={href}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -5 }}
                className="group rounded-2xl border border-[#ead7cf] bg-white/80 p-6 shadow-sm transition hover:border-red-200 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-2 leading-7 text-[#5c4b4b]">{text}</p>
                <span className="mt-4 inline-flex text-sm font-semibold text-red-600 transition group-hover:translate-x-1">
                  Open resource →
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="rounded-3xl border border-red-900/30 bg-gradient-to-br from-[#3a1515] via-[#251010] to-[#140909] p-5 text-white shadow-[0_20px_50px_rgba(220,38,38,0.14)] sm:p-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-200">
                Fresh update
              </p>
              <h2 className="mt-2 text-3xl font-bold">
                Latest Canada PR Updates 🇨🇦
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-red-50/70">
                Quick Instagram explainers for immigration and PR news. Always
                verify final rules on official IRCC pages.
              </p>
            </div>
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship.html"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-yellow-200/35 bg-white/10 px-4 py-2 text-sm font-semibold text-yellow-100 transition hover:bg-white/15"
            >
              Check IRCC
            </a>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {latestReels.map((reel, index) => (
              <motion.a
                key={reel.href}
                href={reel.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-yellow-200/25 bg-[#fffaf2] p-5 text-[#251010] shadow-sm transition hover:border-yellow-300 hover:shadow-lg"
              >
                <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-white">
                  Instagram Reel
                </span>
                <h3 className="mt-4 text-xl font-bold">{reel.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5c4b4b]">
                  {reel.description}
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-red-600">
                  Watch on Instagram →
                </span>
              </motion.a>
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
          <h2 className="text-3xl font-bold sm:text-4xl">
            Why CareOfCanada Exists 🇨🇦
          </h2>

          <div className="mx-auto mt-6 max-w-3xl space-y-5 text-lg leading-8 text-[#251010] sm:text-xl">
            <p>
              CareOfCanada was created to make the first steps in Canada feel
              less confusing for Telugu newcomers.
            </p>

            <p>
              Jobs, housing, money, benefits, community, and guidance — all in
              one calm place.
            </p>

            <p>
              Built by a fellow immigrant who understands how overwhelming the
              first few months can feel.
            </p>
          </div>

          <h3 className="mt-8 text-3xl font-bold">
            Jobs. Housing. Money. Community.
          </h3>

          <p className="mt-3 text-lg text-[#5c4b4b]">
            Everything you need to start your Canada journey.
          </p>

          <a
            href="#join-free"
            className="mt-8 inline-block rounded-xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
          >
            Join the Community
          </a>
        </motion.div>
      </section>

      <footer className="relative z-10 border-t border-[#ead7cf] px-4 py-8 text-center text-sm text-[#5c4b4b]">
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <span>© 2026 CareOfCanada • The Telugu Newcomer Hub 🇨🇦</span>
          <span className="hidden text-[#c9aaa0] sm:inline">•</span>
          <a
            href="https://chat.whatsapp.com/FofHnslAO2IGQ0oJysYWrG?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-green-700 hover:text-green-800"
          >
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/careofcanada"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-red-600 hover:text-red-700"
          >
            Instagram
          </a>
        </div>
      </footer>
    </main>
  );
}
