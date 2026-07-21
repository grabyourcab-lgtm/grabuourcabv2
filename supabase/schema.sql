-- Grab Your Cab platform — database schema (run in Supabase SQL editor)

-- ============ TABLES ============
create table if not exists cars (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  category text not null,
  model_year text,
  seats int,
  luggage int,
  fuel text,
  transmission text,
  price int,
  badge text default '',
  photo_url text default '',
  service_type text default 'both',
  cities text[] default '{delhi-ncr,goa,noida-international-airport-jewar}',
  available boolean default true,
  sort_order int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists enquiries (
  id uuid primary key default gen_random_uuid(),
  name text, phone text, city text, service text,
  pickup text, dropoff text, travel_date text, message text,
  status text default 'new',
  created_at timestamptz default now()
);

create table if not exists blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  cover_url text default '',
  excerpt text,
  body text,
  published boolean default true,
  published_at timestamptz default now(),
  created_at timestamptz default now()
);

create table if not exists content (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz default now()
);

-- ============ ROW LEVEL SECURITY ============
alter table cars enable row level security;
alter table enquiries enable row level security;
alter table blog_posts enable row level security;
alter table content enable row level security;

-- public can read the catalogue / blog / content
drop policy if exists "public read cars" on cars;
create policy "public read cars" on cars for select using (true);
drop policy if exists "public read blog" on blog_posts;
create policy "public read blog" on blog_posts for select using (published = true);
drop policy if exists "public read content" on content;
create policy "public read content" on content for select using (true);

-- anyone can submit an enquiry
drop policy if exists "anyone insert enquiry" on enquiries;
create policy "anyone insert enquiry" on enquiries for insert with check (true);

-- logged-in admin can do everything
drop policy if exists "admin all cars" on cars;
create policy "admin all cars" on cars for all to authenticated using (true) with check (true);
drop policy if exists "admin all blog" on blog_posts;
create policy "admin all blog" on blog_posts for all to authenticated using (true) with check (true);
drop policy if exists "admin all content" on content;
create policy "admin all content" on content for all to authenticated using (true) with check (true);
drop policy if exists "admin read enquiries" on enquiries;
create policy "admin read enquiries" on enquiries for select to authenticated using (true);
drop policy if exists "admin update enquiries" on enquiries;
create policy "admin update enquiries" on enquiries for update to authenticated using (true);

-- ============ STORAGE (car photos) ============
insert into storage.buckets (id, name, public) values ('cars','cars', true)
  on conflict (id) do nothing;
drop policy if exists "public read car images" on storage.objects;
create policy "public read car images" on storage.objects for select using (bucket_id = 'cars');
drop policy if exists "admin upload car images" on storage.objects;
create policy "admin upload car images" on storage.objects for insert to authenticated with check (bucket_id = 'cars');
drop policy if exists "admin update car images" on storage.objects;
create policy "admin update car images" on storage.objects for update to authenticated using (bucket_id = 'cars');
drop policy if exists "admin delete car images" on storage.objects;
create policy "admin delete car images" on storage.objects for delete to authenticated using (bucket_id = 'cars');
