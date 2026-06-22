export default function CommunityPartners() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-[#fff8f5] via-[#fff4ef] to-[#fdeee8] text-[#251010]">
        <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-14">
          <a
            href="/"
            className="mb-8 inline-flex items-center rounded-xl border border-[#ead7cf] bg-white/70 px-4 py-2 text-sm font-semibold text-[#3a1515] shadow-sm backdrop-blur hover:bg-white"
          >
            ← Back Home
          </a>
  
          <div className="mb-12 text-center">
            <p className="font-semibold text-red-600">
              Trusted by the Telugu Community 🇨🇦
            </p>
  
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Community Partners
            </h1>
  
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#5c4b4b] sm:text-lg">
              Professionals and businesses helping Telugu newcomers settle, grow,
              and build a life in Canada.
            </p>
  
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["🏡 Realtor", "🍕 Food", "💼 Accountant", "🏠 Mortgage", "🚗 Driving School"].map(
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
  
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:19022185157"
                  className="rounded-xl bg-red-600 px-5 py-3 text-center font-semibold text-white shadow-sm hover:bg-red-700"
                >
                  📞 Call
                </a>
  
                <a
                  href="https://www.gethomerealty.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-[#ead7cf] bg-white px-5 py-3 text-center font-semibold text-[#3a1515] hover:bg-[#fff8f5]"
                >
                  🌐 Website
                </a>
              </div>
            </div>
  
            <div className="rounded-3xl border border-[#ead7cf] bg-white/80 p-6 shadow-md backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-xl">
              <img
                src="/images/pizzapizza.png"
                alt="Pizza Pizza Toronto"
                className="h-40 w-full rounded-2xl object-cover shadow-md"
              />
  
              <p className="mt-5 text-sm font-semibold text-red-600">
                Verified Community Partner
              </p>
  
              <h2 className="mt-2 text-2xl font-bold">🍕 Food & Catering</h2>
  
              <h3 className="mt-2 text-xl font-semibold">
                Bala Chandrudu Gara
              </h3>
  
              <p className="mt-3 leading-7 text-[#5c4b4b]">
                Pizza Pizza, Toronto. A proud friend of the Telugu community and
                supporter of CareOfCanada.
              </p>
  
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:4169671111"
                  className="rounded-xl bg-red-600 px-5 py-3 text-center font-semibold text-white shadow-sm hover:bg-red-700"
                >
                  📞 Call
                </a>
  
                <a
                  href="https://www.pizzapizza.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-[#ead7cf] bg-white px-5 py-3 text-center font-semibold text-[#3a1515] hover:bg-[#fff8f5]"
                >
                  🍕 Visit
                </a>
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
                  href="mailto:hello@careofcanada.ca"
                  className="mt-5 inline-flex rounded-xl border border-[#ead7cf] bg-white px-5 py-3 font-semibold text-[#3a1515] hover:bg-[#fff8f5]"
                >
                  Become a Partner
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  }