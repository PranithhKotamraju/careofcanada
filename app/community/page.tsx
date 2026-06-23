"use client";

import GuidanceCallCard from "@/components/GuidanceCallCard";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { FormEvent } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

type CommunityPost = {
  id: number;
  name: string;
  city: string;
  category: string;
  message: string;
  maple_points: number;
  cheers_count: number;
  approved: boolean;
  created_at: string;
};

type CommunityStats = {
  posts: number;
  streak: number;
};

const filters = ["All", "Wins", "Questions", "Housing", "Jobs"];
const dailyPrompts = [
  "What surprised you about Canada today?",
  "Share one small win from your week.",
  "What do you wish you knew on day one?",
  "Which newcomer tip actually helped you?",
  "What made Canada feel a little more like home?",
  "Ask the community one thing on your mind.",
  "Give another mowa one useful tip.",
];

const mailerLiteSubscribeUrl =
  "https://assets.mailerlite.com/jsonp/2461634/forms/190924753687545174/subscribe";

function getDailyPrompt() {
  const dayNumber = Math.floor(Date.now() / 86_400_000);
  return dailyPrompts[dayNumber % dailyPrompts.length];
}

function getVisitorId() {
  const storageKey = "careofcanada-community-visitor";
  const existingId = window.localStorage.getItem(storageKey);

  if (existingId) return existingId;

  const newId =
    typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  window.localStorage.setItem(storageKey, newId);

  return newId;
}

function getCheeredPostIds() {
  try {
    const stored = window.localStorage.getItem(
      "careofcanada-cheered-community-posts",
    );
    const values: unknown = stored ? JSON.parse(stored) : [];

    return Array.isArray(values)
      ? values.filter((value): value is number => typeof value === "number")
      : [];
  } catch {
    return [];
  }
}

function getCheerBadge(cheersCount: number) {
  if (cheersCount >= 15) return "🍁 Maple Favourite";
  if (cheersCount >= 5) return "❤️ Community Loved";
  return null;
}

function formatRelativeTime(createdAt: string) {
  const elapsed = Date.now() - new Date(createdAt).getTime();
  const minutes = Math.max(0, Math.floor(elapsed / 60_000));

  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;

  const days = Math.floor(hours / 24);
  return `${days} day${days === 1 ? "" : "s"} ago`;
}

export default function CommunityWall() {
  const [posts, setPosts] = useState<CommunityPost[]>([]);
  const [stats, setStats] = useState<CommunityStats>({ posts: 0, streak: 0 });
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("Win 🎉");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [cheeredPostIds, setCheeredPostIds] = useState<number[]>([]);
  const [cheeringPostId, setCheeringPostId] = useState<number | null>(null);
  const [emailSignupSubmitted, setEmailSignupSubmitted] = useState(false);
  const [emailSignupSuccess, setEmailSignupSuccess] = useState(false);
  const dailyPrompt = getDailyPrompt();
  const emailSignupCard = (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.5, delay: 0.1 }}
      whileHover={{ y: -4 }}
      className="mb-5 rounded-3xl border border-[#ead7cf] bg-white/80 p-4 shadow-md backdrop-blur sm:p-5"
    >
      <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="text-lg font-bold sm:text-xl">
            Get Newcomer Tips Weekly 🍁
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#5c4b4b]">
            Jobs, housing, money, and Canada first-step tips. Calm, useful, no
            spam.
          </p>
        </div>

        {emailSignupSuccess ? (
          <div className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
            Welcome aboard, mowa 🍁 Check your inbox.
          </div>
        ) : (
          <form
            action={mailerLiteSubscribeUrl}
            method="post"
            target="community-mailerlite-signup-frame"
            onSubmit={() => setEmailSignupSubmitted(true)}
            className="flex min-w-0 flex-col gap-2 sm:min-w-[360px] sm:flex-row"
          >
            <label htmlFor="community-email" className="sr-only">
              Email address
            </label>
            <input
              id="community-email"
              type="email"
              name="fields[email]"
              required
              autoComplete="email"
              placeholder="Enter your email"
              className="min-w-0 flex-1 rounded-xl border border-[#ead7cf] bg-white px-4 py-3 text-sm text-[#251010] outline-none transition placeholder:text-[#8c7770] focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />
            <input type="hidden" name="ml-submit" value="1" />
            <input type="hidden" name="anticsrf" value="true" />
            <button
              type="submit"
              className="rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700"
            >
              Join Free
            </button>
          </form>
        )}
      </div>

      <iframe
        name="community-mailerlite-signup-frame"
        title="CareOfCanada community email signup"
        className="hidden"
        onLoad={() => {
          if (emailSignupSubmitted) {
            setEmailSignupSuccess(true);
          }
        }}
      />
    </motion.div>
  );

  const visiblePosts = posts.filter((post) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Wins") return post.category === "Win 🎉";
    if (activeFilter === "Questions") return post.category === "Question ❓";
    if (activeFilter === "Housing") return post.category === "Housing 🏠";
    if (activeFilter === "Jobs") return post.category === "Jobs 💼";
    return true;
  });

  useEffect(() => {
    const storageTimer = window.setTimeout(() => {
      setCheeredPostIds(getCheeredPostIds());
    }, 0);

    async function loadPosts() {
      try {
        const response = await fetch("/api/community-posts", {
          cache: "no-store",
        });

        if (!response.ok) {
          console.error("Community posts API error:", {
            status: response.status,
            statusText: response.statusText,
          });
          return;
        }

        const data = (await response.json()) as {
          posts: CommunityPost[];
          stats: CommunityStats;
        };
        setPosts(data.posts);
        setStats(data.stats);
      } catch (error) {
        console.error("Unable to load community posts:", error);
      }
    }

    void loadPosts();

    return () => window.clearTimeout(storageTimer);
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!message.trim()) {
      const errorMessage = "Please write a message.";
      console.error("Community post validation error:", errorMessage);
      setFormMessage(errorMessage);
      return;
    }

    setIsSubmitting(true);
    setFormMessage("");

    try {
      const response = await fetch("/api/community-posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, city, category, message, website }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
        success?: boolean;
        post?: CommunityPost;
      };

      if (!response.ok) {
        const errorMessage =
          data.error ??
          `Unable to submit your post. The API returned ${response.status}.`;
        console.error("Community post API error:", {
          status: response.status,
          statusText: response.statusText,
          error: errorMessage,
        });
        setFormMessage(errorMessage);
        return;
      }

      setName("");
      setCity("");
      setCategory("Win 🎉");
      setMessage("");
      setWebsite("");

      if (data.post) {
        setPosts((currentPosts) => [data.post!, ...currentPosts]);
        setStats((currentStats) => ({
          ...currentStats,
          posts: currentStats.posts + 1,
          streak: Math.max(1, currentStats.streak),
        }));
        setFormMessage(
          `You're live, mowa. +${data.post.maple_points} Maple Points! 🍁`,
        );
      } else {
        setFormMessage("You're live, mowa! 🍁");
      }
    } catch (error) {
      console.error("Unable to submit community post:", error);
      setFormMessage("Unable to submit your post. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleCheer(postId: number) {
    if (cheeredPostIds.includes(postId) || cheeringPostId !== null) return;

    setCheeringPostId(postId);

    try {
      const response = await fetch(`/api/community-posts/${postId}/cheer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ visitorId: getVisitorId() }),
      });
      const data = (await response.json().catch(() => ({}))) as {
        cheersCount?: number;
        error?: string;
      };

      if (!response.ok || typeof data.cheersCount !== "number") {
        const errorMessage =
          data.error ??
          `Unable to send your Maple Cheer. The API returned ${response.status}.`;
        console.error("Maple Cheer API error:", {
          status: response.status,
          statusText: response.statusText,
          error: errorMessage,
        });
        setFormMessage(errorMessage);
        return;
      }

      setPosts((currentPosts) =>
        currentPosts.map((post) =>
          post.id === postId
            ? { ...post, cheers_count: data.cheersCount! }
            : post,
        ),
      );

      const updatedIds = [...cheeredPostIds, postId];
      setCheeredPostIds(updatedIds);
      window.localStorage.setItem(
        "careofcanada-cheered-community-posts",
        JSON.stringify(updatedIds),
      );
    } catch (error) {
      console.error("Unable to send Maple Cheer:", error);
      setFormMessage("Unable to send your Maple Cheer. Please try again.");
    } finally {
      setCheeringPostId(null);
    }
  }

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
                💬 {stats.posts} posts
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-red-100">
                🔥 {stats.streak} day{stats.streak === 1 ? "" : "s"} community
                streak
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

            <form onSubmit={handleSubmit} noValidate>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                <input
                  className="w-full rounded-xl border border-[#ead7cf] bg-[#fff8f5] px-4 py-3 text-[#251010] placeholder:text-[#8a6f6f] outline-none focus:border-red-500"
                  placeholder="Name optional"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  maxLength={80}
                />
                <input
                  className="w-full rounded-xl border border-[#ead7cf] bg-[#fff8f5] px-4 py-3 text-[#251010] placeholder:text-[#8a6f6f] outline-none focus:border-red-500"
                  placeholder="City optional"
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                  maxLength={80}
                />
                <select
                  className="w-full rounded-xl border border-[#ead7cf] bg-[#fff8f5] px-4 py-3 text-[#251010] outline-none focus:border-red-500"
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                >
                  <option>Win 🎉</option>
                  <option>Question ❓</option>
                  <option>Housing 🏠</option>
                  <option>Jobs 💼</option>
                </select>
              </div>

              <textarea
                className="mt-3 h-28 w-full rounded-xl border border-[#ead7cf] bg-[#fff8f5] px-4 py-3 text-[#251010] placeholder:text-[#8a6f6f] outline-none focus:border-red-500"
                placeholder={`${dailyPrompt} Max 300 characters`}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                maxLength={300}
                required
              />

              <input
                type="text"
                name="website"
                value={website}
                onChange={(event) => setWebsite(event.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-5 text-[#5c4b4b]">
                  {formMessage ||
                    "No links, phone numbers, emails, or spam."}
                </p>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full rounded-xl bg-red-600 px-6 py-3 font-semibold text-white shadow-sm hover:bg-red-700 sm:w-auto"
                >
                  Post
                </motion.button>
              </div>
            </form>
          </motion.div>

          {emailSignupCard}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5, delay: 0.12 }}
            className="overflow-hidden rounded-3xl border border-[#ead7cf] bg-white/80 shadow-md backdrop-blur"
          >
            <div className="flex gap-2 overflow-x-auto border-b border-[#ead7cf] p-3 text-sm sm:p-4">
              {filters.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setActiveFilter(item)}
                  className={`shrink-0 rounded-full px-4 py-2 font-semibold transition ${
                    activeFilter === item
                      ? "bg-red-600 text-white"
                      : "border border-[#ead7cf] bg-white/70 text-[#5c4b4b] hover:bg-red-50 hover:text-red-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {visiblePosts.map((post, index) => {
              const cheerBadge = getCheerBadge(post.cheers_count);
              const hasCheered = cheeredPostIds.includes(post.id);

              return (
                <motion.article
                  key={post.id}
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
                        <span className="font-bold text-[#251010]">
                          {post.name}
                        </span>
                        <span className="text-[#a58b8b]">•</span>
                        <span className="text-[#5c4b4b]">{post.city}</span>
                        <span className="text-[#a58b8b]">•</span>
                        <span className="text-[#5c4b4b]">
                          {formatRelativeTime(post.created_at)}
                        </span>
                      </div>

                      <p className="mt-1 text-sm font-semibold text-red-600">
                        {post.category}
                      </p>

                      <p className="mt-3 break-words text-sm leading-6 text-[#251010] sm:text-base">
                        {post.message}
                      </p>

                      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm font-semibold text-red-600">
                        <span>🍁 {post.maple_points} Maple Points</span>
                        <motion.button
                          type="button"
                          onClick={() => void handleCheer(post.id)}
                          disabled={hasCheered || cheeringPostId === post.id}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.97 }}
                          className="rounded-full border border-red-200 bg-white/70 px-3 py-1 hover:bg-red-50"
                        >
                          {hasCheered ? "You sent a Maple" : "Maple Cheer"} 🍁{" "}
                          {post.cheers_count}
                        </motion.button>
                        {cheerBadge && <span>{cheerBadge}</span>}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>

        <aside className="space-y-5 lg:space-y-6">
          {[
            {
              title: "🔥 Community Stats",
              items: [
                ["Members", "127"],
                ["Posts", String(stats.posts)],
                ["Streak", `${stats.streak} days`],
                ["Housing", "14"],
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

          <GuidanceCallCard />

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
