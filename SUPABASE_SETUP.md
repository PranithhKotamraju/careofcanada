# Supabase setup

## 1. Create the table

Open the SQL Editor in your Supabase project, copy the contents of
`supabase/community_posts.sql`, and run it.

The script creates the posts, cheers, and rate-limit tables, enables Row Level
Security, and exposes two narrowly scoped database functions that allow
anonymous visitors to:

- read approved posts only;
- instantly publish posts that pass validation and rate limits;
- send one Maple Cheer per browser to each post.

New `"Win 🎉"` posts receive 15 Maple Points. Every other allowed category
receives 10 Maple Points.

## 2. Configure environment variables

Create `.env.local` in the project root:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

Find both values in the Supabase dashboard under **Project Settings → API**.
Do not use a service-role key for this integration.

Restart the Next.js development server after adding or changing environment
variables.

## 3. How publishing works

Clean posts are saved with `approved = true` and appear immediately. Submissions
are limited to three per IP address every ten minutes, and duplicate messages
are blocked for 24 hours.

The API rejects messages over 300 characters and submissions containing links,
email addresses, or phone numbers. The database also enforces the message
length, allowed categories, Maple Point values, blocked-content rules, rate
limits, and duplicate protection.

Maple Cheers do not add Maple Points. They are lightweight appreciation, limited
to one Cheer per browser per post.

If you previously ran an older version of `community_posts.sql`, run the full
file again. It upgrades the existing table and replaces the moderation policy
with the secure instant-publishing functions.
