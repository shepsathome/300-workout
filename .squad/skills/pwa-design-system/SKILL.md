# PWA Design System — Fitness App UI Skill

> **Confidence:** medium
> **Domain:** UI/UX design, PWA, mobile-first, dark mode
> **Agent:** Ripley (UI Dev)
> **Sources:** web.dev, Apple HIG, Material Design 3, WCAG 2.1, Smashing Magazine, NN Group, Chart.js docs, CSS-Tricks, WebKit Blog

## Core Philosophy

**Stranger Test:** If someone picks up a phone with your app and launches it, they should not be able to tell it isn't native within 3 seconds. Eliminate every browser signal — no address bar, no selection handles on buttons, no pull-to-refresh bounce.

**Four pillars:** Instant (<100ms shell, <1s content) · Reliable (works offline, no browser errors) · Capable (device APIs) · Native-feeling (gestures, status bar, safe areas)

---

## Dark Surface System (6-Tier)

```css
:root {
  --surface-0: #000000;   /* Viewport bg, AMOLED efficiency */
  --surface-1: #0f0f0f;   /* Page bg, app shell */
  --surface-2: #1a1a1a;   /* Cards, bottom sheets */
  --surface-3: #242424;   /* Raised cards, inputs */
  --surface-4: #2e2e2e;   /* Active/hover states */
  --surface-5: #383838;   /* Tooltips, overlays */

  --text-primary: rgba(255,255,255,0.92);   /* NOT pure white — reduces halation */
  --text-secondary: rgba(255,255,255,0.60);
  --text-tertiary: rgba(255,255,255,0.38);

  --border-subtle: rgba(255,255,255,0.06);
  --border-medium: rgba(255,255,255,0.12);
}
```

**Why not `#ffffff`?** Pure white on pure black = 21:1 contrast — technically perfect but visually harsh. 0.92 opacity reduces the glow effect (halation) on OLED screens.

## Color Palette — Fitness Semantics

```css
:root {
  --accent-primary: #22d46e;     /* Health, growth, go — main actions */
  --accent-primary-muted: rgba(34,212,110,0.15);
  --accent-secondary: #0a84ff;   /* iOS system blue — trust */
  --accent-streak: #ff6b35;      /* Fire orange — motivation, urgency */
  --accent-gold: #ffd700;        /* Milestones, PRs */

  --success: #30d158;   --warning: #ff9f0a;   --error: #ff453a;   --info: #64d2ff;

  --chart-1: #22d46e;   --chart-2: #0a84ff;   --chart-3: #ff6b35;
  --chart-4: #bf5af2;   --chart-5: rgba(255,255,255,0.3);
}
```

**Rules:** Green for success/actions (Strava, Strong, Apple Fitness+ all converge). Never red for primary actions. Orange for streaks/urgency. One accent per screen. Color + icon + label — never color alone (8% of men are colorblind).

## Contrast Quick Reference (on #0f0f0f)

| Color | Ratio | WCAG | Use |
|-------|-------|------|-----|
| `rgba(255,255,255,0.92)` | ~14.5:1 | AAA | Primary text |
| `rgba(255,255,255,0.60)` | ~7.5:1 | AAA | Labels, metadata |
| `rgba(255,255,255,0.38)` | ~4.2:1 | AA | Placeholders |
| `#22d46e` green | ~9.8:1 | AAA | Accent actions |
| `#0a84ff` blue | ~4.8:1 | AA | Secondary accent |
| `#ff9f0a` orange | ~6.2:1 | AAA | Warnings, streaks |

## Typography

System fonts for zero load time and native feel:
```css
--font-body: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, Roboto, sans-serif;
```

**Type scale (8pt grid):** 10px (micro) · 12px (caption) · 14px (body-sm) · 16px (body) · 18px (title-sm) · 20px (title) · 24px (display-sm) · 32px (display) · 48px (hero)

**Dark mode trap:** Weight 300-400 at small sizes looks thin/washed. Use 400+ for anything below 14px.

**Data displays:** Use `font-variant-numeric: tabular-nums` for live-updating stats.

## Spacing (8px Grid)

```css
--space-1: 4px;  --space-2: 8px;  --space-3: 12px;  --space-4: 16px;
--space-5: 20px; --space-6: 24px; --space-8: 32px;  --space-10: 40px;
--page-margin: 16px;
--card-radius: 20px;  --card-radius-sm: 12px;  --radius-pill: 100px;
```

Max content width: 440px (fitness apps should feel phone-focused).

## Thumb Zone & Touch Targets

67% of phone use is one-handed. Bottom third = easy zone.

- **Bottom nav:** All primary actions at bottom, not top
- **Primary CTA:** Bottom-center, within 80px of nav
- **Destructive actions:** Top of screen, behind confirmation
- **Min touch targets:** 44×44px (Apple HIG) / 48×48dp (Material 3). Frequent fitness actions (rep counters): 56×56px

## iOS Safari PWA Quirks

| Quirk | Fix |
|-------|-----|
| Notch/safe areas | `viewport-fit=cover` + `env(safe-area-inset-*)` with `max()` pattern |
| No background sync | Poll on `visibilitychange` event |
| No install prompt | Custom banner with iOS detection |
| Tap highlight flicker | `* { -webkit-tap-highlight-color: transparent; }` |
| Text selection on buttons | `button, nav { user-select: none; -webkit-user-select: none; }` |
| Status bar overlap | `env(safe-area-inset-top)` on header |
| `standalone` only | Design only for standalone — fullscreen/minimal-ui not supported |

```css
/* Detect standalone mode */
@media (display-mode: standalone) { .install-cta { display: none; } }
```

## Bottom Sheet Pattern

Use for data entry (log workout, log meal, log sleep). Anatomy:
- Drag handle (40×4px pill, centered)
- Title row with close button
- Content with safe-area bottom padding
- Scrim behind (rgba(0,0,0,0.5))
- Slide-up animation: `transform: translateY(100%) → translateY(0)`

## Chart.js Dark Theme

- Tooltip: `bg #242424`, border `rgba(255,255,255,0.12)`, corner radius 10
- Grid lines: `rgba(255,255,255,0.06)` — barely visible
- Axis labels: `rgba(255,255,255,0.4)`
- Bar charts: border-radius 6-8px, max bar thickness 22-26px
- Line charts: tension 0.4 for smooth curves, gradient fill (Strava-style)
- Animation: 600-800ms `easeOutQuart` on load, `none` on rapid updates

## Glassmorphism

Use for: nav bars (with scroll), bottom sheets, tooltips, FABs
NOT for: content cards (hurts readability)

```css
.glass {
  background: rgba(15,15,15,0.75);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
}
@supports not (backdrop-filter: blur(1px)) {
  .glass { background: rgba(15,15,15,0.95); }
}
```

## Functional UX Rules

**Quick-logging:** Gold standard is 2 taps to log a set (Strong, Hevy). Pre-fill from last session. Rest timer starts automatically.

**Onboarding:** 3-screen maximum. Welcome → Quick profile (max 3 fields) → First action.

**Empty states:** Never just "No data." Show illustration + encouraging CTA + specific instruction.

**Progress visualization:** Streaks are psychologically powerful. Show progress as earned color (grey → green as you approach goals).

**Motivational design:** Celebrate milestones with animation. Use "you" language. Show personal bests, not leaderboards (unless social).

## Animation & Motion

```css
--spring: cubic-bezier(0.34, 1.56, 0.64, 1);  /* Bouncy for celebrations */
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);     /* Smooth for transitions */
```

**Rules:**
- Only animate `transform` and `opacity` (GPU-composited)
- 200-300ms for micro-interactions, 400-600ms for transitions
- Always respect `prefers-reduced-motion: reduce`
- Spring easing for "logged!" confirmations, ease-out for slides

## 25 Essential CSS Rules

```css
body { overscroll-behavior-y: contain; }          /* Disable native pull-to-refresh */
* { -webkit-tap-highlight-color: transparent; }    /* No iOS tap flicker */
nav, button { user-select: none; }                 /* No accidental text select */
.full-screen { min-height: 100dvh; }               /* Dynamic viewport (not vh) */
.stat-value { font-variant-numeric: tabular-nums; } /* Stable number widths */
:root { color-scheme: dark; }                       /* Browser UI theming */
input { -webkit-appearance: none; appearance: none; } /* iOS input reset */
:focus-visible { outline: 2px solid var(--accent-primary); outline-offset: 3px; }
```

## Apps to Study

| App | Learn From |
|-----|-----------|
| **Strong** | Quick-log UX, exercise library, rest timer, clean dark UI |
| **Hevy** | Social features, card system, volume charts |
| **Strava** | Activity feed, glassmorphism nav, performance charts |
| **Apple Fitness+** | Ring system, achievements, typography at scale |
| **Nike Training Club** | Motivational copy, workout flow, dark UI system |
| **MyFitnessPal** | Food logging UX, macro visualization |

## Key Resources

- **web.dev Learn PWA** — https://web.dev/learn/pwa/
- **Apple HIG** — https://developer.apple.com/design/human-interface-guidelines/
- **Material Design 3** — https://m3.material.io/
- **WebAIM Contrast Checker** — https://webaim.org/resources/contrastchecker/
- **Radix Colors** — https://www.radix-ui.com/colors (best dark mode color system)
- **firt.dev** — Deep iOS PWA quirks, updated yearly

## Shipping Checklist

- [ ] manifest.json complete (icons, theme_color, display: standalone)
- [ ] viewport-fit=cover + all safe-area insets applied
- [ ] All text ≥4.5:1 contrast, UI components ≥3:1
- [ ] Touch targets ≥44×44px
- [ ] prefers-reduced-motion respected
- [ ] Tested iOS Safari standalone + Android Chrome
- [ ] Custom offline page (never browser default)
- [ ] overscroll-behavior-y: contain on body
