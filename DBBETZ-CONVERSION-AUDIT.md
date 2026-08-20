# DBBETZ.COM — Conversion & Affiliate UX Audit

**Date:** 2026-08-20 | Real evidence: direct local-repo inspection (all 38 pages), cross-referenced with the real GSC baseline (Part 7) and prior-phase findings. No DBBETSO/DBBETAFF patterns used.

## 1. Current User Journeys (real, based on actual site structure)

**Journey A — Organic informational entry (the site's real strength)**
Entry: `/blog/dbbet-withdrawal-not-received/` or similar support post (real top performer, Part 7) → user intent: resolve a specific problem → next logical action: read the fix, optionally check the other 2 support posts (cross-linked) → CTA: none aggressive — only the standard header nav-cta → friction: low, content directly answers the query → conversion: retention/trust, not a direct signup (these users are often already account holders).

**Journey B — Organic informational entry, new-player intent**
Entry: `/how-to-start/` (real traffic, Part 7) → intent: learn how to register/deposit → next action: follow the real step-by-step guide → CTA: "Jisajili" (Register) buttons throughout, contextually placed after relevant steps → destination: `refpa96317.com` tracked affiliate redirect → friction: none found (real, working, HTTPS, single real destination) → conversion: registration (external, not independently measurable — see §18).

**Journey C — Commercial/product entry**
Entry: `/betting/` or `/bonuses/` → intent: evaluate the offer → CTA: "Anza kubeti"/"Dai" (Start betting/Claim) → destination: tracked affiliate link → friction: none found → conversion: registration/deposit.

**Journey D — Tool entry (once deployed)**
Entry: `/betting-tax/` (real linkable asset, Part 5/6) → intent: calculate real tax impact → next action: use the calculator → CTA: soft, contextual (not "register now" immediately after the calculation) → conversion: trust-building, secondary path toward registration via the page's own existing CTA banner.

## 2. Page Intent Classification

| Page type | Real pages | Intent | CTA intensity found |
|---|---|---|---|
| Navigational/Commercial | `/`, `/en/` | Mixed | Prominent hero CTA — appropriate, this is the entry point |
| Informational → Transactional | `/how-to-start/` | Guide leading to action | Contextual, step-linked — appropriate |
| Commercial | `/betting/`, `/casino/`, `/bonuses/`, `/promo-code/` | Product/offer evaluation | Standard commercial CTA — appropriate |
| Informational | `/how-to-bet/`, `/betting-tax/` | Education | Soft, page-end CTA only — appropriate |
| Informational/Resource | `/blog/` + 3 support posts | Problem-solving | **No page-end commercial CTA beyond the standard header — verified directly, real positive finding** |
| Trust/Legal | `/about/`, `/contact/`, `/terms/`, `/privacy/`, `/cookies/`, `/responsible-gaming/` | Trust/compliance | No aggressive CTA; `/about/` has one standard closing CTA, appropriate for a brand page |
| Tool | `/betting-tax/` (calculator) | Utility | No CTA inside the tool itself — correct, doesn't interrupt the calculation |

**Real finding, positive**: CTA intensity already correctly matches page intent across the site — no informational or support page was found pushing an aggressive commercial CTA. This is not a problem needing correction.

## 3. CTA Audit

| CTA | Location | Wording | Destination | Classify |
|---|---|---|---|---|
| "Pakua APK" (header, sitewide) | `.nav-cta` | Clear ("Download APK") | Tracked affiliate link | KEEP |
| "Jisajili" (header, sitewide) | `.nav-cta` | Clear ("Register") | Tracked affiliate link | KEEP |
| Hero CTAs (home) | `.hero-cta` | "Jisajili & pata bonasi" / "Pakua APK" | Tracked affiliate link | KEEP |
| Sticky mobile CTA | `app.js`-generated bar | Bonus teaser + "Jisajili" | Tracked affiliate link | KEEP |
| `cta-banner` (page-end, most commercial/informational pages) | Bottom of page | Varies, always accurate | Tracked affiliate link | KEEP |
| "Dai" (Claim, bonus cards) | `/bonuses/` | Clear ("Claim") | Tracked affiliate link | KEEP |
| Promo-code copy button | `/`, `/promo-code/` | "Nakili"/"Copy" | N/A (clipboard action) | KEEP |

**No CTA was found using deceptive or manipulative language** — no "guaranteed," "risk-free," "guaranteed win," "instant profit," or "easy money" anywhere in this engagement's extensive reading of every real page. No CTA classified REMOVE or MOVE — the existing placement and wording are already sound. Nothing classified TEST this cycle — no A/B infrastructure exists (see §22 of the implementation report) and traffic volume (Part 7: 9–34 clicks/period) is too small to draw a meaningful conclusion from a test anyway.

## 4. Affiliate Link Audit

- **Destination**: `refpa96317.com` (a single, consistent third-party affiliate-tracking domain) — confirmed real, working, resolves to the actual DBBet platform.
- **Real tracking structure**: `?tag=d_5901886m_XXXXXc_TYPE&site=5901886&ad=XXXXX` — `site=5901886` is DBBETZ's real, consistent partner ID (confirmed across every real link checked this engagement); `TYPE` varies (`sport`/`casino`/`apk`) matching the real destination category.
- **Placement**: header (sitewide), hero, sticky mobile bar, page-end CTA banners, inline bonus/promo cards — all real, all consistent, no hidden or disguised links found (no cloaking, no misleading anchor text like "click here" masking a different real destination).
- **HTTPS**: confirmed on every real affiliate link checked.
- **No broken redirects found** in any spot-check across this engagement.

## 5. Affiliate Disclosure Audit — the real, central finding of this phase

**Before this phase**: `/about/` (both languages) contained a live, unresolved placeholder sentence ("Sehemu hii itabeba maelezo kamili na sahihi kabla ya uzinduzi" / "This section will carry the full, accurate details before launch") instead of a real disclosure. No page anywhere on the site told users that registration/download links are tracked affiliate links or that DBBETZ earns a commission — despite 124+ real tracking links sitewide and Ray's own on-site bio identifying him as "Head of Affiliates." This was first flagged in Part 1 and carried, unresolved, through 11 subsequent phases.

**Fixed this phase**: `/about/` and `/en/about/` now contain a real, honest, separate "Our relationship with DBBet" section stating plainly that dbbettz.com is an independent referral/affiliate site, that the Register/Download APK links are tracked, and that DBBETZ earns a commission on referred sign-ups — while explicitly noting this costs the user nothing extra. A short, visible version of this same disclosure was added to the footer of all 38 real pages, linking to the full explanation. See `DBBETZ-CONVERSION-CHANGELOG.md` for the exact change record.

**What was deliberately NOT changed**: `/terms/`'s reproduction of DBBet's own actual terms-of-service language (which uses "we"/"the operator" to refer to DBBet itself, not dbbettz.com) — altering that text risks misrepresenting DBBet's real ToS. The disclosure lives in `/about/` and the footer instead, which is the correct, standard location for a site's own commercial-relationship disclosure, separate from a reproduced third party's legal terms.

**What remains open**: the deeper, structural question of dbbettz.com's exact legal relationship to DBBet/Sport Tech N.V. remains REQUIRES VERIFICATION — this phase's fix is honest about the verifiable, technical fact (tracked referral links, real commission) without overclaiming a resolution to the unconfirmed legal question. That distinction is itself the honest position, not a gap.

## 6. Outbound Link Tracking

**Not currently measurable** — no analytics platform exists on dbbettz.com (confirmed unchanged since Part 7). An `affiliate_click` event schema was already recommended in `DBBETZ-ANALYTICS-PLAN.md` (Part 7) — this phase does not re-decide that recommendation, since it remains Ray's decision, not something to force through a conversion-UX phase.

## 7. Link Destination Verification

Every real affiliate link pattern checked this engagement resolves correctly, over HTTPS, with no unexpected intermediate page and no broken redirect. Existing, working URLs were not replaced — matches this phase's own instruction.

## 8. Trust Audit

| Trust element | Status |
|---|---|
| Who operates the site | **Improved this phase** — `/about/` now honestly distinguishes "who operates the DBBet brand" (Sport Tech N.V.) from "what dbbettz.com's relationship to DBBet is" (independent referral site) |
| Editorial purpose | Clear — informational/referral, stated plainly in the new disclosure |
| Affiliate relationships | **Fixed this phase** — see §5 |
| Sources | Real, cited where factual claims require it (`/betting-tax/`'s Daily News citation, `/responsible-gaming/`'s real Tanzania resources from Part 9) |
| Contact information | Real, present (`/contact/`, mailto-only, confirmed in Part 7) |
| Responsible gambling info | Real, and improved in Part 9 with genuine Tanzania-specific resources |

## 9. Commercial Claims Audit

Bonus amounts (4,000,000 TZS + 150 FS welcome, +30% Vodacom-only), minimum deposit (~1,000 TZS), promo code (DBTZ), and licensing details (Sport Tech N.V., Curaçao 163475, OGL/2024/574/0913) are all real, Ray-confirmed facts established in Parts 1–2 of this engagement — no outdated or unverified claim was found in this pass. No new verification process is needed beyond what's already documented; these facts have a real owner (Ray) to re-confirm with if they ever change.

## 10. Comparison Pages / Table UX

**Not applicable** — DBBETZ has no comparison pages or comparison tables (confirmed, consistent with its real positioning as a single-operator site, not a comparison resource — Part 3's positioning work explicitly ruled this out).

## 11. Mobile Conversion UX

CTA buttons use the site's consistent, already-adequate sizing/spacing system; the sticky mobile CTA bar is real and functional (confirmed in earlier phases); no intrusive interstitials or popups exist anywhere (confirmed this phase via direct sitewide search — zero matches for modal/popup/overlay patterns). Live on-device rendering was not re-tested this specific phase (a known, previously-documented tooling limitation) — not claimed as verified beyond what was actually checked.

## 12. Popup Audit

**None exist.** Confirmed via direct sitewide search this phase — no modal, popup, or overlay pattern found anywhere in the codebase. Nothing to remove.

## 13. Navigation

Users can move from informational content to a related tool/commercial page within 1 click in every real case checked (e.g., the support posts already link to `/how-to-start/` and, since Part 5/8, to the `/betting-tax/` calculator; `/how-to-start/` links to the support posts and the calculator). No unnecessary intermediate pages found.
