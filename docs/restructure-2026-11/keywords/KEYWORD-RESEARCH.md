# dbbettz.com: Tanzania keyword research, final tiered plan

Internal notes, not published. Built 2026-11-19 for the restructure. Companion file: `keywords-tz.csv` (same folder, 3,330 rows, one row per keyword).

## 0. Summary

- **Collected:** 3,660 rows in the five Ahrefs tables (G1-G5, Google Tanzania), which come to 3,297 unique keywords. I added 22 seeds that have no Ahrefs row and 11 brand queries that appear only in GSC or the GSC tracker, so the CSV has **3,330 rows**.
- **Kept: 837 rows, which merge into 623 main keywords.**
  - BRAND: 131 rows (62 main keywords)
  - HIGH: 44 (35)
  - MID: 158 (119)
  - LOW: 504 (407)
- **Avoided: 2,493 rows.** 1,383 of them are competitor brands.
- **Where the non-brand demand is:**
  - Aviator: summed volume ~31K. It has no page today, so it is the biggest gap.
  - Sports betting: ~25K.
  - Casino: ~15K.
  - "Betting sites / kampuni za kubeti": ~7K. It maps to Home; no list page.
- **Easiest wins (low KD and weak SERPs):**
  - sports betting tanzania (KD 0)
  - aviator game (KD 0)
  - jinsi ya kucheza aviator (KD 0)
  - kampuni za kubeti zenye cash out (KD 0)
  - kindege cha aviator (KD 35)
  - bonasi (KD 28)
  - jinsi ya kubeti (KD 35)
  - app nzuri ya kubeti (KD 23; forum SERP)
  - Brand app/APK queries, which have no page ranking for them (GSC position 25-29).
- **Proposed new pages:**
  - `/casino/aviator/` (strongly justified)
  - `/app/` (justified)
  - `/how-to-bet/bet-types/` (justified, MID priority; it could instead be a long section of `/how-to-bet/`)
- **Not justified:** a "best betting sites" list page, any tips or predictions page, and separate pages for crash games, live casino, live betting or the NBC Premier League (for now).

## 1. Sources and method

**Inputs**
- `raw/G1.md` … `raw/G5.md`: Ahrefs Keywords Explorer web app, Google Tanzania, read 2026-11-19, read-only.
- `seeds.md`.
- `C:\Users\cosev\Desktop\dbbet-compare-2026-11-18\gsc.md`, Tanzania section only. The other sites in that file were not used.
- `official-db-bet-2026-11-19.md`.

The keyword-research skill was used for methods only: High/Mid/Low tiers, the 10 evaluation dimensions, per-GEO depth and competition. No engine was run and nothing was written to the Search-Intelligence-OS repo or any World Model.

**Dedupe and normalisation**
1. I lowercased every keyword and collapsed spaces. Ahrefs' "0–10" is written as 0-10, and "N/A", "not indexed" and blanks are written as NA.
2. Exact duplicates across G1-G5 were merged. 363 rows were duplicates. No duplicate had conflicting volume or KD, because the same Ahrefs database was used throughout.
3. **Spelling variants** were merged under one main keyword using a variant key:
   - all DBbet spellings become one brand token;
   - synonym pairs are folded: m-pesa/m pesa/mpesa, freebet/free bet, kubet/kubeti, namna/jinsi, mikeka/mkeka, tz/tanzania, sports/sport, and plurals;
   - Swahili connectors (ya, wa, za, cha, kwa) and English stopwords are dropped;
   - word order is ignored.

   The main keyword is the variant with the highest volume. Each variant row in the CSV keeps its own metrics, and its `action` column says `variant of '<main>'`. The main row's `reason` lists its variants. A variant always maps to its main keyword's page.
4. In the CSV, `target_page` is the page without its language prefix. A `lang` = sw/mixed row targets the Swahili version (for example `/casino/`). A `lang` = en row targets the English version (for example `/en/casino/`).
   - Ahrefs tagged brand-only and game-name keywords "en".
   - The slugs `/payment/` and `/help/` are placeholders until the new build sets them. Today the help hub is `/blog/`.
5. Summed volumes in this file are derived: the sum of Ahrefs TZ volumes, counting 0-10 as 0. They overlap across variants, so use them only to compare page sizes, not as traffic forecasts.

## 2. Tier criteria (explicit)

Each kept keyword was judged on the 10 skill dimensions. This was done qualitatively, without invented scores:

| Dimension | What it was judged on |
|---|---|
| Demand | Ahrefs TZ volume (GSC for brand) |
| Competition | KD |
| SERP difficulty | DR/RD and features in the 17 stored SERPs |
| Search intent | Ahrefs intent badges plus a manual read |
| Commercial value | Whether it is a product or offer query |
| Conversion potential | Whether it ends in register, deposit or play on DBbet |
| GEO value | Tanzania share, Swahili vs English, non-TZ variants removed |
| Topical importance | Pillar vs spoke |
| Ranking feasibility | KD against a DR 0 site with no backlinks |
| Revenue potential | Judgment only. There is no revenue data, so it was not scored. |

**BRAND**
- Covers every DBbet spelling, on its own or with an intent word: dbbet, db bet, dbet, ddbet, dp bet, bdb bet, bdbbet, dbb bet, db-bet, dbbt bet, dbbbet, deb bet, db betting, dbbet.com, and doublebet (NEEDS VERIFICATION).
- GSC is the evidence. Brand is tiered on its own because all of today's clicks are brand.
- Each brand keyword maps by intent: home, login, app, registration, promo, payment, help or about.
- Not BRAND:
  - partner and affiliate terms (AVOID);
  - Bengali-script rows (AVOID);
  - "d bet" and "db", which are ambiguous;
  - logo and price lookups.

**HIGH.** A keyword must pass all five checks:
1. It is player intent that converts. That means commercial or transactional (Ahrefs C/T badge, or a product or sign-up query), or a how-to that ends in an action on DBbet.
2. DBbet offers the product, per the official file of 19 Nov 2026.
3. Volume is at least 150/mo in Tanzania.
4. It is feasible for a DR 0 site. One of these must hold:
   - KD is 60 or lower;
   - KD is NA and volume is at least 200 (marked "provisional");
   - it is a pillar head: at least 1,000/mo, KD 77 or lower, and its stored SERP is led by Tanzanian operator pages with DR 60 or lower. Only **aviator** and **casino bet tanzania** qualify.
5. It carries no claim or offer risk: no "best/top" superlatives, and it promises nothing beyond DBbet's actual offer.

**MID.** The keyword is relevant and safe, and one of these applies:
- commercial, at least 150/mo, KD 61-85 (long horizon);
- commercial, 50-149/mo, with KD 60 or lower, or NA;
- commercial at 150/mo with KD NA;
- informational, at least 150/mo;
- list, superlative or offer-fit queries of at least 50/mo. These are capped at MID: "best/top/new … sites", and free-bet queries where DBbet's offer is narrower than the query.

Four keywords were set by hand:
- sport betting: a SportyBet-led SERP;
- mpira wa miguu: broad informational;
- jisajili: its parent topic is SportPesa;
- online gambling: generic and global.

**LOW.** The keyword is relevant and safe, and one of these applies:
- under 50/mo, 0-10, or NA (not indexed);
- commercial, 50-149/mo, with KD above 60;
- informational, under 150/mo;
- a win-framed question ("how to win aviator", "jinsi ya kubeti na kushinda") that we answer honestly in an FAQ with no win promise.

LOW keywords are covered as sections or FAQs on the mapped page and never get their own page.

**AVOID:** any reason in section 8, whatever the volume.

**Language read**
- The Swahili HIGH terms are easier: kindege cha aviator KD 35, kindege 37, bonasi 28, jinsi ya kubeti 35, kampuni za kubeti tanzania 47, kasino 59.
- English holds the large volumes: aviator 18K at KD 77, sports betting tanzania 4.3K at KD 0, casino bet tanzania 2.1K at KD 66.
- So Swahili is the faster route to first non-brand clicks, and English is the bigger long-term prize.

## 3. Counts

| | Rows | Main keywords (variants merged) | Notes |
|---|---|---|---|
| Ahrefs rows read (G1 264, G2 862, G3 913, G4 947, G5 674) | 3,660 | | |
| Unique after cross-group dedupe | 3,297 | | |
| + seeds with no Ahrefs row (21 unindexed G4 seeds + "kubeti app") | 22 | | volume NA |
| + GSC-only brand queries | 9 | | db betting, dbbet.com, deb bet, dbbbet, ddbet login tz, bdbet login register, bd bet login, doublebet, db |
| + GSC-tracker-only brand queries (seeds.md) | 2 | | dbbet deposit problem, dbbet withdrawal time |
| **CSV total** | **3,330** | | |
| BRAND | 131 | 62 | |
| HIGH | 44 | 35 | 27 have a KD value |
| MID | 158 | 119 | 62 have a KD value |
| LOW | 504 | 407 | 53 rows have volume NA |
| **Kept** | **837** | **623** | |
| **AVOID** | **2,493** | | section 8 |

## 4. BRAND (GSC is the truth here)

GSC note: the gsc.md query table has **no country filter**. Its numbers cover all countries, and Tanzania gives 80% of 28-day clicks (366 of 456). Ahrefs volumes are Tanzania only.

| Keyword | Ahrefs TZ/mo | GSC 28d clicks/impr/pos | GSC 3m clicks/impr/pos | Target page |
|---|---|---|---|---|
| bdb bet | 10 | 300 / 590 / 1.2 | 365 / 793 / 1.7 | / |
| db bet tz (+dbbet tz 80, dbet tz 100, dbet tanzania 30, db bet tanzania 10, dbbet tanzania 0-10) | 350 | 3 / 466 / 8.2 | 123 / 5,140 / 7.4 | / |
| dbbet tz | 80 | 23 / 134 / 6.1 | 55 / 1,329 / 7.3 | / (variant of db bet tz) |
| dbbet | 3.6K (KD 0) | 18 / 424 / 13.2 | 27 / 588 / 13.0 | / (primary) |
| db bet | 600 | 5 / 127 / 12.9 | 10 / 204 / 11.7 | / |
| dbb bet | 0-10 | 8 / 64 / 4.1 | 15 / 133 / 4.6 | / |
| bdbbet | 0-10 | 10 / 92 / 5.0 | 11 / 93 / 5.0 | / |
| dbbt bet | NA | NA | 4 / 132 / 7.8 | / |
| dbbet online | 0-10 | 0 / 68 / 10.8 | 1 / 114 / 10.4 | / |
| dbet | 700 | 0 / 86 / 14.0 | NA | / (global volume mostly Vietnam/Sweden: another brand) |
| ddbet | 250 | 0 / 29 / 8.5 | NA | / (global volume 73% Brazil) |
| doublebet | NA | 0 / 27 / 10.0 | NA | / (NEEDS VERIFICATION that it means DBbet) |
| dp bet login | 10 | 1 / 54 / 7.9 | 4 / 201 / 7.4 | /blog/dbbet-login-problems/ |
| db bet tz login | 40 | NA | 6 / 194 / 7.9 | /blog/dbbet-login-problems/ |
| db bet login | 90 | 2 / 22 / 10.0 | 3 / 138 / 8.8 | /blog/dbbet-login-problems/ |
| dbbet login | 150 | NA | 1 / 120 / 8.0 | /blog/dbbet-login-problems/ (primary) |
| dbbet app | 150 | 0 / 26 / 13.5 | NA | /app/ (NEW, primary) |
| db bet app download apk | 0-10 | 0 / 29 / 25.5 | NA | /app/ |
| dbbet apk download | 60 | 1 / 12 / 29.4 | 1 / 12 / 29.4 | /app/ |
| dbbet promo code | 20 | 0 / 64 / 45.5 | NA | /promo-code/ (primary) |
| dbbet games | NA | 0 / 36 / 9.7 | NA | /casino/ |
| dbbet withdrawal problem | NA | NA | 1 / 31 / 13.4 | /blog/dbbet-withdrawal-not-received/ |

Brand SERP facts (Ahrefs snapshot of "dbbet", 16 Sep 2026):
- Position 1 is **dbbet-tz.com**, a different domain with DR 22 and 1,044 referring domains. Who runs it is NEEDS VERIFICATION.
- dbbettz.com holds positions 5, 6, 8, 9 and 10 with **five different /en/ URLs**, and no Swahili URL appears.
- Brand registration, app, promo, deposit and withdraw searches map to their own pages (section 9).
- **Avoided brand-spelling rows (21):**
  - 14 partner/affiliate searches, such as dbbet partners (150) and dbbet affiliate (100);
  - 2 Bengali-script rows;
  - 3 logo or price lookups;
  - 2 ambiguous rows: "d bet" and "db".

## 5. HIGH (44 rows): every row

| Keyword | Lang | Vol | KD | Target page | Action | Why |
|---|---|---|---|---|---|---|
| aviator | en | 18K | 77 | /casino/aviator/ NEW | primary (en) | Pillar: the SERP is led by TZ operator pages (betway DR 56/RD 123, betpawa DR 40/RD 56, betika DR 58) |
| sports betting tanzania | en | 4.3K | 0 | /betting/ | primary (en) | TP 101K; SERP of thin GSB pages, a 404 and social profiles |
| sports betting | en | 3.5K | 0 | /betting/ | variant of sport betting | KD 0, parent topic SportyBet |
| casino bet tanzania | en | 2.1K | 66 | /casino/ | primary (en) | Pillar: all-operator SERP (betpawa DR 40/RD 81, pigabet DR 18) |
| kasino | sw | 1.9K | 59 | /casino/ | primary (sw) | Swahili SERP: meridianbet /sw/ DR 36, bongobongo DR 25/RD 3, DR 0 site |
| aviator bet tanzania | en | 1.4K | 56 | /casino/aviator/ | secondary | NEEDS VERIFICATION: part may be navigational to an "Aviator bet" app |
| aviator game | en | 1.0K | 0 | /casino/aviator/ | secondary | KD 0 |
| kindege cha aviator | sw | 1.0K | 35 | /casino/aviator/ | primary (sw) | Swahili, TP 1.0K |
| chicken road | en | 800 | NA | /casino/ | secondary (crash section) | On DBbet (/slots/game/112428); provisional |
| tower rush | en | 800 | NA | /casino/ | secondary (crash section) | On DBbet "Popular" list; provisional |
| aviator bet | en | 800 | 55 | /casino/aviator/ | secondary | |
| kindege | sw | 800 | 37 | /casino/aviator/ | secondary | |
| kampuni za kubeti tanzania | sw | 500 | 47 | / | secondary | List-style; SERP not read |
| play aviator | en | 500 | NA | /casino/aviator/ | secondary | Provisional |
| avieta bet | en | 450 | 43 | /casino/aviator/ | secondary | Misspelling of "aviator bet" |
| live betting tanzania | en | 400 | NA | /betting/ | secondary (live section) | DBbet live betting 24h, 30+ markets per event |
| kubeti | sw | 350 | 46 | /betting/ | secondary | |
| bonasi | sw | 350 | 28 | /bonuses/ | primary (sw) | premierbet /bonus ranks with DR 37/RD 40 |
| makampuni ya kubeti tanzania | sw | 350 | 47 | / | variant | |
| kindege aviator | sw | 350 | NA | /casino/aviator/ | variant | |
| aviator tz | en | 300 | NA | /casino/aviator/ | secondary | |
| chicken road casino | en | 300 | NA | /casino/ | secondary | |
| live casino tanzania | en | 300 | NA | /casino/ | secondary (live section) | DBbet has 18 live providers |
| kubeti mtandaoni | sw | 250 | NA | / | primary (sw, non-brand) | |
| michezo ya kubet | sw | 250 | NA | /betting/ | primary (sw) | GSC tracker Aug: position 62.5 |
| michezo ya kubeti tanzania | sw | 250 | NA | /betting/ | secondary | |
| jinsi ya kubeti | sw | 250 | 35 | /how-to-bet/ | primary (sw) | |
| kampuni za kubet / kampuni za kubeti | sw | 200 / 200 | 22 / NA | / | secondary / variant | |
| online betting sites | en | 200 | NA | / | secondary | |
| kubet | sw | 200 | 35 | /betting/ | variant of kubeti | Global volume is another brand; TZ use is the Swahili verb |
| sports betting tz | en | 200 | NA | /betting/ | variant | |
| betting sites in tanzania with bonus | en | 200 | NA | /bonuses/ | primary (en) | No SERP stored |
| jinsi ya kucheza aviator | sw | 200 | 0 | /casino/aviator/ | secondary | |
| chicken road casino game | en | 200 | NA | /casino/ | secondary | |
| online blackjack tanzania | en | 200 | NA | /casino/ | secondary (live section) | |
| aviator tanzania | en | 150 | 52 | /casino/aviator/ | variant of aviator tz | |
| how to play aviator | en | 150 | 57 | /casino/aviator/ | secondary | |
| app za kubet tanzania | mixed | 150 | 49 | /app/ NEW | primary (sw) | |
| kampuni za kubeti zenye cash out | mixed | 150 | 0 | /betting/ | secondary (cash-out section) | DBbet "Bet slip sale" + Auto sell |
| betting sites with welcome bonus in tanzania | en | 150 | 59 | /bonuses/ | secondary | Featured snippet held by bestbetting.tz, DR 2 |
| kampuni za kubeti zenye ofa | sw | 150 | 30 | /bonuses/ | secondary | |
| betting tanzania online | en | 150 | 55 | / | variant of online betting tanzania | |
| namna ya kubeti | sw | 150 | 20 | /how-to-bet/ | variant of jinsi ya kubeti | |

## 6. MID (158 rows): top 30 (all rows are in the CSV)

| Keyword | Vol | KD | Target page | Note |
|---|---|---|---|---|
| sport betting | 6.6K | 63 | /betting/ | SERP: SportyBet DR 65 ×2, GSB, SportPesa, Betway, Wikipedia |
| mpira wa miguu | 2.4K | 0 | /betting/ | Broad "football"; Swahili section term |
| sport betting tanzania | 1.4K | 61 | /betting/ | Variant of sports betting tanzania |
| jisajili | 900 | 20 | /how-to-start/ | Parent topic SportPesa; DBbet's own Swahili menu word |
| betting sites | 600 | 73 | / | |
| kasino tanzania | 600 | 74 | /casino/ | |
| handicap in betting | 600 | 71 | /how-to-bet/bet-types/ NEW | primary (en) |
| betting sites in tanzania | 500 | 65 | / | |
| casino tz | 500 | 72 | /casino/ | + casino tanzania 300, casino in tanzania 70 |
| online gambling | 500 | NA | /casino/ | Generic global term |
| tanzania casino online | 500 | 73 | /casino/ | + online casino tanzania 200 |
| betting apps | 400 | 76 | /app/ | |
| online sports betting | 400 | 74 | /betting/ | |
| online sports betting tanzania | 400 | 65 | /betting/ | |
| aviator login | 400 | 74 | /casino/aviator/ | "Log in to play" section |
| betting tanzania | 350 | 74 | / | |
| betting companies in tanzania | 300 | 61 | / | |
| best betting sites in tanzania | 250 | 60 | / | Capped: "best" claim |
| live betting | 250 | 79 | /betting/ | |
| live casino | 250 | 65 | /casino/ | |
| online betting tanzania | 200 | 69 | / | primary (en, non-brand) |
| top 10 betting sites in tanzania | 200 | 0 | / | Capped: list claim |
| new betting sites in tanzania | 200 | 60 | / | Use only if DBbet is genuinely new in TZ (NEEDS VERIFICATION) |
| best betting app in tanzania | 200 | 59 | /app/ | AI Overview + PAA; capped |
| betting app in tanzania | 200 | 63 | /app/ | |
| both teams to score | 200 | 69 | /how-to-bet/bet-types/ | |
| handicap meaning in betting | 200 | 68 | /how-to-bet/bet-types/ | |
| aviator game online | 200 | 76 | /casino/aviator/ | |
| aviator bet tanzania download | 200 | NA | /casino/aviator/ | FAQ: there is no standalone Aviator app; warn about fake APKs |
| football betting | 200 | 69 | /betting/ | |

Other MID clusters, with their rows in the CSV:
- **NBC Premier League betting:** 7 rows of 70-90 each, KD NA, ~680 summed.
- **Esports:** esports betting 80, live esports betting 80, and others.
- **Bonuses:**
  - bonasi ya ukaribisho 150 (no SERP stored)
  - freebet tz 150 (KD 33) and free bet tanzania 150 (KD 56), both capped
  - welcome bonus 70
- **Casino:**
  - michezo ya kasino 150, sloti 150, online slots 150
  - live roulette/blackjack tanzania 100 each, kasino live 100
- **App:** app nzuri ya kubeti 90 (KD 23). Its SERP is the weakest read (forums, a DR 0 page), so it is a quick win despite the low volume.

## 7. LOW (504 rows): top 15 and what the tier holds

| Keyword | Vol | KD | Target page |
|---|---|---|---|
| tanzania betting apps | 100 | 67 | /app/ |
| betting bonus | 100 | 69 | /bonuses/ |
| crazy time | 100 | 66 | /casino/ |
| crazy time casino | 100 | 72 | /casino/ |
| online casino in tanzania | 100 | 72 | /casino/ |
| aviator app | 100 | 63 | /casino/aviator/ (FAQ: no standalone app) |
| aviator game download | 100 | 66 | /casino/aviator/ (FAQ) |
| aviator bet download / aviator bet tanzania app | 100 / 100 | NA | /casino/aviator/ (FAQ) |
| aviator game login | 100 | NA | /casino/aviator/ |
| what is handicap in betting | 100 | 67 | /how-to-bet/bet-types/ |
| 1x2 meaning in betting | 90 | NA | /how-to-bet/bet-types/ |
| betting site in tanzania | 90 | 69 | / |
| aviator bet app | 80 | 68 | /casino/aviator/ |
| what does handicap mean in betting | 80 | NA | /how-to-bet/bet-types/ |
| jinsi ya kushinda aviator | 60 | 3 | /casino/aviator/ (honest FAQ, no win promise) |

The LOW tier also holds:
- **Aviator questions:**
  - deposit and withdraw with M-Pesa ("how to deposit on aviator using mpesa");
  - provably fair, RTP, auto cash-out;
  - demo variants.
- **Payment long tail.** Every row is 0-10 or NA: m-pesa betting, airtel money betting, halopesa betting, tigo pesa betting, mixx by yas betting, and the unindexed Swahili deposit/withdraw seeds.
- **Tax:** kodi ya kubeti and betting tax tanzania (NA or 0-10).
- **Responsible gambling:** madhara ya kubeti 60, jinsi ya kuacha kubeti 40.
- **Long-tail variants** of crash games (aviatrix, space xy, aviamasters, crash royale) and of slots (sweet bonanza 1000, gates of olympus).

## 8. AVOID (2,493 rows), with reasons

| Category | Rows | Summed vol | Biggest examples | Reason |
|---|---|---|---|---|
| Competitor brands | 1,383 | ~8.27M | betpawa 1.8M, betpawa tz 1.1M, sportpesa 670K, betika 545K, kingbet 426K, pmbet 344K, gal sport betting 232K, betway tz 181K, wasafi bet 74K, sportpesa tz log in 15K | Navigational to a rival operator. We cannot satisfy the intent and we do not target rivals. Includes misspellings ("spoti pesa", "garsport", "bety", "slote pesa") and rival + game rows ("betika aviator", "888 aviator"). |
| Competitor navigational that looks generic | 5 | ~19.5K | sports bet 10K (SportyBet sitelinks), sport 9.2K (parent topic sportybet tz), sport betting app download apk 90 | The SERP or parent topic is a rival's brand query. |
| Piracy / streaming | 0 | 0 | none in the collected data | Category kept for future pulls. "bet.com" TV-network rows are under off-topic. |
| Daily tips / predictions | 168 | ~24.9K | mkeka wa leo 13K (KD 25; mkekawaleo.com, DR 14, holds 6 of the top 10), mikeka ya leo 2.7K, betting tips 1x2 1.0K, mkeka leo 900, utabiri wa mechi za leo 800, both teams to score today 450, betting codes for today 150 | Needs daily upkeep and sits on guaranteed-win framing that conflicts with responsible gambling. Winnable, but deliberately not targeted. |
| Fixtures / live scores (same reason) | 9 | ~9.2K | mechi za leo 6.2K, matokeo mubashara 1.5K, matokeo ya mechi za leo 1.0K | Needs a live data feed or daily updates. |
| Hack, predictor, guaranteed win | 161 | ~12.0K | aviator predictor 2.0K (SERP = AI Overview + softonic downloads), mikeka ya uhakika 1.8K, odds za uhakika leo 1.1K, uchawi wa kubeti 1.1K ("betting magic"), aviator predictor apk 600, aviator signal 150, dawa ya kubeti, siri ya kubet | Scam-prone apps. Aviator is provably fair, so promising wins is misleading. Covered only as a "do not use predictors" warning on the Aviator page. |
| Attracts minors | 13 | ~560 | game online 150, online game 100, free pc games 50, coin master free spins link 50, arcade games 40 | Free or casual games audience. |
| Off-topic | 245 | ~98K | tanzania 39K, premier league 21K, young africans 14K, pesa 3.4K, score 3.1K, sports 2.6K, Rayvanny song "mkeka umetiki" 700, kabati in english 600, mkeka wa mbao 150 (wooden mat), mkeka wa mawaziri (cabinet list), aviator sunglasses, toyota rush, debt ratio | No betting intent. |
| Telco / mobile-money utility | 102 | ~10.0K | airtel money 1.2K, makato ya airtel money 800, mpesa app 700, mpesa tariff 600, airtel money logo 500, airtel money menu 450, tigo pesa 400, halopesa mkopo 150 | Tariff, menu, logo, loan and agent-code lookups with no betting intent. |
| Unwinnable for years | 23 | ~281K | bet 241K (KD 83), game 20K (89), casino 4.9K (84), slot 2.9K (79), betting 1.8K (70), play 1.7K (84), casino online 1.3K (81), bet tz 1.1K (75), bet tanzania 1.0K (77), free bet 250 (84), roulette 250 (82), blackjack 200 (85), online casino 600 (89), casino games 600 (85), bonus 1.0K (68, ambiguous) | Generic head terms whose SERPs are dictionaries, Wikipedia, app stores (DR 90+) or the biggest operators. |
| Offer or product DBbet does not have | 28 | ~540 | jetx 150 (not in the DBbet lobby, excluded from wagering), no deposit bonus tanzania, bet ya bure, free bet on registration, free bet sign up offers, app ya kubet bure, maduka ya kubeti (betting shops) | Ranking would promise something false. |
| Other market / script | 215 | ~4.2K | south africa 3.2K, kenya premier league 600, aviator kenya rows, ~200 global free-spins rows (NZ/UK/CA/AU), Bengali brand rows | Not Tanzanian player demand. |
| Regulator / licensing | 19 | ~300 | michezo ya kubahatisha 150 (also the regulator's Swahili name), gaming board tanzania, bodi ya michezo ya kubahatisha, foreign betting sites tanzania, kampuni za kubeti za kirusi ("Russian betting companies") | DBbet is Curaçao-licensed and operates offshore. Pages should not be positioned around the local regulator or offshore status. |
| Affiliate / partner | 14 | ~450 | dbbet partners 150, db bet partners 100, dbbet affiliate 100 | Not players. Out of scope for this site. |
| Religious question | 3 | ~100 | kubeti ni dhambi 70, je kubeti ni dhambi 30, kubeti ni haramu 10 | An operator cannot answer credibly. Ray can override this and send them to /responsible-gaming/. |
| B2B | 13 | ~500 | live casino software 60, live casino api 40 | Not players. |
| Spam | 39 | ~770 | "sweet bonanza 🍭 sweetcasino.site" and similar | Emoji plus foreign casino domains. |
| Noise / ambiguous | 53 | ~2.8K | welcome 500, draw 300, bt 1.0K, d bet 100, tz bet 50, db (GSC 1 click) | No intent we can serve, or too ambiguous to target. |

## 9. Page map (each kept keyword maps to one page)

Title and H1 lines are **directions, not copy**. Swahili wording needs a native check. Bonus amounts in TZS are NEEDS VERIFICATION; the official pages showed SCR only.

| Page | Status | Rows B/H/M/L | Summed vol | Primary SW | Primary EN | Key secondaries |
|---|---|---|---|---|---|---|
| `/` Home | existing | 25/7/25/27 | 12,880 | dbbet (brand) + kubeti mtandaoni | dbbet (brand) + online betting tanzania | kampuni za kubeti tanzania 500, betting sites in tanzania 500, betting sites 600, online betting sites 200, all brand spellings |
| `/betting/` | existing | 0/9/36/44 | 24,560 | michezo ya kubeti (michezo ya kubet 250) | sports betting tanzania 4.3K | sports betting 3.5K, sport betting 6.6K, kubeti 350, live betting tanzania 400, mpira wa miguu 2.4K, kampuni za kubeti zenye cash out 150, NBC PL group ~680, esports group |
| `/casino/` | existing | 3/8/40/113 | 14,930 | kasino 1.9K | casino bet tanzania 2.1K | casino tz / tanzania casino online 500 each, kasino tanzania 600, chicken road 800, tower rush 800, live casino tanzania 300, online blackjack tanzania 200, sloti 150 |
| `/casino/aviator/` | **NEW (gap)** | 1/13/27/150 | 31,420 | kindege cha aviator 1.0K | aviator 18K | aviator game 1.0K, aviator bet tanzania 1.4K, aviator bet 800, kindege 800, play aviator 500, jinsi ya kucheza aviator 200, aviator demo, aviator free bet, FAQs |
| `/bonuses/` | existing | 2/4/6/23 | 1,900 | bonasi 350 | betting sites in tanzania with bonus 200 | betting sites with welcome bonus in tanzania 150, kampuni za kubeti zenye ofa 150, bonasi ya ukaribisho 150, freebet tz 150, casino bonus, free spins, cashback |
| `/promo-code/` | existing | 5/0/0/3 | 20 | msimbo wa promo dbbet (NA) | dbbet promo code (20; GSC position 45.5) | db bet promo code, msimbo wa promo, betting promo code tanzania |
| `/how-to-start/` | existing | 15/0/1/0 | 920 | jinsi ya kujisajili dbbet (NA) | dbbet registration 20 | jisajili 900, dbbet sign up, db bet login register online, dbbet jisajili |
| `/app/` | **NEW (gap)** | 50/1/13/38 | 3,220 | app za kubet tanzania 150 | dbbet app 150 | dbbet apk download 60, dbbet download 70, db bet app 80, dbbet ios, best betting app in tanzania 200, betting app in tanzania 200, app nzuri ya kubeti 90 |
| `/payment/` (slug TBD) | new in structure | 4/0/0/21 | ~20 | jinsi ya kuweka pesa dbbet (NA) | m-pesa betting (0-10) | jinsi ya kutoa pesa dbbet, airtel money / halopesa / tigo pesa / mixx by yas betting, m-pesa deposit bonus betting, bonasi za mpesa |
| `/how-to-bet/` | existing | 0/2/5/13 | 980 | jinsi ya kubeti 250 (+ namna ya kubeti 150) | how to bet on football (0-10) | jinsi ya kubeti mpira 100, mbinu za kubeti 60, jinsi ya kubeti mkeka 60, jinsi ya kubeti magoli 50 |
| `/how-to-bet/bet-types/` | **NEW (gap, optional)** | 0/0/5/63 | 2,060 | aina za bet / maana ya 1x2 | handicap in betting 600 | handicap meaning 200, both teams to score 200, double chance 150 (KD 14), 1x2 meaning 90 |
| Help: `/blog/dbbet-login-problems/` | existing | 20/0/0/0 | 360 | dbbet ingia | dbbet login 150 | db bet login 90, ddbet login 60, db bet tz login 40, dp bet login |
| Help: `/blog/dbbet-withdrawal-not-received/` | existing | 2/0/0/0 | NA | | dbbet withdrawal problem | dbbet withdrawal time |
| Help: `/blog/mobile-money-deposit-not-reflecting/` | existing | 1/0/0/0 | NA | | dbbet deposit problem | |
| Help hub (`/help/`, slug TBD; today `/blog/`) | existing | none | | navigational hub, no keyword of its own | | |
| `/contact/` | existing | 1 | | | db bet customer care number | |
| `/about/` | existing | 2 | | | is db bet legit, dbbet review | |
| `/betting-tax/` | existing | 0/0/0/5 | 0 | kodi ya kubeti | betting tax in tanzania | tax on betting winnings tanzania, kodi ya ushindi wa kubeti |
| `/responsible-gaming/` | existing | 0/0/0/4 | 130 | madhara ya kubeti | responsible gambling | jinsi ya kuacha kubeti, self exclusion |

Title and H1 directions:

**Home**
- SW: "DBbet Tanzania: kubeti mtandaoni (michezo, kasino, Aviator)". H1: "DBbet Tanzania, kampuni ya kubeti mtandaoni".
- EN: "DBbet Tanzania: online betting for sports, casino and Aviator".
- Take "Kubeti Michezo" out of the Home title (see 10.1).
- No "best/top" claims. Answer the "betting sites" intent with a factual "what to check" block: licence, M-Pesa, cash out, 24/7 live.

**/betting/**
- SW: "Michezo ya kubeti Tanzania: mpira wa miguu, Ligi Kuu NBC, live na esports". H1: "Kubeti michezo kwenye DBbet".
- EN: "Sports betting Tanzania: football, NBC Premier League, live betting and esports".

**/casino/**
- SW: "Kasino ya mtandaoni DBbet: sloti, michezo ya crash na kasino mbashara".
- EN: "Online casino Tanzania: slots, crash games and live casino".
- Drop "Aviator" from this title once the Aviator page exists, and link to it instead.

**/casino/aviator/**
- SW: "Kindege cha Aviator kwenye DBbet: jinsi ya kucheza, demo na Safari 60 za Jumatano".
- EN: "Aviator game Tanzania: how to play, demo and Wednesday free bets on DBbet".
- Add a predictor warning. No win promises.

**/bonuses/**
- SW: "Bonasi za DBbet Tanzania: bonasi ya ukaribisho 100%, Jumamosi na rejesho la hela".
- EN: "DBbet bonuses Tanzania: 100% welcome bonus, Saturday reload, 3% cashback".

**/promo-code/**
- SW: "Msimbo wa promo wa DBbet: wapi kuuweka na unafungua nini".
- EN: "DBbet promo code Tanzania: where to enter it".
- The current Swahili title says "Namba ya promo". DBbet's own form says "Msimbo wa promo".

**/how-to-start/**
- SW: "Jinsi ya kujisajili DBbet: jisajili kwa simu hatua kwa hatua".
- EN: "DBbet registration Tanzania: sign up and start".
- Keep only short APK and deposit summaries with links.

**/app/**
- SW: "Pakua app ya DBbet: APK ya Android na web app ya iPhone".
- EN: "DBbet app Tanzania: Android APK download and iPhone web app".
- iOS is a PWA, not an App Store app. The version number and file size are NEEDS VERIFICATION.

**/payment/**
- SW: "Kuweka na kutoa pesa DBbet: M-Pesa (+30%), Mixx by Yas, Airtel Money, HaloPesa".
- EN: "DBbet deposits and withdrawals in Tanzania".

**/how-to-bet/**
- SW: "Jinsi ya kubeti mpira Tanzania: mwongozo kwa anayeanza".
- EN: "How to bet on football in Tanzania: beginner's guide".

**/how-to-bet/bet-types/**
- SW: "Aina za bet: maana ya 1X2, handicap, GG, double chance, over/under".
- EN: "Betting markets explained: handicap, 1X2, both teams to score, double chance".

**Help posts, /betting-tax/, /about/, /responsible-gaming/:** keep the current angles. Make sure the brand + intent words above appear, for example "DBbet login (Ingia)".

## 10. Cannibalisation flags

1. **Home vs /betting/ (Swahili).** Both live titles lead with "Kubeti Michezo":
   - Home: "DBBet Tanzania — Kubeti Michezo & Kasino";
   - /betting/: "Kubeti Michezo DBBet Tanzania".

   Give "kubeti michezo / michezo ya kubeti" to /betting/ only. Home takes the brand plus "kubeti mtandaoni" and "kampuni za kubeti".
2. **Home vs /betting/ (English).** "online betting tanzania" and "betting sites" go to Home. "sports betting tanzania" and "online sports betting tanzania" go to /betting/. Keep the word "sports" off the Home title.
3. **Brand split across URLs.** The "dbbet" SERP shows five dbbettz.com /en/ URLs at positions 5-10, while the brand sits at position 13 in GSC. Make Home the one brand page, with the brand in the title and H1 and in internal anchors. Inner pages use brand + topic. Another domain, dbbet-tz.com, holds #1.
4. **/casino/ vs /casino/aviator/.** The current /casino/ title includes "Aviator". Every aviator* row, including "casino aviator" and "aviator casino game", goes to the Aviator page.
5. **/bonuses/ vs /promo-code/:**
   - "promo code" and "msimbo" go to /promo-code/;
   - "bonus", "bonasi" and "free bet" go to /bonuses/;
   - "dbbet sign up bonus" goes to /bonuses/.
6. **/bonuses/ vs /casino/aviator/.** Aviator free bets (the 60-flights promo) go to the Aviator page. The /bonuses/ card links there. Casino bonus terms stay on /bonuses/, not /casino/.
7. **/how-to-start/ vs /app/ vs /payment/ vs Help:**
   - registration goes to /how-to-start/;
   - app and APK go to /app/;
   - deposit and withdraw steps go to /payment/;
   - problems go to the Help posts.

   Today the /how-to-start/ title also says "Sakinisha App & Weka Pesa". Trim it after the split.
8. **/how-to-bet/ vs /how-to-bet/bet-types/.** The bet-type glossary moves to the child page. /how-to-bet/ keeps "jinsi ya kubeti".
9. **Swahili vs English versions.** In GSC, /en/ takes 409 of 456 clicks (28 days) and the Swahili / is not in the top 15 pages. No Swahili URL is in the "dbbet" top 10. The hreflang/canonical check is NEEDS VERIFICATION (URL Inspection of / vs /en/).

## 11. Gaps: demand with no page

| Demand | Summed vol | Today | Page justified? |
|---|---|---|---|
| Aviator (English + Swahili "kindege") | ~31.4K, 191 rows, 13 HIGH | A mention on /casino/ | **Yes: new /casino/aviator/.** DBbet has Aviator (/slots/game/141086, public demo) plus the Wednesday "60 flights" promo. This is the largest non-brand cluster, and the Swahili terms have KD 35-37. |
| DBbet app/APK + generic app | ~3.2K (brand ~730, generic ~2.5K) | Section of /how-to-start/; GSC app queries at positions 25-29 | **Yes: new /app/.** Brand app searches have no ranking page. App nzuri ya kubeti has the weakest SERP read. |
| Bet-type glossary (handicap, BTTS, 1X2, double chance) | ~2.1K | Part of /how-to-bet/ | **Yes, MID priority.** Child page /how-to-bet/bet-types/, or one long section if Ray prefers fewer pages. Handicap is KD 62-71, so it is slow. |
| Crash games other than Aviator (chicken road, tower rush, aviatrix) | ~3.2K | /casino/ | Not yet. Start as sections. Split into their own pages only if the sections earn impressions. |
| Live casino (incl. crazy time, roulette, blackjack) | ~2.8K | /casino/ | Not yet. Section first. |
| Live betting | ~1.2K | /betting/ | Not yet. Section first. |
| NBC Premier League betting | ~680 | /betting/ | Not yet. Section first; the demand is seasonal. |
| "Betting sites / kampuni za kubeti" incl. best/top lists | ~7.1K | Home | **No list page.** It would mean ranking or naming rivals and making "best" claims. Home targets the forms without superlatives. |
| Payment | ~20 | New Payment page | Yes for conversion, **not** for search. Betting + mobile-money queries are 0-10 in Ahrefs. |
| Tips and predictions (mkeka wa leo etc.) | ~25K | none | **No** (AVOID). |

## 12. GSC vs Ahrefs: where they disagree

1. **Ahrefs undercounts the misspellings people actually use:**
   - bdb bet: Ahrefs 10/mo vs 300 clicks and 590 impressions in GSC over 28 days;
   - dbb bet: 0-10 vs 133 impressions over 3 months;
   - bdbbet: 0-10 vs 93;
   - dp bet login: 10 vs 201;
   - dbbt bet: not indexed vs 132;
   - dbbet online: 0-10 vs 114;
   - doublebet and dbbet games: not in Ahrefs vs 27 and 36 impressions over 28 days.
2. **Ahrefs overcounts lookalike brands:**
   - dbet 700/mo, but its global volume is mostly Vietnam and Sweden; GSC shows 86 impressions at position 14;
   - ddbet 250/mo, but 73% of its global volume is in Brazil; GSC shows 29 impressions.
3. **GSC understates where we rank on page 2:**
   - dbbet: 3.6K/mo in Ahrefs, but only 424 GSC impressions in 28 days, because the site sits at position 13.2;
   - db bet: 600/mo vs 127 impressions at position 12.9;
   - dbbet promo code: 20/mo vs 64 impressions at position 45.5.

   This is a ranking problem, not low demand.
4. **db bet tz drops over time.** It has 5,140 impressions and 123 clicks over 3 months, but only 466 impressions and 3 clicks in the last 28 days. Most of its activity came before 20 Oct. Whether demand or visibility fell is NEEDS VERIFICATION.
5. **Non-brand: the two sources agree.** GSC has 0 non-brand queries in the top 30 for either period. Ahrefs shows dbbettz.com in none of the 16 non-brand SERPs read; it appears only in the "dbbet" SERP.
6. **Swahili long tail:**
   - 43 seeds are not indexed in Ahrefs: 13 G1, 6 G2, 2 G3, 21 G4, plus "kubeti app";
   - jinsi ya kujisajili dbbet, msimbo wa promo dbbet and the Swahili deposit/withdraw seeds have no GSC rows in the top 30 either.

   Treat their demand as unknown, not zero. Check Google autocomplete and the GSC rows beyond the top 30.

## 13. Data limits (NOT READ / estimates)

- **Ahrefs Tanzania volumes are rounded estimates.** They are a floor for Swahili. KD and traffic potential exist only where Ahrefs had a SERP stored: 123 of the 837 kept rows have a KD. Paid SERP updates were not used.
- **Ahrefs builds ideas reports from the top 10 seeds of each list only.**
  - The agents added extra batches.
  - G3 Related, Suggestions and Questions still cover only 10 seeds.
  - G2 batches B and C got Matching terms only.
  - G5 has 10 seeds with overview metrics only.
- **Row caps.** Many report rows were never read:
  - G3 matching: 400 of 15,533;
  - G4 run A matching: 400 of 2,729 (259 transcribed);
  - G1 suggestions: 150 of 2,438;
  - G5 matching: 400 of 4,861;
  - G2 related: 150 of 1,071.

  The rows not read sit at low volume (mostly 0-10).
- **G4 did not transcribe** about 139 global free-spins rows and about 51 telco rows. They would be AVOID anyway.
- **SERP snapshots** are dated 28 Jul to 19 Nov 2026; the oldest are "casino" (28 Jul) and "bet" (5 Aug). Ahrefs warns of SERP inconsistencies (22 Oct banner).
  - G5 SERPs were skipped by design.
  - For dbet, db bet, db bet tz, ddbet, "betting sites in tanzania with bonus" and "bonasi ya ukaribisho", Ahrefs has no stored SERP.
- **Other Ahrefs columns:** the GR 12M (growth) column was blurred, so seasonality is unknown. The lang tags are a word-list heuristic, not a native check. Ahrefs paging can skip rows on ties (G5).
- **GSC:**
  - only the top 30 queries were read (rows 31-144 not read);
  - the query table is all countries;
  - anonymised queries are excluded (71 of 456 clicks in 28 days);
  - data runs to 16 Nov 2026, and the 3-month window starts about 19 Aug.
- **Official facts:**
  - bonus amounts were seen in SCR (Seychelles view), not TZS;
  - Tanzania payment methods, limits and times are not public;
  - JetX is not in the lobby;
  - the "Daily deposit bonus" is not live;
  - the Swahili wagering text (3x) conflicts with English (5x).
- **Summed volumes** in this file are derived relative sizes, not traffic forecasts.

## 14. Open checks (NEEDS VERIFICATION)

1. Who runs dbbet-tz.com (#1 for "dbbet")?
2. Is "doublebet" DBbet? Is "bd bet login" DBbet or "Bangladesh bet"?
3. "aviator bet tanzania" (1.4K): is part of it navigational to a separate "Aviator bet" app? Read the SERP before writing the Aviator page.
4. Is DBbet "new" in Tanzania? This decides whether "new betting sites in tanzania" can be used.
5. TZS bonus amounts, Tanzania payment limits and times, and whether every promotion (including Aviator Wednesday) is open to Tanzanian accounts.
6. Read the SERPs for kampuni za kubeti tanzania, live casino tanzania, chicken road and tower rush before final page copy.
7. Get Google autocomplete for the unindexed Swahili brand seeds: jinsi ya kujisajili dbbet, msimbo wa promo dbbet, dbbet ingia, jinsi ya kuweka/kutoa pesa dbbet.
8. URL Inspection of / vs /en/ (the Swahili homepage gets no visible clicks).
