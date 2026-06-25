"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  ["Start", "/first-30-days"],
  ["Tools", "/#tools"],
  ["Community", "/community"],
  ["Local Picks", "/community-partners"],
  ["Talent", "/talent-hub"],
  ["Updates", "/#updates"],
  ["1:1 Call", "/#guidance-call"],
];

type SiteHeaderProps = {
  active?: string;
};

export default function SiteHeader({ active = "" }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--coc-border)] bg-[var(--coc-cream)]/92 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
        <Link href="/" className="flex items-center gap-3 leading-tight">
          <img
            src="/brand/careofcanada-nav-logo.png"
            alt="CareOfCanada"
            className="h-11 w-11 object-contain sm:h-12 sm:w-12"
          />
          <div>
            <h1 className="text-base font-bold text-[var(--coc-maple)] sm:text-lg">
              CareOfCanada
            </h1>
            <p className="text-xs text-[var(--coc-muted)]">Telugu Community Hub</p>
          </div>
        </Link>

        <Link
          href="/community"
          className="hidden min-w-0 flex-1 rounded-full border border-[var(--coc-border)] bg-white/75 px-5 py-2.5 text-center text-sm font-semibold text-[var(--coc-muted)] shadow-sm transition hover:border-[var(--coc-gold)] hover:bg-white lg:block"
        >
          Explore community questions, wins, jobs, housing, and newcomer help
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/community-partners#partner-with-us"
            className="hidden rounded-xl border border-[var(--coc-border)] bg-white/75 px-5 py-2 font-semibold text-[var(--coc-burgundy-2)] shadow-sm transition hover:border-[var(--coc-gold)] hover:bg-white hover:text-[var(--coc-maple)] md:block"
          >
            Partner
          </Link>

          <Link
            href="/#join-free"
            className="hidden rounded-xl bg-[var(--coc-maple)] px-5 py-2 font-semibold text-white shadow-sm transition hover:bg-[var(--coc-maple-dark)] hover:shadow-md md:block"
          >
            Join Free
          </Link>

          <button
            onClick={() => setMenuOpen((current) => !current)}
            className="text-3xl lg:hidden"
            aria-label="Open menu"
            type="button"
          >
            ☰
          </button>
        </div>
      </div>

      <div className="hidden border-t border-[var(--coc-border)]/70 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-1 px-4 py-1.5 text-sm font-semibold sm:px-6">
          {navLinks.map(([label, href]) => {
            const isActive = active === label;
            const isCommunity = label === "Community";

            return (
              <Link
                key={label}
                href={href}
                className={`rounded-full px-4 py-2 transition ${
                  isCommunity
                    ? "bg-[var(--coc-green)] text-white shadow-sm hover:bg-[var(--coc-green-dark)]"
                    : isActive
                      ? "bg-[var(--coc-maple-soft)] text-[var(--coc-maple)]"
                      : "text-[var(--coc-burgundy-2)] hover:bg-[var(--coc-maple-soft)] hover:text-[var(--coc-maple)]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-[var(--coc-border)] bg-[var(--coc-cream)] px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-2 text-sm font-semibold">
            <Link
              href="/community-partners#partner-with-us"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl border border-[var(--coc-border)] bg-white/70 px-4 py-3 text-[var(--coc-burgundy-2)]"
            >
              Partner
            </Link>

            {navLinks.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-xl px-4 py-3 ${
                  label === "Community"
                    ? "bg-[var(--coc-green)] text-white"
                    : active === label
                      ? "bg-[var(--coc-maple)] text-white"
                      : "hover:bg-[var(--coc-maple-soft)]"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
