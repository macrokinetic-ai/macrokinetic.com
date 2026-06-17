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

## FAQ Versioning — Non-Negotiable Rule

The `/faq` page displays a low-visibility update marker near the bottom:

```
FAQ updated: YYYY-MM-DD · vYYYY.MM.DD-N
```

### Source of truth

`lib/content.ts` — the `faqVersion` export (immediately above the `faqs` array):

```typescript
export const faqVersion = {
  date: "YYYY-MM-DD",
  id: "vYYYY.MM.DD-N",
};
```

Increment `-N` if multiple FAQ edits happen on the same day.

### What triggers a version bump

A version bump is required whenever any of the following change:
- FAQ questions or answers (`faqs` array in `lib/content.ts`)
- FAQ section headings (`heading` field in `lib/content.ts`)
- Any structural or visual change to `app/faq/page.tsx` (e.g. HTML element changes, layout changes, new sections)

A version bump is NOT required for:
- Changes to files unrelated to the FAQ page
- Changes to `app/layout.tsx`, other pages, components, or styles that don't touch `/faq`

**When in doubt, bump.** The cost of a false bump is trivial; a missed bump is a broken audit trail.

### Rules (required, not optional)

1. **Any change to `/faq` → always update `faqVersion`** in the same commit. Both `date` and `id` must reflect today's date and the next revision number.
2. **No change to `/faq` → never touch `faqVersion`**. Unrelated site edits must not alter the version stamp.
3. **Every commit or PR that touches `app/faq/page.tsx` or the `faqs`/`faqVersion` exports in `lib/content.ts` must state the old and new FAQ version** explicitly. Example: `FAQ version: v2026.06.17-1 → v2026.06.17-2`.
4. **Never remove the update marker from `/faq`**. The marker must always be present and visible.