"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type ArrivalStage = "comingSoon" | "landed" | "settling";
type PersonStatus = "Student" | "Worker" | "PR" | "Visitor" | "Spouse";
type MainNeed = "Documents" | "Jobs" | "Housing" | "Money" | "Community";

type PlanLink = {
  label: string;
  href: string;
  external?: boolean;
};

type PlanSection = {
  title: string;
  items: string[];
};

const provinces = [
  "Ontario",
  "British Columbia",
  "Alberta",
  "Manitoba",
  "Saskatchewan",
  "Quebec",
  "Nova Scotia",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Prince Edward Island",
];

const arrivalOptions: Array<{
  value: ArrivalStage;
  label: string;
  helper: string;
}> = [
  {
    value: "comingSoon",
    label: "Coming soon",
    helper: "I am preparing before landing.",
  },
  {
    value: "landed",
    label: "Just landed",
    helper: "I am in my first few weeks.",
  },
  {
    value: "settling",
    label: "Settling in",
    helper: "I am already here and need momentum.",
  },
];

const statusOptions: PersonStatus[] = [
  "Student",
  "Worker",
  "PR",
  "Visitor",
  "Spouse",
];

const needOptions: Array<{
  value: MainNeed;
  label: string;
  helper: string;
}> = [
  {
    value: "Documents",
    label: "Documents",
    helper: "SIN, health card, CRA, official setup.",
  },
  {
    value: "Jobs",
    label: "Jobs",
    helper: "Resume, applications, interviews, referrals.",
  },
  {
    value: "Housing",
    label: "Housing",
    helper: "Rent, rooms, transit, landlord basics.",
  },
  {
    value: "Money",
    label: "Money",
    helper: "Budget, credit, bank account, benefits.",
  },
  {
    value: "Community",
    label: "Community",
    helper: "Questions, local help, Telugu events.",
  },
];

const statusTips: Record<PersonStatus, string[]> = {
  Student: [
    "Check your study permit conditions before planning work hours.",
    "Use your college career portal and local referrals together.",
    "Keep tuition, rent, transit, and grocery numbers in one simple budget.",
  ],
  Worker: [
    "Confirm payroll, SIN, benefits, tax forms, and direct deposit setup.",
    "Update your LinkedIn and resume for Canadian keywords in your role.",
    "Track applications and follow-ups so good leads do not disappear.",
  ],
  PR: [
    "Apply for province health coverage as soon as you are eligible.",
    "Set up CRA access and learn which benefits may apply to your family.",
    "Start building credit carefully with small purchases paid in full.",
  ],
  Visitor: [
    "Keep your status expiry date visible and plan extensions early.",
    "Do not work unless your status allows it.",
    "Keep emergency funds and travel health insurance in mind.",
  ],
  Spouse: [
    "Organize identity, address, marriage, and immigration documents.",
    "Check settlement services near your city for free newcomer support.",
    "Join local community groups early so you are not solving everything alone.",
  ],
};

const needLinks: Record<MainNeed, PlanLink[]> = {
  Documents: [
    { label: "Open First 30 Days", href: "/first-30-days" },
    { label: "Official newcomer links", href: "/resources/newcomer-links" },
  ],
  Jobs: [
    { label: "Resume template", href: "/resources/resume-template" },
    { label: "Interview questions", href: "/resources/interview-questions" },
    { label: "Open Job Tracker", href: "#job-tracker" },
  ],
  Housing: [
    { label: "Ask the community", href: "/community" },
    { label: "Estimate monthly cost", href: "#cost-calculator" },
  ],
  Money: [
    { label: "Use Cost Calculator", href: "#cost-calculator" },
    { label: "Money basics", href: "/resources/money-basics" },
  ],
  Community: [
    { label: "Community Wall", href: "/community" },
    {
      label: "Join WhatsApp",
      href: "https://chat.whatsapp.com/FofHnslAO2IGQ0oJysYWrG?mode=gi_t",
      external: true,
    },
  ],
};

function getNextSevenDays(stage: ArrivalStage, need: MainNeed) {
  const stageItems: Record<ArrivalStage, string[]> = {
    comingSoon: [
      "Prepare digital copies of passport, permit, admission or job letters, and address details.",
      "Pick a starter city area based on transit, rent, school or work commute.",
      "Build a first-month budget before booking long-term housing.",
      "Join the community and ask one practical local question.",
    ],
    landed: [
      "Apply for SIN or confirm your SIN details are ready for work and taxes.",
      "Open a Canadian bank account and set up a simple phone plan.",
      "Save your temporary address, transit route, and emergency contacts.",
      "Start one focused job, housing, or document task today.",
    ],
    settling: [
      "Review what is still unfinished: health card, CRA, credit, resume, benefits, housing.",
      "Update your resume, LinkedIn, and weekly application rhythm.",
      "Check your monthly spending against your real income and rent.",
      "Ask or answer one community question to build local momentum.",
    ],
  };

  const needItem: Record<MainNeed, string> = {
    Documents: "Finish one official setup item and save the confirmation safely.",
    Jobs: "Apply to 5 focused roles and add each one to your tracker.",
    Housing: "Shortlist 3 housing options near transit and prepare questions for viewings.",
    Money: "Run your monthly cost estimate and choose one expense to control.",
    Community: "Introduce yourself on the community wall or WhatsApp group.",
  };

  return [...stageItems[stage], needItem[need]];
}

function getFirstThirtyDays(status: PersonStatus, need: MainNeed) {
  const base = [
    "Keep identity, immigration, address, banking, and tax documents organized in one folder.",
    "Set a weekly routine for money, jobs, housing, and official tasks.",
    "Use official government pages before making immigration, tax, or benefit decisions.",
  ];

  return [...base, ...statusTips[status].slice(0, 2), ...statusTips[status].slice(2), `Make ${need.toLowerCase()} your main focus until one clear blocker is solved.`];
}

function getPlanTitle(stage: ArrivalStage, status: PersonStatus, province: string) {
  const stageText: Record<ArrivalStage, string> = {
    comingSoon: "pre-arrival",
    landed: "first-weeks",
    settling: "settling-in",
  };
  const statusText: Record<PersonStatus, string> = {
    Student: "students",
    Worker: "workers",
    PR: "PRs",
    Visitor: "visitors",
    Spouse: "spouses",
  };

  return `${province} ${stageText[stage]} plan for ${statusText[status]}`;
}

function PlanActionLink({ link }: { link: PlanLink }) {
  const className =
    "rounded-xl bg-[var(--coc-maple)] px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--coc-maple-dark)]";

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {link.label}
      </a>
    );
  }

  return (
    <Link href={link.href} className={className}>
      {link.label}
    </Link>
  );
}

export default function CanadaPlan() {
  const [arrivalStage, setArrivalStage] = useState<ArrivalStage>("landed");
  const [province, setProvince] = useState("Ontario");
  const [city, setCity] = useState("");
  const [personStatus, setPersonStatus] = useState<PersonStatus>("Student");
  const [mainNeed, setMainNeed] = useState<MainNeed>("Jobs");

  const plan = useMemo<{
    title: string;
    sections: PlanSection[];
    links: PlanLink[];
  }>(
    () => ({
      title: getPlanTitle(arrivalStage, personStatus, province),
      sections: [
        {
          title: "Your Next 7 Days",
          items: getNextSevenDays(arrivalStage, mainNeed),
        },
        {
          title: "Your First 30 Days",
          items: getFirstThirtyDays(personStatus, mainNeed),
        },
        {
          title: city.trim() ? `${city.trim()} Focus` : "Local Focus",
          items: [
            `Compare rent and transit before committing to a long lease in ${city.trim() || province}.`,
            "Prefer official services, known referrals, and community-vouched contacts.",
            "Keep a small weekly checklist instead of trying to solve Canada in one day.",
          ],
        },
      ],
      links: needLinks[mainNeed],
    }),
    [arrivalStage, city, mainNeed, personStatus, province],
  );

  return (
    <motion.section
      id="canada-plan"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="relative z-10 mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10"
    >
      <div className="overflow-hidden rounded-3xl border border-[var(--coc-maple)]/25 bg-white/82 shadow-md backdrop-blur">
        <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="border-b border-[var(--coc-border)] bg-gradient-to-br from-[var(--coc-burgundy-2)] via-[var(--coc-burgundy)] to-[var(--coc-burgundy-3)] p-5 text-white lg:border-b-0 lg:border-r sm:p-6">
            <p className="text-sm font-semibold text-[#ffb2a8]">
              Personalized starter plan
            </p>
            <h2 className="mt-2 text-3xl font-bold leading-tight">
              My Canada Plan
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#f7d8d2]/75">
              Answer a few quick questions and get a practical plan for your
              next steps in Canada.
            </p>

            <div className="mt-5 space-y-4">
              <div>
                <p className="text-sm font-semibold text-red-100">
                  Where are you now?
                </p>
                <div className="mt-2 grid gap-2">
                  {arrivalOptions.map((option) => (
                    <label
                      key={option.value}
                      className={`cursor-pointer rounded-2xl border p-3 transition ${
                        arrivalStage === option.value
                          ? "border-yellow-200 bg-white/14"
                          : "border-white/10 bg-white/6 hover:bg-white/10"
                      }`}
                    >
                      <input
                        type="radio"
                        name="arrivalStage"
                        value={option.value}
                        checked={arrivalStage === option.value}
                        onChange={() => setArrivalStage(option.value)}
                        className="sr-only"
                      />
                      <span className="block text-sm font-bold">
                        {option.label}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-red-50/65">
                        {option.helper}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-semibold text-red-100">
                    Province
                  </span>
                  <select
                    value={province}
                    onChange={(event) => setProvince(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-sm text-[var(--coc-ink)] outline-none focus:border-yellow-200 focus:ring-2 focus:ring-yellow-100/30"
                  >
                    {provinces.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-red-100">
                    City optional
                  </span>
                  <input
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                    placeholder="Toronto, Calgary..."
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-sm text-[var(--coc-ink)] outline-none transition placeholder:text-[#8c7770] focus:border-yellow-200 focus:ring-2 focus:ring-yellow-100/30"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-6">
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-[var(--coc-burgundy-2)]">
                  Your status
                </span>
                <select
                  value={personStatus}
                  onChange={(event) =>
                    setPersonStatus(event.target.value as PersonStatus)
                  }
                  className="mt-2 w-full rounded-xl border border-[var(--coc-border)] bg-[#fff8f5] px-4 py-3 text-sm text-[var(--coc-ink)] outline-none focus:border-[var(--coc-maple)] focus:ring-2 focus:ring-[var(--coc-maple-soft)]"
                >
                  {statusOptions.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-[var(--coc-burgundy-2)]">
                  Biggest need
                </span>
                <select
                  value={mainNeed}
                  onChange={(event) =>
                    setMainNeed(event.target.value as MainNeed)
                  }
                  className="mt-2 w-full rounded-xl border border-[var(--coc-border)] bg-[#fff8f5] px-4 py-3 text-sm text-[var(--coc-ink)] outline-none focus:border-[var(--coc-maple)] focus:ring-2 focus:ring-[var(--coc-maple-soft)]"
                >
                  {needOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-4 rounded-2xl border border-[var(--coc-border)] bg-[#fffaf2] p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[var(--coc-maple)]">
                Your result
              </p>
              <h3 className="mt-2 text-2xl font-bold capitalize">
                {plan.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--coc-muted)]">
                Focus area:{" "}
                {needOptions.find((option) => option.value === mainNeed)?.helper}
              </p>
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              {plan.sections.map((section) => (
                <article
                  key={section.title}
                  className="rounded-2xl border border-[var(--coc-border)] bg-white p-4 shadow-sm"
                >
                  <h3 className="text-base font-bold">{section.title}</h3>
                  <ol className="mt-3 space-y-2 text-sm leading-6 text-[var(--coc-muted)]">
                    {section.items.slice(0, 5).map((item, index) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--coc-maple-soft)] text-xs font-bold text-[var(--coc-maple)]">
                          {index + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                </article>
              ))}
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {plan.links.map((link) => (
                <PlanActionLink key={link.label} link={link} />
              ))}
              <Link
                href="/#join-free"
                className="rounded-xl border border-[var(--coc-border)] bg-white px-5 py-3 text-center text-sm font-semibold text-[var(--coc-burgundy-2)] transition hover:bg-[var(--coc-maple-soft)]"
              >
                Email me updates
              </Link>
            </div>

            <p className="mt-4 text-xs leading-5 text-[var(--coc-muted)]">
              General community guidance only. Always verify official
              immigration, tax, health, housing, and employment details.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
