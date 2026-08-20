# DBBETZ.COM — SEO Changelog

All changes from the first growth cycle (Part 8), 2026-08-20. Committed locally, not deployed — matches the standing rule never to deploy without explicit, same-turn authorization.

---

**DATE:** 2026-08-20
**URL:** `/betting/`
**CHANGE:** Title, meta description, OG/Twitter tags, H1, and one card added "NBC" branding to Ligi Kuu Bara ("Ligi Kuu Bara NBC")
**REASON:** Real GSC evidence (Part 7): the query "bet on nbc premier league" ranks position 4.7 and "bet on nbc league" ranks position 3.0, both with real impressions, but the page never named the league by its real sponsor (National Bank of Commerce, verified via WebSearch). Fresh-verified fact, not assumed.
**EXPECTED IMPACT:** Improved CTR on two queries already ranking near page one; no ranking-position claim made.
**TEST RESULT:** PASS — rendered correctly in browser test, no console errors, `<div>` tag balance verified programmatically (35/35).

---

**DATE:** 2026-08-20
**URL:** `/how-to-start/`
**CHANGE:** Title, meta description, OG/Twitter tags, H1, and intro paragraph updated to explicitly include "Kujisajili" (register)
**REASON:** Part 4's keyword research found "jinsi ya kujisajili dbbet tanzania" is a real, genuinely unclaimed query pattern — the single best content opportunity identified in this entire engagement — but the page's own copy never used the literal word "kujisajili," only "kuanza" (start).
**EXPECTED IMPACT:** Better search-intent match for the real, unclaimed query; existing registration content unchanged, just relabeled accurately.
**TEST RESULT:** PASS — verified via full DOM text extraction (screenshot tool hit a known transient rendering glitch, documented rather than hidden), no console errors, `<div>` balance verified (71/71).

---

**DATE:** 2026-08-20
**URL:** `/en/how-to-start/`
**CHANGE:** H1 and intro paragraph updated from "How to start" to "How to register and start"
**REASON:** Consistency with the Swahili fix; lower priority since the real unclaimed-query finding was Swahili-specific, but the English title/meta already covered "register" adequately (no title/meta change needed there).
**EXPECTED IMPACT:** Minor — parity with the Swahili page's framing.
**TEST RESULT:** PASS — `<div>` balance verified (71/71).

---

**DATE:** 2026-08-20
**URL:** `/` (home)
**CHANGE:** Added one contextual link to `/betting-tax/` ("Kodi ya kubeti Tanzania") in the existing Mobile Money section, alongside the existing deposit/withdraw guide link
**REASON:** Real internal-link audit found the homepage — DBBETZ's highest-authority internal page — linked to every major section except `/betting-tax/`, which is both the site's strongest linkable asset and one of two pages currently outside Google's index entirely.
**EXPECTED IMPACT:** Stronger internal signal toward `/betting-tax/`, helping future crawl/indexing once deployed.
**TEST RESULT:** PASS — link renders correctly, navigates to the correct URL, `<div>` balance verified (66/66), no console errors.

---

**DATE:** 2026-08-20
**URL:** `/en/` (home)
**CHANGE:** Added one contextual link to `/en/betting-tax/` ("Tanzania betting tax") in the Mobile Money section, mirroring the Swahili fix
**REASON:** Same as above, English parity.
**EXPECTED IMPACT:** Same as above.
**TEST RESULT:** PASS — `<div>` balance verified (66/66).

---

## Changes considered and explicitly NOT made this cycle

- **`/betting-tax/` + `/en/betting-tax/` content**: no change. Real problem is indexing (never crawled), not content — already strengthened substantially in Part 5. Adding more content would not address the actual cause.
- **`/blog/dbbet-withdrawal-not-received/` + `/en/`**: no change. Real evidence (best-performing page, already-strong schema/FAQ) means the honest, defensible move is to protect it, not risk it with an unforced edit.
- **`/blog/dbbet-login-problems/` + `/en/`**: no content change. Same indexing-not-content diagnosis as `/betting-tax/`.
- **`/promo-code/`, `/bonuses/`, `/how-to-bet/`, `/blog/mobile-money-deposit-not-reflecting/`**: no changes — real evidence didn't justify one this cycle (see `DBBETZ-FIRST-GROWTH-CYCLE.md` §3).
- **Homepage betting-teaser section** (the "Weka dau kwenye mpira" card, separate from `/betting/` itself): left with the existing "Ligi Kuu Bara" wording, no "NBC" added — a deliberate scope boundary to keep this a small batch rather than cascading the same edit everywhere it could theoretically apply.
- **No indexing request submitted** for `/betting-tax/` or `/blog/dbbet-login-problems/` — both require deployment first, which is outside this cycle's authority (never deploy without fresh, explicit, same-turn authorization).

---

## Part 9 — Targeted Content Expansion (2026-08-20)

**DATE:** 2026-08-20
**URL:** `/responsible-gaming/`
**PAGE TYPE:** Existing trust/informational page (unchanged URL, unchanged structure)
**PURPOSE:** Replace an incomplete "Tanzania has no dedicated national gambling helpline" framing with real, sourced Tanzania-specific resources
**KEYWORDS/TOPICS:** No keyword target — this is a factual-accuracy/trust fix, not an SEO-targeted change. No query evidence exists for this topic (see `DBBETZ-SEO-QUERY-TRACKER.md` Part 9 note).
**CHANGE:** Added two new, real, verified resources to the "Wapi kupata msaada" (Where to get help) list: 199 Afya Call Center (real national 24/7 helpline, moh.go.tz) and the Gaming Board of Tanzania's self-exclusion programme + "Makinika Kijana, Kubeti Sio Ajira" campaign (gamingboard.go.tz). Existing UK resources (GamCare, BeGambleAware) kept but now correctly labeled "(Uingereza)"/"(UK)" rather than implied general-international.
**SOURCES:** moh.go.tz, gamingboard.go.tz, findahelpline.com/countries/tz/topics/gambling (verified directly), thecitizen.co.tz (real article confirming GBT intervention), focusgn.com (independent confirmation of the campaign name)
**INTERNAL LINKS:** Unchanged — page already linked from footer sitewide and from `/betting-tax/`
**PUBLICATION STATUS:** Committed locally, not deployed

**DATE:** 2026-08-20
**URL:** `/en/responsible-gaming/`
**PAGE TYPE / PURPOSE / KEYWORDS / SOURCES / INTERNAL LINKS:** Same as above, English mirror
**CHANGE:** Same real facts added in English, with UK/international labels
**PUBLICATION STATUS:** Committed locally, not deployed

---

## Part 11 — Technical SEO Monitoring & Crawl Health (2026-08-20)

**No code changes made this phase** — see `DBBETZ-PART-11-IMPLEMENTATION-REPORT.md` §22 for why: the real technical debt found in a fresh live-production crawl is already fixed in the 11 unpushed local commits below; writing new fixes for already-resolved issues would be redundant.

**CRITICAL FINDING, logged here for visibility**: `origin/master` is at `f6bfc59`, the pre-Part-1 baseline. Every entry above this line in this changelog — Parts 2 through 10 — describes a real, tested, committed change that **is not yet live**. Confirmed directly against production: live sitemap.xml still has the stale launch comment, `/betting-tax/` has no calculator, `/betting/`'s title lacks "NBC," `/responsible-gaming/` still lists only UK helplines, `/blog/` is still labeled "Blogu."

**PUBLICATION STATUS across every entry in this file**: committed locally, not deployed. This line should be updated to "deployed" per-entry once `origin/master` actually advances — do not assume a git commit equals a live change on this project.

**No new pages were created this cycle.** See `DBBETZ-CONTENT-EXPANSION-REPORT.md` for the full honest verdict on why no content cluster was selected.

---

## Part 12 — Conversion & Affiliate UX Optimization (2026-08-20)

See `DBBETZ-CONVERSION-CHANGELOG.md` for the full, dedicated change record (the affiliate-disclosure fix on `/about/`, `/en/about/`, and a sitewide footer line across all 38 pages) — that phase's spec called for its own dedicated changelog file rather than an update to this one.

---

## Part 13 — Second SEO Growth Cycle & Performance Review (2026-08-20)

**DATE:** 2026-08-20
**URL:** N/A — no code changes made this phase
**CHANGE:** None. A fresh GSC/Ahrefs/technical pull was performed and compared against the Part 7 baseline.
**REASON:** Real, honest finding: the pull is identical to Part 7's (same clicks/impressions/CTR/position, same "last update" timestamps) because zero meaningful time has elapsed and nothing from Parts 8–12 has been deployed (`git log origin/master..master` = 13 commits, still unpushed). Making further speculative page changes on top of an already-unevaluated first batch (Part 8) would violate this phase's own explicit rule against over-optimization.
**EXPECTED IMPACT:** N/A — no change made.
**RESULT:** Confirmed via fresh regression check: zero technical drift since Part 11. Ahrefs shows small, real backlink/referring-domain growth (271→273 / 220→221) attributable to the known ongoing low-quality spam pattern, not to this engagement's own (unsent) outreach.
**STATUS:** No new entries to mark as deployed — every prior entry in this file remains "committed locally, not deployed."

**Every publication-status line in this file remains accurate as of this update**: nothing described anywhere above has reached production.

---

## Part 14 — Final SEO Operating System (2026-08-20)

**No code changes this phase** — this is the capstone/documentation phase, by design. All previously read (§1) documents confirmed to exist; no `DOCUMENT NOT FOUND` case arose.

**Deliverables created**: `DBBETZ-SEO-MASTER-DASHBOARD.md`, `DBBETZ-MONTHLY-SEO-REPORT-TEMPLATE.md`, `DBBETZ-90-DAY-SEO-ROADMAP.md`, `DBBETZ-CONTENT-ROADMAP.md`, `DBBETZ-AUTHORITY-ROADMAP.md`, `DBBETZ-MASTER-SEO-CHECKLIST.md`, `DBBETZ-FUTURE-SEO-INSTRUCTIONS.md`, `DBBETZ-PART-14-FINAL-REPORT.md`.

**Re-confirmed this phase**: `origin/master` still at `f6bfc59`; local `master` now 14 commits ahead (Parts 1–13), still entirely unpushed. Every entry in this changelog remains "committed locally, not deployed" as of this update. See `DBBETZ-PART-14-FINAL-REPORT.md` §37 for the full, verified, part-by-part implementation review.

**THIS CLOSES THE 14-PART DBBETZ.COM SEO ENGAGEMENT.** Future entries in this changelog should follow the process in `DBBETZ-FUTURE-SEO-INSTRUCTIONS.md` — driven by real deployment/data events, not a numbered phase sequence. No Part 15.
