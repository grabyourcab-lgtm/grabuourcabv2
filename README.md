# Grab Your Cab — Platform (Next.js + Supabase)

A self-manageable website + admin panel for your cab business.

- **Phase 1 (done):** database, your 40 seeded cars, and a home page that lists the fleet live.
- **Phase 2 (done):** secure **admin panel** — login + full car management (add / edit / delete, photo upload, prices, badges, availability, cities). Enquiries / Blog / Content sections are stubbed and come in Phase 4.

## Folder guide
- `supabase/schema.sql` — creates tables, security rules, and the car-photo storage bucket.
- `supabase/seed.sql` — loads your 40 cars + starter content + blog posts.
- `app/` — the app: `/` (public home), `/login`, `/admin/*` (admin panel).
- `lib/`, `components/`, `middleware.ts` — connection helpers + route protection.

## One-time setup (~15 minutes)

### 1. Database (Supabase — free)
1. supabase.com → **New project** (region: Mumbai/Singapore). Save the database password.
2. **SQL Editor → New query** → paste `supabase/schema.sql` → **Run**.
3. **New query** → paste `supabase/seed.sql` → **Run**. Check **Table editor → cars** shows 40 rows.

### 2. Create your admin login
In Supabase: **Authentication → Users → Add user → Create new user**. Enter your email and a
password, and tick **Auto Confirm User**. This is the login for `/admin`.

### 3. Get your keys
**Project Settings → API** → copy **Project URL**, **anon public** key, **service_role** key.

### 4. Run it
1. Install Node.js 18+ (nodejs.org).
2. Copy `.env.local.example` to `.env.local` and paste your 3 keys.
3. In this folder:
   ```
   npm install
   npm run dev
   ```
4. Open http://localhost:3000 — the public site with your 40 cars.
5. Open http://localhost:3000/admin — sign in with the user you created, then add/edit cars.

## Using the admin panel
- **Dashboard** — counts of cars, new enquiries, posts.
- **Cars** — search/filter, **Add car**, **Edit**, **Delete**. Upload a photo, set price, badge
  (Popular/New/Luxury), which cities show it, and whether it's live on the site.
- Changes appear on the public site immediately.

## What's next
- **Phase 3:** the full approved public design, driven by this database.
- **Phase 4:** booking-enquiry inbox, blog editor, content editor.
- **Phase 5:** deploy to Vercel + connect grabyourcab.com.

Never share or commit `.env.local` (secret keys).
