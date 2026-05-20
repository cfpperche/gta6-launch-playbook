# GTA 6 Launch Playbook

A personal research-and-decision workspace for the economic opportunities opening
around the **Grand Theft Auto VI launch on 19 November 2026**.

## What this project is

GTA 6 is on track to be the largest entertainment launch in history — analyst
estimates put development cost near $1.5B and day-one revenue near $2.7B. Around a
launch that size, a multi-year economy forms: content, communities, creator
tooling, roleplay servers, and adjacent financial markets. This repo is where that
opportunity set gets **catalogued, evaluated, and tracked**, so a decision to act
(or not) is made deliberately and early — before the launch window — instead of
reactively once everyone else has noticed.

It is a **planning workspace, not a get-rich-quick scheme.** The source material
(an X thread) is framed as "12 ways to make millions". This repo deliberately
strips that framing and treats each item as a normal business or capital decision
with real cost, real effort, and an honest downside.

## What this project is NOT

- **Not financial advice.** The Tier 2 items (public equity, crypto tokens,
  memecoins) are tracked as *observations*, never recommendations. Any capital
  decision is the owner's alone.
- **Not a commitment to execute all 12.** The whole point of the evaluation track
  is to *eliminate* most of them and shortlist 1–2.
- **Not affiliated** with Rockstar Games or Take-Two Interactive.

## Two working tracks

1. **Evaluate & decide** (`evaluation/`) — score the 12 opportunities against a
   fixed rubric, eliminate poor fits, shortlist 1–2 to actually pursue.
2. **Track the timeline** (`timeline/`) — maintain the GTA 6 milestone calendar
   (Trailer 3, Take-Two earnings, launch, PC port) and the signals that would
   change the decision.

## Repository layout

| Path | Purpose |
|---|---|
| `source/thread.md` | The original source thread, archived with provenance. |
| `opportunities/README.md` | The 12 opportunities catalogued — what each is, what it needs, how it monetizes. |
| `automation/` | One brief per opportunity: how far AI can take development + operation toward 100%, humans-in-the-loop. |
| `evaluation/README.md` | Scoring rubric + first-pass scorecard + decision shortlist. |
| `timeline/README.md` | GTA 6 milestone calendar, signals to watch, per-opportunity watchlist. |

## The date everything is timed against

**19 November 2026** — GTA 6 launch (PS5, Xbox Series X|S). Confirmed by Take-Two;
CEO has publicly stated there will be no further delays after two prior slips
(2025 → May 2026 → Nov 2026). At repo creation that is roughly six months out.
A PC port is *estimated* (not confirmed) for mid-2027, following the GTA 5 pattern.

## How to work in this repo

- The evaluation is **incomplete by design** until the owner supplies three
  personal inputs: capital available, weekly time available, and risk appetite.
  The scorecard marks these `[NEEDS INPUT]`. Do not invent them.
- Keep the honest-downside framing. Every opportunity entry states what failure
  looks like, not just the upside.
- Distinguish **verified facts** (cite a source) from **analyst estimates** and
  **thread claims**. The timeline file tags each date with a confidence level.
- Markdown only — no build step, no dependencies. This is a thinking workspace.

## Conventions

- All working docs in English. `source/thread.md` keeps the original capture
  (Portuguese auto-translation of a Spanish-language thread) for fidelity.
- Dates in `YYYY-MM-DD`.
- One opportunity = one numbered entry (`1`–`12`). Numbering is fixed to the
  source thread so cross-references stay stable across files.
- Tier 1 = opportunities 1–7 (operate a business). Tier 2 = opportunities 8–12
  (allocate capital). The two are evaluated differently — see `evaluation/`.
