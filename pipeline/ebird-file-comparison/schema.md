# Schema — eBird File Comparison

## Path
Frontend Only — No data layer changes required

## Confirmation
All 18 functional requirements and 6 user stories in the PRD have been assessed. Every operation — file reading, CSV parsing, set computation, and results display — happens in browser memory within a single session. Nothing is persisted. No records are created, read from a database, updated, or deleted.

## Existing Data Used by This Feature

None. This is a brand new project with no database, no backend, and no existing schema. The feature works exclusively with data the user provides at runtime via file upload.

**Runtime data shape (in-memory only, not persisted):**

**FileData** (per uploaded file)
- `filename: string` — the original filename, displayed on the drop zone
- `species: Set<string>` — deduplicated common names extracted from the CSV

**ComparisonResult** (derived from two FileData objects)
- `both: string[]` — species in A ∩ B, sorted alphabetically
- `aOnly: string[]` — species in A − B, sorted alphabetically
- `bOnly: string[]` — species in B − A, sorted alphabetically
- `totalA: number` — total unique species in File A
- `totalB: number` — total unique species in File B

This shape is provided to orient the Engineer — it is a design suggestion, not a binding contract.

## No Data Layer Work Required
The Engineer can proceed directly to UI implementation. No migrations need to be written or run for this feature.
