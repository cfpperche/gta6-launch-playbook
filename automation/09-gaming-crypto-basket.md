# Automation brief — 9. Gaming-crypto "sympathy" basket

> **Opportunity:** a basket of gaming-sector tokens (IMX, BEAM, RON, GALA,
> MANA/SAND) on the bet that GTA 6 re-ignites the gaming-crypto narrative.
> Catalogue: [`../opportunities/README.md`](../opportunities/README.md).
> **This brief:** how far AI takes development + operation toward 100%.
> **Tier 2 — read [`README.md`](README.md) § *The Tier 1 / Tier 2 split* first.**

## Verdict — ~90% of *execution* automatable, and that is a warning

A basket with DCA entry (June–September) and a rebalance/trim schedule (cut into
the November euphoria) is fully codifiable, and 2026 crypto trading bots run
exactly this. But the entire opportunity rests on a *narrative* — "GTA 6 reignites
gaming-crypto" — with no fundamentals beneath it. **Automating a narrative bet does
not make the narrative true; it just makes the position efficient.**

## Build phase — automating the strategy

- An agent codifies the basket weights, the DCA schedule, and the rebalance/exit
  rules; backtests against the 2021 gaming-token cycle (AXS / MANA / SAND / GALA) —
  while noting that most of those tokens are now effectively dead, which is itself
  the warning the backtest surfaces.

## Operate phase — automating execution

- The bot executes DCA, rebalances, and enforces the 5%-of-portfolio cap and the
  November trim.
- An on-chain + sentiment agent tracks narrative strength and BTC macro.

## The AI stack (2026)

Crypto trading bots (BulkQuant / 3Commas-class) · on-chain analytics agents ·
sentiment / narrative-monitoring agents.

## Human-in-the-loop — the supervisor role

- **Judge whether the narrative is real** — the only thing that matters, and the
  one thing a bot cannot assess. Narrative bets are reflexive and unfalsifiable
  until they fail.
- **The capital cap** and the decision to play at all.
- **Macro read** — Tier 2 is correlated; a BTC drawdown sinks the whole basket.

## What blocks the last mile to 100%

The bet *is* the judgment. There is nothing mechanical to optimize that fixes a
false premise.

## Failure modes of the automated approach

Automation amplifies a narrative bet's losses as efficiently as its gains. Most
2021 gaming tokens going to zero is the base rate here. Full correlation with
crypto macro means a market drawdown automates a synchronized loss across the
whole basket.

> Mechanics only — not a recommendation. See [`../evaluation/`](../evaluation/).
