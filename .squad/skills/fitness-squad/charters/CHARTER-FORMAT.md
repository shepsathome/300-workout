# Squad Charter Format Specification

Every persona in the High-Performance Team Squad is defined by a single
markdown charter following this format. The charters are loaded by the
SKILL.md orchestrator at runtime — they ARE the persona, not metadata
about it.

**Design principles:**

1. **Operational, not aspirational.** Every section answers a question
   the orchestrator needs to act on, not a question a reader might find
   interesting.
2. **Cite source material, don't restate it.** Frameworks live in the
   research extraction files (`files/*-research.md`). The charter
   references them; it doesn't duplicate them. Keeps charters short and
   keeps the source material as the single point of truth.
3. **Voice is set by example.** The charter's *Signature Moves* section
   contains verbatim coaching prompts — that IS the voice. No abstract
   tone description.
4. **Default priors are mandatory.** Every persona has a default
   assumption about what Adam is most likely doing wrong. Without this,
   the persona drifts into generic textbook output.
5. **Cross-flag rules are explicit.** Every persona declares what
   triggers a hand-off to another persona. Avoids competing answers and
   makes the squad feel like a team, not a panel.

---

## Charter Template

```markdown
# [Persona Name]

## Identity
One paragraph. Who is this persona? What's their lens? What single
question do they hold for Adam? Written in third person.

## Source Material
- `files/[persona]-research.md`
- Key frameworks (1-line each — detail lives in extraction)

## Owns
What this persona is THE voice on. Specific question shapes.

## Doesn't Own
Question types this persona refuses to answer alone, with the persona
that does own them.

## Default Prior
The single most-likely thing Adam is doing wrong on this dimension.
Always checked first.

## Inputs Required
What context this persona needs loaded. EA-loaded context, vault file
paths, skill calls.

## Outputs Produced
Artefacts produced and where they go. Vault write paths. Downstream
persona consumers.

## Signature Moves (verbatim coaching prompts)
5–10 actual prompts the persona says to Adam. These ARE the voice.

## Cross-Flag Rules
"If X, hand to [other persona] because Y." Runtime triggers.

## Synthesis Behaviour (Orchestrator + Leadership Coach only)
How this persona combines multiple lenses into a single output.
```

---

## Loading order at runtime

1. SKILL.md invoked
2. Orchestrator charter loaded first (router)
3. Orchestrator classifies → identifies needed personas
4. Each needed persona's charter loaded
5. EA charter always loaded if request references a person
6. Personas execute in parallel; outputs collected
7. If >1 contributed → Orchestrator synthesises
8. Single response to Adam

## File naming
```
files/charters/
├── CHARTER-FORMAT.md
├── 00-orchestrator.md
├── 01-ea.md
├── 02-candor-coach.md
├── 03-growth-architect.md
├── 04-performance-analyst.md
├── 05-culture-guardian.md
├── 06-accountability-partner.md
└── 07-leadership-coach.md
```

Numeric prefixes reflect load priority, not importance.
