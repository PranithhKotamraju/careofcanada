"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

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

const filters = ["All", "Wins", "Questions", "Housing", "Jobs"];

export default function CommunityWall() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#fff8f5] via-[#fff4ef] to-[#fdeee8] text-[#251010]">
      <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-red-200/40 blur-3xl" />
      <div className="pointer-events-none absolute right-[-140px] top-[420px] h-96 w-96 rounded-full bg-orange-100/70 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 left-[-140px] h-96 w-96 rounded-full bg-red-100/70 blur-3xl" />

      <section className="relative z-10 mx-auto grid max-w-7xl gap-5 px-4 py-5 sm:px-6 sm:py-8 lg:grid-cols-[260px_1fr_320px]">
        <aside className="hidden lg:block">
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-6 block rounded-xl border border-[#ead7cf] bg-white/70 px-4 py-3 font-semibold text-[#3a1515] shadow-sm backdrop-blur hover:bg-white"
          >
            ← Back Home
          </motion.a>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="rounded-2xl border border-[#ead7cf] bg-white/75 p-5 shadow-sm backdrop-blur"
          >
            <h2 className="text-lg font-bold text-red-600">🍁 CareOfCanada</h2>
            <p className="mt-2 text-sm text-[#5c4b4b]">
              Telugu newcomers helping Telugu newcomers.
            </p>

            <nav className="mt-6 space-y-2 text-sm font-semibold">
              <a href="/" className="block rounded-lg px-3 py-2 text-[#5c4b4b] hover:bg-red-50 hover:text-red-600">
                Home
              </a>
              <a href="/first-30-days" className="block rounded-lg px-3 py-2 text-[#5c4b4b] hover:bg-red-50 hover:text-red-600">
                First 30 Days
              </a>
              <a href="/community" className="block rounded-lg bg-red-600 px-3 py-2 text-white">
                Community
              </a>
              <a href="/community-partners" className="block rounded-lg px-3 py-2 text-[#5c4b4b] hover:bg-red-50 hover:text-red-600">
                Partners
              </a>
            </nav>
          </motion.div>
        </aside>

        <div className="min-w-0">
          <motion.a
            href="/"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 block rounded-xl border border-[#ead7cf] bg-white/70 px-4 py-3 text-sm font-semibold text-[#3a1515] shadow-sm backdrop-blur lg:hidden"
          >
            ← Back Home
          </motion.a>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5 }}
            className="mb-5 overflow-hidden rounded-3xl border border-red-900/40 bg-gradient-to-br from-[#3a1515] via-[#251010] to-[#140909] p-5 text-white shadow-[0_20px_50px_rgba(220,38,38,0.18)] sm:p-6"
          >
            <p className="text-sm font-semibold text-red-400">
              CareOfCanada Community 🇨🇦
            </p>

            <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Telugu Newcomer Community
            </h1>

            <p className="mt-3 text-sm leading-6 text-red-100/75 sm:text-base">
              Share wins. Ask questions. Help each other settle in Canada.
            </p>

            <div className="mt-5 flex flex-wrap gap-2 text-sm">
              <span className="rounded-full bg-white/10 px-3 py-1 text-red-100">
                🍁 127 members
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-red-100">
                💬 52 posts
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-red-100">
                🤝 Telugu support
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mb-5 rounded-3xl border border-[#ead7cf] bg-white/80 p-4 shadow-md backdrop-blur sm:p-5"
          >
            <h2 className="text-lg font-bold sm:text-xl">
              What's on your mind, mowa?
            </h2>

            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <input
                className="w-full rounded-xl border border-[#ead7cf] bg-[#fff8f5] px-4 py-3 text-[#251010] placeholder:text-[#8a6f6f] outline-none focus:border-red-500"
                placeholder="Name optional"
              />
              <input
                className="w-full rounded-xl border border-[#ead7cf] bg-[#fff8f5] px-4 py-3 text-[#251010] placeholder:text-[#8a6f6f] outline-none focus:border-red-500"
                placeholder="City optional"
              />
              <select className="w-full rounded-xl border border-[#ead7cf] bg-[#fff8f5] px-4 py-3 text-[#251010] outline-none focus:border-red-500">
                <option>Win 🎉</option>
                <option>Question ❓</option>
                <option>Housing 🏠</option>
                <option>Jobs 💼</option>
              </select>
            </div>

            <textarea
              className="mt-3 h-28 w-full rounded-xl border border-[#ead7cf] bg-[#fff8f5] px-4 py-3 text-[#251010] placeholder:text-[#8a6f6f] outline-none focus:border-red-500"
              placeholder="Write your message... max 300 characters"
            />

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-5 text-[#5c4b4b]">
                No links, phone numbers, emails, or spam.
              </p>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="w-full rounded-xl bg-red-600 px-6 py-3 font-semibold text-white shadow-sm hover:bg-red-700 sm:w-auto"
              >
                Post
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5, delay: 0.12 }}
            className="overflow-hidden rounded-3xl border border-[#ead7cf] bg-white/80 shadow-md backdrop-blur"
          >
            <div className="flex gap-2 overflow-x-auto border-b border-[#ead7cf] p-3 text-sm sm:p-4">
              {filters.map((item, index) => (
                <button
                  key={item}
                  className={`shrink-0 rounded-full px-4 py-2 font-semibold transition ${
                    index === 0
                      ? "bg-red-600 text-white"
                      : "border border-[#ead7cf] bg-white/70 text-[#5c4b4b] hover:bg-red-50 hover:text-red-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {posts.map((post, index) => (
              <motion.article
                key={post.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ x: 4 }}
                className="border-b border-[#ead7cf] p-4 last:border-b-0 sm:p-5"
              >
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-[#3a1515] font-bold text-white shadow-sm">
                    {post.name.charAt(0)}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                      <span className="font-bold text-[#251010]">{post.name}</span>
                      <span className="text-[#a58b8b]">•</span>
                      <span className="text-[#5c4b4b]">{post.city}</span>
                      <span className="text-[#a58b8b]">•</span>
                      <span className="text-[#5c4b4b]">{post.time}</span>
                    </div>

                    <p className="mt-1 text-sm font-semibold text-red-600">
                      {post.category}
                    </p>

                    <p className="mt-3 break-words text-sm leading-6 text-[#251010] sm:text-base">
                      {post.message}
                    </p>

                    <div className="mt-4 text-sm font-semibold text-red-600">
                      🍁 {post.points} Maple Points
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <aside className="space-y-5 lg:space-y-6">
          {[
            {
              title: "🔥 Community Stats",
              items: [
                ["Members", "127"],
                ["Posts", "52"],
                ["Housing", "14"],
                ["Jobs", "18"],
              ],
            },
            {
              title: "🍁 Top Contributors",
              items: [
                ["Ajith", "950"],
                ["Sai", "120"],
                ["Priya", "45"],
              ],
            },
          ].map((card, index) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.45, delay: 0.12 + index * 0.08 }}
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-[#ead7cf] bg-white/75 p-5 shadow-sm backdrop-blur"
            >
              <h2 className="font-bold">{card.title}</h2>

              <div className="mt-4 space-y-3 text-sm text-[#5c4b4b]">
                {card.items.map(([label, value]) => (
                  <p key={label} className="flex justify-between">
                    <span>{label}</span>
                    <span className="font-bold text-red-600">{value}</span>
                  </p>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.45, delay: 0.28 }}
            whileHover={{ y: -5 }}
            className="rounded-3xl border border-red-900/40 bg-gradient-to-br from-[#3a1515] via-[#251010] to-[#140909] p-5 text-white shadow-[0_20px_40px_rgba(220,38,38,0.14)]"
          >
            <h2 className="font-bold">Rules</h2>
            <div className="mt-4 space-y-2 text-sm text-red-100/75">
              <p>Be respectful.</p>
              <p>No links or phone numbers.</p>
              <p>No spam.</p>
              <p>Help newcomers.</p>
            </div>
          </motion.div>
        </aside>
      </section>
    </main>
  );
}