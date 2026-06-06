# Squad Team

> 300 Workout PWA — single-file fitness tracker

## Coordinator

| Name | Role | Notes |
|------|------|-------|
| Squad | Coordinator | Routes work, enforces handoffs and reviewer gates. |

## Members

| Name | Role | Charter | Status |
|------|------|---------|--------|
| Dallas | Lead | .squad/agents/dallas/charter.md | 🟢 Active |
| Ripley | UI Dev | .squad/agents/ripley/charter.md | 🟢 Active |
| Kane | Data Dev | .squad/agents/kane/charter.md | 🟢 Active |
| Lambert | Tester | .squad/agents/lambert/charter.md | 🟢 Active |
| Scribe | Session Logger | .squad/agents/scribe/charter.md | 🟢 Active |
| Ralph | Work Monitor | — | 🔄 Monitor |

## Project Context

- **Project:** 300 Workout PWA
- **Stack:** Single-file PWA (index.html ~2.4MB), vanilla JS, HTML/CSS, Chart.js, service worker, localStorage + GitHub Gist sync
- **User:** Adam
- **Created:** 2026-06-06
- **Universe:** Alien

## Key Files

- `index.html` — Everything: HTML, CSS, JS, inline images (~2.4MB). Use line-targeted reads.
- `foods-db.js` — Food database (single source of truth for all foods). Loaded via script tag.
- `sw.js` — Service worker (caching & offline support)
- `manifest.json` — PWA manifest

## Version Bumping

When making changes, bump version in ALL THREE places (same string):
1. `sw.js` → `CACHE_NAME = '300-YYYY.MM.DD';`
2. `index.html` → `App version: <strong>YYYY.MM.DD</strong>`
3. `index.html` → `sw.js?v=YYYY.MM.DD`
