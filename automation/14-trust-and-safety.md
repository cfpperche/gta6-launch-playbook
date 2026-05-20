# Automation brief — 14. Trust & safety as a service

> **Opportunity:** the trust layer for the GTA 6 ecosystem — scam detection,
> verified directories, moderation-as-a-service, anti-fraud tooling. Catalogue:
> [`../opportunities/README.md`](../opportunities/README.md).
> **This brief:** how far AI takes development + operation toward 100%.
> **Tier 3** — a blind-spot addition; see [`README.md`](README.md).

## Verdict — ~80%

Detection automates well — AI content moderation and on-chain rug/scam scanners
are precisely the 2026 tooling, and they run continuously without supervision.
What does not automate: the *adjudication* (a "verified" stamp carries
reputational and legal weight — a wrong one on a scam is a liability), the trust
brand itself (a trust product's entire value is that a trusted party stands
behind it), appeals and disputes, and the adversarial co-evolution — scammers
adapt to every scanner, which needs human red-teaming.

## Build phase — automating development

- Agentic coding builds the detection pipelines, the scanners, the verified
  directory, and the moderation SaaS.
- Detection models are wired to on-chain data, content feeds, and known-scam
  pattern libraries.

## Operate phase — automating execution

- Detection agents scan continuously; moderation agents handle the bulk of
  community moderation volume; the verified directory auto-updates as signals
  change.
- A monitoring agent flags emerging scam patterns for human review.

## The AI stack (2026)

AI content-moderation models · on-chain analytics / scanner agents ·
content-analysis agents · agentic coding for the SaaS · a red-team agent that
probes for evasion.

## Human-in-the-loop — the supervisor role

- **The verification judgment** — the verified/not-verified call, and the
  accountability for it. This *is* the product; it cannot be delegated to an agent.
- **The trust brand** — a trust service is only worth what its name is worth.
- **Appeals and disputes** — contested calls need human adjudication.
- **Red-teaming** — adversaries adapt; staying ahead is human-led.

## What blocks the last mile to 100%

A trust product cannot fully delegate the trust decision — accountability is the
product. Adversaries co-evolve with the detectors, so the system is never "done".

## Failure modes of the automated approach

A single false "verified" on something that then rugs destroys the brand
instantly — and brand *is* the asset. Over-automated moderation produces
false positives that anger communities. Platforms (Discord, Twitch, Rockstar) may
bundle trust/safety natively for free. And exposing scammers makes the operation
itself a target.
