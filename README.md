# TucsonEats — Restaurant Partner Portal

> Next.js 14 · TypeScript · Supabase · Vercel

---

## Stack

| Layer       | Tech                         |
|-------------|------------------------------|
| Framework   | Next.js 14 (App Router)      |
| Language    | TypeScript                   |
| Styling     | CSS Modules + brand tokens   |
| Database    | Supabase (Postgres)          |
| Hosting     | Vercel                       |
| Payments    | Stripe (future)              |

---

## Local Setup (first time)

### 1. Clone and install
```bash
git clone https://github.com/YOUR-ORG/tucsoneats-restaurants.git
cd tucsoneats-restaurants
npm install
```

### 2. Set up Supabase
1. Go to [supabase.com](https://supabase.com) → New Project
2. Name it `tucsoneats-restaurants`
3. Open **SQL Editor** and paste the contents of `supabase-schema.sql`
4. Click **Run** — this creates the `restaurant_applications` table with RLS

### 3. Add environment variables
```bash
cp .env.local.example .env.local
```
Fill in `.env.local` with values from **Supabase → Settings → API**:
```
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
```

### 4. Run locally
```bash
npm run dev
# → http://localhost:3000
```

---

## Deploy to Vercel

### Option A: Vercel CLI (fastest)
```bash
npm i -g vercel
vercel login
vercel --prod
```
Vercel auto-detects Next.js. Add your env vars when prompted.

### Option B: GitHub → Vercel UI
1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repo
4. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Click **Deploy**

Every `git push` to `main` auto-deploys. Pull requests get preview URLs.

---

## Push to GitHub (fresh repo)
```bash
cd tucsoneats-restaurants
git init
git add .
git commit -m "feat: initial restaurant partner portal"
git branch -M main
git remote add origin https://github.com/YOUR-ORG/tucsoneats-restaurants.git
git push -u origin main
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── globals.css         # Brand tokens (CSS variables)
│   ├── page.tsx            # Landing page
│   ├── page.module.css
│   └── apply/
│       ├── page.tsx        # Application page
│       └── apply.module.css
├── components/
│   ├── Nav.tsx / .css
│   ├── Hero.tsx / .css
│   ├── Faq.tsx / .css      # Interactive accordion (client component)
│   ├── ApplyForm.tsx / .css # Form → Supabase
│   └── Footer.tsx / .css
└── lib/
    └── supabase.ts         # Supabase client + TypeScript types
```

---

## Viewing Submissions

Log into [app.supabase.com](https://app.supabase.com) → your project → **Table Editor** → `restaurant_applications`.

You can filter by `status = 'pending'` to see new applications, then update `status` to `approved` or `rejected`.

---

## Brand Tokens

All colors, fonts, and spacing live in `src/app/globals.css` as CSS custom properties (`--green`, `--pink`, `--cream`, etc.). Every component references these — change a token once, it updates everywhere.

---

## Next Steps

- [ ] Email notification when a new application comes in (Supabase Webhook → Resend)
- [ ] Admin dashboard to review/approve applications
- [ ] `/login` page for approved restaurant partners
- [ ] Restaurant dashboard (orders, payouts, menu management)
- [ ] Stripe integration for payouts
