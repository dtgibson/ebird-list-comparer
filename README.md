# eBird List Comparer

> **This project has been folded into [Snowraven](https://github.com/dtgibson/snowraven) for further development. No further updates will be made here.**

A small web tool for comparing two eBird life lists. Drop in two eBird backup CSV files to see which birds you share, which are unique to each list, and how your totals stack up.

## What it does

- Parses eBird backup CSV exports (the "Download My Data" format)
- Deduplicates and normalizes species names, mapping subspecies records to their parent species
- Excludes spuhs (e.g. "gull sp."), slash species, and hybrids
- Shows birds shared by both lists, birds unique to each list, and total species counts

## Built with

- React + TypeScript + Vite
- Tailwind CSS + shadcn/ui
- Deployed on Vercel
