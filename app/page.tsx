"use client";

import { useState } from "react";

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

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <nav className="sticky top-0 z-50 border-b bg-white">
        <div className="flex items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold text-red-600">🍁 CareOfCanada</h1>

          <div className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#home">Home</a>
            <a href="#tools">Tools</a>
            <a href="#resources">Resources</a>
            <a href="#videos">Videos</a>
            <a href="/community">Community</a>
            <a href="/community-partners">Partners</a>
            <a href="#about">About</a>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="/images/aj4.png"
              alt="Ajith"
              className="h-10 w-10 rounded-full border-2 border-red-600 object-cover"
            />

            <a
              href="https://www.instagram.com/mcajith8"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-lg bg-red-600 px-4 py-2 text-white md:block"
            >
              Connect With Aj
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
          <div className="border-t bg-white px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm font-medium">
              <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#tools" onClick={() => setMenuOpen(false)}>Tools</a>
              <a href="#resources" onClick={() => setMenuOpen(false)}>Resources</a>
              <a href="#videos" onClick={() => setMenuOpen(false)}>Videos</a>
              <a href="/community" onClick={() => setMenuOpen(false)}>Community</a>
              <a href="/community-partners" onClick={() => setMenuOpen(false)}>Partners</a>
              <a href="#about" onClick={() => setMenuOpen(false)}>About</a>

              <a
                href="https://www.instagram.com/mcajith8"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-red-600 px-4 py-2 text-center text-white"
              >
                Connect With Aj
              </a>
            </div>
          </div>
        )}
      </nav>

      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-b from-white to-red-50 px-6 py-20"
      >
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <img
            src="/images/cocaj.jpg"
            alt="CareOfCanada"
            className="w-[900px] opacity-5"
          />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_420px]">
          <div className="text-center lg:text-left">
            <p className="mb-4 inline-block rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-red-700">
              Made for Telugu Newcomers in Canada 🇨🇦
            </p>

            <h2 className="text-5xl font-bold leading-tight md:text-7xl">
              Built by a Telugu newcomer.
              <span className="block text-red-600">For Telugu newcomers.</span>
            </h2>

            <p className="mt-6 max-w-3xl text-xl text-gray-600 lg:mx-0">
              Jobs. Money. Settlement. Real-life Canada guidance.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href="/first-30-days"
                className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white"
              >
                Start Your Journey
              </a>

              <a
                href="#resources"
                className="rounded-xl border px-6 py-3 font-semibold"
              >
                Explore Resources
              </a>
            </div>

            <div className="mt-8 max-w-xl rounded-3xl border bg-white p-6 shadow-sm lg:mx-0">
              <h3 className="text-2xl font-bold">Join the Community 🇨🇦</h3>
              <p className="mt-2 text-gray-600">Jobs. Money. Settlement.</p>

              <div className="ml-embedded mt-5" data-form="QVxZ18"></div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm lg:justify-start">
              <a href="https://www.instagram.com/careofcanada" target="_blank" rel="noopener noreferrer" className="rounded-full border bg-white px-4 py-2">
                📸 Instagram
              </a>
              <a href="https://www.youtube.com/@careofcanadaTV" target="_blank" rel="noopener noreferrer" className="rounded-full border bg-white px-4 py-2">
                ▶️ YouTube
              </a>
              <a href="https://www.instagram.com/mcajith8" target="_blank" rel="noopener noreferrer" className="rounded-full border bg-white px-4 py-2">
                🎤 Ajith
              </a>
              <a href="https://www.linkedin.com/in/praneeth-kotamraju/" target="_blank" rel="noopener noreferrer" className="rounded-full border bg-white px-4 py-2">
                💻 LinkedIn
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-red-900/40 bg-gradient-to-b from-[#2a1717] to-[#140909] p-6 text-white shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-red-400">
                  Live Community Preview 🍁
                </p>
                <h3 className="mt-2 text-2xl font-bold">
                  Telugu Newcomer Wall
                </h3>
              </div>

              <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-semibold">
                127 members
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {communityPreviewPosts.map((post, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-red-900/40 bg-[#1b0f0f] p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 font-bold">
                      {post.name.charAt(0)}
                    </div>

                    <div>
                      <p className="font-semibold">{post.name}</p>
                      <p className="text-xs text-red-100/60">{post.city}</p>
                    </div>
                  </div>

                  <p className="mt-3 text-red-50">{post.text}</p>

                  <p className="mt-3 text-sm text-red-400">
                    🍁 {post.points} Maple Points
                  </p>
                </div>
              ))}
            </div>

            <a
              href="/community"
              className="mt-6 block rounded-xl bg-red-600 px-5 py-3 text-center font-semibold text-white hover:bg-red-700"
            >
              View Community Wall
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 text-center md:grid-cols-3">
          <div className="rounded-2xl border p-6">
            <h3 className="text-4xl font-bold text-red-600">6.6K+</h3>
            <p className="mt-2 text-gray-600">Instagram Followers</p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-4xl font-bold text-red-600">82K+</h3>
            <p className="mt-2 text-gray-600">Monthly Views</p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-4xl font-bold text-red-600">200+</h3>
            <p className="mt-2 text-gray-600">YouTube Subscribers</p>
          </div>
        </div>
      </section>

      <section id="tools" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-10 text-center text-3xl font-bold">
          Tools for your first steps in Canada
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border p-6 shadow-sm">
            <div className="mb-4 text-4xl">📋</div>
            <h3 className="text-xl font-bold">First 30 Days Checklist</h3>
            <p className="mt-2 text-gray-600">
              SIN, bank account, phone plan, health card, resume and basic setup.
            </p>
            <a
              href="/first-30-days"
              className="mt-4 inline-block rounded-xl bg-red-600 px-5 py-3 font-semibold text-white"
            >
              Open Checklist
            </a>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm">
            <div className="mb-4 text-4xl">💰</div>
            <h3 className="text-xl font-bold">Cost Calculator</h3>
            <p className="mt-2 text-gray-600">
              Estimate rent, groceries, phone, transit and monthly survival cost.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm">
            <div className="mb-4 text-4xl">💼</div>
            <h3 className="text-xl font-bold">Job Tracker</h3>
            <p className="mt-2 text-gray-600">
              Track job applications, interview status and follow-up dates.
            </p>
          </div>
        </div>
      </section>

      <section id="resources" className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-bold">Free Resources</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">Resume Template</h3>
              <p className="mt-2 text-gray-600">
                Simple Canadian-style resume guidance for newcomers.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">Interview Questions</h3>
              <p className="mt-2 text-gray-600">
                Common questions and calm preparation tips.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">Newcomer Links</h3>
              <p className="mt-2 text-gray-600">
                Important official links for first 30–60 days.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">Money Basics</h3>
              <p className="mt-2 text-gray-600">
                Budgeting, credit score and survival cost basics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="videos" className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">Latest Videos</h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Watch CareOfCanada Telugu guidance on Instagram and YouTube.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="https://www.instagram.com/careofcanada" target="_blank" rel="noopener noreferrer" className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white">
            Watch on Instagram
          </a>

          <a href="https://www.youtube.com/@careofcanadaTV" target="_blank" rel="noopener noreferrer" className="rounded-xl border px-6 py-3 font-semibold">
            Watch on YouTube
          </a>
        </div>
      </section>

      <section id="about" className="bg-red-600 px-6 py-20 text-center text-white">
        <h2 className="text-4xl font-bold">
          The Story Behind CareOfCanada 🇨🇦
        </h2>

        <div className="mx-auto mt-8 max-w-3xl">
          <img
            src="/images/aj4.png"
            alt="Ajith"
            className="mx-auto mb-8 h-32 w-32 rounded-full border-4 border-white object-cover shadow-xl"
          />

          <p className="mb-6 text-lg">Namaste mowa 👋</p>

          <p className="mb-6 text-xl leading-relaxed">
            I'm Ajith — a software engineer, Telugu rapper, content creator,
            husband, father, and fellow immigrant building a life in Canada.
          </p>

          <p className="mb-6 text-xl leading-relaxed">
            From memes and music to newcomer guidance, I've always enjoyed
            creating content that helps people, makes them smile, and keeps
            things real.
          </p>

          <p className="mb-6 text-xl leading-relaxed">
            That's why I started CareOfCanada — a place where Telugu newcomers
            can find practical guidance on jobs, money, settlement, and everyday
            life in Canada.
          </p>

          <p className="text-3xl font-bold">
            Built by a Telugu newcomer.
            <br />
            For Telugu newcomers.
          </p>
        </div>

        <a
          href="https://www.instagram.com/mcajith8"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-red-600"
        >
          Connect With Ajith
        </a>
      </section>

      <footer className="border-t px-6 py-8 text-center text-sm text-gray-600">
        © 2026 CareOfCanada • Built by a Telugu newcomer. For Telugu newcomers.
      </footer>
    </main>
  );
}