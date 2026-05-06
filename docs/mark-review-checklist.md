# Mark Review Checklist

**Purpose:** A structured prompt for the conversation with Mark when showing him the rebuilt Miller Custom Works site. The site is no longer a placeholder draft — it's a polished review artifact built around Mark's existing photo set, with a clear voice direction and a brutal-simple visual system. The point of this conversation is to lock in the stuff only Mark can confirm: business name, services, contact path, credibility wording, and which photos to replace.

The current build lives at `https://...` (Vercel deploy URL — fill in once it's live). The latest commit is `f52875d` on `main`.

---

## 1. First impression

Show him the site cold. Don't pre-explain. Watch his face.

- Does it feel like him?
- Does anything sound too fancy, corporate, or generic?
- Is there anything that makes him uncomfortable or feels untrue?
- Is `Miller Custom Works` the right business / site name?
- Does `Custom home improvements built with third-generation craftsmanship` accurately describe the work?
- Is the warm-walnut / caramel craft aesthetic the right tone, or should it lean more rugged / more refined / more traditional?

## 2. Services to feature, downplay, or remove

The site currently presents three service lanes: **Custom woodwork** / **Kitchens & built-ins** / **Home improvements**. Each lane has draft body copy.

Rank each as A / B / C and add notes:

- A = wants more of this work, feature prominently
- B = will take it if the project is a good fit
- C = should not be featured

| Service lane | Rank | Notes / changes to copy |
|---|---:|---|
| Custom wood counters / tables / shelving |  |  |
| Built-ins / shelving / media walls |  |  |
| Kitchens / cabinetry / finish details |  |  |
| Home improvements (general repairs / trim / floors / doors) |  |  |
| Bathrooms / vanities |  |  |
| Fireplaces / mantels / hearth work |  |  |
| Barn doors / interior carpentry |  |  |
| Decks / gates / fences (exterior) |  |  |
| Specialty pieces (flag display cases, custom one-offs) |  |  |
| Other |  |  |

If a lane is C, decide whether to remove the photos / mentions or keep them but de-emphasize.

## 3. Contact and lead path

The site currently shows a placeholder `(555) 555-5555` / `hello@example.com` / "Service area to confirm" in the contact card.

- What phone number should be public?
- Is text okay on that number? (The CTA says "Call / Text".)
- What email should be public?
- Should the primary CTA be call, text, email, or a simple estimate form?
- What service area should the site claim? (Counties / radius from a town / "Central Kentucky" / specific cities.)
- Are there areas or job types he does **not** want to take? (E.g. no full additions, no commercial.)
- Does he want people to send project photos before they talk?

## 4. Credibility wording

**None of this gets published until Mark confirms it word-for-word.** Currently the site claims nothing here — no license number, no insurance note, no third-party badges.

- Business entity: LLC, sole prop, or other?
- Is he licensed in the relevant trade / location? If yes, exact wording allowed?
- Insured? Bonded? Exact wording allowed?
- Years in trade — pinpoint number or range?
- Associations, certifications, apprenticeship lineage?
- Is "A Third Generation Craftsman" (the Hero eyebrow) accurate and okay to feature prominently?

## 5. Photo replacement priorities

The site uses real photos from the existing intake set, but most are old / soft / Facebook-era. The point of showing him the site is to make him say "I have better pictures than that." Capture his replacement priorities here:

For each project he wants to feature, ask for:

- 1 wide finished shot
- 1 medium angle
- 3 detail shots (joinery, edges, hardware, finish, grain)
- before photos if available
- during / process photos if available
- project name or nickname
- location by town only — never full address
- 1-2 sentences on what was solved or built
- materials or detail-level bits worth mentioning

The current weakest sections (likely candidates for replacement first):

- **Section 3 (Work) work-frame** — fireplace finished detail. Old photo, soft.
- **Section 5 (Gallery)** — 15-photo grid. Specific weak ones to call out as he sees them.
- **Section 4 (Craft)** — the Mark-standing-behind-work shop photo. Workable but a sharper version would carry the section.

## 6. Projects that deserve full pages

The site currently has one project detail page: `/projects/custom-wood-counters/`. The plan is to expand to the strongest 3-5 stories once Mark confirms which ones. Pick them now.

| Project | Category | Better photos available? | Notes to capture |
|---|---|---:|---|
| Custom wood counters & kitchen finish work (existing) | Woodwork / kitchen |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

## 7. Voice and story prompts

Ask conversationally — don't read these like a form. Capture verbatim phrases that sound like him; those become the site's real copy.

- How did you get into this work?
- Who taught you?
- What part of a job do you care about that most people don't notice right away?
- What does "done right" mean to you?
- What frustrates you about bad contractor work?
- What do you want people to feel when they walk into a finished room?
- Are patriotic or service details part of the real story, or should they stay subtle?
- About the heritage quote on the About panel ("Time was when the beauty and finesse of crafts and trades..."): does it land, or is it too literary? Want to replace with something he'd say in his own words?

## 8. Page-by-page reactions

Walk him through each section. Capture quick reactions:

- **Section 1 (Hero — Mark in the shop)** — does the photo represent him? Is "Built like the details matter" the right tagline?
- **Section 2 (Services)** — three lanes feel right? Body copy under each lane accurate?
- **Section 3 (Work)** — fireplace project. The expandable tiles — does the project story feel real? Should it be a different project?
- **Section 4 (Craft)** — the "Not fast and flashy. Measured, fitted, finished." h2. Sound like him?
- **Section 5 (Gallery)** — 15 unique photos. Which ones to swap?
- **Section 6 (Get in Touch)** — heritage quote in the About card. Contact card layout.
- **Mobile** — show him the site on his phone too. Hamburger menu, swipeable gallery, accordion tiles.

## 9. Decision after review

Only after the conversation, choose the next move:

1. Replace placeholder phone/email/area + license/insurance wording (highest priority — the site can't go fully public until these are real).
2. Swap the weakest photos with better originals he supplies.
3. Confirm the contact CTA path (call vs text vs form).
4. Build out the next 2-3 strongest project detail pages.
5. Domain decision — he picks a registrar (or uses Cody's account during beta), and Cody handles the DNS.
6. Decide whether this is ready for full public deployment or stays at the Vercel preview URL until Phase 7 placeholder fill is complete.

## 10. Glass Water beta terms reminder

If the conversation lands on "what's this costing me" — the answer is: free during beta. In exchange, Mark agrees to:

- Send replacement photos and copy when he can.
- Give Cody a testimonial for the Glass Water case-study artifact (one quote, name, hometown).
- Let Cody use the site as a reference / example when pitching other contractors.

Domain + ongoing hosting are paid by Mark (or Cody covers them during beta if Cody chooses). After beta: Foundation slot at $149/mo or $79/mo basic-support tier. The come-back fee policy from the Glass Water business plan applies if he leaves and returns.
