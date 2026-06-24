"use client";

import { motion } from "framer-motion";

const whatsAppGroupUrl =
  "https://chat.whatsapp.com/FofHnslAO2IGQ0oJysYWrG?mode=gi_t";

type WhatsAppCommunityCardProps = {
  compact?: boolean;
  className?: string;
};

export default function WhatsAppCommunityCard({
  compact = false,
  className = "",
}: WhatsAppCommunityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -4 }}
      className={`overflow-hidden rounded-3xl border border-green-900/20 bg-gradient-to-br from-[#fffaf2] via-[#fff4e8] to-[#fde8d1] text-[#251010] shadow-[0_14px_30px_rgba(120,42,20,0.12)] ${className}`}
    >
      <div className={compact ? "p-4" : "p-5"}>
        <p className={`${compact ? "text-xs" : "text-sm"} font-black uppercase tracking-[0.18em] text-green-700`}>
          Real community
        </p>
        <h3 className={compact ? "mt-1.5 text-lg font-bold" : "mt-2 text-2xl font-bold"}>
          Join WhatsApp Community
        </h3>
        <p className={`${compact ? "mt-1.5 text-xs leading-5" : "mt-2 text-sm leading-6"} text-[#5c4b4b]`}>
          Ask questions, share wins, find local help, and stay updated — no
          spam.
        </p>

        <a
          href={whatsAppGroupUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${compact ? "mt-3 py-2.5" : "mt-4 py-3"} inline-flex w-full items-center justify-center rounded-xl bg-green-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700`}
        >
          Join WhatsApp Group
        </a>

        {!compact && (
          <p className="mt-3 text-xs leading-5 text-[#7a6660]">
            Public group link with member approval enabled. Be kind, useful,
            and careful with personal documents.
          </p>
        )}
      </div>
    </motion.div>
  );
}
