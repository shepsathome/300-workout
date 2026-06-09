# Phase-Aware Programming — Feature Spec

> **Squad task:** Build phase-aware progressive overload into the 300 PWA,
> using the Gist as the sync channel for programme changes.

---

## Problem

The app currently hardcodes exercise definitions per programme day. When
the user hits their equipment ceiling (15kg DBs), traditional "add weight"
progression stops. The programme needs to automatically adjust exercises,
cues, tempo, rest periods, and rep schemes based on the current training
phase — and the coaching squad needs a way to push those changes remotely.

## Architecture

### The Gist as a Two-Way Coaching Channel

The Gist already syncs user data (workouts, nutrition, metrics). We add a
`programmeConfig` field that the coaching squad writes during weekly
reviews, and the app reads on sync.

```
Squad/Copilot writes:  programmeConfig → Gist
App reads on sync:     Gist → programmeConfig → renders phase-adjusted workouts
App writes as usual:   workouts/nutrition/metrics → Gist
```

### Data Model — `programmeConfig`

Added to the root of the Gist JSON alongside `workouts`, `nutrition`, etc.

```json
{
  "programmeConfig": {
    "version": 1,
    "lastUpdated": "2026-06-09",
    "updatedBy": "fitness-squad-review",

    "phase": {
      "current": "foundation",
      "startDate": "2026-05-27",
      "targetEndDate": "2026-06-24",
      "week": 3,
      "label": "Foundation — Load + Reps",
      "description": "Build to max loads, master form, fill rep targets"
    },

    "overload": {
      "primary": "load+reps",
      "tempo": null,
      "pauseSeconds": 0,
      "useHalfReps": false,
      "unilateral": false,
      "restMultiplier": 1.0
    },

    "exerciseOverrides": {
      "bench-press": {
        "sets": 4,
        "repsTarget": "10-12",
        "tempo": null,
        "cue": "Control the descent. Full ROM.",
        "weight": 15
      },
      "goblet-squat": {
        "sets": 4,
        "repsTarget": "12",
        "tempo": "3-1-2",
        "cue": "3s down, 1s pause at bottom, 2s up. This is where growth happens.",
        "weight": 15
      }
    },

    "restPeriods": {
      "strength": 90,
      "circuit": 60,
      "emom": "remainder",
      "core": 0,
      "finisher": 45
    },

    "phaseTransition": {
      "autoPromptAtWeek": 4,
      "nextPhase": "hypertrophy",
      "previewChanges": [
        "Add 3-4s eccentric to all compounds",
        "Introduce 1.5 reps on bench/squat/RDL",
        "Increase to 5 sets on compounds",
        "Rest periods stay at 90s (TUT does the work)"
      ]
    },

    "globalCues": [
      "Equipment ceiling reached — overload through technique, not load",
      "Last set should be your best set (Twight rule)"
    ]
  }
}
```

### How the App Uses It

#### 1. Phase Banner
When `programmeConfig` exists, show a phase indicator at the top of the
Train dashboard:

```
⚡ Foundation · Week 3 of 4
Build to max loads, master form, fill rep targets
```

Tapping it shows phase detail + preview of next phase changes.

#### 2. Exercise Cue Injection
When rendering each exercise step, check `exerciseOverrides[key]`:
- If `tempo` is set, show a tempo badge: `⏱ 3-1-2`
- If `cue` is set, replace/supplement the default coaching cue
- If `sets` or `repsTarget` differ from default, use the override

#### 3. Rest Timer Adjustment
Read `restPeriods` to set countdown timer defaults per block type.
Read `overload.restMultiplier` for phase-level scaling (e.g., 0.75 in
Conditioning phase = 25% shorter rest).

#### 4. Phase Transition Prompt
When `phase.week >= phaseTransition.autoPromptAtWeek`, show a card:

```
🔄 Phase Review Due
You've completed 4 weeks of Foundation.
Preview what changes in Hypertrophy:
• 3-4s eccentric on all compounds
• 1.5 reps on bench/squat/RDL
• 5 sets on compounds

[Advance to Hypertrophy] [Stay in Foundation]
```

If the user advances, the app updates `programmeConfig.phase` locally
and syncs to Gist. The next squad review picks it up and writes the
full Hypertrophy `exerciseOverrides`.

#### 5. Global Cues
`globalCues[]` appear as coaching chips on the Train dashboard —
contextual reminders that rotate per phase.

### Squad Workflow

During the weekly fitness review:

1. Squad analyses workout data, identifies phase status
2. If a phase transition is needed, squad writes new `programmeConfig`
   with updated overrides, cues, rest periods
3. Squad pushes the update via `DS.syncToGist()` equivalent (or the
   review skill writes it directly to the Gist API)
4. Next time Adam opens the app and syncs, changes appear automatically

### What the Squad Can Control Remotely

| Field | Effect in App |
|-------|--------------|
| `phase.current` | Phase banner label and colour |
| `phase.description` | Phase description text |
| `overload.tempo` | Global tempo prescription shown on all compounds |
| `overload.pauseSeconds` | Pause rep instruction on compounds |
| `overload.useHalfReps` | 1.5 rep badge and instruction |
| `overload.unilateral` | Swap bilateral → unilateral variants |
| `overload.restMultiplier` | Scale all rest timers |
| `exerciseOverrides.*` | Per-exercise sets, reps, tempo, cues, weight |
| `restPeriods.*` | Block-level rest timer defaults |
| `phaseTransition.*` | When to prompt, what changes next |
| `globalCues[]` | Coaching chips on dashboard |

### Migration / Backwards Compatibility

- If `programmeConfig` is missing from Gist data, app behaves exactly
  as today (hardcoded programme). No breaking change.
- `programmeConfig.version` field allows future schema changes.
- App merges overrides on top of defaults — any exercise NOT in
  `exerciseOverrides` uses its hardcoded definition.

## Implementation Plan

### Phase 1 — Data Layer (PWA Engineer)
- Add `programmeConfig` to `DS.defaultData()` (null default)
- Ensure `pullFromGist()` and `syncToGist()` handle the new field
- Add `DS.getProgrammeConfig()` helper

### Phase 2 — Train Dashboard (PWA Engineer + UX Designer)
- Phase banner component
- Global cues rendering
- Phase transition prompt card

### Phase 3 — Exercise Rendering (PWA Engineer)
- Merge `exerciseOverrides` into `renderStep()`
- Tempo badge display
- Cue injection
- Rest timer adjustment from config

### Phase 4 — Squad Integration (PWA Engineer)
- Helper function: `DS.updateProgrammeConfig(config)` that writes
  and syncs
- Document the Gist field for the fitness-squad skill to write to
- Test: squad writes config → app syncs → exercises update

### Phase 5 — QA (QA Tester)
- Test with no programmeConfig (backwards compat)
- Test phase transition flow
- Test exercise override merging
- Test on iOS Safari PWA (service worker cache)
- Test Gist sync round-trip

---

*Spec written 2026-06-09 by Waterson (Programme Architect) + Copilot.*
*Ready for fitness-app-squad to pick up.*
