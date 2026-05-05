# Decisions

Product-level decisions with lasting implications.
Maintained by The Chronicler. Implementation details stay in the code.

---

## eBird File Comparison — 2026-05-04

**Decision:** Filter out spuh, slash, and subspecies entries from all comparisons.
**Rationale:** eBird data includes entries that are not confirmed species-level identifications: spuh entries (e.g. "gull sp."), uncertain identifications using slash notation (e.g. "Greater/Lesser Scaup"), and subspecies or forms noted in parentheses (e.g. "Yellow-rumped Warbler (Audubon's)"). Including these would inflate counts and produce misleading comparisons. Only confirmed, full-species identifications are compared.
**Implications:** The `isExcluded()` function in `src/lib/parseEbird.ts` enforces this. Any future feature that processes eBird species data should apply the same filter.

---

**Decision:** Display actual filenames throughout the UI — not generic "File A" / "File B" labels.
**Rationale:** User feedback during design review: generic labels make results harder to interpret. When comparing "dave.csv" and "alice.csv", the stat bar and panel headers should say "dave.csv only" not "File A only".
**Implications:** Stat labels and panel headings are derived from `fileA.filename` and `fileB.filename`. Any future results UI should follow this pattern.
