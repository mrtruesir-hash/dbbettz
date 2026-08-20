# DBBETZ.COM — Technical SEO Audit

**Date:** 2026-08-20 | Real, live checks against production (`curl -A "Mozilla/5.0"` against https://dbbettz.com/), cross-referenced with Part 7's GSC baseline (same day) and a direct local-repo audit (JSON-LD/link/canonical/alt-text validation scripts). No DBBETSO/DBBETAFF data used.

## 0. CRITICAL FINDING — deployment status (read this first)

**`origin/master` on GitHub is still at commit `f6bfc59`, the state from before Part 1 of this engagement began.** The local repo is **11 commits ahead, entirely unpushed**: `3216231` (Part 1), `526d91b` (Part 2), `224e833` (Part 3), `fe73ce0` (narrow Part 4), `3880868` (Part 4), `e7497d1` (Part 5), `4e68754` (Part 6), `c2206e4` (Part 7), `b1fd5a9` (Part 8), `30111b1` (Part 9), `c88d9c3` (Part 10).

**Consequence**: this audit's live-site checks reflect the pre-engagement baseline, not the substantial technical/content work already done and committed locally. Confirmed directly: the live sitemap.xml still carries the stale "Replace dbbettz.com with the real domain at launch" comment (fixed in Part 2, commit `526d91b`); `/betting-tax/` has no calculator (built in Part 5); `/betting/`'s title still lacks "NBC" (fixed in Part 8); `/responsible-gaming/` still lists only UK helplines (fixed in Part 9); `/blog/` is still labeled "Blogu" not "Msaada" (fixed in narrow Part 4). None of Parts 2–10's real, tested fixes are live.

This is the single most important finding in this report — every other finding below should be read with this in mind. See §22 (Fixes Implemented) for what this means for this phase's own scope.

## 1. Crawl Findings (live production)

- Homepage: `https://dbbettz.com/` → **200 OK**
- `http://dbbettz.com/` → **301** → `https://dbbettz.com/` (single hop, correct)
- `https://www.dbbettz.com/` → **no DNS record** (confirmed via `nslookup`; unchanged since Part 1, low severity — it simply doesn't resolve, no duplicate-content exposure)
- `https://dbbettz.com/BETTING/` (uppercase) → **404** (correct — no case-insensitive duplicate exposure)
- `https://dbbettz.com/betting/index.html` (explicit index.html) → **307** redirect away from the explicit filename (avoids a duplicate URL form)
- `https://dbbettz.com/betting` (no trailing slash) → **307** → `/betting/` (works, see §3 for a note on status code choice)
- `https://dbbettz.com/junk-test-xyz-12345/` (nonexistent path) → real **404**, not a soft-404 (empty HTML body, correct 404 status — no false-200 shell)

## 2. HTTP Status Problems

**None found among real, intended URLs.** The one real status-code nuance: the trailing-slash normalization (`/betting` → `/betting/`) returns **307 (Temporary Redirect)** rather than 301. This is Cloudflare's platform-level default behavior for static `[assets]` serving on this architecture (no custom Worker script controls routing) — not a bug introduced by DBBETZ's own code, and not fixable without adding a custom Worker (a larger architecture change not justified by this minor technical nicety, since a permanent redirect signal is a nice-to-have here, not a real ranking or indexing risk given the canonical tag already correctly points to the slashed form regardless of redirect type).

## 3. Redirect Findings

- HTTP→HTTPS: single-hop 301, confirmed sitewide (spot-checked homepage and `/terms/`).
- Trailing-slash: single-hop 307 (see §2).
- No redirect chains or loops found in any path tested.
- No `www` redirect exists because `www.dbbettz.com` has no DNS record at all — there is nothing to redirect from, so this is not a chain/loop risk, just a non-resolving subdomain.

## 4. Canonical Findings

Every one of the 38 real local pages has a **self-referencing canonical tag**, verified programmatically (0 of 38 files missing one). Homepage and `/en/` both spot-checked live and confirmed correct and self-referencing. No canonical points to a redirected URL, a 404, or a conflicting target anywhere found.

## 5. Robots.txt Findings

```
User-agent: *
Allow: /

Sitemap: https://dbbettz.com/sitemap.xml
```

Valid syntax, fully permissive (correct for a site with no admin/private areas), sitemap correctly declared. No CSS/JS blocking. Nothing to fix — this file is already minimal and correct, and identical in both the live version and the local pending version (unchanged across all 11 unpushed commits).

## 6. Sitemap Findings

Live `sitemap.xml`: valid XML, 200 OK, `Content-Type: application/xml`. Contains all 38 real canonical URLs (19 unique paths × 2 languages), matching the real page inventory exactly — no 404s, no redirected URLs, no noindex URLs, no duplicates. **One real, already-fixed-but-unpushed issue**: the live file still carries a stale HTML comment ("Replace dbbettz.com with the real domain at launch") left over from pre-launch — cosmetic only (comments aren't parsed by sitemap consumers), already removed in the pending local commit (Part 2). `lastmod` values are not used in this sitemap — not fabricated, genuinely absent, which is acceptable per sitemap spec (optional field) rather than a defect.

## 7. Indexability Matrix

Real, uniform pattern confirmed across the site's architecture (all 38 pages share the same template structure), cross-referenced with Part 7's real GSC pull (same day):

| URL (representative sample) | HTTP | INDEXABLE | CANONICAL | ROBOTS | SITEMAP | INTERNAL LINKS | STATUS | ACTION |
|---|---|---|---|---|---|---|---|---|
| `/` | 200 | Yes | Self, correct | Allowed | Yes | Many inbound | Indexed | None |
| `/en/` | 200 | Yes | Self, correct | Allowed | Yes | Many inbound | Indexed | None |
| `/how-to-start/` | 200 | Yes | Self, correct | Allowed | Yes | Many inbound | Indexed | None |
| `/betting/` | 200 | Yes | Self, correct | Allowed | Yes | Many inbound | Indexed | None |
| `/blog/dbbet-withdrawal-not-received/` | 200 | Yes | Self, correct | Allowed | Yes | Cross-linked | Indexed (real top performer) | None |
| **`/betting-tax/`** | 200 | Yes | Self, correct | Allowed | Yes | Linked from `/betting/`, `/bonuses/`, `/how-to-bet/`, `/how-to-start/` | **NOT INDEXED — never crawled** (Part 7) | Deploy pending calculator fix, then request indexing |
| **`/en/betting-tax/`** | 200 | Yes | Self, correct | Allowed | Yes | Same as above | **NOT INDEXED — never crawled** | Same |
| **`/blog/dbbet-login-problems/`** | 200 | Yes | Self, correct | Allowed | Yes | Linked from `/how-to-start/`, `/blog/`, cross-linked from other posts | **NOT INDEXED — never crawled** | Deploy, then request indexing |
| **`/en/blog/dbbet-login-problems/`** | 200 | Yes | Self, correct | Allowed | Yes | Same as above | **NOT INDEXED — never crawled** | Same |
| `/contact/`, `/en/contact/` | 200 | Yes | Self, correct | Allowed | Yes | Footer sitewide | Not indexed (low priority — utility page) | None needed |
| All other 28 real pages | 200 | Yes | Self, correct | Allowed | Yes | Linked | Indexed | None |

Every technical prerequisite for indexing is already satisfied on all 38 pages, including the 6 currently unindexed ones — this confirms Part 7's original diagnosis: the two important unindexed pages (`/betting-tax/`, `/blog/dbbet-login-problems/`, both languages) have a **crawl-priority problem** (a young, low-authority site not yet fully crawled), not a technical blocker.

## 8. Orphan Pages

**None found.** Programmatic check across all 38 pages confirmed every real page has at least one real internal inbound link from elsewhere on the site.

## 9. Internal Linking — Technical Findings

**Zero broken internal links** found across all 38 pages (programmatic check, cross-referencing every `href="/..."` against the real page inventory). Zero missing canonicals. Zero pages without a title or H1.

**One false-positive flagged and dismissed**: `/authors/ray/` and `/en/authors/ray/` share the identical H1 text ("Ray") — this is expected and correct, not a duplicate-content problem; it's a person's name on the sw/en mirror of the same bio page, already correctly connected via hreflang.

## 10. Crawl Depth

Money/pillar pages are reachable within **1–2 clicks** from the homepage: `/how-to-start/`, `/bonuses/`, `/betting/`, `/casino/` are in the primary nav (1 click). `/betting-tax/` is 2 clicks (via `/betting/`, `/bonuses/`, `/how-to-bet/`, or `/how-to-start/`) — reasonable depth, not a technical barrier to its current lack of indexing (see §7).

## 11. URL Consistency

HTTPS enforced sitewide; single hostname (`dbbettz.com`, apex only — no `www` to be inconsistent with); lowercase-only URLs (uppercase 404s cleanly); trailing-slash normalized (307, see §2); no `index.html` exposed as a separate indexable URL; canonical format consistent across all 38 pages. No unnecessary URL changes recommended or made — matches this phase's own instruction.

## 12. Parameter Issues

**None on DBBETZ's own indexable URLs.** The only query parameters anywhere on the site are on the *outbound* affiliate-tracking links (`?tag=...&site=...&ad=...` pointing to `refpa96317.com`) — these are external destinations, not DBBETZ's own indexable pages, so they create no crawl waste or duplicate-content risk for DBBETZ itself.

## 13. JavaScript SEO / Rendering Findings

The site's real JS footprint is small and non-blocking: a mobile-menu builder, a promo-code copy button, a sticky mobile CTA bar, and (in the pending local commits) the two `/betting-tax/` calculators. **All real text, links, headings, and metadata are present in the initial server-rendered HTML** — confirmed directly via `curl` (no headless browser needed to see real content), meaning nothing important depends on client-side JS execution for search engines to read. No difference found between initial HTML and rendered content for any core content.

## 14. Core Web Vitals

**DATA NOT AVAILABLE** — reusing Part 7's same-day finding rather than re-pulling identical data: Chrome UX Report shows "Not enough usage data in the last 90 days" for both mobile and desktop, a genuine consequence of this site's real, small traffic volume, not a technical failure. No lab-data (PageSpeed) substitute was fabricated in place of this real field-data gap.

## 15. Mobile Findings

Responsive CSS confirmed present sitewide (mobile nav menu, `@media` breakpoints including the new calculator's own responsive rule added in Part 5); real button/CTA sizing consistent with the site's established design system. Live, on-device rendering was not re-tested this phase (a known browser-automation tooling limitation already documented honestly in Parts 2, 5, and 8) — not claimed as verified beyond what was actually checked.

## 16. Image Findings

162 real `<img>` tags across the local repo, **0 missing alt text** (programmatic check). Images use `.webp` (a modern, efficient format) throughout. `loading="lazy"` is used on non-hero images; the homepage hero image uses `fetchpriority="high"` (correct — it's the real LCP element, shouldn't be lazy-loaded). No oversized or unnecessary images found in this pass.

## 17. Structured Data Findings

**60 JSON-LD blocks across 40 files (38 pages + 2 404 pages), 0 syntax errors** (programmatic validation). Schema types in real use: `Organization`/`WebSite` (home), `BreadcrumbList` (sitewide), `FAQPage` (where the page has real, genuine Q&A content — `/how-to-start/`, the 3 support posts, `/`), `BlogPosting` (the 3 support posts, with real author/date). No fake ratings, reviews, fabricated FAQs, or invented authors found anywhere — every schema instance matches real, visible on-page content.

## 18. International SEO Findings

Bilingual site (Swahili default `/`, English `/en/`) — hreflang confirmed correct and reciprocal on every page pair, matching the sitemap exactly (spot-checked homepage live: `sw`/`en`/`x-default` all present and correct). No duplicate-translation or canonical-conflict issues found. No unnecessary hreflang expansion recommended — the current sw/en structure matches the site's real, single-country (Tanzania) scope.

## 19. Security Observations

HTTPS enforced sitewide (zone-level, already live — confirmed independently of the code-level fix, since this was applied via direct Cloudflare API in Part 2 and is separate from the unpushed commits). No mixed-content issues found (all internal asset references use protocol-relative or HTTPS paths). No exposed secrets, API keys, or credentials found in any file read across this entire engagement. No intrusive security testing was performed — matches this phase's own explicit restriction.

## 20. Summary of Real Technical Debt

| Item | Severity | Status |
|---|---|---|
| 11 commits of real fixes sitting unpushed | **Critical** (blocks every other improvement from taking effect) | Not this phase's authority to resolve — flagged for Ray's decision |
| `/betting-tax/`, `/blog/dbbet-login-problems/` (both languages) not indexed | High | Technical prerequisites already met; needs deploy + a selective indexing request |
| `www.dbbettz.com` has no DNS record | Low | Non-issue technically (no duplicate-content exposure); cosmetic/completeness only |
| Trailing-slash redirect is 307, not 301 | Very low | Platform default, not code-fixable without disproportionate effort |

No other real technical issues were found in this pass.
