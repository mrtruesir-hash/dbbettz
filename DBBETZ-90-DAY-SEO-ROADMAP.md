# DBBETZ.COM — 90-Day SEO Roadmap

**Starting point: 2026-08-20.** This roadmap is sequential and gated — most of it cannot start until step 1 happens, because 14 commits of real, tested work are sitting unpushed. It is deliberately not a calendar of new work; it is mostly "ship what's already built, then watch it, then act on real data." No new SEO phase is scheduled inside this roadmap — see `DBBETZ-FUTURE-SEO-INSTRUCTIONS.md` for why.

## Step 0 (Ray's decision, not this engagement's authority)

Deploy the 14 unpushed local commits (`git log origin/master..master --oneline` for the exact list) to `origin/master`. This requires Ray's explicit, same-turn authorization — nothing in this roadmap authorizes it in advance. Before pushing, run the full `DBBETZ-SEO-DEPLOYMENT-CHECKLIST.md`.

## Days 1–7 after deploy

1. Verify live: re-run the curl checks from `DBBETZ-TECHNICAL-SEO-AUDIT.md` §1 against production — confirm the sitemap comment is gone, `/betting-tax/` has the calculator, `/betting/` has "NBC", `/about/` has the real disclosure.
2. Request indexing (GSC → URL Inspection → Request Indexing) for the two real gap URLs, both languages: `/betting-tax/`, `/en/betting-tax/`, `/blog/dbbet-login-problems/`, `/en/blog/dbbet-login-problems/`. Do this once per URL — do not repeatedly re-request (see `DBBETZ-TECHNICAL-SEO-MONITORING.md`).
3. Update `DBBETZ-SEO-CHANGELOG.md`: mark every entry's publication status "deployed," with the real deploy date.
4. Refresh `DBBETZ-SEO-MASTER-DASHBOARD.md` §1 to reflect the closed gap.

## Days 7–14

5. Ray reviews the 5 drafted pitches in `DBBETZ-OUTREACH-READY.md`. If approved, send to the 5 A-tier prospects in `DBBETZ-OUTREACH-TRACKER.md` — only once the calculator is confirmed live (sending before this risks pitching a broken link to real media contacts).
6. Begin the follow-up schedule already defined in `DBBETZ-AUTHORITY-EXECUTION.md` §9 (5–7 day, then 7–10 day, then stop) for any prospect that doesn't respond.

## Days 14–30

7. First real GSC comparison becomes possible once ~2 weeks of post-deploy data exists. Do not force a "did it work" verdict before this — see `DBBETZ-SEO-PERFORMANCE-REVIEW.md` for what premature comparison looks like and why it was avoided every prior cycle.
8. Weekly indexing/sitemap checks per `DBBETZ-TECHNICAL-SEO-MONITORING.md`.

## Day 30

9. Run the first real `DBBETZ-MONTHLY-SEO-REPORT-TEMPLATE.md` cycle — the first one in this engagement's history that will have genuine before/after data to report.
10. Evaluate Part 8's three changes (`/betting/` NBC branding, `/how-to-start/` kujisajili targeting, homepage `/betting-tax/` link) against real post-deploy GSC data for the first time.

## Days 30–60

11. If — and only if — real data shows the "bet on nbc premier league" / "bet on nbc league" queries (currently position 3–5, zero clicks) are still not converting to clicks post-deploy, investigate further (SERP snippet, competing results) rather than assuming the title fix alone was insufficient after only 2–4 weeks.
12. If the A-tier outreach produced any placement, log it in `DBBETZ-OUTREACH-TRACKER.md` with the real, verified `rel` attribute and update the authority section of the dashboard.
13. Re-run the technical regression check (cheap, already scripted per `DBBETZ-TECHNICAL-SEO-AUDIT.md`).

## Day 60–90

14. Second monthly report cycle.
15. Only now — with two real post-deploy data points — consider whether a second growth batch of page changes is evidence-justified. Do not schedule one preemptively; the standing rule from Parts 8/13 stands: don't touch a page again until its last change has had a real chance to be observed.
16. If the A-tier campaign round is complete (responses received or the follow-up schedule exhausted), Ray can decide whether to review the 5 B-tier prospects held in `DBBETZ-OUTREACH-TRACKER.md`. This is not scheduled automatically.

## What this roadmap deliberately does NOT include

- A new content cluster — none is currently evidence-justified (see `DBBETZ-CONTENT-ROADMAP.md`).
- Mass outreach beyond the 5 already-vetted A-tier prospects.
- An analytics platform decision — that's Ray's call, not a scheduled roadmap item.
- A fixed target for backlinks, rankings, or traffic — this roadmap tracks real evidence, not a quota.
