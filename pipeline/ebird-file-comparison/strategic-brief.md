# Strategic Brief — eBird File Comparison

## What We're Building
A single-page web app that accepts two eBird backup files via drag-and-drop, parses them client-side, and produces three lists — birds seen in both files, birds seen only in the first file, and birds seen only in the second — along with summary statistics about each list.

## Why Now
This is the first feature and the entire core of the product. Without it, there is no app. Everything else (future graphs, filters, sharing) builds on top of this comparison engine.

## The User Problem
A daily birder who compares life lists with other birders has no purpose-built tool for this. The current workaround — exporting eBird files, opening them in a spreadsheet, and writing VLOOKUP formulas — is tedious and not repeatable. This feature eliminates that entirely with a two-file drop and instant results.

## Success Criteria
- Drop two eBird backup files and get results in under two seconds
- Three lists are displayed clearly: both, A only, B only
- Each list shows the bird name (common name) and is sortable alphabetically
- Summary statistics shown: total species in each file, overlap count, unique-to-A count, unique-to-B count
- No login, no server, no page refresh — entirely client-side

## Scope
- Drag-and-drop file upload for two files (or click-to-browse as fallback)
- CSV parsing of eBird backup format (eBird exports as CSV)
- Set operations: intersection, A minus B, B minus A
- Results displayed as three labeled, scrollable lists
- Summary statistics panel (counts for each list)
- Error handling for invalid/non-eBird files

## Out of Scope
- Charts and graphs (next feature)
- Filtering results by date, region, or taxonomy
- Saving or exporting results
- Comparing more than two files at once
- eBird API integration

## Key Decisions
- All processing happens in the browser — no backend, no file uploads to a server
- eBird backup format is CSV; the common name field (`"Common Name"` column) is the comparison key
- The two files are treated symmetrically — "A" and "B" are just labels, not ranked
- Statistics are counts only in this version — percentages and graphs are deferred
