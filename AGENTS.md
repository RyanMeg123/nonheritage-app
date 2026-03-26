<!-- @format -->

# AGENTS.md

## Refactor workflow

- Refactor screen-by-screen, not all at once
- Always analyze first, then implement
- Use multi-round refactoring:
    1. structure
    2. visual hierarchy
    3. completion/transition states
- Do not change business flow unless explicitly requested
- Do not change API fields unless explicitly requested
- Do not refactor navigation unless explicitly requested

## Screen intent

- Publish page = task creation flow
- Communication page = version-based discussion flow
- Mine page = project status summary flow

## UI expectations

- Prefer mobile-first layouts
- Avoid admin-dashboard style forms
- Keep strong information hierarchy
- Primary section should be visually dominant
- Secondary information should be lighter
- Bottom action area should clearly communicate current status and next step

## Output expectations

- After each round, summarize:
    - changed files
    - solved problems
    - remaining problems
    - suggestion for next round
