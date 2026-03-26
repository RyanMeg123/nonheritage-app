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

## Screen verification rules

- Before fixing any UI issue, confirm the exact screen identity first:
    - current route / entry point
    - which bottom tab or flow step opened it
    - visible page title and badge
- If two screens share similar copy, data, or hero structure, treat them as different screens until verified otherwise.
- When a shared component is involved, check every live consumer that can show the same area before claiming the issue is fixed.
- Temporary debug shortcuts are allowed, but they do not count as final verification.
- After any visual fix, restore the normal app entry and verify again through the real user path after a fresh restart.
- Do not report "fixed" if the result was only checked on a forced initial screen or a temporary debug route.
- In the final summary, explicitly state:
    - which exact screen was changed
    - which real entry path was used to verify it
    - whether the app was restarted and rechecked

## Shared component rules

- If a page uses a shared component for hero, header, or card layout, prefer fixing the consumer wiring first before adding special-case branches.
- Do not add one-off display flags unless the normal shared-component path is proven insufficient.
- If a special-case branch is introduced for debugging, remove it after verification.
- For illustration or hero problems, verify all of these explicitly:
    - correct screen consumer
    - correct asset
    - stacking order
    - clipping / overflow
    - real entry-page visibility after restart

## Output expectations

- After each round, summarize:
    - changed files
    - solved problems
    - remaining problems
    - suggestion for next round
