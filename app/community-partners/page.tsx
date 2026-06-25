import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";

const ragavWhatsAppUrl =
  "https://wa.me/19022185157?text=Hi%20Ragav%2C%20I%20found%20you%20through%20CareOfCanada%20Local%20Picks%20and%20wanted%20to%20ask%20about%20real%20estate%20help%20in%20the%20GTA.";

const ragavWebsiteUrl =
  "https://www.gethomerealty.ca?utm_source=careofcanada&utm_medium=local_picks&utm_campaign=ragav_balasa";

const ragavIntroUrl =
  "mailto:connect@careofcanada.ca?subject=Intro%20Request%20-%20Ragav%20Balasa&body=Hi%20CareOfCanada%2C%20I%20saw%20Ragav%20Balasa%20on%20Local%20Picks%20and%20would%20like%20an%20intro.";

export default function CommunityPartners() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-[#fff8f5] via-[#fff4ef] to-[#fdeee8] text-[#251010]">
        <SiteHeader active="Local Picks" />
        <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-14">
          <Link
            href="/"
            className="mb-8 inline-flex items-center rounded-xl border border-[#ead7cf] bg-white/70 px-4 py-2 text-sm font-semibold text-[#3a1515] shadow-sm backdrop-blur hover:bg-white"
          >
            ← Back Home
          </Link>
  
          <div className="mb-12 text-center">
            <p className="font-semibold text-red-600">
              Trusted by the Telugu Community 🇨🇦
            </p>
  
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Local Picks
            </h1>
  
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#5c4b4b] sm:text-lg">
              Real people, events, and services helping the Telugu community
              build life in Canada.
            </p>
  
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["🏡 Realtor", "📸 Photography", "🍛 Food & Catering", "🎪 Events", "🚗 Driving School"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#ead7cf] bg-white/70 px-4 py-2 text-sm font-medium shadow-sm"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <section
            id="partner-with-us"
            className="mb-10 rounded-3xl border border-[#d9b9ad] bg-[#3a1518] p-6 text-white shadow-xl sm:p-8"
          >
            <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ffd7c9]">
                  Partner with CareOfCanada
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Become a trusted name in the Telugu community.
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-[#f7d8d2]">
                  CareOfCanada helps local businesses reach Telugu newcomers,
                  families, students, and professionals across Canada through
                  Local Picks, Instagram, WhatsApp, newsletter updates, and
                  community-led discovery.
                </p>

                <div className="mt-6 grid gap-3 text-sm font-semibold sm:grid-cols-2">
                  {[
                    "Build trust before someone needs your service",
                    "Get discovered by a focused Telugu audience",
                    "Use trackable WhatsApp, website, and intro links",
                    "Grow with a community-first platform from day one",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/15 bg-white/8 px-4 py-3"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                <p className="text-sm font-semibold text-[#ffd7c9]">
                  For realtors, mortgage brokers, accountants, photographers,
                  lawyers, events, food, education, and family services.
                </p>

                <p className="mt-4 leading-7 text-[#fff8f0]">
                  Founding partners receive curated placement, visibility
                  opportunities, and performance insights as the platform grows.
                  We verify every partner so the community can browse with more
                  confidence.
                </p>

                <a
                  href="mailto:connect@careofcanada.ca?subject=Partner%20With%20CareOfCanada"
                  className="mt-6 inline-flex w-full justify-center rounded-xl bg-red-600 px-5 py-3 font-semibold text-white shadow-sm hover:bg-red-700"
                >
                  Become a Founding Partner
                </a>
              </div>
            </div>
          </section>
  
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-[#ead7cf] bg-white/80 p-6 shadow-md backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-xl">
              <img
                src="/images/ragavf1.png"
                alt="Ragav Balasa"
                className="h-32 w-32 rounded-full border-4 border-red-100 object-cover shadow-md"
              />
  
              <p className="mt-5 text-sm font-semibold text-red-600">
                Verified Community Partner
              </p>
  
              <h2 className="mt-2 text-2xl font-bold">🏡 Realtor</h2>
  
              <h3 className="mt-2 text-xl font-semibold">Ragav Balasa</h3>
  
              <p className="mt-3 leading-7 text-[#5c4b4b]">
                GTA Realtor helping Telugu families with buying, selling, and
                investing across the Greater Toronto Area.
              </p>
  
              <div className="mt-5 rounded-2xl border border-red-100 bg-red-50/70 px-4 py-3 text-sm font-medium leading-6 text-[#6a3832]">
                When you message him, mention CareOfCanada so we can track
                partner value and keep improving Local Picks.
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <a
                  href={ragavWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-red-600 px-5 py-3 text-center font-semibold text-white shadow-sm hover:bg-red-700"
                >
                  WhatsApp
                </a>
  
                <a
                  href={ragavWebsiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-[#ead7cf] bg-white px-5 py-3 text-center font-semibold text-[#3a1515] hover:bg-[#fff8f5]"
                >
                  Website
                </a>

                <a
                  href={ragavIntroUrl}
                  className="rounded-xl border border-[#ead7cf] bg-white px-5 py-3 text-center font-semibold text-[#3a1515] hover:bg-[#fff8f5]"
                >
                  Ask Intro
                </a>
              </div>
            </div>
  
            <div className="rounded-3xl border border-[#ead7cf] bg-white/80 p-6 shadow-md backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-xl">
              <img
                src="/images/womb-to-world-hanu.png"
                alt="Womb to World Moment Capture"
                className="h-40 w-full rounded-2xl object-cover shadow-md"
              />
  
              <p className="mt-5 text-sm font-semibold text-red-600">
                Verified Community Partner
              </p>
  
              <h2 className="mt-2 text-2xl font-bold">📸 Photography</h2>
  
              <h3 className="mt-2 text-xl font-semibold">
                Womb to World Moment Capture
              </h3>
  
              <p className="mt-3 leading-7 text-[#5c4b4b]">
                In-home newborn, lifestyle, maternity, birth, and family
                photography across the GTA.
              </p>
  
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://www.instagram.com/wombtoworldmomentcapture/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-red-600 px-5 py-3 text-center font-semibold text-white shadow-sm hover:bg-red-700"
                >
                  Instagram
                </a>
  
                <a
                  href="mailto:connect@careofcanada.ca?subject=Local Pick Inquiry - Womb to World"
                  className="rounded-xl border border-[#ead7cf] bg-white px-5 py-3 text-center font-semibold text-[#3a1515] hover:bg-[#fff8f5]"
                >
                  Ask CareOfCanada
                </a>
              </div>
            </div>

            <div className="md:col-span-2 rounded-3xl border border-[#ead7cf] bg-white/80 p-6 shadow-md backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <img
                  src="/images/vt-seva-jet-canada-2026.png"
                  alt="VT Seva and JET Canada 2026 event flyer"
                  className="max-h-[520px] w-full rounded-2xl border border-[#ead7cf] object-contain shadow-md"
                />

                <div>
                  <p className="text-sm font-semibold text-red-600">
                    Community Event
                  </p>

                  <h2 className="mt-3 text-2xl font-bold">
                    VT Seva & JET Canada 2026
                  </h2>

                  <p className="mt-3 leading-7 text-[#5c4b4b]">
                    Wisdom, service, transformation, and devotion events across
                    Oshawa and Mississauga from July 1-5, 2026.
                  </p>

                  <div className="mt-5 grid gap-3 text-sm leading-6 text-[#5c4b4b] sm:grid-cols-2">
                    <div className="rounded-2xl border border-[#ead7cf] bg-white/75 p-4">
                      <p className="font-bold text-[#251010]">Impact of AI</p>
                      <p>July 1, 1:00 PM - 5:00 PM</p>
                      <p>Oshawa Convention Centre</p>
                    </div>

                    <div className="rounded-2xl border border-[#ead7cf] bg-white/75 p-4">
                      <p className="font-bold text-[#251010]">VT Seva Launch</p>
                      <p>July 1, 5:00 PM - 8:00 PM</p>
                      <p>Anapilis Hall, Mississauga</p>
                    </div>

                    <div className="rounded-2xl border border-[#ead7cf] bg-white/75 p-4">
                      <p className="font-bold text-[#251010]">
                        Bhagavada Gita Workshop
                      </p>
                      <p>July 2-5</p>
                      <p>Anapilis Hall, Mississauga</p>
                    </div>

                    <div className="rounded-2xl border border-[#ead7cf] bg-white/75 p-4">
                      <p className="font-bold text-[#251010]">
                        Sundara Se:thu Hanuma:n A:ra:dhana
                      </p>
                      <p>July 4, 5:00 PM - 8:00 PM</p>
                      <p>Anapilis Hall, Mississauga</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="https://www.instagram.com/jeevtseva_of_equality/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-red-600 px-5 py-3 text-center font-semibold text-white shadow-sm hover:bg-red-700"
                    >
                      View Organizer
                    </a>

                    <a
                      href="mailto:connect@careofcanada.ca?subject=VT%20Seva%20%26%20JET%20Canada%202026"
                      className="rounded-xl border border-[#ead7cf] bg-white px-5 py-3 text-center font-semibold text-[#3a1515] hover:bg-[#fff8f5]"
                    >
                      Ask CareOfCanada
                    </a>
                  </div>
                </div>
              </div>
            </div>
  
            {[
              ["💼 Accountant", "Tax filing, CRA help, bookkeeping, and newcomer money guidance."],
              ["🏠 Mortgage Agent", "Mortgage education and home financing support for families."],
              ["🚗 Driving School", "G1, G2, and road test support for Telugu newcomers."],
            ].map(([title, text], index) => (
              <div
                key={title}
                className={`rounded-3xl border border-dashed border-[#d9b9ad] bg-white/50 p-6 backdrop-blur-sm ${
                  index === 2 ? "md:col-span-2" : ""
                }`}
              >
                <p className="text-sm font-semibold text-red-600">
                  Partner spot available
                </p>
  
                <h2 className="mt-3 text-2xl font-bold">{title}</h2>
  
                <p className="mt-3 leading-7 text-[#5c4b4b]">{text}</p>
  
                <a
                  href="mailto:connect@careofcanada.ca?subject=Local Pick Submission"
                  className="mt-5 inline-flex rounded-xl border border-[#ead7cf] bg-white px-5 py-3 font-semibold text-[#3a1515] hover:bg-[#fff8f5]"
                >
                  Become a Partner
                </a>
              </div>
            ))}
          </div>
        </section>
        <SiteFooter />
      </main>
    );
  }
