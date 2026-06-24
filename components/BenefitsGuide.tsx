"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    title: "Benefits Finder",
    tag: "Start here",
    who: "Newcomers who are unsure which federal benefits may fit their situation.",
    prepare: "Province, family situation, work/study status, and basic income details.",
    href: "https://www.canada.ca/en/services/benefits/finder.html",
  },
  {
    title: "Canada Child Benefit",
    tag: "Families",
    who: "Eligible families raising children under 18.",
    prepare: "Child details, immigration/residency details, tax filing status, and CRA access.",
    href: "https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit.html",
  },
  {
    title: "Employment Insurance",
    tag: "Job loss",
    who: "People who lost work or need sickness, parental, caregiving, or other EI support.",
    prepare: "SIN, work history, records of employment, and banking/direct deposit info.",
    href: "https://www.canada.ca/en/services/benefits/ei.html",
  },
  {
    title: "Canada Workers Benefit",
    tag: "Low income work",
    who: "Workers and families earning a low income who may qualify through tax filing.",
    prepare: "Income, province/territory, disability supplement info if applicable, and tax return.",
    href: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-45300-canada-workers-benefit-cwb.html",
  },
  {
    title: "Health card & health services",
    tag: "Health",
    who: "Newcomers trying to understand provincial health coverage and health services.",
    prepare: "Province, identity documents, immigration documents, and proof of address if required.",
    href: "https://www.canada.ca/en/services/health/health-system-services.html",
  },
  {
    title: "Canadian Dental Care Plan",
    tag: "Dental",
    who: "Eligible Canadian residents who need help making dental care more affordable.",
    prepare: "Tax filing status, coverage details, family information, and application documents.",
    href: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
  },
  {
    title: "Student aid & education support",
    tag: "Study",
    who: "Students exploring grants, loans, education savings, apprenticeships, or training support.",
    prepare: "School/program details, province, income details, and study status.",
    href: "https://www.canada.ca/en/services/benefits/education.html",
  },
];

export default function BenefitsGuide() {
  return (
    <section
      id="benefits"
      className="relative z-10 mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="overflow-hidden rounded-3xl border border-red-900/30 bg-gradient-to-br from-[#3a1515] via-[#251010] to-[#140909] text-white shadow-[0_20px_50px_rgba(220,38,38,0.14)]"
      >
        <div className="grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-300">
              One-stop starter guide
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Canada Benefits & Support
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-red-50/75">
              A calm starting point for newcomer benefits. We keep this simple:
              learn what may apply, prepare documents, then confirm eligibility
              on official government websites.
            </p>

            <div className="mt-6 rounded-2xl border border-yellow-300/25 bg-yellow-200/10 p-4 text-sm leading-6 text-yellow-50">
              This is not legal, tax, or immigration advice. Benefit rules can
              change, and eligibility depends on your personal situation.
            </div>

            <a
              href="https://www.canada.ca/en/services/benefits/finder.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              Open Benefits Finder
            </a>
          </div>

          <div className="grid gap-4 border-t border-white/10 bg-[#fff4e8]/8 p-5 lg:border-l lg:border-t-0 sm:p-6 xl:grid-cols-2">
            {benefits.map((benefit, index) => (
              <motion.article
                key={benefit.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="group flex h-full flex-col rounded-2xl border border-[#f1d6bd] bg-gradient-to-br from-[#fffaf2] via-[#fff3e6] to-[#fde7d1] p-4 text-[#251010] shadow-[0_10px_24px_rgba(120,42,20,0.12)] transition hover:-translate-y-1 hover:border-yellow-300/70 hover:shadow-[0_16px_34px_rgba(120,42,20,0.18)]"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between xl:flex-col">
                  <div>
                    <span className="rounded-full border border-yellow-300/45 bg-white/70 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-red-700 shadow-sm">
                      {benefit.tag}
                    </span>
                    <h3 className="mt-3 text-lg font-bold">{benefit.title}</h3>
                  </div>

                  <a
                    href={benefit.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-xl border border-[#e7c7ae] bg-white/55 px-4 py-2 text-sm font-semibold text-red-700 transition hover:border-red-300 hover:bg-white xl:w-full xl:text-center"
                  >
                    Check official site
                  </a>
                </div>

                <div className="mt-3 grid flex-1 gap-3 text-sm leading-6 text-[#5c4b4b] md:grid-cols-2 xl:grid-cols-1">
                  <p>
                    <span className="font-bold text-[#3a1515]">May help:</span>{" "}
                    {benefit.who}
                  </p>
                  <p>
                    <span className="font-bold text-[#3a1515]">Prepare:</span>{" "}
                    {benefit.prepare}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
