const whatsAppGroupUrl =
  "https://chat.whatsapp.com/FofHnslAO2IGQ0oJysYWrG?mode=gi_t";

export default function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-[var(--coc-border)] bg-gradient-to-b from-[var(--coc-cream)] to-[var(--coc-cream-2)] px-4 py-10 text-sm text-[var(--coc-muted)]">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/brand/careofcanada-nav-logo.png"
              alt="CareOfCanada"
              className="h-12 w-12 object-contain"
            />
            <div>
              <p className="text-lg font-bold text-[var(--coc-maple)]">CareOfCanada</p>
              <p className="text-xs">Telugu Community Hub in Canada</p>
            </div>
          </div>
          <p className="mt-4 leading-6">
            Built for Telugu people building life in Canada —
            newcomer-friendly, community-first.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-[var(--coc-ink)]">Explore</h3>
          <div className="mt-3 space-y-2">
            <a href="/first-30-days" className="block hover:text-[var(--coc-maple)]">
              Start Here
            </a>
            <a href="/#tools" className="block hover:text-[var(--coc-maple)]">
              Tools
            </a>
            <a href="/#resources" className="block hover:text-[var(--coc-maple)]">
              Free Resources
            </a>
            <a href="/#benefits" className="block hover:text-[var(--coc-maple)]">
              Benefits
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-[var(--coc-ink)]">Community</h3>
          <div className="mt-3 space-y-2">
            <a href="/community" className="block hover:text-[var(--coc-maple)]">
              Community Wall
            </a>
            <a href="/talent-hub" className="block hover:text-[var(--coc-maple)]">
              Talent Hub
            </a>
            <a href="/community-partners" className="block hover:text-[var(--coc-maple)]">
              Local Picks
            </a>
            <a href="/#updates" className="block hover:text-[var(--coc-maple)]">
              Updates
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-[var(--coc-ink)]">Connect</h3>
          <div className="mt-3 space-y-2">
            <a
              href={whatsAppGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block font-semibold text-[var(--coc-green)] hover:text-[var(--coc-green-dark)]"
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/careofcanada"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-semibold text-[var(--coc-maple)] hover:text-[var(--coc-maple-dark)]"
            >
              Instagram
            </a>
            <a
              href="mailto:connect@careofcanada.ca"
              className="block hover:text-[var(--coc-maple)]"
            >
              connect@careofcanada.ca
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-[var(--coc-border)] pt-5 text-xs leading-5">
        © 2026 CareOfCanada. General community information only — always verify
        official government, employer, housing, and service details.
      </div>
    </footer>
  );
}
