# DBBETZ.COM — Part 5: Tools, Resources & Linkable Assets — Implementation Report

**Date:** 2026-08-20 | Site: https://dbbettz.com/ | Companion document: `DBBETZ-TOOLS-PLAN.md`. Built on Parts 1–4 (all read/held in context before this phase). No DBBETSO/DBBETAFF data used anywhere.

## 1. Existing Tools Audit

None found — confirmed by a direct filesystem sweep of the real repo (`find public -iname "*tool*" -o -iname "*calc*" -o -iname "*resource*"` returned zero matches). Clean slate, consistent with the site's real, complete 19-page inventory established across Parts 1–3.

## 2. Tool Opportunities

10 candidates evaluated, building on Part 3's original ranking plus Part 4's real keyword/SERP evidence. Full table in `DBBETZ-TOOLS-PLAN.md` §2–4.

## 3. Prioritization

Only the betting-tax calculator pair scored highly enough on user value, uniqueness, and business relevance at low implementation cost to justify building. Everything else is P2 (blocked on real data), P3 (low priority), or REJECT (duplicates existing content, no evidenced value, or needs its own research pass this phase didn't do).

## 4. P1 Assets (built)

**Stake excise duty calculator** and **winnings-tax estimator**, both embedded in `/betting-tax/` and `/en/betting-tax/`. See `DBBETZ-TOOLS-PLAN.md` §5–20 for full requirements, methodology, UX/accessibility/security detail.

## 5. P2 Assets (not built, real reason given)

Mobile-money deposit/withdrawal time & fee reference — genuinely useful, but blocked on real per-provider data DBBETZ doesn't have; would need Ray or DBBet directly. Not invented.

## 6. Rejected Opportunities

Mkeka/accumulator explainer (Parimatch owns this topic with a real content moat), promo-code checker (duplicates `/promo-code/`), interactive registration walkthrough (duplicates `/how-to-start/`), odds-format converter (no evidenced need — DBBet's own copy never references non-decimal formats), downloadable reference sheet (no non-duplicative content to put in it), responsible-gambling self-check (not evidenced by any research this engagement has actually done — rejecting rather than building on a guess).

## 7. Mathematical Methodology

`excise_duty = stake × 0.05`; `net_staked = stake − excise_duty`. `winnings_tax = winnings × (userRate ÷ 100)`; `net_payout = winnings − winnings_tax`. Both are basic percentage arithmetic, hand-verified against manually computed examples before shipping (see §17).

## 8. Linkable Assets

The stake-duty calculator is a genuine candidate — an original, correctly-sourced computation of a real, recent, newsworthy Tanzanian policy. The winnings-tax estimator is weaker as a linkable asset by design (it doesn't assert a specific rate, so it's not citable as a source of one).

## 9. Original Data Opportunities

None pursued this phase — no feasible, non-duplicative original dataset was identified.

## 10. Resource Strategy

No `/tools/` or `/calculators/` hub created — with exactly one tool, a dedicated hub would be an empty category. The calculators live embedded on the existing page that already owns their topic.

## 11–13. UX / Accessibility / Performance

Vanilla JS appended to the existing shared `app.js` (no new dependency, no new HTTP request, no build step). Every input has a real `<label for>` association; native `<input type="number">` controls; visible `:focus-visible` outline added to the stylesheet; validation errors are shown as text, not color alone.

## 14. Security

100% client-side arithmetic. No data collected, stored, or transmitted. No API calls, no credentials, no server component of any kind.

## 15. Analytics

Defined (see `DBBETZ-TOOLS-PLAN.md` §24) but **not wired into the shipped code** — Part 1 confirmed dbbettz.com has zero analytics infrastructure of any kind today, and adding calls to a nonexistent tracking object would be dead/speculative code inconsistent with the rest of this specific repo.

## 16. Implemented Assets

Both calculators, on both language versions of `/betting-tax/`. Additionally, as a **necessary, in-scope correction** discovered while wiring the verified calculator: the page's own prose still said it "could not confirm" the excise-duty rate or whether it was in force. A fresh web search this phase (not reused from Part 1's notes) reconfirmed the 5% rate via Tanzania's 2026/27 government budget, cross-checked against Tanzania's own Daily News plus multiple independent trade-press sources with zero contradiction — strong enough evidence to update that specific hedge, cited and dated, while leaving the withholding-tax hedge (genuinely still unconfirmed) untouched. Also swept and corrected stale "if enacted"/"proposed" language in the summary bullets and meta tags that would otherwise have contradicted the new calculator on the same page. Internal links added from `/how-to-start/` and `/bonuses/` (both languages) to the relevant calculator, per the plan.

**A real correction surfaced during this fact-check**: an initial web search summary suggested a 12%/13% withholding-tax rate attributed to an "EY Tanzanian Finance Act 2025" alert. A direct follow-up check of that same source found it actually describes a 10% withholding tax on **gaming commissions** (a different tax on operator/agent commissions), not player winnings — the 12%/13% figures did not hold up under verification. This is exactly why the winnings-tax estimator was built as a user-input tool rather than shipped with a hardcoded rate: a plausible-looking, specifically-sourced figure turned out to be wrong on direct inspection.

## 17. Testing

| Test | Method | Result |
|---|---|---|
| Calculation accuracy (stake) | Hand-computed in Node against the shipped JS logic: 10,000 → 500/9,500; 1,000 → 50/950; 1,234,567 → 61,728/1,172,839 (rounding checked) | PASS |
| Calculation accuracy (winnings) | 100,000 @ 15% → 15,000/85,000; 100,000 @ 0% → 0/100,000 | PASS |
| Invalid input: zero, negative, non-numeric, empty | Each correctly suppresses the result and/or shows the validation message | PASS |
| Invalid input: rate >100% or <0% | Blocked with validation message | PASS |
| Live browser test, desktop, Swahili page | Entered 100,000/15% → confirmed 15,000 TZS / 85,000 TZS on-screen; entered 10,000 stake → confirmed 500 TZS / 9,500 TZS on-screen | PASS |
| Live browser test, invalid rate (150%) | Validation message shown, result hidden | PASS |
| English page render | Spot-checked — labels, copy, and both calculators render correctly | PASS |
| Console errors | Checked via `read_console_messages` — zero errors from page code (only unrelated browser-extension noise: a crypto-wallet extension) | PASS |
| Accessibility | Verified via JS: all 3 inputs have real, correctly-associated `<label for>` text; native keyboard focus (`tabIndex 0`); `type="number"` | PASS |
| Mobile viewport | **Not independently verified via a live resize screenshot** — the browser automation tool's `resize_window` did not change the actual rendered viewport in this session (same tooling limitation already documented in Part 2). Verified instead by code review: the new CSS uses the identical `@media(max-width:640px)` pattern already proven live elsewhere on this site (e.g. the working mobile nav). Noted honestly rather than claiming a check that didn't happen. | PARTIAL — code-reviewed, not live-screenshotted |
| HTML tag balance | `<div>`/`<section>` open/close counts checked programmatically on every edited file | PASS |
| Browser compatibility | Vanilla ES5-style JS (`var`, function expressions, no arrow functions/const-in-loops issues), no APIs beyond `addEventListener`/`parseFloat` — matches the existing site's own baseline (targets entry-level Android browsers per Part 1's positioning) | PASS by code review |

## 18. Remaining Work

- Mobile-money time/fee reference tool remains blocked on real data from Ray.
- Live mobile-viewport screenshot verification remains a known tooling gap (documented, not silently skipped).
- The withholding-tax rate remains genuinely unconfirmed — the estimator is deliberately designed around that fact, not blocked by it.
- Everything implemented this phase is **committed locally only, not deployed** — matches the standing rule never to deploy without fresh, explicit, same-turn authorization.

## 19. Recommended Part 6

A **content/trust phase**, not another tools phase: (a) resolve the standing P0 affiliate-disclosure question (carried since Part 1, still open, squarely Ray's decision), (b) build the bonus-value comparison table identified in this phase's opportunity list (§2, item 9) as a trust/content asset — real differentiation vs. the clone swarm's inconsistent figures — scoped as content work, not a tool. Do not open a new tools phase until a second, independently-evidenced tool opportunity exists; nothing in this phase's real research justifies one yet.

---

**STOP per Part 5's instructions. Only 1 asset built (within the 1–3 cap). No backlinks built. No outreach started. No mass content published. No Part 6 started, pending approval. Nothing deployed to production.**
