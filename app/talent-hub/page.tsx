"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const categories = ["All Talents", "Rappers", "Photographers"];

const talents = [
  {
    name: "McAjith",
    category: "Rappers",
    city: "Toronto, ON",
    title: "Telugu Rapper & Community Founder",
    image: "/images/ajith-talent.png",
    imagePosition: "object-[center_34%]",
    points: "1.2K",
    verified: true,
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/mcajith8/",
      },
      {
        label: "YouTube",
        href: "https://www.youtube.com/@McAjithaa",
      },
      {
        label: "Spotify",
        href: "https://open.spotify.com/artist/1MF22MjGdCDaPfFgngK5HJ",
      },
    ],
  },
  {
    name: "Om Sripathi",
    category: "Rappers",
    city: "Oakville, ON",
    title: "Rapper • Upcoming tracks soon",
    image: "/images/om-sripathi-talent.png",
    imagePosition: "object-[center_28%]",
    points: "New",
    verified: false,
    links: [],
  },
  {
    name: "Womb to World Moment Capture",
    category: "Photographers",
    city: "GTA, ON",
    title: "In-home newborn, lifestyle, maternity & family photography",
    image: "/images/womb-to-world-hanu.png",
    imagePosition: "object-[center_42%]",
    points: "New",
    verified: false,
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/wombtoworldmomentcapture/",
      },
    ],
  },
];

const categoryStyles: Record<string, string> = {
  Rappers: "bg-[var(--coc-maple)]",
  Photographers: "bg-[var(--coc-green)]",
};

function SocialIcon({ label }: { label: string }) {
  if (label === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="12"
          cy="12"
          r="3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="17" cy="7" r="1.25" fill="currentColor" />
      </svg>
    );
  }

  if (label === "YouTube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <rect
          x="3"
          y="6.5"
          width="18"
          height="11"
          rx="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" />
      </svg>
    );
  }

  if (label === "Spotify") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <circle
          cx="12"
          cy="12"
          r="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M8 10.4c2.9-.8 5.8-.5 8.1.9M8.7 13c2.2-.5 4.5-.3 6.4.8M9.3 15.4c1.6-.3 3.2-.2 4.7.5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.7"
        />
      </svg>
    );
  }

  return <span className="text-sm font-black">↗</span>;
}

function VerifiedBadge() {
  return (
    <span className="inline-flex items-center justify-center" title="Maple verified">
      <img
        src="/brand/maple-verified.png"
        alt="Maple verified"
        className="h-10 w-10 object-contain drop-shadow-[0_8px_18px_rgba(234,179,8,0.28)]"
      />
    </span>
  );
}

function PremiumIcon({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-yellow-300/35 bg-gradient-to-br from-yellow-200/20 to-[var(--coc-maple-dark)]/25 text-sm font-black tracking-wide text-yellow-200 shadow-inner">
      {children}
    </span>
  );
}

function ProfileIcon({ type }: { type: "mic" | "community" | "care" | "video" | "talent" | "collab" | "audience" }) {
  const common = "h-5 w-5";

  if (type === "mic") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={common}>
        <path d="M12 14a4 4 0 0 0 4-4V6a4 4 0 0 0-8 0v4a4 4 0 0 0 4 4Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M6 10a6 6 0 0 0 12 0M12 16v4M9 20h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      </svg>
    );
  }

  if (type === "community" || type === "care" || type === "talent") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={common}>
        <path d="M12 3 9.6 8.5 4 7.8l4.1 4-1.2 5.7L12 14.6l5.1 2.9-1.2-5.7 4.1-4-5.6.7L12 3Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
      </svg>
    );
  }

  if (type === "video") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={common}>
        <rect x="4" y="7" width="11" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="m15 10 5-3v10l-5-3" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    );
  }

  if (type === "collab") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={common}>
        <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4 19c.7-2.3 2-3.5 4-3.5s3.3 1.2 4 3.5M12 19c.7-2.3 2-3.5 4-3.5s3.3 1.2 4 3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={common}>
      <path d="M5 17 10 12l3 3 6-8M15 7h4v4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

export default function TalentHub() {
  const [activeCategory, setActiveCategory] = useState("All Talents");

  const visibleTalents =
    activeCategory === "All Talents"
      ? talents
      : talents.filter((talent) => talent.category === activeCategory);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[var(--coc-cream)] via-[#fff3e7] to-[var(--coc-cream-2)] text-[var(--coc-ink)]">
      <SiteHeader active="Talent" />

      <section className="relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-[var(--coc-maple)]/35 bg-gradient-to-br from-[var(--coc-burgundy-2)] via-[var(--coc-burgundy)] to-[var(--coc-burgundy-3)] text-white shadow-[0_24px_70px_rgba(120,42,20,0.18)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(180,35,24,0.22),transparent_32%)]" />
          <div className="absolute right-[-90px] top-8 text-[220px] leading-none text-[var(--coc-maple)]/10">
            🍁
          </div>

          <div className="relative grid gap-6 p-6 md:grid-cols-[1fr_320px] md:p-9">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-yellow-300">
                Featured Founder
              </p>
              <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center">
                <img
                  src="/images/ajith-talent.png"
                  alt="Ajith"
                  className="h-32 w-32 rounded-3xl border-4 border-white/10 object-cover object-[center_34%] shadow-2xl sm:h-44 sm:w-44"
                />
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
                      McAjith
                    </h2>
                    <VerifiedBadge />
                  </div>
                  <p className="mt-3 text-lg font-semibold text-yellow-200">
                    Telugu Rapper • Community Founder
                  </p>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-[#f7d8d2]/85">
                    “Building a strong Telugu community in Canada. From
                    struggle to strength, mana journey together.”
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-[var(--coc-maple)]/45 bg-[#1b0f0f]/80 p-5 shadow-xl">
              <div className="space-y-4 text-sm">
                {[
                  ["mic", "Telugu Rapper", "Artist"],
                  ["community", "Community Founder", "CareOfCanada"],
                  ["care", "Newcomer Advocate", "Helping Telugu newcomers"],
                  ["video", "Content Creator", "Music • Vlogs • Motivation"],
                ].map(([icon, title, text]) => (
                  <div key={title} className="flex gap-3">
                    <PremiumIcon>
                      <ProfileIcon type={icon as "mic" | "community" | "care" | "video"} />
                    </PremiumIcon>
                    <div>
                      <p className="font-bold text-white">{title}</p>
                      <p className="text-[#f7d8d2]/65">{text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-[var(--coc-maple)]/45 bg-[var(--coc-maple-dark)]/35 px-4 py-3">
                <p className="flex items-center justify-between font-bold text-yellow-200">
                  <span>Maple Points</span>
                  <span className="text-2xl">1,250</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-full px-5 py-3 text-sm font-semibold shadow-sm transition ${
                activeCategory === category
                  ? "bg-[var(--coc-maple)] text-white"
                  : "border border-[var(--coc-border)] bg-white/80 text-[var(--coc-burgundy-2)] hover:bg-[var(--coc-maple-soft)] hover:text-[var(--coc-maple)]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="mt-2 text-sm leading-6 text-[var(--coc-muted)]">
          Maple Verified profiles are manually reviewed by CareOfCanada.
        </p>

        <section className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleTalents.map((talent, index) => (
            <motion.article
              key={talent.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -7 }}
              className="overflow-hidden rounded-3xl border border-[var(--coc-border)] bg-white/85 shadow-sm backdrop-blur hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden bg-[var(--coc-cream)]">
                <img
                  src={talent.image}
                  alt={talent.name}
                  className={`h-full w-full object-cover ${talent.imagePosition}`}
                />
                <span
                  className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold text-white ${
                    categoryStyles[talent.category] ?? "bg-red-700"
                  }`}
                >
                  {talent.category.replace(/s$/, "")}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold">{talent.name}</h3>
                  {talent.verified && (
                    <VerifiedBadge />
                  )}
                </div>

                <p className="mt-1 text-sm text-[var(--coc-muted)]">{talent.city}</p>
                <p className="mt-2 text-sm font-medium">{talent.title}</p>

                <div className="mt-5 flex items-center justify-between border-t border-[var(--coc-border)] pt-4">
                  <p className="text-sm font-bold text-[var(--coc-maple)]">
                    Maple {talent.points}
                  </p>
                  <div className="flex gap-2">
                    {talent.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--coc-border)] bg-gradient-to-br from-white to-[var(--coc-cream)] text-[var(--coc-maple)] shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--coc-maple)]/30 hover:bg-[var(--coc-maple-soft)] hover:shadow-md"
                        title={link.label}
                      >
                        <SocialIcon label={link.label} />
                      </a>
                    ))}
                    {talent.links.length === 0 && (
                      <span className="rounded-full border border-[var(--coc-border)] bg-[var(--coc-cream)] px-3 py-1 text-xs font-semibold text-[#7a6f6b]">
                        Links coming soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-7 rounded-3xl border border-[var(--coc-maple)]/35 bg-gradient-to-br from-[var(--coc-burgundy-2)] via-[var(--coc-burgundy)] to-[var(--coc-burgundy-3)] p-6 text-white shadow-[0_20px_50px_rgba(120,42,20,0.16)]"
        >
          <div className="grid gap-5 md:grid-cols-[1fr_1fr_1fr_320px] md:items-center">
            {[
              ["talent", "Showcase Your Talent", "Reach thousands in the Telugu community"],
              ["collab", "Connect & Collaborate", "Find artists, creators, and opportunities"],
              ["audience", "Grow Your Audience", "Build your brand with CareOfCanada"],
            ].map(([icon, title, text]) => (
              <div key={title} className="flex gap-3">
                <PremiumIcon>
                  <ProfileIcon type={icon as "talent" | "collab" | "audience"} />
                </PremiumIcon>
                <div>
                  <h3 className="font-bold text-yellow-200">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#f7d8d2]/75">{text}</p>
                </div>
              </div>
            ))}

            <a
              href="mailto:connect@careofcanada.ca?subject=Talent Hub Submission"
              className="rounded-2xl border border-[var(--coc-maple)]/60 bg-[var(--coc-maple-dark)]/55 px-5 py-4 font-bold text-yellow-100 transition hover:bg-[var(--coc-maple-dark)]/75"
            >
              + Add Your Talent
              <span className="block text-sm font-medium text-[#f7d8d2]/75">
                Be a part of our growing hub
              </span>
            </a>
          </div>
        </motion.section>
      </section>

      <SiteFooter />
    </main>
  );
}
