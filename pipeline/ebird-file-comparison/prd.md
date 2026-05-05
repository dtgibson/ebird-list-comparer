# PRD — eBird File Comparison
**Feature:** ebird-file-comparison
**Session:** 001
**Date:** 2026-05-04
**Stage:** 2 — The Planner
**Source:** strategic-brief.md (approved)

---

## Feature Overview
A client-side web tool that accepts two eBird backup CSV files, extracts unique bird species from each, and displays three comparison lists — birds in both files, birds only in file A, and birds only in file B — alongside a summary statistics panel.

---

## User Stories

**US-01** — As a birder, I want to drag and drop two eBird backup files onto the page, so that I can start a comparison without navigating a file browser.

**US-02** — As a birder, I want to see which birds appear in both of my files, so that I can identify species my birding partner and I have both recorded.

**US-03** — As a birder, I want to see which birds appear only in my file, so that I know what I've seen that my partner hasn't.

**US-04** — As a birder, I want to see which birds appear only in the other file, so that I know what my partner has seen that I should look for.

**US-05** — As a birder, I want to see a count for each list, so that I can quickly understand the scale of overlap at a glance.

**US-06** — As a birder, I want to receive a clear error message if I drop a file that isn't a valid eBird backup, so that I understand what went wrong and what to do next.

---

## Functional Requirements

**File Input**

**FR-01** — The app shall provide a drag-and-drop target for each of the two files. Each target is a distinct drop zone, labeled "File A" and "File B".

**FR-02** — Each drop zone shall also function as a click-to-browse file picker as a fallback. Clicking the zone opens the OS file picker filtered to `.csv` files.

**FR-03** — Each drop zone shall display the filename of the accepted file after a successful drop or selection.

**FR-04** — The app shall not begin comparison until both files have been provided.

**CSV Parsing**

**FR-05** — The app shall parse each file as a CSV and extract all unique values from the `"Common Name"` column.

**FR-06** — The app shall validate that each file contains a `"Common Name"` column header. If the column is absent, the file shall be rejected with an error (see FR-15).

**FR-07** — The app shall deduplicate common names within each file — a species observed multiple times counts once.

**FR-08** — Parsing shall be case-insensitive for the column header match (`"common name"`, `"Common Name"`, and `"COMMON NAME"` are all valid).

**Comparison**

**FR-09** — The app shall compute three sets from the two species lists:
  - **Both:** species present in File A AND File B (intersection)
  - **A only:** species present in File A but not File B
  - **B only:** species present in File B but not File A

**Results Display**

**FR-10** — The app shall display the three lists simultaneously on screen, each in a labeled, scrollable panel with the headings "In Both", "File A Only", and "File B Only".

**FR-11** — Each list shall be sorted alphabetically by common name.

**FR-12** — Each list panel shall display the count of species in that list.

**FR-13** — The app shall display a summary statistics bar showing:
  - Total species in File A
  - Total species in File B
  - Species in both (overlap count)
  - Species only in A
  - Species only in B

**Error Handling**

**FR-14** — If a dropped or selected file is not a `.csv`, the app shall display an inline error on that drop zone: *"Please upload a CSV file. eBird backups are downloaded as .csv."*

**FR-15** — If a CSV file does not contain a `"Common Name"` column, the app shall display an inline error: *"This doesn't look like an eBird backup. Make sure you're using the 'Download My Data' export from eBird."*

**FR-16** — If a file fails to parse for any other reason, the app shall display: *"Something went wrong reading this file. Try re-downloading it from eBird."*

**FR-17** — Errors shall be displayed inline on the relevant drop zone, not as alerts or modals.

**Reset**

**FR-18** — The app shall provide a "Compare new files" button in the results view that clears both files and returns to the upload state.

---

## Non-Functional Requirements

**NFR-01 — Performance:** The full comparison (parsing + set operations + render) shall complete in under 2 seconds for files up to 10,000 rows each.

**NFR-02 — Privacy:** No file data shall leave the browser. All parsing and comparison shall happen entirely client-side with no network requests after the initial page load.

**NFR-03 — Compatibility:** The app shall function correctly in the current stable release of Chrome, Firefox, and Safari on macOS.

**NFR-04 — Accessibility:** Drop zones shall be keyboard-accessible (focusable, activatable via Enter/Space to open file picker). List panels shall use appropriate landmark roles. Error messages shall be announced to screen readers.

---

## Out of Scope

- Charts, graphs, or data visualizations (next feature)
- Sorting options other than alphabetical
- Filtering by date, region, or taxonomy
- Exporting or saving results
- Comparing more than two files
- eBird API integration
- Mobile layout optimization
- Dark mode toggle (uses system preference via CSS)

---

## Open Questions

None — all decisions are resolved in this document.

---

## Success Metrics

| ID | What's Being Verified | Pass Condition |
|---|---|---|
| QA-01 | Drag-and-drop file acceptance | Dropping a valid eBird CSV onto a drop zone displays the filename and enables comparison |
| QA-02 | Click-to-browse fallback | Clicking a drop zone opens the OS file picker; selecting a CSV accepts the file |
| QA-03 | Comparison triggers on both files present | Results appear only after both File A and File B are loaded |
| QA-04 | Correct intersection | Birds in both lists appear in "In Both"; none are missing or duplicated |
| QA-05 | Correct A-only set | Birds only in File A appear in "File A Only"; none appear in File B's data |
| QA-06 | Correct B-only set | Birds only in File B appear in "File B Only"; none appear in File A's data |
| QA-07 | Alphabetical sort | All three lists are sorted A–Z by common name |
| QA-08 | Species counts | Counts in each panel match the actual number of items in the list |
| QA-09 | Summary statistics | Stats bar totals match the computed set sizes |
| QA-10 | Non-CSV rejection | Dropping a non-CSV file (e.g. .txt, .json) shows the inline CSV error message |
| QA-11 | Invalid eBird CSV rejection | Dropping a CSV without a "Common Name" column shows the eBird error message |
| QA-12 | Reset | Clicking "Compare new files" clears both files and returns to the upload state |
| QA-13 | Performance | Comparison with a 5,000-row file completes and renders in under 2 seconds |
| QA-14 | Privacy | Browser network tab shows no outbound requests after page load during a comparison |
