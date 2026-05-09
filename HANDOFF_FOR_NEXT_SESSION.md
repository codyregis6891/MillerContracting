# Handoff for Next Terminal Session

Date prepared: 2026-05-06
Prepared for: Cody opening a new terminal/Hermes session
Primary repo: `/home/codyregis/projects/glass-water/MillerContracting`
Umbrella project: Glass Water Digital
Current SHA: origin/main `f52875d`, origin/develop `777f816` (develop ahead of main with Mark-review docs, design-direction/handoff updates, favicon recolor, and GWD footer-link repoint)
Default branch (working): **`develop`**. **Production branch: `main`** — Vercel deploys from there. Standard Git-Flow convention.
GitHub repo default-branch flip from `main` → `develop` is a one-click Cody-only step (Settings → General → Default branch) and was not done from this session.
Production deploy: Vercel Hobby tier, **branch `main`**, framework "Other", root `.`, no build command — hooked up the same way as Glass Water Digital. `main` is the deployable/live branch; `develop` remains the working branch.

Repo status note from 2026-05-08: a pre-push handoff-discipline hook was installed today across all three Cody repos (`sector-rotation-system`, `glass-water-digital`, `MillerContracting`). For Miller specifically:

- `scripts/hooks/pre-push` (versioned) hard-blocks any push whose range does not modify `HANDOFF_FOR_NEXT_SESSION.md`.
- `git config --local core.hooksPath scripts/hooks` activates it (re-run on fresh clones).
- `CLAUDE.md` "Before `git push`" section was reframed (was "after push update", now "before push, ensure handoff is in the push range") so agents flow with the hook rather than against it.
- Override: `SKIP_HANDOFF_CHECK=1 git push` for genuine no-state-change pushes. Don't use `--no-verify` casually.
- Umbrella `../_handoffs/HANDOFF.md` is not enforced by the hook (lives outside this git repo); still required per `CLAUDE.md`.

This is the same pattern Glass Water Digital and the financial hub now use, so opening Hermes/Claude/Codex in any of them gets the same handoff-sync behavior.

Follow-up later 2026-05-08: `CLAUDE.md` "Before `git push`" section was tightened to require post-state tense, an explicit SHA bump via `$(git rev-parse HEAD)`, and reconciliation of any historical statements the new change contradicts. The hook checks *that* the handoff was modified, not *that* the content matches reality — SR caught a real instance of that gap and the lesson was propagated here, to the umbrella, and to glass-water-digital.

Mark has **not** seen the site yet. Cody plans to show it at the next family dinner, so the next business move is still to collect Mark's reactions rather than redesigning in isolation.

## Current status

Miller Custom Works has been substantially redesigned in a single long session. The homepage slide deck and the project pages have been rebuilt to a "brutal-simple" CSS pattern: one stage clamp per section, inner content fills via `height: 100%`, no `!important` chains, no override sprawl. ~3000 lines of layered overrides were removed and replaced with consolidated section blocks.

The mobile experience is now a normal vertical-scroll page (no slideshow), with a hamburger dropdown on the homepage, swipeable photo carousel on the gallery, an in-place accordion for the work tiles, and a Glass Water Digital footer attribution.

The site is in a much better state to show Mark for reactions than the previous draft was.

## Current site structure (post-rewrite)

Homepage (`index.html`) is a 6-slide deck on desktop, normal vertical scroll on mobile:

1. **Hero (`.hero`)** — full-bleed `mark-shop-work.jpg` with eyebrow + h1 + heritage card + CTAs anchored bottom-left (desktop) or stacked under the photo (mobile).
2. **Services (`.services-cinema`)** — text on the left, three photo scenes on the right (large + 2-stack). Each scene has its own copy overlay. Bg is brightened charcoal + amber.
3. **Work (`.work-cinema`)** — fireplace `work-frame` photo on the left, `work-story` (heading + lede + 3 expandable evidence tiles) on the right. Click any tile to expand. On mobile, content reorders as heading → photo → lede → evidence; expanded tile is an accordion (vertical: eyebrow / large image / full text).
4. **Craft (`.quality-zag`)** — center `mark-standing-behind-work.jpg` photo with overlaid story, flanked by before/after stacks (fireplace wall, kitchen finish). Deep walnut linear gradient (`#1d1410 → #3a2415 → #211710`).
5. **Gallery (`#projects-preview`)** — uniform 5×3 grid of 15 unique photos. Medium walnut/copper gradient. Mobile is a swipe-snap carousel with arrow buttons (`<button data-gallery-prev>` / `data-gallery-next>` wired in `site.js`).
6. **Get in Touch (`#contact`)** — *merged* About + Contact slide. Caramel cream gradient that flows seamlessly into the footer on mobile. Left column = About text + Mark's words pull-quote (Brother-Lawrence-style heritage quote with a `border-left` accent). Right column = "Have a project that needs a craftsman's eye?" + lede + contact card with phone/email/area + `mailto:` CTA.

Header on the homepage is sticky with cream backdrop on mobile, transparent over the hero on desktop. Hamburger toggle on mobile shows a dropdown with the two text links + a solid-ink Call/Text CTA at the bottom.

Project pages (`projects/index.html`, `projects/custom-wood-counters/index.html`):
- Nav has a single `← Back home` / `← Back to projects` text link top-right (no multi-item nav, no hamburger).
- Featured project page on mobile interleaves the 3 detail-copy articles with the 3 project-photo-strip photos: problem → photo → work → photo → notice → photo, with thin divider lines after each photo.

Footer attribution: "Site handcrafted by [Glass Water Digital](https://glasswaterdigital.com)." appears on the homepage mobile footer and on both project page footers. Footer is hidden on desktop homepage (slideshow ends with the contact section).

## CSS pattern in use (the "brutal-simple" rule)

Every slide stage uses the same shape:

```css
@media (min-width: 901px) {
  .deck-main .<section>-stage {
    height: clamp(<floor>, 78svh, 1080px);
    min-height: 0;
    overflow: hidden;
    align-items: stretch;
  }
  .deck-main .<section>-stage > * {
    height: 100%;
    min-height: 0;
  }
}
```

Section 4 sets the canonical example (`.quality-zag-stage`). Sections 2, 3, 5, 6 mirror it. Hero uses absolute positioning for the bottom-left content over the photo.

**Don't:**
- Stack `!important` overrides across multiple media queries to land at a working value (this is exactly what we removed).
- Override `.deck-slide`'s `padding-bottom: 92px` per-section — that 92px is intentional clearance for the deck-controls.
- Add second-tier `min(100%, clamp(...))` arithmetic on inner containers — backfires.

**Do:**
- Dial the stage cap if the section feels too big or small. ONE number, ONE place.
- Use `min-height: 0` on grid items to defeat the auto-content-height default.
- Add overflow: hidden to the stage as a safety net.

This pattern is also captured at `~/.claude/projects/-home-codyregis-projects-glass-water/memory/feedback_brutal_simple_css.md` for future sessions.

## Validation

```bash
python3 scripts/check_site.py
git diff --check
```

Both pass at `3c427f7`. For local preview:

```bash
cd /home/codyregis/projects/glass-water/MillerContracting
python3 -m http.server 4173
# open http://127.0.0.1:4173/
```

There is currently a local server running at `http://127.0.0.1:4173/` (PID 410852 from this session — may or may not still be alive next session).

## Hard guardrails (unchanged)

- Use real proof/photos only.
- No stock or AI-generated visuals.
- No Kentucky-themed branding.
- No backend/forms/CMS/deployment changes unless Cody asks.
- Do not invent phone, email, license, insurance, bonded status, testimonials, project details.
- Keep placeholder/review copy where it helps Mark react.

## Files materially changed in `3c427f7`

```text
assets/css/styles.css                     +2050 / -2061  (net -11; consolidated)
assets/js/site.js                         +32   / -0    (hamburger toggle + gallery carousel)
index.html                                +124  / -37   (Section 6 merge, Hero restructure)
projects/index.html                       +3    / -3    (back-link nav, GWD attribution)
projects/custom-wood-counters/index.html  +3    / -3    (back-link nav, GWD attribution)
```

Full diff: `git show 3c427f7 --stat`.

## Recommended next moves

1. **Show Mark the site at the next family dinner** — he has not seen it yet. The original brief was to put the draft in front of him for reaction; that's still the highest-leverage next move now. The site is in a much better state than the previous draft and is deployable from `main`.
2. **Replace placeholder copy with Mark's words** — heritage pull-quote on Section 6, contact info (phone/email/service area), license/insurance wording. The placeholders are intentionally generic and waiting on real input.
3. **Re-photo passes** — Mark probably has better originals than the Facebook-era photos. Section 5 gallery (15 photos), Section 3 fireplace project, Section 4 Mark-in-shop photo are the highest-value swap targets.
4. **DNS for `glasswaterdigital.com` and `www.glasswaterdigital.com`** — last QA showed they didn't resolve from this machine. Worth verifying separately.
5. **Custom domain for Miller** — site is currently only at the GitHub Pages / Vercel URL (or wherever it's deployed). If Mark wants a real URL, that's a separate setup.

## Glass Water operator read

This site is now a strong proof asset for Glass Water's "handmade contractor websites" lane. It demonstrates Cody can take imperfect real assets (Facebook photos, no real customer copy, no firm scope) and ship a credible site. When pitching the Glass Water handmade lane, this is the artifact to show prospects.

Do not pitch automation first for Mark. Earn trust with this site and proof. Later automation opportunities might be intake, follow-up, review requests, and project/photo collection.
