-- ============================================================
-- TucsonEats Restaurant Applications
-- Run this in your Supabase SQL Editor
-- ============================================================

create table if not exists public.restaurant_applications (
  id               uuid default gen_random_uuid() primary key,
  created_at       timestamptz default now() not null,
  restaurant_name  text not null,
  owner_name       text not null,
  email            text not null,
  phone            text not null,
  address          text not null,
  cuisine_type     text not null,
  how_did_you_hear text,
  status           text default 'pending' check (status in ('pending', 'approved', 'rejected', 'on_hold')),
  notes            text,
  reviewed_at      timestamptz,
  reviewed_by      text
);

-- Index for fast lookups by status and email
create index on public.restaurant_applications (status);
create index on public.restaurant_applications (email);
create index on public.restaurant_applications (created_at desc);

-- Row Level Security
alter table public.restaurant_applications enable row level security;

-- Allow anyone to INSERT (submit a form)
create policy "Anyone can submit an application"
  on public.restaurant_applications
  for insert
  with check (true);

-- Only authenticated users (your team) can SELECT / UPDATE / DELETE
create policy "Authenticated users can view applications"
  on public.restaurant_applications
  for select
  using (auth.role() = 'authenticated');

create policy "Authenticated users can update applications"
  on public.restaurant_applications
  for update
  using (auth.role() = 'authenticated');

-- ============================================================
-- Optional: Email notification via Supabase Database Webhooks
-- Set up in Supabase > Database > Webhooks
-- Point to a serverless function or Resend/Sendgrid endpoint
-- ============================================================
