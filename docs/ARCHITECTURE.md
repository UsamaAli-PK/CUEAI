# Architecture Overview

## System Components
- Frontend: React 18, TypeScript, Vite, Tailwind
- Data/Backend: Supabase (Auth + Postgres with RLS)
- Prompt Engine: Client-side templates + Option B API calls

## Routing
- Public: `/`, `/login`, `/register`
- Protected: `/dashboard`, `/hybrid-tool/:toolId`, `/library`, `/profile`
- 404: `*`

## Data Flow
1. User authenticates via Supabase Auth
2. Dashboard lists tools from `src/config/tools.json`
3. `HybridToolPage` loads tool + `src/config/prompts.json` template
4. User input + files → compiled optimized template (truncation guards)
5. API call using Option B (user API key/base URL)
6. Enhanced output displayed; optional save to DB

## Option B (User Keys)
- Users store AI key and base URL in `user_settings` (client-side encrypted key)
- Calls go directly to provider via `src/lib/api.ts`

## Security
- Supabase RLS (per-user policies)
- Env-based Supabase credentials
- Client-side encryption for user API keys (Option B)
- HTTPS

## Data Model
- `users(id, email, name, created_at, updated_at)`
- `user_settings(user_id, default_provider, default_model, default_tone, email_notifications, theme, api_key, base_url, selected_model, api_key_name, timestamps)`
- `saved_prompts(id, user_id, title, input_text, enhanced_text, tool_type, provider, model, tone, output_format, tags, file_attachments, timestamps)`

## Files of Interest
- `src/components/HybridToolPage.tsx`
- `src/config/tools.json`, `src/config/prompts.json`
- `src/lib/api.ts`, `src/lib/database.ts`, `src/lib/supabase.ts`
- `supabase/migrations/20250823000000_full_reset.sql`