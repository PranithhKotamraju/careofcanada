"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const canadaCities = [
  { key: "toronto", name: "Toronto", province: "ON" },
  { key: "vancouver", name: "Vancouver", province: "BC" },
  { key: "calgary", name: "Calgary", province: "AB" },
  { key: "montreal", name: "Montreal", province: "QC" },
];

type PanchangamData = {
  city: {
    key: string;
    name: string;
    province: string;
    timeZone: string;
  };
  date: string;
  summary: {
    samvatsaram: string;
    ayanamu: string;
    ruthuvu: string;
    vara: string;
    tithi: string;
    tithiEnds: string;
    nakshatra: string;
    nakshatraEnds: string;
    yoga: string;
    karana: string;
    chandramasa: string;
    paksha: string;
    chandraRashi: string;
  };
  timings: {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    rahuKalam: string;
    yamaganda: string;
    gulikaKalam: string;
    abhijitMuhurta: string;
    durMuhurta: string[];
    amritKala: string;
    varjyam: string;
  };
  festivals: Array<{
    name: string;
    type: string;
    description: string;
  }>;
  flags: {
    panchaka: boolean;
    bhadra: boolean;
    gandaMula: boolean;
  };
};

const primaryFields = [
  ["Samvatsaram", "samvatsaram", ""],
  ["Ayanamu", "ayanamu", ""],
  ["Ruthuvu", "ruthuvu", ""],
  ["Weekday", "vara", ""],
  ["Tithi", "tithi", "tithiEnds"],
  ["Nakshatram", "nakshatra", "nakshatraEnds"],
  ["Masam", "chandramasa", ""],
  ["Paksham", "paksha", ""],
  ["Yogam", "yoga", ""],
  ["Karanam", "karana", ""],
  ["Rashi", "chandraRashi", ""],
] as const;

const timingFields = [
  ["Sunrise", "sunrise"],
  ["Sunset", "sunset"],
  ["Rahu Kalam", "rahuKalam"],
  ["Yamaganda", "yamaganda"],
  ["Gulika Kalam", "gulikaKalam"],
  ["Abhijit", "abhijitMuhurta"],
] as const;

export default function TeluguPanchangam() {
  const [selectedCity, setSelectedCity] = useState(canadaCities[0]);
  const [data, setData] = useState<PanchangamData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const todayLabel = useMemo(
    () =>
      new Intl.DateTimeFormat("en-CA", {
        weekday: "short",
        month: "short",
        day: "numeric",
      }).format(new Date()),
    [],
  );

  useEffect(() => {
    const controller = new AbortController();

    async function loadPanchangam() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`/api/panchangam?city=${selectedCity.key}`, {
          cache: "no-store",
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Could not load Panchangam.");
        }

        setData((await response.json()) as PanchangamData);
      } catch (caughtError) {
        if (controller.signal.aborted) return;
        setError(caughtError instanceof Error ? caughtError.message : "Could not load Panchangam.");
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadPanchangam();

    return () => controller.abort();
  }, [selectedCity]);

  return (
    <section
      id="panchangam"
      className="relative z-10 mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="overflow-hidden rounded-3xl border border-[var(--coc-border)] bg-[#fffaf5] shadow-sm"
      >
        <div className="grid gap-0 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="border-b border-[var(--coc-border)] bg-gradient-to-b from-[#fff8f2] to-white p-5 sm:p-7 lg:border-b-0 lg:border-r">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--coc-maple)]">
              Telugu calendar
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[var(--coc-ink)]">
              Canada Panchangam
            </h2>
            <p className="mt-3 leading-7 text-[var(--coc-muted)]">
              Fresh daily Panchangam calculated for Canadian city timezones.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-2">
              {canadaCities.map((city) => {
                const isSelected = city.key === selectedCity.key;

                return (
                  <button
                    key={city.key}
                    type="button"
                    onClick={() => setSelectedCity(city)}
                    className={`rounded-2xl border px-4 py-3 text-left transition ${
                      isSelected
                        ? "border-[var(--coc-maple)] bg-[var(--coc-maple)] text-white shadow-sm"
                        : "border-[var(--coc-border)] bg-white text-[var(--coc-burgundy-2)] hover:border-[var(--coc-maple)]/45"
                    }`}
                  >
                    <span className="block text-sm font-bold">{city.name}</span>
                    <span
                      className={`text-xs ${
                        isSelected ? "text-white/80" : "text-[var(--coc-muted)]"
                      }`}
                    >
                      {city.province}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-5 rounded-2xl border border-[var(--coc-border)] bg-white p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[var(--coc-muted)]">
                Today
              </p>
              <p className="mt-1 text-xl font-bold text-[var(--coc-burgundy-2)]">
                {data?.date ?? todayLabel}
              </p>
              <p className="mt-1 text-sm text-[var(--coc-muted)]">
                {selectedCity.name}, Canada
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-7">
            {loading ? (
              <div className="grid gap-4 md:grid-cols-2">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-28 animate-pulse rounded-2xl bg-[#f4e1d5]"
                  />
                ))}
              </div>
            ) : error ? (
              <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-sm font-semibold text-red-800">
                {error}
              </div>
            ) : data ? (
              <div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-[var(--coc-maple)]">
                      {data.city.name} Panchangam
                    </p>
                    <h3 className="mt-1 text-2xl font-bold">
                      {data.summary.vara} · {data.summary.chandraRashi} Rashi
                    </h3>
                  </div>
                  <span className="rounded-full bg-[var(--coc-maple-soft)] px-4 py-2 text-sm font-bold text-[var(--coc-maple)]">
                    {data.city.timeZone}
                  </span>
                </div>

                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {primaryFields.map(([label, valueKey, endKey]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-[var(--coc-border)] bg-white p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-[var(--coc-muted)]">
                        {label}
                      </p>
                      <p className="mt-2 text-xl font-bold text-[var(--coc-burgundy-2)]">
                        {data.summary[valueKey]}
                      </p>
                      {endKey && (
                        <p className="mt-1 text-sm text-[var(--coc-muted)]">
                          Ends {data.summary[endKey]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {timingFields.map(([label, key]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-[var(--coc-border)] bg-[#fff8f2] p-4"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--coc-muted)]">
                        {label}
                      </p>
                      <p className="mt-2 text-sm font-bold text-[var(--coc-burgundy-2)]">
                        {data.timings[key]}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-[var(--coc-border)] bg-white p-4">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-[var(--coc-muted)]">
                      Moon
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[var(--coc-burgundy-2)]">
                      Moonrise: {data.timings.moonrise}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[var(--coc-burgundy-2)]">
                      Moonset: {data.timings.moonset}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[var(--coc-border)] bg-white p-4">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-[var(--coc-muted)]">
                      Muhurtham
                    </p>
                    {data.timings.durMuhurta.map((durMuhurta, index) => (
                      <p
                        key={`${durMuhurta}-${index}`}
                        className="mt-2 text-sm font-semibold text-[var(--coc-burgundy-2)]"
                      >
                        Dur Muhurtamu {index + 1}: {durMuhurta}
                      </p>
                    ))}
                    <p className="mt-2 text-sm font-semibold text-[var(--coc-burgundy-2)]">
                      Amrit Kala: {data.timings.amritKala}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[var(--coc-burgundy-2)]">
                      Varjyam: {data.timings.varjyam}
                    </p>
                  </div>
                </div>

                {data.festivals.length > 0 && (
                  <div className="mt-5 rounded-2xl border border-[var(--coc-border)] bg-white p-4">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-[var(--coc-muted)]">
                      Today&apos;s observances
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {data.festivals.map((festival) => (
                        <span
                          key={`${festival.type}-${festival.name}`}
                          className="rounded-full bg-[var(--coc-maple-soft)] px-3 py-1 text-sm font-semibold text-[var(--coc-maple)]"
                        >
                          {festival.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <p className="mt-5 text-xs leading-5 text-[var(--coc-muted)]">
                  Calculated with astronomical rules for the selected Canadian
                  location. For weddings, vrathams, griha pravesam, and temple
                  rituals, confirm final muhurtham with your priest.
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
