export default function CommunityPartners() {
    return (
      <main className="min-h-screen bg-white px-6 py-16 text-gray-900">
        <section className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold">🤝 Community Partners</h1>
  
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Trusted professionals and local businesses that support the Telugu
              community in Canada.
            </p>
          </div>
  
          <div className="grid gap-6 md:grid-cols-2">
            {/* Realtor */}
            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <img
                src="/images/ragavf1.png"
                alt="Ragav Balasa"
                className="h-32 w-32 rounded-full border-4 border-red-100 object-cover"
              />
  
              <h2 className="mt-5 text-2xl font-bold">🏡 Realtor</h2>
  
              <h3 className="mt-2 text-xl font-semibold">Ragav Balasa</h3>
  
              <p className="mt-3 text-gray-600">
                GTA Realtor helping Telugu families with buying, selling, and
                investing across the Greater Toronto Area.
              </p>
  
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="tel:19022185157"
                  className="rounded-xl bg-red-600 px-5 py-3 font-semibold text-white"
                >
                  📞 Call
                </a>
  
                <a
                  href="https://www.gethomerealty.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border px-5 py-3 font-semibold"
                >
                  🌐 Website
                </a>
              </div>
            </div>
  
            {/* Food Partner */}
            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <img
                src="/images/pizzapizza.png"
                alt="Pizza Pizza Toronto"
                className="h-40 w-full rounded-2xl object-cover"
              />
  
              <h2 className="mt-5 text-2xl font-bold">🍕 Food & Catering</h2>
  
              <h3 className="mt-2 text-xl font-semibold">
                Bala Chandrudu Garu
              </h3>
  
              <p className="mt-3 text-gray-600">
                Pizza Pizza, Toronto. A proud friend of the Telugu community and
                supporter of CareOfCanada.
              </p>
  
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="tel:4169671111"
                  className="rounded-xl bg-red-600 px-5 py-3 font-semibold text-white"
                >
                  📞 Call
                </a>
  
                <a
                  href="https://www.pizzapizza.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border px-5 py-3 font-semibold"
                >
                  🍕 Visit
                </a>
              </div>
            </div>
  
            {/* Future Accountant */}
            <div className="rounded-3xl border border-dashed bg-gray-50 p-6">
              <h2 className="text-2xl font-bold">💼 Accountant</h2>
              <p className="mt-3 text-gray-600">Coming soon.</p>
            </div>
  
            {/* Future Mortgage */}
            <div className="rounded-3xl border border-dashed bg-gray-50 p-6">
              <h2 className="text-2xl font-bold">🏠 Mortgage Agent</h2>
              <p className="mt-3 text-gray-600">Coming soon.</p>
            </div>
  
            {/* Future Driving */}
            <div className="rounded-3xl border border-dashed bg-gray-50 p-6 md:col-span-2">
              <h2 className="text-2xl font-bold">🚗 Driving School</h2>
              <p className="mt-3 text-gray-600">Coming soon.</p>
            </div>
          </div>
        </section>
      </main>
    );
  }