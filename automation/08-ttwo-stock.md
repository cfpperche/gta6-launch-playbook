# Automation brief — 8. TTWO stock

> **Opportunity:** a position in Take-Two Interactive ahead of the GTA 6 launch.
> Catalogue: [`../opportunities/README.md`](../opportunities/README.md).
> **This brief:** how far AI takes development + operation toward 100%.
> **Tier 2 — read [`README.md`](README.md) § *The Tier 1 / Tier 2 split* first.**

## Verdict — ~95% of *execution* is automatable, and that is the trap

The thread's plan — open long now, DCA May–July, trim at Trailer 3, take profit at
launch week, re-enter on the dip — is a fully mechanical rule set. Any 2026 trading
bot executes it perfectly: 3Commas / QuantPilot-class platforms run autonomous
agents that build, backtest, and run strategies, and Kraken / Coinbase / Binance
ship native agent toolkits. But automating *execution* was never the hard part.
The hard part is the *thesis* — and **a bot executing a wrong thesis flawlessly
just loses money with precision.**

## Build phase — automating the strategy

- An agent codifies the rule set into a backtested strategy: entry/exit dates, the
  DCA schedule, position caps, stop-losses.
- Backtest against the GTA 5 analog (the +718% run, the −12% "sell the news") and
  stress-test against the third-delay scenario.

## Operate phase — automating execution

- The bot executes orders on schedule, rebalances, and enforces stops — no
  emotion, no missed window.
- A monitoring agent watches the signal set in [`../timeline/`](../timeline/) —
  earnings, Trailer 3, delay news — and flags thesis-breaking events.

## The AI stack (2026)

3Commas / QuantPilot-class autonomous trading agents · exchange-native agent
toolkits · a news-monitoring agent wired to the timeline signals.

## Human-in-the-loop — the supervisor role (this is most of the value)

- **Decide the thesis is valid and stays valid.** Is GTA 6 still on track? Did a
  third delay just break the plan? An agent can *flag* it; a human must decide.
- **Position sizing** — how much capital, against what net worth and risk
  tolerance. This single decision drives the outcome, and it is not a bot
  decision.
- The decision to deploy capital *at all*.
- Tax, brokerage, and regulatory accountability.

## What blocks the last mile to 100%

Automating a trade's *execution* is trivial and was never the constraint.
Automating the *judgment* is unsafe — a bot has no skin in the game and no
accountability for being wrong.

## Failure modes of the automated approach

The core one: **a bot makes a bad bet efficient.** Flawless execution of a thesis
broken by a third delay just loses money faster. Over-automation breeds false
confidence ("the system handles it") and detaches the owner from a live capital
risk. Equity-perp leverage (the thread's Hyperliquid suggestion), automated,
amplifies liquidation risk.

> This brief documents *mechanics only*. It is not a recommendation to take the
> position — see [`../evaluation/`](../evaluation/), which tracks Tier 2 as a
> separate, capped capital decision.
