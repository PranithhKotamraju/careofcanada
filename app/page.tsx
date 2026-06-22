"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <nav className="sticky top-0 z-50 border-b bg-white">
  <div className="flex items-center justify-between px-6 py-4">

    <h1 className="text-xl font-bold text-red-600">
      🍁 CareOfCanada
    </h1>

    <div className="hidden gap-6 text-sm font-medium md:flex">
      <a href="#home">Home</a>
      <a href="#tools">Tools</a>
      <a href="#resources">Resources</a>
      <a href="#videos">Videos</a>
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
      >
        ☰
      </button>
    </div>
  </div>

  {menuOpen && (
    <div className="border-t bg-white px-6 py-4 md:hidden">
      <div className="flex flex-col gap-4 text-sm font-medium">
        <a href="#home">Home</a>
        <a href="#tools">Tools</a>
        <a href="#resources">Resources</a>
        <a href="#videos">Videos</a>
        <a href="/community-partners">Partners</a>
        <a href="#about">About</a>

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

      <section id="home" className="relative overflow-hidden px-6 py-24 text-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <img
            src="/images/cocaj.jpg"
            alt="CareOfCanada"
            className="w-[800px] opacity-5"
          />
        </div>

        <div className="relative z-10">
          <p className="mb-4 inline-block rounded-full bg-red-50 px-4 py-2 text-sm text-red-700">
            Made for Telugu Newcomers in Canada 🇨🇦
          </p>

          <h2 className="text-5xl font-bold leading-tight md:text-7xl">
          Built by a Telugu newcomer.
            <span className="block text-red-600">For Telugu newcomers.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-600">
            Your Friendly Neighborhood Telugu in Canada. Jobs, money, settlement,
            and real-life Canada guidance.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#tools" className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white">
              Start Your Journey
            </a>

            <a href="#resources" className="rounded-xl border px-6 py-3 font-semibold">
              Explore Resources
            </a>
          </div>

       

          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
            <a href="https://www.instagram.com/careofcanada" target="_blank" rel="noopener noreferrer" className="rounded-full border px-4 py-2">
              📸 Instagram
            </a>

            <a href="https://www.youtube.com/@careofcanadaTV" target="_blank" rel="noopener noreferrer" className="rounded-full border px-4 py-2">
              ▶️ YouTube
            </a>

            <a href="https://www.instagram.com/mcajith8" target="_blank" rel="noopener noreferrer" className="rounded-full border px-4 py-2">
              🎤 Ajith
            </a>

            <a href="https://www.linkedin.com/in/praneeth-kotamraju/" target="_blank" rel="noopener noreferrer" className="rounded-full border px-4 py-2">
              💻 LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
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

{/* JOIN COMMUNITY SECTION */}
<section className="px-6 pb-20">
  <div className="mx-auto max-w-2xl rounded-3xl border bg-gray-50 p-10 text-center">
    <h3 className="text-3xl font-bold text-gray-900">
      Want newcomer updates?
    </h3>

    <p className="mt-4 text-lg text-gray-600">
      Jobs. Money. Settlement.
    </p>

    <p className="mt-2 text-gray-600">
      Join 6,000+ Telugu newcomers following CareOfCanada.
    </p>

    <a
      href="https://preview.mailerlite.io/forms/your-link"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 inline-block rounded-xl bg-red-600 px-8 py-3 font-semibold text-white"
    >
      Join Community
    </a>
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
      <section
  id="about"
  className="bg-red-600 px-6 py-20 text-center text-white"
>
  <h2 className="text-4xl font-bold">
  The Story Behind CareOfCanada 🇨🇦
  </h2>

  <div className="mx-auto mt-8 max-w-3xl">
    <img
      src="/images/aj4.png"
      alt="Ajith"
      className="mx-auto mb-8 h-32 w-32 rounded-full border-4 border-white object-cover shadow-xl"
    />

    <p className="mb-6 text-lg">
      Namaste mowa 👋
    </p>

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
        © 2026 CareOfCanada • Built by a Telugu newcomer.For Telugu newcomers.
      </footer>
    </main>
  );
}