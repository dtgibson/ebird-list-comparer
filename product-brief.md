# Product Brief — eBird List Comparer

## What This Is
A web app that compares two eBird backup files and produces three lists — birds seen in both, birds seen only in the first file, and birds seen only in the second — along with statistics and visualizations about the two lists.

## The Problem
Birders who track their sightings in eBird have no native way to compare life lists with another birder. Doing it manually — exporting files, opening spreadsheets, writing formulas — is tedious and not something you'd want to do repeatedly. There's no purpose-built tool for this specific, common question.

## Who It's For
A daily birder who is highly data-literate and uses eBird extensively to track their sightings. They want purpose-built tools that work directly with their eBird data — not workarounds. In this case, that's the builder themselves.

## Why It Should Exist
eBird is the dominant platform for serious birders, but it has no native list comparison feature. This tool fills that gap with a focused, frictionless interface: drop two files, get the comparison instantly. The question "what birds do we share, and what have each of us seen that the other hasn't?" is one of the most natural things birders want to know.

## What Success Looks Like
The tool is always accessible via a browser and requires no setup — two file drops and the results are ready. It surfaces the three lists clearly and adds statistics and graphs that make the data genuinely interesting to explore, not just useful.

## Founding Decisions
- Web app with drag-and-drop file upload
- Designed primarily for the builder's own use (personal utility, not a product for scale)
- Works specifically with eBird backup file format
- Core output: three lists — both, A only, B only
- Statistics and graphs are a meaningful part of the output, not an afterthought

## Out of Scope
- User accounts or saved sessions
- Direct eBird API integration (file upload only, for now)
- Mobile app
- Sharing or publishing results to others
- Support for non-eBird file formats
