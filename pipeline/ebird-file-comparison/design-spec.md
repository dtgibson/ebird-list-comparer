# Design Spec — eBird File Comparison

## Visual Direction
Clean and minimal, consistent with the established brand system. Irish clover green (`#2E7D52`) as the single accent color against a white background with light grey borders. No decorative elements — the data is the focus. Geist Variable for typography throughout.

## Screens / Views

### Upload View (initial state)
Full-width layout with a centered content column (max-width 880px). Page title and subtitle above two side-by-side drop zones in a 1:1 grid.

Each drop zone:
- Dashed border when empty, solid border when a file is loaded
- Background shifts from `--muted` (grey) to `--primary-light` (light green) when loaded
- Zone label ("File A" / "File B") positioned top-left, turns green when loaded
- Upload icon, filename, and species count when loaded
- Click-to-browse and drag-and-drop both supported

"Compare Lists" button below the zones — full width, primary green. Disabled styling (40% opacity) until both files are loaded.

### Results View
Sticky header with logo and "← Compare new files" button (appears only in results view).

**Stats bar:** 5-column grid, `--muted` background, each cell showing a large numeric value and a short label. The "In both" value is rendered in primary green. Labels use the actual filename, not generic "A/B" labels:
- `[filename-a] total` / `[filename-b] total` / `In both` / `[filename-a] only` / `[filename-b] only`

**Results grid:** Three equal columns, each a bordered panel with a header and scrollable list.
- Panel header: title (filename or "In Both") + green badge with count
- Bird items: 13.5px, single border-bottom separator, hover highlight
- Lists scroll independently; max-height 400px

## Component Usage
- Drop zones: custom styled `<div>` elements (no shadcn component — bespoke interaction)
- Stats bar: CSS grid with border separators
- Result panels: bordered cards with scrollable list bodies
- Compare / Reset buttons: styled `<button>` elements matching shadcn Button aesthetics
- Logo mark: small green rounded square with phone icon

## Design Tokens Applied
- `--primary: #2E7D52` — button fill, loaded zone border/background tint, badge background, "In both" stat value, logo mark
- `--primary-light: #e8f5ee` — loaded drop zone background
- `--foreground: #0d1117` — all primary text
- `--muted-foreground: #6b7280` — subtitles, labels, zone secondary text
- `--border: #e5e7eb` — all borders and dividers
- `--muted: #f9fafb` — drop zone empty background, stats bar background, panel headers
- `--radius: 8px` — buttons, panels, stats bar

## Interaction Notes
- Drop zones: `dragover` adds green border + light green background; `drop` accepts `.csv` files only
- File loaded state: icon color changes to green, filename and species count replace instructional text
- Compare button: enabled only when both zones have a valid file; click triggers parsing and renders results view
- Results view: replaces upload view entirely (not overlaid); header reset button restores upload view and clears both files
- All list panels scroll independently

## Content Notes
- Panel and stat labels use the actual filename (e.g. "dave.csv only"), not generic "File A" / "File B"
- Instructional copy is minimal — the interface is self-explanatory for the target user
- Error messages (FR-14 through FR-17) appear inline within the drop zone, replacing the normal zone content
