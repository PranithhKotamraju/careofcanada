const whatsAppGroupUrl =
  "https://chat.whatsapp.com/FofHnslAO2IGQ0oJysYWrG?mode=gi_t";

const nextSteps = [
  ["Join WhatsApp", whatsAppGroupUrl],
  ["Follow Instagram", "https://www.instagram.com/careofcanada"],
  ["Explore Resources", "/#resources"],
  ["Discover Local Picks", "/community-partners"],
];

export default function NewsletterWelcomeCard() {
  return (
    <div className="mt-4 rounded-2xl border border-[var(--coc-maple)]/15 bg-[var(--coc-maple-soft)] p-4 text-[var(--coc-ink)]">
      <div className="flex gap-4">
        <img
          src="/images/aj.jpg"
          alt="MC Ajith from CareOfCanada"
          className="h-16 w-16 shrink-0 rounded-2xl border border-white object-cover shadow-sm"
        />

        <div>
          <p className="text-sm font-bold text-[var(--coc-maple)]">
            You&apos;re in. Welcome to CareOfCanada 🍁
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--coc-muted)]">
            A heartfelt thank you from MC Ajith for joining this early
            community. Your support helps us build something useful for Telugu
            people across Canada.
          </p>
        </div>
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {nextSteps.map(([label, href]) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="rounded-xl border border-[var(--coc-border)] bg-white px-3 py-2 text-center text-xs font-bold text-[var(--coc-burgundy-2)] transition hover:border-[var(--coc-maple)]/25 hover:text-[var(--coc-maple)]"
          >
            {label}
          </a>
        ))}
      </div>

      <p className="mt-4 text-xs font-semibold text-[var(--coc-maple)]">
        Mana Community. Mana Platform.
      </p>
    </div>
  );
}
