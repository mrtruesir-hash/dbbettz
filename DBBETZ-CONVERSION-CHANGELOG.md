# DBBETZ.COM — Conversion Changelog

All changes from Part 12 (Conversion & Affiliate UX Optimization), 2026-08-20.

**DEPLOYED 2026-08-20.** Verified live: `/about/` shows "Uhusiano wetu na DBBet" (real disclosure, placeholder sentence gone); homepage footer shows `about/#uhusiano` link, confirming the sitewide disclosure line is live.

---

**DATE:** 2026-08-20
**PAGE:** `/about/`
**CHANGE:** Replaced a live, unresolved placeholder sentence ("This section will carry the full, accurate details before launch") with a real disclosure. Split the existing licensing paragraph (about the DBBet brand/Sport Tech N.V.) from a new, separate section — "Uhusiano wetu na DBBet" (Our relationship with DBBet) — stating plainly that dbbettz.com is an independent referral/affiliate site, that Register/Download APK links are tracked, and that DBBETZ earns a commission on referred sign-ups at no extra cost to the user.
**REASON:** Real, evidence-backed P0 finding carried unresolved since Part 1: 124+ real tracking links sitewide, Ray's own bio identifying him as "Head of Affiliates," and zero disclosure anywhere. This phase's own priorities (user trust #1, transparent commercial relationships #5) made this the central, correct fix.
**EXPECTED RESULT:** Improved trust signal; not expected to measurably change click volume given the site's small current traffic — this is a trust fix, not a growth lever.
**ACTUAL RESULT:** Live as of 2026-08-20 — too early to measure any trust/behavior impact; no analytics platform exists to measure it regardless.
**STATUS:** DEPLOYED 2026-08-20.

**DATE:** 2026-08-20
**PAGE:** `/en/about/`
**CHANGE:** Same real fix, English mirror.
**REASON / EXPECTED RESULT:** Same as above.
**ACTUAL RESULT:** Live as of 2026-08-20 — too early to measure any trust/behavior impact; no analytics platform exists to measure it regardless.
**STATUS:** DEPLOYED 2026-08-20.

**DATE:** 2026-08-20
**PAGE:** All 38 real pages (sitewide footer)
**CHANGE:** Added a short, visible affiliate-disclosure line to the footer of every real page (Swahili and English versions each get real, non-machine-translated text), placed directly above the terms/legal navigation — the same visual weight as the existing copyright notice — linking to the full explanation at `/about/#uhusiano` (or `/en/about/#uhusiano`).
**REASON:** A disclosure that only exists on one page (`/about/`) isn't genuinely "not hidden, easy to find" per this phase's own standard — sitewide footer visibility is standard, appropriate practice for a commercial disclosure that applies to CTAs appearing on every page.
**EXPECTED RESULT:** Sitewide trust improvement; no expected negative SEO impact (implemented via a targeted script insertion, verified against 0 tag-balance regressions across all 38 files).
**ACTUAL RESULT:** Live as of 2026-08-20 — too early to measure any trust/behavior impact; no analytics platform exists to measure it regardless.
**STATUS:** DEPLOYED 2026-08-20.

---

## Changes considered and explicitly not made this phase

- **CTA wording/placement changes**: none made — real audit found the existing CTA system already correctly matches page intent (soft on informational content, standard commercial CTA on product pages), no deceptive language found anywhere. Changing what already works without evidence of a problem would violate this phase's own "trust over conversion" and "no speculative changes" principles.
- **`/terms/`'s "we"/"operator" language**: deliberately left untouched — that text represents DBBet's own actual terms of service, not dbbettz.com's own voice; altering it risks misrepresenting a third party's real ToS. The disclosure lives in `/about/` and the footer instead.
- **Analytics/outbound-click tracking**: not implemented — remains Ray's standing decision per `DBBETZ-ANALYTICS-PLAN.md` (Part 7), not re-litigated by a conversion-UX phase.
- **A/B testing**: not run — real traffic volume (9–34 clicks/period) doesn't support a meaningful test.
