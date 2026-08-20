# DBBETZ.COM — SEO Master Dashboard

**Snapshot date: 2026-08-20.** One page, one truth. Re-pull every number below on the cadence in `DBBETZ-TECHNICAL-SEO-MONITORING.md` and `DBBETZ-MASTER-SEO-CHECKLIST.md` — do not let this page go stale and get treated as current.

## 0. THE ONE THING THAT MATTERS MOST RIGHT NOW

**`origin/master` is at `f6bfc59` — the exact state before this 14-part engagement began. Local `master` is 14 commits ahead, entirely unpushed.** Every number below except the "LIVE (production)" column reflects real, tested, committed work that has never reached the public site. This is not a finding to re-discover next month — it is the standing, single blocker on everything in this dashboard. Check it fresh, every time:

```
git fetch origin
git log origin/master..master --oneline
```

If that command returns nothing, the gap has closed — update this file's status column and proceed to the deployment checklist and indexing requests. Until then, treat every "PENDING DEPLOY" row as not yet real to a user or to Google.

## 1. Deployment Status

| | Value |
|---|---|
| `origin/master` | `f6bfc59` — "Remove live-odds remnants and run the performance pass" (pre-engagement baseline) |
| Local `master` | `8dc15cb` — Part 13 |
| Unpushed commits | 14 (Parts 1 through 13, in order — see `DBBETZ-SEO-CHANGELOG.md` for the itemized list) |
| Live on production right now | Only the pre-engagement baseline. Confirmed directly: sitemap.xml still carries the stale pre-launch comment, `/betting-tax/` has no calculator, `/betting/`'s title lacks "NBC", `/about/` still shows the old placeholder sentence. |
| Working tree | Clean — nothing uncommitted |

## 2. Organic Performance (Google Search Console, `sc-domain:dbbettz.com`)

Real history begins 27 Jul 2026 (~24 days total as of this snapshot) — every window from 28-day out to 16-month returns identical numbers because there is no earlier data.

| Metric | 7-day | 28-day (= full history) |
|---|---|---|
| Clicks | 3 | 9 |
| Impressions | 34 | 110 |
| CTR | 8.8% | 8.2% |
| Avg. position | 22.4 | 12.4 |

**Top real page**: `/en/blog/dbbet-withdrawal-not-received/` (3 clicks / 28 impressions).
**Best near-term CTR opportunity, unaddressed live**: "bet on nbc premier league" / "bet on nbc league" — positions 4.7 / 3.0, zero clicks. Fix exists (Part 8's NBC title/H1 change) but is not deployed.

## 3. Indexing Status

- **Indexed: 32 / 38.**
- **Not indexed — intentional (5):** alternate URL forms with a correct canonical tag pointing elsewhere.
- **Not indexed — real gap (6):** `/betting-tax/`, `/en/betting-tax/`, `/blog/dbbet-login-problems/`, `/en/blog/dbbet-login-problems/` (never crawled — first seen 05/08/2026), plus `/contact/`, `/en/contact/` (low priority, expected for a utility page).
- **Cause**: confirmed technical prerequisites (200 status, indexable, correct canonical, in sitemap, internally linked) are already met on all 6 — this is a crawl-priority gap on a young, low-authority site, not a technical blocker. Deploying does not instantly fix this; it removes the precondition that's currently blocking it, and then a selective indexing request should follow.
- **Manual actions / Security issues**: none, both checked clean.
- **Sitemap**: 38 URLs, status Success.
- **Core Web Vitals**: DATA NOT AVAILABLE (mobile and desktop) — insufficient CrUX traffic. Revisit once real traffic volume grows; do not substitute a lab score without labeling it as lab data.

## 4. Authority (Ahrefs, Tanzania account)

| Metric | dbbettz.com | dbbets.co.tz (clone-swarm leader) | m-bet.co.tz (realistic benchmark) |
|---|---|---|---|
| DR | 0 | 0 | 18 |
| Backlinks | 273 | 735 | ~11,000 |
| Referring domains | 221 | 100 | ~1,300 |
| % followed | 0% | — | — |
| Organic traffic | 0 (Ahrefs) | 0 | ~1,600/mo |

**Read**: DBBETZ's backlink profile is ~100% nofollow SEO-reseller spam — not disavow-worthy, not worth chasing more of. Nobody in the actual "DBBet Tanzania" clone-swarm has real authority; the realistic near-term ceiling is M-Bet's DR 18, not a global operator's DR 80+. Real, evidence-based authority plan: 5 A-tier press prospects, personalized pitches drafted, all held pending deploy — see `DBBETZ-AUTHORITY-ROADMAP.md`.

## 5. Technical Health

Clean. Zero broken internal links, zero orphan pages, zero missing canonicals, 0/38 pages missing alt text on any image, 60 valid JSON-LD blocks across 40 files with 0 syntax errors, hreflang correct and reciprocal sitewide. Remaining real technical debt: the deployment gap (§1, Critical), the 6 unindexed URLs (§3, High), `www.dbbettz.com` has no DNS record (Low, cosmetic), trailing-slash redirect is 307 not 301 (Very Low, platform default). Full detail: `DBBETZ-TECHNICAL-SEO-AUDIT.md`.

## 6. Content Status

No forced content this engagement. Standing, evidence-based strategy: sharpen existing pages (onboarding Swahili targeting, support-post depth, the betting-tax calculator) rather than create new pages on unproven demand. Part 9 researched and explicitly rejected 5 candidate new-content topics with real SERP evidence rather than manufacturing a cluster. See `DBBETZ-CONTENT-ROADMAP.md`.

## 7. Conversion & Trust

CTA system already sound — audited fully in Part 12, no deceptive language or misplaced CTA found anywhere, nothing changed structurally. The one real P0 found in this entire engagement — **zero affiliate disclosure anywhere on the site despite 124+ real tracked links** — was fixed in Part 12 (`/about/` + sitewide footer, both languages). **Committed locally, not deployed.** This is the single highest-priority item to ship once the deployment gap closes.

## 8. Analytics

**None installed.** No GA4, no Umami, no other tag — confirmed unchanged since Part 1. This is a standing decision requiring Ray's explicit sign-off, not an oversight. A recommended event schema (`affiliate_click`, tool interaction) is documented in `DBBETZ-ANALYTICS-PLAN.md`, not implemented.

## 9. What To Check And When

See `DBBETZ-MASTER-SEO-CHECKLIST.md` for the full operating cadence. In one line: **daily** = site up; **weekly** = indexing/sitemap; **monthly** = full GSC + Ahrefs re-pull, refresh this dashboard; **after every deploy** = the full `DBBETZ-SEO-DEPLOYMENT-CHECKLIST.md`.
