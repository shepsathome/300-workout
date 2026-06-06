# 300 Workout PWA — Copilot Instructions

## Architecture: Single-File PWA

This is a **single-file PWA**. Almost everything lives in `index.html`:
- HTML structure, CSS, and all JavaScript (including embedded data)
- Inline base64-encoded images
- The file is ~2.4 MB — use line-targeted reads, not full-file loads

Supporting files:
- `sw.js` — Service worker (caching & offline support)
- `foods-db.js` — Food database (single source of truth for all foods)
- `manifest.json` — PWA manifest
- `icons/` — App icons

## Food Database

**`foods-db.js` is the single source of truth for all foods.** It defines
a global `var FOODS = [...]` array and is loaded via a `<script>` tag
before the main application script in `index.html`.

**When adding, editing, or removing foods, edit `foods-db.js` only.**
There is no embedded copy in `index.html` — do not create one.

## Version Bumping Checklist

When making any change that users need to pick up, bump the version in
**all three places** — they can drift apart silently:

1. `sw.js` → `CACHE_NAME = '300-YYYY.MM.DD';`
2. `index.html` → search for `App version: <strong>YYYY.MM.DD</strong>`
3. `index.html` → search for `sw.js?v=YYYY.MM.DD` (SW registration cache-buster)

All three must use the **same version string**.

**Format:** Date-based `YYYY.MM.DD` using the current date. If multiple
releases happen on the same day, append a suffix: `YYYY.MM.DD.2`, `.3`, etc.

## Service Worker Behaviour

- **Network-first** for `.html` and `.js` files (picks up updates when online)
- **Cache-first** for static assets (icons, images)
- `self.skipWaiting()` in install handler forces immediate activation
- On mobile (especially iOS Safari), users may need to tap **🔥 Force Refresh**
  in Settings to pick up changes — passive SW update checks can be very slow

## Data Storage

User data (workouts, nutrition, settings) is stored in `localStorage` and
optionally synced to a GitHub Gist. Code changes never affect saved user data.
