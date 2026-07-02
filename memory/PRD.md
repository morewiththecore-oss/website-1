# Coremore — Product Requirements Document

## Original Problem Statement
Build a single-page consultancy website for **Coremore** (tagline: *MORE WITH THE CORE*) — a boutique consultancy that bridges strategy and execution. "High-Performance Minimalism" aesthetic. Deep navy/charcoal palette with electric blue accent. Direct, unsentimental, authoritative voice. Partners in the trenches, not advisors.

## User Choices (verbatim)
- Scope: Single-page scroll
- Contact CTA: Simple contact form (name, email, company, message) stored in DB
- Accent color: Designer's choice (resolved → Electric Blue `#2563EB`)
- Case studies: Skip entirely
- Founders: Placeholder typographic monogram avatars + generic bios

## Architecture
- **Frontend**: React 19 + react-router-dom, Tailwind CSS, framer-motion, sonner (toasts), @phosphor-icons/react
- **Fonts**: Cabinet Grotesk (headers, Fontshare CDN), EB Garamond (body, Google Fonts), JetBrains Mono (overlines)
- **Backend**: FastAPI + Motor (MongoDB) + Pydantic EmailStr validation
- **DB collections**: `contact_submissions`, `status_checks`

## User Personas
1. **C-suite executive (primary)** — visiting on mobile; needs to evaluate Coremore credibility in < 60s and submit a brief.
2. **Operating leader / COO** — scanning methodology and expertise to assess discipline fit.

## Core Static Requirements
- Hero with headline, sub-headline, primary CTA, secondary CTA, 4-step preview strip
- Expertise grid: 4 architectural cards (Project Management, Business Turnaround, Cost Optimization, Branding & Communications)
- Methodology: scroll-driven vertical timeline (Diagnosis → Structure → Execution → Results)
- Founders' Vision: 3 monogram-avatar cards + sticky founder ethos
- Mid-page Neo-Brutalist CTA "Let's Create Value Together" with marquee strip
- Contact form posting to `POST /api/contact`, success state with reference ID
- Footer with nav, disciplines, copyright

## What's Been Implemented (2025-12)
- Full single-page experience with all 7 sections
- `POST /api/contact` + `GET /api/contact` endpoints (Pydantic-validated, no _id leak)
- Smooth-scroll nav (desktop + mobile drawer), framer-motion scroll animations on timeline & cards
- Sonner toast notifications
- Tested end-to-end: 7/7 backend tests passing, frontend Playwright flows verified, zero console errors

## Backlog
### P1
- [ ] Email notification (Resend) on new contact submission
- [ ] Honeypot / rate-limiting on `/api/contact` to deter spam
- [ ] Real founder photos & finalized bios (replace monograms)
- [ ] Add /admin view (auth-gated) to browse submissions
- [ ] Add Impact Reports / Outcome Snapshots section once first case studies are available

### P2
- [ ] SEO meta tags + OpenGraph image
- [ ] Sitemap, robots.txt, analytics
- [ ] i18n (en + locale of target market)

## Next Tasks
1. Wire Resend (or SendGrid) for inbound notification email
2. Add lightweight admin route for reviewing submissions
3. Replace placeholder monograms with real founder portraits once supplied
