# DBBETZ.COM — Analytics Plan

**Date:** 2026-08-20 | This is a plan, not a data report — dbbettz.com has zero analytics installed (reconfirmed today), so most of this document defines what *should* be measured, not what currently is. Nothing here is implemented this phase — see `DBBETZ-PART-7-IMPLEMENTATION-REPORT.md` §20 for what's held back and why.

## 1. Analytics Platform Status

**No analytics platform is installed.** No GA4, no Umami, no other tag anywhere in the codebase — verified today by direct source inspection, not assumed. This is unchanged since Part 1. Google Search Console remains the only real measurement source. **This phase does not recommend adding one automatically** — Part 2 already made a deliberate decision not to introduce a new platform without explicit sign-off, and this phase does not have standing authority to reverse that. A recommendation is documented below (§7) for Ray's decision, not executed.

## 2. Privacy Audit

Nothing to audit yet — there is no tracking script collecting anything. For the future recommendation in §7: any analytics choice must not collect personal data beyond what's operationally necessary, must not expose identifiers in URLs, and must not add unnecessary third-party scripts. A cookieless, privacy-respecting option (the same reasoning that led to choosing Umami over GA4 elsewhere in the DBBet fleet) is the natural fit here too, if and when Ray decides to add one.

## 3. Conversion Events That Actually Exist on DBBETZ

Based on the real, current site (not invented):

| Event | Real trigger | Currently trackable? |
|---|---|---|
| **Affiliate click** | Any of the 124+ real outbound links to `refpa96317.com` (registration, APK download, deposit-related CTAs) | Not currently tracked — no analytics platform to receive the event |
| **Tool interaction** | Input on either Part 5 betting-tax calculator (`/betting-tax/`) | Not currently tracked |
| **Contact** | **No real contact form exists.** `/contact/` uses `mailto:` links only (`info@...`, `security@db...`) — verified by inspecting the real page source, no `<form>` element present. | Mailto links are not natively measurable as a "submission" — at most, an outbound-click event on the mailto link itself could be tracked, which is a different, weaker signal than a form submission |
| **Newsletter signup** | Does not exist on the site | Not applicable — do not invent this as a tracked event |
| **Resource download** | Does not exist on the site | Not applicable — do not invent this as a tracked event |

Only the first two rows are real, existing conversion opportunities. The rest are documented honestly as not existing, per this phase's explicit instruction not to invent conversions.

## 4. Affiliate Click Tracking (recommendation, not implemented)

If/when analytics is added, recommended event structure:

```
affiliate_click
  destination_category: "sport" | "casino" | "apk"
  page: <path the click originated from>
  placement: "nav" | "hero" | "cta_banner" | "sticky_mobile" | "inline"
```

No personal information in any parameter. No affiliate tracking credentials (the `site=`/`tag=` values already visible in the real URLs) would be duplicated into analytics parameters beyond what's already publicly visible in the link itself.

## 5. Tool Tracking (recommendation, not implemented)

For the two Part 5 calculators specifically:

```
tool_view    — the /betting-tax/ page loads with a calculator present
tool_start   — first input event on either calculator (stake or winnings field)
tool_complete — a valid result renders (i.e. validation passed)
tool_error   — the validation message is shown
```

**Do not track the actual numeric values users enter** — stake and winnings amounts are exactly the kind of user input this phase's own instructions warn against logging (potentially sensitive financial figures), even though nothing here is identity-linked. Track only that an interaction happened, never the amount.

## 6. UTM Strategy (for future legitimate marketing campaigns)

| Parameter | Usage |
|---|---|
| `utm_source` | The actual external platform (e.g. `thechanzo`, `jamiiforums`, `igamingbusiness`) — never used for internal DBBETZ links |
| `utm_medium` | `referral`, `social`, `email`, `partner` — matched to the real channel |
| `utm_campaign` | A short, specific real campaign name (e.g. `betting-tax-calculator-launch`) — not a generic placeholder |
| `utm_content` | Distinguishes multiple links within the same campaign/source (e.g. two different articles referencing the calculator) |

**Never use UTM parameters on internal DBBETZ links** — internal navigation must stay clean; UTMs are for external, trackable campaign traffic only.

## 7. Recommendation for Ray (not executed this phase)

Consider adding a lightweight, cookieless analytics platform (e.g. Umami, self-hosted) specifically to make the affiliate-click and tool-interaction events in §4–5 measurable — right now, DBBETZ has real conversion actions happening (registrations, deposits, calculator use) that are completely invisible beyond GSC's organic-search view. This is a real, concrete gap, not a hypothetical one. Implementing it is a deliberate decision for Ray, consistent with Part 2's standing choice not to add a new platform without explicit sign-off — this phase surfaces the recommendation, it does not act on it.

## 8. Dashboard Specification

A simple, single-page SEO/measurement dashboard should track:

**Organic**: clicks, impressions, CTR, average position, organic sessions *(DATA NOT AVAILABLE until analytics exists)*, organic landing pages.

**Indexing**: indexed pages (32), excluded pages (11, split by reason), sitemap status (Success, 38 URLs).

**Content**: top pages by clicks/impressions, pages losing position, pages gaining impressions, pages gaining clicks — all sourced from the `DBBETZ-SEO-QUERY-TRACKER.md` / `DBBETZ-SEO-BASELINE.md` pattern, re-pulled monthly.

**Authority**: referring domains (220, but ~100% low-quality per Part 6 — track the *quality-filtered* count once any real link lands, not the raw number), editorial mentions (from the Part 6 outreach tracker), referral traffic *(DATA NOT AVAILABLE until analytics exists)*.

**Conversion**: affiliate clicks *(DATA NOT AVAILABLE until analytics exists)*, tool completions *(DATA NOT AVAILABLE until analytics exists)*, leads/signups *(not applicable — no such mechanism exists on this site)*.

Every "DATA NOT AVAILABLE" cell above stays that way until §7's recommendation is actually acted on — the dashboard must show the gap honestly, not hide it.
