## Workflow Orchestration

### 1. Plan Node Default
- Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions)
- If something goes sideways, STOP and re-plan immediately - don't keep pushing
- Use plan mode for verification steps, not just building
- Write detailed specs upfront to reduce ambiguity

### 2. Subagent Strategy
- Use subagents liberally to keep main context window clean
- Offload research, exploration, and parallel analysis to subagents
- For complex problems, throw more compute at it via subagents
- One tack per subagent for focused execution

### 3. Self-Improvement Loop
- After ANY correction from the user: update `tasks/lessons.md` with the pattern
- Write rules for yourself that prevent the same mistake
- Ruthlessly iterate on these lessons until mistake rate drops
- Review lessons at session start for relevant project

### 4. Verification Before Done
- Never mark a task complete without proving it works
- Diff behavior between main and your changes when relevant
- Ask yourself: "Would a staff engineer approve this?"
- Run tests, check logs, demonstrate correctness

### 5. Demand Elegance (Balanced)
- For non-trivial changes: pause and ask "is there a more elegant way?"
- If a fix feels hacky: "Knowing everything I know now, implement the elegant solution"
- Skip this for simple, obvious fixes - don't over-engineer
- Challenge your own work before presenting it

### 6. Autonomous Bug Fixing
- When given a bug report: just fix it. Don't ask for hand-holding
- Point at logs, errors, failing tests - then resolve them
- Zero context switching required from the user
- Go fix failing CI tests without being told how

## Task Management

1. **Plan First**: Write plan to `tasks/todo.md` with checkable items
2. **Verify Plan**: Check in before starting implementation
3. **Track Progress**: Mark items complete as you go
4. **Explain Changes**: High-level summary at each step
5. **Document Results**: Add review section to `tasks/todo.md`
6. **Capture Lessons**: Update `tasks/lessons.md` after corrections

## Core Principles

- **Simplicity First**: Make every change as simple as possible. Impact minimal code.
- **No Laziness**: Find root causes. No temporary fixes. Senior developer standards.
- **Minimat Impact**: Changes should only touch what's necessary. Avoid introducing bugs.

## Git & Deployment Workflow

### Branch Strategy

```
main        ← production only. PR merges only. Never push directly.
content/*   ← copy, FAQ, case studies, image swaps
feat/*      ← new components, pages, layout changes
hotfix/*    ← urgent production fixes
```

### Rules

1. **Never push directly to `main`** — always branch + PR, even for one-liners
2. **Always verify the preview before merging** — open the branch URL in incognito
3. **No Vercel CLI deploys** — GitHub push auto-triggers preview; PR merge auto-triggers production
4. **Run `npm run build` locally before pushing** for any `feat/*` or `hotfix/*` branch

### How Deploys Work

| Action | Result |
|---|---|
| Push any non-`main` branch | Vercel auto-creates preview at `macrokineticcom-git-<branch>-benny-4363s-projects.vercel.app` |
| Merge PR into `main` | Vercel auto-promotes to production (`macrokinetic.com`) |

### Content Architecture

- All site content lives in `lib/content.ts` — edit there first
- `app/faq/page.tsx` imports `faqs` from `lib/content` (do not add inline data back)
- For a content-only change, only `lib/content.ts` should need editing

---

## Site Version Marker — Non-Negotiable Rule

Every page on macrokinetic.com displays a low-visibility site version marker in the footer baseline:

```
Site updated: YYYY-MM-DD · <7-char commit SHA>
```

### How it works (automatic — no manual maintenance)

The value is baked in at build time via two env vars defined in `next.config.js`:

| Variable | Source | Example |
|---|---|---|
| `NEXT_PUBLIC_BUILD_DATE` | `new Date()` at build time | `2026-06-17` |
| `NEXT_PUBLIC_BUILD_SHA` | `VERCEL_GIT_COMMIT_SHA` (Vercel injects this) | `cc7e4ea` |

**Every deploy automatically updates both values.** No manual step required.
Locally the SHA shows as `dev` and the date is the local build date.

### Where to look

- **Display:** `components/Footer.tsx` — footer baseline, below copyright/city row
- **Source:** `next.config.js` — the `env:` block
- **Internal FAQ metadata:** `lib/content.ts` — `faqVersion` export (internal only, not displayed)

### Rules (required, not optional)

1. **Never remove the site version marker from the footer.** It must always be present on every page.
2. **Never replace the automatic value with a hardcoded string.** The displayed value must always be derived from git/build state.
3. **Do not add a separate manual version field** for site-wide deployment tracking — the automatic marker already covers this.
4. The internal `faqVersion` in `lib/content.ts` may be used for internal FAQ content tracking but is not the visible deployment marker.