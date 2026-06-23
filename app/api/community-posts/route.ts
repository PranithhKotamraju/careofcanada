import { getSupabase } from "@/lib/supabase";

const categories = ["Win 🎉", "Question ❓", "Housing 🏠", "Jobs 💼"] as const;

const emailPattern = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
const linkPattern =
  /\b(?:https?:\/\/|www\.|[a-z0-9-]+\.(?:com|ca|org|net|io|co|me|info|biz)(?:\/|\b))/i;
const phonePattern = /\+?\d[\d\s().-]{6,}\d/;
const profanityPatterns = [
  "fuck",
  "fucking",
  "fucker",
  "shit",
  "bullshit",
  "bitch",
  "bastard",
  "asshole",
  "dick",
  "pussy",
  "cunt",
  "motherfucker",
];

function containsBlockedContent(value: string) {
  return (
    emailPattern.test(value) ||
    linkPattern.test(value) ||
    phonePattern.test(value)
  );
}

function normalizeForModeration(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[@]/g, "a")
    .replace(/[!1|]/g, "i")
    .replace(/[$5]/g, "s")
    .replace(/[0]/g, "o")
    .replace(/[3]/g, "e")
    .replace(/[^a-z]/g, "");
}

function containsProfanity(value: string) {
  const normalized = normalizeForModeration(value);

  return profanityPatterns.some((word) => normalized.includes(word));
}

function errorResponse(message: string, status: number) {
  return Response.json({ error: message }, { status });
}

async function hashValue(value: string) {
  const encoded = new TextEncoder().encode(`careofcanada-community:${value}`);
  const digest = await crypto.subtle.digest("SHA-256", encoded);

  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function getClientIp(request: Request) {
  return (
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-real-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown"
  );
}

function calculateCommunityStreak(createdDates: string[]) {
  const activeDays = new Set(
    createdDates.map((date) => new Date(date).toISOString().slice(0, 10)),
  );
  const cursor = new Date();
  cursor.setUTCHours(0, 0, 0, 0);

  const today = cursor.toISOString().slice(0, 10);
  if (!activeDays.has(today)) {
    cursor.setUTCDate(cursor.getUTCDate() - 1);
  }

  let streak = 0;

  while (activeDays.has(cursor.toISOString().slice(0, 10))) {
    streak += 1;
    cursor.setUTCDate(cursor.getUTCDate() - 1);
  }

  return streak;
}

export async function GET() {
  try {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from("community_posts")
      .select(
        "id, name, city, category, message, maple_points, cheers_count, approved, created_at",
      )
      .eq("approved", true)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Failed to fetch community posts:", error);
      return errorResponse("Unable to load community posts.", 500);
    }

    const posts = data ?? [];

    return Response.json(
      {
        posts,
        stats: {
          posts: posts.length,
          streak: calculateCommunityStreak(
            posts.map((post) => post.created_at),
          ),
        },
      },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    console.error("Community posts GET error:", error);
    return errorResponse("Unable to load community posts.", 500);
  }
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return errorResponse("Invalid request.", 400);
    }

    const values = body as Record<string, unknown>;

    if (
      (values.name !== undefined && typeof values.name !== "string") ||
      (values.city !== undefined && typeof values.city !== "string") ||
      (values.website !== undefined && typeof values.website !== "string") ||
      typeof values.category !== "string" ||
      typeof values.message !== "string"
    ) {
      return errorResponse("Invalid request.", 400);
    }

    const name = (values.name ?? "").trim();
    const city = (values.city ?? "").trim();
    const category = values.category.trim();
    const message = values.message.trim();
    const website = (values.website ?? "").trim();

    if (!message) {
      return errorResponse("Please write a message.", 400);
    }

    if (message.length > 300) {
      return errorResponse("Message must be 300 characters or fewer.", 400);
    }

    if (name.length > 80 || city.length > 80) {
      return errorResponse("Name and city must be 80 characters or fewer.", 400);
    }

    if (!categories.includes(category as (typeof categories)[number])) {
      return errorResponse("Please choose a valid category.", 400);
    }

    if (containsBlockedContent(`${name} ${city} ${message}`)) {
      return errorResponse(
        "Links, email addresses, and phone numbers are not allowed.",
        400,
      );
    }

    if (containsProfanity(`${name} ${city} ${message}`)) {
      return errorResponse("Please keep it respectful, mowa.", 400);
    }

    const ipHash = await hashValue(getClientIp(request));
    const supabase = getSupabase();
    const { data, error } = await supabase.rpc("submit_community_post", {
      p_name: name,
      p_city: city,
      p_category: category,
      p_message: message,
      p_ip_hash: ipHash,
      p_honeypot: website,
    });

    if (error) {
      console.error("Failed to create community post:", error);

      const expectedMessages = [
        "Unable to submit this post.",
        "Name and city must be 80 characters or fewer.",
        "Message must be between 1 and 300 characters.",
        "Please choose a valid category.",
        "Links, email addresses, and phone numbers are not allowed.",
        "Too many posts. Please try again in a few minutes.",
        "That message was already posted recently.",
      ];
      const expectedMessage = expectedMessages.find(
        (message) => error.message === message,
      );

      if (expectedMessage) {
        return errorResponse(expectedMessage, 400);
      }

      return errorResponse("Unable to submit your post. Please try again.", 500);
    }

    const post = Array.isArray(data) ? data[0] : data;

    if (!post) {
      return errorResponse("Unable to submit your post. Please try again.", 500);
    }

    return Response.json({ success: true, post }, { status: 201 });
  } catch (error) {
    console.error("Community posts POST error:", error);
    return errorResponse("Unable to submit your post. Please try again.", 500);
  }
}
