# Ceremonies

> Team meetings that happen before or after work. Each squad configures their own.

## Design Review

| Field | Value |
|-------|-------|
| **Trigger** | auto |
| **When** | before |
| **Condition** | multi-agent task involving 2+ agents modifying shared systems |
| **Facilitator** | lead |
| **Participants** | all-relevant |
| **Time budget** | focused |
| **Enabled** | ✅ yes |

**Agenda:**
1. Review the task and requirements
2. Agree on interfaces and contracts between components
3. Identify risks and edge cases
4. Assign action items

---

## Retrospective

| Field | Value |
|-------|-------|
| **Trigger** | auto |
| **When** | after |
| **Condition** | build failure, test failure, or reviewer rejection |
| **Facilitator** | lead |
| **Participants** | all-involved |
| **Time budget** | focused |
| **Enabled** | ✅ yes |

**Agenda:**
1. What happened? (facts only)
2. Root cause analysis
3. What should change?
4. Action items for next iteration


---

## Retrospective with Enforcement

| Field | Value |
|-------|-------|
| **Trigger** | auto |
| **When** | weekly |
| **Condition** | No *retrospective* log in .squad/log/ within the last 7 days |
| **Facilitator** | lead |
| **Participants** | all |
| **Time budget** | focused |
| **Enabled** | yes |
| **Enforcement skill** | retro-enforcement |

**Agenda:**
1. What shipped this week? (closed issues, merged PRs)
2. What did not ship? (open issues, blockers)
3. Root cause on any failures
4. Action items -- each MUST become a GitHub Issue labeled retro-action

**Coordinator integration:**
At round start, call Test-RetroOverdue (see skill retro-enforcement). If overdue, run this ceremony before the work queue.

**Why GitHub Issues, not markdown:**
Production data: 0% completion across 6 retros using markdown checklists, 100% after switching to GitHub Issues.

---

## Sunday Fitness Review

| Field | Value |
|-------|-------|
| **Trigger** | manual |
| **When** | Sunday (or on demand) |
| **Condition** | Adam asks for "Sunday review", "fitness review", "weekly check-in", or similar |
| **Facilitator** | Dallas |
| **Participants** | fitness-squad personas (Twight, Layne, Waterson, Nguyen, Ashwell) |
| **Time budget** | ~30 minutes |
| **Enabled** | ✅ yes |
| **Skill** | fitness-review |

**Agenda:**
1. Load PWA data + vault progress logs (see `.squad/skills/fitness-review/SKILL.md`)
2. Data Gaps & Source Coverage (Ashwell)
3. Performance Summary (Ashwell)
4. Training Review (Waterson)
5. Nutrition Review (Layne)
6. Recovery Assessment (Nguyen)
7. Synthesis & Next Week — grade + ONE priority action (Twight)

**Output:** Premium HTML report saved to `Adam_Personal/Health & Fitness/Squad Reports/`
