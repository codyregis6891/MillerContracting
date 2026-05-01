# Handoff for Next Terminal Session

Date prepared: 2026-05-01
Prepared for: Cody opening a new terminal/Hermes session on the PC
Primary repo: `/home/codyregis/projects/glass-water/MillerContracting`
Umbrella project: Glass Water Digital

## Read this first

This project is under the Glass Water Digital umbrella even though the repo sits beside the main Glass Water repo. It is a real proof/client-style project for Cody's father-in-law, Mark Miller, and should be treated as part of Cody's operator/business pipeline, not as a random separate website.

The strategic value is bigger than “make Mark a website.” This is a chance to build a strong contractor/trades reference asset using real proof, real photos, and Glass Water's emerging offer shape: handmade sites, visibility, trust, and eventually workflow/lead handling where useful.

## What exists now

Repo:

```bash
/home/codyregis/projects/glass-water/MillerContracting
```

Remote:

```text
git@github.com:codyregis6891/MillerContracting.git
```

Branch/status at handoff:

```text
main...origin/main
clean before this handoff file/AGENTS addition
```

Recent commits:

```text
dac354e feat: build first Miller Custom Works draft
b009b4b Initial commit
```

Current draft files:

```text
index.html
projects/index.html
projects/custom-wood-counters/index.html
assets/css/styles.css
assets/js/site.js
assets/images/*.jpg
scripts/check_site.py
README.md
docs/design-direction.md
AGENTS.md
HANDOFF_FOR_NEXT_SESSION.md
```

The current site is a dependency-free static draft. That is intentional. Do not convert it to Next.js, add a CMS, or add a form backend unless Cody explicitly asks after reviewing direction with Mark.

## What was built

A first-draft site for Miller Custom Works with:

1. Homepage
   - Hero
   - craft/service lanes
   - featured work
   - craft/process section
   - project spotlight
   - About Mark section
   - contact CTA with placeholder contact info

2. Projects index
   - curated proof wall by project/service category
   - not a dump of all 70 images

3. First project detail page
   - `projects/custom-wood-counters/index.html`
   - intentionally included even though current photos/facts are provisional
   - designed to make Mark react and send better project details/photos

4. Design rationale
   - `docs/design-direction.md`
   - explains why the site is craft-first, not Kentucky-themed, and why the first draft uses imperfect but real photos

5. Validation
   - `scripts/check_site.py`
   - run with `python3 scripts/check_site.py`

## Why it is positioned this way

The 70-photo intake did not look like a generic handyman portfolio. It showed a finish-carpentry and woodworking center of gravity:

- custom wood counters
- custom tables
- cabinetry
- built-ins
- fireplace/mantel work
- barn doors
- shop/process work
- fences, decks, and exterior carpentry as range, not necessarily the main identity
- bathroom/kitchen updates as supporting services

Current positioning spine:

> Custom home improvements built with third-generation craftsmanship.

Supporting idea:

> Miller Custom Works handles kitchens, built-ins, woodwork, finish details, and home improvement projects where the finished result matters.

Keep this plain-spoken. Do not make Mark sound like a luxury interiors firm, a generic handyman, or a corporate contractor.

## Critical guardrails

- This is under Glass Water Digital's umbrella.
- Use real photos/proof only.
- No stock images.
- No AI-generated visuals.
- No Kentucky theme.
- No state outlines, bourbon/horse/bluegrass motifs, or bright Kentucky blue as a brand concept.
- Do not make it flag-heavy or patriotic by default. The flag display case can be a subtle proof/story asset, not the whole brand.
- Do not invent license, insurance, bonded status, phone, email, testimonials, or project facts.
- Do not create a bloated app before Mark confirms basic facts.
- Do not hide the provisional nature of weak photos in internal notes. The draft is meant to prompt better originals.

## Related Glass Water context

Main Glass Water repo:

```bash
/home/codyregis/projects/glass-water/glass-water-digital
```

Current Glass Water status at handoff:

```text
## develop...origin/develop
 M sub-plans/father-in-law-discovery-notes.md
?? .local-intake/
```

Important source/reference files in Glass Water repo:

```text
/home/codyregis/projects/glass-water/glass-water-digital/sub-plans/father-in-law-discovery-notes.md
/home/codyregis/projects/glass-water/glass-water-digital/.local-intake/miller-custom-works/photo-triage.md
/home/codyregis/projects/glass-water/glass-water-digital/.local-intake/miller-custom-works/contact-sheets/
```

Photo triage summary:

- 70 images received/found from Facebook intake
- strongest visual direction is custom woodwork, counters, kitchens, built-ins, and finish details
- `mcw-68` is the strongest Mark/process photo
- `mcw-05`, `mcw-20`, `mcw-26`, `mcw-34`, `mcw-45`, `mcw-50`, `mcw-57`, `mcw-58`, `mcw-59`, `mcw-65`, `mcw-69` are among strongest top-tier candidates

The local intake folder should stay local unless Cody explicitly decides to commit specific assets. The Miller repo already contains selected, renamed images for the draft.

## Commands for the new session

Start here:

```bash
cd /home/codyregis/projects/glass-water/MillerContracting
git status --short --branch
python3 scripts/check_site.py
```

Preview locally:

```bash
python3 -m http.server 4173
```

Open:

```text
http://127.0.0.1:4173/
```

If another process is already on 4173, use another port:

```bash
python3 -m http.server 4174
```

## Recommended next move

Candid operator recommendation: do not spend the morning making it prettier in the abstract. The draft is already doing the strategic job. The highest-leverage next move is to review it like a client artifact and prepare Mark's feedback loop.

Do this next:

1. Browser-check homepage, projects page, and custom counters detail page.
2. Make sure mobile is readable enough to show without embarrassment.
3. Create or send Cody/Mark a short review checklist:
   - Does Miller Custom Works feel like the right name?
   - Is third-generation craftsmanship accurate and okay to feature?
   - Which services should be emphasized?
   - Which services should be avoided?
   - Calls, texts, form, or all three?
   - What phone/email should be used?
   - Is he licensed/insured/bonded, and what exact wording is allowed?
   - Which current photos should be replaced with better originals?
   - Which projects deserve full pages?
4. Only after that, replace weak photos and firm up copy.

## If Cody asks you to continue building

Best next build order:

1. Fix obvious mobile or link issues found in browser QA.
2. Make placeholder contact/status language cleaner, without inventing facts.
3. Add an internal review notes section or small `docs/mark-review-checklist.md`.
4. Expand project detail templates only after Mark identifies real projects and sends better info.
5. Decide deployment after the content direction is accepted.

## Business/VP read

This is exactly the kind of project Glass Water Digital needs: concrete, local, proof-heavy, and useful. It can become a reference for Cody's handmade website lane without diluting the automation story. The right frame is:

- visibility gets people to trust you enough to look
- the site makes the proof undeniable
- workflow/automation can come later around leads, estimates, follow-up, review requests, and project intake

Do not pitch automation first for Mark. Earn trust with the site and the proof, then identify useful operational fixes only after the lead/contact flow is real.
