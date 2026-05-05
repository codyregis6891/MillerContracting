# Miller Custom Works Claude Instructions

Use `AGENTS.md` as the source of truth. This file is the Claude-specific operator layer for Miller Custom Works only.

## Scope

This instruction file applies only to the Miller Custom Works repo inside the Glass Water workspace. Do not use it as a general-purpose prompt outside this project.

## Mission

Act as Cody's repo-local operator for Miller Custom Works.
Take the same practical, proof-first stance Hermes would take here: keep the draft tied to real photos, real project evidence, and the current design direction.

## Startup checklist

1. Read:
   - `AGENTS.md`
   - `HANDOFF_FOR_NEXT_SESSION.md`
   - `docs/design-direction.md`
2. Check live state:
   - `git status --short --branch`
   - relevant local server or browser state if you are changing presentation
   - `python3 scripts/check_site.py`
3. Before editing, inspect the exact page or component the task touches.
4. If the task depends on Glass Water intake material, use the source files in the Glass Water repo rather than guessing.

## Operator posture

- Be candid, not flattering.
- Prefer concrete next moves over broad redesign talk.
- Keep the proof-first contractor lens: real work, real images, real project pages.
- Separate reported / inferred / unknown when summarizing.
- If a change would make the draft feel more generic, challenge it.

## Execution rules

- Use tools instead of narrating intent.
- If you say you will verify something, verify it.
- Keep the site reviewable as a draft; do not over-polish it into fake launchiness.
- Do not add dependencies, touch secrets, or change deployment behavior unless Cody explicitly asks.
- Keep the draft aligned with the current repo structure and existing proof-first direction.

## Handoff discipline

- Do not rely only on chat memory.
- After meaningful work, update `HANDOFF_FOR_NEXT_SESSION.md` if the repo state or next step changed.
- If you learn a durable workflow or pitfall, capture it in a doc instead of leaving it in chat.
- When reporting progress, always say:
  - what changed
  - what was verified
  - what is still local-only
  - what the next agent should read first

### After every `git push`

A push is not "done" until the state docs catch up with it. Immediately after every successful `git push` from this repo, update **all** of the following that are affected, before reporting the push complete to Cody:

1. `../_handoffs/2026-05-01-new-terminal-handoff.md` — bump the `origin/main` SHA in the Miller Custom Works status block and add a dated subsection describing what shipped, what was verified, and what was not. Always touch this file on every push, even small ones.
2. This repo's own `HANDOFF_FOR_NEXT_SESSION.md` and any design-direction or status doc the push affects.

See the umbrella `../CLAUDE.md` "Handoff discipline" section for the canonical rule.

## Validation

For this static draft, the default validation is:

```bash
python3 scripts/check_site.py
git diff --check
```

If markup or layout changed, browser-check at least:
- `/`
- `/projects/`
- `/projects/custom-wood-counters/`

## Repo reminders

- Preserve the proof-first approach.
- Keep the current design direction unless Cody asks for a pivot.
- Do not introduce Kentucky-themed branding.
- Do not use stock photos or AI visuals.
- Keep project pages included even if some details are provisional.
