# DBBETZ.COM — Monthly SEO Report Template

Copy this file to `DBBETZ-MONTHLY-REPORT-YYYY-MM.md` on the 1st of each month (or the closest working day) once the deployment gap has closed and real reporting periods exist. Fill in every field from a fresh pull — never carry forward a prior month's number unchanged without re-verifying it. If a section has nothing to report, write "None this period" — do not delete the section or invent content to fill it.

---

## Month: [YYYY-MM] | Report date: [date pulled]

### 1. Deployment status
- `origin/master` vs local `HEAD`: [run `git log origin/master..master --oneline`, paste result]
- Anything deployed this month: [list, with dates]

### 2. Organic performance (GSC, `sc-domain:dbbettz.com`)
| Metric | This month | Last month | Change |
|---|---|---|---|
| Clicks | | | |
| Impressions | | | |
| CTR | | | |
| Avg. position | | | |

Classify: GROWING / STABLE / DECLINING / INSUFFICIENT DATA. Do not force a classification if fewer than 2 real comparable periods exist yet.

### 3. Indexing status
- Indexed: [x] / 38
- Newly indexed this month: [list]
- Newly dropped from index: [list — investigate any drop immediately]

### 4. Query movement
Real winners and losers only — a query must have moved by a real, non-trivial margin across two real periods to list here. Do not list every query every month.

### 5. Page movement
Same standard as above — real winners/losers only.

### 6. Authority (Ahrefs)
| Metric | This month | Last month |
|---|---|---|
| DR | | |
| Backlinks | | |
| Referring domains | | |

Note any new referring domain that isn't the known SEO-reseller-spam pattern — that's the one worth investigating.

### 7. Authority outreach
- Pitches sent this month: [list, with recipient + date]
- Responses received: [list]
- Placements confirmed live: [list, with URL + link type — verify the actual `rel` attribute, don't assume]

### 8. Content changes
- Pages changed/added this month: [list, each with the real reason and real evidence — no page changes without a stated reason]

### 9. Technical health
- Regression check result: [clean / issues found — list]
- Core Web Vitals: [still DATA NOT AVAILABLE, or first real field data — note the milestone if it's the first time real CWV data exists]

### 10. Conversion / trust
- Any change to CTAs, disclosures, or affiliate links this month: [list]
- Analytics status: [still none installed / installed — note the milestone]

### 11. Remaining problems
[Carry forward anything unresolved from last month; add anything new]

### 12. Recommended focus for next month
[One real, evidence-based priority — not a wishlist]

---

**Standing rules for filling this out**: never fabricate a number; if data isn't available, write DATA NOT AVAILABLE and say why; never manufacture a "win" or a "content gap" to make the report look more eventful than the real evidence supports. A month with "nothing changed, here's why" is a valid, honest report.
