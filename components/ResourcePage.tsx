import Link from "next/link";

type ResourceSection = {
  title: string;
  items: string[];
};

type ResourceLink = {
  label: string;
  href: string;
};

type ResourcePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  sections: ResourceSection[];
  links?: ResourceLink[];
  cta?: {
    label: string;
    href: string;
  };
};

export default function ResourcePage({
  eyebrow,
  title,
  description,
  sections,
  links = [],
  cta,
}: ResourcePageProps) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fff8f5] via-[#fff4ef] to-[#fdeee8] px-4 py-8 text-[#251010] sm:px-6">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/#resources"
          className="inline-flex rounded-xl border border-[#ead7cf] bg-white/75 px-4 py-2 text-sm font-semibold text-[#3a1515] transition hover:bg-white"
        >
          ← Back to Free Resources
        </Link>

        <section className="mt-6 overflow-hidden rounded-3xl border border-red-900/35 bg-gradient-to-br from-[#3a1515] via-[#251010] to-[#140909] text-white shadow-[0_22px_55px_rgba(220,38,38,0.14)]">
          <div className="relative p-6 sm:p-9">
            <div className="absolute right-[-70px] top-4 text-[180px] leading-none text-red-500/10">
              🍁
            </div>
            <div className="relative z-10">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-yellow-200">
                {eyebrow}
              </p>
              <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
                {title}
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-red-50/75">
                {description}
              </p>
              {cta && (
                <a
                  href={cta.href}
                  className="mt-6 inline-block rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
                >
                  {cta.label}
                </a>
              )}
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-2">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-3xl border border-[#ead7cf] bg-white/80 p-5 shadow-sm backdrop-blur"
            >
              <h2 className="text-xl font-bold">{section.title}</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#5c4b4b]">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        {links.length > 0 && (
          <section className="mt-6 rounded-3xl border border-[#ead7cf] bg-white/80 p-5 shadow-sm backdrop-blur">
            <h2 className="text-xl font-bold">Helpful official links</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-[#ead7cf] bg-[#fff8f5] px-4 py-3 text-sm font-semibold text-red-700 transition hover:border-red-200 hover:bg-red-50"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
