# DBBETZ.COM — Technical SEO Monitoring

**Date:** 2026-08-20 | No infrastructure monitoring/alerting platform exists on this site today (confirmed: no analytics, no uptime monitor found in any file this engagement has touched) — everything below is a manual-check cadence until/unless Ray adds real monitoring infrastructure.

## Daily — critical availability/errors

- Homepage returns 200: `curl -sI -A "Mozilla/5.0" https://dbbettz.com/`
- HTTPS redirect still works: `curl -sI -A "Mozilla/5.0" http://dbbettz.com/` (expect 301 → https)
- No unexpected 5xx on a quick spot-check of 2–3 key pages (`/betting-tax/`, `/how-to-start/`)

## Weekly — indexing/sitemap/technical

- Google Search Console → Indexing → Pages: confirm indexed-page count hasn't dropped unexpectedly (baseline: 32/38 as of Part 7)
- Sitemaps report: confirm status is still "Success," discovered-page count still 38
- Security & Manual Actions: confirm still "No issues detected" (both checked and clean as of Part 11)
- Re-check the specific 6 unindexed URLs' status (see `DBBETZ-TECHNICAL-SEO-AUDIT.md` §7) — watch for movement once deployed

## Monthly — full technical review

- Re-run the full crawl pattern from `DBBETZ-TECHNICAL-SEO-AUDIT.md` §1–3 (HTTP status, redirects, canonical spot-checks)
- Re-validate JSON-LD syntax and internal-link integrity across the repo (the same programmatic scripts used in Part 11 — cheap to re-run, catches regressions early)
- Re-pull the GSC baseline (`DBBETZ-SEO-BASELINE.md` pattern) and compare against the prior month
- Re-check Core Web Vitals field-data availability — revisit once real traffic volume plausibly crosses CrUX's reporting threshold

## After every deployment

Run the full `DBBETZ-SEO-DEPLOYMENT-CHECKLIST.md` before considering a deploy complete. Do not skip this because a deploy "feels small" — several of this engagement's real fixes (HTTPS, sitemap, indexing) turned out to depend on exactly this kind of verification catching what looked like a small change.

## Specific watch items carried from this phase's real findings

- **Deployment gap**: until `origin/master` actually matches local `HEAD`, none of Parts 2–10's fixes are live — check `git log origin/master..master --oneline` before assuming anything is deployed.
- **`/betting-tax/` and `/blog/dbbet-login-problems/` indexing status** (both languages): the real item to watch once deployed — expect these to move from "Discovered – currently not indexed" to indexed within a few weeks of a real indexing request, not instantly.
- **`www.dbbettz.com` DNS**: low priority, but if Ray ever wants it resolving (e.g., for brand consistency), that's a DNS-level decision, not a code fix.

## Alert triggers (manual judgment, not automated — no alerting platform exists)

Treat as worth investigating immediately, not a normal fluctuation:
- Indexed-page count drops by more than 2–3 pages between weekly checks
- Sitemap status changes from "Success" to any error state
- A previously-200 key page (`/`, `/betting-tax/`, `/how-to-start/`) starts returning 4xx/5xx
- A new Security Issue or Manual Action appears in GSC
- Total clicks/impressions drop sharply between periods (real judgment call given the site's already-small baseline — a single-digit change is noise, not a signal, at this traffic volume)

Do not treat normal day-to-day fluctuation in a 9-click/110-impression baseline as an emergency — this site's real scale means noise looks larger proportionally than it would on a bigger site.
