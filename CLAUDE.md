# CLAUDE.md

This file is auto-loaded by Claude Code at the start of every session.
It holds pipeline conventions, tool rules, and project-specific
decisions that all builders must follow.

## Pipeline Overview

This project uses the Weft framework. Run /new-project to get started.

## Conventions

### ESLint — shadcn/ui constant exports

shadcn/ui components (e.g. `button.tsx`) export both a component and a variant constant (e.g. `buttonVariants`). The project ESLint config sets `allowConstantExport: true` on the `react-refresh/only-export-components` rule to permit this. Do not revert this — it will cause CI to fail.
