# Automation brief — 5. In-game AI NPCs

> **Opportunity:** sell mod packs of AI-driven conversational NPCs to RP-server
> owners. Catalogue: [`../opportunities/README.md`](../opportunities/README.md).
> **This brief:** how far AI takes development + operation toward 100%.

## Verdict — ~80%, gated by an external unknown

The product itself *is* AI, and building it is well within 2026 capability:
NVIDIA ACE (the voice / lip-sync / animation "body") + Inworld AI or Convai (the
personality / memory "brain") are production tech; conversational design is
prompt-engineering; the mod-framework code is agentic-codable. What automation
*cannot* move: whether GTA 6's PC release (~2027) ships with the modding access
this entire opportunity depends on. That wall is outside anyone's control.

## Build phase — automating development

- **Persona authoring:** an agent generates NPC personalities, backstories, and
  dialogue at scale.
- **Voice:** ElevenLabs clones/generates a distinct voice per character.
- **Framework integration:** agentic coding builds the mod framework against the
  GTA 6 modding API once it exists; pre-2027, prototype it against GTA 5 / FiveM.
- **Packaging:** an agent assembles licensable packs (shopkeepers, gang leaders,
  dealers, taxi drivers…).

## Operate phase — automating execution

- A storefront (Gumroad / B2B) — agent-built and agent-operated.
- **Catalog expansion:** an agent continuously generates new NPC packs.
- Support and licence delivery — largely agent-handled.
- Updates as GTA 6 modding tools evolve.

## The AI stack (2026)

Inworld AI / Convai (NPC brain) · NVIDIA ACE (body — TTS, lip-sync, animation;
note local-NPU processing for the sub-300ms latency real dialogue needs) ·
ElevenLabs · Claude for persona authoring · agentic coding for the framework and
store.

## Human-in-the-loop — the supervisor role

- **Creative direction** — distinctive characters servers actually *want* (taste).
- **The external bet** — read GTA 6's modding ToS the moment it is public; pivot
  fast if modding is locked down.
- **In-game QA** — verifying NPCs work and *feel* right inside the live game.
- **B2B sales** — $5–50k licensing deals close human-to-human.

## What blocks the last mile to 100%

The modding-access dependency is outside anyone's control. High-value B2B
licensing is relationship sales. In-game QA needs human judgment.

## Failure modes of the automated approach

Build the whole framework, then GTA 6 PC modding ships locked down → dead, with
sunk cost. NPC packs that are technically fine but creatively bland → no buyers.
Latency or performance problems in-game (the sub-300ms threshold) ruin the
experience. The serious-server B2B market is small — a few dozen buyers — and
saturates fast.
