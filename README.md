# CUEAI 🚀

> AI-Powered Prompt Enhancement Platform — build better prompts across multiple AI providers.

## 🌟 Overview

CueAI is a modern React + TypeScript SPA with Supabase backend. It provides 40+ specialized tools, dynamic prompt templates, user-provided AI keys (Option B), format-aware downloads, and prompt/file size guards.

## 🏗️ Stack
- React 18, TypeScript, Vite, Tailwind CSS
- React Router DOM (protected routes, lazy loading)
- Supabase (Auth, Postgres with RLS)

## 🔐 Option B (User API Keys)
- Users save their AI key and base URL in Profile
- Frontend calls the AI provider directly using those values

## 📦 Setup
1) Clone & install
```bash
git clone <https://github.com/UsamaAli-PK/CUEAI>
cd CueAI
npm install
```

2) Environment
Create `.env` with:
```bash
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

3) Dev
```bash
npm run dev
```

## 🔧 Build & Deploy (Netlify)
- Build command: `npm run build`
- Publish directory: `dist`
- Ensure SPA routing:
  - `public/_redirects` contains: `/*    /index.html   200`
  - `netlify.toml` SPA redirects
- Set env vars in Netlify: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`
- If Netlify flags exposed secrets, allowlist those two variable names

## 🔌 Supabase
- Credentials are read from env in `src/lib/supabase.ts`
- Single idempotent migration at `supabase/migrations/20250823000000_full_reset.sql` (users, saved_prompts, user_settings, RLS, triggers)

## 🧠 Prompt Templates
- Stored in `src/config/prompts.json`
- `HybridToolPage` loads templates, fills placeholders, applies truncation guards

## ✨ Key Features
- 40+ tools via `src/config/tools.json`
- Option B user API keys via Profile
- Format-aware downloads (json/csv/html/sql/md/txt)
- Prompt/file size guards and truncation markers
- Lazy loaded routes and optimized bundle

## 📚 Docs
- `docs/ARCHITECTURE.md` — System design and data flow
- `docs/DEPLOYMENT.md` — Netlify + Supabase deployment
- `SUPABASE_IMPLEMENTATION.md` — Schema & RLS details

## 🛡️ Security
- RLS on all tables
- HTTPS recommended
- Client-side encryption for user API key (documented limitations)

## 🐛 Troubleshooting
- Blank page on Netlify: verify env vars set, clear cache and redeploy
- Supabase missing: ensure env vars and run migration

---
Made with ❤️ by the CUEAI Team
