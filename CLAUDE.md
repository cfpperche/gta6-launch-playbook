# GTA 6 Launch Playbook — project context

This file orients any Claude Code session working in this repo. **Read it first**;
it carries the state and decisions that the individual files don't.

## What this project is

A research-and-decision workspace for the economic opportunities opening around
the **Grand Theft Auto VI launch on 19 November 2026** — on track to be the largest
entertainment launch in history (analyst estimates: ~$1.5B development budget,
~$2.7B day-one revenue). Around a launch that size, a multi-year economy forms:
content, communities, creator tooling, roleplay servers, adjacent markets. This
repo **catalogues** that opportunity set, **evaluates** each item against a fixed
rubric, **briefs** how far AI can automate each, and **tracks** the launch
timeline — so a decision to act is made deliberately and early.

It is a **planning workspace and a design-partner project**, not a get-rich-quick
scheme. The source material (an X thread, archived in `source/thread.md`) is framed
as "12 ways to make millions"; this repo strips that framing and treats every item
as a normal business or capital decision with a real, stated downside.

## What this project is NOT

- **Not financial advice.** Tier 2 items (equity, crypto) are tracked as
  *observations* only — never recommendations.
- **Not a commitment to all opportunities.** The evaluation exists to *eliminate*
  most of them and shortlist 1–2.
- **Not affiliated** with Rockstar Games or Take-Two Interactive.
- **A self-contained repo** — no external tooling or agent-harness is wired in, by
  design. Keep it a plain markdown-and-Astro project.

## Project state — as of May 2026 (keep this section current)

**In place:**
- **17 opportunities catalogued** in `opportunities/`, across 3 tiers.
- **17 automation briefs** in `automation/` — one per opportunity.
- **Evaluation scorecard** in `evaluation/` — the *intrinsic* columns are scored;
  the *personal-fit* columns are `[NEEDS INPUT]`.
- **Timeline** in `timeline/` — milestone calendar + signals to watch.
- **Live public site** (Astro) at <https://cfpperche.github.io/gta6-launch-playbook/>,
  source in `site/`, auto-deployed by `.github/workflows/deploy.yml`.

**Provisional shortlist** (intrinsic-only): **#13 B2B intelligence product** and
**#6 "picks & shovels"** as co-primary candidates; **#15 pt-BR hub** as a market
wedge; **#14 trust & safety** as a parallel play.

**The open next step:** the evaluation cannot be locked until the owner supplies
four personal-fit inputs (see `evaluation/README.md` § 4) — **craft skills, weekly
time, capital at risk, risk appetite.** One input is already known: the owner is
*"super comfortable"* with **agent orchestration**, which strongly favours the
high-automation opportunities (#2 / #3 / #6 / #13). **Do not invent the other
four** — ask the owner.

**Known site TODO:** the subscribe form's `SUBSCRIBE_ENDPOINT` in
`site/src/pages/index.astro` is still a placeholder — it needs a real Formspree
(or Beehiiv) endpoint before the email capture works.

## Repository layout

| Path | Purpose |
|---|---|
| `source/thread.md` | The original source thread, archived with provenance. |
| `opportunities/README.md` | The 17 opportunities catalogued (3 tiers). |
| `automation/` | One brief per opportunity — how far AI can take development + operation toward 100%, humans-in-the-loop. |
| `evaluation/README.md` | Scoring rubric + scorecard + decision shortlist. |
| `timeline/README.md` | Milestone calendar, signals, per-opportunity watchlist. |
| `site/` | Public one-page site (Astro). |
| `.github/workflows/deploy.yml` | Builds and deploys `site/` to GitHub Pages on every push that touches it. |

## The three tiers

- **Tier 1 (1–7)** — operate a business. Returns come from work and execution.
- **Tier 2 (8–12)** — allocate capital. Returns come from timing and risk;
  tracked as observations only.
- **Tier 3 (13–17)** — beyond the source thread: second-order and adjacent plays
  surfaced by analysing the thread's blind spots.

Numbering is **fixed 1–17** so cross-references stay stable across files.

## Key facts (verified)

- **GTA 6 launch: 19 November 2026** (PS5, Xbox Series X|S). Confirmed by Take-Two;
  the CEO has publicly stated there will be no further delays after two prior slips
  (2025 → May 2026 → Nov 2026). A PC port is *estimated* ~mid-2027 (not confirmed),
  following the GTA 5 pattern — it gates opportunities #5, #7, #12.
- The whole repo is timed against the launch date; see `timeline/`.
- Distinguish **verified facts** (cite a source), **analyst estimates**, and
  **thread claims**. The timeline tags each date with a confidence level.

## Key decisions & rationale (don't re-litigate)

- **Tier 3 came from a structured blind-spot analysis** of the source thread's lens
  (B2C + crypto, English-global, launch-window-timed, everyone-builds-their-own).
  Each Tier 3 item is the negative of one of those biases.
- **The automation briefs reframe the "skill fit" question.** When an opportunity
  is ~85–90% agent-operable, the decisive skill is *agent orchestration*, not the
  domain craft — which is why the orchestration input matters most.
- **#13 (B2B intelligence) is the strongest opportunity on intrinsic merit** — 4.2
  average with defensibility 4, the moat the Tier-1 creator cluster lacks. This
  repo is itself a first draft of that product.
- **For Tier 2, a high "automatable %" is a warning, not a feature** — a bot
  executes a losing bet as efficiently as a winning one.

## How to work in this repo

- **Design-partner mode.** The owner sequences the work and wants critical
  engagement — challenge weak reasoning, surface tradeoffs, don't rubber-stamp
  earlier analysis (including analysis written in earlier sessions).
- **The evaluation is incomplete by design.** Never fabricate the owner's
  personal-fit inputs; they are marked `[NEEDS INPUT]`.
- **Keep the honest-downside framing.** Every opportunity entry and automation
  brief states what failure looks like, not just the upside.
- **Verify, don't assume.** Dates and figures move — re-check before asserting,
  and tag confidence.
- The docs tree is **markdown only — no build step.** The only buildable part is
  `site/` (Astro): `cd site && npm install && npm run dev`. It deploys
  automatically on push to `site/**`.

## Conventions

- **All committed artifacts in English.** Conversation with the owner in
  Portuguese is expected and fine; repo files stay English. `source/thread.md`
  keeps its original capture (a Portuguese auto-translation of a Spanish thread)
  for fidelity.
- Dates in `YYYY-MM-DD`.
- One opportunity = one numbered entry (`1`–`17`): `1`–`12` from the source
  thread, `13`–`17` from blind-spot analysis. Numbering is fixed.
- No auto-commit. Changes are staged for the owner to review; commit and push only
  when asked.
