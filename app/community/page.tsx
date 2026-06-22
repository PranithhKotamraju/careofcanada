export {};

const posts = [
    {
      name: "Sai Kiran",
      city: "Brampton",
      points: 120,
      category: "Win 🎉",
      message:
        "Got my first interview after 3 months of applying. Feeling hopeful today.",
      time: "2 hours ago",
    },
    {
      name: "Priya",
      city: "Mississauga",
      points: 45,
      category: "Question ❓",
      message: "Any tips for finding a good basement near transit?",
      time: "5 hours ago",
    },
    {
      name: "Kiran",
      city: "Toronto",
      points: 80,
      category: "Win 🎉",
      message: "Passed my G2 test today. One step closer to freedom.",
      time: "1 day ago",
    },
  ];
  
  export default function CommunityWall() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-[#1b0f0f] via-[#140909] to-black text-white">
        <section className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[260px_1fr_320px]">
          <aside className="hidden lg:block">
            <a
              href="/"
              className="mb-6 block rounded-xl border border-red-900/40 bg-[#2a1717] px-4 py-3 font-semibold"
            >
              ← Back Home
            </a>
  
            <div className="rounded-2xl border border-red-900/40 bg-[#2a1717] p-5">
              <h2 className="text-lg font-bold text-red-400">🍁 CareOfCanada</h2>
              <p className="mt-2 text-sm text-red-100/70">
                Telugu newcomers helping Telugu newcomers.
              </p>
  
              <nav className="mt-6 space-y-3 text-sm">
                <a href="/" className="block text-red-100/70 hover:text-white">
                  Home
                </a>
                <a
                  href="/first-30-days"
                  className="block text-red-100/70 hover:text-white"
                >
                  First 30 Days
                </a>
                <a href="/community" className="block font-semibold text-red-400">
                  Community
                </a>
                <a
                  href="/community-partners"
                  className="block text-red-100/70 hover:text-white"
                >
                  Partners
                </a>
              </nav>
            </div>
          </aside>
  
          <div>
            <div className="mb-6 rounded-2xl border border-red-900/40 bg-gradient-to-r from-[#2a1717] to-[#3a1c1c] p-6">
              <p className="text-sm font-semibold text-red-400">
                CareOfCanada Community 🇨🇦
              </p>
  
              <h1 className="mt-3 text-4xl font-bold">
                Telugu Newcomer Community
              </h1>
  
              <p className="mt-3 text-red-100/70">
                Share wins. Ask questions. Help each other settle in Canada.
              </p>
            </div>
  
            <div className="mb-6 rounded-2xl border border-red-900/40 bg-[#2a1717] p-5">
              <h2 className="text-xl font-bold">What's on your mind, mowa?</h2>
  
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                <input
                  className="rounded-lg border border-red-900/40 bg-[#1b0f0f] px-4 py-3 text-white placeholder:text-red-100/40"
                  placeholder="Name optional"
                />
                <input
                  className="rounded-lg border border-red-900/40 bg-[#1b0f0f] px-4 py-3 text-white placeholder:text-red-100/40"
                  placeholder="City"
                />
                <select className="rounded-lg border border-red-900/40 bg-[#1b0f0f] px-4 py-3 text-white">
                  <option>Win 🎉</option>
                  <option>Question ❓</option>
                  <option>Housing 🏠</option>
                  <option>Jobs 💼</option>
                </select>
              </div>
  
              <textarea
                className="mt-3 h-28 w-full rounded-lg border border-red-900/40 bg-[#1b0f0f] px-4 py-3 text-white placeholder:text-red-100/40"
                placeholder="Write your message... max 300 characters"
              />
  
              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-red-100/60">
                  No links, phone numbers, emails, or spam.
                </p>
  
                <button className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700">
                  Post
                </button>
              </div>
            </div>
  
            <div className="rounded-2xl border border-red-900/40 bg-[#2a1717]">
              <div className="flex gap-3 border-b border-red-900/40 p-4 text-sm">
                <button className="rounded-full bg-red-600 px-4 py-2 font-semibold">
                  All
                </button>
                <button className="rounded-full border border-red-900/40 px-4 py-2">
                  Wins
                </button>
                <button className="rounded-full border border-red-900/40 px-4 py-2">
                  Questions
                </button>
                <button className="rounded-full border border-red-900/40 px-4 py-2">
                  Housing
                </button>
                <button className="rounded-full border border-red-900/40 px-4 py-2">
                  Jobs
                </button>
              </div>
  
              {posts.map((post, index) => (
                <article
                  key={index}
                  className="border-b border-red-900/40 p-5 last:border-b-0"
                >
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 font-bold">
                      {post.name.charAt(0)}
                    </div>
  
                    <div>
                      <div className="flex flex-wrap gap-2 text-sm">
                        <span className="font-bold">{post.name}</span>
                        <span className="text-red-100/40">•</span>
                        <span className="text-red-100/60">{post.city}</span>
                        <span className="text-red-100/40">•</span>
                        <span className="text-red-100/60">{post.time}</span>
                      </div>
  
                      <p className="mt-1 text-sm font-semibold text-red-400">
                        {post.category}
                      </p>
  
                      <p className="mt-3 text-red-50">{post.message}</p>
  
                      <div className="mt-4 flex gap-4 text-sm">
                        <span className="text-red-400">
                          🍁 {post.points} Maple Points
                        </span>
                        <button className="text-red-100/60">Reply</button>
                        <button className="text-red-100/60">Report</button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
  
          <aside className="space-y-6">
            <div className="rounded-2xl border border-red-900/40 bg-[#2a1717] p-5">
              <h2 className="font-bold">🔥 Community Stats</h2>
              <div className="mt-4 space-y-3 text-sm text-red-100/70">
                <p>
                  Members: <span className="text-red-400">127</span>
                </p>
                <p>
                  Posts: <span className="text-red-400">52</span>
                </p>
                <p>
                  Housing: <span className="text-red-400">14</span>
                </p>
                <p>
                  Jobs: <span className="text-red-400">18</span>
                </p>
              </div>
            </div>
  
            <div className="rounded-2xl border border-red-900/40 bg-[#2a1717] p-5">
              <h2 className="font-bold">🍁 Top Contributors</h2>
              <div className="mt-4 space-y-3 text-sm">
                <p className="flex justify-between">
                  <span>Ajith</span>
                  <span className="text-red-400">950</span>
                </p>
                <p className="flex justify-between">
                  <span>Sai</span>
                  <span className="text-red-400">120</span>
                </p>
                <p className="flex justify-between">
                  <span>Priya</span>
                  <span className="text-red-400">45</span>
                </p>
              </div>
            </div>
  
            <div className="rounded-2xl border border-red-900/40 bg-[#2a1717] p-5">
              <h2 className="font-bold">Rules</h2>
              <div className="mt-4 space-y-2 text-sm text-red-100/70">
                <p>Be respectful.</p>
                <p>No links or phone numbers.</p>
                <p>No spam.</p>
                <p>Help newcomers.</p>
              </div>
            </div>
          </aside>
        </section>
      </main>
    );
  }