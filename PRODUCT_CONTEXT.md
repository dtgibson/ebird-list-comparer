# Product Context

This file is maintained by The Chronicler.
It records what has been built and key decisions made during development.

---

## Product

**eBird List Comparer** — a client-side web tool for birders to compare two eBird backup CSV files. Produces three species lists (both, A-only, B-only) with summary statistics. No backend, no user accounts, no data leaves the browser.

**Live at:** https://ebird-list-comparer.vercel.app  
**Repo:** https://github.com/dtgibson/ebird-list-comparer

---

## Stack

| Layer | Technology |
|---|---|
| Frontend | React 19 + Vite 8 + TypeScript 6 |
| Styling | Tailwind CSS v4 + shadcn/ui (Nova preset) |
| Typography | Geist Variable |
| Testing | Vitest 3 |
| CI/CD | GitHub Actions |
| Deployment | Vercel (GitHub integration, auto-deploy on push to main) |
| Backend | None — fully client-side |

---

## Features Built

### eBird File Comparison — 2026-05-04

Drop two eBird backup CSV files to compare life lists. Displays three scrollable, alphabetically-sorted panels (In Both, File A Only, File B Only) and a five-stat summary bar. Filters out non-species entries (spuh, slash, subspecies). Uses actual filenames throughout the UI.

---

## Deferred Scope

These items were explicitly out of scope for the initial feature and may be taken up in future sessions:

- Charts and data visualizations (explicitly next feature in product brief)
- Sorting options beyond alphabetical
- Filtering by date, region, or taxonomy
- Exporting or saving results
- Comparing more than two files
- eBird API integration
- Mobile layout optimization
- Dark mode toggle (system preference via CSS already works, no manual toggle)
