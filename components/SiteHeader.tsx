"use client";

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
    <nav className="sticky top-0 z-50 border-b border-[#ead7cf] bg-[#fff8f5]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="/" className="flex items-center gap-3 leading-tight">
          <img
            src="/brand/careofcanada-nav-logo.png"
            alt="CareOfCanada"
            className="h-14 w-14 object-contain sm:h-16 sm:w-16"
          />
          <div>
            <h1 className="text-lg font-bold text-red-600 sm:text-xl">
              CareOfCanada
            </h1>
            <p className="text-xs text-[#5c4b4b]">Telugu Community Hub</p>
          </div>
        </a>

        <div className="hidden items-center gap-1 text-sm font-semibold lg:flex">
          {navLinks.map(([label, href]) => {
            const isActive = active === label;

            return (
              <a
                key={label}
                href={href}
                className={`rounded-full px-4 py-2 transition ${
                  isActive
                    ? "bg-red-50 text-red-600"
                    : "text-[#3a1515] hover:bg-red-50 hover:text-red-600"
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/#join-free"
            className="hidden rounded-xl bg-red-600 px-5 py-2 font-semibold text-white shadow-sm transition hover:bg-red-700 hover:shadow-md md:block"
          >
            Join Free
          </a>

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

      {menuOpen && (
        <div className="border-t border-[#ead7cf] bg-[#fff8f5] px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-2 text-sm font-semibold">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-xl px-4 py-3 ${
                  active === label ? "bg-red-600 text-white" : "hover:bg-red-50"
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
