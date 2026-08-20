# DBBETZ.COM — Master SEO Checklist

**One consolidated operating checklist.** Each section points to the detailed document it summarizes — this file is the at-a-glance index, not a replacement for those documents.

## Before any deploy

Run `DBBETZ-SEO-DEPLOYMENT-CHECKLIST.md` in full. Do not skip because a deploy "feels small" — several of this engagement's real fixes (HTTPS, sitemap, indexing) turned out to depend on exactly this kind of verification catching what looked like a small change. The single most important line in it: `git log origin/master..master --oneline` before assuming anything is about to go live.

## Daily

- [ ] Homepage returns 200: `curl -sI -A "Mozilla/5.0" https://dbbettz.com/`
- [ ] HTTPS redirect still works: `curl -sI -A "Mozilla/5.0" http://dbbettz.com/` (expect 301 → https)
- [ ] Quick spot-check of 2–3 key pages for unexpected 5xx

## Weekly

- [ ] GSC → Indexing → Pages: indexed count hasn't dropped unexpectedly (current baseline: 32/38)
- [ ] Sitemaps report still "Success," 38 discovered pages
- [ ] Manual Actions & Security Issues still "No issues detected"
- [ ] Re-check the 6 known unindexed URLs for movement (`DBBETZ-TECHNICAL-SEO-AUDIT.md` §7)

## Monthly

- [ ] Re-run the full crawl pattern (`DBBETZ-TECHNICAL-SEO-AUDIT.md` §1–3)
- [ ] Re-validate JSON-LD syntax and internal-link integrity across the repo
- [ ] Re-pull the GSC baseline and Ahrefs profile; fill out `DBBETZ-MONTHLY-SEO-REPORT-TEMPLATE.md`
- [ ] Refresh `DBBETZ-SEO-MASTER-DASHBOARD.md`
- [ ] Re-check Core Web Vitals field-data availability

## After every deploy

- [ ] Full `DBBETZ-SEO-DEPLOYMENT-CHECKLIST.md` "After deploy" section — confirm the live site actually reflects the change, don't assume a push succeeded
- [ ] Update `DBBETZ-SEO-CHANGELOG.md` marking the relevant entries "deployed"
- [ ] If the deploy fixes an indexing issue, submit a selective indexing request (once — don't repeatedly re-request)

## Content

- [ ] Before creating any new page: check `DBBETZ-CONTENT-ROADMAP.md`'s rejected-candidates list first — don't re-research ground already covered
- [ ] Any content change needs a stated, evidence-based reason — no changes "just because"
- [ ] Don't re-touch a page whose last change hasn't had a real chance to be observed yet (minimum: one real post-deploy reporting period)

## Authority

- [ ] Never send outreach referencing a tool/page that isn't confirmed live
- [ ] Verify every prospect independently before contact — no mass/generic outreach
- [ ] Log real send dates, responses, and verified `rel` attributes in `DBBETZ-OUTREACH-TRACKER.md`
- [ ] Don't expand to B-tier prospects before the current round's results are reviewed

## Conversion / Trust

- [ ] No CTA copy uses absolute/deceptive language ("guaranteed," "risk-free," "guaranteed win")
- [ ] Affiliate disclosure stays present and visible (footer, sitewide) on every page — if a new page is added, it needs the disclosure line too
- [ ] Any new commercial claim (bonus amount, deposit minimum, promo code) must be Ray-confirmed before publishing, not assumed or copied from an old source

## Data integrity (applies to every task above)

- [ ] Never fabricate a statistic, volume, ranking, or fact — mark REQUIRES VERIFICATION or DATA NOT AVAILABLE instead
- [ ] Never claim something is deployed/live without checking `origin/master` fresh
- [ ] Never claim a change "worked" or "didn't work" without a real, live, post-deploy comparison period
- [ ] Never push to `origin/master` without fresh, explicit, same-turn authorization from Ray
