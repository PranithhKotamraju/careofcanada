"use client";

import { motion } from "framer-motion";

const calendlyUrl =
  "https://calendly.com/pranithhkrish/free-1-1-newcomer-guidance-call";

type GuidanceCallCardProps = {
  className?: string;
  id?: string;
  compact?: boolean;
};

export default function GuidanceCallCard({
  className = "",
  id,
  compact = false,
}: GuidanceCallCardProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -5 }}
      className={`rounded-3xl border border-[var(--coc-maple)]/35 bg-gradient-to-br from-[var(--coc-burgundy-2)] via-[var(--coc-burgundy)] to-[var(--coc-burgundy-3)] text-white shadow-[0_20px_40px_rgba(120,42,20,0.16)] ${
        compact ? "p-4" : "p-5"
      } ${className}`}
    >
      <p className="text-sm font-semibold text-[#ff7770]">Free newcomer support</p>

      <h2 className={`${compact ? "mt-1 text-lg" : "mt-2 text-xl"} font-bold`}>
        Free 1:1 Newcomer Guidance Call
      </h2>

      <p
        className={`text-sm text-[#f7d8d2]/75 ${
          compact ? "mt-2 leading-5" : "mt-3 leading-6"
        }`}
      >
        Confused about jobs, housing, money, or your first steps in Canada? Book
        a free 15-minute call with CareOfCanada.
      </p>

      <motion.a
        href={calendlyUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        className={`block rounded-xl bg-[var(--coc-maple)] px-5 text-center font-semibold text-white shadow-sm transition hover:bg-[var(--coc-maple-dark)] ${
          compact ? "mt-4 py-2.5" : "mt-5 py-3"
        }`}
      >
        Book Free 15-Min Call
      </motion.a>
    </motion.div>
  );
}
