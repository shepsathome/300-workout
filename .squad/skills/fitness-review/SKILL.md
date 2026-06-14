---
name: fitness-review
description: >
  Weekly fitness review skill — typically run on Sundays for ~30 minutes.
  Composes all five fitness-squad personas (Twight, Layne, Waterson,
  Nguyen, Ashwell) into a structured weekly analysis. Reads training logs,
  nutrition data, body metrics, Friday 300 benchmark times, and programme
  phase status. Produces a premium HTML report with Chart.js visualisations
  and per-persona sections. Use when Adam says "fitness review", "weekly
  fitness check", "how was my training week", "review my fitness", "Sunday
  check-in", or any variation asking for a composed weekly fitness analysis.
---

# Fitness Review — Weekly Fitness Analysis

A structured ~30-minute weekly fitness review for Adam Shepherd. Designed
to be run on Sunday evenings (default) but invokable any time. Composes
with the **`fitness-squad`** skill — the Fitness Review orchestrates all
five personas through a specific weekly review flow.

**Output goal:** Adam ends the review with (1) clear understanding of
what went well and what didn't this week, (2) data-driven assessment of
progress toward goals, and (3) ONE priority action for next week.

## When this skill activates

- Adam says "fitness review" / "weekly fitness check" / "how was my week"
- Adam says "Sunday check-in" / "review my training"
- Any time Adam wants the full composed weekly analysis

## Pre-flight: Load data

Before producing any output, load all relevant data sources:

### From the vault
Read these files from `C:\Users\adamshep\OneDrive\Copilot\Obsidian\Adam_Personal\Health & Fitness\`:

1. `Progress/Training Log.md` — this week's sessions
2. `Progress/Nutrition Log.md` — this week's macro data
3. `Progress/Body Metrics.md` — latest measurements
4. `Progress/Friday 300 Times.md` — this week's benchmark (if any)
5. `Progress/Programme Phase Log.md` — current phase and weeks elapsed
6. `The Spartan-Spider Programme.md` — programme definition
7. `Research/Intermittent Fasting Research.md` — IF protocol and evidence

### From the fitness-squad
Load all five charter files from `~/.github/skills/fitness-squad/charters/`:
- `00-head-trainer.md` (Twight)
- `01-nutrition-strategist.md` (Layne)
- `02-programme-architect.md` (Waterson)
- `03-recovery-coach.md` (Nguyen)
- `04-performance-analyst.md` (Ashwell)

Load research files as needed from `~/.github/skills/fitness-squad/research/`.

## Critical: Programme-Aware Analysis

The Spartan-Spider Programme supports **3, 4, and 5-day splits**. The PWA
data includes `settings.programme` (3, 4, or 5) which indicates which
split Adam is using that week. **Always check this before analysing.**

### Programme Variants

**5-day split:** Mon Upper, Tue Conditioning, Wed Lower, Thu Mobility, Fri 300
**4-day split:** Day 1 Upper+Conditioning, Day 2 Lower+Power, Day 3 Recovery+Core, Day 4 The 300
**3-day split:** Day 1 Full Body, Day 2 Conditioning+Core, Day 3 The 300

**Key rule:** The 4-day split already integrates conditioning into Day 1
(EMOM block + rowing sprints) and The 300. Do NOT flag "missing
conditioning day" when Adam is on the 4-day programme — conditioning is
built in. Similarly, the 3-day split compresses everything further.

Assess session completion against the ACTIVE programme, not the 5-day
template.

### Workout Day/Time Awareness

The PWA now stores `dayOfWeek`, `startedAt`, and `completedAt` on each
saved workout. Use these to determine which real-world days Adam trained
(e.g., "Tuesday through Friday") rather than assuming the programme day
labels map to specific weekdays. The programme day key (`d4_1`, `d4_2`,
etc.) indicates the session TYPE, not the calendar day.

## Intermittent Fasting Awareness

Adam follows a 16:8 IF protocol (Mon–Fri, typically 10am–6pm). The PWA
stores IF settings in `settings.intermittentFasting`. When IF is enabled:

- **Do NOT flag "no dinner" or "only 2 meals"** as problems
- Instead verify: total daily protein ≥ target, 3-4 meals within the
  window each hitting 30g+ protein, total calories meeting target
- The caloric gap is the real concern, not meal count
- Refer to `Research/Intermittent Fasting Research.md` for evidence
- See Section 11 of `fitness-squad/research/nutrition-research.md` for
  Layne's IF-aware analysis rules

## Sleep & Recovery Data

The PWA now includes a `sleepLog[]` array with nightly entries:
`{ date, hours, quality (1-10), energy (1-10), notes }`

When sleep data is available:
- Nguyen uses it for recovery assessment (target: 7.5-8h)
- Ashwell correlates sleep quality with 300 times and training performance
- Hours are colour-coded: 🟢 7.5+ / 🟡 6.5-7.4 / 🔴 <6.5

## Body Metrics Data

The PWA now includes a `bodyMetrics[]` array:
`{ date, weight, waist, chest, arms, thighs, feel (1-10), notes }`

- Weight + waist: expected weekly
- Chest, arms, thighs: expected monthly
- Ashwell tracks trends and deltas between entries

## Review Flow

### Section 1 — Data Gaps & Source Coverage (Ashwell leads)

Ashwell flags data availability before any analysis begins:
- Which vault files had entries this week
- Which data sources were missing or sparse
- Confidence level for each subsequent section
- Any data the squad needs but couldn't find

**Format:** Checklist with ✅/❌ per source + confidence note

### Section 2 — Performance Summary (Ashwell leads)

Ashwell presents the week's data:
- Sessions completed vs. planned
- Training volume (estimated tonnage) and trend
- Load progression on key lifts (DB press, DB row, KB swings, etc.)
- Friday 300 time vs. previous (if completed this week)
- Body metrics changes (if logged)
- Nutrition compliance: days tracked, average macros vs. targets

**Format:** Data table + trend indicators (↑ ↓ →)

### Section 3 — Training Review (Waterson leads)

Waterson assesses the training week:
- Were all prescribed exercises completed?
- Were loads appropriate (progressive overload check)?
- Movement pattern balance (push:pull ratio, posterior chain coverage)
- Any exercises that need substitution or progression
- Phase status: weeks into current phase, staleness indicators

**Format:** Exercise-by-exercise assessment with recommendations

### Section 4 — Nutrition Review (Layne leads)

Layne assesses the nutrition week:
- Average daily calories vs. target
- Protein total and per-meal distribution
- Leucine threshold compliance (did each meal hit ~3g leucine?)
- Fibre intake
- Hydration indicators
- NEAT (step count if available)
- Metabolic adaptation signals (if in extended deficit)

**Format:** Macro breakdown table + evidence-based recommendations

### Section 5 — Recovery Assessment (Nguyen leads)

Nguyen assesses recovery status:
- Rest days taken vs. planned
- Sleep quality/duration (if reported)
- Soreness and fatigue indicators
- Stress levels and their training impact
- Active recovery compliance
- Injury risk flags

**Format:** Traffic light system (🟢 🟡 🔴) for each recovery dimension

### Section 6 — Synthesis & Next Week (Twight leads)

Twight synthesises all four lenses into a unified assessment:
1. **Week grade** — A/B/C/D based on compliance, progression, and recovery
2. **What went well** — top 2-3 wins, attributed to the right dimension
3. **What needs work** — top 1-2 issues, with specific persona attribution
4. **Priority action for next week** — ONE thing. Not five. One.
5. **Phase check** — is a phase transition needed? If yes, trigger the
   Phase Transition Protocol (defined in fitness-squad SKILL.md)

## Output Format

### Primary: HTML Report
Generate a self-contained HTML report:
- **Light theme** (matching the 300 PWA aesthetic)
- **Chart.js** for training volume trends, macro compliance, benchmark history
- **Sidebar navigation** between the 6 sections
- **Each section header** includes persona name and role
- **Responsive** — wide layout on desktop, stacked on mobile
- Saved to `Adam_Personal/Health & Fitness/Squad Reports/YYYY-MM-DD Weekly Review.html`
- Auto-open in browser when complete

### Layout & Responsiveness

The report should make full use of available screen width:
- **Desktop (>1024px):** Sidebar fixed left (220px), content area uses
  remaining width. Within content, use **2-column grids** for data cards
  and chart pairs where natural (e.g., calories chart + macro split chart
  side by side; training volume + session completion side by side).
  Max content width: 1200px, centred.
- **Tablet (768–1024px):** Sidebar collapses to a top horizontal nav.
  Content stays 2-column where space permits.
- **Mobile (<768px):** Single column, no sidebar (hamburger or scroll-to
  navigation). Charts stack vertically.

Use CSS Grid or Flexbox with `gap` for clean spacing. Avoid narrow
single-column layouts on desktop — they waste screen real estate.

### Historical / Trend Charts

When multiple weeks of data are available in the PWA export, include
trend-over-time charts. These are the highest-value visualisations
for tracking progress:

**Always include (even with 1 week — they become trends over time):**
1. **Friday 300 Time Trend** — line chart, time (mm:ss) on Y-axis,
   date on X-axis. Target: downward slope. Highlight PBs.
2. **Weekly Training Volume** — bar chart, tonnage per week. Colour
   by session type (upper/lower/300/mobility).
3. **Daily Calorie Compliance** — line chart with target line (dashed),
   actual calories as bars or filled area. Shade deficit days red,
   surplus days green.
4. **Protein Trend** — line chart, daily protein with target line.
5. **Body Weight Trend** — line chart from bodyMetrics[], with waist
   as secondary axis if available. Show weekly entries.
6. **Sleep Trend** — line chart of nightly hours from sleepLog[],
   colour-coded zones (green ≥7.5, amber 6.5-7.4, red <6.5).
   Show 7-day rolling average as a smoothed overlay line.

**When 4+ weeks of data exist, add:**
7. **Key Lift Progression** — multi-line chart tracking working weight
   over weeks for DB bench, DB row, goblet squat, RDL, KB swing.
8. **Macro Split Trend** — stacked area chart showing protein/carbs/fat
   proportions week over week.
9. **Recovery Score Heatmap** — if sleep quality + energy scores exist,
   show a calendar heatmap (green-amber-red) for the review period.

**Chart design rules:**
- Use `Chart.js` `responsive: true` and `maintainAspectRatio: false`
  with explicit container heights (250-350px per chart).
- Muted, professional palette — not garish primary colours.
- Clear axis labels with units.
- Tooltip showing exact values on hover.
- When only 1 week exists, show daily data points with a note:
  "Trend charts build over time — keep logging."

### Secondary: Vault Summary
Append a brief summary to `Progress/Training Log.md`:
```markdown
### Week of YYYY-MM-DD — Squad Review
**Grade:** [A/B/C/D]
**Sessions:** X/Y completed
**Avg protein:** Xg (target: 160g)
**Friday 300:** XX:XX (Δ from last: ±XX)
**Priority:** [one-line action for next week]
```

## Report Styling Guide

Follow `report-generation.instructions.md` for HTML report standards.
Key requirements:
- Self-contained (no external dependencies except CDN Chart.js)
- Light mode default
- Clean sans-serif typography (system font stack)
- **Wide desktop layout** — 2-column grids, max-width 1200px
- Persona sections colour-coded:
  - Twight (Head Trainer): #1a1a2e (dark navy)
  - Layne (Nutrition): #16813d (evidence green)
  - Waterson (Programme): #2563eb (blueprint blue)
  - Nguyen (Recovery): #7c3aed (calm purple)
  - Ashwell (Performance): #dc2626 (data red)
- Charts: muted palette, clear labels, responsive, 250-350px height
- Chart containers use `display:grid; grid-template-columns: 1fr 1fr; gap:1.5rem`
  on desktop, `grid-template-columns: 1fr` on mobile
- Data cards use similar 2-column grids on desktop
- Print-friendly layout

## Handling Missing Data

The squad works with whatever data is available. If data is sparse:
- **No training log entries this week:** Ashwell flags it; Twight asks
  Adam what happened before any analysis
- **No nutrition data:** Layne states assumptions clearly ("assuming
  you maintained ~2,300 kcal based on previous weeks")
- **No body metrics in 4+ weeks:** Ashwell requests a measurement session
- **No Friday 300 this week:** Skip benchmark section; note gap

Never fabricate data. If a metric is unknown, say so and explain what
it means for the analysis.
