const whatsAppGroupUrl =
  "https://chat.whatsapp.com/FofHnslAO2IGQ0oJysYWrG?mode=gi_t";

export default function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-[#ead7cf] bg-[#fff8f5]/70 px-4 py-10 text-sm text-[#5c4b4b]">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/brand/careofcanada-nav-logo.png"
              alt="CareOfCanada"
              className="h-12 w-12 object-contain"
            />
            <div>
              <p className="text-lg font-bold text-red-600">CareOfCanada</p>
              <p className="text-xs">Telugu Community Hub in Canada</p>
            </div>
          </div>
          <p className="mt-4 leading-6">
            Built for Telugu people building life in Canada —
            newcomer-friendly, community-first.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-[#251010]">Explore</h3>
          <div className="mt-3 space-y-2">
            <a href="/first-30-days" className="block hover:text-red-600">
              Start Here
            </a>
            <a href="/#tools" className="block hover:text-red-600">
              Tools
            </a>
            <a href="/#resources" className="block hover:text-red-600">
              Free Resources
            </a>
            <a href="/#benefits" className="block hover:text-red-600">
              Benefits
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-[#251010]">Community</h3>
          <div className="mt-3 space-y-2">
            <a href="/community" className="block hover:text-red-600">
              Community Wall
            </a>
            <a href="/talent-hub" className="block hover:text-red-600">
              Talent Hub
            </a>
            <a href="/community-partners" className="block hover:text-red-600">
              Local Picks
            </a>
            <a href="/#updates" className="block hover:text-red-600">
              Updates
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-[#251010]">Connect</h3>
          <div className="mt-3 space-y-2">
            <a
              href={whatsAppGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block font-semibold text-green-700 hover:text-green-800"
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/careofcanada"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-semibold text-red-600 hover:text-red-700"
            >
              Instagram
            </a>
            <a
              href="mailto:connect@careofcanada.ca"
              className="block hover:text-red-600"
            >
              connect@careofcanada.ca
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-[#ead7cf] pt-5 text-xs leading-5">
        © 2026 CareOfCanada. General community information only — always verify
        official government, employer, housing, and service details.
      </div>
    </footer>
  );
}
