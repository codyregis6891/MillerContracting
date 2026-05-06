# Agent Operating Guide

This is the working guide for AI agents opening a fresh terminal session in this repo.

## Umbrella context

Miller Custom Works is a project under the Glass Water Digital umbrella. The repo lives alongside `glass-water-digital` at:

- `MillerContracting`: `/home/codyregis/projects/glass-water/MillerContracting`
- `glass-water-digital`: `/home/codyregis/projects/glass-water/glass-water-digital`

Do not treat this as an unrelated hobby repo. Treat it as a Glass Water Digital proof/client-style project for Cody's father-in-law, Mark Miller, and as a future portfolio/reference asset for Cody's business.

## Current project reality

- Business/site name: Miller Custom Works
- Person: Mark Miller
- Service area: Central Kentucky, used as practical service context only
- Project type: static first-draft contractor website
- Repo reused: old GitHub repo `codyregis6891/MillerContracting`
- Default branch (working): `develop`. **Production branch: `main`** — Vercel deploys from here. Standard Git-Flow convention: develop = staging/work, main = production/stable.
- Production deploy: Vercel Hobby (free tier) under Cody's account, deploying from `main`.
- Current draft is intentionally proof-first and built from real intake photos, not stock or AI visuals
- Latest commit (origin/develop = origin/main): `b5eeef6 docs: refresh handoff for the homepage rewrite + mobile redesign`

The draft should help Mark react, correct facts, and send better photos. It does not need to pretend all content is final.

## Strategic direction

Keep the site focused on real craft proof:

- Custom woodwork
- Kitchens and built-ins
- Finish carpentry
- Home improvements where the finished result matters
- Selected exterior/deck/fence proof only if Mark wants that work featured

The clearest positioning spine is:

> Custom home improvements built with third-generation craftsmanship.

Supporting idea:

> Miller Custom Works handles kitchens, built-ins, woodwork, finish details, and home improvement projects where the finished result matters.

Use this as direction, not as sacred copy if better real Mark language is collected.

## Hard guardrails

- Do not make this Kentucky-themed.
- Do not use stock photos.
- Do not use AI-generated visuals.
- Do not make it flag-heavy or patriotic by default.
- Do not turn it into a generic handyman/remodeler template.
- Do not invent license, insurance, bonded status, testimonials, phone numbers, email, or customer quotes.
- Do not overbuild a framework/CMS/form backend before Mark confirms services, lead path, and content.
- Do not bury that this is connected to Glass Water Digital just because the repo name is separate.

## Current site structure

- Homepage: `index.html`
- Projects index: `projects/index.html`
- First project detail page: `projects/custom-wood-counters/index.html`
- CSS: `assets/css/styles.css`
- JS: `assets/js/site.js`
- Validation script: `scripts/check_site.py`
- Design rationale: `docs/design-direction.md`
- Handoff: `HANDOFF_FOR_NEXT_SESSION.md`

## Source intake lives in Glass Water Digital repo

Local-only intake/reference files are in:

- `/home/codyregis/projects/glass-water/glass-water-digital/.local-intake/miller-custom-works/photo-triage.md`
- `/home/codyregis/projects/glass-water/glass-water-digital/.local-intake/miller-custom-works/contact-sheets/`
- `/home/codyregis/projects/glass-water/glass-water-digital/sub-plans/father-in-law-discovery-notes.md`

Treat `.local-intake` as local working material. Do not commit raw intake dumps unless Cody explicitly asks.

## Startup checklist for a new terminal session

Run:

```bash
cd /home/codyregis/projects/glass-water/MillerContracting
git status --short --branch
python3 scripts/check_site.py
```

Then read:

1. `HANDOFF_FOR_NEXT_SESSION.md`
2. `docs/design-direction.md`
3. `/home/codyregis/projects/glass-water/glass-water-digital/.local-intake/miller-custom-works/photo-triage.md`

For local preview:

```bash
python3 -m http.server 4173
```

Open:

```text
http://127.0.0.1:4173/
```

## Next best move

Do not redesign first. Review the draft as an operator artifact, then tighten the weak spots that will matter to Mark:

1. Verify homepage, projects index, and custom wood counters project page in browser.
2. Make a short Mark review checklist, including contact path, services wanted/avoided, license/insurance wording, and photo replacements.
3. If improving the site before showing it, focus on obvious polish, mobile readability, broken links, and placeholder clarity.
4. After Mark reacts, replace weak images and confirm services before expanding project pages or adding deployment machinery.

## Validation

This static draft should pass:

```bash
python3 scripts/check_site.py
```

If code/assets change, also manually browser-check:

- `/`
- `/projects/`
- `/projects/custom-wood-counters/`
- mobile width around 390px
- nav links and CTA links
