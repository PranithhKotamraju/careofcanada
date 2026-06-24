"use client";

import { motion } from "framer-motion";

type CommunityMissionBannerProps = {
  className?: string;
};

export default function CommunityMissionBanner({
  className = "",
}: CommunityMissionBannerProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.12 }}
      whileHover={{ y: -3 }}
      className={`mx-auto mt-3 max-w-2xl overflow-hidden rounded-2xl border border-[var(--coc-maple)]/30 bg-gradient-to-br from-[var(--coc-burgundy-2)] via-[var(--coc-burgundy)] to-[var(--coc-burgundy-3)] text-left text-white shadow-[0_10px_22px_rgba(120,42,20,0.14)] lg:mx-0 ${className}`}
    >
      <div className="relative flex h-full flex-col gap-2.5 p-3 sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
        <div className="absolute right-4 top-2 hidden text-4xl leading-none opacity-10 sm:block">
          🍁
        </div>

        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-yellow-300 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.18em] text-[var(--coc-burgundy-2)]">
              Mission unlocked
            </span>
            <span className="text-[11px] font-semibold text-[#f7d8d2]/60">
              Mowa side quest
            </span>
          </div>

          <h3 className="mt-1 text-base font-black sm:text-lg">
            Today&apos;s Community Mission
          </h3>
          <p className="mt-0.5 max-w-xl text-xs leading-5 text-[#f7d8d2]/75 sm:text-sm">
            Share one win, check your cost, and save one job lead.
          </p>
        </div>

        <div className="relative z-10 flex shrink-0 flex-col gap-2 sm:flex-row lg:w-full">
            <a
              href="/community"
              className="rounded-xl bg-[var(--coc-maple)] px-3 py-1.5 text-center text-xs font-semibold text-white transition hover:bg-[var(--coc-maple-dark)] sm:text-sm lg:flex-1"
            >
              Open Community
            </a>
            <a
              href="#tools"
              className="rounded-xl border border-yellow-200/35 bg-white/10 px-3 py-1.5 text-center text-xs font-semibold text-yellow-100 transition hover:bg-white/15 sm:text-sm lg:flex-1"
            >
              Use Tools
            </a>
        </div>
      </div>
    </motion.section>
  );
}
