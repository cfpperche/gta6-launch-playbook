# Automation brief — 2. Streaming

> **Opportunity:** build a streaming presence that compounds into the GTA 6
> launch. Catalogue: [`../opportunities/README.md`](../opportunities/README.md).
> **This brief:** how far AI takes development + operation toward 100%.

## Verdict — ~90% (via the AI-persona route only)

There are two routes, and the goal of full automation forces the choice:

- **Route A — AI VTuber persona:** the streamer *is* an AI. Proven at the very top
  of the market — Neuro-sama, an AI VTuber, is the most-subscribed streamer on
  Twitch (≈162k subs, ≈$400k/mo in subs alone), built and run by one programmer.
  ~90% automatable.
- **Route B — human streamer + AI assist:** editing, thumbnails, scheduling, and
  multistream automate; the on-camera hours do not. Caps at ~55–60%.

For "100% automation", Route A is the answer. This brief covers Route A.

## Build phase — automating development

- Design an AI persona: character, voice, avatar (Live2D/3D), backstory — make it
  GTA-6-themed from day one.
- Wire the runtime: an LLM "brain" (conversational, with memory of regulars) +
  TTS voice + avatar rig + game-input integration + Twitch-chat ingestion. This is
  a software build squarely within agentic-coding range — Vedal built Neuro-sama
  solo.

## Operate phase — automating execution

- **24/7 autonomous streaming** — Neuro-sama runs near-continuous streams; an
  unfair advantage no human streamer can match.
- The AI plays GTA 6, reacts, talks to chat, sings, runs bits — autonomously.
- A clip agent auto-cuts highlights and feeds the UGC factory ([#3](03-ugc-content-factory.md)).
- A mod bot runs chat; scheduling, multistream, and thumbnails are automated.

## The AI stack (2026)

LLM brain (Claude/GPT) + memory store · ElevenLabs/voice · Live2D/3D avatar +
animation rig · game-control integration · Twitch API · clip-and-post agent ·
Discord bot · Claude Code to build and maintain the runtime.

## Human-in-the-loop — the supervisor role

- **Persona "soul".** Neuro-sama's appeal is the *character* — its humour, its
  boundaries, its bits — not the tech. Authoring that is the irreducible core.
- **ToS & safety.** An unsupervised AI streamer that generates the wrong sentence
  is an existential risk to the channel. Needs hard guardrails plus monitoring.
- **Brand deals, drama, the business.**
- **Novelty management.** Audiences habituate; a human reinvents the format.

## What blocks the last mile to 100%

ToS liability cannot be delegated to an agent. The persona's character is authored
by a human. Novelty decays without human creative refresh.

## Failure modes of the automated approach

An AI streamer with no character is ignored — the tech is necessary, not
sufficient. Unsupervised, it is a ToS time-bomb: one offensive generation can end
the channel. Twitch policy on AI streamers can change. And post-Neuro-sama, "an AI
streamer" is no longer novel by itself — the category is crowding.
