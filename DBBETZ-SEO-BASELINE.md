# DBBETZ.COM — SEO Baseline

**Date pulled:** 2026-08-20 | **Source:** Google Search Console (domain property `sc-domain:dbbettz.com`), verified via Cloudflare DNS. Every value below is real, pulled live today — nothing estimated or carried forward without re-verification.

## Search Console Property

- **Property type**: Domain property (`sc-domain:dbbettz.com`) — correct choice, covers HTTP/HTTPS and any subdomain in one property, so reporting is not split across duplicates.
- **Verified domain**: dbbettz.com, verified via Cloudflare DNS.
- **Protocol / www config**: HTTPS enforced sitewide (Cloudflare zone setting, fixed in Part 2); no separate www property exists to fragment data.

## Search Performance Baseline

**7 days** (12–18 Aug 2026):
- Clicks: **3**
- Impressions: **34**
- Average CTR: **8.8%**
- Average position: **22.4**
- SOURCE: Google Search Console

**28 days / 3 months / 6 months / 12 months / 16 months** (all identical — site's real GSC history only begins 27 Jul 2026, ~24 days of data total, so every longer window returns the same numbers):
- Clicks: **9**
- Impressions: **110**
- Average CTR: **8.2%**
- Average position: **12.4**
- PERIOD: 27 Jul 2026 – 18 Aug 2026
- SOURCE: Google Search Console

There is no data before 27 Jul 2026 — confirmed by selecting "Last 16 months" and observing the totals and chart start date did not change.

## Indexing Status

- **Indexed pages: 32**
- **Not indexed pages: 11** (2 reasons)
  - **"Alternative page with proper canonical tag" — 5 pages.** Not individually enumerated this pass, but consistent with the known pattern of historical http/https URL-form duplicates being correctly canonicalized away. Read as **INTENTIONAL**.
  - **"Discovered – currently not indexed" — 6 pages, first detected 05/08/2026, "Last crawled: N/A" (never yet crawled).** Real, verified list: `/betting-tax/`, `/en/betting-tax/`, `/blog/dbbet-login-problems/`, `/en/blog/dbbet-login-problems/`, `/contact/`, `/en/contact/`. Read as **PROBLEM (monitor)** for the two betting-tax URLs and the two login-problems URLs — these are real, strategically important pages with zero organic visibility right now. `/contact/` and `/en/contact/` are low-priority utility pages; unindexed is a minor, expected gap there.
  - SOURCE: Google Search Console → Indexing → Pages, checked 2026-08-20.

## Sitemap Status

- **Sitemap**: `https://dbbettz.com/sitemap.xml`
- **Status**: Success, no errors
- **Submitted**: 28 Jul 2026
- **Last read**: 16 Aug 2026
- **Discovered pages**: 38 (matches the real site inventory: 19 unique paths × 2 languages)
- **Discovered videos**: 0
- SOURCE: Google Search Console → Sitemaps.

## Manual Actions & Security Issues

- **Manual actions**: "No issues detected." Checked live today.
- **Security issues**: "No issues detected." Checked live today.
- SOURCE: Google Search Console.

## HTTPS

- **Currently**: 0 non-HTTPS URLs, 23 HTTPS URLs, "No critical issues."
- **Historical note**: the HTTPS report's trend chart shows two small red-flagged days (around 1 Aug and 13 Aug 2026, each "1" non-HTTPS URL detected) — real, historical evidence consistent with a real GSC click that landed on `http://dbbettz.com/terms/` (see Page Performance below) and with the timing of Part 2's HTTPS-enforcement fix. Current state is clean.
- SOURCE: Google Search Console → HTTPS.

## Core Web Vitals

- **Mobile field data**: **DATA NOT AVAILABLE** — "Not enough usage data in the last 90 days for this device type."
- **Desktop field data**: **DATA NOT AVAILABLE** — same reason.
- SOURCE: Google Search Console → Core Web Vitals (Chrome UX Report), checked 2026-08-20. This is real-world field data, not a lab/PageSpeed score — none was pulled this phase, and the two must not be confused. No lab-data (PageSpeed Insights) test was run this phase; if one is needed later, it must be clearly labeled LAB DATA, separate from this field-data gap.

## Query Data (28-day window)

Top 9 queries by clicks (all queries GSC will name individually at this volume):

| Query | Clicks | Impressions | CTR | Position |
|---|---|---|---|---|
| michezo ya kubet | 0 | 10 | 0% | 62.5 |
| dbbet deposit problem | 0 | 4 | 0% | 17.3 |
| bet on nbc premier league | 0 | 3 | 0% | 4.7 |
| dp bet | 0 | 3 | 0% | 8.0 |
| dbbet withdrawal problem | 0 | 3 | 0% | 21.7 |
| bet on nbc league | 0 | 2 | 0% | 3.0 |
| dbbet withdrawal time | 0 | 2 | 0% | 15.0 |
| db bet promo code | 0 | 1 | 0% | 5.0 |
| dbbet promo code | 0 | 1 | 0% | 29.0 |

**Honest anomaly, not glossed over**: these 9 named queries sum to 0 clicks and 29 impressions, yet the period total is 9 clicks / 110 impressions. The real 9 clicks came from queries too individually rare for GSC to name at this traffic volume (privacy-threshold aggregation) — a genuine limitation of query-level data at this scale, not a data error. Do not assume the named queries explain the real clicks; they don't.

## Page Performance (28-day window, real, all 24 pages that received ≥1 impression)

**Top performers:**

| Page | Clicks | Impressions |
|---|---|---|
| /en/blog/dbbet-withdrawal-not-received/ | 3 | 28 |
| /how-to-start/ | 2 | 15 |
| /promo-code/ | 2 | 10 |
| / (home) | 1 | 9 |
| http://dbbettz.com/terms/ *(historical, pre-HTTPS-fix crawl)* | 1 | 4 |

**Growth opportunities (real impressions, zero clicks yet):**

| Page | Clicks | Impressions |
|---|---|---|
| /betting/ | 0 | 10 |
| /en/promo-code/ | 0 | 8 |
| /en/ | 0 | 8 |
| /en/betting/ | 0 | 5 |
| /blog/dbbet-withdrawal-not-received/ (sw) | 0 | 3 |

Remaining 14 of 38 real pages received 0 impressions in this 28-day window (not necessarily a problem — many are low-priority utility pages; several are the same 6 pages flagged unindexed above).

## Analytics Status

**No analytics platform is installed on dbbettz.com** — reconfirmed today via direct source inspection (`app.js` and every page's `<head>`): no GA4, no Umami, no other tag. This matches Part 1's original finding; nothing has changed. GSC remains the only real measurement source for this site.
