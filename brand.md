# Brand Design System — ebird-list-comparer

## Visual Identity

**Primary color:** Irish clover green — `#2E7D52` / `oklch(0.52 0.15 148)`
**Feeling:** Clean, simple, and intuitive — minimal chrome, content forward
**Typography:** Clean and modern — sans-serif, neutral, business-like
**Reference:** dtgibson.com — minimalist, understated, accessibility-focused

## Design Token Values

| Token | Value | Usage |
|---|---|---|
| --primary | oklch(0.52 0.15 148) | Buttons, links, key actions |
| --primary-foreground | oklch(0.98 0 0) | Text on primary color |
| --background | oklch(1 0 0) | Page background |
| --foreground | oklch(0.145 0 0) | Primary text |
| --muted | oklch(0.97 0 0) | Subtle backgrounds |
| --muted-foreground | oklch(0.556 0 0) | Secondary text |
| --border | oklch(0.922 0 0) | Borders and dividers |
| --destructive | oklch(0.577 0.245 27.325) | Error states |
| --radius | 0.625rem | Component border radius |

## Typography

**Font pairing:** Geist Variable (installed via shadcn Nova preset)
**Heading weight:** 500 — restrained, not heavy
**Body size:** 18px / 145% line-height

## Applied To

`src/index.css` — `--primary` and `--primary-foreground` updated to Irish clover green

## Notes

The brand is deliberately minimal. The reference site (dtgibson.com) uses an understated
aesthetic that values content and usability over decoration. Every feature built in this
project should follow the same principle — nothing unnecessary, everything purposeful.
The green signals the birding/nature domain without being loud about it.
