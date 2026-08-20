# DBBETZ.COM — SEO Deployment Checklist

**Use this before every deploy that touches page content, templates, `styles.css`, `app.js`, `wrangler.toml`, or `sitemap.xml`.** Written for this site's real architecture: no build step, hand-authored static HTML in `public/`, deployed via Cloudflare Workers `[assets]`.

## Before pushing

- [ ] `git log origin/master..master --oneline` — confirm you know exactly what's about to go live. (This exact check would have caught the Part 11 finding that 11 commits were sitting unpushed — run it every time, not just when something feels off.)
- [ ] Run the JSON-LD validator across `public/` (catches malformed structured data before it ships) — see the script pattern in `DBBETZ-TECHNICAL-SEO-AUDIT.md` §17.
- [ ] Run the broken-internal-link + missing-canonical check across `public/` — see the script pattern in `DBBETZ-TECHNICAL-SEO-AUDIT.md` §4/§9.
- [ ] `<div>`/`<section>`/`<ul>`/`<li>` tag-balance check on every file touched (a quick Node one-liner, per the pattern used throughout this engagement — remember `<li` also matches `<link`, use `<li>` literally).
- [ ] No accidental `noindex` on a real content page (`grep -rl noindex public/` should only ever return the 404 pages).
- [ ] Every edited page still has a self-referencing canonical.
- [ ] Every edited page's title/meta/H1 still make sense together (no mismatched leftover copy from a partial edit).
- [ ] hreflang pairs still reciprocal and correct on any page touched in both languages.

## Homepage status

- [ ] `curl -sI https://dbbettz.com/` returns 200 (or, post-deploy, will once live)

## Robots & Sitemap

- [ ] `robots.txt` unchanged unless intentionally modified; still declares the sitemap
- [ ] `sitemap.xml` still contains exactly the intended canonical URLs — no 404s, no redirected URLs, no accidental additions/omissions
- [ ] Sitemap URL count matches the real page count

## Metadata

- [ ] Title, meta description, OG/Twitter tags present and accurate on every new/changed page
- [ ] No duplicate titles introduced (re-run the duplicate-title check from `DBBETZ-TECHNICAL-SEO-AUDIT.md` §9)

## Indexability

- [ ] New/changed pages are indexable (no unintended noindex, no robots block)
- [ ] New/changed pages have at least one real internal link pointing to them (no new orphans)

## Internal links

- [ ] No broken internal links introduced
- [ ] No unnecessary new redirects introduced

## Structured data

- [ ] Schema present matches real, visible page content — no fabricated FAQ/review/rating/author data

## Mobile rendering

- [ ] Spot-check the changed page(s) at a mobile viewport (live-test in a real browser where possible — this engagement has repeatedly hit a browser-automation screenshot limitation; when that happens, verify via full DOM text extraction instead of skipping the check silently)

## Analytics

- [ ] If/when an analytics platform exists on this site, confirm it still loads and fires after deploy. **Currently N/A** — dbbettz.com has no analytics installed as of this checklist's writing (see `DBBETZ-ANALYTICS-PLAN.md`).

## Important tools

- [ ] If the deploy touches `/betting-tax/`: both calculators (`#tc-stake`, `#tc-win`) load, accept input, validate correctly, and produce mathematically correct output — re-run the hand-verified test cases from Part 5 (10,000→500/9,500; 100,000@15%→15,000/85,000) before considering the deploy safe.

## Important forms

- [ ] N/A currently — `/contact/` uses `mailto:` links only, no form exists on this site (confirmed in Part 7).

## After deploy

- [ ] Re-run `curl -sI https://dbbettz.com/` and the specific page(s) changed — confirm the live site actually reflects the new content (don't assume a push succeeded; verify it).
- [ ] Check Cloudflare's deploy history/build log actually shows a successful build.
- [ ] If the deploy fixes something GSC has already flagged (e.g., the two unindexed pages), consider a selective indexing request — see `DBBETZ-TECHNICAL-SEO-MONITORING.md` for the "don't repeatedly request" rule.
- [ ] Update `DBBETZ-SEO-CHANGELOG.md` marking the relevant entries' publication status as deployed, not just committed.
