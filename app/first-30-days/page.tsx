import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const steps = [
    {
      week: "Week 1",
      title: "Get your SIN number",
      why: "You need a Social Insurance Number to work legally, file taxes, and access many government services.",
      action: "Apply online or visit Service Canada. Keep your SIN private and do not share it casually.",
      linkText: "Official SIN Guide",
      link: "https://www.canada.ca/en/employment-social-development/services/sin.html",
    },
    {
      week: "Week 1",
      title: "Open a bank account",
      why: "You need a Canadian bank account for salary deposits, rent payments, bills, and building financial history.",
      action: "Ask banks for newcomer offers, no-fee accounts, and starter credit cards.",
      linkText: "RBC Newcomer Banking",
      link: "https://www.rbcroyalbank.com/new-to-canada/",
    },
    {
      week: "Week 1",
      title: "Get a Canadian phone number",
      why: "Most employers, banks, landlords, and government services will need a Canadian phone number.",
      action: "Start with a simple monthly plan. Avoid expensive long contracts in your first month.",
      linkText: "Compare Canadian phone plans",
      link: "https://crtc.gc.ca/eng/phone/mobile/code.htm",
    },
    {
      week: "Week 2",
      title: "Apply for your health card",
      why: "Health coverage depends on your province. Apply as soon as you become eligible.",
      action: "Check your province website and prepare identity, residency, and immigration documents.",
      linkText: "Ontario Health Card Guide",
      link: "https://www.ontario.ca/page/apply-ohip-and-get-health-card",
    },
    {
      week: "Week 2",
      title: "Understand CRA and taxes",
      why: "CRA handles taxes, benefits, GST/HST credit, Canada Child Benefit, and refunds.",
      action: "Learn how taxes work for newcomers and keep your documents safe.",
      linkText: "CRA Newcomer Tax Guide",
      link: "https://www.canada.ca/en/revenue-agency/services/tax/international-non-residents/individuals-leaving-entering-canada-non-residents/newcomers-canada-immigrants.html",
    },
    {
      week: "Week 3",
      title: "Create your Canadian-style resume",
      why: "Canadian resumes are usually simple, clear, and role-focused. No photo, date of birth, or marital status.",
      action: "Create a 1–2 page resume focused on skills, achievements, tools, and work experience.",
      linkText: "Job Bank Resume Tips",
      link: "https://www.jobbank.gc.ca/findajob/resources/write-good-resume",
    },
    {
      week: "Week 3",
      title: "Start job search accounts",
      why: "Most hiring happens through LinkedIn, Indeed, Job Bank, company websites, and referrals.",
      action: "Create profiles, upload your resume, set alerts, and apply consistently.",
      linkText: "Government Job Bank",
      link: "https://www.jobbank.gc.ca/",
    },
    {
      week: "Week 4",
      title: "Connect with settlement services",
      why: "Free settlement services can help with jobs, housing, language training, forms, and local guidance.",
      action: "Find newcomer services near your city and book an appointment.",
      linkText: "Find Newcomer Services",
      link: "https://www.canada.ca/en/immigration-refugees-citizenship/campaigns/newcomers.html",
    },
    {
      week: "Week 4",
      title: "Start building credit carefully",
      why: "Credit history helps with renting, car financing, future loans, and mortgages.",
      action: "Use a credit card for small purchases and pay the full balance on time every month.",
      linkText: "FCAC Credit Basics",
      link: "https://www.canada.ca/en/financial-consumer-agency/services/credit-reports-score.html",
    },
  ];
  
  export default function First30Days() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-[#fff8f5] via-[#fff4ef] to-[#fdeee8] text-gray-900">
        <SiteHeader active="Start" />
        <section className="mx-auto max-w-5xl px-6 py-12">
          <a
            href="/"
            className="mb-8 inline-block rounded-xl border px-5 py-3 font-semibold"
          >
            ← Back Home
          </a>
  
          <p className="mb-4 inline-block rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-red-700">
            Newcomer Guide 🇨🇦
          </p>
  
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            First 30 Days in Canada
          </h1>
  
          <p className="mt-6 max-w-3xl text-xl text-gray-600">
            A practical starter guide for Telugu newcomers. Simple steps, official
            links, and real-world clarity for your first month in Canada.
          </p>
  
          <div className="mt-10 rounded-3xl bg-red-50 p-6">
            <h2 className="text-2xl font-bold">Aj's quick advice</h2>
            <p className="mt-3 text-gray-700">
              Don't try to figure out Canada in one week. Start with the basics:
              SIN, bank account, phone number, health card, resume, job search,
              and credit basics. One step at a time.
            </p>
          </div>
  
          <div className="mt-10 grid gap-6">
            {steps.map((step, index) => (
              <div key={index} className="rounded-3xl border p-6 shadow-sm">
                <p className="mb-3 text-sm font-semibold text-red-600">
                  {step.week}
                </p>
  
                <h2 className="text-2xl font-bold">
                  {index + 1}. {step.title}
                </h2>
  
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="font-semibold">Why this matters</h3>
                    <p className="mt-2 text-gray-600">{step.why}</p>
                  </div>
  
                  <div>
                    <h3 className="font-semibold">What to do</h3>
                    <p className="mt-2 text-gray-600">{step.action}</p>
                  </div>
                </div>
  
                <a
                  href={step.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block rounded-xl bg-red-600 px-5 py-3 font-semibold text-white"
                >
                  {step.linkText}
                </a>
              </div>
            ))}
          </div>
  
          <div className="mt-12 rounded-3xl border bg-gray-50 p-8 text-center">
            <h2 className="text-3xl font-bold">
              Join the CareOfCanada Community 🇨🇦
            </h2>
  
            <p className="mt-4 text-gray-600">
              Jobs. Money. Settlement.
            </p>
  
            <div className="ml-embedded mt-6" data-form="QVxZ18"></div>
          </div>
  
          <p className="mt-8 text-center text-sm text-gray-500">
            This guide is for general information only. Always check official
            government websites for the latest rules and requirements.
          </p>
        </section>
        <SiteFooter />
      </main>
    );
  }
