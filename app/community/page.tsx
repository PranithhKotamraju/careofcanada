export {};

const posts = [
    {
      name: "Sai Kiran",
      city: "Brampton",
      points: 120,
      category: "Win 🎉",
      message: "Got my first interview after 3 months of applying. Feeling hopeful today.",
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
      <main className="min-h-screen bg-gray-50 px-6 py-12 text-gray-900">
        <section className="mx-auto max-w-6xl">
          <a href="/" className="mb-8 inline-block rounded-xl border bg-white px-5 py-3 font-semibold">
            ← Back Home
          </a>
  
          <img
  src="/images/community-wall.jpg"
  alt="CareOfCanada Community"
  className="mb-8 h-52 w-full rounded-3xl object-cover shadow-sm"
/>



          <div className="mb-10">
            <p className="mb-4 inline-block rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-red-700">
              CareOfCanada Community 🇨🇦
            </p>
  
            <h1 className="text-4xl font-bold md:text-6xl">Community Wall</h1>
  
            <p className="mt-4 max-w-2xl text-xl text-gray-600">
              Share a win, ask a question, or help another Telugu newcomer in Canada.
            </p>
          </div>
  
          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <div>
              <div className="rounded-3xl border bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold">What's on your mind, mowa?</h2>
  
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <input className="rounded-xl border px-4 py-3" placeholder="Name (optional)" />
                  <input className="rounded-xl border px-4 py-3" placeholder="City" />
                </div>
  
                <textarea
                  className="mt-4 h-32 w-full rounded-xl border px-4 py-3"
                  placeholder="Write your message... max 300 characters"
                />
  
                <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-sm text-gray-500">
                    No links, phone numbers, emails, or spam.
                  </p>
  
                  <button className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white">
                    Post
                  </button>
                </div>
              </div>
  
              <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
                <div className="mb-6 flex flex-wrap gap-3">
                  <button className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white">
                    All Posts
                  </button>
                  <button className="rounded-full border px-4 py-2 text-sm font-semibold">
                    Wins 🎉
                  </button>
                  <button className="rounded-full border px-4 py-2 text-sm font-semibold">
                    Questions ❓
                  </button>
                  <button className="rounded-full border px-4 py-2 text-sm font-semibold">
                    Housing 🏠
                  </button>
                  <button className="rounded-full border px-4 py-2 text-sm font-semibold">
                    Jobs 💼
                  </button>
                </div>
  
                <div className="divide-y">
                  {posts.map((post, index) => (
                    <article key={index} className="py-6 first:pt-0 last:pb-0">
                      <div className="flex gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-50 font-bold text-red-600">
                          {post.name.charAt(0)}
                        </div>
  
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="font-bold">{post.name}</h3>
                            <span className="text-gray-400">•</span>
                            <p className="text-sm text-gray-500">{post.city}</p>
                            <span className="text-gray-400">•</span>
                            <p className="text-sm text-gray-500">{post.time}</p>
                          </div>
  
                          <p className="mt-1 text-sm font-semibold text-red-600">
                            {post.category}
                          </p>
  
                          <p className="mt-3 text-gray-700">{post.message}</p>
  
                          <div className="mt-4 flex items-center gap-4 text-sm">
                            <span className="font-semibold text-red-600">
                              🍁 {post.points} Maple Points
                            </span>
                            <button className="text-gray-500">Reply</button>
                            <button className="text-gray-500">Report</button>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
  
            <aside className="space-y-6">
              <div className="rounded-3xl border bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold">Community Rules</h2>
  
                <div className="mt-4 space-y-3 text-gray-600">
                  <p>Be kind and respectful.</p>
                  <p>No links, phone numbers, or emails.</p>
                  <p>No spam or self-promotion.</p>
                  <p>Keep it helpful for newcomers.</p>
                </div>
              </div>
  
              <div className="rounded-3xl border bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold">Maple Points 🍁</h2>
  
                <div className="mt-4 space-y-3 text-gray-600">
                  <p>Post a helpful update: +10</p>
                  <p>Share a newcomer win: +15</p>
                  <p>Helpful reply: +5</p>
                </div>
  
                <p className="mt-4 rounded-2xl bg-red-50 p-4 text-sm text-red-700">
                  Points are just for fun and community recognition.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>
    );
  }