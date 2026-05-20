# Automation brief — 10. GTA 6 memecoins

> **Opportunity:** speculative GTA-6-themed memecoins.
> Catalogue: [`../opportunities/README.md`](../opportunities/README.md).
> **This brief:** how far AI takes development + operation toward 100%.
> **Tier 2 — read [`README.md`](README.md) § *The Tier 1 / Tier 2 split* first.**

## Verdict — ~85% of the *mechanics* is automatable, and this is where automation is most dangerous

The thread's own filter checklist — mint authority renounced, LP burned/locked, no
team wallet >5%, no bot-manipulated buys, a real pre-pump community, ties to
confirmed GTA 6 elements — is precisely what on-chain scanner bots and sniping
tools already do automatically. You *can* build an agent that screens and snipes
new tokens 24/7. You **cannot** automate away a 95%+ rug rate — and an agent that
executes faster and at scale simply reaches ruin faster and at scale.

## Build phase — automating the strategy

- An **on-chain scanner agent** monitors new token deployments, runs the filter
  checklist automatically, and scores candidates.
- A **sniping agent** executes sub-second buys on tokens that pass.
- Position rules: <1% of the (capped) allocation per token, auto take-profit
  ladders, hard stop.

## Operate phase — automating execution

- The fleet screens, snipes, and exits continuously across the June–November
  window.

## The AI stack (2026)

On-chain analytics / token-scanner agents · mempool sniping bots · automated
take-profit / stop-loss.

## Human-in-the-loop — the supervisor role

- **The decision not to do this at scale.** The honest supervisor role here is to
  set a hard, small, pre-committed loss budget and treat the entire allocation as
  already spent.
- **Accept that no amount of automation changes the base rate.**

## What blocks the last mile to 100%

Nothing technical — the wall is the base rate. 95%+ of these are rugs; the filters
reduce but do not eliminate, and rug techniques co-evolve with the scanners that
detect them.

## Failure modes of the automated approach

**Automation is a loss-amplifier here.** A bot that snipes efficiently across
hundreds of tokens converts a one-off YOLO punt into systematic capital
destruction. Sniping bots are also adversarially targeted — rug designers bait the
scanners. This brief documents that the opportunity is *automatable*; the
evaluation's stance is that it must be capped to money already written off.

> Mechanics only — emphatically not a recommendation. See
> [`../evaluation/`](../evaluation/).
