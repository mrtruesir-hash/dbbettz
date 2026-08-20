# DBBETZ.COM — Future SEO Instructions

**For whoever (or whatever agent) picks up SEO work on dbbettz.com after this 14-part engagement.** Read this before doing anything else on this site.

## The 14-part sequence is closed

Parts 1 through 14 are complete. **Do not start a "Part 15."** There is no numbered-phase sequence to continue. Future work is driven by real data and real events, not a calendar of planned phases — see "How to decide what to do next" below.

## Start here, every time

1. Read `DBBETZ-SEO-MASTER-DASHBOARD.md` for the current snapshot.
2. Run `git fetch origin && git log origin/master..master --oneline` yourself — do not trust the dashboard's deployment section without a fresh check, since it goes stale the moment anyone pushes.
3. Read `DBBETZ-SEO-CHANGELOG.md` for the full real change history.
4. Only then decide what, if anything, needs doing.

## Standing rules (carried from this entire engagement — do not relax these)

- **This is dbbettz.com only.** Never reuse DBBETSO (Somalia) or DBBETAFF keyword, content, competitor, or backlink data. Every DBBet property is a fully isolated site for SEO purposes — "parity" across the fleet means build-quality only, never technical or data linkage.
- **Never fabricate.** No invented statistics, volumes, rankings, authors, reviews, or facts. Mark uncertain facts REQUIRES VERIFICATION or DATA NOT AVAILABLE. This engagement caught a real wrong tax-rate citation this way (Part 5) before it shipped — the discipline is not theoretical.
- **Never push without fresh, explicit, same-turn authorization.** Commit locally; deploying is always Ray's call, made in the moment, not inferred from a prior approval.
- **Small, evidence-based batches.** Don't change a page without a stated reason. Don't touch a page again until its last change has had a real chance to be observed (minimum one real post-deploy reporting period).
- **Don't manufacture findings to satisfy a report's structure.** If there's no real content gap, no real technical issue, no real new opportunity — say so. Parts 9 and 13's honest "nothing found" verdicts were the correct output, not a failure to find something.
- **Respect the deployment gate.** Never send outreach, request indexing, or claim a fix is live without confirming the actual production state first.

## How to decide what to do next (instead of a Part 15)

Priority order, re-evaluated fresh each time:

1. **Is anything blocking basic function?** (site down, GSC shows a new manual action/security issue, a key page starts 404ing) — fix immediately, this overrides everything else.
2. **Is there unpushed, tested work sitting local?** — that's the highest-leverage thing to resolve; nothing else in this list matters until real work reaches production.
3. **Has real post-deploy data accumulated since the last review?** — if yes, run the monthly report process (`DBBETZ-MONTHLY-SEO-REPORT-TEMPLATE.md`) and let its findings drive the next action, not a preset plan.
4. **Is there a real, new external event?** (a regulatory change, a new competitor, a real ranking-affecting SERP shift) — investigate and respond to it specifically, don't force it into an existing roadmap item if it doesn't fit.
5. **If none of the above** — there is nothing that needs doing. Say so. Don't invent a project to stay busy.

## Where things live

- Current state: `DBBETZ-SEO-MASTER-DASHBOARD.md`
- Full change history: `DBBETZ-SEO-CHANGELOG.md`
- Forward plan (first 90 days post-deploy): `DBBETZ-90-DAY-SEO-ROADMAP.md`
- Content decisions and rejected candidates: `DBBETZ-CONTENT-ROADMAP.md`
- Authority/outreach status: `DBBETZ-AUTHORITY-ROADMAP.md`
- Operating checklist: `DBBETZ-MASTER-SEO-CHECKLIST.md`
- Monthly reporting: `DBBETZ-MONTHLY-SEO-REPORT-TEMPLATE.md`
- Full capstone review of Parts 1–14: `DBBETZ-PART-14-FINAL-REPORT.md`

## Known open items, not yet resolved as of Part 14

- The deployment gap itself (Ray's decision).
- `www.dbbettz.com` has no DNS record — low priority, cosmetic.
- Trailing-slash redirects are 307 not 301 — platform default, not worth a custom Worker to fix.
- The exact legal relationship between dbbettz.com and DBBet/Sport Tech N.V. beyond "tracked referral, real commission" remains REQUIRES VERIFICATION.
- The withholding tax rate on winnings (as opposed to the confirmed 5% stake excise duty) remains genuinely unconfirmed — do not resolve this by guessing; the calculator was deliberately built as a user-input estimator for this exact reason.
- No analytics platform — standing decision pending Ray's sign-off, not an oversight to silently fix.

## Simplicity is the default

Per this phase's own explicit instruction: prefer simple, stable, measurable, maintainable over complex, automated, fragile, over-engineered. This site has no build step and no analytics by design choices already made — don't introduce either without Ray's explicit request. Don't build automation, dashboards, or tooling beyond what's in this document set unless real, demonstrated need justifies it.
