# DBBETZ.COM — Tools, Resources & Linkable Assets Plan

**Date:** 2026-08-20 | Built on `DBBETZ-KEYWORD-MAP.md` and `DBBETZ-CONTENT-STRATEGY.md` (Part 4), Part 3's original tool ranking. Goal is a small number of excellent assets, not a tools catalog.

## 1. Existing Tools Audit

**None found.** A direct filesystem sweep of `public/` for anything named `*tool*`, `*calc*`, `*resource*` returned zero results, confirmed against the real, complete 19-page site inventory from Parts 1–3. No calculators, interactive pages, comparison tables, or downloadable resources exist anywhere on dbbettz.com. Nothing to KEEP/IMPROVE/REBUILD/REMOVE — this is a clean-slate opportunity, not a maintenance job.

## 2. Tool Opportunity Research (up to 10, only genuinely relevant ones scored)

Building on Part 3's original 5 ideas plus Part 4's real keyword/SERP findings:

1. **Betting-tax / stake excise duty calculator** — real regulatory basis (5% excise duty, now independently re-verified this phase via a real government-budget-sourced fact, multi-source confirmed), real competitor precedent (M-Bet.co.tz built a comparable tax page).
2. **Winnings withholding-tax estimator** — same page, but the underlying rate is genuinely unconfirmed (re-verified this phase — an AI-search summary briefly suggested 12%/13% via a misattributed EY citation, which did not hold up on direct inspection; real trade press only offers an unstable ~15% figure). Only buildable as a user-input estimator, not a fixed-rate tool.
3. **Mobile-money deposit/withdrawal time & fee reference** (by provider) — blocked, per Part 3, on real data DBBETZ doesn't have (exact per-provider timings/fees would need to come from Ray or DBBet directly).
4. **Odds/accumulator ("mkeka") explainer tool** — Part 4 found Parimatch already owns this topic with 4+ ranking posts; a real content moat, low realistic upside.
5. **Promo-code validity checker** — would mostly duplicate the existing `/promo-code/` page; no real independent value identified.
6. **Registration-step interactive walkthrough** — the existing `/how-to-start/` static guide already serves this function; an interactive version adds complexity without a clear user-value gain.
7. **Odds-format converter** (decimal/fractional/American) — DBBet's own on-site copy never references fractional or American odds formats, only implicit decimal; no evidenced real need.
8. **Responsible-gambling self-check/quiz** — potentially valuable but not evidenced by any real keyword/SERP research this engagement has done; would need its own dedicated research pass, not assumed here.
9. **Bonus-value comparison table** (DBBETZ's real terms vs. the clone-swarm's inconsistent figures) — real differentiation angle identified in Part 4, but this is a content/trust asset, not an interactive tool.
10. **Downloadable payment-method reference sheet** — no real, non-duplicative content to put in it beyond what `/how-to-start/` already covers.

## 3–4. Scoring & Prioritization

| # | Asset | User Value | Search Potential | Linkability | Uniqueness | Business Relevance | Implementation Difficulty | Priority |
|---|---|---|---|---|---|---|---|---|
| 1 | Stake excise duty calculator | 5 | 3 | 3 | 5 | 4 | 1 (easy) | **P1 — build first** |
| 2 | Winnings-tax estimator (user-input rate) | 4 | 2 | 2 | 4 | 3 | 1 (easy) | **P1 — bundled with #1** |
| 3 | Mobile-money time/fee reference | 3 | 2 | 2 | 3 | 2 | 3 (needs real data first) | P2 — blocked on facts |
| 4 | Mkeka/accumulator explainer | 2 | 2 | 1 | 1 | 2 | 2 | P3 — low priority |
| 6 | Interactive registration walkthrough | 2 | 1 | 1 | 1 | 2 | 3 | REJECT |
| 5 | Promo-code checker | 1 | 1 | 1 | 1 | 2 | 2 | REJECT |
| 7 | Odds-format converter | 2 | 1 | 1 | 2 | 1 | 2 | REJECT |
| 9 | Bonus comparison table | 3 | 2 | 2 | 3 | 3 | 1 | P3 — content asset, revisit in a content (not tools) phase |
| 8 | Responsible-gambling self-check | — | — | — | — | — | — | REJECT this phase — not evidenced, needs its own research |
| 10 | Downloadable reference sheet | 1 | 1 | 1 | 1 | 1 | 2 | REJECT |

Only #1/#2 (bundled into one page: two calculators on `/betting-tax/`) scored high enough on Value × Uniqueness × Business Relevance, at low implementation cost, to justify building this phase — consistent with the "small number of excellent assets" mandate.

## 5–7. Tool Requirements & Mathematical Methodology

**Stake excise duty calculator**: `duty = stake × 0.05`; `net_staked = stake − duty`. Rate is VERIFIED: Tanzania's 2026/27 government budget introduced a 5% excise duty on the value of every bet, effective 1 July 2026, confirmed consistently across Tanzania's own Daily News plus multiple independent igaming trade-press sources with zero contradiction found.

**Winnings-tax estimator**: `tax = winnings × (userRate / 100)`; `net = winnings − tax`. The rate is a **user-supplied input, not a hardcoded assumption** — deliberately, because the real rate is not reliably confirmed (see §6 Fact Verification below). Both formulas are basic percentage arithmetic — hand-verified against manually computed examples (see §17 Testing).

Responsible-gambling framing: both tools are explicitly scoped as tax-transparency calculators, not staking/profit tools — they do not recommend stake sizes, do not project winnings probability, and carry no "guaranteed" or "risk-free" language.

## 8–9. Tool SEO Page & Search Intent

Both calculators live embedded within the existing `/betting-tax/` page (not new URLs) — the page already has full explanatory prose (methodology, examples, sources, limitations, responsible-gambling cross-link) satisfying the "don't publish a bare calculator" requirement. Primary intent: informational/calculation ("how much tax do I actually pay"). No separate tool page was created — avoids creating near-duplicate pages for what is fundamentally the same search intent as the existing page.

## 10. Internal Linking (implemented)

- **Incoming**: `/how-to-start/` (payments section, both languages) → `#tc-stake`; `/bonuses/` (both languages) → `#tc-win`; `/betting/` and `/how-to-bet/` already linked to `/betting-tax/` generally (confirmed in Part 4).
- **Outgoing**: the calculators link to nothing further by design (self-contained); the page around them already links to `/how-to-bet/` and `/responsible-gaming/`.

## 11. Linkable Assets

The stake-duty calculator is a genuine candidate: it's an original, correctly-sourced, functioning computation of a real, recent, newsworthy Tanzanian policy (the 5% excise duty) — a real reason a Tanzanian consumer-finance or gambling-news blog might reference it. The winnings-tax estimator is weaker as a linkable asset since it doesn't assert a rate (by design, for honesty) — it's useful to a visitor but not citable as a source of a specific number.

## 12–13. Original Data / Research Assets

Not pursued this phase. No original dataset was identified as both feasible and non-duplicative of existing public data (the tax rates are sourced from government/news, not DBBETZ-original research).

## 14. Embeddable Assets

Not pursued. Given dbbettz.com's real DR-0/no-backlink starting position, third-party embedding is not a realistic near-term scenario, and building embed infrastructure now would be speculative effort against no evidenced demand.

## 15–19. UX, Accessibility, Performance, Security, Trust

- **UX**: vanilla JS, no dependencies, live-updates on input (no submit button/page reload), clear TZS-formatted output, inline validation messages, works without registration or any account.
- **Accessibility**: every input has a real, associated `<label for>`; native `<input type="number">` controls (screen-reader and keyboard compatible by default); visible `:focus-visible` outline in the new CSS; no color-only signaling (errors are also text, not just red color).
- **Performance**: ~90 lines of vanilla JS added to the existing shared `app.js` (no new file, no new HTTP request, no framework, no build step) — consistent with the site's zero-dependency architecture.
- **Security**: 100% client-side arithmetic; no data is collected, stored, or transmitted anywhere; no API calls; no credentials of any kind involved.
- **Trust**: the page states the exact rate, its source (Daily News + government budget), and its effective date for the verified calculator; the estimator explicitly and prominently states its rate is user-supplied and not independently confirmed by DBBETZ.

## 20. Tool Content Outline (implemented, both languages)

H1 (existing) → intro (existing) → disclaimer notice (existing) → §1 withholding tax explainer → **winnings-tax estimator** → §2 excise duty explainer (rate now stated as fact, cited, dated) → **stake duty calculator** → "what this means for you" bullets (updated: dropped stale "if enacted"/"proposed" hedging on the now-confirmed excise duty) → GGR context note → responsible-gambling cross-link → official-sources pointer.

## 21. Resource Hub

**Not created.** With exactly one tool, a dedicated `/tools/` or `/calculators/` hub would be an empty-category violation of this phase's own instruction ("do not create empty categories"). The calculators live on the page that already owns their topic. Revisit only if a second, unrelated tool is later justified by real evidence.

## 22–23. Downloadable Resources / Social Sharing

Not pursued — no genuine standalone value identified beyond what's already on-page (§10 of the tools-opportunity table).

## 24. Tool Analytics (defined, not wired)

Recommended event schema for whenever DBBETZ gets a real analytics platform (Part 1 confirmed **zero analytics exist on this site today** — no GA4, no Umami, nothing): `tool_view` (page load with a calculator present), `tool_start` (first input on either calculator), `tool_complete` (a valid result renders), `tool_error` (validation message shown). No `tool_share`/`resource_download` — neither feature exists. **Not wired into the shipped code** — adding speculative calls to a nonexistent analytics object would be dead code inconsistent with the rest of this specific repo (unlike some sibling DBBet properties, this site currently has zero analytics infrastructure of any kind).

## 25. Tool Success Metrics (for whenever analytics exists)

Organic landing sessions to `/betting-tax/`, calculator interaction rate (once `tool_start` is wired), any real GSC ranking movement on tax-related queries, referring domains (a proxy for whether the calculator becomes a cited asset). Not pageviews alone.

## 26–27. Build Priority & Implementation

**Implemented this phase (1 asset, both languages, well within the 1–3 cap):** the betting-tax page's two calculators — stake excise duty (verified rate) and winnings-tax estimator (user-supplied rate) — embedded in `/betting-tax/` and `/en/betting-tax/`. All other candidates are P2/P3/REJECT and were **not** built.

Dependencies: none blocking — the verified 5% rate was re-confirmed fresh this phase via live web search before being hardcoded.
