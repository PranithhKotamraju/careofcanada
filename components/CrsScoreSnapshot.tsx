"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

type ExpressEntryRound = {
  number: string;
  date: string;
  dateFull: string;
  name: string;
  invitations: number | null;
  crs: number | null;
  program: string;
  dateTime: string;
  tieBreak: string;
};

type RoundsResponse = {
  sourceUrl: string;
  officialCalculatorUrl: string;
  fetchedAt: string;
  stale?: boolean;
  rounds: ExpressEntryRound[];
  error?: string;
};

const filters = [
  "All recent rounds",
  "Canadian Experience Class",
  "Provincial Nominee Program",
  "Healthcare",
  "French",
  "General / category",
];

const improvementTips = [
  {
    title: "Language score",
    text: "Retake IELTS, CELPIP, PTE Core, TEF or TCF if one skill is holding you back. Language gains can move CRS quickly.",
  },
  {
    title: "Canadian experience",
    text: "Build eligible Canadian skilled work experience in TEER 0, 1, 2 or 3 roles and keep proof organized.",
  },
  {
    title: "Education and ECA",
    text: "Finish an eligible Canadian credential or make sure foreign education has a valid ECA if you claim it.",
  },
  {
    title: "Category eligibility",
    text: "Watch category-based rounds such as healthcare, French, trades, education, STEM, transport, agriculture or other IRCC priorities.",
  },
  {
    title: "Provincial nomination",
    text: "A province or territory nomination can be a major CRS boost, but each stream has its own rules and timing.",
  },
];

function formatNumber(value: number | null) {
  if (value === null) return "N/A";

  return new Intl.NumberFormat("en-CA").format(value);
}

function matchesFilter(round: ExpressEntryRound, filter: string) {
  if (filter === "All recent rounds") return true;

  const text = `${round.name} ${round.program}`.toLowerCase();

  if (filter === "Healthcare") return text.includes("health");
  if (filter === "French") return text.includes("french");
  if (filter === "General / category") {
    return (
      !text.includes("provincial nominee") &&
      !text.includes("canadian experience class")
    );
  }

  return text.includes(filter.toLowerCase());
}

function getGapMessage(score: number, cutoff: number | null) {
  if (cutoff === null) {
    return {
      tone: "neutral",
      label: "No cutoff available",
      text: "This round does not have a CRS cutoff available in the official data.",
    };
  }

  const gap = cutoff - score;

  if (gap <= 0) {
    return {
      tone: "good",
      label: "At or above this cutoff",
      text: `Your score is ${Math.abs(gap)} point${Math.abs(gap) === 1 ? "" : "s"} above this recent cutoff. This is not a guarantee because every round has its own category and tie-break rule.`,
    };
  }

  if (gap <= 20) {
    return {
      tone: "close",
      label: `${gap} points away`,
      text: "You are close to this recent cutoff. Small gains in language, experience, education, or category eligibility may matter.",
    };
  }

  return {
    tone: "needsWork",
    label: `${gap} points away`,
    text: "You may need a bigger strategy: improve language, gain eligible experience, check category rounds, or explore provincial nomination options.",
  };
}

export default function CrsScoreSnapshot() {
  const [score, setScore] = useState("475");
  const [filter, setFilter] = useState(filters[0]);
  const [data, setData] = useState<RoundsResponse | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRounds() {
      try {
        const response = await fetch("/api/express-entry-rounds", {
          cache: "no-store",
        });
        const nextData = (await response.json()) as RoundsResponse;

        if (!response.ok) {
          setError(nextData.error ?? "Unable to load latest draws.");
          return;
        }

        setData(nextData);
      } catch (loadError) {
        console.error("Unable to load Express Entry rounds:", loadError);
        setError("Unable to load latest draws.");
      } finally {
        setLoading(false);
      }
    }

    void loadRounds();
  }, []);

  const numericScore = Math.max(0, Math.min(1200, Number(score) || 0));
  const filteredRounds = useMemo(
    () => (data?.rounds ?? []).filter((round) => matchesFilter(round, filter)),
    [data?.rounds, filter],
  );
  const latestRound = filteredRounds[0] ?? data?.rounds[0] ?? null;
  const comparison = latestRound
    ? getGapMessage(numericScore, latestRound.crs)
    : null;
  const visibleRounds = filteredRounds.slice(0, 5);

  return (
    <motion.section
      id="crs-score"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="relative z-10 mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10"
    >
      <div className="overflow-hidden rounded-3xl border border-[var(--coc-border)] bg-white/82 shadow-md backdrop-blur">
        <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border-b border-[var(--coc-border)] bg-gradient-to-br from-[#fffaf2] via-white to-[var(--coc-maple-soft)] p-5 lg:border-b-0 lg:border-r sm:p-6">
            <p className="text-sm font-semibold text-[var(--coc-maple)]">
              Express Entry tracker
            </p>
            <h2 className="mt-2 text-3xl font-bold leading-tight">
              CRS Score Snapshot
            </h2>
            <p className="mt-3 text-sm leading-6 text-[var(--coc-muted)]">
              Enter your CRS score and compare it with recent official IRCC
              Express Entry rounds.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-[var(--coc-burgundy-2)]">
                  Your CRS score
                </span>
                <input
                  value={score}
                  onChange={(event) => setScore(event.target.value)}
                  inputMode="numeric"
                  placeholder="475"
                  className="mt-2 w-full rounded-xl border border-[var(--coc-border)] bg-white px-4 py-3 text-sm text-[var(--coc-ink)] outline-none transition placeholder:text-[#8c7770] focus:border-[var(--coc-maple)] focus:ring-2 focus:ring-[var(--coc-maple-soft)]"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-[var(--coc-burgundy-2)]">
                  Compare with
                </span>
                <select
                  value={filter}
                  onChange={(event) => setFilter(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-[var(--coc-border)] bg-white px-4 py-3 text-sm text-[var(--coc-ink)] outline-none transition focus:border-[var(--coc-maple)] focus:ring-2 focus:ring-[var(--coc-maple-soft)]"
                >
                  {filters.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
            </div>

            <div
              className={`mt-5 rounded-2xl border p-4 ${
                comparison?.tone === "good"
                  ? "border-[var(--coc-green)]/25 bg-green-50"
                  : comparison?.tone === "close"
                    ? "border-yellow-200 bg-yellow-50"
                    : "border-[var(--coc-border)] bg-white"
              }`}
            >
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[var(--coc-maple)]">
                Your readout
              </p>
              <h3 className="mt-2 text-2xl font-bold">
                {loading
                  ? "Loading latest draws..."
                  : comparison?.label ?? "No draw selected"}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--coc-muted)]">
                {error ||
                  comparison?.text ||
                  "Use the official CRS calculator if you do not know your score yet."}
              </p>
              {latestRound ? (
                <p className="mt-3 text-xs leading-5 text-[var(--coc-muted)]">
                  Compared against #{latestRound.number}: {latestRound.name} on{" "}
                  {latestRound.dateFull}.
                  {data?.stale
                    ? " Official IRCC data was slow, so this is the last verified snapshot."
                    : ""}
                </p>
              ) : null}
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={
                  data?.officialCalculatorUrl ??
                  "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score.html"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[var(--coc-maple)] px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--coc-maple-dark)]"
              >
                Official CRS Calculator
              </a>
              <a
                href={
                  data?.sourceUrl ??
                  "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations.html"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-[var(--coc-border)] bg-white px-5 py-3 text-center text-sm font-semibold text-[var(--coc-burgundy-2)] transition hover:bg-[var(--coc-maple-soft)]"
              >
                IRCC Latest Draws
              </a>
            </div>
          </div>

          <div className="p-5 sm:p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-[var(--coc-maple)]">
                  Latest official rounds
                </p>
                <h3 className="mt-1 text-2xl font-bold">
                  {loading ? "Fetching IRCC data" : `${visibleRounds.length} recent matches`}
                </h3>
              </div>
              {data?.fetchedAt ? (
                <p className="text-xs text-[var(--coc-muted)]">
                  {data.stale ? "Last verified snapshot" : "Updated"}{" "}
                  {new Date(data.fetchedAt).toLocaleString("en-CA")}
                </p>
              ) : null}
            </div>

            <div className="mt-4 grid gap-3">
              {loading ? (
                <div className="rounded-2xl border border-[var(--coc-border)] bg-[#fff8f5] p-5 text-sm text-[var(--coc-muted)]">
                  Loading official IRCC rounds...
                </div>
              ) : null}

              {!loading && visibleRounds.length === 0 ? (
                <div className="rounded-2xl border border-[var(--coc-border)] bg-[#fff8f5] p-5 text-sm text-[var(--coc-muted)]">
                  No recent rounds match this filter. Try All recent rounds.
                </div>
              ) : null}

              {visibleRounds.map((round) => {
                const gap =
                  round.crs === null ? null : round.crs - numericScore;
                const isAbove = gap !== null && gap <= 0;

                return (
                  <article
                    key={round.number}
                    className="rounded-2xl border border-[var(--coc-border)] bg-white p-4 shadow-sm"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.14em] text-[var(--coc-maple)]">
                          Draw #{round.number}
                        </p>
                        <h4 className="mt-1 text-lg font-bold">
                          {round.name}
                        </h4>
                        <p className="mt-1 text-sm text-[var(--coc-muted)]">
                          {round.dateFull} · {round.program || "Express Entry"}
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-right sm:min-w-[190px]">
                        <div className="rounded-xl bg-[var(--coc-maple-soft)] p-3">
                          <p className="text-xs text-[var(--coc-muted)]">
                            Cutoff
                          </p>
                          <p className="text-xl font-black text-[var(--coc-maple)]">
                            {formatNumber(round.crs)}
                          </p>
                        </div>
                        <div className="rounded-xl bg-[#fffaf2] p-3">
                          <p className="text-xs text-[var(--coc-muted)]">
                            Invites
                          </p>
                          <p className="text-xl font-black">
                            {formatNumber(round.invitations)}
                          </p>
                        </div>
                      </div>
                    </div>

                    <p
                      className={`mt-3 text-sm font-semibold ${
                        isAbove ? "text-[var(--coc-green)]" : "text-[var(--coc-maple)]"
                      }`}
                    >
                      {gap === null
                        ? "No gap available"
                        : isAbove
                          ? `${Math.abs(gap)} point${Math.abs(gap) === 1 ? "" : "s"} above this cutoff`
                          : `${gap} point${gap === 1 ? "" : "s"} below this cutoff`}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="mt-5 rounded-2xl border border-[var(--coc-border)] bg-[#fffaf2] p-4">
              <h3 className="font-bold">Ways to improve your CRS</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {improvementTips.map((tip) => (
                  <div key={tip.title}>
                    <p className="text-sm font-bold text-[var(--coc-burgundy-2)]">
                      {tip.title}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[var(--coc-muted)]">
                      {tip.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-4 text-xs leading-5 text-[var(--coc-muted)]">
              General community information only. Draw cutoffs vary by round,
              category, program, and tie-break rule. Always verify details on
              official IRCC pages.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
