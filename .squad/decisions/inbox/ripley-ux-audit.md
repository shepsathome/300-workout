### 2026-06-06T20:56: Ripley's UX Audit — 300 Workout PWA
**By:** Ripley (UI Dev) — via Coordinator
**Benchmarked against:** `.squad/skills/pwa-design-system/SKILL.md`

---

## 🔴 Critical — Breaks the Native Feel

### C1. Missing `viewport-fit=cover`
**Now:** `<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">`
**Should be:** Add `viewport-fit=cover` — without it, iOS puts white gutters beside the notch and home indicator. The app looks like it doesn't understand the device it's running on.
**Effort:** Small | **Study:** Apple Fitness+

### C2. Manifest `background_color` is light grey on a dark app
**Now:** `"background_color": "#f6f8fa"` — a LIGHT grey. The app is dark-only (`--bg:#0d0d0f`).
**Impact:** When the app launches from the home screen, there's a white/light flash before CSS loads. This screams "web page" instantly.
**Should be:** `"background_color": "#0d0d0f"` — match the app background exactly.
**Effort:** Small (one-line fix) | **Study:** Strava, Strong (both dark splash)

### C3. No `overscroll-behavior-y: contain`
**Impact:** Native pull-to-refresh shows in Chrome/Android. Breaks the app illusion immediately.
**Should be:** `body { overscroll-behavior-y: contain; }` — build custom refresh if needed.
**Effort:** Small | **Study:** Any native app

### C4. No `color-scheme: dark` declaration
**Impact:** Browser-native form controls (date pickers, number inputs, scrollbars) render in light mode with white backgrounds — jarring in a dark app.
**Should be:** `:root { color-scheme: dark; }`
**Effort:** Small | **Study:** Strong app

### C5. History nav touch targets too small
**Now:** `.history-nav button { min-height: 40px }` — below the 44px Apple HIG minimum.
**Should be:** `min-height: 44px` minimum. These are frequently tapped during workout review.
**Effort:** Small | **Study:** Apple HIG

### C6. Manifest icon `purpose` is combined
**Now:** `"purpose": "any maskable"` — this tells the OS to use the SAME icon for both contexts. Maskable icons need extra padding that looks wrong when used as regular icons.
**Should be:** Split into two icon entries: one `"purpose": "any"`, one `"purpose": "maskable"` (with 20% safe zone padding).
**Effort:** Small

---

## 🟡 High Impact — Big Visual/UX Upgrades

### H1. Text color is effectively pure white — causes halation
**Now:** `--text:#f5f5f7` — this is 96% white (245/255). On AMOLED screens in dark environments, bright white text creates a "glow" effect (halation) that fatigues the eyes.
**Should be:** `--text: rgba(255,255,255,0.92)` — the 8% reduction is barely perceptible consciously but dramatically reduces eye strain. Research confirms this (Material Design 3, Apple HIG both use off-white on dark).
**Effort:** Small (one variable change) | **Study:** Strong, Strava

### H2. Only 2 surface tiers — needs 4-6 for depth
**Now:** `--bg:#0d0d0f`, `--card:#1c1c1e`, `--card2:#2c2c2e` — three levels. Many components use ad-hoc `rgba(255,255,255,.03-.05)` inline, creating inconsistency.
**Should be:** Adopt the 6-tier system from the skill:
```
--surface-0: #000000   (viewport/AMOLED)
--surface-1: #0f0f0f   (page bg)
--surface-2: #1a1a1a   (cards)
--surface-3: #242424   (raised cards, inputs)
--surface-4: #2e2e2e   (active/hover)
--surface-5: #383838   (tooltips)
```
Then replace all inline rgba values with tokens. This creates consistent visual depth — elements "lift" off the background naturally.
**Effort:** Medium (audit all `rgba(255,255,255,.0X)` references, replace with tokens) | **Study:** Strava's layered dark UI

### H3. No spacing tokens — ad-hoc magic numbers everywhere
**Now:** Padding/margins use `.85rem`, `.75rem`, `.7rem`, `.55rem`, `.45rem`, `.35rem` etc. — no system, no rhythm.
**Should be:** 8px grid tokens:
```
--space-1: 4px;  --space-2: 8px;  --space-3: 12px;  --space-4: 16px;
--space-5: 20px; --space-6: 24px; --space-8: 32px;
```
Convert existing values to nearest token. This creates visual rhythm — everything aligns subconsciously.
**Effort:** Large (touch every component) — but can be done incrementally | **Study:** Apple Fitness+ (ruler-precise spacing)

### H4. No spring easing — animations feel mechanical
**Now:** All transitions use `ease` or `ease-out` — functional but generic.
**Should be:** Add spring/bounce easing for confirmations and celebratory moments:
```
--spring: cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
```
Use `--spring` for: log-set confirmations, streak celebrations, FAB open. Use `--ease-out` for: view transitions, bottom sheet slides, card presses.
**Effort:** Medium | **Study:** Strong (set logged bounce), Apple Fitness+ (ring close)

### H5. Card border-radius should be 20px consistently
**Now:** Mix of `16px`, `14px`, `18px`, `20px` across different card types. Inconsistent.
**Should be:** `--card-radius: 20px` for all primary cards, `--card-radius-sm: 12px` for chips/badges, `--radius-pill: 100px` for pills. Consistent large radii = modern, premium feel.
**Effort:** Small-Medium | **Study:** Strong, Hevy (consistent 20px cards)

### H6. New Steps domain card missing accent color
**Now:** `.dc-steps` has no `::before` gradient rule — the left accent bar is invisible.
**Should be:** Add:
```css
.domain-card.dc-steps::before{background:linear-gradient(180deg,var(--accent),var(--accent2))}
```
Or use a distinct steps color like teal/cyan to differentiate from Training.
**Effort:** Small

---

## 🟢 Polish — From Good to Great

### P1. Add `font-variant-numeric: tabular-nums` to stat displays
**Why:** Without tabular numerals, digits have variable widths. When stats update (timer, rep counter), numbers visually "dance". With tabular-nums, every digit takes the same width — clean, stable, professional.
**Where:** `.stat-pill .stat-value`, `.hist-hero`, `.big-time`, `.st-time`, `.rest-time`
**Effort:** Small | **Study:** Strava activity stats

### P2. Chart.js gradient fills (Strava-style area charts)
**Now:** Bar charts use solid fills. Line charts are just lines.
**Should be:** Add gradient fills under line charts — gradient from 40% opacity at top to 0% at bottom. This is the signature Strava/Apple Fitness+ look. The skill has the exact `createGradientFill()` implementation.
**Effort:** Medium | **Study:** Strava performance charts

### P3. Add `prefers-reduced-motion` support
**Now:** No reduced-motion media query. Users with motion sensitivity preferences get all animations.
**Should be:**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```
**Effort:** Small | **Study:** WCAG 2.1 requirement

### P4. Add `:focus-visible` for keyboard accessibility
**Now:** No visible focus styles. Keyboard/assistive tech users can't see where they are.
**Should be:**
```css
:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
```
**Effort:** Small | **Study:** Radix UI (best-in-class focus styles)

### P5. Use `100dvh` instead of implicit `vh`
**Now:** Full-screen elements use percentage heights that depend on the viewport.
**Should be:** Use `min-height: 100dvh` for full-screen containers. `dvh` (dynamic viewport height) accounts for mobile browser chrome appearing/disappearing — `vh` doesn't, causing content to hide behind the URL bar.
**Effort:** Small

### P6. Add `scrollbar-gutter: stable` to `html`
**Now:** When content grows/shrinks enough to toggle the scrollbar, the layout shifts slightly.
**Should be:** `html { scrollbar-gutter: stable; }` — reserves space for the scrollbar permanently, preventing layout shift.
**Effort:** Small

---

## 💡 Ideas — Aspirational

### I1. Glassmorphism header on scroll
The top header (`.hero`) is opaque. When content scrolls beneath it, switch to frosted glass (`backdrop-filter: blur(20px)` with reduced opacity). This is the Apple Fitness+/Strava signature look — content peeks through the header.

### I2. Celebration animations for milestones
When a user hits a streak milestone (7, 30, 100 days), a new PR, or completes a workout — play a brief confetti/pulse animation. Apple Fitness+ does this with ring closures. The skill's `--spring` easing makes these feel physical.

### I3. Onboarding flow
Currently the app drops you straight into the UI with no context. A 2-3 screen onboarding (goal selection → experience level → first workout) would dramatically improve first-time experience. The skill specifies: max 3 screens, max 3 fields, under 60 seconds to first value.

### I4. Empty state illustrations
"No steps logged yet" is just grey text. Beautiful empty states with encouraging copy + a clear CTA ("🚶 Start tracking your movement →") convert passive users into active ones. Study: Strong's empty workout history.

### I5. Haptic-like micro-interactions
Add subtle scale bounces (0.96→1.0 with spring easing) on all card taps. Currently only some elements have `:active` transforms. Making EVERY interactive element respond physically to touch creates the "native app" feeling.

---

## Priority Order for Implementation

1. **C1-C6** — all Critical items in one PR (all small effort, huge collective impact)
2. **H1** — off-white text (one variable, massive eye comfort improvement)
3. **H6** — Steps card color (one CSS rule, visual consistency)
4. **H2** — surface tier system (foundation for everything else)
5. **H5** — consistent border-radius
6. **P1, P3, P4, P5, P6** — small polish items as a batch
7. **H4** — spring easing
8. **H3** — spacing tokens (large but can be incremental)
9. **P2** — chart gradients
10. **Ideas** — as time/ambition allows
